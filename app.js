// Species data paths
const speciesImagePaths = {
    'golden-eagle': 'birds-european/golden-eagle.jpg',
    'barn-owl': 'birds-european/barn-owl.jpg',
    'great-tit': 'birds-european/great-tit.jpg',
    'blue-tit': 'birds-european/blue-tit.jpg',
    'coal-tit': 'birds-european/coal-tit.jpg',
    'crested-tit': 'birds-european/crested-tit.jpg',
    'marsh-tit': 'birds-european/marsh-tit.jpg',
    'willow-tit': 'birds-european/willow-tit.jpg',
    'bullfinch': 'birds-european/bullfinch.jpg',
    'gray-headed-bullfinch': 'birds-european/gray-headed-bullfinch.jpg',
    'azores-bullfinch': 'birds-european/azores-bullfinch.jpg',
    'kingfisher': 'birds-european/kingfisher.jpg',
    'woodpecker': 'birds-european/woodpecker.jpg',
    'heron': 'birds-european/heron.jpg',
    'swan': 'birds-european/swan.jpg',
    'hawk': 'birds-european/hawk.jpg',
    'scarlet-macaw': 'birds-tropical/scarlet-macaw.jpg',
    'quetzal': 'birds-tropical/quetzal.jpg',
    'paradise-bird': 'birds-tropical/paradise-bird.jpg',
    'hummingbird': 'birds-tropical/hummingbird.jpg',
    'toucan': 'birds-tropical/toucan.jpg',
    'flamingo': 'birds-tropical/flamingo.jpg',
    'pelican': 'birds-tropical/pelican.jpg',
    'penguin': 'birds-tropical/penguin.jpg',
    'pike': 'fish-river/pike.jpg',
    'carp': 'fish-river/carp.jpg',
    'trout': 'fish-river/trout.jpg',
    'salmon': 'fish-river/salmon.jpg',
    'catfish': 'fish-river/catfish.jpg',
    'perch': 'fish-river/perch.jpg',
    'roach': 'fish-river/roach.jpg',
    'bream': 'fish-river/bream.jpg',
    'zander': 'fish-river/zander.jpg',
    'chub': 'fish-river/chub.jpg',
    'dace': 'fish-river/dace.jpg',
    'ide': 'fish-river/ide.jpg',
    'barbel': 'fish-river/barbel.jpg',
    'tench': 'fish-river/tench.jpg',
    'grayling': 'fish-river/grayling.jpg',
    'whitefish': 'fish-river/whitefish.jpg',
    'burbot': 'fish-river/burbot.jpg',
    'gudgeon': 'fish-river/gudgeon.jpg',
    'bleak': 'fish-river/bleak.jpg',
    'minnow': 'fish-river/minnow.jpg',
    'stone-loach': 'fish-river/stone-loach.jpg',
    'spined-loach': 'fish-river/spined-loach.jpg',
    'weatherfish': 'fish-river/weatherfish.jpg',
    'stickleback': 'fish-river/stickleback.jpg',
    'bullhead': 'fish-river/bullhead.jpg',
    'lamprey': 'fish-river/lamprey.jpg',
    'brook-lamprey': 'fish-river/brook-lamprey.jpg',
    'smelt': 'fish-river/smelt.jpg',
    'vendace': 'fish-river/vendace.jpg',
    'peled': 'fish-river/peled.jpg',
    'muksun': 'fish-river/muksun.jpg',
    'nelma': 'fish-river/nelma.jpg',
    'omul': 'fish-river/omul.jpg',
    'taimen': 'fish-river/taimen.jpg',
    'lenok': 'fish-river/lenok.jpg',
    'char': 'fish-river/char.jpg',
    'brook-trout': 'fish-river/brook-trout.jpg',
    'brown-trout': 'fish-river/brown-trout.jpg',
    'sea-trout': 'fish-river/sea-trout.jpg',
    'asp': 'fish-river/asp.jpg',
    'silver-bream': 'fish-river/silver-bream.jpg',
    'white-eye': 'fish-river/white-eye.jpg',
    'blue-bream': 'fish-river/blue-bream.jpg',
    'vimba': 'fish-river/vimba.jpg',
    'orfe': 'fish-river/orfe.jpg',
    'rudd': 'fish-river/rudd.jpg',
    'crucian': 'fish-river/crucian.jpg',
    'grass-carp': 'fish-river/grass-carp.jpg',
    'silver-carp': 'fish-river/silver-carp.jpg',
    'bighead-carp': 'fish-river/bighead-carp.jpg',
    'sea-bream': 'fish-mediterranean/sea-bream.jpg',
    'grouper': 'fish-mediterranean/grouper.jpg',
    'mackerel': 'fish-mediterranean/mackerel.jpg',
    'swordfish': 'fish-mediterranean/swordfish.jpg',
    'octopus': 'fish-mediterranean/octopus.jpg',
    'cuttlefish': 'fish-mediterranean/cuttlefish.jpg',
    'red-mullet': 'fish-mediterranean/red-mullet.jpg',
    'anchovy': 'fish-mediterranean/anchovy.jpg',
    'sardine': 'fish-mediterranean/sardine.jpg',
    'turbot': 'fish-mediterranean/turbot.jpg',
    'monkfish': 'fish-mediterranean/monkfish.jpg',
    'wreckfish': 'fish-mediterranean/wreckfish.jpg',
    'amberjack': 'fish-mediterranean/amberjack.jpg',
    'triggerfish': 'fish-mediterranean/triggerfish.jpg',
    'clownfish': 'fish-tropical/clownfish.jpg',
    'blue-tang': 'fish-tropical/blue-tang.jpg',
    'lionfish': 'fish-tropical/lionfish.jpg',
    'moray-eel': 'fish-tropical/moray-eel.jpg',
    'angelfish': 'fish-tropical/freshwaterangelfish.jpg',
    'barracuda': 'fish-tropical/barracuda.jpg',
    'stingray': 'fish-tropical/stingray.jpg',
    'seahorse': 'fish-tropical/seahorse.jpg'
};

