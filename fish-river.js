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
    }
];
