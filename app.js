// Import species data
import { birds } from './birds-data.js';
import { fish } from './fish-data.js';

// Localization data
const i18n = {
    en: {
        app_title: '🦅 🐟 Tracker',
        birds: '🦅 Birds',
        fish: '🐟 Fish',
        sightings: '📝 Sightings',
        stats: '📊 Stats',
        all_birds: 'All Birds',
        all_fish: 'All Fish',
        european: 'European',
        tropical: 'Tropical',
        river: 'River',
        mediterranean: 'Mediterranean',
        log_sighting: 'Log a Sighting',
        select_species: 'Select Species:',
        select_date: 'Date:',
        notes: 'Notes:',
        add_sighting: 'Add Sighting',
        recent_sightings: 'Recent Sightings',
        mark_seen_today: 'Mark as Seen Today',
        by_type: 'By Type',
        sightings_by_date: 'Sightings by Date',
        total_sightings: 'Total Sightings',
        unique_species: 'Unique Species',
        clear_all_data: 'Clear All Data',
        delete: 'Delete',
        no_sightings: 'No sightings yet. Start tracking!',
        confirm_delete: 'Are you sure?',
    },
    ru: {
        app_title: '🦅 🐟 Трекер',
        birds: '🦅 Птицы',
        fish: '🐟 Рыбы',
        sightings: '📝 Наблюдения',
        stats: '📊 Статистика',
        all_birds: 'Все птицы',
        all_fish: 'Все рыбы',
        european: 'Европейские',
        tropical: 'Тропические',
        river: 'Речные',
        mediterranean: 'Средиземноморские',
        log_sighting: 'Добавить наблюдение',
        select_species: 'Выберите вид:',
        select_date: 'Дата:',
        notes: 'Заметки:',
        add_sighting: 'Добавить наблюдение',
        recent_sightings: 'Последние наблюдения',
        mark_seen_today: 'Отметить как виденное сегодня',
        by_type: 'По типам',
        sightings_by_date: 'Наблюдения по датам',
        total_sightings: 'Всего наблюдений',
        unique_species: 'Уникальных видов',
        clear_all_data: 'Очистить все данные',
        delete: 'Удалить',
        no_sightings: 'Наблюдений нет. Начните отслеживание!',
        confirm_delete: 'Вы уверены?',
    }
};

// Species Database
const speciesData = { birds, fish };

// Application State
let currentLanguage = 'en';
let currentTab = 'birds';
let currentCategory = 'all';
let sightings = JSON.parse(localStorage.getItem('sightings')) || [];
let selectedSpecies = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    setupEventListeners();
    setTodayDate();
    
    // Render initial content
    currentCategory = 'all';
    renderSpeciesGrid();
    updateSpeciesSelect();
    renderSightings();
});

// Language Management
function initLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    currentLanguage = savedLanguage;
    document.getElementById('language-select').value = currentLanguage;
    applyLanguage();
}

function applyLanguage() {
    document.documentElement.lang = currentLanguage;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLanguage][key]) {
            if (el.tagName === 'INPUT' && el.type === 'text') {
                el.placeholder = i18n[currentLanguage][key];
            } else {
                el.textContent = i18n[currentLanguage][key];
            }
        }
    });
}

function t(key) {
    return i18n[currentLanguage][key] || key;
}

function getSpeciesName(species) {
    const key = currentLanguage === 'ru' ? 'name_ru' : 'name_en';
    return species[key];
}

function getSpeciesDescription(species) {
    const key = currentLanguage === 'ru' ? 'description_ru' : 'description_en';
    return species[key];
}

// Event Listeners
function setupEventListeners() {
    // Language switcher
    document.getElementById('language-select').addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        localStorage.setItem('language', currentLanguage);
        applyLanguage();
        renderSpeciesGrid();
        updateSpeciesSelect();
        renderSightings();
        renderStats();
    });

    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        document.getElementById('theme-toggle').textContent = isDarkMode ? '☀️' : '🌙';
    });

    // Tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.getAttribute('data-tab'));
        });
    });

    // Category buttons
    const bindCategoryButtons = () => {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const parent = e.target.parentElement;
                parent.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentCategory = e.target.getAttribute('data-category');
                renderSpeciesGrid();
            });
        });
    };
    
    bindCategoryButtons();

    // Add sighting
    document.getElementById('add-sighting-btn').addEventListener('click', addSighting);

    // Species select for sightings
    document.getElementById('species-select').addEventListener('change', (e) => {
        selectedSpecies = e.target.value;
    });

    // Clear all data
    document.getElementById('clear-all-btn').addEventListener('click', () => {
        if (confirm(t('confirm_delete'))) {
            sightings = [];
            localStorage.removeItem('sightings');
            renderSightings();
            renderStats();
            alert('Data cleared!');
        }
    });

    // Modal close
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('detail-modal').addEventListener('click', (e) => {
        if (e.target.id === 'detail-modal') closeModal();
    });

    // Quick sighting button
    document.getElementById('quick-sighting-btn').addEventListener('click', () => {
        if (selectedSpecies) {
            const today = new Date().toISOString().split('T')[0];
            addSightingEntry(selectedSpecies, today, '');
            closeModal();
            switchTab('sightings');
        }
    });
}