// Get image path for species
function getImagePath(speciesId, category) {
    // Check explicit mapping first
    if (speciesImagePaths[speciesId]) {
        return `./assets/images/${speciesImagePaths[speciesId]}`;
    }
    
    // Build path based on category
    if (category === 'european') {
        return `./assets/images/birds-european/${speciesId}.jpg`;
    } else if (category === 'tropical' && speciesId.includes('bird') || speciesId === 'hummingbird' || speciesId === 'toucan' || speciesId === 'flamingo' || speciesId === 'pelican' || speciesId === 'penguin' || speciesId === 'quetzal' || speciesId === 'paradise-bird' || speciesId === 'scarlet-macaw') {
        return `./assets/images/birds-tropical/${speciesId}.jpg`;
    } else if (category === 'river') {
        return `./assets/images/fish-river/${speciesId}.jpg`;
    } else if (category === 'mediterranean') {
        return `./assets/images/fish-mediterranean/${speciesId}.jpg`;
    } else if (category === 'tropical') {
        return `./assets/images/fish-tropical/${speciesId}.jpg`;
    }
    
    // Fallback
    return `./assets/images/${speciesId}.jpg`;
}

// Import species data
import { europeanBirds } from './birds-european.js';
import { tropicalBirds } from './birds-tropical.js';
import { riverFish } from './fish-river.js';
import { mediterraneanFish } from './fish-mediterranean.js';
import { tropicalFish } from './fish-tropical.js';

