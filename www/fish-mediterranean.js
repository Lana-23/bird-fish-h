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
    },
    // 70 Additional Mediterranean Fish
    {
        id: 'gilthead-bream',
        name_en: 'Gilthead Sea Bream',
        name_ru: 'Дорада',
        latin_name: 'Sparus aurata',
        family: 'Sparidae',
        family_ru: 'Спаровые',
        category: 'mediterranean',
        description_en: 'Popular food fish with golden band between eyes. Silvery body with dark spot on gill cover. Farmed extensively.',
        description_ru: 'Популярная пищевая рыба с золотой полосой между глазами. Серебристое тело с тёмным пятном на жаберной крышке. Широко разводится.',
        characteristics: {
            size: 'medium (30-45 cm)',
            color: ['silvery', 'golden', 'gray'],
            features: ['golden band between eyes', 'dark spot on gill', 'oval body'],
            habitat: ['coastal waters', 'seagrass beds', 'lagoons'],
            behavior: ['omnivorous', 'schooling', 'bottom feeding']
        }
    },
    {
        id: 'white-seabream',
        name_en: 'White Sea Bream',
        name_ru: 'Белый морской лещ',
        latin_name: 'Diplodus sargus',
        family: 'Sparidae',
        family_ru: 'Спаровые',
        category: 'mediterranean',
        description_en: 'Silvery fish with black vertical bands. Strong teeth for crushing shells. Common in rocky areas.',
        description_ru: 'Серебристая рыба с чёрными вертикальными полосами. Сильные зубы для дробления раковин. Обычна в скалистых районах.',
        characteristics: {
            size: 'medium (25-35 cm)',
            color: ['silvery', 'black', 'white'],
            features: ['black vertical bands', 'strong teeth', 'oval body'],
            habitat: ['rocky seabeds', 'coastal waters', 'seagrass beds'],
            behavior: ['omnivorous', 'shellfish eating', 'territorial']
        }
    },
    {
        id: 'common-dentex',
        name_en: 'Common Dentex',
        name_ru: 'Зубарь',
        latin_name: 'Dentex dentex',
        family: 'Sparidae',
        family_ru: 'Спаровые',
        category: 'mediterranean',
        description_en: 'Powerful predatory fish with large canine teeth. Blue-gray back with silvery sides. Highly prized game fish.',
        description_ru: 'Мощная хищная рыба с большими клыками. Сине-серая спина с серебристыми боками. Ценная спортивная рыба.',
        characteristics: {
            size: 'large (50-80 cm)',
            color: ['blue-gray', 'silvery', 'pinkish'],
            features: ['large canine teeth', 'robust body', 'pointed snout'],
            habitat: ['rocky seabeds', 'coastal waters', 'deep waters'],
            behavior: ['predator', 'schooling', 'fast swimmer']
        }
    },
    {
        id: 'salema',
        name_en: 'Salema',
        name_ru: 'Салема',
        latin_name: 'Sarpa salpa',
        family: 'Sparidae',
        family_ru: 'Спаровые',
        category: 'mediterranean',
        description_en: 'Herbivorous fish with golden longitudinal stripes. Feeds on seagrass. Can be toxic in some regions.',
        description_ru: 'Травоядная рыба с золотыми продольными полосами. Питается морской травой. Может быть токсичной в некоторых регионах.',
        characteristics: {
            size: 'medium (25-35 cm)',
            color: ['silvery', 'golden', 'yellow'],
            features: ['golden longitudinal stripes', 'small mouth', 'oval body'],
            habitat: ['seagrass beds', 'rocky areas', 'coastal waters'],
            behavior: ['herbivorous', 'schooling', 'grazing']
        }
    },
    {
        id: 'common-two-banded',
        name_en: 'Common Two-banded Sea Bream',
        name_ru: 'Двухполосая сарпа',
        latin_name: 'Diplodus vulgaris',
        family: 'Sparidae',
        family_ru: 'Спаровые',
        category: 'mediterranean',
        description_en: 'Silvery fish with two black bands. Small pointed mouth. Common in Mediterranean markets.',
        description_ru: 'Серебристая рыба с двумя чёрными полосами. Маленький заострённый рот. Обычна на средиземноморских рынках.',
        characteristics: {
            size: 'small (20-30 cm)',
            color: ['silvery', 'black', 'yellow'],
            features: ['two black bands', 'yellow tail base', 'small mouth'],
            habitat: ['rocky seabeds', 'coastal waters', 'seagrass beds'],
            behavior: ['omnivorous', 'schooling', 'bottom feeding']
        }
    },
    {
        id: 'zebra-seabream',
        name_en: 'Zebra Sea Bream',
        name_ru: 'Зебровая сарпа',
        latin_name: 'Diplodus cervinus',
        family: 'Sparidae',
        family_ru: 'Спаровые',
        category: 'mediterranean',
        description_en: 'Distinctive black and white vertical stripes resembling zebra pattern. Large size for seabream.',
        description_ru: 'Отличительные чёрно-белые вертикальные полосы, напоминающие зебру. Крупный размер для морского леща.',
        characteristics: {
            size: 'medium (35-45 cm)',
            color: ['silvery', 'black', 'white'],
            features: ['vertical black stripes', 'robust body', 'thick lips'],
            habitat: ['rocky seabeds', 'deep waters', 'coastal reefs'],
            behavior: ['omnivorous', 'schooling', 'bottom feeding']
        }
    },
    {
        id: 'sharp-snouted-seabream',
        name_en: 'Sharp-snouted Seabream',
        name_ru: 'Остромордый морской лещ',
        latin_name: 'Diplodus puntazzo',
        family: 'Sparidae',
        family_ru: 'Спаровые',
        category: 'mediterranean',
        description_en: 'Elongated fish with pointed snout and dark vertical bands. Omnivorous feeder.',
        description_ru: 'Удлинённая рыба с заострённым рылом и тёмными вертикальными полосами. Всеядная.',
        characteristics: {
            size: 'medium (25-35 cm)',
            color: ['silvery', 'black', 'gray'],
            features: ['pointed snout', 'vertical bands', 'elongated body'],
            habitat: ['rocky areas', 'seagrass beds', 'coastal waters'],
            behavior: ['omnivorous', 'schooling', 'agile swimmer']
        }
    },
    {
        id: 'red-seabream',
        name_en: 'Red Sea Bream',
        name_ru: 'Красный морской лещ',
        latin_name: 'Pagrus major',
        family: 'Sparidae',
        family_ru: 'Спаровые',
        category: 'mediterranean',
        description_en: 'Pinkish-red fish with blue spots. Highly valued in Asian and Mediterranean cuisine.',
        description_ru: 'Розовато-красная рыба с синими пятнами. Высоко ценится в азиатской и средиземноморской кухне.',
        characteristics: {
            size: 'large (50-80 cm)',
            color: ['pink', 'red', 'silver', 'blue'],
            features: ['blue spots', 'robust body', 'strong jaws'],
            habitat: ['sandy bottoms', 'rocky areas', 'coastal waters'],
            behavior: ['predator', 'shellfish eating', 'schooling']
        }
    },
    {
        id: 'goldline',
        name_en: 'Goldline',
        name_ru: 'Золотистая сарпа',
        latin_name: 'Sarpa major',
        family: 'Sparidae',
        family_ru: 'Спаровые',
        category: 'mediterranean',
        description_en: 'Herbivorous fish with golden stripes. Related to salema. Grazes on algae.',
        description_ru: 'Травоядная рыба с золотыми полосами. Родственник салемы. Пасётся на водорослях.',
        characteristics: {
            size: 'medium (25-35 cm)',
            color: ['silvery', 'golden', 'green'],
            features: ['golden longitudinal stripes', 'small mouth', 'herbivorous teeth'],
            habitat: ['seagrass beds', 'rocky areas', 'algae-rich waters'],
            behavior: ['herbivorous', 'schooling', 'grazing']
        }
    },
    {
        id: 'blacktail',
        name_en: 'Blacktail Comber',
        name_ru: 'Чернохвостая комber',
        latin_name: 'Serranus atricauda',
        family: 'Serranidae',
        family_ru: 'Серрановые',
        category: 'mediterranean',
        description_en: 'Small predatory fish with black tail. Brown body with dark markings. Rocky habitat specialist.',
        description_ru: 'Маленькая хищная рыба с чёрным хвостом. Коричневое тело с тёмными отметинами. Специалист по скалистым местообитаниям.',
        characteristics: {
            size: 'small (20-30 cm)',
            color: ['brown', 'black', 'orange'],
            features: ['black tail', 'dark markings', 'robust body'],
            habitat: ['rocky seabeds', 'coastal waters', 'reefs'],
            behavior: ['predator', 'territorial', 'solitary']
        }
    },
    {
        id: 'painted-comber',
        name_en: 'Painted Comber',
        name_ru: 'Расписная комber',
        latin_name: 'Serranus scriba',
        family: 'Serranidae',
        family_ru: 'Серрановые',
        category: 'mediterranean',
        description_en: 'Colorful fish with red and blue stripes. Distinctive pattern on sides. Mediterranean endemic.',
        description_ru: 'Красочная рыба с красными и синими полосами. Отличительный узор на боках. Эндемик Средиземноморья.',
        characteristics: {
            size: 'small (20-25 cm)',
            color: ['brown', 'red', 'blue', 'orange'],
            features: ['red and blue stripes', 'distinctive pattern', 'elongated body'],
            habitat: ['rocky seabeds', 'coastal waters', 'seagrass beds'],
            behavior: ['predator', 'territorial', 'solitary']
        }
    },
    {
        id: 'dusky-grouper',
        name_en: 'Dusky Grouper',
        name_ru: 'Тёмный груп',
        latin_name: 'Epinephelus marginatus',
        family: 'Serranidae',
        family_ru: 'Серрановые',
        category: 'mediterranean',
        description_en: 'Large grouper with dark brown body. Can change color. Long-lived species up to 50 years.',
        description_ru: 'Крупный груп с тёмно-коричневым телом. Может менять цвет. Долгоживущий вид до 50 лет.',
        characteristics: {
            size: 'large (80-150 cm)',
            color: ['dark brown', 'black', 'gray'],
            features: ['robust body', 'large mouth', 'thick lips'],
            habitat: ['rocky reefs', 'deep waters', 'coastal caves'],
            behavior: ['predator', 'solitary', 'territorial', 'slow-growing']
        }
    },
    {
        id: 'goldblotch-grouper',
        name_en: 'Goldblotch Grouper',
        name_ru: 'Золотнистый груп',
        latin_name: 'Epinephelus costae',
        family: 'Serranidae',
        family_ru: 'Серрановые',
        category: 'mediterranean',
        description_en: 'Medium grouper with brown body and golden spots. Similar to dusky grouper but smaller.',
        description_ru: 'Средний груп с коричневым телом и золотыми пятнами. Похож на тёмного група, но меньше.',
        characteristics: {
            size: 'medium (50-80 cm)',
            color: ['brown', 'golden', 'yellow'],
            features: ['golden spots', 'robust body', 'large mouth'],
            habitat: ['rocky reefs', 'sandy bottoms', 'coastal waters'],
            behavior: ['predator', 'solitary', 'ambush hunting']
        }
    },
    {
        id: 'white-grouper',
        name_en: 'White Grouper',
        name_ru: 'Белый груп',
        latin_name: 'Epinephelus aeneus',
        family: 'Serranidae',
        family_ru: 'Серрановые',
        category: 'mediterranean',
        description_en: 'Large grouper with pale gray-brown body. Important commercial species. Atlantic-Mediterranean distribution.',
        description_ru: 'Крупный груп с бледным серо-коричневым телом. Важный промысловый вид. Атлантическо-средиземноморское распространение.',
        characteristics: {
            size: 'large (80-120 cm)',
            color: ['gray', 'brown', 'white'],
            features: ['pale body', 'robust build', 'large mouth'],
            habitat: ['sandy bottoms', 'rocky areas', 'coastal waters'],
            behavior: ['predator', 'solitary', 'ambush hunting']
        }
    },
    {
        id: 'european-seabass',
        name_en: 'European Sea Bass',
        name_ru: 'Морской окунь',
        latin_name: 'Dicentrarchus labrax',
        family: 'Moronidae',
        family_ru: 'Мороновые',
        category: 'mediterranean',
        description_en: 'Silvery fish with dark back. Popular food fish and game species. Farmed extensively.',
        description_ru: 'Серебристая рыба с тёмной спиной. Популярная пищевая и спортивная рыба. Широко разводится.',
        characteristics: {
            size: 'medium (40-65 cm)',
            color: ['silvery', 'gray', 'dark green'],
            features: ['elongated body', 'spiny dorsal fin', 'forked tail'],
            habitat: ['coastal waters', 'estuaries', 'lagoons'],
            behavior: ['predator', 'schooling', 'migratory']
        }
    },
    {
        id: 'lebranche-seabass',
        name_en: 'Lebranche Sea Bass',
        name_ru: 'Бразильский морской окунь',
        latin_name: 'Dicentrarchus punctatus',
        family: 'Moronidae',
        family_ru: 'Мороновые',
        category: 'mediterranean',
        description_en: 'Similar to European sea bass but with black spots on sides. Smaller size.',
        description_ru: 'Похож на европейского морского окуня, но с чёрными пятнами на боках. Меньший размер.',
        characteristics: {
            size: 'medium (30-45 cm)',
            color: ['silvery', 'gray', 'black'],
            features: ['black spots', 'elongated body', 'spiny dorsal fin'],
            habitat: ['coastal waters', 'estuaries', 'lagoons'],
            behavior: ['predator', 'schooling', 'coastal']
        }
    },
    {
        id: 'greater-amberjack',
        name_en: 'Greater Amberjack',
        name_ru: 'Большая сериола',
        latin_name: 'Seriola dumerili',
        family: 'Carangidae',
        family_ru: 'Ставридовые',
        category: 'mediterranean',
        description_en: 'Large powerful jack with bronze lateral band. Fast swimmer. Prized game fish.',
        description_ru: 'Крупный мощный ставридовый с бронзовой боковой полосой. Быстрый пловец. Ценная спортивная рыба.',
        characteristics: {
            size: 'large (100-180 cm)',
            color: ['silver', 'bronze', 'blue'],
            features: ['bronze lateral band', 'forked tail', 'streamlined body'],
            habitat: ['open waters', 'reefs', 'offshore structures'],
            behavior: ['fast swimmer', 'predator', 'schooling']
        }
    },
    {
        id: 'bluefish',
        name_en: 'Bluefish',
        name_ru: 'Скумбриевая щука',
        latin_name: 'Pomatomus saltatrix',
        family: 'Pomatomidae',
        family_ru: 'Поматомовые',
        category: 'mediterranean',
        description_en: 'Aggressive predatory fish with blue-green back. Sharp teeth. Follows baitfish schools.',
        description_ru: 'Агрессивная хищная рыба с сине-зелёной спиной. Острые зубы. Следует за стаями кормовой рыбы.',
        characteristics: {
            size: 'medium (40-60 cm)',
            color: ['blue-green', 'silver', 'white'],
            features: ['sharp teeth', 'streamlined body', 'forked tail'],
            habitat: ['coastal waters', 'open sea', 'estuaries'],
            behavior: ['aggressive predator', 'schooling', 'fast swimmer']
        }
    },
    {
        id: 'atlantic-bonito',
        name_en: 'Atlantic Bonito',
        name_ru: 'Атлантический бонито',
        latin_name: 'Sarda sarda',
        family: 'Scombridae',
        family_ru: 'Скумбриевые',
        category: 'mediterranean',
        description_en: 'Tuna-like fish with dark oblique stripes on back. Fast swimmer. Important food fish.',
        description_ru: 'Тунцеловидная рыба с тёмными косыми полосами на спине. Быстрый пловец. Важная пищевая рыба.',
        characteristics: {
            size: 'medium (40-60 cm)',
            color: ['blue', 'silver', 'dark'],
            features: ['dark oblique stripes', 'streamlined body', 'forked tail'],
            habitat: ['open sea', 'coastal waters', 'pelagic zone'],
            behavior: ['fast swimmer', 'schooling', 'predator']
        }
    },
    {
        id: 'skipjack-tuna',
        name_en: 'Skipjack Tuna',
        name_ru: 'Полосатый тунец',
        latin_name: 'Katsuwonus pelamis',
        family: 'Scombridae',
        family_ru: 'Скумбриевые',
        category: 'mediterranean',
        description_en: 'Medium tuna with dark horizontal bands on belly. Important commercial species.',
        description_ru: 'Средний тунец с тёмными горизонтальными полосами на брюхе. Важный промысловый вид.',
        characteristics: {
            size: 'medium (50-80 cm)',
            color: ['blue', 'silver', 'black'],
            features: ['horizontal bands on belly', 'streamlined body', 'forked tail'],
            habitat: ['open ocean', 'tropical waters', 'pelagic zone'],
            behavior: ['fast swimmer', 'schooling', 'predator']
        }
    },
    {
        id: 'yellowfin-tuna',
        name_en: 'Yellowfin Tuna',
        name_ru: 'Желтопёрый тунец',
        latin_name: 'Thunnus albacares',
        family: 'Scombridae',
        family_ru: 'Скумбриевые',
        category: 'mediterranean',
        description_en: 'Large tuna with bright yellow fins. Can reach 200 kg. Highly prized for sushi.',
        description_ru: 'Крупный тунец с ярко-жёлтыми плавниками. Может достигать 200 кг. Высоко ценится для суши.',
        characteristics: {
            size: 'very large (150-200 cm)',
            color: ['blue', 'silver', 'yellow'],
            features: ['yellow fins', 'streamlined body', 'crescent tail'],
            habitat: ['open ocean', 'tropical waters', 'pelagic zone'],
            behavior: ['fast swimmer', 'schooling', 'predator']
        }
    },
    {
        id: 'bluefin-tuna',
        name_en: 'Atlantic Bluefin Tuna',
        name_ru: 'Синий тунец',
        latin_name: 'Thunnus thynnus',
        family: 'Scombridae',
        family_ru: 'Скумбриевые',
        category: 'mediterranean',
        description_en: 'Largest tuna species. Can reach 600 kg. Critically endangered. Spawns in Mediterranean.',
        description_ru: 'Крупнейший вид тунца. Может достигать 600 кг. На грани исчезновения. Нерестится в Средиземном море.',
        characteristics: {
            size: 'very large (200-400 cm)',
            color: ['dark blue', 'silver', 'yellow'],
            features: ['massive body', 'short pectoral fins', 'crescent tail'],
            habitat: ['open ocean', 'temperate waters', 'pelagic zone'],
            behavior: ['fast swimmer', 'migratory', 'predator']
        }
    },
    {
        id: 'bullet-tuna',
        name_en: 'Bullet Tuna',
        name_ru: 'Пулевидный тунец',
        latin_name: 'Auxis rochei',
        family: 'Scombridae',
        family_ru: 'Скумбриевые',
        category: 'mediterranean',
        description_en: 'Smallest tuna species. Dark mottled pattern on back. Common in Mediterranean.',
        description_ru: 'Самый маленький вид тунца. Тёмный пятнистый узор на спине. Обычен в Средиземноморье.',
        characteristics: {
            size: 'small (25-35 cm)',
            color: ['blue', 'silver', 'black'],
            features: ['mottled pattern', 'streamlined body', 'small size'],
            habitat: ['coastal waters', 'open sea', 'pelagic zone'],
            behavior: ['fast swimmer', 'schooling', 'predator']
        }
    },
    {
        id: 'frigate-tuna',
        name_en: 'Frigate Tuna',
        name_ru: 'Фрегатовый тунец',
        latin_name: 'Auxis thazard',
        family: 'Scombridae',
        family_ru: 'Скумбриевые',
        category: 'mediterranean',
        description_en: 'Small tuna with dark wavy bands on back. Similar to bullet tuna but larger.',
        description_ru: 'Маленький тунец с тёмными волнистыми полосами на спине. Похож на пулевидного, но крупнее.',
        characteristics: {
            size: 'small (30-40 cm)',
            color: ['blue', 'silver', 'black'],
            features: ['wavy bands', 'streamlined body', 'forked tail'],
            habitat: ['open ocean', 'tropical waters', 'pelagic zone'],
            behavior: ['fast swimmer', 'schooling', 'predator']
        }
    },
    {
        id: 'dolphinfish',
        name_en: 'Dolphinfish (Mahi-Mahi)',
        name_ru: 'Корифена',
        latin_name: 'Coryphaena hippurus',
        family: 'Coryphaenidae',
        family_ru: 'Корифеновые',
        category: 'mediterranean',
        description_en: 'Brilliant golden-blue fish with distinctive head shape. Fast-growing. Prized game fish.',
        description_ru: 'Блестящая золотисто-синяя рыба с отличительной формой головы. Быстро растёт. Ценная спортивная рыба.',
        characteristics: {
            size: 'large (100-150 cm)',
            color: ['golden', 'blue', 'green', 'yellow'],
            features: ['distinctive head shape', 'long dorsal fin', 'forked tail'],
            habitat: ['open ocean', 'tropical waters', 'floating debris'],
            behavior: ['fast swimmer', 'predator', 'surface dweller']
        }
    },
    {
        id: 'pompano-dolphinfish',
        name_en: 'Pompano Dolphinfish',
        name_ru: 'Малая корифена',
        latin_name: 'Coryphaena equiselis',
        family: 'Coryphaenidae',
        family_ru: 'Корифеновые',
        category: 'mediterranean',
        description_en: 'Smaller relative of dolphinfish. Similar coloring but more slender body.',
        description_ru: 'Меньший родственник корифены. Похожая окраска, но более стройное тело.',
        characteristics: {
            size: 'medium (40-60 cm)',
            color: ['golden', 'blue', 'silver'],
            features: ['slender body', 'long dorsal fin', 'forked tail'],
            habitat: ['open ocean', 'tropical waters', 'pelagic zone'],
            behavior: ['fast swimmer', 'predator', 'schooling']
        }
    },
    {
        id: 'greater-baracuda',
        name_en: 'Great Barracuda',
        name_ru: 'Большая барракуда',
        latin_name: 'Sphyraena barracuda',
        family: 'Sphyraenidae',
        family_ru: 'Барракудовые',
        category: 'mediterranean',
        description_en: 'Long predatory fish with prominent jaw and sharp teeth. Silver with dark bars.',
        description_ru: 'Длинная хищная рыба с выступающей челюстью и острыми зубами. Серебристая с тёмными полосами.',
        characteristics: {
            size: 'large (100-180 cm)',
            color: ['silver', 'gray', 'black'],
            features: ['prominent jaw', 'sharp teeth', 'elongated body'],
            habitat: ['coastal waters', 'reefs', 'open sea'],
            behavior: ['predator', 'ambush hunting', 'solitary']
        }
    },
    {
        id: 'european-baracuda',
        name_en: 'European Barracuda',
        name_ru: 'Европейская барракуда',
        latin_name: 'Sphyraena sphyraena',
        family: 'Sphyraenidae',
        family_ru: 'Барракудовые',
        category: 'mediterranean',
        description_en: 'Slender barracuda with pointed snout. Smaller than great barracuda. Mediterranean native.',
        description_ru: 'Стройная барракуда с заострённым рылом. Меньше большой барракуды. Коренной средиземноморский вид.',
        characteristics: {
            size: 'medium (50-80 cm)',
            color: ['silver', 'gray', 'blue'],
            features: ['pointed snout', 'sharp teeth', 'elongated body'],
            habitat: ['coastal waters', 'seagrass beds', 'rocky areas'],
            behavior: ['predator', 'schooling', 'fast swimmer']
        }
    },
    {
        id: 'yellowmouth-baracuda',
        name_en: 'Yellowmouth Barracuda',
        name_ru: 'Желторотая барракуда',
        latin_name: 'Sphyraena viridensis',
        family: 'Sphyraenidae',
        family_ru: 'Барракудовые',
        category: 'mediterranean',
        description_en: 'Medium barracuda with yellow mouth interior. Dark vertical bars on sides.',
        description_ru: 'Средняя барракуда с жёлтой внутренней частью рта. Тёмные вертикальные полосы на боках.',
        characteristics: {
            size: 'medium (40-60 cm)',
            color: ['silver', 'gray', 'yellow'],
            features: ['yellow mouth', 'vertical bars', 'pointed snout'],
            habitat: ['coastal waters', 'reefs', 'open waters'],
            behavior: ['predator', 'schooling', 'fast swimmer']
        }
    },
    {
        id: 'horse-mackerel',
        name_en: 'Horse Mackerel',
        name_ru: 'Ставрида',
        latin_name: 'Trachurus trachurus',
        family: 'Carangidae',
        family_ru: 'Ставридовые',
        category: 'mediterranean',
        description_en: 'Common food fish with silvery body and dark back. Lateral scutes present. Schools in large numbers.',
        description_ru: 'Обычная пищевая рыба с серебристым телом и тёмной спиной. Есть боковые щитки. Стаится в больших количествах.',
        characteristics: {
            size: 'small (20-30 cm)',
            color: ['silver', 'blue-green', 'gray'],
            features: ['lateral scutes', 'forked tail', 'streamlined body'],
            habitat: ['coastal waters', 'open sea', 'continental shelf'],
            behavior: ['schooling', 'fast swimmer', 'predator']
        }
    },
    {
        id: 'mediterranean-horse-mackerel',
        name_en: 'Mediterranean Horse Mackerel',
        name_ru: 'Средиземноморская ставрида',
        latin_name: 'Trachurus mediterraneus',
        family: 'Carangidae',
        family_ru: 'Ставридовые',
        category: 'mediterranean',
        description_en: 'Similar to horse mackerel but larger. Important commercial species in Mediterranean.',
        description_ru: 'Похожа на ставриду, но крупнее. Важный промысловый вид в Средиземноморье.',
        characteristics: {
            size: 'medium (30-45 cm)',
            color: ['silver', 'blue', 'gray'],
            features: ['lateral scutes', 'forked tail', 'elongated body'],
            habitat: ['coastal waters', 'open sea', 'pelagic zone'],
            behavior: ['schooling', 'fast swimmer', 'predator']
        }
    },
    {
        id: 'blue-runner',
        name_en: 'Blue Runner',
        name_ru: 'Синий бегун',
        latin_name: 'Caranx crysos',
        family: 'Carangidae',
        family_ru: 'Ставридовые',
        category: 'mediterranean',
        description_en: 'Silvery jack with blue-green back. Black tip on pectoral fin. Fast swimmer.',
        description_ru: 'Серебристая ставрида с сине-зелёной спиной. Чёрный кончик на грудном плавнике. Быстрый пловец.',
        characteristics: {
            size: 'medium (30-45 cm)',
            color: ['silver', 'blue-green', 'yellow'],
            features: ['black pectoral tip', 'lateral scutes', 'forked tail'],
            habitat: ['coastal waters', 'reefs', 'open sea'],
            behavior: ['fast swimmer', 'schooling', 'predator']
        }
    },
    {
        id: 'leerfish',
        name_en: 'Leerfish',
        name_ru: 'Лирфиш',
        latin_name: 'Lichia amia',
        family: 'Carangidae',
        family_ru: 'Ставридовые',
        category: 'mediterranean',
        description_en: 'Large jack with elongated body. Juveniles have dark vertical bars. Powerful predator.',
        description_ru: 'Крупная ставрида с удлинённым телом. У молоди тёмные вертикальные полосы. Мощный хищник.',
        characteristics: {
            size: 'large (80-120 cm)',
            color: ['silver', 'blue', 'black'],
            features: ['elongated body', 'small scales', 'forked tail'],
            habitat: ['coastal waters', 'estuaries', 'open sea'],
            behavior: ['predator', 'schooling', 'fast swimmer']
        }
    },
    {
        id: 'pompano',
        name_en: 'Florida Pompano',
        name_ru: 'Помпано',
        latin_name: 'Trachinotus carolinus',
        family: 'Carangidae',
        family_ru: 'Ставридовые',
        category: 'mediterranean',
        description_en: 'Deep-bodied silvery fish. Highly prized food fish. Similar to permit but smaller.',
        description_ru: 'Глубокотелая серебристая рыба. Высоко ценится как пищевая. Похожа на пермита, но меньше.',
        characteristics: {
            size: 'medium (25-35 cm)',
            color: ['silver', 'blue', 'yellow'],
            features: ['deep body', 'small mouth', 'forked tail'],
            habitat: ['coastal waters', 'sandy beaches', 'shallow waters'],
            behavior: ['schooling', 'bottom feeding', 'fast swimmer']
        }
    },
    {
        id: 'shrimp-fish',
        name_en: 'Shrimp Fish',
        name_ru: 'Креветочная рыба',
        latin_name: 'Centracanthus cirrus',
        family: 'Centracanthidae',
        family_ru: 'Центракантидовые',
        category: 'mediterranean',
        description_en: 'Small slender fish with elongated snout. Feeds on crustaceans. Mediterranean endemic.',
        description_ru: 'Маленькая стройная рыба с удлинённым рылом. Питается ракообразными. Эндемик Средиземноморья.',
        characteristics: {
            size: 'small (15-20 cm)',
            color: ['silver', 'pink', 'translucent'],
            features: ['elongated snout', 'slender body', 'small mouth'],
            habitat: ['sandy bottoms', 'seagrass beds', 'coastal waters'],
            behavior: ['crustacean feeding', 'schooling', 'bottom dwelling']
        }
    },
    {
        id: 'picarel',
        name_en: 'Picarel',
        name_ru: 'Смара',
        latin_name: 'Spicara smaris',
        family: 'Centracanthidae',
        family_ru: 'Центракантидовые',
        category: 'mediterranean',
        description_en: 'Small fish with elongated body and pointed snout. Blue longitudinal stripes. Common bait fish.',
        description_ru: 'Маленькая рыба с удлинённым телом и заострённым рылом. Синие продольные полосы. Обычная наживочная рыба.',
        characteristics: {
            size: 'small (15-20 cm)',
            color: ['silver', 'blue', 'yellow'],
            features: ['elongated body', 'pointed snout', 'blue stripes'],
            habitat: ['sandy bottoms', 'seagrass beds', 'coastal waters'],
            behavior: ['schooling', 'plankton feeding', 'bottom dwelling']
        }
    },
    {
        id: 'blotched-picarel',
        name_en: 'Blotched Picarel',
        name_ru: 'Пятнистая смара',
        latin_name: 'Spicara maena',
        family: 'Centracanthidae',
        family_ru: 'Центракантидовые',
        category: 'mediterranean',
        description_en: 'Similar to picarel with dark blotches on sides. Males have blue coloring during breeding.',
        description_ru: 'Похожа на смару с тёмными пятнами на боках. Самцы имеют синюю окраску во время нереста.',
        characteristics: {
            size: 'small (15-20 cm)',
            color: ['silver', 'blue', 'black'],
            features: ['dark blotches', 'elongated body', 'pointed snout'],
            habitat: ['sandy bottoms', 'seagrass beds', 'coastal waters'],
            behavior: ['schooling', 'plankton feeding', 'breeding coloration']
        }
    },
    {
        id: 'common-pandora',
        name_en: 'Common Pandora',
        name_ru: 'Пандора',
        latin_name: 'Pagellus erythrinus',
        family: 'Sparidae',
        family_ru: 'Спаровые',
        category: 'mediterranean',
        description_en: 'Pinkish fish with large eye and red spot on gill cover. Important food fish.',
        description_ru: 'Розоватая рыба с большим глазом и красным пятном на жаберной крышке. Важная пищевая рыба.',
        characteristics: {
            size: 'medium (25-35 cm)',
            color: ['pink', 'silver', 'red'],
            features: ['large eye', 'red spot on gill', 'oval body'],
            habitat: ['sandy bottoms', 'muddy seabeds', 'coastal waters'],
            behavior: ['omnivorous', 'bottom feeding', 'schooling']
        }
    },
    {
        id: 'axillary-seabream',
        name_en: 'Axillary Seabream',
        name_ru: 'Подмышечная сарпа',
        latin_name: 'Pagellus acarne',
        family: 'Sparidae',
        family_ru: 'Спаровые',
        category: 'mediterranean',
        description_en: 'Pinkish-silver fish with dark spot at pectoral fin base. Similar to common pandora.',
        description_ru: 'Розовато-серебристая рыба с тёмным пятном у основания грудного плавника. Похожа на пандору.',
        characteristics: {
            size: 'medium (25-35 cm)',
            color: ['pink', 'silver', 'red'],
            features: ['dark spot at pectoral', 'large eye', 'oval body'],
            habitat: ['sandy bottoms', 'rocky areas', 'coastal waters'],
            behavior: ['omnivorous', 'bottom feeding', 'schooling']
        }
    },
    {
        id: 'red-porgy',
        name_en: 'Red Porgy',
        name_ru: 'Красный порги',
        latin_name: 'Pagrus pagrus',
        family: 'Sparidae',
        family_ru: 'Спаровые',
        category: 'mediterranean',
        description_en: 'Reddish fish with blue spots on head. Strong teeth for crushing shells. Valued food fish.',
        description_ru: 'Красноватая рыба с синими пятнами на голове. Сильные зубы для дробления раковин. Ценная пищевая рыба.',
        characteristics: {
            size: 'medium (30-45 cm)',
            color: ['red', 'pink', 'silver', 'blue'],
            features: ['blue spots on head', 'strong teeth', 'robust body'],
            habitat: ['rocky seabeds', 'sandy bottoms', 'coastal waters'],
            behavior: ['predator', 'shellfish eating', 'schooling']
        }
    },
    {
        id: 'sand-steendbras',
        name_en: 'Sand Steenbras',
        name_ru: 'Песчаный стинбрас',
        latin_name: 'Lithognathus mormyrus',
        family: 'Sparidae',
        family_ru: 'Спаровые',
        category: 'mediterranean',
        description_en: 'Elongated fish with longitudinal stripes. Pointed snout for probing sand. Mediterranean and Atlantic.',
        description_ru: 'Удлинённая рыба с продольными полосами. Заострённое рыло для probing песка. Средиземноморье и Атлантика.',
        characteristics: {
            size: 'medium (30-45 cm)',
            color: ['silver', 'golden', 'brown'],
            features: ['longitudinal stripes', 'pointed snout', 'elongated body'],
            habitat: ['sandy bottoms', 'coastal waters', 'estuaries'],
            behavior: ['bottom feeding', 'schooling', 'probing']
        }
    },
    {
        id: 'annular-seabream',
        name_en: 'Annular Seabream',
        name_ru: 'Кольчатая сарпа',
        latin_name: 'Diplodus annularis',
        family: 'Sparidae',
        family_ru: 'Спаровые',
        category: 'mediterranean',
        description_en: 'Small seabream with golden ring at tail base. Silvery with faint vertical bands.',
        description_ru: 'Маленькая сарпа с золотым кольцом у основания хвоста. Серебристая со слабыми вертикальными полосами.',
        characteristics: {
            size: 'small (15-20 cm)',
            color: ['silver', 'golden', 'yellow'],
            features: ['golden ring at tail', 'small size', 'oval body'],
            habitat: ['seagrass beds', 'rocky areas', 'coastal waters'],
            behavior: ['omnivorous', 'schooling', 'grazing']
        }
    },
    {
        id: 'striped-seabream',
        name_en: 'Striped Seabream',
        name_ru: 'Полосатая сарпа',
        latin_name: 'Lithognathus mormyrus',
        family: 'Sparidae',
        family_ru: 'Спаровые',
        category: 'mediterranean',
        description_en: 'Silvery fish with golden longitudinal stripes. Elongated body and pointed snout.',
        description_ru: 'Серебристая рыба с золотыми продольными полосами. Удлинённое тело и заострённое рыло.',
        characteristics: {
            size: 'medium (25-35 cm)',
            color: ['silver', 'golden', 'yellow'],
            features: ['golden stripes', 'pointed snout', 'elongated body'],
            habitat: ['sandy bottoms', 'coastal waters', 'estuaries'],
            behavior: ['bottom feeding', 'schooling', 'omnivorous']
        }
    },
    {
        id: 'peacock-wrasse',
        name_en: 'Peacock Wrasse',
        name_ru: 'Павлинья губан',
        latin_name: 'Symphodus tinca',
        family: 'Labridae',
        family_ru: 'Губановые',
        category: 'mediterranean',
        description_en: 'Colorful wrasse with green body and red markings. Males build nests from algae.',
        description_ru: 'Красочный губан с зелёным телом и красными отметинами. Самцы строят гнёзда из водорослей.',
        characteristics: {
            size: 'medium (25-35 cm)',
            color: ['green', 'red', 'blue', 'orange'],
            features: ['colorful pattern', 'thick lips', 'elongated body'],
            habitat: ['seagrass beds', 'rocky areas', 'coastal waters'],
            behavior: ['nest building', 'territorial', 'omnivorous']
        }
    },
    {
        id: 'rainbow-wrasse',
        name_en: 'Rainbow Wrasse',
        name_ru: 'Радужный губан',
        latin_name: 'Coris julis',
        family: 'Labridae',
        family_ru: 'Губановые',
        category: 'mediterranean',
        description_en: 'Brightly colored wrasse with orange stripe. Males and females have different patterns.',
        description_ru: 'Ярко окрашенный губан с оранжевой полосой. Самцы и самки имеют разные узоры.',
        characteristics: {
            size: 'small (20-25 cm)',
            color: ['orange', 'green', 'blue', 'pink'],
            features: ['orange lateral stripe', 'elongated body', 'thick lips'],
            habitat: ['rocky reefs', 'seagrass beds', 'coastal waters'],
            behavior: ['territorial', 'omnivorous', 'burrowing']
        }
    },
    {
        id: 'mediterranean-parrotfish',
        name_en: 'Mediterranean Parrotfish',
        name_ru: 'Средиземноморский попугай',
        latin_name: 'Sparisoma cretense',
        family: 'Scaridae',
        family_ru: 'Попугаевые',
        category: 'mediterranean',
        description_en: 'Large fish with parrot-like beak. Reddish-brown coloring. Feeds on algae from rocks.',
        description_ru: 'Крупная рыба с попугаевым клювом. Красновато-коричневая окраска. Питается водорослями со скал.',
        characteristics: {
            size: 'large (40-50 cm)',
            color: ['reddish-brown', 'pink', 'green'],
            features: ['parrot-like beak', 'robust body', 'thick scales'],
            habitat: ['rocky reefs', 'seagrass beds', 'coastal waters'],
            behavior: ['herbivorous', 'grazing', 'territorial']
        }
    },
    {
        id: 'ornate-wrasse',
        name_en: 'Ornate Wrasse',
        name_ru: 'Орнаментальный губан',
        latin_name: 'Symphodus ocellatus',
        family: 'Labridae',
        family_ru: 'Губановые',
        category: 'mediterranean',
        description_en: 'Small wrasse with eye-spot on dorsal fin. Green-brown with dark markings.',
        description_ru: 'Маленький губан с глазным пятном на спинном плавнике. Зелёно-коричневый с тёмными отметинами.',
        characteristics: {
            size: 'small (12-18 cm)',
            color: ['green', 'brown', 'red'],
            features: ['eye-spot on dorsal', 'elongated body', 'thick lips'],
            habitat: ['seagrass beds', 'rocky areas', 'coastal waters'],
            behavior: ['territorial', 'omnivorous', 'nest building']
        }
    },
    {
        id: 'cuckoo-wrasse',
        name_en: 'Cuckoo Wrasse',
        name_ru: 'Кукушкин губан',
        latin_name: 'Labrus mixtus',
        family: 'Labridae',
        family_ru: 'Губановые',
        category: 'mediterranean',
        description_en: 'Large wrasse with variable coloring. Green males and brown females. Sequential hermaphrodite.',
        description_ru: 'Крупный губан с переменной окраской. Зелёные самцы и коричневые самки. Последовательный гермафродит.',
        characteristics: {
            size: 'medium (30-45 cm)',
            color: ['green', 'brown', 'blue', 'orange'],
            features: ['thick lips', 'elongated body', 'variable coloring'],
            habitat: ['rocky reefs', 'seagrass beds', 'coastal waters'],
            behavior: ['omnivorous', 'territorial', 'sequential hermaphrodite']
        }
    },
    {
        id: 'ballan-wrasse',
        name_en: 'Ballan Wrasse',
        name_ru: 'Балланский губан',
        latin_name: 'Labrus bergylta',
        family: 'Labridae',
        family_ru: 'Губановые',
        category: 'mediterranean',
        description_en: 'Largest European wrasse. Brown-green with mottled pattern. Thick lips and strong teeth.',
        description_ru: 'Крупнейший европейский губан. Коричнево-зелёный с пятнистым узором. Толстые губы и сильные зубы.',
        characteristics: {
            size: 'large (50-70 cm)',
            color: ['brown', 'green', 'orange'],
            features: ['thick lips', 'mottled pattern', 'robust body'],
            habitat: ['rocky reefs', 'kelp forests', 'coastal waters'],
            behavior: ['omnivorous', 'territorial', 'solitary']
        }
    },
    {
        id: 'goldsinny-wrasse',
        name_en: 'Goldsinny Wrasse',
        name_ru: 'Золотистый губан',
        latin_name: 'Ctenolabrus rupestris',
        family: 'Labridae',
        family_ru: 'Губановые',
        category: 'mediterranean',
        description_en: 'Small wrasse with golden-orange coloring. Dark spot on tail base. Common in rocky areas.',
        description_ru: 'Маленький губан с золотисто-оранжевой окраской. Тёмное пятно на основании хвоста. Обычен в скалистых районах.',
        characteristics: {
            size: 'small (12-18 cm)',
            color: ['orange', 'golden', 'brown'],
            features: ['golden coloring', 'dark tail spot', 'small size'],
            habitat: ['rocky reefs', 'seagrass beds', 'coastal waters'],
            behavior: ['omnivorous', 'territorial', 'cleaning behavior']
        }
    },
    {
        id: 'black-wrasse',
        name_en: 'Black Wrasse',
        name_ru: 'Чёрный губан',
        latin_name: 'Symphodus melanocercus',
        family: 'Labridae',
        family_ru: 'Губановые',
        category: 'mediterranean',
        description_en: 'Dark wrasse with black tail. Males have bright breeding colors. Mediterranean endemic.',
        description_ru: 'Тёмный губан с чёрным хвостом. Самцы имеют яркие брачные цвета. Эндемик Средиземноморья.',
        characteristics: {
            size: 'small (15-20 cm)',
            color: ['brown', 'black', 'green'],
            features: ['black tail', 'elongated body', 'thick lips'],
            habitat: ['seagrass beds', 'rocky areas', 'coastal waters'],
            behavior: ['omnivorous', 'nest building', 'territorial']
        }
    },
    {
        id: 'five-spotted-wrasse',
        name_en: 'Five-spotted Wrasse',
        name_ru: 'Пятипятнистый губан',
        latin_name: 'Symphodus roissali',
        family: 'Labridae',
        family_ru: 'Губановые',
        category: 'mediterranean',
        description_en: 'Small wrasse with five dark spots on sides. Green-brown coloring. Mediterranean species.',
        description_ru: 'Маленький губан с пятью тёмными пятнами на боках. Зелёно-коричневая окраска. Средиземноморский вид.',
        characteristics: {
            size: 'small (12-16 cm)',
            color: ['green', 'brown', 'black'],
            features: ['five dark spots', 'elongated body', 'thick lips'],
            habitat: ['seagrass beds', 'rocky areas', 'coastal waters'],
            behavior: ['omnivorous', 'nest building', 'territorial']
        }
    },
    {
        id: 'stem-toothed-wrasse',
        name_en: 'Stem-toothed Wrasse',
        name_ru: 'Стеблезубый губан',
        latin_name: 'Symphodus rostratus',
        family: 'Labridae',
        family_ru: 'Губановые',
        category: 'mediterranean',
        description_en: 'Small wrasse with pointed snout. Brown with dark longitudinal stripes. Mediterranean endemic.',
        description_ru: 'Маленький губан с заострённым рылом. Коричневый с тёмными продольными полосами. Эндемик Средиземноморья.',
        characteristics: {
            size: 'small (12-15 cm)',
            color: ['brown', 'black', 'white'],
            features: ['pointed snout', 'longitudinal stripes', 'small size'],
            habitat: ['seagrass beds', 'rocky areas', 'coastal waters'],
            behavior: ['omnivorous', 'nest building', 'territorial']
        }
    },
    {
        id: 'zebra-wrasse',
        name_en: 'Zebra Wrasse',
        name_ru: 'Зебровый губан',
        latin_name: 'Symphodus roissali',
        family: 'Labridae',
        family_ru: 'Губановые',
        category: 'mediterranean',
        description_en: 'Colorful wrasse with vertical dark bands. Males have bright blue and green colors.',
        description_ru: 'Красочный губан с вертикальными тёмными полосами. Самцы имеют яркие синие и зелёные цвета.',
        characteristics: {
            size: 'small (15-20 cm)',
            color: ['green', 'blue', 'black', 'orange'],
            features: ['vertical bands', 'elongated body', 'thick lips'],
            habitat: ['rocky reefs', 'seagrass beds', 'coastal waters'],
            behavior: ['omnivorous', 'territorial', 'nest building']
        }
    },
    {
        id: 'marseille-wrasse',
        name_en: 'Marseille Wrasse',
        name_ru: 'Марсельский губан',
        latin_name: 'Symphodus bailloni',
        family: 'Labridae',
        family_ru: 'Губановые',
        category: 'mediterranean',
        description_en: 'Small wrasse with variable coloring. Brown to green with dark markings. Western Mediterranean.',
        description_ru: 'Маленький губан с переменной окраской. От коричневого до зелёного с тёмными отметинами. Западное Средиземноморье.',
        characteristics: {
            size: 'small (12-16 cm)',
            color: ['brown', 'green', 'black'],
            features: ['variable coloring', 'elongated body', 'thick lips'],
            habitat: ['rocky reefs', 'seagrass beds', 'coastal waters'],
            behavior: ['omnivorous', 'territorial', 'nest building']
        }
    }
];
