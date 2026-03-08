// River fish species data
export const riverFish = [
    {
        id: 'pike',
        name_en: 'Pike',
        name_ru: 'Щука',
        latin_name: 'Esox lucius',
        family: 'Esocidae',
        family_ru: 'Щуковые',
        category: 'river',
        description_en: 'Large freshwater predator with long body. Green-gray coloring. Excellent hunter found in rivers, lakes, and ponds.',
        description_ru: 'Крупный пресноводный хищник с удлиненным телом. Зелено-серая окраска. Отличный охотник, встречается в реках, озёрах и прудах.',
        characteristics: {
            size: 'large (60-100 cm)',
            color: ['green', 'gray', 'olive'],
            features: ['long body', 'duck-bill snout', 'sharp teeth'],
            habitat: ['rivers', 'lakes', 'ponds', 'slow-moving waters'],
            behavior: ['predator', 'ambush hunting', 'solitary']
        }
    },
    {
        id: 'carp',
        name_en: 'Common Carp',
        name_ru: 'Карп обыкновенный',
        latin_name: 'Cyprinus carpio',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Large cyprinid fish. Gold or silver colored. Slow-moving, bottom-feeding fish. Common in European rivers and lakes.',
        description_ru: 'Крупная рыба семейства карповых. Золотистого или серебристого цвета. Медленно движущаяся донная рыба. Распространена в европейских реках и озёрах.',
        characteristics: {
            size: 'large (40-80 cm)',
            color: ['gold', 'silver', 'bronze'],
            features: ['robust body', 'barbels around mouth', 'large scales'],
            habitat: ['rivers', 'lakes', 'ponds', 'slow-moving waters'],
            behavior: ['bottom feeding', 'slow-moving', 'omnivorous', 'schooling']
        }
    },
    {
        id: 'trout',
        name_en: 'Rainbow Trout',
        name_ru: 'Радужная форель',
        latin_name: 'Oncorhynchus mykiss',
        family: 'Salmonidae',
        family_ru: 'Лососёвые',
        category: 'river',
        description_en: 'Colorful river fish with characteristic red stripe along the body. Prefers cold, clean water with high oxygen content.',
        description_ru: 'Красочная речная рыба с характерной красной полосой вдоль тела. Предпочитает холодную, чистую воду с высоким содержанием кислорода.',
        characteristics: {
            size: 'medium (20-40 cm)',
            color: ['silver', 'green', 'red', 'black'],
            features: ['red stripe along body', 'spotted pattern', 'streamlined body'],
            habitat: ['cold rivers', 'streams', 'clean lakes', 'high oxygen waters'],
            behavior: ['fast swimmer', 'predator', 'jumping', 'insect hunting']
        }
    },
    {
        id: 'salmon',
        name_en: 'Atlantic Salmon',
        name_ru: 'Атлантический лосось',
        latin_name: 'Salmo salar',
        family: 'Salmonidae',
        family_ru: 'Лососёвые',
        category: 'river',
        description_en: 'Anadromous fish that migrates from ocean to rivers to spawn. Silvery body with black spots. Highly valued food fish.',
        description_ru: 'Проходная рыба, мигрирующая из океана в реки для нереста. Серебристое тело с чёрными пятнами. Ценная промысловая рыба.',
        characteristics: {
            size: 'large (60-100 cm)',
            color: ['silver', 'blue', 'black'],
            features: ['streamlined body', 'black spots', 'forked tail'],
            habitat: ['ocean', 'rivers', 'cold waters'],
            behavior: ['anadromous migration', 'fast swimmer', 'predator', 'spawning']
        }
    },
    {
        id: 'catfish',
        name_en: 'Wels Catfish',
        name_ru: 'Сом обыкновенный',
        latin_name: 'Silurus glanis',
        family: 'Siluridae',
        family_ru: 'Сомовые',
        category: 'river',
        description_en: 'Large freshwater fish with long whiskers. Dark gray or brown coloring. Can grow up to 3 meters. Bottom-dwelling predator.',
        description_ru: 'Крупная пресноводная рыба с длинными усами. Тёмно-серая или коричневая окраска. Может достигать 3 метров. Донный хищник.',
        characteristics: {
            size: 'very large (100-300 cm)',
            color: ['dark gray', 'brown', 'black'],
            features: ['long whiskers (barbels)', 'broad flat head', 'scaleless skin'],
            habitat: ['rivers', 'lakes', 'ponds', 'deep waters'],
            behavior: ['bottom dwelling', 'nocturnal', 'predator', 'ambush hunting']
        }
    },
    {
        id: 'perch',
        name_en: 'European Perch',
        name_ru: 'Окунь европейский',
        latin_name: 'Perca fluviatilis',
        family: 'Percidae',
        family_ru: 'Окунёвые',
        category: 'river',
        description_en: 'Green body with dark vertical stripes. Sharp spines on dorsal fin. Common predator in European freshwater bodies.',
        description_ru: 'Зелёное тело с тёмными вертикальными полосами. Острые шипы на спинном плавнике. Распространённый хищник в пресных водоёмах Европы.',
        characteristics: {
            size: 'medium (15-30 cm)',
            color: ['green', 'yellow', 'black'],
            features: ['dark vertical stripes', 'sharp spines on dorsal fin', 'red fins'],
            habitat: ['rivers', 'lakes', 'ponds', 'freshwater bodies'],
            behavior: ['predator', 'schooling', 'aggressive', 'bottom feeding']
        }
    },
    {
        id: 'roach',
        name_en: 'Common Roach',
        name_ru: 'Плотва',
        latin_name: 'Rutilus rutilus',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Small freshwater fish with silver body and red fins. Very common in European rivers. Red eyes distinguish it from similar species.',
        description_ru: 'Маленькая пресноводная рыба с серебристым телом и красными плавниками. Очень распространена в европейских реках. Красные глаза отличают её от похожих видов.',
        characteristics: {
            size: 'small (15-25 cm)',
            color: ['silver', 'red', 'gray'],
            features: ['red eyes', 'red fins', 'silver body'],
            habitat: ['rivers', 'lakes', 'ponds', 'slow waters'],
            behavior: ['schooling', 'bottom feeding', 'omnivorous']
        }
    },
    {
        id: 'bream',
        name_en: 'Common Bream',
        name_ru: 'Лещ',
        latin_name: 'Abramis brama',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Deep-bodied fish with humpback. Silver-gray coloring. Bottom-feeder found in slow rivers and lakes.',
        description_ru: 'Высокотелая рыба с горбом. Серебристо-серая окраска. Донная рыба, встречается в медленных реках и озёрах.',
        characteristics: {
            size: 'medium (30-50 cm)',
            color: ['silver', 'gray', 'bronze'],
            features: ['deep body', 'humpback', 'small head'],
            habitat: ['slow rivers', 'lakes', 'reservoirs', 'deep waters'],
            behavior: ['bottom feeding', 'schooling', 'nocturnal']
        }
    },
    {
        id: 'zander',
        name_en: 'Zander',
        name_ru: 'Судак',
        latin_name: 'Sander lucioperca',
        family: 'Percidae',
        family_ru: 'Окунёвые',
        category: 'river',
        description_en: 'Large predator with elongated body. Green-gray back, silver belly. Sharp teeth. Valued game and food fish.',
        description_ru: 'Крупный хищник с удлинённым телом. Зелено-серая спина, серебристое брюхо. Острые зубы. Ценная промысловая рыба.',
        characteristics: {
            size: 'large (50-80 cm)',
            color: ['green', 'gray', 'silver', 'white'],
            features: ['elongated body', 'sharp teeth', 'spiny dorsal fin'],
            habitat: ['rivers', 'lakes', 'reservoirs', 'clean waters'],
            behavior: ['predator', 'nocturnal hunting', 'schooling']
        }
    },
    {
        id: 'chub',
        name_en: 'Common Chub',
        name_ru: 'Голавль',
        latin_name: 'Squalius cephalus',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Stocky cyprinid with broad head. Dark green back, silver sides. Strong fighter when hooked. Found in fast-flowing rivers.',
        description_ru: 'Коренастый карповый с широкой головой. Тёмно-зелёная спина, серебристые бока. Сильно сопротивляется при ловле. Встречается в быстротекущих реках.',
        characteristics: {
            size: 'medium (30-50 cm)',
            color: ['green', 'silver', 'orange'],
            features: ['broad head', 'thick body', 'large scales'],
            habitat: ['fast rivers', 'streams', 'riffles', 'clean waters'],
            behavior: ['surface feeding', 'strong fighter', 'omnivorous']
        }
    },
    {
        id: 'dace',
        name_en: 'Common Dace',
        name_ru: 'Елец',
        latin_name: 'Leuciscus leuciscus',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Slender freshwater fish with streamlined body. Silver with blue-green tint. Lives in schools in clean, fast-flowing water.',
        description_ru: 'Стройная пресноводная рыба с обтекаемым телом. Серебристая с сине-зелёным оттенком. Живёт стаями в чистой быстротекущей воде.',
        characteristics: {
            size: 'small (15-25 cm)',
            color: ['silver', 'blue', 'green'],
            features: ['streamlined body', 'forked tail', 'small mouth'],
            habitat: ['fast rivers', 'streams', 'clean waters', 'riffles'],
            behavior: ['schooling', 'fast swimming', 'insect hunting']
        }
    },
    {
        id: 'ide',
        name_en: 'Common Ide',
        name_ru: 'Язь',
        latin_name: 'Leuciscus idus',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Large cyprinid with thick body. Dark back, silver-gold sides. Reddish fins. Strong and hardy fish.',
        description_ru: 'Крупный карповый с толстым телом. Тёмная спина, серебристо-золотистые бока. Красноватые плавники. Сильная и выносливая рыба.',
        characteristics: {
            size: 'medium (30-60 cm)',
            color: ['silver', 'gold', 'red', 'dark gray'],
            features: ['thick body', 'small head', 'red fins'],
            habitat: ['rivers', 'lakes', 'reservoirs', 'slow waters'],
            behavior: ['schooling', 'omnivorous', 'bottom feeding']
        }
    },
    {
        id: 'barbel',
        name_en: 'Common Barbel',
        name_ru: 'Усач',
        latin_name: 'Barbus barbus',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Cylindrical fish with four barbels around mouth. Brown-green back, pale belly. Strong fighter. Prefers fast-flowing water.',
        description_ru: 'Цилиндрическая рыба с четырьмя усиками вокруг рта. Коричнево-зелёная спина, бледное брюхо. Сильно сопротивляется. Предпочитает быстротекущую воду.',
        characteristics: {
            size: 'medium (40-60 cm)',
            color: ['brown', 'green', 'pale'],
            features: ['four barbels', 'cylindrical body', 'thick lips'],
            habitat: ['fast rivers', 'riffles', 'gravel bottoms', 'clean waters'],
            behavior: ['bottom feeding', 'strong fighter', 'schooling']
        }
    },
    {
        id: 'tench',
        name_en: 'Tench',
        name_ru: 'Линь',
        latin_name: 'Tinca tinca',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Thick-bodied fish with small scales. Olive-green coloring. Slimy skin. Bottom-dweller in slow, weedy waters.',
        description_ru: 'Толстое тело с мелкой чешуёй. Оливково-зелёная окраска. Слизистая кожа. Донная рыба в медленных заросших водах.',
        characteristics: {
            size: 'medium (25-40 cm)',
            color: ['olive', 'green', 'gold', 'brown'],
            features: ['small scales', 'slimy skin', 'thick body', 'small red eyes'],
            habitat: ['slow rivers', 'lakes', 'ponds', 'weedy areas'],
            behavior: ['bottom dwelling', 'slow-moving', 'omnivorous']
        }
    },
    {
        id: 'grayling',
        name_en: 'European Grayling',
        name_ru: 'Хариус',
        latin_name: 'Thymallus thymallus',
        family: 'Thymallidae',
        family_ru: 'Хариусовые',
        category: 'river',
        description_en: 'Elegant fish with large colorful dorsal fin. Silver body with purple-green tint. Lives in cold, clean mountain streams.',
        description_ru: 'Элегантная рыба с большим красочным спинным плавником. Серебристое тело с фиолетово-зелёным оттенком. Живёт в холодных чистых горных ручьях.',
        characteristics: {
            size: 'medium (20-40 cm)',
            color: ['silver', 'purple', 'green', 'blue'],
            features: ['large dorsal fin', 'colorful spots on fin', 'streamlined body'],
            habitat: ['cold rivers', 'mountain streams', 'clean waters', 'high oxygen'],
            behavior: ['surface feeding', 'fast swimming', 'insect hunting']
        }
    },
    {
        id: 'whitefish',
        name_en: 'European Whitefish',
        name_ru: 'Сиг',
        latin_name: 'Coregonus lavaretus',
        family: 'Salmonidae',
        family_ru: 'Лососёвые',
        category: 'river',
        description_en: 'Salmonid with silver body and small head. Lives in cold northern waters. Delicate white flesh, highly valued.',
        description_ru: 'Лососёвый с серебристым телом и маленькой головой. Живёт в холодных северных водах. Нежное белое мясо, высоко ценится.',
        characteristics: {
            size: 'medium (20-40 cm)',
            color: ['silver', 'white', 'gray'],
            features: ['small head', 'forked tail', 'small mouth'],
            habitat: ['cold rivers', 'lakes', 'northern waters', 'deep waters'],
            behavior: ['schooling', 'bottom feeding', 'spawning runs']
        }
    },
    {
        id: 'burbot',
        name_en: 'Burbot',
        name_ru: 'Налим',
        latin_name: 'Lota lota',
        family: 'Lotidae',
        family_ru: 'Налимовые',
        category: 'river',
        description_en: 'Freshwater cod with mottled brown body. Single barbel on chin. Nocturnal predator. Active in cold water.',
        description_ru: 'Пресноводная треска с пёстрым коричневым телом. Один усик на подбородке. Ночной хищник. Активен в холодной воде.',
        characteristics: {
            size: 'medium (40-70 cm)',
            color: ['brown', 'black', 'yellow', 'mottled'],
            features: ['single barbel', 'elongated body', 'slimy skin'],
            habitat: ['cold rivers', 'lakes', 'deep waters', 'rocky bottoms'],
            behavior: ['nocturnal', 'predator', 'bottom dwelling', 'winter spawning']
        }
    },
    {
        id: 'gudgeon',
        name_en: 'Common Gudgeon',
        name_ru: 'Пескарь',
        latin_name: 'Gobio gobio',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Small bottom-dwelling fish. Brown-green back, white belly. Black spots along lateral line. Clean water indicator.',
        description_ru: 'Маленькая донная рыба. Коричнево-зелёная спина, белое брюхо. Чёрные пятна вдоль боковой линии. Индикатор чистой воды.',
        characteristics: {
            size: 'small (10-15 cm)',
            color: ['brown', 'green', 'white', 'yellow'],
            features: ['black spots', 'two barbels', 'cylindrical body'],
            habitat: ['clean rivers', 'streams', 'gravel bottoms', 'riffles'],
            behavior: ['bottom dwelling', 'schooling', 'insect hunting']
        }
    },
    {
        id: 'bleak',
        name_en: 'Common Bleak',
        name_ru: 'Верховка',
        latin_name: 'Alburnus alburnus',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Tiny silver fish with slender body. Blue-green back, bright silver sides. Lives in large schools near surface.',
        description_ru: 'Крошечная серебристая рыба с тонким телом. Сине-зелёная спина, ярко-серебристые бока. Живёт большими стаями у поверхности.',
        characteristics: {
            size: 'small (8-12 cm)',
            color: ['silver', 'blue', 'green'],
            features: ['slender body', 'upturned mouth', 'large scales'],
            habitat: ['rivers', 'lakes', 'surface waters', 'slow currents'],
            behavior: ['schooling', 'surface feeding', 'insect hunting']
        }
    },
    {
        id: 'minnow',
        name_en: 'Common Minnow',
        name_ru: 'Гольян',
        latin_name: 'Phoxinus phoxinus',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Very small colorful fish. Green-brown back with dark spots, red belly during spawning. Clean water species.',
        description_ru: 'Очень маленькая красочная рыба. Зелено-коричневая спина с тёмными пятнами, красное брюхо во время нереста. Вид чистой воды.',
        characteristics: {
            size: 'small (8-12 cm)',
            color: ['green', 'brown', 'red', 'gold'],
            features: ['dark spots', 'small size', 'colorful'],
            habitat: ['cold streams', 'clean rivers', 'gravel bottoms', 'shallow waters'],
            behavior: ['schooling', 'active swimming', 'insect hunting']
        }
    },
    {
        id: 'stone-loach',
        name_en: 'Stone Loach',
        name_ru: 'Щиповка',
        latin_name: 'Barbatula barbatula',
        family: 'Nemacheilidae',
        family_ru: 'Немахеиловые',
        category: 'river',
        description_en: 'Small bottom-dweller with mottled pattern. Six barbels around mouth. Hides under stones in shallow water.',
        description_ru: 'Маленькая донная рыба с пёстрым узором. Шесть усиков вокруг рта. Прячется под камнями на мелководье.',
        characteristics: {
            size: 'small (10-15 cm)',
            color: ['brown', 'yellow', 'black', 'mottled'],
            features: ['six barbels', 'mottled pattern', 'cylindrical body'],
            habitat: ['shallow rivers', 'streams', 'gravel bottoms', 'under stones'],
            behavior: ['bottom dwelling', 'nocturnal', 'hiding']
        }
    },
    {
        id: 'spined-loach',
        name_en: 'Spined Loach',
        name_ru: 'Вьюн',
        latin_name: 'Cobitis taenia',
        family: 'Cobitidae',
        family_ru: 'Вьюновые',
        category: 'river',
        description_en: 'Slender loach with row of spots along body. Six barbels around mouth. Burrows into sand when threatened.',
        description_ru: 'Стройный вьюн с рядом пятен вдоль тела. Шесть усиков вокруг рта. Зарывается в песок при опасности.',
        characteristics: {
            size: 'small (8-12 cm)',
            color: ['yellow', 'brown', 'black'],
            features: ['row of spots', 'six barbels', 'slender body'],
            habitat: ['slow rivers', 'sandy bottoms', 'shallow waters', 'vegetation'],
            behavior: ['burrowing', 'bottom dwelling', 'nocturnal']
        }
    },
    {
        id: 'weatherfish',
        name_en: 'Weather Loach',
        name_ru: 'Обыкновенный вьюн',
        latin_name: 'Misgurnus fossilis',
        family: 'Cobitidae',
        family_ru: 'Вьюновые',
        category: 'river',
        description_en: 'Eel-like loach with ten barbels. Brown-yellow coloring. Becomes active before storms. Can breathe air.',
        description_ru: 'Угреобразный вьюн с десятью усиками. Коричнево-жёлтая окраска. Активизируется перед грозами. Может дышать воздухом.',
        characteristics: {
            size: 'medium (20-30 cm)',
            color: ['brown', 'yellow', 'black'],
            features: ['ten barbels', 'eel-like body', 'air breathing'],
            habitat: ['slow rivers', 'marshes', 'muddy bottoms', 'weedy areas'],
            behavior: ['bottom dwelling', 'air breathing', 'weather sensitivity']
        }
    },
    {
        id: 'stickleback',
        name_en: 'Three-spined Stickleback',
        name_ru: 'Трёхиглая колюшка',
        latin_name: 'Gasterosteus aculeatus',
        family: 'Gasterosteidae',
        family_ru: 'Колюшковые',
        category: 'river',
        description_en: 'Tiny fish with three spines before dorsal fin. Males develop red belly during breeding. Builds nest from plant material.',
        description_ru: 'Крошечная рыба с тремя шипами перед спинным плавником. У самцов красное брюхо во время размножения. Строит гнездо из растительного материала.',
        characteristics: {
            size: 'small (4-8 cm)',
            color: ['silver', 'red', 'green', 'blue'],
            features: ['three spines', 'bony plates', 'red belly (male breeding)'],
            habitat: ['rivers', 'lakes', 'coastal waters', 'vegetation'],
            behavior: ['nest building', 'territorial', 'parental care']
        }
    },
    {
        id: 'bullhead',
        name_en: 'Bullhead',
        name_ru: 'Подкаменщик',
        latin_name: 'Cottus gobio',
        family: 'Cottidae',
        family_ru: 'Керчаковые',
        category: 'river',
        description_en: 'Small bottom-dweller with large head and mouth. Mottled brown coloring. Hides under stones in clean streams.',
        description_ru: 'Маленькая донная рыба с большой головой и ртом. Пёстрая коричневая окраска. Прячется под камнями в чистых ручьях.',
        characteristics: {
            size: 'small (8-12 cm)',
            color: ['brown', 'gray', 'black', 'mottled'],
            features: ['large head', 'large mouth', 'no swim bladder'],
            habitat: ['cold streams', 'clean rivers', 'gravel bottoms', 'under stones'],
            behavior: ['bottom dwelling', 'ambush predator', 'territorial']
        }
    },
    {
        id: 'lamprey',
        name_en: 'European River Lamprey',
        name_ru: 'Речная минога',
        latin_name: 'Lampetra fluviatilis',
        family: 'Petromyzontidae',
        family_ru: 'Миноговые',
        category: 'river',
        description_en: 'Jawless fish with round sucker mouth. Eel-like body. Parasitic feeder on other fish. Anadromous species.',
        description_ru: 'Бесчелюстная рыба с круглым ртом-присоской. Угреобразное тело. Паразитирует на других рыбах. Проходной вид.',
        characteristics: {
            size: 'medium (25-40 cm)',
            color: ['gray', 'blue', 'silver'],
            features: ['sucker mouth', 'no jaws', 'gill openings', 'eel-like'],
            habitat: ['rivers', 'coastal waters', 'gravel bottoms'],
            behavior: ['parasitic', 'anadromous', 'nocturnal']
        }
    },
    {
        id: 'brook-lamprey',
        name_en: 'Brook Lamprey',
        name_ru: 'Ручьевая минога',
        latin_name: 'Lampetra planeri',
        family: 'Petromyzontidae',
        family_ru: 'Миноговые',
        category: 'river',
        description_en: 'Small non-parasitic lamprey. Lives entire life in freshwater streams. Does not feed as adult. Spawns and dies.',
        description_ru: 'Маленькая непаразитическая минога. Живёт всю жизнь в пресноводных ручьях. Не питается взрослой. Нерестится и умирает.',
        characteristics: {
            size: 'small (12-18 cm)',
            color: ['brown', 'gray', 'yellow'],
            features: ['sucker mouth', 'no feeding as adult', 'small size'],
            habitat: ['clean streams', 'gravel bottoms', 'shallow waters'],
            behavior: ['non-parasitic', 'spawning', 'nocturnal']
        }
    },
    {
        id: 'smelt',
        name_en: 'European Smelt',
        name_ru: 'Корюшка',
        latin_name: 'Osmerus eperlanus',
        family: 'Osmeridae',
        family_ru: 'Корюшковые',
        category: 'river',
        description_en: 'Small salmonid with cucumber scent. Silver body, translucent fins. Anadromous. Delicate edible fish.',
        description_ru: 'Маленький лососёвый с запахом огурца. Серебристое тело, полупрозрачные плавники. Проходной вид. Нежная съедобная рыба.',
        characteristics: {
            size: 'small (15-25 cm)',
            color: ['silver', 'white', 'translucent'],
            features: ['cucumber scent', 'small mouth', 'forked tail'],
            habitat: ['rivers', 'coastal waters', 'estuaries', 'cold waters'],
            behavior: ['anadromous', 'schooling', 'spawning runs']
        }
    },
    {
        id: 'vendace',
        name_en: 'Vendace',
        name_ru: 'Ряпушка',
        latin_name: 'Coregonus albula',
        family: 'Salmonidae',
        family_ru: 'Лососёвые',
        category: 'river',
        description_en: 'Small whitefish with silver body. Down-turned mouth. Lives in cold deep lakes. Important commercial species.',
        description_ru: 'Маленький сиг с серебристым телом. Опущенный вниз рот. Живёт в холодных глубоких озёрах. Важный промысловый вид.',
        characteristics: {
            size: 'small (15-25 cm)',
            color: ['silver', 'white', 'blue'],
            features: ['down-turned mouth', 'forked tail', 'small scales'],
            habitat: ['cold lakes', 'deep waters', 'northern rivers'],
            behavior: ['schooling', 'plankton feeding', 'spawning runs']
        }
    },
    {
        id: 'peled',
        name_en: 'Peled',
        name_ru: 'Пелядь',
        latin_name: 'Coregonus peled',
        family: 'Salmonidae',
        family_ru: 'Лососёвые',
        category: 'river',
        description_en: 'Northern whitefish with deep body. Silver with black spots. Terminal mouth. Cold water species.',
        description_ru: 'Северный сиг с высоким телом. Серебристый с чёрными пятнами. Конечный рот. Холодноводный вид.',
        characteristics: {
            size: 'medium (30-50 cm)',
            color: ['silver', 'black', 'white'],
            features: ['deep body', 'black spots', 'terminal mouth'],
            habitat: ['cold rivers', 'lakes', 'northern waters', 'Siberia'],
            behavior: ['schooling', 'bottom feeding', 'cold water']
        }
    },
    {
        id: 'muksun',
        name_en: 'Muksun',
        name_ru: 'Муксун',
        latin_name: 'Coregonus muksun',
        family: 'Salmonidae',
        family_ru: 'Лососёвые',
        category: 'river',
        description_en: 'Siberian whitefish with elongated body. Silver coloring. Semi-anadromous. Highly valued food fish.',
        description_ru: 'Сибирский сиг с удлинённым телом. Серебристая окраска. Полупроходной вид. Высоко ценится как пищевая рыба.',
        characteristics: {
            size: 'medium (40-60 cm)',
            color: ['silver', 'gray', 'white'],
            features: ['elongated body', 'small head', 'forked tail'],
            habitat: ['Siberian rivers', 'Arctic waters', 'cold lakes'],
            behavior: ['semi-anadromous', 'schooling', 'bottom feeding']
        }
    },
    {
        id: 'nelma',
        name_en: 'Nelma',
        name_ru: 'Нельма',
        latin_name: 'Stenodus leucichthys',
        family: 'Salmonidae',
        family_ru: 'Лососёвые',
        category: 'river',
        description_en: 'Large northern salmonid. Silver body with dark spots. Long lower jaw. Predator feeding on small fish.',
        description_ru: 'Крупный северный лососёвый. Серебристое тело с тёмными пятнами. Длинная нижняя челюсть. Хищник, питается мелкой рыбой.',
        characteristics: {
            size: 'large (60-100 cm)',
            color: ['silver', 'white', 'black'],
            features: ['long lower jaw', 'large mouth', 'forked tail'],
            habitat: ['Siberian rivers', 'Arctic waters', 'cold lakes'],
            behavior: ['predator', 'anadromous', 'fast swimming']
        }
    },
    {
        id: 'omul',
        name_en: 'Omul',
        name_ru: 'Омуль',
        latin_name: 'Coregonus autumnalis migratorius',
        family: 'Salmonidae',
        family_ru: 'Лососёвые',
        category: 'river',
        description_en: 'Arctic whitefish subspecies. Silver body. Anadromous in Arctic rivers. Important commercial fish of Siberia.',
        description_ru: 'Подвид арктического сига. Серебристое тело. Проходной в арктических реках. Важная промысловая рыба Сибири.',
        characteristics: {
            size: 'medium (30-50 cm)',
            color: ['silver', 'blue', 'white'],
            features: ['streamlined body', 'forked tail', 'small mouth'],
            habitat: ['Arctic rivers', 'cold lakes', 'Siberia'],
            behavior: ['anadromous', 'schooling', 'spawning runs']
        }
    },
    {
        id: 'taimen',
        name_en: 'Siberian Taimen',
        name_ru: 'Таймень',
        latin_name: 'Hucho taimen',
        family: 'Salmonidae',
        family_ru: 'Лососёвые',
        category: 'river',
        description_en: 'Largest salmonid. Dark body with black spots. Red tail during spawning. Fierce predator of Siberian rivers.',
        description_ru: 'Крупнейший лососёвый. Тёмное тело с чёрными пятнами. Красный хвост во время нереста. Свирепый хищник сибирских рек.',
        characteristics: {
            size: 'very large (100-200 cm)',
            color: ['dark gray', 'black', 'red', 'silver'],
            features: ['large size', 'black spots', 'red tail', 'large teeth'],
            habitat: ['Siberian rivers', 'cold waters', 'deep pools'],
            behavior: ['predator', 'territorial', 'long-lived']
        }
    },
    {
        id: 'lenok',
        name_en: 'Lenok',
        name_ru: 'Ленок',
        latin_name: 'Brachymystax lenok',
        family: 'Salmonidae',
        family_ru: 'Лососёвые',
        category: 'river',
        description_en: 'Asian salmonid with trout-like appearance. Dark body with spots. Two forms: sharp-snouted and blunt-snouted.',
        description_ru: 'Азиатский лососёвый с внешностью форели. Тёмное тело с пятнами. Две формы: острорылый и тупорылый.',
        characteristics: {
            size: 'medium (30-60 cm)',
            color: ['dark', 'gold', 'black', 'red'],
            features: ['spots on body', 'two forms', 'small mouth'],
            habitat: ['Siberian rivers', 'cold streams', 'mountain waters'],
            behavior: ['predator', 'insect hunting', 'bottom feeding']
        }
    },
    {
        id: 'char',
        name_en: 'Arctic Char',
        name_ru: 'Арктический голец',
        latin_name: 'Salvelinus alpinus',
        family: 'Salmonidae',
        family_ru: 'Лососёвые',
        category: 'river',
        description_en: 'Cold-water salmonid. Dark body with light spots. Red-orange belly during spawning. Variable coloration.',
        description_ru: 'Холодноводный лососёвый. Тёмное тело со светлыми пятнами. Красно-оранжевое брюхо во время нереста. Изменчивая окраска.',
        characteristics: {
            size: 'medium (30-60 cm)',
            color: ['dark', 'red', 'orange', 'silver'],
            features: ['light spots', 'red belly', 'no teeth on roof of mouth'],
            habitat: ['cold rivers', 'Arctic lakes', 'mountain waters'],
            behavior: ['predator', 'anadromous', 'spawning runs']
        }
    },
    {
        id: 'brook-trout',
        name_en: 'Brook Trout',
        name_ru: 'Ручьевая форель',
        latin_name: 'Salvelinus fontinalis',
        family: 'Salmonidae',
        family_ru: 'Лососёвые',
        category: 'river',
        description_en: 'Beautiful char with worm-like markings. Dark body with red spots edged in blue. Native to North America, introduced to Europe.',
        description_ru: 'Красивый голец с червеобразными отметинами. Тёмное тело с красными пятнами в синей кайме. Родом из Северной Америки, интродуцирован в Европу.',
        characteristics: {
            size: 'medium (20-40 cm)',
            color: ['dark', 'red', 'blue', 'orange'],
            features: ['worm-like markings', 'red spots with blue edges', 'white fin edges'],
            habitat: ['cold streams', 'clean rivers', 'spring-fed waters'],
            behavior: ['predator', 'territorial', 'insect hunting']
        }
    },
    {
        id: 'brown-trout',
        name_en: 'Brown Trout',
        name_ru: 'Ручьевая форель',
        latin_name: 'Salmo trutta',
        family: 'Salmonidae',
        family_ru: 'Лососёвые',
        category: 'river',
        description_en: 'Native European trout. Brown-gold body with black and red spots. Lives in cold streams. Highly variable form.',
        description_ru: 'Аборигенная европейская форель. Коричнево-золотистое тело с чёрными и красными пятнами. Живёт в холодных ручьях. Сильно изменчива.',
        characteristics: {
            size: 'medium (20-50 cm)',
            color: ['brown', 'gold', 'red', 'black'],
            features: ['black and red spots', 'square tail', 'large mouth'],
            habitat: ['cold streams', 'clean rivers', 'mountain waters'],
            behavior: ['predator', 'territorial', 'insect hunting']
        }
    },
    {
        id: 'sea-trout',
        name_en: 'Sea Trout',
        name_ru: 'Морская форель',
        latin_name: 'Salmo trutta trutta',
        family: 'Salmonidae',
        family_ru: 'Лососёвые',
        category: 'river',
        description_en: 'Anadromous form of brown trout. Silver body with black spots. Migrates to sea, returns to rivers to spawn.',
        description_ru: 'Проходная форма бурой форели. Серебристое тело с чёрными пятнами. Мигрирует в море, возвращается в реки на нерест.',
        characteristics: {
            size: 'large (40-80 cm)',
            color: ['silver', 'black', 'blue'],
            features: ['black spots', 'forked tail', 'streamlined body'],
            habitat: ['rivers', 'coastal waters', 'estuaries'],
            behavior: ['anadromous', 'predator', 'spawning runs']
        }
    },
    {
        id: 'asp',
        name_en: 'Asp',
        name_ru: 'Жерех',
        latin_name: 'Leuciscus aspius',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Large cyprinid predator. Silver body with dark back. Hunts by crashing into baitfish. Strong fighter.',
        description_ru: 'Крупный карповый хищник. Серебристое тело с тёмной спиной. Охотится, врезаясь в стайки рыб. Сильно сопротивляется.',
        characteristics: {
            size: 'large (50-80 cm)',
            color: ['silver', 'dark gray', 'white'],
            features: ['large mouth', 'protruding lower jaw', 'forked tail'],
            habitat: ['fast rivers', 'riffles', 'open waters'],
            behavior: ['predator', 'surface hunting', 'strong fighter']
        }
    },
    {
        id: 'silver-bream',
        name_en: 'Silver Bream',
        name_ru: 'Густера',
        latin_name: 'Blicca bjoerkna',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Medium cyprinid with deep body. Bright silver coloring. Red eyes. Similar to bream but smaller.',
        description_ru: 'Средний карповый с высоким телом. Ярко-серебристая окраска. Красные глаза. Похож на леща, но меньше.',
        characteristics: {
            size: 'small (20-30 cm)',
            color: ['silver', 'red', 'gray'],
            features: ['deep body', 'red eyes', 'large scales'],
            habitat: ['slow rivers', 'lakes', 'reservoirs', 'weedy areas'],
            behavior: ['schooling', 'bottom feeding', 'omnivorous']
        }
    },
    {
        id: 'white-eye',
        name_en: 'White-eye Bream',
        name_ru: 'Белоглазка',
        latin_name: 'Abramis sapa',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Slender bream-like fish. Silver body with large eyes. Down-turned mouth. Bottom-feeder in slow waters.',
        description_ru: 'Стройная лещеподобная рыба. Серебристое тело с большими глазами. Опущенный вниз рот. Донная рыба в медленных водах.',
        characteristics: {
            size: 'small (20-30 cm)',
            color: ['silver', 'gray', 'white'],
            features: ['large eyes', 'down-turned mouth', 'slender body'],
            habitat: ['slow rivers', 'lakes', 'reservoirs', 'deep waters'],
            behavior: ['bottom feeding', 'schooling', 'omnivorous']
        }
    },
    {
        id: 'blue-bream',
        name_en: 'Blue Bream',
        name_ru: 'Синец',
        latin_name: 'Abramis ballerus',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Elongated bream with compressed body. Silver-blue coloring. Up-turned mouth. Surface feeder.',
        description_ru: 'Удлинённый лещ со сжатым телом. Серебристо-голубая окраска. Поднятый вверх рот. Питается у поверхности.',
        characteristics: {
            size: 'medium (25-40 cm)',
            color: ['silver', 'blue', 'white'],
            features: ['elongated body', 'up-turned mouth', 'long anal fin'],
            habitat: ['slow rivers', 'lakes', 'reservoirs', 'surface waters'],
            behavior: ['surface feeding', 'schooling', 'omnivorous']
        }
    },
    {
        id: 'vimba',
        name_en: 'Vimba',
        name_ru: 'Сырь',
        latin_name: 'Vimba vimba',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Cyprinid with long snout. Silver body with dark back. Down-turned mouth with protruding lower jaw. Anadromous.',
        description_ru: 'Карповый с длинным рылом. Серебристое тело с тёмной спиной. Опущенный вниз рот с выступающей нижней челюстью. Проходной вид.',
        characteristics: {
            size: 'medium (25-40 cm)',
            color: ['silver', 'dark gray', 'black'],
            features: ['long snout', 'down-turned mouth', 'protruding lower jaw'],
            habitat: ['rivers', 'coastal waters', 'estuaries', 'spawning grounds'],
            behavior: ['anadromous', 'bottom feeding', 'spawning runs']
        }
    },
    {
        id: 'orfe',
        name_en: 'Orfe',
        name_ru: 'Золотой язь',
        latin_name: 'Leuciscus idus',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Golden variety of ide. Bright gold-orange coloring. Popular ornamental pond fish. Hardy and long-lived.',
        description_ru: 'Золотистая разновидность язя. Ярко-золотисто-оранжевая окраска. Популярная декоративная прудовая рыба. Вынослива и долгоживуща.',
        characteristics: {
            size: 'medium (30-60 cm)',
            color: ['gold', 'orange', 'yellow'],
            features: ['golden color', 'thick body', 'red fins'],
            habitat: ['rivers', 'lakes', 'ponds', 'ornamental waters'],
            behavior: ['schooling', 'omnivorous', 'surface feeding']
        }
    },
    {
        id: 'rudd',
        name_en: 'Common Rudd',
        name_ru: 'Краснопёрка',
        latin_name: 'Scardinius erythrophthalmus',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Cyprinid with green-gold body. Bright red fins and eyes. Up-turned mouth. Surface feeder in weedy waters.',
        description_ru: 'Карповый с зелено-золотистым телом. Ярко-красные плавники и глаза. Поднятый вверх рот. Питается у поверхности в заросших водах.',
        characteristics: {
            size: 'small (20-30 cm)',
            color: ['gold', 'green', 'red'],
            features: ['red fins', 'red eyes', 'up-turned mouth'],
            habitat: ['slow rivers', 'lakes', 'ponds', 'weedy areas'],
            behavior: ['surface feeding', 'schooling', 'omnivorous']
        }
    },
    {
        id: 'crucian',
        name_en: 'Crucian Carp',
        name_ru: 'Карась',
        latin_name: 'Carassius carassius',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Hardy cyprinid with deep body. Gold-bronze coloring. Can survive low oxygen. Common in still waters.',
        description_ru: 'Выносливый карповый с высоким телом. Золотисто-бронзовая окраска. Может выживать при низком кислороде. Обычен в стоячих водах.',
        characteristics: {
            size: 'medium (20-40 cm)',
            color: ['gold', 'bronze', 'silver'],
            features: ['deep body', 'small barbels', 'rounded fins'],
            habitat: ['ponds', 'lakes', 'slow rivers', 'low oxygen waters'],
            behavior: ['bottom feeding', 'omnivorous', 'hardy']
        }
    },
    {
        id: 'grass-carp',
        name_en: 'Grass Carp',
        name_ru: 'Белый амур',
        latin_name: 'Ctenopharyngodon idella',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Large herbivorous cyprinid. Elongated body, large scales. Silver-gray coloring. Eats aquatic plants.',
        description_ru: 'Крупный растительноядный карповый. Удлинённое тело, крупная чешуя. Серебристо-серая окраска. Поедает водные растения.',
        characteristics: {
            size: 'large (60-100 cm)',
            color: ['silver', 'gray', 'olive'],
            features: ['elongated body', 'large scales', 'small mouth'],
            habitat: ['rivers', 'lakes', 'reservoirs', 'weedy waters'],
            behavior: ['herbivorous', 'bottom feeding', 'fast growth']
        }
    },
    {
        id: 'silver-carp',
        name_en: 'Silver Carp',
        name_ru: 'Толстолобик',
        latin_name: 'Hypophthalmichthys molitrix',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Large filter-feeding cyprinid. Silver body with large head. Up-turned mouth. Jumps when startled.',
        description_ru: 'Крупный карповый-фильтратор. Серебристое тело с большой головой. Поднятый вверх рот. Прыгает при испуге.',
        characteristics: {
            size: 'large (60-100 cm)',
            color: ['silver', 'gray', 'white'],
            features: ['large head', 'up-turned mouth', 'small eyes'],
            habitat: ['rivers', 'lakes', 'reservoirs', 'plankton-rich waters'],
            behavior: ['filter feeding', 'jumping', 'schooling']
        }
    },
    {
        id: 'bighead-carp',
        name_en: 'Bighead Carp',
        name_ru: 'Пёстрый толстолобик',
        latin_name: 'Hypophthalmichthys nobilis',
        family: 'Cyprinidae',
        family_ru: 'Карповые',
        category: 'river',
        description_en: 'Very large cyprinid with massive head. Dark mottled body. Filter feeder. Fast-growing aquaculture species.',
        description_ru: 'Очень крупный карповый с массивной головой. Тёмное пёстрое тело. Фильтратор. Быстрорастущий вид аквакультуры.',
        characteristics: {
            size: 'very large (80-120 cm)',
            color: ['dark', 'mottled', 'gray'],
            features: ['massive head', 'large mouth', 'small eyes'],
            habitat: ['rivers', 'lakes', 'reservoirs', 'warm waters'],
            behavior: ['filter feeding', 'schooling', 'fast growth']
        }
    }
];