// Combine all birds and fish
const birds = [...europeanBirds, ...tropicalBirds];
const fish = [...riverFish, ...mediterraneanFish, ...tropicalFish];

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
        search_birds: 'Search birds...',
        search_fish: 'Search fish...',
        by_category: 'By Category',
        by_family: 'By Family',
        login: 'Login',
        logout: 'Logout',
        login_title: 'Login to Save Your Sightings',
        login_description: 'Enter your email to save sightings to the cloud. Without login, data is saved only in this browser.',
        email_label: 'Email:',
        login_button: 'Login',
        login_note: 'No password required. A magic link will be sent to your email.',
        data_management: 'Data Management',
        export_data: 'Export Data',
        import_data: 'Import Data',
        data_note: 'Your sightings are automatically saved to browser storage (IndexedDB) and persist through cache clears.',
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
        search_birds: 'Поиск птиц...',
        search_fish: 'Поиск рыб...',
        by_category: 'По категориям',
        by_family: 'По семействам',
        login: 'Войти',
        logout: 'Выйти',
        login_title: 'Войдите для сохранения наблюдений',
        login_description: 'Введите email для сохранения наблюдений в облаке. Без входа данные сохраняются только в этом браузере.',
        email_label: 'Email:',
        login_button: 'Войти',
        login_note: 'Пароль не требуется. Волшебная ссылка будет отправлена на email.',
        data_management: 'Управление данными',
        export_data: 'Экспорт данных',
        import_data: 'Импорт данных',
        data_note: 'Наблюдения автоматически сохраняются в IndexedDB и не удаляются при очистке кэша.',
    }
};

// Species Database
const speciesData = { birds, fish };

// Application State
let currentLanguage = 'en';
let currentTab = 'birds';
let currentCategory = 'all';
let currentSearchQuery = { birds: '', fish: '' };
let currentView = 'category'; // 'category' or 'family'
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let sightings = JSON.parse(localStorage.getItem('sightings')) || [];
let selectedSpecies = null;
let db = null; // IndexedDB instance

// API base URL for Vercel serverless functions
const API_BASE = '/api';

// IndexedDB Database
const DB_NAME = 'BirdFishTrackerDB';
const DB_VERSION = 1;
const DB_STORE = 'sightings';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initUser();
    initIndexedDB();
    setupEventListeners();
    setTodayDate();

    // Render initial content
    currentCategory = 'all';
    renderSpeciesGrid();
    updateSpeciesSelect();
    renderSightings();
});

// IndexedDB Management
function initIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        
        request.onerror = () => {
            console.error('IndexedDB error:', request.error);
            reject(request.error);
        };
        
        request.onsuccess = () => {
            db = request.result;
            console.log('IndexedDB initialized');
            // Load sightings from IndexedDB as primary storage
            loadSightingsFromIndexedDB();
            resolve(db);
        };
        
        request.onupgradeneeded = (event) => {
            const database = event.target.result;
            
            // Create object store if it doesn't exist
            if (!database.objectStoreNames.contains(DB_STORE)) {
                const store = database.createObjectStore(DB_STORE, { keyPath: 'id' });
                store.createIndex('speciesId', 'speciesId', { unique: false });
                store.createIndex('date', 'date', { unique: false });
                store.createIndex('timestamp', 'timestamp', { unique: false });
            }
        };
    });
}

async function saveSightingsToIndexedDB(sightingsData) {
    if (!db) {
        console.warn('IndexedDB not initialized');
        return;
    }
    
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([DB_STORE], 'readwrite');
        const store = transaction.objectStore(DB_STORE);
        
        // Clear existing data
        const clearRequest = store.clear();
        
        clearRequest.onsuccess = () => {
            // Add all sightings
            sightingsData.forEach(sighting => {
                store.put(sighting);
            });
        };
        
        transaction.oncomplete = () => {
            console.log('Sightings saved to IndexedDB');
            resolve();
        };
        
        transaction.onerror = () => {
            console.error('Error saving to IndexedDB:', transaction.error);
            reject(transaction.error);
        };
    });
}

async function loadSightingsFromIndexedDB() {
    if (!db) {
        console.warn('IndexedDB not initialized');
        return;
    }
    
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([DB_STORE], 'readonly');
        const store = transaction.objectStore(DB_STORE);
        const request = store.getAll();
        
        request.onsuccess = () => {
            sightings = request.result || [];
            console.log(`Loaded ${sightings.length} sightings from IndexedDB`);
            // Also save to localStorage as backup
            localStorage.setItem('sightings', JSON.stringify(sightings));
            resolve(sightings);
        };
        
        request.onerror = () => {
            console.error('Error loading from IndexedDB:', request.error);
            reject(request.error);
        };
    });
}

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
    
    // Handle placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18n[currentLanguage][key]) {
            el.placeholder = i18n[currentLanguage][key];
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

