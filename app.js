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
const speciesData = {
    birds: [
        {
            id: 'golden-eagle',
            name_en: 'Golden Eagle',
            name_ru: 'Золотой орёл',
            latin_name: 'Aquila chrysaetos',
            category: 'european',
            description_en: 'A large bird of prey with dark brown plumage and golden crown. Wingspan up to 2.3m. Found in mountains and open territories.',
            description_ru: 'Крупная хищная птица с тёмно-коричневым оперением и золотистой макушкой. Размах крыльев до 2,3м. Обитает в горах и открытых территориях.',
            image: '🦅'
        },
        {
            id: 'barn-owl',
            name_en: 'Barn Owl',
            name_ru: 'Сипуха',
            latin_name: 'Tyto alba',
            category: 'european',
            description_en: 'Distinctive heart-shaped facial disc. Hunts small rodents at night. Common in agricultural areas across Europe.',
            description_ru: 'Отличается сердцевидным лицевым диском. Охотится на мелких грызунов ночью. Распространена в сельскохозяйственных районах Европы.',
            image: '🦉'
        },
        {
            id: 'great-tit',
            name_en: 'Great Tit',
            name_ru: 'Большая синица',
            latin_name: 'Parus major',
            category: 'european',
            description_en: 'Small songbird with black and white head, white cheeks. Very common in forests and gardens. Excellent acrobatic abilities.',
            description_ru: 'Маленькая певчая птица с чёрной и белой головой, белыми щёками. Очень распространена в лесах и садах. Отличные акробатические способности.',
            image: '🐦'
        },
        {
            id: 'scarlet-macaw',
            name_en: 'Scarlet Macaw',
            name_ru: 'Алый ара',
            latin_name: 'Ara macao',
            category: 'tropical',
            description_en: 'Brilliant red plumage with blue and yellow wings. One of the largest flying parrot species. Lives in tropical forests of Central and South America.',
            description_ru: 'Ослепительно красное оперение с голубыми и жёлтыми крыльями. Один из самых крупных видов летающих попугаев. Живёт в тропических лесах Центральной и Южной Америки.',
            image: '🦜'
        },
        {
            id: 'quetzal',
            name_en: 'Resplendent Quetzal',
            name_ru: 'Кетцаль',
            latin_name: 'Pharomachrus mocinno',
            category: 'tropical',
            description_en: 'Legendary bird from Aztec mythology. Iridescent green plumage, long tail feathers in males. Sacred symbol of Central America.',
            description_ru: 'Легендарная птица из ацтекской мифологии. Переливающееся зелёное оперение, длинные хвостовые перья у самцов. Священный символ Центральной Америки.',
            image: '✨'
        },
        {
            id: 'paradise-bird',
            name_en: 'Bird of Paradise',
            name_ru: 'Птица рая',
            latin_name: 'Paradisaea apoda',
            category: 'tropical',
            description_en: 'Extraordinary colorful birds from rainforests of New Guinea. Males have elaborate plumage and complex courtship displays.',
            description_ru: 'Необычайно красочные птицы из тропических лесов Новой Гвинеи. Самцы имеют сложное оперение и сложные брачные ритуалы.',
            image: '🌈'
        }
    ],
    fish: [
        {
            id: 'pike',
            name_en: 'Pike',
            name_ru: 'Щука',
            latin_name: 'Esox lucius',
            category: 'river',
            description_en: 'Large freshwater predator with long body. Green-gray coloring. Excellent hunter found in rivers, lakes, and ponds.',
            description_ru: 'Крупный пресноводный хищник с удлиненным телом. Зелено-серая окраска. Отличный охотник, встречается в реках, озёрах и прудах.',
            image: '🐠'
        },
        {
            id: 'carp',
            name_en: 'Common Carp',
            name_ru: 'Карп обыкновенный',
            latin_name: 'Cyprinus carpio',
            category: 'river',
            description_en: 'Large cyprinid fish. Gold or silver colored. Slow-moving, bottom-feeding fish. Common in European rivers and lakes.',
            description_ru: 'Крупная рыба семейства карповых. Золотистого или серебристого цвета. Медленно движущаяся донная рыба. Распространена в европейских реках и озёрах.',
            image: '🐟'
        },
        {
            id: 'trout',
            name_en: 'Rainbow Trout',
            name_ru: 'Радужная форель',
            latin_name: 'Oncorhynchus mykiss',
            category: 'river',
            description_en: 'Colorful river fish with characteristic red stripe along the body. Prefers cold, clean water with high oxygen content.',
            description_ru: 'Красочная речная рыба с характерной красной полосой вдоль тела. Предпочитает холодную, чистую воду с высоким содержанием кислорода.',
            image: '🌈'
        },
        {
            id: 'sea-bream',
            name_en: 'Sea Bream',
            name_ru: 'Морской лещ',
            latin_name: 'Spondyliosoma cantharus',
            category: 'mediterranean',
            description_en: 'Silvery fish with blue-gray back. Common in Mediterranean and Atlantic waters. Important food fish.',
            description_ru: 'Серебристая рыба с голубовато-серой спиной. Распространена в Средиземноморском и Атлантическом морях. Важная промысловая рыба.',
            image: '🐟'
        },
        {
            id: 'grouper',
            name_en: 'Mediterranean Grouper',
            name_ru: 'Средиземноморский груп',
            latin_name: 'Epinephelus marginatus',
            category: 'mediterranean',
            description_en: 'Large predatory fish. Brown-reddish coloring. Lives among rocky underwater formations. Slow-growing but long-lived.',
            description_ru: 'Крупная хищная рыба. Коричнево-красная окраска. Живет среди скалистых подводных образований. Медленно растущая, но долгоживущая.',
            image: '🐢'
        },
        {
            id: 'clownfish',
            name_en: 'Clownfish',
            name_ru: 'Рыба-клоун',
            latin_name: 'Amphiprion ocellaris',
            category: 'tropical',
            description_en: 'Bright orange and white striped fish. Lives in symbiosis with sea anemones. Famous from the movie Finding Nemo.',
            description_ru: 'Ярко-оранжевая рыба с белыми полосами. Живет в симбиозе с морскими анемонами. Известна из фильма "В поисках Немо".',
            image: '🐠'
        },
        {
            id: 'blue-tang',
            name_en: 'Blue Tang',
            name_ru: 'Голубая танг',
            latin_name: 'Paracanthurus hepatus',
            category: 'tropical',
            description_en: 'Bright blue reef fish. Herbivorous, feeding on algae. Found in coral reefs of the Indo-Pacific region.',
            description_ru: 'Ярко-голубая коралловая рыба. Травоядная, питается водорослями. Встречается в коралловых рифах Индо-Тихоокеанского региона.',
            image: '🐟'
        },
        {
            id: 'lionfish',
            name_en: 'Lionfish',
            name_ru: 'Крылатка',
            latin_name: 'Pterois volitans',
            category: 'tropical',
            description_en: 'Venomous fish with elaborate fins that resemble a lion\'s mane. Beautiful but dangerous predator of the coral reef.',
            description_ru: 'Ядовитая рыба с перепончатыми плавниками, напоминающими львиную гриву. Красивый, но опасный хищник коралловых рифов.',
            image: '👑'
        }
    ]
};

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
    renderSpeciesGrid();
    updateSpeciesSelect();
    setTodayDate();
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
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = e.target.parentElement;
            parent.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.getAttribute('data-category');
            renderSpeciesGrid();
        });
    });

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

    if (tab === 'sightings') {
        renderSightings();
    } else if (tab === 'stats') {
        renderStats();
    }

    // Reset categories
    const parent = document.querySelector(`.tab-content.active .categories`);
    if (parent) {
        parent.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        parent.querySelector('[data-category="all"]').classList.add('active');
        currentCategory = 'all';
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
            <div class="species-image" style="background-image: url('./assets/images/${species.id}.jpg'); background-size: cover; background-position: center;" onerror="this.style.backgroundImage='linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)'" title="Loading image for ${species.id}">
                <span class="image-emoji">${species.image}</span>
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
    
    // Try to load image with fallback
    const img = new Image();
    img.onload = () => {
        detailImage.style.backgroundImage = `url('${imageUrl}')`;
    };
    img.onerror = () => {
        detailImage.style.backgroundImage = `linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)`;
        detailImage.textContent = species.image;
        detailImage.style.fontSize = '6rem';
        detailImage.style.display = 'flex';
        detailImage.style.alignItems = 'center';
        detailImage.style.justifyContent = 'center';
    };
    img.src = imageUrl;
    
    if (img.complete && img.naturalHeight !== 0) {
        detailImage.style.backgroundImage = `url('${imageUrl}')`;
    }
    
    const nameElement = document.getElementById('detail-name');
    nameElement.innerHTML = `${getSpeciesName(species)}<br><span class="detail-latin">${species.latin_name}</span>`;
    document.getElementById('detail-category').textContent = `${t(type)}: ${t(species.category)}`;
    document.getElementById('detail-description').textContent = getSpeciesDescription(species);

    document.getElementById('detail-modal').classList.add('active');
}

function closeModal() {
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
