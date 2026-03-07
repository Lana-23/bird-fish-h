// Mediterranean fish species data
export const mediterraneanFish = [
    {
        id: 'sea-bream',
        name_en: 'Sea Bream',
        name_ru: 'Морской лещ',
        latin_name: 'Spondyliosoma cantharus',
        family: 'Sparidae',
        family_ru: 'Спаровые',
        category: 'mediterranean',
        description_en: 'Silvery fish with blue-gray back. Common in Mediterranean and Atlantic waters. Important food fish.',
        description_ru: 'Серебристая рыба с голубовато-серой спиной. Распространена в Средиземноморском и Атлантическом морях. Важная промысловая рыба.',
        characteristics: {
            size: 'medium (25-35 cm)',
            color: ['silvery', 'blue-gray', 'white'],
            features: ['oval body', 'forked tail', 'small mouth'],
            habitat: ['coastal waters', 'rocky seabeds', 'seagrass beds'],
            behavior: ['schooling', 'bottom feeding', 'omnivorous']
        }
    },
    {
        id: 'grouper',
        name_en: 'Mediterranean Grouper',
        name_ru: 'Средиземноморский груп',
        latin_name: 'Epinephelus marginatus',
        family: 'Serranidae',
        family_ru: 'Серрановые',
        category: 'mediterranean',
        description_en: 'Large predatory fish. Brown-reddish coloring. Lives among rocky underwater formations. Slow-growing but long-lived.',
        description_ru: 'Крупная хищная рыба. Коричнево-красная окраска. Живет среди скалистых подводных образований. Медленно растущая, но долгоживущая.',
        characteristics: {
            size: 'large (60-100 cm)',
            color: ['brown', 'reddish', 'dark brown'],
            features: ['robust body', 'large mouth', 'thick lips'],
            habitat: ['rocky underwater formations', 'coastal reefs', 'deep waters'],
            behavior: ['predator', 'solitary', 'ambush hunting', 'slow-growing']
        }
    },
    {
        id: 'mackerel',
        name_en: 'Atlantic Mackerel',
        name_ru: 'Атлантическая скумбрия',
        latin_name: 'Scomber scombrus',
        family: 'Scombridae',
        family_ru: 'Скумбриевые',
        category: 'mediterranean',
        description_en: 'Streamlined fish with blue-green back and wavy dark stripes. Fast swimmer. Important commercial food fish.',
        description_ru: 'Стройная рыба с сине-зелёной спиной и волнистыми тёмными полосами. Быстрый пловец. Важная промысловая рыба.',
        characteristics: {
            size: 'medium (30-40 cm)',
            color: ['blue-green', 'silver', 'dark green'],
            features: ['streamlined body', 'wavy dark stripes', 'forked tail'],
            habitat: ['open ocean', 'coastal waters', 'pelagic zone'],
            behavior: ['fast swimmer', 'schooling', 'migratory']
        }
    },
    {
        id: 'swordfish',
        name_en: 'Swordfish',
        name_ru: 'Меч-рыба',
        latin_name: 'Xiphias gladius',
        family: 'Xiphiidae',
        family_ru: 'Меч-рыбные',
        category: 'mediterranean',
        description_en: 'Large predatory fish with distinctive long flat bill. Dark gray above, silver below. Can reach speeds of 97 km/h.',
        description_ru: 'Крупная хищная рыба с характерным длинным плоским мечом. Тёмно-серая сверху, серебристая снизу. Может достигать скорости 97 км/ч.',
        characteristics: {
            size: 'large (200-300 cm)',
            color: ['dark gray', 'silver', 'blue-gray'],
            features: ['long flat bill', 'streamlined body', 'crescent-shaped tail'],
            habitat: ['open ocean', 'tropical and temperate waters', 'deep waters'],
            behavior: ['fast swimmer', 'predator', 'solitary', 'surface dweller']
        }
    },
    {
        id: 'octopus',
        name_en: 'Common Octopus',
        name_ru: 'Обыкновенный осьминог',
        latin_name: 'Octopus vulgaris',
        family: 'Octopodidae',
        family_ru: 'Осьминоговые',
        category: 'mediterranean',
        description_en: 'Highly intelligent cephalopod with eight arms. Can change color and texture. Master of camouflage and escape.',
        description_ru: 'Высокоразумный головоногий моллюск с восемью щупальцами. Может менять цвет и текстуру. Мастер маскировки и побега.',
        characteristics: {
            size: 'medium (30-90 cm arm span)',
            color: ['reddish-brown', 'gray', 'variable (camouflage)'],
            features: ['eight arms with suckers', 'soft body', 'no internal shell'],
            habitat: ['rocky seabeds', 'coral reefs', 'coastal waters'],
            behavior: ['highly intelligent', 'camouflage', 'nocturnal', 'solitary']
        }
    },
    {
        id: 'cuttlefish',
        name_en: 'Common Cuttlefish',
        name_ru: 'Обыкновенная каракатица',
        latin_name: 'Sepia officinalis',
        family: 'Sepiidae',
        family_ru: 'Каракатицевые',
        category: 'mediterranean',
        description_en: 'Cephalopod with internal shell called cuttlebone. Rapidly changes skin color for communication and camouflage.',
        description_ru: 'Головоногий моллюск с внутренней раковиной. Быстро меняет цвет кожи для общения и маскировки.',
        characteristics: {
            size: 'medium (15-25 cm)',
            color: ['brown', 'gray', 'variable (camouflage)'],
            features: ['internal shell (cuttlebone)', 'ten arms', 'W-shaped pupils'],
            habitat: ['coastal waters', 'seagrass beds', 'sandy bottoms'],
            behavior: ['camouflage', 'communication through color change', 'predator']
        }
    },
    {
        id: 'red-mullet',
        name_en: 'Red Mullet',
        name_ru: 'Барабулька',
        latin_name: 'Mullus barbatus',
        family: 'Mullidae',
        family_ru: 'Барбулевые',
        category: 'mediterranean',
        description_en: 'Small reddish fish with distinctive barbels under chin. Prized delicacy in Mediterranean cuisine.',
        description_ru: 'Маленькая красноватая рыба с характерными усиками под подбородком. Ценимый деликатес средиземноморской кухни.',
        characteristics: {
            size: 'small (15-25 cm)',
            color: ['reddish', 'pink', 'silver'],
            features: ['barbels under chin', 'elongated body', 'forked tail'],
            habitat: ['sandy bottoms', 'muddy seabeds', 'coastal waters'],
            behavior: ['bottom feeding', 'schooling', 'burrowing in sand']
        }
    },
    {
        id: 'anchovy',
        name_en: 'European Anchovy',
        name_ru: 'Европейский анчоус',
        latin_name: 'Engraulis encrasicolus',
        family: 'Engraulidae',
        family_ru: 'Анчоусовые',
        category: 'mediterranean',
        description_en: 'Small schooling fish with silvery body. Important commercial species. Often preserved in salt or oil.',
        description_ru: 'Маленькая стайная рыба с серебристым телом. Важный промысловый вид. Часто консервируется в соли или масле.',
        characteristics: {
            size: 'small (10-15 cm)',
            color: ['silvery', 'green-blue', 'gray'],
            features: ['elongated body', 'large mouth', 'pointed snout'],
            habitat: ['coastal waters', 'open sea', 'estuaries'],
            behavior: ['schooling', 'filter feeding', 'migratory']
        }
    },
    {
        id: 'sardine',
        name_en: 'European Pilchard',
        name_ru: 'Европейская сардина',
        latin_name: 'Sardina pilchardus',
        family: 'Clupeidae',
        family_ru: 'Сельдевые',
        category: 'mediterranean',
        description_en: 'Small oily fish that travels in large schools. Silver body with blue-green back. Rich in omega-3 fatty acids.',
        description_ru: 'Маленькая жирная рыба, путешествующая большими стаями. Серебристое тело с сине-зелёной спиной. Богата омега-3 жирными кислотами.',
        characteristics: {
            size: 'small (15-20 cm)',
            color: ['silver', 'blue-green', 'gray'],
            features: ['streamlined body', 'forked tail', 'cycloid scales'],
            habitat: ['coastal waters', 'continental shelf', 'open sea'],
            behavior: ['schooling', 'filter feeding', 'migratory', 'surface dweller']
        }
    },
    {
        id: 'turbot',
        name_en: 'Turbot',
        name_ru: 'Турбо',
        latin_name: 'Scophthalmus maximus',
        family: 'Scophthalmidae',
        family_ru: 'Калкановые',
        category: 'mediterranean',
        description_en: 'Large flatfish with diamond-shaped body. Both eyes on left side. Highly prized food fish.',
        description_ru: 'Крупная камболообразная рыба с ромбовидным телом. Оба глаза на левой стороне. Ценная промысловая рыба.',
        characteristics: {
            size: 'large (50-70 cm)',
            color: ['brown', 'gray', 'sandy'],
            features: ['diamond-shaped body', 'both eyes on left side', 'flat body'],
            habitat: ['sandy seabeds', 'shallow coastal waters', 'continental shelf'],
            behavior: ['bottom dwelling', 'ambush predator', 'camouflage']
        }
    },
    {
        id: 'monkfish',
        name_en: 'Monkfish',
        name_ru: 'Морской чёрт',
        latin_name: 'Lophius piscatorius',
        family: 'Lophiidae',
        family_ru: 'Удильщиковые',
        category: 'mediterranean',
        description_en: 'Bottom-dwelling fish with large mouth and lure on head. Ambush predator. White firm flesh prized by chefs.',
        description_ru: 'Донная рыба с большим ртом и приманкой на голове. Хищник-засадчик. Белое плотное мясо ценится шеф-поварами.',
        characteristics: {
            size: 'large (100-150 cm)',
            color: ['brown', 'gray', 'dark'],
            features: ['large mouth', 'lure on head', 'flat head', 'wide body'],
            habitat: ['ocean floor', 'sandy bottoms', 'deep waters'],
            behavior: ['ambush predator', 'bottom dwelling', 'luring prey']
        }
    },
    {
        id: 'wreckfish',
        name_en: 'Wreckfish',
        name_ru: 'Каменный окунь',
        latin_name: 'Polyprion americanus',
        family: 'Polyprionidae',
        family_ru: 'Каменноокуневые',
        category: 'mediterranean',
        description_en: 'Large deep-water fish with robust body. Gray-brown coloring. Lives near rocky outcrops and shipwrecks.',
        description_ru: 'Крупная глубоководная рыба с крепким телом. Серо-коричневая окраска. Живёт у скалистых выступов и затонувших судов.',
        characteristics: {
            size: 'large (60-100 cm)',
            color: ['gray', 'brown', 'dark brown'],
            features: ['robust body', 'large head', 'spiny dorsal fin'],
            habitat: ['deep waters', 'rocky outcrops', 'shipwrecks', 'caves'],
            behavior: ['solitary', 'predator', 'territorial']
        }
    },
    {
        id: 'amberjack',
        name_en: 'Greater Amberjack',
        name_ru: 'Сериола',
        latin_name: 'Seriola dumerili',
        family: 'Carangidae',
        family_ru: 'Ставридовые',
        category: 'mediterranean',
        description_en: 'Large powerful fish with streamlined body. Silver with bronze stripe. Popular game fish and seafood.',
        description_ru: 'Крупная мощная рыба с обтекаемым телом. Серебристая с бронзовой полосой. Популярная спортивная рыба и морепродукт.',
        characteristics: {
            size: 'large (100-150 cm)',
            color: ['silver', 'bronze', 'blue-gray'],
            features: ['streamlined body', 'forked tail', 'bronze lateral stripe'],
            habitat: ['open waters', 'reefs', 'offshore structures'],
            behavior: ['fast swimmer', 'predator', 'schooling']
        }
    },
    {
        id: 'triggerfish',
        name_en: 'Gray Triggerfish',
        name_ru: 'Рыба-спускокур',
        latin_name: 'Balistes capriscus',
        family: 'Balistidae',
        family_ru: 'Спинороговые',
        category: 'mediterranean',
        description_en: 'Distinctive oval body with trigger-like dorsal spine. Omnivorous, feeding on shellfish and crustaceans.',
        description_ru: 'Характерное овальное тело с спусковым шипом на спинном плавнике. Всеядная, питается моллюсками и ракообразными.',
        characteristics: {
            size: 'medium (25-35 cm)',
            color: ['gray', 'brown', 'olive'],
            features: ['oval body', 'trigger-like dorsal spine', 'small mouth with strong teeth'],
            habitat: ['coral reefs', 'rocky areas', 'sandy bottoms'],
            behavior: ['omnivorous', 'shellfish eating', 'territorial']
        }
    }
];
