// Tropical fish species data
export const tropicalFish = [
    {
        id: 'clownfish',
        name_en: 'Clownfish',
        name_ru: 'Рыба-клоун',
        latin_name: 'Amphiprion ocellaris',
        family: 'Pomacentridae',
        family_ru: 'Помацентровые',
        category: 'tropical',
        description_en: 'Bright orange and white striped fish. Lives in symbiosis with sea anemones. Famous from the movie Finding Nemo.',
        description_ru: 'Ярко-оранжевая рыба с белыми полосами. Живет в симбиозе с морскими анемонами. Известна из фильма "В поисках Немо".',
        characteristics: {
            size: 'small (10-15 cm)',
            color: ['bright orange', 'white', 'black'],
            features: ['white stripes with black borders', 'oval body', 'rounded fins'],
            habitat: ['coral reefs', 'sea anemones', 'tropical waters'],
            behavior: ['symbiosis with anemones', 'schooling', 'territorial']
        }
    },
    {
        id: 'blue-tang',
        name_en: 'Blue Tang',
        name_ru: 'Голубая танг',
        latin_name: 'Paracanthurus hepatus',
        family: 'Acanthuridae',
        family_ru: 'Хирурговые',
        category: 'tropical',
        description_en: 'Bright blue reef fish. Herbivorous, feeding on algae. Found in coral reefs of the Indo-Pacific region.',
        description_ru: 'Ярко-голубая коралловая рыба. Травоядная, питается водорослями. Встречается в коралловых рифах Индо-Тихоокеанского региона.',
        characteristics: {
            size: 'medium (20-30 cm)',
            color: ['bright blue', 'black', 'yellow'],
            features: ['oval flat body', 'black markings', 'yellow tail'],
            habitat: ['coral reefs', 'Indo-Pacific waters', 'tropical lagoons'],
            behavior: ['herbivorous', 'algae feeding', 'schooling', 'hiding in coral']
        }
    },
    {
        id: 'lionfish',
        name_en: 'Lionfish',
        name_ru: 'Крылатка',
        latin_name: 'Pterois volitans',
        family: 'Scorpaenidae',
        family_ru: 'Скорпеновые',
        category: 'tropical',
        description_en: 'Venomous fish with elaborate fins that resemble a lion\'s mane. Beautiful but dangerous predator of the coral reef.',
        description_ru: 'Ядовитая рыба с перепончатыми плавниками, напоминающими львиную гриву. Красивый, но опасный хищник коралловых рифов.',
        characteristics: {
            size: 'medium (20-30 cm)',
            color: ['reddish-brown', 'white', 'orange'],
            features: ['elaborate venomous fins', 'striped pattern', 'fan-like pectoral fins'],
            habitat: ['coral reefs', 'tropical waters', 'rocky crevices'],
            behavior: ['venomous', 'predator', 'solitary', 'ambush hunting']
        }
    },
    {
        id: 'moray-eel',
        name_en: 'Giant Moray Eel',
        name_ru: 'Гигантская мурена',
        latin_name: 'Gymnothorax javanicus',
        family: 'Muraenidae',
        family_ru: 'Муреновые',
        category: 'tropical',
        description_en: 'Large eel with mottled brown and yellow skin. Sharp teeth, powerful jaws. Hides in coral reef crevices.',
        description_ru: 'Крупный угорь с пёстрой коричнево-жёлтой кожей. Острые зубы, мощные челюсти. Прячется в расщелинах коралловых рифов.',
        characteristics: {
            size: 'large (100-300 cm)',
            color: ['brown', 'yellow', 'mottled'],
            features: ['elongated snake-like body', 'sharp teeth', 'powerful jaws'],
            habitat: ['coral reef crevices', 'tropical waters', 'rocky caves'],
            behavior: ['nocturnal', 'predator', 'hiding', 'territorial']
        }
    },
    {
        id: 'angelfish',
        name_en: 'Freshwater Angelfish',
        name_ru: 'Пресноводный скалярий',
        latin_name: 'Pterophyllum scalare',
        family: 'Cichlidae',
        family_ru: 'Цихловые',
        category: 'tropical',
        description_en: 'Triangular body shape with long flowing fins. Silver with vertical black stripes. Popular aquarium fish from Amazon basin.',
        description_ru: 'Треугольная форма тела с длинными плавниками. Серебристая с вертикальными чёрными полосами. Популярная аквариумная рыба из бассейна Амазонки.',
        characteristics: {
            size: 'medium (15-20 cm)',
            color: ['silver', 'black', 'white'],
            features: ['triangular body', 'long flowing fins', 'vertical black stripes'],
            habitat: ['Amazon basin', 'slow-moving rivers', 'flooded forests'],
            behavior: ['graceful swimming', 'omnivorous', 'pair bonding', 'territorial']
        }
    },
    {
        id: 'barracuda',
        name_en: 'Great Barracuda',
        name_ru: 'Большая барракуда',
        latin_name: 'Sphyraena barracuda',
        family: 'Sphyraenidae',
        family_ru: 'Барракудовые',
        category: 'tropical',
        description_en: 'Elongated silver fish with prominent jaw and sharp teeth. Fierce predator. Can grow up to 2 meters long.',
        description_ru: 'Удлинённая серебристая рыба с выступающей челюстью и острыми зубами. Свирепый хищник. Может достигать 2 метров в длину.',
        characteristics: {
            size: 'large (100-180 cm)',
            color: ['silver', 'gray', 'blue-gray'],
            features: ['elongated body', 'prominent jaw', 'sharp teeth'],
            habitat: ['tropical waters', 'coral reefs', 'open ocean'],
            behavior: ['fierce predator', 'fast swimmer', 'solitary', 'ambush hunting']
        }
    },
    {
        id: 'stingray',
        name_en: 'Blue-spotted Stingray',
        name_ru: 'Голубопятнистый скат-хвостокол',
        latin_name: 'Neotrygon kuhlii',
        family: 'Dasyatidae',
        family_ru: 'Хвостоколовые',
        category: 'tropical',
        description_en: 'Flat body with distinctive blue spots on yellow-brown background. Venomous spine on tail. Glides along ocean floor.',
        description_ru: 'Плоское тело с характерными голубыми пятнами на жёлто-коричневом фоне. Ядовитый шип на хвосте. Скользит по дну океана.',
        characteristics: {
            size: 'medium (30-70 cm)',
            color: ['yellow-brown', 'blue', 'white'],
            features: ['flat diamond-shaped body', 'blue spots', 'venomous tail spine'],
            habitat: ['ocean floor', 'sandy bottoms', 'coral reefs', 'shallow lagoons'],
            behavior: ['bottom dwelling', 'gliding', 'camouflage', 'nocturnal']
        }
    },
    {
        id: 'seahorse',
        name_en: 'Common Seahorse',
        name_ru: 'Морской конёк',
        latin_name: 'Hippocampus kuda',
        family: 'Syngnathidae',
        family_ru: 'Игловые',
        category: 'tropical',
        description_en: 'Unique upright swimming posture. Horse-like head, prehensile tail. Males carry eggs in brood pouch.',
        description_ru: 'Уникальная вертикальная поза при плавании. Голова как у лошади, цепкий хвост. Самцы вынашивают икру в выводковой сумке.',
        characteristics: {
            size: 'small (15-30 cm)',
            color: ['yellow', 'brown', 'orange', 'black'],
            features: ['horse-like head', 'prehensile tail', 'upright posture', 'bony plates'],
            habitat: ['coral reefs', 'seagrass beds', 'shallow tropical waters'],
            behavior: ['upright swimming', 'tail grasping', 'male pregnancy', 'camouflage']
        }
    }
];