// User Authentication Management
function initUser() {
    updateUserUI();
    if (currentUser) {
        // Only try to load from server if available
        loadSightingsFromServer();
    }
}

function updateUserUI() {
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const userEmail = document.getElementById('user-email');
    
    if (currentUser && currentUser.email) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        userEmail.style.display = 'block';
        userEmail.textContent = currentUser.email;
    } else {
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        userEmail.style.display = 'none';
        userEmail.textContent = '';
    }
}

async function loginUser(email) {
    currentUser = { email, loginDate: new Date().toISOString() };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserUI();
    
    // Load sightings from server for this user
    await loadSightingsFromServer();
    
    // Close login modal
    document.getElementById('login-modal').classList.remove('active');
    
    // Re-render sightings
    renderSightings();
    renderStats();
}

function logoutUser() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserUI();
    
    // Load sightings from localStorage for anonymous user
    sightings = JSON.parse(localStorage.getItem('sightings')) || [];
    
    renderSightings();
    renderStats();
}

async function saveSightingsToServer() {
    // Always save to IndexedDB (persists through cache clears)
    await saveSightingsToIndexedDB(sightings);
    
    if (!currentUser) {
        // Save to localStorage for anonymous users (backup)
        localStorage.setItem('sightings', JSON.stringify(sightings));
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/sightings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: currentUser.email,
                sightings: sightings
            })
        });

        // If API doesn't exist (local dev), just use IndexedDB/localStorage
        if (response.status === 404) {
            console.log('Server API not available, using local storage');
            localStorage.setItem('sightings', JSON.stringify(sightings));
            return;
        }

        if (!response.ok) {
            throw new Error('Failed to save sightings');
        }

        // Also save to localStorage as backup
        localStorage.setItem('sightings', JSON.stringify(sightings));
    } catch (error) {
        console.log('Server not available, using local storage:', error.message);
        // Fallback to localStorage
        localStorage.setItem('sightings', JSON.stringify(sightings));
    }
}