// Tab Management
function switchTab(tab) {
    currentTab = tab;
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tab) {
            btn.classList.add('active');
        }
    });

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tab}-tab`).classList.add('active');

    // Reset category to 'all' when switching tabs
    currentCategory = 'all';
    const parent = document.querySelector(`.tab-content.active .categories`);
    if (parent) {
        parent.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        parent.querySelector('[data-category="all"]').classList.add('active');
    }

    if (tab === 'birds' || tab === 'fish') {
        renderSpeciesGrid();
    } else if (tab === 'sightings') {
        renderSightings();
    } else if (tab === 'stats') {
        renderStats();
    }
}

// Species Grid Rendering
function renderSpeciesGrid() {
    const type = currentTab;
    const grid = document.getElementById(`${type}-grid`);
    const species = speciesData[type];

    let filtered = species;
    if (currentCategory !== 'all') {
        filtered = species.filter(s => s.category === currentCategory);
    }

    // Sort alphabetically by species name in current language
    filtered.sort((a, b) => {
        const nameA = getSpeciesName(a).toLowerCase();
        const nameB = getSpeciesName(b).toLowerCase();
        return nameA.localeCompare(nameB, currentLanguage === 'ru' ? 'ru' : 'en');
    });

    grid.innerHTML = filtered.map(species => `
        <div class="species-card" onclick="showDetail('${species.id}', '${type}')">
            <div class="species-image" style="background-image: url('./assets/images/${species.id}.jpg'); background-size: cover; background-position: center;" title="Loading image for ${species.id}">
            </div>
            <div class="species-info">
                <div class="species-name">${getSpeciesName(species)}</div>
                <div class="species-category">${t(species.category)}</div>
            </div>
        </div>
    `).join('');
}

// Detail Modal
function showDetail(speciesId, type) {
    const species = speciesData[type].find(s => s.id === speciesId);
    if (!species) return;

    selectedSpecies = speciesId;

    const detailImage = document.getElementById('detail-image');
    const imageUrl = `./assets/images/${species.id}.jpg`;

    // Set image src directly
    detailImage.src = imageUrl;
    detailImage.alt = getSpeciesName(species);
    
    // Handle image load error with fallback
    detailImage.onerror = () => {
        // If image fails, hide it and show gradient background instead
        detailImage.style.display = 'none';
        const detailBody = document.querySelector('.detail-body');
        detailBody.style.background = 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)';
        detailBody.style.minHeight = '250px';
    };
    
    detailImage.onload = () => {
        detailImage.style.display = 'block';
    };

    const nameElement = document.getElementById('detail-name');
    nameElement.innerHTML = `${getSpeciesName(species)}<br><span class="detail-latin">${species.latin_name}</span>`;
    document.getElementById('detail-category').textContent = `${t(type)}: ${t(species.category)}`;
    document.getElementById('detail-description').textContent = getSpeciesDescription(species);

    document.getElementById('detail-modal').classList.add('active');
}

function closeModal() {
    const detailImage = document.getElementById('detail-image');
    const detailBody = document.querySelector('.detail-body');
    
    // Reset styles
    detailImage.style.display = 'block';
    detailImage.src = '';
    detailBody.style.background = '';
    detailBody.style.minHeight = '';
    
    document.getElementById('detail-modal').classList.remove('active');
}

// Sightings Management
function updateSpeciesSelect() {
    const select = document.getElementById('species-select');
    const currentValue = select.value;

    const allSpecies = [
        ...speciesData.birds.map(b => ({ id: b.id, name: getSpeciesName(b), type: 'bird' })),
        ...speciesData.fish.map(f => ({ id: f.id, name: getSpeciesName(f), type: 'fish' }))
    ].sort((a, b) => a.name.localeCompare(b.name, currentLanguage === 'ru' ? 'ru' : 'en'));

    select.innerHTML = '<option value="">-- ' + t('select_species') + ' --</option>' +
        allSpecies.map(s => `<option value="${s.id}">${s.name}</option>`).join('');

    if (currentValue) select.value = currentValue;
}

function setTodayDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('sighting-date').value = today;
}

function addSighting() {
    const speciesId = document.getElementById('species-select').value;
    const date = document.getElementById('sighting-date').value;
    const notes = document.getElementById('sighting-notes').value;

    if (!speciesId) {
        alert('Please select a species');
        return;
    }

    if (!date) {
        alert('Please select a date');
        return;
    }

    addSightingEntry(speciesId, date, notes);
    
    // Clear form
    document.getElementById('species-select').value = '';
    setTodayDate();
    document.getElementById('sighting-notes').value = '';
    selectedSpecies = null;

    renderSightings();
    renderStats();
}

function addSightingEntry(speciesId, date, notes) {
    const sighting = {
        id: Date.now().toString(),
        speciesId,
        date,
        notes,
        timestamp: new Date().toISOString()
    };
    sightings.unshift(sighting);
    localStorage.setItem('sightings', JSON.stringify(sightings));
}

// Sightings Display
function renderSightings() {
    const container = document.getElementById('sightings-display');

    if (sightings.length === 0) {
        container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📝</div><p>${t('no_sightings')}</p></div>`;
        return;
    }

    const sortedSightings = [...sightings].sort((a, b) => new Date(b.date) - new Date(a.date));

    container.innerHTML = sortedSightings.map(sighting => {
        const species = findSpecies(sighting.speciesId);
        if (!species) return '';

        const dateObj = new Date(sighting.date + 'T00:00:00');
        const dateStr = dateObj.toLocaleDateString(currentLanguage === 'ru' ? 'ru-RU' : 'en-US');

        return `
            <div class="sighting-item">
                <div class="sighting-content">
                    <div class="sighting-species">${species.image} ${getSpeciesName(species)}</div>
                    <div class="sighting-date">${dateStr}</div>
                    ${sighting.notes ? `<div class="sighting-notes">"${sighting.notes}"</div>` : ''}
                </div>
                <button class="sighting-delete" onclick="deleteSighting('${sighting.id}')">×</button>
            </div>
        `;
    }).join('');
}