async function loadSightingsFromServer() {
    // IndexedDB is loaded during init, this is for logged-in users
    if (!currentUser) {
        // Load from IndexedDB (already done in init) or localStorage
        sightings = JSON.parse(localStorage.getItem('sightings')) || [];
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/sightings?email=${encodeURIComponent(currentUser.email)}`);

        // If API doesn't exist (local dev), just use IndexedDB/localStorage
        if (response.status === 404) {
            console.log('Server API not available, using local storage');
            return;
        }

        if (!response.ok) {
            throw new Error('Failed to load sightings');
        }

        const data = await response.json();
        sightings = data.sightings || [];

        // Save to IndexedDB and localStorage
        await saveSightingsToIndexedDB(sightings);
        localStorage.setItem('sightings', JSON.stringify(sightings));
    } catch (error) {
        // For local development, just use IndexedDB/localStorage
        console.log('Server not available, using local storage:', error.message);
    }
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

    // View toggle for birds (category/family)
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = e.target.parentElement;
            parent.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentView = e.target.getAttribute('data-view');
            renderSpeciesGrid();
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

    // Search inputs
    document.getElementById('birds-search')?.addEventListener('input', (e) => {
        currentSearchQuery.birds = e.target.value;
        renderSpeciesGrid();
    });

    document.getElementById('fish-search')?.addEventListener('input', (e) => {
        currentSearchQuery.fish = e.target.value;
        renderSpeciesGrid();
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
            saveSightingsToServer();
            renderSightings();
            renderStats();
            alert('Data cleared!');
        }
    });

    // Login button
    document.getElementById('login-btn')?.addEventListener('click', () => {
        document.getElementById('login-modal').classList.add('active');
    });

    // Logout button
    document.getElementById('logout-btn')?.addEventListener('click', () => {
        if (confirm('Are you sure you want to logout?')) {
            logoutUser();
        }
    });

    // Login form submit
    document.getElementById('login-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        if (email) {
            loginUser(email);
        }
    });

    // Login modal close
    document.getElementById('login-modal-close')?.addEventListener('click', () => {
        document.getElementById('login-modal').classList.remove('active');
    });
    document.getElementById('login-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'login-modal') {
            document.getElementById('login-modal').classList.remove('active');
        }
    });

    // Export data
    document.getElementById('export-btn')?.addEventListener('click', exportData);

    // Import data
    document.getElementById('import-btn')?.addEventListener('click', () => {
        document.getElementById('import-file').click();
    });
    document.getElementById('import-file')?.addEventListener('change', importData);

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

    // Reset category and search when switching tabs
    currentCategory = 'all';
    currentSearchQuery = { birds: '', fish: '' };

    // Reset view to category when switching tabs
    currentView = 'category';

    // Clear search inputs
    document.querySelectorAll('.search-input').forEach(input => {
        input.value = '';
    });

    const parent = document.querySelector(`.tab-content.active .categories`);
    if (parent) {
        parent.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        parent.querySelector('[data-category="all"]').classList.add('active');
    }
    
    // Reset view toggle buttons
    document.querySelectorAll('.view-toggle').forEach(toggle => {
        toggle.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-view') === 'category') {
                btn.classList.add('active');
            }
        });
    });

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
    const familiesContainer = document.getElementById(`${type}-families`);
    const species = speciesData[type];

    // Toggle between grid and family view for birds and fish
    if (type === 'birds' || type === 'fish') {
        if (currentView === 'family') {
            grid.style.display = 'none';
            familiesContainer.style.display = 'block';
            renderFamilyView(familiesContainer, species, type);
            return;
        } else {
            grid.style.display = 'grid';
            familiesContainer.style.display = 'none';
        }
    }

    let filtered = species;
    if (currentCategory !== 'all') {
        filtered = species.filter(s => s.category === currentCategory);
    }

    // Filter by search query
    const searchQuery = currentSearchQuery[type]?.toLowerCase() || '';
    if (searchQuery) {
        filtered = filtered.filter(s => {
            const name = getSpeciesName(s).toLowerCase();
            const latin = s.latin_name.toLowerCase();
            const descEn = s.description_en.toLowerCase();
            const descRu = s.description_ru.toLowerCase();
            
            // Search in characteristics
            let characteristicsText = '';
            if (s.characteristics) {
                characteristicsText = [
                    s.characteristics.size || '',
                    s.characteristics.wingspan || '',
                    ...(s.characteristics.color || []),
                    ...(s.characteristics.features || []),
                    ...(s.characteristics.habitat || []),
                    ...(s.characteristics.behavior || [])
                ].join(' ').toLowerCase();
            }
            
            return name.includes(searchQuery) ||
                   latin.includes(searchQuery) ||
                   descEn.includes(searchQuery) ||
                   descRu.includes(searchQuery) ||
                   characteristicsText.includes(searchQuery);
        });
    }

    // Sort alphabetically by species name in current language
    filtered.sort((a, b) => {
        const nameA = getSpeciesName(a).toLowerCase();
        const nameB = getSpeciesName(b).toLowerCase();
        return nameA.localeCompare(nameB, currentLanguage === 'ru' ? 'ru' : 'en');
    });

    grid.innerHTML = filtered.map(species => `
        <div class="species-card" data-species-id="${species.id}" data-type="${type}">
            <div class="species-image has-image" style="background-image: url('${getImagePath(species.id, species.category)}?v=${Date.now()}'); background-size: cover; background-position: center;" title="Loading image for ${species.id}">
            </div>
            <div class="species-info">
                <div class="species-name">${getSpeciesName(species)}</div>
                <div class="species-category">${t(species.category)}</div>
            </div>
        </div>
    `).join('');
    
    // Add click handlers to species cards
    grid.querySelectorAll('.species-card').forEach(card => {
        card.addEventListener('click', () => {
            const speciesId = card.getAttribute('data-species-id');
            const type = card.getAttribute('data-type');
            showDetail(speciesId, type);
        });
    });
}

// Family View Rendering
function renderFamilyView(container, species, type) {
    // Group by family
    const families = {};
    let filtered = species;
    
    if (currentCategory !== 'all') {
        filtered = species.filter(s => s.category === currentCategory);
    }
    
    // Filter by search query
    const searchQuery = currentSearchQuery[type]?.toLowerCase() || '';
    if (searchQuery) {
        filtered = filtered.filter(s => {
            const name = getSpeciesName(s).toLowerCase();
            const latin = s.latin_name.toLowerCase();
            const family = (s.family || '').toLowerCase();
            const familyRu = (s.family_ru || '').toLowerCase();
            const descEn = s.description_en.toLowerCase();
            const descRu = s.description_ru.toLowerCase();
            
            let characteristicsText = '';
            if (s.characteristics) {
                characteristicsText = [
                    s.characteristics.size || '',
                    s.characteristics.wingspan || '',
                    ...(s.characteristics.color || []),
                    ...(s.characteristics.features || []),
                    ...(s.characteristics.habitat || []),
                    ...(s.characteristics.behavior || [])
                ].join(' ').toLowerCase();
            }
            
            return name.includes(searchQuery) ||
                   latin.includes(searchQuery) ||
                   family.includes(searchQuery) ||
                   familyRu.includes(searchQuery) ||
                   descEn.includes(searchQuery) ||
                   descRu.includes(searchQuery) ||
                   characteristicsText.includes(searchQuery);
        });
    }
    
    // Group by family
    filtered.forEach(item => {
        const familyName = item.family || 'Unknown';
        const familyNameRu = item.family_ru || 'Неизвестные';
        if (!families[familyName]) {
            families[familyName] = {
                name: familyName,
                name_ru: familyNameRu,
                items: []
            };
        }
        families[familyName].items.push(item);
    });

    // Sort families alphabetically by name
    const sortedFamilies = Object.values(families).sort((a, b) => {
        const nameA = currentLanguage === 'ru' ? a.name_ru : a.name;
        const nameB = currentLanguage === 'ru' ? b.name_ru : b.name;
        return nameA.localeCompare(nameB, currentLanguage === 'ru' ? 'ru-RU' : 'en-US');
    });
    
    // Render families
    container.innerHTML = sortedFamilies.map(family => {
        const displayName = currentLanguage === 'ru' ? family.name_ru : family.name;
        const sortedItems = family.items.sort((a, b) => {
            const nameA = getSpeciesName(a).toLowerCase();
            const nameB = getSpeciesName(b).toLowerCase();
            return nameA.localeCompare(nameB, currentLanguage === 'ru' ? 'ru-RU' : 'en-US');
        });
        
        const itemType = type === 'birds' ? '🦅' : '🐟';
        
        return `
            <div class="family-section">
                <h3 class="family-title">${displayName} <span class="family-count">(${family.items.length})</span></h3>
                <div class="family-grid">
                    ${sortedItems.map(item => `
                        <div class="species-card" data-species-id="${item.id}" data-type="${type}">
                            <div class="species-image has-image" style="background-image: url('${getImagePath(item.id, item.category)}?v=${Date.now()}'); background-size: cover; background-position: center;" title="Loading image for ${item.id}">
                            </div>
                            <div class="species-info">
                                <div class="species-name">${getSpeciesName(item)}</div>
                                <div class="species-category">${t(item.category)}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
    
    // Add click handlers
    container.querySelectorAll('.species-card').forEach(card => {
        card.addEventListener('click', () => {
            const speciesId = card.getAttribute('data-species-id');
            const cardType = card.getAttribute('data-type');
            showDetail(speciesId, cardType);
        });
    });
}

// Detail Modal
function showDetail(speciesId, type) {
    const species = speciesData[type].find(s => s.id === speciesId);
    if (!species) return;

    selectedSpecies = speciesId;

    const detailImage = document.getElementById('detail-image');
    const imageUrl = `${getImagePath(species.id, species.category)}?v=${Date.now()}`;
    const detailBody = document.querySelector('.detail-body');
    
    // Reset previous state
    detailImage.style.display = 'block';
    detailBody.style.background = '';
    detailBody.style.minHeight = '';
    
    // Set image src
    detailImage.src = imageUrl;
    detailImage.alt = getSpeciesName(species);

    // Handle image load error with fallback
    detailImage.onerror = () => {
        detailImage.style.display = 'none';
        detailBody.style.background = 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)';
        detailBody.style.minHeight = '250px';
    };

    const nameElement = document.getElementById('detail-name');
    nameElement.innerHTML = `${getSpeciesName(species)}<br><span class="detail-latin">${species.latin_name}</span>`;
    
    // Add family info for birds and fish
    const familyInfo = species.family ? `
        <p class="detail-family">
            <strong>${currentLanguage === 'ru' ? 'Семейство' : 'Family'}:</strong> 
            ${currentLanguage === 'ru' ? species.family_ru : species.family}
        </p>
    ` : '';
    
    document.getElementById('detail-category').textContent = `${t(type)}: ${t(species.category)}`;
    document.getElementById('detail-description').textContent = getSpeciesDescription(species);

    // Display characteristics if available
    const characteristicsHtml = species.characteristics ? `
        <div class="detail-characteristics">
            <h3>${currentLanguage === 'ru' ? 'Характерные признаки' : 'Identifying Characteristics'}</h3>
            <div class="characteristics-grid">
                ${species.characteristics.size ? `<div class="characteristic-item"><strong>${currentLanguage === 'ru' ? 'Размер' : 'Size'}:</strong> ${species.characteristics.size}</div>` : ''}
                ${species.characteristics.wingspan ? `<div class="characteristic-item"><strong>${currentLanguage === 'ru' ? 'Размах крыльев' : 'Wingspan'}:</strong> ${species.characteristics.wingspan}</div>` : ''}
                ${species.characteristics.color.length > 0 ? `<div class="characteristic-item"><strong>${currentLanguage === 'ru' ? 'Цвет' : 'Color'}:</strong> ${species.characteristics.color.join(', ')}</div>` : ''}
                ${species.characteristics.features.length > 0 ? `<div class="characteristic-item"><strong>${currentLanguage === 'ru' ? 'Особенности' : 'Features'}:</strong> ${species.characteristics.features.join('; ')}</div>` : ''}
                ${species.characteristics.habitat.length > 0 ? `<div class="characteristic-item"><strong>${currentLanguage === 'ru' ? 'Среда обитания' : 'Habitat'}:</strong> ${species.characteristics.habitat.join(', ')}</div>` : ''}
                ${species.characteristics.behavior.length > 0 ? `<div class="characteristic-item"><strong>${currentLanguage === 'ru' ? 'Поведение' : 'Behavior'}:</strong> ${species.characteristics.behavior.join('; ')}</div>` : ''}
            </div>
        </div>
    ` : '';
    
    // Insert family and characteristics after description
    const descriptionEl = document.getElementById('detail-description');
    descriptionEl.insertAdjacentHTML('afterend', familyInfo + characteristicsHtml);

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
    saveSightingsToServer();
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
    saveSightingsToServer();
    renderSightings();
    renderStats();
}

// Data Export/Import
function exportData() {
    const data = {
        exportDate: new Date().toISOString(),
        version: '1.0',
        sightings: sightings,
        user: currentUser
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bird-fish-sightings-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const data = JSON.parse(e.target.result);
            
            if (!data.sightings || !Array.isArray(data.sightings)) {
                alert('Invalid file format. Expected sightings data.');
                return;
            }
            
            if (confirm(`Import ${data.sightings.length} sightings? This will replace your current data.`)) {
                sightings = data.sightings;
                
                // Save to IndexedDB and localStorage
                await saveSightingsToIndexedDB(sightings);
                localStorage.setItem('sightings', JSON.stringify(sightings));
                
                // Update user if exported with user
                if (data.user) {
                    currentUser = data.user;
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    updateUserUI();
                }
                
                renderSightings();
                renderStats();
                alert('Data imported successfully!');
            }
        } catch (error) {
            console.error('Error importing data:', error);
            alert('Error importing data. Please check the file format.');
        }
    };
    reader.readAsText(file);
    
    // Reset file input
    event.target.value = '';
}

// Helper function to find species
function findSpecies(speciesId) {
    const inBirds = speciesData.birds.find(s => s.id === speciesId);
    if (inBirds) return { ...inBirds, image: '🦅' };
    const inFish = speciesData.fish.find(s => s.id === speciesId);
    if (inFish) return { ...inFish, image: '🐟' };
    return null;
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