function deleteSighting(id) {
    sightings = sightings.filter(s => s.id !== id);
    localStorage.setItem('sightings', JSON.stringify(sightings));
    renderSightings();
    renderStats();
}

// Helper function to find species
function findSpecies(speciesId) {
    const inBirds = speciesData.birds.find(s => s.id === speciesId);
    if (inBirds) return inBirds;
    return speciesData.fish.find(s => s.id === speciesId);
}

// Statistics
function renderStats() {
    // Total sightings
    document.getElementById('total-sightings').textContent = sightings.length;

    // Unique species
    const uniqueSpecies = new Set(sightings.map(s => s.speciesId)).size;
    document.getElementById('unique-species').textContent = uniqueSpecies;

    // By type breakdown
    const byType = {
        birds: 0,
        fish: 0
    };

    sightings.forEach(sighting => {
        const species = findSpecies(sighting.speciesId);
        if (speciesData.birds.find(b => b.id === sighting.speciesId)) {
            byType.birds++;
        } else {
            byType.fish++;
        }
    });

    const typeContainer = document.getElementById('stats-by-type');
    typeContainer.innerHTML = `
        <div class="breakdown-item">
            <span class="breakdown-type">🦅 ${t('birds')}</span>
            <span class="breakdown-count">${byType.birds}</span>
        </div>
        <div class="breakdown-item">
            <span class="breakdown-type">🐟 ${t('fish')}</span>
            <span class="breakdown-count">${byType.fish}</span>
        </div>
    `;

    // Calendar view
    const sightingsByDate = {};
    sightings.forEach(s => {
        sightingsByDate[s.date] = (sightingsByDate[s.date] || 0) + 1;
    });

    const calendarContainer = document.getElementById('stats-calendar');
    const monthGrid = generateCalendarGrid(sightingsByDate);
    
    const calendarHTML = `
        <div class="calendar-grid">
            ${Object.entries(monthGrid).map(([date, count]) => `
                <div class="calendar-day ${count > 0 ? 'has-sightings' : ''}" title="${date}: ${count} sightings">
                    ${new Date(date + 'T00:00:00').getDate()}
                </div>
            `).join('')}
        </div>
    `;
    calendarContainer.innerHTML = calendarHTML;
}

function generateCalendarGrid(sightingsByDate) {
    const today = new Date();
    const grid = {};

    for (let i = 29; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        grid[dateStr] = sightingsByDate[dateStr] || 0;
    }

    return grid;
}

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-toggle').textContent = '☀️';
}
