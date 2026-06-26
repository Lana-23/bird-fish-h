// European birds species data
export const europeanBirds = [
    {
        id: 'golden-eagle',
        name_en: 'Golden Eagle',
        name_ru: 'Золотой орёл',
        latin_name: 'Aquila chrysaetos',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'A large bird of prey with dark brown plumage and golden crown. Wingspan up to 2.3m. Found in mountains and open territories.',
        description_ru: 'Крупная хищная птица с тёмно-коричневым оперением и золотистой макушкой. Размах крыльев до 2,3м. Обитает в горах и открытых территориях.',
        characteristics: {
            size: 'large (60-90 cm)',
            wingspan: 'up to 2.3m',
            color: ['dark brown', 'golden'],
            features: ['golden crown', 'large bird of prey'],
            habitat: ['mountains', 'open territories'],
            behavior: ['predator', 'soaring']
        }
    },
    {
        id: 'barn-owl',
        name_en: 'Barn Owl',
        name_ru: 'Сипуха',
        latin_name: 'Tyto alba',
        family: 'Tytonidae',
        family_ru: 'Сипуховые',
        category: 'european',
        description_en: 'Distinctive heart-shaped facial disc. Hunts small rodents at night. Common in agricultural areas across Europe.',
        description_ru: 'Отличается сердцевидным лицевым диском. Охотится на мелких грызунов ночью. Распространена в сельскохозяйственных районах Европы.',
        characteristics: {
            size: 'medium (33-39 cm)',
            wingspan: '80-95 cm',
            color: ['white', 'pale buff', 'grey'],
            features: ['heart-shaped facial disc', 'dark eyes'],
            habitat: ['agricultural areas', 'barns', 'open countryside'],
            behavior: ['nocturnal', 'silent flight', 'rodent hunter']
        }
    },
    {
        id: 'great-tit',
        name_en: 'Great Tit',
        name_ru: 'Большая синица',
        latin_name: 'Parus major',
        family: 'Paridae',
        family_ru: 'Синицевые',
        category: 'european',
        description_en: 'Small songbird with black and white head, white cheeks. Very common in forests and gardens. Excellent acrobatic abilities.',
        description_ru: 'Маленькая певчая птица с чёрной и белой головой, белыми щёками. Очень распространена в лесах и садах. Отличные акробатические способности.',
        characteristics: {
            size: 'small (14-16 cm)',
            wingspan: '22-26 cm',
            color: ['black', 'white', 'yellow', 'green'],
            features: ['black and white head', 'white cheeks', 'yellow belly with black stripe'],
            habitat: ['forests', 'gardens', 'parks', 'woodlands'],
            behavior: ['acrobatic', 'singing', 'seed eating', 'insect hunting']
        }
    },
    {
        id: 'blue-tit',
        name_en: 'Eurasian Blue Tit',
        name_ru: 'Лазоревка',
        latin_name: 'Cyanistes caeruleus',
        family: 'Paridae',
        family_ru: 'Синицевые',
        category: 'european',
        description_en: 'Small colorful tit with blue cap, white face, and yellow underparts. Very active and acrobatic. Common in gardens and woodlands.',
        description_ru: 'Маленькая яркая синица с синей шапочкой, белым лицом и жёлтым низом. Очень активная и акробатичная. Обычна в садах и лесах.',
        characteristics: {
            size: 'small (10-12 cm)',
            wingspan: '17-21 cm',
            color: ['blue', 'yellow', 'white', 'green'],
            features: ['blue cap', 'white face with dark eye stripe', 'yellow belly', 'green back'],
            habitat: ['deciduous forests', 'gardens', 'parks', 'orchards'],
            behavior: ['acrobatic', 'insect hunting', 'seed eating', 'cavity nesting']
        }
    },
    {
        id: 'coal-tit',
        name_en: 'Coal Tit',
        name_ru: 'Московка',
        latin_name: 'Periparus ater',
        family: 'Paridae',
        family_ru: 'Синицевые',
        category: 'european',
        description_en: 'Small tit with black head, white nape, and buff underparts. Conifer forest specialist. Often hangs upside down while feeding.',
        description_ru: 'Маленькая синица с чёрной головой, белым затылком и палевым низом. Специалист хвойных лесов. Часто кормится вниз головой.',
        characteristics: {
            size: 'small (10-11 cm)',
            wingspan: '16-18 cm',
            color: ['black', 'white', 'buff', 'grey'],
            features: ['black head', 'white nape patch', 'pale buff underparts'],
            habitat: ['coniferous forests', 'pine woods', 'spruce forests', 'gardens'],
            behavior: ['acrobatic', 'cone feeding', 'food caching', 'resident']
        }
    },
    {
        id: 'crested-tit',
        name_en: 'Crested Tit',
        name_ru: 'Хохлатая синица',
        latin_name: 'Lophophanes cristatus',
        family: 'Paridae',
        family_ru: 'Синицевые',
        category: 'european',
        description_en: 'Distinctive tit with pointed black crest, grey body, and buff flanks. Coniferous forest specialist with nasal call.',
        description_ru: 'Заметная синица с заострённым чёрным хохолком, серым телом и палевыми боками. Специалист хвойных лесов с носовым голосом.',
        characteristics: {
            size: 'small (11-12 cm)',
            wingspan: '17-20 cm',
            color: ['grey', 'black', 'white', 'buff'],
            features: ['pointed black crest', 'black bib', 'grey back', 'buff flanks'],
            habitat: ['coniferous forests', 'pine woods', 'spruce forests', 'mixed woods'],
            behavior: ['acrobatic', 'insect hunting', 'seed eating', 'resident']
        }
    },
    {
        id: 'marsh-tit',
        name_en: 'Marsh Tit',
        name_ru: 'Пухляк',
        latin_name: 'Poecile palustris',
        family: 'Paridae',
        family_ru: 'Синицевые',
        category: 'european',
        description_en: 'Small tit with black cap and bib, dull cheeks. Very similar to willow tit but with glossier cap. Deciduous woodland specialist.',
        description_ru: 'Маленькая синица с чёрной шапочкой и подбородком, тусклыми щеками. Очень похожа на буроголовую гаичку, но с более блестящей шапочкой. Специалист лиственных лесов.',
        characteristics: {
            size: 'small (11-12 cm)',
            wingspan: '17-20 cm',
            color: ['black', 'white', 'buff', 'grey'],
            features: ['glossy black cap', 'black bib', 'pale cheeks', 'no wing bar'],
            habitat: ['deciduous forests', 'oak woods', 'gardens', 'parklands'],
            behavior: ['food caching', 'insect hunting', 'seed eating', 'resident']
        }
    },
    {
        id: 'willow-tit',
        name_en: 'Willow Tit',
        name_ru: 'Буроголовая гаичка',
        latin_name: 'Poecile montanus',
        family: 'Paridae',
        family_ru: 'Синицевые',
        category: 'european',
        description_en: 'Small tit with diffuse black cap border, larger white cheek patch. Coniferous and mixed forest specialist. Hoards food.',
        description_ru: 'Маленькая синица с размытой границей чёрной шапочки, более крупным белым пятном на щеке. Специалист хвойных и смешанных лесов. Делает запасы корма.',
        characteristics: {
            size: 'small (11-12 cm)',
            wingspan: '17-20 cm',
            color: ['black', 'white', 'buff', 'brown'],
            features: ['dull black cap', 'large white cheek', 'buff flanks', 'wing bar'],
            habitat: ['coniferous forests', 'mixed woods', 'birch stands', 'marshy areas'],
            behavior: ['food caching', 'insect hunting', 'seed eating', 'resident']
        }
    },
    {
        id: 'kingfisher',
        name_en: 'Common Kingfisher',
        name_ru: 'Зимородок обыкновенный',
        latin_name: 'Alcedo atthis',
        family: 'Alcedinidae',
        family_ru: 'Зимородковые',
        category: 'european',
        description_en: 'Small bird with bright blue and orange plumage. Dives into water to catch fish. Perches on branches overhanging rivers.',
        description_ru: 'Маленькая птица с ярким сине-оранжевым оперением. Ныряет в воду за рыбой. Сидит на ветвях, нависающих над реками.',
        characteristics: {
            size: 'small (16-17 cm)',
            wingspan: '24-26 cm',
            color: ['bright blue', 'orange', 'white'],
            features: ['long pointed beak', 'short tail', 'compact body'],
            habitat: ['rivers', 'streams', 'lakes', 'ponds'],
            behavior: ['diving', 'fish hunting', 'perching', 'solitary']
        }
    },
    {
        id: 'woodpecker',
        name_en: 'Great Spotted Woodpecker',
        name_ru: 'Большой пёстрый дятел',
        latin_name: 'Dendrocopos major',
        family: 'Picidae',
        family_ru: 'Дятловые',
        category: 'european',
        description_en: 'Black and white woodpecker with red undertail. Drums on trees to find insects. Strong chisel-like beak for drilling.',
        description_ru: 'Чёрно-белый дятел с красным подхвостьем. Барабанит по деревьям, добывая насекомых. Сильный клюв-долото для сверления.',
        characteristics: {
            size: 'medium (20-24 cm)',
            wingspan: '34-38 cm',
            color: ['black', 'white', 'red'],
            features: ['red undertail', 'chisel-like beak', 'black and white patterned wings'],
            habitat: ['forests', 'woodlands', 'parks', 'gardens'],
            behavior: ['drumming', 'tree climbing', 'insect hunting', 'seed eating']
        }
    },
    {
        id: 'heron',
        name_en: 'Grey Heron',
        name_ru: 'Серая цапля',
        latin_name: 'Ardea cinerea',
        family: 'Ardeidae',
        family_ru: 'Цаплевые',
        category: 'european',
        description_en: 'Tall wading bird with long legs and neck. Gray plumage with black crown. Stands motionless waiting for prey.',
        description_ru: 'Высокая болотная птица с длинными ногами и шеей. Серое оперение с чёрной макушкой. Стоит неподвижно, ожидая добычу.',
        characteristics: {
            size: 'large (90-98 cm)',
            wingspan: '155-175 cm',
            color: ['grey', 'black', 'white'],
            features: ['long legs', 'long neck', 'black crown', 'sharp pointed beak'],
            habitat: ['wetlands', 'marshes', 'lakes', 'rivers', 'coastal areas'],
            behavior: ['wading', 'standing motionless', 'fish hunting', 'patient stalking']
        }
    },
    {
        id: 'swan',
        name_en: 'Mute Swan',
        name_ru: 'Лебедь-шипун',
        latin_name: 'Cygnus olor',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Large waterfowl with long curved neck. Pure white plumage with orange beak. Forms lifelong pair bonds.',
        description_ru: 'Крупная водоплавающая птица с длинной изогнутой шеей. Чисто-белое оперение с оранжевым клювом. Образует пожизненные пары.',
        characteristics: {
            size: 'large (140-160 cm)',
            wingspan: '200-240 cm',
            color: ['white', 'orange'],
            features: ['long curved neck', 'orange beak with black knob', 'webbed feet'],
            habitat: ['lakes', 'ponds', 'rivers', 'wetlands', 'sheltered estuaries'],
            behavior: ['swimming', 'grazing', 'monogamous', 'territorial']
        }
    },
    {
        id: 'hawk',
        name_en: 'Northern Goshawk',
        name_ru: 'Ястреб-тетеревятник',
        latin_name: 'Accipiter gentilis',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Medium-large bird of prey. Gray-brown plumage with red eyes. Agile forest hunter pursuing prey through trees.',
        description_ru: 'Средне-крупная хищная птица. Серо-коричневое оперение с красными глазами. Ловкий лесной охотник, преследующий добычу среди деревьев.',
        characteristics: {
            size: 'large (46-63 cm)',
            wingspan: '89-122 cm',
            color: ['grey', 'brown', 'white', 'black'],
            features: ['red eyes', 'broad wings', 'long tail', 'sharp hooked beak'],
            habitat: ['forests', 'woodlands', 'mountain ranges'],
            behavior: ['agile flight', 'forest hunting', 'predator', 'pursuing prey through trees']
        }
    },
    // Songbirds - Warblers
    {
        id: 'nightingale',
        name_en: 'Common Nightingale',
        name_ru: 'Соловей обыкновенный',
        latin_name: 'Luscinia megarhynchos',
        family: 'Muscicapidae',
        family_ru: 'Мухоловковые',
        category: 'european',
        description_en: 'Famous for its powerful and beautiful song, especially at night. Plain brown plumage. Breeds in dense undergrowth.',
        description_ru: 'Знаменит своей мощной и красивой песней, особенно ночью. Скромное коричневое оперение. Гнездится в густых зарослях.',
        characteristics: {
            size: 'small (15-17 cm)',
            wingspan: '24-26 cm',
            color: ['brown', 'buff', 'white'],
            features: ['long tail', 'plain plumage', 'large eyes'],
            habitat: ['dense shrubs', 'woodland edges', 'thickets'],
            behavior: ['nocturnal singing', 'ground foraging', 'territorial']
        }
    },
    {
        id: 'blackcap',
        name_en: 'Eurasian Blackcap',
        name_ru: 'Славка-черноголовка',
        latin_name: 'Sylvia atricapilla',
        family: 'Sylviidae',
        family_ru: 'Славковые',
        category: 'european',
        description_en: 'Small warbler with distinctive black cap in males, brown cap in females. Grey body with white underparts. Excellent songster.',
        description_ru: 'Маленькая славка с характерной чёрной шапочкой у самцов, коричневой у самок. Серое тело с белым низом. Прекрасный певец.',
        characteristics: {
            size: 'small (13-14 cm)',
            wingspan: '20-23 cm',
            color: ['grey', 'black', 'brown', 'white'],
            features: ['black cap (male)', 'brown cap (female)', 'white throat'],
            habitat: ['deciduous forests', 'gardens', 'parks', 'scrubland'],
            behavior: ['singing', 'fruit eating', 'insect hunting', 'migratory']
        }
    },
    {
        id: 'garden-warbler',
        name_en: 'Garden Warbler',
        name_ru: 'Садовая славка',
        latin_name: 'Sylvia borin',
        family: 'Sylviidae',
        family_ru: 'Славковые',
        category: 'european',
        description_en: 'Plain brownish-grey warbler with no distinctive markings. Strong melodious song. Common in gardens and woodlands.',
        description_ru: 'Скромная коричнево-серая славка без отличительных отметин. Сильная мелодичная песня. Обычна в садах и лесах.',
        characteristics: {
            size: 'small (13-14 cm)',
            wingspan: '20-23 cm',
            color: ['brownish-grey', 'pale grey', 'white'],
            features: ['plain appearance', 'pale legs', 'rounded wings'],
            habitat: ['gardens', 'woodlands', 'hedgerows', 'scrub'],
            behavior: ['singing', 'gleaning insects', 'berry eating', 'migratory']
        }
    },
    {
        id: 'willow-warbler',
        name_en: 'Willow Warbler',
        name_ru: 'Пеночка-весничка',
        latin_name: 'Phylloscopus trochilus',
        family: 'Phylloscopidae',
        family_ru: 'Пеночковые',
        category: 'european',
        description_en: 'Small greenish warbler with pale supercilium. Descending song phrase. One of the most common European warblers.',
        description_ru: 'Маленькая зеленоватая пеночка с бледной бровью. Нисходящая песня. Одна из самых распространённых европейских славок.',
        characteristics: {
            size: 'small (11-12 cm)',
            wingspan: '18-21 cm',
            color: ['olive-green', 'yellow', 'white'],
            features: ['pale supercilium', 'wing bar', 'yellowish underparts'],
            habitat: ['birch woods', 'willow thickets', 'heathland', 'gardens'],
            behavior: ['active foraging', 'leaf gleaning', 'migratory', 'territorial']
        }
    },
    {
        id: 'chiffchaff',
        name_en: 'Common Chiffchaff',
        name_ru: 'Пеночка-трещотка',
        latin_name: 'Phylloscopus collybita',
        family: 'Phylloscopidae',
        family_ru: 'Пеночковые',
        category: 'european',
        description_en: 'Small brownish warbler with repetitive "chiff-chaff" song. Very similar to willow warbler but darker and more active.',
        description_ru: 'Маленькая коричневая пеночка с повторяющейся песней "чив-чив". Очень похожа на весничку, но темнее и активнее.',
        characteristics: {
            size: 'small (10-12 cm)',
            wingspan: '17-21 cm',
            color: ['brown', 'olive', 'buff', 'white'],
            features: ['dark legs', 'short supercilium', 'active movement'],
            habitat: ['woodlands', 'scrub', 'gardens', 'river valleys'],
            behavior: ['constant movement', 'insect hunting', 'early migrant', 'singing']
        }
    },
    {
        id: 'sedge-warbler',
        name_en: 'Sedge Warbler',
        name_ru: 'Камышовка-барсучок',
        latin_name: 'Acrocephalus schoenobaenus',
        family: 'Acrocephalidae',
        family_ru: 'Тростниковые славки',
        category: 'european',
        description_en: 'Small reed warbler with streaked brown back and strong pale supercilium. Rasping song delivered from reed tops.',
        description_ru: 'Маленькая тростниковая славка с пёстрой коричневой спиной и яркой бровью. Скрипучая песня с вершин тростника.',
        characteristics: {
            size: 'small (12-13 cm)',
            wingspan: '17-20 cm',
            color: ['streaked brown', 'buff', 'white'],
            features: ['strong supercilium', 'streaked back', 'plain underparts'],
            habitat: ['reed beds', 'marshes', 'wet meadows', 'river banks'],
            behavior: ['reed climbing', 'insect hunting', 'migratory', 'territorial singing']
        }
    },
    {
        id: 'reed-warbler',
        name_en: 'Eurasian Reed Warbler',
        name_ru: 'Тростниковая камышовка',
        latin_name: 'Acrocephalus scirpaceus',
        family: 'Acrocephalidae',
        family_ru: 'Тростниковые славки',
        category: 'european',
        description_en: 'Medium-sized warbler with plain brown upperparts and pale underparts. Rich chattering song. Common in reed beds.',
        description_ru: 'Средняя славка с однотонной коричневой спиной и бледным низом. Богатая трещащая песня. Обычна в тростниках.',
        characteristics: {
            size: 'small (12-13 cm)',
            wingspan: '18-21 cm',
            color: ['warm brown', 'buff', 'white'],
            features: ['plain brown back', 'pale throat', 'long bill'],
            habitat: ['reed beds', 'marshes', 'wetlands', 'river margins'],
            behavior: ['reed climbing', 'insect gleaning', 'mimicry', 'migratory']
        }
    },
    {
        id: 'grasshopper-warbler',
        name_en: 'Grasshopper Warbler',
        name_ru: 'Сверчок обыкновенный',
        latin_name: 'Locustella naevia',
        family: 'Locustellidae',
        family_ru: 'Сверчковые',
        category: 'european',
        description_en: 'Secretive warbler with insect-like reeling song. Streaked brown plumage provides excellent camouflage in grass.',
        description_ru: 'Скрытная славка с насекомоподобной трелью. Пёстрое коричневое оперение обеспечивает отличную маскировку в траве.',
        characteristics: {
            size: 'small (12-13 cm)',
            wingspan: '17-20 cm',
            color: ['streaked brown', 'buff', 'olive'],
            features: ['heavily streaked', 'long tail', 'cryptic plumage'],
            habitat: ['grasslands', 'marshes', 'heathland', 'meadows'],
            behavior: ['ground skulking', 'insect hunting', 'reeling song', 'migratory']
        }
    },
    {
        id: 'cetti-warbler',
        name_en: "Cetti's Warbler",
        name_ru: 'Варакушка',
        latin_name: 'Cettia cetti',
        family: 'Cettiidae',
        family_ru: 'Камышовковые',
        category: 'european',
        description_en: 'Small round-bodied warbler with loud explosive song. Rich brown above, pale below. Hides in dense vegetation.',
        description_ru: 'Маленькая круглотелая славка с громкой взрывной песней. Коричневая сверху, бледная снизу. Прячется в густой растительности.',
        characteristics: {
            size: 'small (13-14 cm)',
            wingspan: '17-19 cm',
            color: ['rich brown', 'grey-brown', 'white'],
            features: ['round body', 'long tail', 'pale eyebrow'],
            habitat: ['dense scrub', 'reed beds', 'brambles', 'wet thickets'],
            behavior: ['skulking', 'explosive song', 'insect hunting', 'resident']
        }
    },
    {
        id: 'barred-warbler',
        name_en: 'Barred Warbler',
        name_ru: 'Серая славка',
        latin_name: 'Curruca nisoria',
        family: 'Sylviidae',
        family_ru: 'Славковые',
        category: 'european',
        description_en: 'Large grey warbler with barred underparts in females and young. Yellow eyes in adults. Strong flight.',
        description_ru: 'Крупная серая славка с поперечными полосами на низе у самок и молодых. Жёлтые глаза у взрослых. Сильный полёт.',
        characteristics: {
            size: 'medium (15-17 cm)',
            wingspan: '23-26 cm',
            color: ['grey', 'white', 'brown'],
            features: ['yellow eyes', 'barred underparts (female)', 'long tail'],
            habitat: ['scrubland', 'forest edges', 'hedgerows', 'bushes'],
            behavior: ['hovering', 'insect hunting', 'migratory', 'territorial']
        }
    },
    // Songbirds - Finches
    {
        id: 'chaffinch',
        name_en: 'Common Chaffinch',
        name_ru: 'Зяблик',
        latin_name: 'Fringilla coelebs',
        family: 'Fringillidae',
        family_ru: 'Вьюрковые',
        category: 'european',
        description_en: 'Colorful finch with pink breast and blue-grey cap in males. Loud "pink" call. One of Europe\'s most common birds.',
        description_ru: 'Красочный вьюрок с розовой грудью и серо-голубой шапочкой у самцов. Громкий крик "зинь". Одна из самых обычных птиц Европы.',
        characteristics: {
            size: 'small (14-16 cm)',
            wingspan: '24-28 cm',
            color: ['pink', 'blue-grey', 'brown', 'white'],
            features: ['white wing bars', 'pink breast (male)', 'forked tail'],
            habitat: ['woodlands', 'gardens', 'parks', 'farmland'],
            behavior: ['ground feeding', 'seed eating', 'singing', 'flocking']
        }
    },
    {
        id: 'brambling',
        name_en: 'Brambling',
        name_ru: 'Юрок',
        latin_name: 'Fringilla montifringilla',
        family: 'Fringillidae',
        family_ru: 'Вьюрковые',
        category: 'european',
        description_en: 'Northern finch with orange breast and black head in breeding males. Similar to chaffinch but more colorful.',
        description_ru: 'Северный вьюрок с оранжевой грудью и чёрной головой у самцов. Похож на зяблика, но ярче.',
        characteristics: {
            size: 'small (14-16 cm)',
            wingspan: '25-28 cm',
            color: ['orange', 'black', 'white', 'brown'],
            features: ['orange shoulders', 'black head (male)', 'white rump'],
            habitat: ['birch forests', 'woodlands', 'farmland', 'gardens'],
            behavior: ['ground feeding', 'seed eating', 'migratory', 'flocking']
        }
    },
    {
        id: 'greenfinch',
        name_en: 'European Greenfinch',
        name_ru: 'Зеленушка',
        latin_name: 'Chloris chloris',
        family: 'Fringillidae',
        family_ru: 'Вьюрковые',
        category: 'european',
        description_en: 'Stocky finch with olive-green plumage and bright yellow wing patches. Musical warbling song.',
        description_ru: 'Коренастый вьюрок с оливково-зелёным оперением и яркими жёлтыми пятнами на крыльях. Музыкальная песня.',
        characteristics: {
            size: 'medium (14-16 cm)',
            wingspan: '25-29 cm',
            color: ['olive-green', 'yellow', 'black'],
            features: ['yellow wing patches', 'thick bill', 'notched tail'],
            habitat: ['gardens', 'woodlands', 'farmland', 'parks'],
            behavior: ['seed eating', 'acrobatic feeding', 'singing', 'flocking']
        }
    },
    {
        id: 'goldfinch',
        name_en: 'European Goldfinch',
        name_ru: 'Щегол',
        latin_name: 'Carduelis carduelis',
        family: 'Fringillidae',
        family_ru: 'Вьюрковые',
        category: 'european',
        description_en: 'Striking finch with red face, black and white head, and yellow wing bars. Musical tinkling song.',
        description_ru: 'Яркий вьюрок с красным лицом, чёрно-белой головой и жёлтыми полосами на крыльях. Музыкальная звонкая песня.',
        characteristics: {
            size: 'small (12-13 cm)',
            wingspan: '21-25 cm',
            color: ['red', 'black', 'white', 'yellow', 'brown'],
            features: ['red face mask', 'yellow wing bars', 'black and white head'],
            habitat: ['woodland edges', 'orchards', 'gardens', 'thistles'],
            behavior: ['seed eating', 'acrobatic', 'singing', 'flocking']
        }
    },
    {
        id: 'siskin',
        name_en: 'Eurasian Siskin',
        name_ru: 'Чиж',
        latin_name: 'Spinus spinus',
        family: 'Fringillidae',
        family_ru: 'Вьюрковые',
        category: 'european',
        description_en: 'Small finch with yellow-green plumage and black cap in males. Forked tail. Irregular winter visitor.',
        description_ru: 'Маленький вьюрок с жёлто-зелёным оперением и чёрной шапочкой у самцов. Вильчатый хвост. Нерегулярный зимний гость.',
        characteristics: {
            size: 'small (11-13 cm)',
            wingspan: '20-23 cm',
            color: ['yellow-green', 'black', 'yellow'],
            features: ['forked tail', 'black cap (male)', 'yellow rump'],
            habitat: ['coniferous forests', 'alder woods', 'gardens', 'feeders'],
            behavior: ['acrobatic feeding', 'seed eating', 'irruptive', 'flocking']
        }
    },
    {
        id: 'linnet',
        name_en: 'Common Linnet',
        name_ru: 'Коноплянка',
        latin_name: 'Linaria cannabina',
        family: 'Fringillidae',
        family_ru: 'Вьюрковые',
        category: 'european',
        description_en: 'Small finch with red breast and forehead in breeding males. Streaked brown otherwise. Melodious song.',
        description_ru: 'Маленький вьюрок с красной грудью и лбом у самцов. В остальное время пёстро-коричневый. Мелодичная песня.',
        characteristics: {
            size: 'small (13-14 cm)',
            wingspan: '21-24 cm',
            color: ['red', 'brown', 'grey', 'white'],
            features: ['red breast (male)', 'red forehead', 'grey nape'],
            habitat: ['scrubland', 'farmland', 'coastal areas', 'gardens'],
            behavior: ['seed eating', 'ground feeding', 'singing', 'flocking']
        }
    },
    {
        id: 'redpoll',
        name_en: 'Common Redpoll',
        name_ru: 'Чечётка',
        latin_name: 'Acanthis flammea',
        family: 'Fringillidae',
        family_ru: 'Вьюрковые',
        category: 'european',
        description_en: 'Tiny finch with red forehead patch and black chin. Heavily streaked brown plumage. Winter visitor in large flocks.',
        description_ru: 'Крошечный вьюрок с красным лбом и чёрным подбородком. Сильно пёстрое коричневое оперение. Зимний гость большими стаями.',
        characteristics: {
            size: 'small (11-13 cm)',
            wingspan: '20-23 cm',
            color: ['streaked brown', 'red', 'black', 'pink'],
            features: ['red forehead', 'black chin', 'pink rump'],
            habitat: ['birch woods', 'alder stands', 'farmland', 'feeders'],
            behavior: ['acrobatic feeding', 'seed eating', 'irruptive', 'flocking']
        }
    },
    {
        id: 'bullfinch',
        name_en: 'Eurasian Bullfinch',
        name_ru: 'Снегирь',
        latin_name: 'Pyrrhula pyrrhula',
        family: 'Fringillidae',
        family_ru: 'Вьюрковые',
        category: 'european',
        description_en: 'Stocky finch with bright pink-red breast in males, grey-pink in females. Black cap and white rump.',
        description_ru: 'Коренастый вьюрок с ярко-розово-красной грудью у самцов, серо-розовой у самок. Чёрная шапочка и белое надхвостье.',
        characteristics: {
            size: 'medium (15-17 cm)',
            wingspan: '22-26 cm',
            color: ['pink-red', 'grey', 'black', 'white'],
            features: ['pink breast', 'black cap', 'white rump', 'thick bill'],
            habitat: ['coniferous forests', 'woodlands', 'gardens', 'orchards'],
            behavior: ['bud eating', 'seed eating', 'whistling call', 'pairs']
        }
    },
    {
        id: 'gray-headed-bullfinch',
        name_en: 'Gray-headed Bullfinch',
        name_ru: 'Буроголовый снегирь',
        latin_name: 'Pyrrhula erythaca',
        family: 'Fringillidae',
        family_ru: 'Вьюрковые',
        category: 'european',
        description_en: 'Large bullfinch with gray head and back. Pink-red breast in males, buff-brown in females. Mountain forest specialist.',
        description_ru: 'Крупный снегирь с серой головой и спиной. Розово-красная грудь у самцов, буровато-палевая у самок. Специалист горных лесов.',
        characteristics: {
            size: 'medium (16-18 cm)',
            wingspan: '26-30 cm',
            color: ['gray', 'pink-red', 'black', 'white', 'buff'],
            features: ['gray head', 'pink breast (male)', 'black cap', 'white wing bar'],
            habitat: ['mountain forests', 'coniferous woods', 'alpine zones', 'bamboo thickets'],
            behavior: ['quiet', 'seed eating', 'bud eating', 'pairs or small groups']
        }
    },
    {
        id: 'azores-bullfinch',
        name_en: 'Azores Bullfinch',
        name_ru: 'Азорский снегирь',
        latin_name: 'Pyrrhula murina',
        family: 'Fringillidae',
        family_ru: 'Вьюрковые',
        category: 'european',
        description_en: 'Rare endemic bullfinch of Azores. Black head and wings with pink-red breast in males. Critically endangered species.',
        description_ru: 'Редкий эндемичный снегирь Азорских островов. Чёрная голова и крылья с розово-красной грудью у самцов. Критически угрожаемый вид.',
        characteristics: {
            size: 'medium (16-17 cm)',
            wingspan: '24-27 cm',
            color: ['black', 'pink-red', 'gray', 'white'],
            features: ['black head', 'pink breast (male)', 'gray back', 'white wing bar'],
            habitat: ['laurel forests', 'mountain slopes', 'Azores islands', 'native vegetation'],
            behavior: ['quiet', 'seed eating', 'fruit eating', 'endemic']
        }
    },
    {
        id: 'crossbill',
        name_en: 'Red Crossbill',
        name_ru: 'Клёст-еловик',
        latin_name: 'Loxia curvirostra',
        family: 'Fringillidae',
        family_ru: 'Вьюрковые',
        category: 'european',
        description_en: 'Distinctive finch with crossed bill tips for extracting conifer seeds. Red males, green females. Nomadic.',
        description_ru: 'Уникальный вьюрок с перекрещенным клювом для добычи семян хвойных. Красные самцы, зелёные самки. Кочующий.',
        characteristics: {
            size: 'medium (16-18 cm)',
            wingspan: '27-31 cm',
            color: ['red', 'green', 'brown'],
            features: ['crossed bill', 'pointed wings', 'notched tail'],
            habitat: ['coniferous forests', 'pine woods', 'spruce forests'],
            behavior: ['cone feeding', 'acrobatic', 'nomadic', 'irruptive']
        }
    },
    {
        id: 'hawfinch',
        name_en: 'Hawfinch',
        name_ru: 'Дубонос',
        latin_name: 'Coccothraustes coccothraustes',
        family: 'Fringillidae',
        family_ru: 'Вьюрковые',
        category: 'european',
        description_en: 'Large powerful finch with massive bill capable of cracking cherry stones. Warm brown and black plumage.',
        description_ru: 'Крупный мощный вьюрок с массивным клювом, способным раскалывать вишнёвые косточки. Тёплое коричнево-чёрное оперение.',
        characteristics: {
            size: 'large (16-18 cm)',
            wingspan: '29-33 cm',
            color: ['warm brown', 'black', 'white', 'grey'],
            features: ['massive bill', 'black throat', 'white wing patch'],
            habitat: ['deciduous forests', 'orchards', 'woodlands', 'parks'],
            behavior: ['seed cracking', 'fruit eating', 'shy', 'pairs']
        }
    },
    // Songbirds - Sparrows
    {
        id: 'house-sparrow',
        name_en: 'House Sparrow',
        name_ru: 'Домовый воробей',
        latin_name: 'Passer domesticus',
        family: 'Passeridae',
        family_ru: 'Воробьиные',
        category: 'european',
        description_en: 'Familiar urban bird with grey crown and black bib in males. Brown streaked females. Highly adaptable.',
        description_ru: 'Знакомая городская птица с серой шапочкой и чёрным галстуком у самцов. Коричневые пёстрые самки. Очень адаптивен.',
        characteristics: {
            size: 'small (14-16 cm)',
            wingspan: '21-24 cm',
            color: ['grey', 'brown', 'black', 'white'],
            features: ['grey crown', 'black bib (male)', 'streaked back'],
            habitat: ['urban areas', 'gardens', 'farmland', 'buildings'],
            behavior: ['ground feeding', 'seed eating', 'colonial', 'chirping']
        }
    },
    {
        id: 'tree-sparrow',
        name_en: 'Eurasian Tree Sparrow',
        name_ru: 'Полевой воробей',
        latin_name: 'Passer montanus',
        family: 'Passeridae',
        family_ru: 'Воробьиные',
        category: 'european',
        description_en: 'Smaller than house sparrow with chocolate brown crown and black cheek spot. More rural distribution.',
        description_ru: 'Мельче домового воробья с шоколадно-коричневой шапочкой и чёрным пятном на щеке. Более сельское распространение.',
        characteristics: {
            size: 'small (14-16 cm)',
            wingspan: '21-24 cm',
            color: ['brown', 'grey', 'black', 'white'],
            features: ['brown crown', 'black cheek spot', 'white collar'],
            habitat: ['farmland', 'orchards', 'villages', 'open woodland'],
            behavior: ['ground feeding', 'seed eating', 'colonial', 'chirping']
        }
    },
    {
        id: 'rock-sparrow',
        name_en: '',
        name_ru: 'Скалистый воробей',
        latin_name: 'Petronia petronia',
        family: 'Passeridae',
        family_ru: 'Воробьиные',
        category: 'european',
        description_en: 'Sturdy sparrow of rocky habitats with pale supercilium and yellow throat patch. Southern European distribution.',
        description_ru: 'Крепкий воробей скалистых местообитаний с бледной бровью и жёлтым пятном на горле. Южноевропейское распространение.',
        characteristics: {
            size: 'small (15-17 cm)',
            wingspan: '26-29 cm',
            color: ['brown', 'buff', 'grey', 'yellow'],
            features: ['pale supercilium', 'yellow throat patch', 'streaked plumage'],
            habitat: ['rocky slopes', 'cliffs', 'mountain villages', 'ruins'],
            behavior: ['ground feeding', 'seed eating', 'colonial', 'loud calls']
        }
    },
    // Songbirds - Thrushes
    {
        id: 'song-thrush',
        name_en: 'Song Thrush',
        name_ru: 'Певчий дрозд',
        latin_name: 'Turdus philomelos',
        family: 'Turdidae',
        family_ru: 'Дроздовые',
        category: 'european',
        description_en: 'Medium thrush with spotted breast and warm brown back. Beautiful repetitive song with clear phrases.',
        description_ru: 'Средний дрозд с пятнистой грудью и тёплой коричневой спиной. Красивая повторяющаяся песня с чёткими фразами.',
        characteristics: {
            size: 'medium (20-23 cm)',
            wingspan: '33-36 cm',
            color: ['brown', 'buff', 'black', 'white'],
            features: ['spotted breast', 'warm brown upperparts', 'pale eyebrow'],
            habitat: ['woodlands', 'gardens', 'parks', 'hedgerows'],
            behavior: ['ground foraging', 'snail smashing', 'singing', 'territorial']
        }
    },
    {
        id: 'mistle-thrush',
        name_en: 'Mistle Thrush',
        name_ru: 'Рябинник',
        latin_name: 'Turdus viscivorus',
        family: 'Turdidae',
        family_ru: 'Дроздовые',
        category: 'european',
        description_en: 'Large thrush with heavily spotted breast and white wing patches. Loud fluting song. Defends mistletoe berries.',
        description_ru: 'Крупный дрозд с сильно пятнистой грудью и белыми пятнами на крыльях. Громкая флейтовая песня. Защищает ягоды омелы.',
        characteristics: {
            size: 'large (25-28 cm)',
            wingspan: '42-47 cm',
            color: ['grey-brown', 'white', 'black'],
            features: ['heavy spotting', 'white wing patches', 'white tail corners'],
            habitat: ['open woodlands', 'parks', 'gardens', 'farmland'],
            behavior: ['ground foraging', 'berry eating', 'loud singing', 'territorial']
        }
    },
    {
        id: 'blackbird',
        name_en: 'Common Blackbird',
        name_ru: 'Чёрный дрозд',
        latin_name: 'Turdus merula',
        family: 'Turdidae',
        family_ru: 'Дроздовые',
        category: 'european',
        description_en: 'Glossy black male with bright orange beak and eye-ring. Brown females. Rich fluting song, often sings at night.',
        description_ru: 'Блестящий чёрный самец с ярко-оранжевым клювом и кольцом вокруг глаза. Коричневые самки. Богатая флейтовая песня, часто поёт ночью.',
        characteristics: {
            size: 'medium (23-29 cm)',
            wingspan: '34-42 cm',
            color: ['black', 'orange', 'brown'],
            features: ['orange beak', 'yellow eye-ring (male)', 'brown female'],
            habitat: ['gardens', 'woodlands', 'parks', 'urban areas'],
            behavior: ['ground foraging', 'worm pulling', 'singing', 'territorial']
        }
    },
    {
        id: 'fieldfare',
        name_en: 'Fieldfare',
        name_ru: 'Рябинник',
        latin_name: 'Turdus pilaris',
        family: 'Turdidae',
        family_ru: 'Дроздовые',
        category: 'european',
        description_en: 'Large thrush with grey head, chestnut back, and spotted breast. Winter visitor in large flocks. Harsh call.',
        description_ru: 'Крупный дрозд с серой головой, каштановой спиной и пятнистой грудью. Зимний гость большими стаями. Резкий крик.',
        characteristics: {
            size: 'large (24-27 cm)',
            wingspan: '39-42 cm',
            color: ['grey', 'chestnut', 'black', 'white'],
            features: ['grey head', 'chestnut back', 'spotted breast'],
            habitat: ['open woodlands', 'farmland', 'parks', 'gardens'],
            behavior: ['ground foraging', 'berry eating', 'flocking', 'defensive']
        }
    },
    {
        id: 'redwing',
        name_en: 'Redwing',
        name_ru: 'Белобровик',
        latin_name: 'Turdus iliacus',
        family: 'Turdidae',
        family_ru: 'Дроздовые',
        category: 'european',
        description_en: 'Small thrush with creamy supercilium and red flanks. Winter visitor in large flocks. High-pitched call.',
        description_ru: 'Маленький дрозд с кремовой бровью и красными боками. Зимний гость большими стаями. Высокий крик.',
        characteristics: {
            size: 'small (19-22 cm)',
            wingspan: '31-35 cm',
            color: ['brown', 'red', 'cream', 'white'],
            features: ['creamy supercilium', 'red flanks', 'spotted breast'],
            habitat: ['woodlands', 'farmland', 'parks', 'gardens'],
            behavior: ['ground foraging', 'berry eating', 'flocking', 'migratory']
        }
    },
    {
        id: 'ring-ouzel',
        name_en: 'Ring Ouzel',
        name_ru: 'Белозобый дрозд',
        latin_name: 'Turdus torquatus',
        family: 'Turdidae',
        family_ru: 'Дроздовые',
        category: 'european',
        description_en: 'Black thrush of mountains with white crescent on breast and white wing patches. Shy and elusive.',
        description_ru: 'Чёрный дрозд гор с белым полумесяцем на груди и белыми пятнами на крыльях. Застенчивый и скрытный.',
        characteristics: {
            size: 'medium (23-26 cm)',
            wingspan: '36-41 cm',
            color: ['black', 'white', 'grey'],
            features: ['white breast crescent', 'white wing patches', 'pale-scaled back'],
            habitat: ['mountains', 'moorland', 'rocky areas', 'cliffs'],
            behavior: ['ground foraging', 'berry eating', 'shy', 'territorial']
        }
    },
    {
        id: 'robin',
        name_en: 'European Robin',
        name_ru: 'Зарянка',
        latin_name: 'Erithacus rubecula',
        family: 'Muscicapidae',
        family_ru: 'Мухоловковые',
        category: 'european',
        description_en: 'Small bird with bright orange-red breast and face. Friendly garden visitor. Clear whistling song.',
        description_ru: 'Маленькая птица с ярко-оранжево-красной грудью и лицом. Дружелюбный садовый посетитель. Чистая свистящая песня.',
        characteristics: {
            size: 'small (12-14 cm)',
            wingspan: '20-22 cm',
            color: ['orange-red', 'brown', 'grey', 'white'],
            features: ['orange-red breast', 'large dark eyes', 'slender legs'],
            habitat: ['gardens', 'woodlands', 'parks', 'hedgerows'],
            behavior: ['ground foraging', 'insect hunting', 'singing', 'territorial']
        }
    },
    // Songbirds - Larks
    {
        id: 'skylark',
        name_en: 'Eurasian Skylark',
        name_ru: 'Жаворонок полевой',
        latin_name: 'Alauda arvensis',
        family: 'Alaudidae',
        family_ru: 'Жаворонковые',
        category: 'european',
        description_en: 'Streaked brown lark with small crest. Famous for prolonged song flight. Ground nester in open country.',
        description_ru: 'Пёстрый коричневый жаворонок с небольшим хохолком. Знаменит продолжительной песней в полёте. Гнездится на земле.',
        characteristics: {
            size: 'medium (16-18 cm)',
            wingspan: '30-36 cm',
            color: ['streaked brown', 'buff', 'white'],
            features: ['small crest', 'streaked plumage', 'pale legs'],
            habitat: ['open farmland', 'grasslands', 'moors', 'coastal areas'],
            behavior: ['song flight', 'ground nesting', 'ground feeding', 'hovering']
        }
    },
    {
        id: 'wood-lark',
        name_en: 'Wood Lark',
        name_ru: 'Лесной жаворонок',
        latin_name: 'Lullula arborea',
        family: 'Alaudidae',
        family_ru: 'Жаворонковые',
        category: 'european',
        description_en: 'Small lark with short crest and prominent pale supercilium. Beautiful descending song. Woodland dweller.',
        description_ru: 'Маленький жаворонок с коротким хохолком и заметной бледной бровью. Красивая нисходящая песня. Обитатель лесов.',
        characteristics: {
            size: 'small (14-15 cm)',
            wingspan: '26-28 cm',
            color: ['brown', 'buff', 'white'],
            features: ['short crest', 'long supercilium', 'white throat'],
            habitat: ['pine forests', 'open woodlands', 'heathland', 'clearings'],
            behavior: ['song flight', 'ground feeding', 'perching', 'territorial']
        }
    },
    {
        id: 'crested-lark',
        name_en: 'Crested Lark',
        name_ru: 'Хохлатый жаворонок',
        latin_name: 'Galerida cristata',
        family: 'Alaudidae',
        family_ru: 'Жаворонковые',
        category: 'european',
        description_en: 'Large lark with prominent pointed crest. Sandy brown plumage. Ground dweller of open arid areas.',
        description_ru: 'Крупный жаворонок с заметным заострённым хохолком. Песчано-коричневое оперение. Наземный обитатель открытых засушливых мест.',
        characteristics: {
            size: 'medium (17-19 cm)',
            wingspan: '32-36 cm',
            color: ['sandy brown', 'buff', 'black'],
            features: ['pointed crest', 'streaked plumage', 'long hind claw'],
            habitat: ['arid plains', 'farmland', 'steppes', 'semi-desert'],
            behavior: ['ground feeding', 'ground nesting', 'crested display', 'running']
        }
    },
    {
        id: 'horned-lark',
        name_en: 'Horned Lark',
        name_ru: 'Рогатый жаворонок',
        latin_name: 'Eremophila alpestris',
        family: 'Alaudidae',
        family_ru: 'Жаворонковые',
        category: 'european',
        description_en: 'Distinctive lark with black face mask and horn-like feather tufts. Mountain and tundra species.',
        description_ru: 'Уникальный жаворонок с чёрной маской и рогоподобными пучками перьев. Горный и тундровый вид.',
        characteristics: {
            size: 'medium (15-17 cm)',
            wingspan: '30-34 cm',
            color: ['pale brown', 'yellow', 'black', 'white'],
            features: ['black face mask', 'horn tufts', 'yellow face'],
            habitat: ['mountains', 'tundra', 'alpine meadows', 'barren ground'],
            behavior: ['ground feeding', 'ground nesting', 'flocking', 'running']
        }
    },
    // Songbirds - Swallows
    {
        id: 'barn-swallow',
        name_en: 'Barn Swallow',
        name_ru: 'Деревенская ласточка',
        latin_name: 'Hirundo rustica',
        family: 'Hirundinidae',
        family_ru: 'Ласточковые',
        category: 'european',
        description_en: 'Sleek swallow with dark blue upperparts, red throat, and deeply forked tail. Aerial insect hunter.',
        description_ru: 'Стройная ласточка с тёмно-синей спиной, красным горлом и глубоко вильчатым хвостом. Воздушный охотник на насекомых.',
        characteristics: {
            size: 'small (17-19 cm)',
            wingspan: '32-35 cm',
            color: ['dark blue', 'red', 'white', 'black'],
            features: ['forked tail', 'red throat', 'blue upperparts'],
            habitat: ['farmland', 'villages', 'open country', 'near water'],
            behavior: ['aerial hunting', 'mud nesting', 'colonial', 'migratory']
        }
    },
    {
        id: 'house-martin',
        name_en: 'Common House Martin',
        name_ru: 'Воронок',
        latin_name: 'Delichon urbicum',
        family: 'Hirundinidae',
        family_ru: 'Ласточковые',
        category: 'european',
        description_en: 'Small swallow with dark blue-black upperparts and pure white underparts and rump. Nests under eaves.',
        description_ru: 'Маленькая ласточка с тёмно-сине-чёрной спиной и чисто-белым низом и надхвостьем. Гнездится под карнизами.',
        characteristics: {
            size: 'small (13-15 cm)',
            wingspan: '26-29 cm',
            color: ['blue-black', 'white'],
            features: ['white rump', 'white underparts', 'short forked tail'],
            habitat: ['urban areas', 'villages', 'cliffs', 'open country'],
            behavior: ['aerial hunting', 'mud nesting', 'colonial', 'migratory']
        }
    },
    {
        id: 'sand-martin',
        name_en: 'Sand Martin',
        name_ru: 'Береговушка',
        latin_name: 'Riparia riparia',
        family: 'Hirundinidae',
        family_ru: 'Ласточковые',
        category: 'european',
        description_en: 'Small brown swallow with pale underparts and distinct brown breast band. Burrows in sandy banks.',
        description_ru: 'Маленькая коричневая ласточка со светлым низом и заметной коричневой грудной полосой. Роет норы в песчаных обрывах.',
        characteristics: {
            size: 'small (12-13 cm)',
            wingspan: '24-26 cm',
            color: ['brown', 'white', 'buff'],
            features: ['brown breast band', 'pale throat', 'notched tail'],
            habitat: ['river banks', 'sand pits', 'quarries', 'lakeshores'],
            behavior: ['aerial hunting', 'burrow nesting', 'colonial', 'migratory']
        }
    },
    {
        id: 'red-rumped-swallow',
        name_en: 'Red-rumped Swallow',
        name_ru: 'Рыжепоясничная ласточка',
        latin_name: 'Cecropis daurica',
        family: 'Hirundinidae',
        family_ru: 'Ласточковые',
        category: 'european',
        description_en: 'Elegant swallow with blue-black upperparts, red rump, and long tail streamers. Southern European species.',
        description_ru: 'Элегантная ласточка с сине-чёрной спиной, красным надхвостьем и длинными рулевыми перьями. Южноевропейский вид.',
        characteristics: {
            size: 'medium (17-19 cm)',
            wingspan: '32-35 cm',
            color: ['blue-black', 'red', 'buff', 'white'],
            features: ['red rump', 'long tail streamers', 'buff collar'],
            habitat: ['mountains', 'cliffs', 'villages', 'open country'],
            behavior: ['aerial hunting', 'mud nesting', 'pairs', 'migratory']
        }
    },
    // Songbirds - Other Passerines
    {
        id: 'wren',
        name_en: 'Eurasian Wren',
        name_ru: 'Крапивник',
        latin_name: 'Troglodytes troglodytes',
        family: 'Troglodytidae',
        family_ru: 'Крапивниковые',
        category: 'european',
        description_en: 'Tiny brown bird with cocked tail and loud song. Hides in dense vegetation. Most widespread European bird.',
        description_ru: 'Крошечная коричневая птица с поднятым хвостом и громкой песней. Прячется в густой растительности. Самая распространённая птица Европы.',
        characteristics: {
            size: 'tiny (9-10 cm)',
            wingspan: '15-17 cm',
            color: ['reddish-brown', 'buff', 'black'],
            features: ['cocked tail', 'pale supercilium', 'tiny size'],
            habitat: ['woodlands', 'gardens', 'rocky areas', 'hedgerows'],
            behavior: ['skulking', 'insect hunting', 'loud singing', 'crevice nesting']
        }
    },
    {
        id: 'hedge-sparrow',
        name_en: 'Dunnock',
        name_ru: 'Завирушка',
        latin_name: 'Prunella modularis',
        family: 'Prunellidae',
        family_ru: 'Завирушковые',
        category: 'european',
        description_en: 'Small brown sparrow-like bird with grey head and breast. Subtle warbling song. Common garden visitor.',
        description_ru: 'Маленькая коричневая воробьиная птица с серой головой и грудью. Тихая воркующая песня. Обычный садовый посетитель.',
        characteristics: {
            size: 'small (13-14 cm)',
            wingspan: '19-21 cm',
            color: ['brown', 'grey', 'black'],
            features: ['grey head', 'streaked back', 'pointed bill'],
            habitat: ['gardens', 'hedgerows', 'woodlands', 'scrub'],
            behavior: ['ground feeding', 'wing flicking', 'singing', 'shy']
        }
    },
    {
        id: 'starling',
        name_en: 'Common Starling',
        name_ru: 'Скворец обыкновенный',
        latin_name: 'Sturnus vulgaris',
        family: 'Sturnidae',
        family_ru: 'Скворцовые',
        category: 'european',
        description_en: 'Glossy black bird with white spots and purple-green iridescence. Yellow beak in spring. Mimic and flocker.',
        description_ru: 'Блестящая чёрная птица с белыми пятнами и фиолетово-зелёным отливом. Жёлтый клюв весной. Подражатель и стайная птица.',
        characteristics: {
            size: 'medium (19-23 cm)',
            wingspan: '31-38 cm',
            color: ['glossy black', 'white', 'purple', 'green'],
            features: ['white spots', 'iridescent plumage', 'yellow beak'],
            habitat: ['urban areas', 'farmland', 'gardens', 'woodlands'],
            behavior: ['ground feeding', 'murmuration', 'mimicry', 'colonial']
        }
    },
    {
        id: 'myna',
        name_en: 'Common Myna',
        name_ru: 'Индийская майна',
        latin_name: 'Acridotheres tristis',
        family: 'Sturnidae',
        family_ru: 'Скворцовые',
        category: 'european',
        description_en: 'Brown starling with yellow beak, legs, and eye patch. White wing patches in flight. Introduced in some areas.',
        description_ru: 'Коричневый скворец с жёлтым клювом, ногами и пятном вокруг глаза. Белые пятна на крыльях в полёте. Интродуцирован в некоторых районах.',
        characteristics: {
            size: 'medium (23-26 cm)',
            wingspan: '38-42 cm',
            color: ['brown', 'black', 'yellow', 'white'],
            features: ['yellow beak', 'yellow eye patch', 'white wing patches'],
            habitat: ['urban areas', 'farmland', 'open woodlands', 'gardens'],
            behavior: ['ground feeding', 'mimicry', 'colonial', 'aggressive']
        }
    },
    {
        id: 'nuthatch',
        name_en: 'Eurasian Nuthatch',
        name_ru: 'Поползень',
        latin_name: 'Sitta europaea',
        family: 'Sittidae',
        family_ru: 'Поползневые',
        category: 'european',
        description_en: 'Small bird with blue-grey back, white face, and chestnut underparts. Climbs headfirst down trees.',
        description_ru: 'Маленькая птица с сизо-серой спиной, белым лицом и каштановым низом. Спускается по деревьям головой вниз.',
        characteristics: {
            size: 'small (12-14 cm)',
            wingspan: '20-22 cm',
            color: ['blue-grey', 'white', 'chestnut', 'black'],
            features: ['black eye stripe', 'pointed bill', 'strong feet'],
            habitat: ['deciduous forests', 'woodlands', 'parks', 'orchards'],
            behavior: ['tree climbing', 'seed caching', 'loud calls', 'territorial']
        }
    },
    {
        id: 'treecreeper',
        name_en: 'Eurasian Treecreeper',
        name_ru: 'Поползень',
        latin_name: 'Certhia familiaris',
        family: 'Certhiidae',
        family_ru: 'Пищуховые',
        category: 'european',
        description_en: 'Tiny brown bird with curved bill and stiff tail. Spirals up tree trunks searching for insects.',
        description_ru: 'Крошечная коричневая птица с изогнутым клювом и жёстким хвостом. Спиралью поднимается по стволам в поисках насекомых.',
        characteristics: {
            size: 'tiny (12-14 cm)',
            wingspan: '17-19 cm',
            color: ['streaked brown', 'white', 'buff'],
            features: ['curved bill', 'stiff tail feathers', 'cryptic plumage'],
            habitat: ['coniferous forests', 'woodlands', 'parks', 'gardens'],
            behavior: ['tree climbing', 'insect hunting', 'spiraling', 'territorial']
        }
    },
    {
        id: 'waxwing',
        name_en: 'Bohemian Waxwing',
        name_ru: 'Свиристель',
        latin_name: 'Bombycilla garrulus',
        family: 'Bombycillidae',
        family_ru: 'Свиристелевые',
        category: 'european',
        description_en: 'Sleek crested bird with silky brown plumage, black mask, and yellow-tipped tail. Wax-like red wing tips.',
        description_ru: 'Стройная хохлатая птица с шёлковым коричневым оперением, чёрной маской и жёлтым кончиком хвоста. Восковидные красные кончики крыльев.',
        characteristics: {
            size: 'medium (18-21 cm)',
            wingspan: '32-35 cm',
            color: ['silky brown', 'grey', 'yellow', 'black', 'red'],
            features: ['crest', 'black mask', 'waxy wing tips', 'yellow tail tip'],
            habitat: ['coniferous forests', 'birch woods', 'gardens', 'berry bushes'],
            behavior: ['berry eating', 'flocking', 'irruptive', 'passing food']
        }
    },
    {
        id: 'long-tailed-tit',
        name_en: 'Long-tailed Tit',
        name_ru: 'Ополовник',
        latin_name: 'Aegithalos caudatus',
        family: 'Aegithalidae',
        family_ru: 'Длиннохвостые синицы',
        category: 'european',
        description_en: 'Tiny bird with extremely long tail, pink and black plumage. Looks like a flying pom-pom. Flocks in winter.',
        description_ru: 'Крошечная птица с чрезвычайно длинным хвостом, розово-чёрным оперением. Выглядит как летающий помпон. Зимой стаями.',
        characteristics: {
            size: 'small (13-15 cm with tail)',
            wingspan: '16-19 cm',
            color: ['black', 'white', 'pink', 'grey'],
            features: ['very long tail', 'small round body', 'short bill'],
            habitat: ['woodlands', 'scrub', 'gardens', 'hedgerows'],
            behavior: ['acrobatic', 'insect hunting', 'flocking', 'contact calls']
        }
    },
    {
        id: 'penduline-tit',
        name_en: 'Eurasian Penduline Tit',
        name_ru: 'Ремез',
        latin_name: 'Remiz pendulinus',
        family: 'Remizidae',
        family_ru: '��емезовые',
        category: 'european',
        description_en: 'Small grey-brown tit with black mask. Builds elaborate hanging nest from plant down. Reed bed specialist.',
        description_ru: 'Маленькая серо-коричневая синица с чёрной маской. Строит сложное висячее гнездо из пуха растений. Специалист тростниковых зарослей.',
        characteristics: {
            size: 'small (10-11 cm)',
            wingspan: '16-18 cm',
            color: ['grey-brown', 'buff', 'black'],
            features: ['black mask', 'pale crown', 'small size'],
            habitat: ['reed beds', 'riparian forests', 'wetlands', 'willows'],
            behavior: ['nest building', 'insect hunting', 'hanging nest', 'migratory']
        }
    },
    {
        id: 'bearded-tit',
        name_en: 'Bearded Reedling',
        name_ru: 'Усатая синица',
        latin_name: 'Panurus biarmicus',
        family: 'Panuridae',
        family_ru: 'Усатые синицы',
        category: 'european',
        description_en: 'Distinctive reed bed bird with long tail and black moustache in males. Golden-brown plumage. Reed specialist.',
        description_ru: 'Уникальная птица тростников с длинным хвостом и чёрными усами у самцов. Золотисто-коричневое оперение. Специалист тростника.',
        characteristics: {
            size: 'small (15-17 cm)',
            wingspan: '19-22 cm',
            color: ['golden-brown', 'grey', 'black', 'white'],
            features: ['black moustache (male)', 'long tail', 'grey head (male)'],
            habitat: ['reed beds', 'marshes', 'wetlands', 'lakeshores'],
            behavior: ['reed climbing', 'seed eating', 'acrobatic', 'colonial']
        }
    },
    {
        id: 'shrike',
        name_en: 'Great Grey Shrike',
        name_ru: 'Серый сорокопут',
        latin_name: 'Lanius excubitor',
        family: 'Laniidae',
        family_ru: 'Сорокопутовые',
        category: 'european',
        description_en: 'Grey predator with black mask and hooked beak. Impales prey on thorns. Butcher bird of open country.',
        description_ru: 'Серый хищник с чёрной маской и крючковатым клювом. Нанизывает добычу на шипы. Птица-мясник открытых мест.',
        characteristics: {
            size: 'medium (24-27 cm)',
            wingspan: '34-38 cm',
            color: ['grey', 'black', 'white'],
            features: ['black mask', 'hooked beak', 'long tail', 'white wing patch'],
            habitat: ['open country', 'scrubland', 'farmland', 'heathland'],
            behavior: ['perch hunting', 'prey impaling', 'hovering', 'territorial']
        }
    },
    {
        id: 'red-backed-shrike',
        name_en: 'Red-backed Shrike',
        name_ru: 'Черноголовый сорокопут',
        latin_name: 'Lanius collurio',
        family: 'Laniidae',
        family_ru: 'Сорокопутовые',
        category: 'european',
        description_en: 'Small shrike with chestnut back in males, brown in females. Black mask. Insect hunter of scrubland.',
        description_ru: 'Маленький сорокопут с каштановой спиной у самцов, коричневой у самок. Чёрная маска. Охотник на насекомых кустарников.',
        characteristics: {
            size: 'small (16-18 cm)',
            wingspan: '25-28 cm',
            color: ['chestnut', 'grey', 'pink', 'brown'],
            features: ['black mask', 'chestnut back (male)', 'barred tail'],
            habitat: ['scrubland', 'heathland', 'forest edges', 'thorny bushes'],
            behavior: ['perch hunting', 'insect hunting', 'prey impaling', 'migratory']
        }
    },
    {
        id: 'jay',
        name_en: 'Eurasian Jay',
        name_ru: 'Сойка',
        latin_name: 'Garrulus glandarius',
        family: 'Corvidae',
        family_ru: 'Врановые',
        category: 'european',
        description_en: 'Colorful corvid with pink-brown body, black moustache, and bright blue wing panel. Loud harsh call.',
        description_ru: 'Красочная врановая с розово-коричневым телом, чёрными усами и ярко-синей панелью на крыле. Громкий резкий крик.',
        characteristics: {
            size: 'large (32-35 cm)',
            wingspan: '52-58 cm',
            color: ['pink-brown', 'black', 'blue', 'white'],
            features: ['blue wing panel', 'black moustache', 'crested head'],
            habitat: ['woodlands', 'forests', 'parks', 'gardens'],
            behavior: ['acorn caching', 'mimicry', 'loud calls', 'territorial']
        }
    },
    {
        id: 'magpie',
        name_en: 'Eurasian Magpie',
        name_ru: 'Сорока',
        latin_name: 'Pica pica',
        family: 'Corvidae',
        family_ru: 'Врановые',
        category: 'european',
        description_en: 'Striking black and white corvid with long tail and iridescent wings. Highly intelligent. Common across Europe.',
        description_ru: 'Поразительная чёрно-белая врановая с длинным хвостом и переливающимися крыльями. Высокоинтеллектуальна. Обычна по всей Европе.',
        characteristics: {
            size: 'large (44-46 cm)',
            wingspan: '52-62 cm',
            color: ['black', 'white', 'blue', 'green'],
            features: ['long tail', 'iridescent wings', 'black and white'],
            habitat: ['farmland', 'woodlands', 'urban areas', 'parks'],
            behavior: ['ground foraging', 'caching', 'intelligent', 'territorial']
        }
    },
    {
        id: 'jackdaw',
        name_en: '',
        name_ru: 'Галка',
        latin_name: 'Coloeus monedula',
        family: 'Corvidae',
        family_ru: 'Врановые',
        category: 'european',
        description_en: 'Small black corvid with grey nape and pale eyes. Social and vocal. Nests in cavities and chimneys.',
        description_ru: 'Маленькая чёрная врановая с серым затылком и светлыми глазами. Общественная и голосистая. Гнездится в дуплах и трубах.',
        characteristics: {
            size: 'medium (30-34 cm)',
            wingspan: '52-58 cm',
            color: ['black', 'grey', 'pale blue'],
            features: ['grey nape', 'pale eyes', 'compact body'],
            habitat: ['urban areas', 'woodlands', 'cliffs', 'farmland'],
            behavior: ['colonial', 'caching', 'vocal', 'acrobatic']
        }
    },
    {
        id: 'rook',
        name_en: 'Rook',
        name_ru: 'Грач',
        latin_name: 'Corvus frugilegus',
        family: 'Corvidae',
        family_ru: 'Врановые',
        category: 'european',
        description_en: 'Large black corvid with bare grey-white face patch in adults. Colonial nester in rookeries. Farmland feeder.',
        description_ru: 'Крупная чёрная врановая с голой серо-белой лицевой пятной у взрослых. Колониально гнездится в грачевниках. Кормится на полях.',
        characteristics: {
            size: 'large (42-46 cm)',
            wingspan: '74-88 cm',
            color: ['black', 'purple', 'blue'],
            features: ['bare face patch', 'shaggy thighs', 'pointed bill'],
            habitat: ['farmland', 'pastures', 'woodlands', 'rookeries'],
            behavior: ['ground foraging', 'colonial', 'tool use', 'vocal']
        }
    },
    {
        id: 'carrion-crow',
        name_en: 'Carrion Crow',
        name_ru: 'Серая ворона',
        latin_name: 'Corvus corone',
        family: 'Corvidae',
        family_ru: 'Врановые',
        category: 'european',
        description_en: 'Large all-black corvid with glossy plumage. Highly intelligent and adaptable. Common urban scavenger.',
        description_ru: 'Крупная полностью чёрная врановая с блестящим оперением. Высокоинтеллектуальна и адаптивна. Обычный городской падальщик.',
        characteristics: {
            size: 'large (47-52 cm)',
            wingspan: '84-100 cm',
            color: ['glossy black', 'purple', 'green'],
            features: ['all black', 'strong bill', 'rounded tail'],
            habitat: ['urban areas', 'farmland', 'woodlands', 'coasts'],
            behavior: ['scavenging', 'intelligent', 'tool use', 'territorial']
        }
    },
    {
        id: 'raven',
        name_en: 'Common Raven',
        name_ru: 'Ворон',
        latin_name: 'Corvus corax',
        family: 'Corvidae',
        family_ru: 'Врановые',
        category: 'european',
        description_en: 'Largest corvid with shaggy throat feathers and wedge-shaped tail. Deep croaking call. Mountain and coastal species.',
        description_ru: 'Крупнейшая врановая с лохматым горлом и клиновидным хвостом. Глубокий каркающий крик. Горный и прибрежный вид.',
        characteristics: {
            size: 'very large (56-67 cm)',
            wingspan: '115-150 cm',
            color: ['glossy black', 'purple', 'blue'],
            features: ['shaggy throat', 'wedge tail', 'massive bill'],
            habitat: ['mountains', 'cliffs', 'forests', 'coasts'],
            behavior: ['soaring', 'scavenging', 'intelligent', 'pairs']
        }
    },
    {
        id: 'nutcracker',
        name_en: 'Spotted Nutcracker',
        name_ru: 'Кедровка',
        latin_name: 'Nucifraga caryocatactes',
        family: 'Corvidae',
        family_ru: 'Врановые',
        category: 'european',
        description_en: 'Dark brown corvid covered in white spots. Specialized in pine nut extraction. Mountain coniferous forests.',
        description_ru: 'Тёмно-коричневая врановая, покрытая белыми пятнами. Специализируется на добыче кедровых орехов. Горные хвойные леса.',
        characteristics: {
            size: 'large (31-35 cm)',
            wingspan: '49-53 cm',
            color: ['dark brown', 'white', 'black'],
            features: ['white spots', 'long bill', 'white tail corners'],
            habitat: ['coniferous forests', 'mountains', 'pine woods', 'alpine'],
            behavior: ['seed caching', 'cone feeding', 'loud calls', 'territorial']
        }
    },
    // Waterbirds - Ducks
    {
        id: 'mallard',
        name_en: 'Mallard',
        name_ru: 'Кряква',
        latin_name: 'Anas platyrhynchos',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Large dabbling duck with iridescent green head in males. Brown females. Most common and widespread duck.',
        description_ru: 'Крупная речная утка с переливающейся зелёной головой у самцов. Коричневые самки. Самая обычная и распространённая утка.',
        characteristics: {
            size: 'large (50-65 cm)',
            wingspan: '81-98 cm',
            color: ['green', 'brown', 'grey', 'white'],
            features: ['green head (male)', 'white neck ring', 'blue wing speculum'],
            habitat: ['lakes', 'ponds', 'rivers', 'wetlands', 'parks'],
            behavior: ['dabbling', 'grazing', 'pairing', 'migratory']
        }
    },
    {
        id: 'teal',
        name_en: 'Eurasian Teal',
        name_ru: 'Чирок-свистунок',
        latin_name: 'Anas crecca',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Small dabbling duck with chestnut head and green eye patch in males. Fast flying. Common winter visitor.',
        description_ru: 'Маленькая речная утка с каштановой головой и зелёным пятном у глаза у самцов. Быстрый полёт. Обычный зимний гость.',
        characteristics: {
            size: 'small (34-38 cm)',
            wingspan: '53-59 cm',
            color: ['chestnut', 'green', 'grey', 'brown'],
            features: ['green eye patch', 'chestnut head', 'green wing speculum'],
            habitat: ['wetlands', 'marshes', 'lakes', 'estuaries'],
            behavior: ['dabbling', 'flocking', 'fast flight', 'migratory']
        }
    },
    {
        id: 'wigeon',
        name_en: 'Eurasian Wigeon',
        name_ru: 'Свиязь',
        latin_name: 'Mareca penelope',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Medium duck with grey body, chestnut head, and creamy crown in males. Whistling call. Grazing feeder.',
        description_ru: 'Средняя утка с серым телом, каштановой головой и кремовой макушкой у самцов. Свистящий крик. Пасущийся кормёжник.',
        characteristics: {
            size: 'medium (42-50 cm)',
            wingspan: '75-86 cm',
            color: ['grey', 'chestnut', 'cream', 'white'],
            features: ['creamy crown', 'grey body', 'green wing speculum'],
            habitat: ['wetlands', 'marshes', 'lakes', 'coastal lagoons'],
            behavior: ['grazing', 'dabbling', 'flocking', 'migratory']
        }
    },
    {
        id: 'pintail',
        name_en: 'Northern Pintail',
        name_ru: 'Шилохвость',
        latin_name: 'Anas acuta',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Elegant duck with long neck and pointed tail in males. Chocolate head with white stripe. Graceful flight.',
        description_ru: 'Элегантная утка с длинной шеей и заострённым хвостом у самцов. Шоколадная голова с белой полосой. Грациозный полёт.',
        characteristics: {
            size: 'large (51-66 cm)',
            wingspan: '80-95 cm',
            color: ['chocolate', 'grey', 'white', 'black'],
            features: ['long pointed tail', 'long neck', 'white stripe'],
            habitat: ['wetlands', 'marshes', 'lakes', 'estuaries'],
            behavior: ['dabbling', 'grazing', 'fast flight', 'migratory']
        }
    },
    {
        id: 'shoveler',
        name_en: 'Northern Shoveler',
        name_ru: 'Широконоска',
        latin_name: 'Spatula clypeata',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Distinctive duck with enormous spatulate bill. Green head, white breast, chestnut flanks. Filter feeder.',
        description_ru: 'Уникальная утка с огромным лопатообразным клювом. Зелёная голова, белая грудь, каштановые бока. Фильтратор.',
        characteristics: {
            size: 'medium (44-52 cm)',
            wingspan: '73-82 cm',
            color: ['green', 'white', 'chestnut', 'blue'],
            features: ['large spatulate bill', 'green head', 'chestnut flanks'],
            habitat: ['shallow wetlands', 'marshes', 'lakes', 'ponds'],
            behavior: ['filter feeding', 'dabbling', 'flocking', 'migratory']
        }
    },
    {
        id: 'gadwall',
        name_en: 'Gadwall',
        name_ru: 'Серая утка',
        latin_name: 'Mareca strepera',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Medium grey duck with black rump and white wing speculum. Subtle plumage. Dabbling feeder.',
        description_ru: 'Средняя серая утка с чёрным надхвостьем и белым зеркалом. Скромное оперение. Речная кормёжка.',
        characteristics: {
            size: 'medium (46-56 cm)',
            wingspan: '78-90 cm',
            color: ['grey', 'brown', 'black', 'white'],
            features: ['white speculum', 'black rump', 'grey plumage'],
            habitat: ['wetlands', 'marshes', 'lakes', 'reservoirs'],
            behavior: ['dabbling', 'grazing', 'flocking', 'migratory']
        }
    },
    {
        id: 'goldeneye',
        name_en: 'Common Goldeneye',
        name_ru: 'Гоголь',
        latin_name: 'Bucephala clangula',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Diving duck with large round head and bright golden eye. Black and white male. Whistling wing sound.',
        description_ru: 'Ныряющая утка с большой круглой головой и ярким золотым глазом. Чёрно-белый самец. Свистящий звук крыльев.',
        characteristics: {
            size: 'medium (40-50 cm)',
            wingspan: '62-77 cm',
            color: ['black', 'white', 'brown', 'golden'],
            features: ['golden eye', 'round head', 'white cheek patch'],
            habitat: ['lakes', 'rivers', 'coastal waters', 'forested wetlands'],
            behavior: ['diving', 'fish hunting', 'cavity nesting', 'migratory']
        }
    },
    {
        id: 'tufted-duck',
        name_en: 'Tufted Duck',
        name_ru: 'Хохлатая чернеть',
        latin_name: 'Aythya fuligula',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Diving duck with black plumage, white flanks, and yellow eye. Male has drooping crest. Common winter visitor.',
        description_ru: 'Ныряющая утка с чёрным оперением, белыми боками и жёлтым глазом. У самца свисающий хохол. Обычный зимний гость.',
        characteristics: {
            size: 'medium (40-47 cm)',
            wingspan: '67-73 cm',
            color: ['black', 'white', 'yellow'],
            features: ['drooping crest', 'yellow eye', 'white flanks'],
            habitat: ['lakes', 'reservoirs', 'coastal waters', 'wetlands'],
            behavior: ['diving', 'flocking', 'upending', 'migratory']
        }
    },
    {
        id: 'pochard',
        name_en: 'Common Pochard',
        name_ru: 'Красноголовый нырок',
        latin_name: 'Aythya ferina',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Diving duck with chestnut head and grey body in males. Pale eye. Grey bill with black tip.',
        description_ru: 'Ныряющая утка с каштановой головой и серым телом у самцов. Светлый глаз. Серый клюв с чёрным кончиком.',
        characteristics: {
            size: 'medium (42-49 cm)',
            wingspan: '67-73 cm',
            color: ['chestnut', 'grey', 'black'],
            features: ['chestnut head', 'pale eye', 'grey bill'],
            habitat: ['lakes', 'reservoirs', 'wetlands', 'coastal waters'],
            behavior: ['diving', 'grazing', 'flocking', 'migratory']
        }
    },
    {
        id: 'scaup',
        name_en: 'Greater Scaup',
        name_ru: 'Морская чернеть',
        latin_name: 'Aythya marila',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Large diving duck with rounded head and green gloss in males. White wing bar. Coastal and northern species.',
        description_ru: 'Крупная ныряющая утка с округлой головой и зелёным отливом у самцов. Белая полоса на крыле. Прибрежный и северный вид.',
        characteristics: {
            size: 'large (45-56 cm)',
            wingspan: '71-84 cm',
            color: ['black', 'white', 'green', 'grey'],
            features: ['rounded head', 'green gloss', 'white wing bar'],
            habitat: ['coastal waters', 'large lakes', 'estuaries', 'northern seas'],
            behavior: ['diving', 'flocking', 'mollusc feeding', 'migratory']
        }
    },
    {
        id: 'eider',
        name_en: 'Common Eider',
        name_ru: 'Гага обыкновенная',
        latin_name: 'Somateria mollissima',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Large sea duck with black and white male and brown female. Famous for soft down. Coastal northern species.',
        description_ru: 'Крупная морская утка с чёрно-белым самцом и коричневой самкой. Знаменита мягким пухом. Прибрежный северный вид.',
        characteristics: {
            size: 'large (50-71 cm)',
            wingspan: '80-110 cm',
            color: ['black', 'white', 'brown'],
            features: ['wedge-shaped bill', 'green nape', 'heavy body'],
            habitat: ['coastal waters', 'rocky shores', 'islands', 'arctic'],
            behavior: ['diving', 'shellfish feeding', 'colonial', 'migratory']
        }
    },
    {
        id: 'merganser',
        name_en: 'Goosander',
        name_ru: 'Большой крохаль',
        latin_name: 'Mergus merganser',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Large sawbill duck with dark green head and long red bill in males. Serrated bill for fish catching.',
        description_ru: 'Крупный крохаль с тёмно-зелёной головой и длинным красным клювом у самцов. Зубчатый клюв для ловли рыбы.',
        characteristics: {
            size: 'large (58-66 cm)',
            wingspan: '78-92 cm',
            color: ['dark green', 'white', 'black', 'pink'],
            features: ['long serrated bill', 'green head', 'slender body'],
            habitat: ['rivers', 'lakes', 'coastal waters', 'forested areas'],
            behavior: ['fish hunting', 'diving', 'sawbill', 'migratory']
        }
    },
    {
        id: 'smew',
        name_en: 'Smew',
        name_ru: 'Луток',
        latin_name: 'Mergellus albellus',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Small elegant sawbill with black and white male. Panda-like markings. Rare winter visitor to Europe.',
        description_ru: 'Маленький элегантный крохаль с чёрно-белым самцом. Пандоподобные отметины. Редкий зимний гость в Европе.',
        characteristics: {
            size: 'small (38-44 cm)',
            wingspan: '60-67 cm',
            color: ['black', 'white', 'grey'],
            features: ['serrated bill', 'panda markings', 'crest'],
            habitat: ['rivers', 'lakes', 'coastal waters', 'wetlands'],
            behavior: ['fish hunting', 'diving', 'flocking', 'migratory']
        }
    },
    {
        id: 'shelduck',
        name_en: 'Common Shelduck',
        name_ru: 'Пеганка',
        latin_name: 'Tadorna tadorna',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Large goose-like duck with white body, chestnut band, and red bill. Black head in males. Coastal species.',
        description_ru: 'Крупная гусеобразная утка с белым телом, каштановой полосой и красным клювом. Чёрная голова у самцов. Прибрежный вид.',
        characteristics: {
            size: 'large (58-67 cm)',
            wingspan: '110-133 cm',
            color: ['white', 'chestnut', 'black', 'red'],
            features: ['red bill', 'chestnut band', 'white body'],
            habitat: ['coastal lagoons', 'estuaries', 'salt marshes', 'lakes'],
            behavior: ['grazing', 'dabbling', 'territorial', 'migratory']
        }
    },
    {
        id: 'ruddy-shelduck',
        name_en: 'Ruddy Shelduck',
        name_ru: 'Огарь',
        latin_name: 'Tadorna ferruginea',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Large orange-brown duck with pale head and black bill. Goose-like appearance. Southern and eastern species.',
        description_ru: 'Крупная оранжево-коричневая утка со светлой головой и чёрным клювом. Гусеобразный вид. Южный и восточный вид.',
        characteristics: {
            size: 'large (58-67 cm)',
            wingspan: '120-145 cm',
            color: ['orange-brown', 'pale buff', 'black'],
            features: ['orange body', 'pale head', 'black bill'],
            habitat: ['lakes', 'reservoirs', 'steppes', 'mountain lakes'],
            behavior: ['grazing', 'swimming', 'pairs', 'migratory']
        }
    },
    // Waterbirds - Geese
    {
        id: 'greylag-goose',
        name_en: 'Greylag Goose',
        name_ru: 'Серый гусь',
        latin_name: 'Anser anser',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Large grey goose with orange bill and pink legs. Ancestor of domestic geese. Honking call.',
        description_ru: 'Крупный серый гусь с оранжевым клювом и розовыми ногами. Предок домашних гусей. Гогочущий крик.',
        characteristics: {
            size: 'large (74-91 cm)',
            wingspan: '147-180 cm',
            color: ['grey', 'orange', 'pink', 'white'],
            features: ['orange bill', 'pink legs', 'grey plumage'],
            habitat: ['wetlands', 'lakes', 'farmland', 'coastal marshes'],
            behavior: ['grazing', 'flocking', 'honking', 'migratory']
        }
    },
    {
        id: 'bean-goose',
        name_en: 'Bean Goose',
        name_ru: 'Гуменник',
        latin_name: 'Anser fabalis',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Large dark goose with black and orange bill. Darker than greylag. Tundra breeder, winter visitor.',
        description_ru: 'Крупный тёмный гусь с чёрно-оранжевым клювом. Темнее серого гуся. Гнездится в тундре, зимний гость.',
        characteristics: {
            size: 'large (69-90 cm)',
            wingspan: '140-174 cm',
            color: ['dark brown', 'black', 'orange'],
            features: ['black and orange bill', 'dark plumage', 'orange legs'],
            habitat: ['tundra', 'wetlands', 'farmland', 'coastal areas'],
            behavior: ['grazing', 'flocking', 'migratory', 'honking']
        }
    },
    {
        id: 'white-fronted-goose',
        name_en: 'Greater White-fronted Goose',
        name_ru: 'Белолобый гусь',
        latin_name: 'Anser albifrons',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Medium goose with white forehead and black belly bars. Laughing call. Arctic breeder.',
        description_ru: 'Средний гусь с белым лбом и чёрными полосами на брюхе. Смеющийся крик. Арктический гнездовик.',
        characteristics: {
            size: 'medium (64-81 cm)',
            wingspan: '130-165 cm',
            color: ['brown', 'white', 'black', 'orange'],
            features: ['white forehead', 'black belly bars', 'orange bill'],
            habitat: ['tundra', 'wetlands', 'farmland', 'coastal marshes'],
            behavior: ['grazing', 'flocking', 'migratory', 'vocal']
        }
    },
    {
        id: 'barnacle-goose',
        name_en: 'Barnacle Goose',
        name_ru: 'Белощёкая казарка',
        latin_name: 'Branta leucopsis',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Medium black and white goose with white face and black neck. Arctic breeder. Distinctive yelping call.',
        description_ru: 'Средний чёрно-белый гусь с белым лицом и чёрной шеей. Арктический гнездовик. Характерный лающий крик.',
        characteristics: {
            size: 'medium (55-70 cm)',
            wingspan: '124-145 cm',
            color: ['black', 'white', 'grey'],
            features: ['white face', 'black neck', 'black bill'],
            habitat: ['arctic tundra', 'coastal marshes', 'grasslands', 'islands'],
            behavior: ['grazing', 'flocking', 'migratory', 'colonial']
        }
    },
    {
        id: 'brent-goose',
        name_en: 'Brent Goose',
        name_ru: 'Чёрная казарка',
        latin_name: 'Branta bernicla',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Small dark goose with black head and neck, white neck patch. Coastal feeder on eelgrass.',
        description_ru: 'Маленький тёмный гусь с чёрной головой и шеей, белым пятном на шее. Прибрежный кормёжник морской травы.',
        characteristics: {
            size: 'small (55-66 cm)',
            wingspan: '106-121 cm',
            color: ['black', 'grey', 'white'],
            features: ['black head', 'white neck patch', 'dark body'],
            habitat: ['coastal waters', 'estuaries', 'salt marshes', 'tundra'],
            behavior: ['grazing', 'flocking', 'migratory', 'eelgrass feeding']
        }
    },
    {
        id: 'red-breasted-goose',
        name_en: 'Red-breasted Goose',
        name_ru: 'Краснозобая казарка',
        latin_name: 'Branta ruficollis',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Small striking goose with black, white, and chestnut-red plumage. Rare and endangered. Arctic breeder.',
        description_ru: 'Маленький поразительный гусь с чёрным, белым и каштаново-красным оперением. Редкий и исчезающий. Арктический гнездовик.',
        characteristics: {
            size: 'small (53-56 cm)',
            wingspan: '110-125 cm',
            color: ['black', 'white', 'chestnut-red'],
            features: ['red breast', 'white face patches', 'black body'],
            habitat: ['arctic tundra', 'coastal marshes', 'steppes', 'winter fields'],
            behavior: ['grazing', 'flocking', 'migratory', 'endangered']
        }
    },
    // Waterbirds - Swans
    {
        id: 'whooper-swan',
        name_en: 'Whooper Swan',
        name_ru: 'Кликун',
        latin_name: 'Cygnus cygnus',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Large white swan with yellow and black bill. Loud trumpeting call. Northern breeder, winter visitor.',
        description_ru: 'Крупный белый лебедь с жёлто-чёрным клювом. Громкий трубный крик. Северный гнездовик, зимний гость.',
        characteristics: {
            size: 'large (140-165 cm)',
            wingspan: '205-250 cm',
            color: ['white', 'yellow', 'black'],
            features: ['yellow and black bill', 'straight neck', 'large size'],
            habitat: ['lakes', 'wetlands', 'coastal waters', 'tundra'],
            behavior: ['swimming', 'grazing', 'trumpeting', 'migratory']
        }
    },
    {
        id: 'bewick-swan',
        name_en: "Bewick's Swan",
        name_ru: 'Малый лебедь',
        latin_name: 'Cygnus bewickii',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Small white swan with yellow and black bill. Shorter neck than mute swan. Arctic breeder.',
        description_ru: 'Маленький белый лебедь с жёлто-чёрным клювом. Короче шея, чем у лебедя-шипуна. Арктический гнездовик.',
        characteristics: {
            size: 'medium (115-140 cm)',
            wingspan: '170-195 cm',
            color: ['white', 'yellow', 'black'],
            features: ['small yellow patch', 'shorter neck', 'compact body'],
            habitat: ['arctic tundra', 'wetlands', 'coastal lagoons', 'lakes'],
            behavior: ['swimming', 'grazing', 'flocking', 'migratory']
        }
    },
    {
        id: 'black-swan',
        name_en: 'Black Swan',
        name_ru: 'Чёрный лебедь',
        latin_name: 'Cygnus atratus',
        family: 'Anatidae',
        family_ru: 'Утиные',
        category: 'european',
        description_en: 'Large black swan with red bill and white flight feathers. Introduced in some European areas.',
        description_ru: 'Крупный чёрный лебедь с красным клювом и белыми маховыми перьями. Интродуцирован в некоторых районах Европы.',
        characteristics: {
            size: 'large (110-142 cm)',
            wingspan: '160-200 cm',
            color: ['black', 'red', 'white'],
            features: ['red bill with white band', 'curled flight feathers', 'black plumage'],
            habitat: ['lakes', 'wetlands', 'parks', 'reservoirs'],
            behavior: ['swimming', 'grazing', 'pairs', 'resident']
        }
    },
    // Waterbirds - Gulls
    {
        id: 'black-headed-gull',
        name_en: 'Black-headed Gull',
        name_ru: 'Озёрная чайка',
        latin_name: 'Chroicocephalus ridibundus',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Small gull with dark brown hood in summer, white head in winter. Red bill and legs. Common inland.',
        description_ru: 'Маленькая чайка с тёмно-коричневой шапкой летом, белой головой зимой. Красные клюв и ноги. Обычна в глубине континента.',
        characteristics: {
            size: 'small (37-43 cm)',
            wingspan: '94-105 cm',
            color: ['white', 'grey', 'dark brown', 'red'],
            features: ['brown hood', 'red bill', 'red legs'],
            habitat: ['lakes', 'rivers', 'coasts', 'urban areas', 'fields'],
            behavior: ['scavenging', 'flocking', 'aerial hunting', 'migratory']
        }
    },
    {
        id: 'common-gull',
        name_en: 'Common Gull',
        name_ru: 'Сизая чайка',
        latin_name: 'Larus canus',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Medium gull with grey back and yellow legs. Greenish-yellow bill. Less aggressive than herring gull.',
        description_ru: 'Средняя чайка с серой спиной и жёлтыми ногами. Зеленовато-жёлтый клюв. Менее агрессивна, чем серебристая чайка.',
        characteristics: {
            size: 'medium (40-46 cm)',
            wingspan: '110-125 cm',
            color: ['white', 'grey', 'yellow', 'green'],
            features: ['grey back', 'yellow legs', 'greenish bill'],
            habitat: ['coasts', 'lakes', 'rivers', 'farmland', 'urban areas'],
            behavior: ['scavenging', 'ground nesting', 'flocking', 'migratory']
        }
    },
    {
        id: 'herring-gull',
        name_en: 'European Herring Gull',
        name_ru: 'Серебристая чайка',
        latin_name: 'Larus argentatus',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Large gull with grey back, pink legs, and yellow bill with red spot. Bold and opportunistic.',
        description_ru: 'Крупная чайка с серой спиной, розовыми ногами и жёлтым клювом с красным пятном. Смелая и оппортунистичная.',
        characteristics: {
            size: 'large (55-67 cm)',
            wingspan: '125-155 cm',
            color: ['white', 'grey', 'pink', 'yellow', 'red'],
            features: ['grey back', 'pink legs', 'red spot on bill'],
            habitat: ['coasts', 'lakes', 'urban areas', 'landfills', 'harbors'],
            behavior: ['scavenging', 'kleptoparasitism', 'colonial', 'resident']
        }
    },
    {
        id: 'lesser-black-backed-gull',
        name_en: 'Lesser Black-backed Gull',
        name_ru: 'Клуша',
        latin_name: 'Larus fuscus',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Large gull with dark grey-black back and yellow legs. Migratory, winters in Africa.',
        description_ru: 'Крупная чайка с тёмной серо-чёрной спиной и жёлтыми ногами. Перелётная, зимует в Африке.',
        characteristics: {
            size: 'large (52-67 cm)',
            wingspan: '126-155 cm',
            color: ['white', 'dark grey', 'black', 'yellow'],
            features: ['dark back', 'yellow legs', 'yellow bill'],
            habitat: ['coasts', 'lakes', 'rivers', 'urban areas', 'fields'],
            behavior: ['scavenging', 'migratory', 'flocking', 'colonial']
        }
    },
    {
        id: 'great-black-backed-gull',
        name_en: 'Great Black-backed Gull',
        name_ru: 'Морская чайка',
        latin_name: 'Larus marinus',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Largest gull with black back and pink legs. Powerful predator of other seabirds. Coastal species.',
        description_ru: 'Крупнейшая чайка с чёрной спиной и розовыми ногами. Мощный хищник других морских птиц. Прибрежный вид.',
        characteristics: {
            size: 'very large (64-79 cm)',
            wingspan: '150-175 cm',
            color: ['white', 'black', 'pink'],
            features: ['black back', 'massive bill', 'pink legs'],
            habitat: ['coasts', 'rocky shores', 'islands', 'harbors'],
            behavior: ['predation', 'scavenging', 'colonial', 'resident']
        }
    },
    {
        id: 'ivory-gull',
        name_en: 'Ivory Gull',
        name_ru: 'Белая чайка',
        latin_name: 'Pagophila eburnea',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Medium pure white gull with black-tipped wings. Arctic species, rare vagrant to northern Europe.',
        description_ru: 'Средняя чисто-белая чайка с чёрными кончиками крыльев. Арктический вид, редкий залётный на севере Европы.',
        characteristics: {
            size: 'medium (40-46 cm)',
            wingspan: '100-110 cm',
            color: ['white', 'black'],
            features: ['pure white plumage', 'black wing tips', 'blue-grey bill'],
            habitat: ['arctic ice', 'pack ice', 'coastal areas', 'glaciers'],
            behavior: ['scavenging', 'ice following', 'migratory', 'rare']
        }
    },
    {
        id: 'kittiwake',
        name_en: '',
        name_ru: 'Моевка',
        latin_name: 'Rissa tridactyla',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Medium gull with white body, grey wings, and black legs. Cliff nester in large colonies. Pelagic.',
        description_ru: 'Средняя чайка с белым телом, серыми крыльями и чёрными ногами. Гнездится на скалах большими колониями. Пелагическая.',
        characteristics: {
            size: 'medium (37-43 cm)',
            wingspan: '91-105 cm',
            color: ['white', 'grey', 'black'],
            features: ['black legs', 'yellow bill', 'rounded head'],
            habitat: ['open ocean', 'cliffs', 'coastal areas', 'islands'],
            behavior: ['pelagic', 'plunge diving', 'colonial', 'migratory']
        }
    },
    {
        id: 'little-gull',
        name_en: 'Little Gull',
        name_ru: 'Малая чайка',
        latin_name: 'Hydrocoloeus minutus',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Smallest gull with black hood in summer, white head in winter. Dark underwings. Graceful flight.',
        description_ru: 'Самая маленькая чайка с чёрной шапкой летом, белой головой зимой. Тёмные испод крыльев. Грациозный полёт.',
        characteristics: {
            size: 'tiny (24-28 cm)',
            wingspan: '61-68 cm',
            color: ['white', 'grey', 'black', 'pink'],
            features: ['black hood', 'small size', 'dark underwings'],
            habitat: ['lakes', 'wetlands', 'coasts', 'rivers'],
            behavior: ['insect hunting', 'flocking', 'graceful flight', 'migratory']
        }
    },
    {
        id: 'sabine-gull',
        name_en: "Sabine's Gull",
        name_ru: 'Вилохвостая чайка',
        latin_name: 'Xema sabini',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Small gull with forked tail, grey hood, and black wing tips with white spots. Arctic breeder.',
        description_ru: 'Маленькая чайка с вильчатым хвостом, серой шапкой и чёрными кончиками крыльев с белыми пятнами. Арктический гнездовик.',
        characteristics: {
            size: 'small (29-32 cm)',
            wingspan: '76-82 cm',
            color: ['white', 'grey', 'black', 'yellow'],
            features: ['forked tail', 'grey hood', 'white wing spots'],
            habitat: ['arctic tundra', 'coasts', 'open ocean', 'lakes'],
            behavior: ['aerial hunting', 'migratory', 'pelagic', 'colonial']
        }
    },
    {
        id: 'ross-gull',
        name_en: 'Ross\'s Gull',
        name_ru: 'Розовая чайка',
        latin_name: 'Rhodostethia rosea',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Small elegant gull with pink flush, black collar, and wedge tail. Rare Arctic species.',
        description_ru: 'Маленькая элегантная чайка с розовым оттенком, чёрным ошейником и клиновидным хвостом. Редкий арктический вид.',
        characteristics: {
            size: 'small (29-34 cm)',
            wingspan: '76-86 cm',
            color: ['white', 'pink', 'black', 'grey'],
            features: ['pink flush', 'black collar', 'wedge tail'],
            habitat: ['arctic seas', 'pack ice', 'tundra', 'coasts'],
            behavior: ['pelagic', 'migratory', 'rare', 'colonial']
        }
    },
    // Waterbirds - Terns
    {
        id: 'arctic-tern',
        name_en: 'Arctic Tern',
        name_ru: 'Полярная крачка',
        latin_name: 'Sterna paradisaea',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Medium tern with black cap, red bill, and long tail streamers. Longest migration of any bird.',
        description_ru: 'Средняя крачка с чёрной шапкой, красным клювом и длинными рулевыми перьями. Самая длинная миграция среди птиц.',
        characteristics: {
            size: 'medium (33-39 cm)',
            wingspan: '76-85 cm',
            color: ['white', 'grey', 'black', 'red'],
            features: ['black cap', 'red bill', 'long tail streamers'],
            habitat: ['coasts', 'islands', 'lakes', 'arctic tundra'],
            behavior: ['plunge diving', 'fish hunting', 'aggressive defense', 'migratory']
        }
    },
    {
        id: 'common-tern',
        name_en: 'Common Tern',
        name_ru: 'Речная крачка',
        latin_name: 'Sterna hirundo',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Medium tern with black cap, red-orange bill, and pink underparts. Graceful flight over water.',
        description_ru: 'Средняя крачка с чёрной шапкой, красно-оранжевым клювом и розовым низом. Грациозный полёт над водой.',
        characteristics: {
            size: 'medium (31-35 cm)',
            wingspan: '77-85 cm',
            color: ['white', 'grey', 'black', 'red-orange'],
            features: ['black cap', 'red-orange bill', 'pink wash'],
            habitat: ['coasts', 'lakes', 'rivers', 'islands'],
            behavior: ['plunge diving', 'fish hunting', 'colonial', 'migratory']
        }
    },
    {
        id: 'sandwich-tern',
        name_en: 'Sandwich Tern',
        name_ru: 'Пёстроногая крачка',
        latin_name: 'Thalasseus sandvicensis',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Large tern with shaggy crest, black bill with yellow tip, and short tail. Coastal species.',
        description_ru: 'Крупная крачка с лохматой хохолком, чёрным клювом с жёлтым кончиком и коротким хвостом. Прибрежный вид.',
        characteristics: {
            size: 'large (37-43 cm)',
            wingspan: '85-97 cm',
            color: ['white', 'grey', 'black', 'yellow'],
            features: ['shaggy crest', 'yellow-tipped bill', 'short tail'],
            habitat: ['coasts', 'sandbanks', 'islands', 'estuaries'],
            behavior: ['plunge diving', 'fish hunting', 'colonial', 'migratory']
        }
    },
    {
        id: 'little-tern',
        name_en: 'Little Tern',
        name_ru: 'Малая крачка',
        latin_name: 'Sternula albifrons',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Small tern with white forehead, yellow bill, and pale grey wings. Fast flight. Beach nester.',
        description_ru: 'Маленькая крачка с белым лбом, жёлтым клювом и бледно-серыми крыльями. Быстрый полёт. Гнездится на пляжах.',
        characteristics: {
            size: 'small (22-28 cm)',
            wingspan: '41-47 cm',
            color: ['white', 'grey', 'black', 'yellow'],
            features: ['white forehead', 'yellow bill', 'small size'],
            habitat: ['sandy beaches', 'coasts', 'river banks', 'islands'],
            behavior: ['plunge diving', 'insect hunting', 'ground nesting', 'migratory']
        }
    },
    {
        id: 'whiskered-tern',
        name_en: 'Whiskered Tern',
        name_ru: 'Белокрылая крачка',
        latin_name: 'Chlidonias hybrida',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Small dark tern with grey body, black cap, and white cheeks. Wetland specialist. Slow flight.',
        description_ru: 'Маленькая тёмная крачка с серым телом, чёрной шапкой и белыми щеками. Специалист водно-болотных угодий. Медленный полёт.',
        characteristics: {
            size: 'small (23-29 cm)',
            wingspan: '60-67 cm',
            color: ['grey', 'black', 'white', 'red'],
            features: ['grey body', 'black cap', 'white cheeks'],
            habitat: ['wetlands', 'marshes', 'lakes', 'rivers'],
            behavior: ['insect hunting', 'hovering', 'colonial', 'migratory']
        }
    },
    {
        id: 'black-tern',
        name_en: 'Black Tern',
        name_ru: 'Чёрная крачка',
        latin_name: 'Chlidonias niger',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Small tern with black body, grey wings, and white undertail. Wetland breeder. Insect hunter.',
        description_ru: 'Маленькая крачка с чёрным телом, серыми крыльями и белым подхвостьем. Гнездится на болотах. Охотник на насекомых.',
        characteristics: {
            size: 'small (22-26 cm)',
            wingspan: '54-60 cm',
            color: ['black', 'grey', 'white'],
            features: ['black body', 'grey wings', 'forked tail'],
            habitat: ['wetlands', 'marshes', 'lakes', 'rivers'],
            behavior: ['insect hunting', 'hovering', 'colonial', 'migratory']
        }
    },
    // Waterbirds - Waders
    {
        id: 'oystercatcher',
        name_en: 'Eurasian Oystercatcher',
        name_ru: 'Кулик-сорока',
        latin_name: 'Haematopus ostralegus',
        family: 'Haematopodidae',
        family_ru: 'Устричниковые',
        category: 'european',
        description_en: 'Large black and white wader with long orange-red bill and pink legs. Loud piping call.',
        description_ru: 'Крупный чёрно-белый кулик с длинным оранжево-красным клювом и розовыми ногами. Громкий свистящий крик.',
        characteristics: {
            size: 'large (40-45 cm)',
            wingspan: '72-83 cm',
            color: ['black', 'white', 'orange-red', 'pink'],
            features: ['long orange bill', 'black and white', 'pink legs'],
            habitat: ['coasts', 'estuaries', 'mudflats', 'beaches'],
            behavior: ['shellfish opening', 'probing', 'territorial', 'migratory']
        }
    },
    {
        id: 'lapwing',
        name_en: 'Northern Lapwing',
        name_ru: 'Чибис',
        latin_name: 'Vanellus vanellus',
        family: 'Charadriidae',
        family_ru: 'Ржанковые',
        category: 'european',
        description_en: 'Medium wader with iridescent green-black plumage, crest, and broad wings. Acrobatic display flight.',
        description_ru: 'Средний кулик с переливающимся чёрно-зелёным оперением, хохолком и широкими крыльями. Акробатический демонстрационный полёт.',
        characteristics: {
            size: 'medium (28-31 cm)',
            wingspan: '67-72 cm',
            color: ['iridescent green-black', 'white', 'brown'],
            features: ['crest', 'broad wings', 'white underparts'],
            habitat: ['wet meadows', 'farmland', 'marshes', 'pastures'],
            behavior: ['display flight', 'ground nesting', 'flocking', 'migratory']
        }
    },
    {
        id: 'golden-plover',
        name_en: 'European Golden Plover',
        name_ru: 'Золотистая ржанка',
        latin_name: 'Pluvialis apricaria',
        family: 'Charadriidae',
        family_ru: 'Ржанковые',
        category: 'european',
        description_en: 'Medium plover with golden-spangled back in breeding plumage. Black face and breast. Tundra breeder.',
        description_ru: 'Средняя ржанка с золотисто-пятнистой спиной в брачном наряде. Чёрное лицо и грудь. Гнездится в тундре.',
        characteristics: {
            size: 'medium (26-29 cm)',
            wingspan: '58-64 cm',
            color: ['golden-black', 'black', 'white'],
            features: ['golden spots', 'black underparts', 'white wing bar'],
            habitat: ['tundra', 'moorland', 'coastal areas', 'farmland'],
            behavior: ['ground nesting', 'flocking', 'whistling call', 'migratory']
        }
    },
    {
        id: 'grey-plover',
        name_en: 'Grey Plover',
        name_ru: 'Тулес',
        latin_name: 'Pluvialis squatarola',
        family: 'Charadriidae',
        family_ru: 'Ржанковые',
        category: 'european',
        description_en: 'Large plover with silvery-grey back and black underparts in breeding. White wing bar in flight.',
        description_ru: 'Крупная ржанка с серебристо-серой спиной и чёрным низом в брачном наряде. Белая полоса на крыле в полёте.',
        characteristics: {
            size: 'large (27-30 cm)',
            wingspan: '67-75 cm',
            color: ['silvery-grey', 'black', 'white'],
            features: ['silvery back', 'black axillaries', 'stout bill'],
            habitat: ['coasts', 'mudflats', 'estuaries', 'tundra'],
            behavior: ['probing', 'flocking', 'territorial', 'migratory']
        }
    },
    {
        id: 'ringed-plover',
        name_en: 'Common Ringed Plover',
        name_ru: 'Галстучник',
        latin_name: 'Charadrius hiaticula',
        family: 'Charadriidae',
        family_ru: 'Ржанковые',
        category: 'european',
        description_en: 'Small plover with brown back, white underparts, black breast band, and orange legs. Coastal breeder.',
        description_ru: 'Маленький кулик с коричневой спиной, белым низом, чёрной грудной полосой и оранжевыми ногами. Прибрежный гнездовик.',
        characteristics: {
            size: 'small (18-20 cm)',
            wingspan: '35-41 cm',
            color: ['brown', 'white', 'black', 'orange'],
            features: ['black breast band', 'orange legs', 'orange bill base'],
            habitat: ['beaches', 'mudflats', 'gravel pits', 'coasts'],
            behavior: ['run-stop peck', 'ground nesting', 'territorial', 'migratory']
        }
    },
    {
        id: 'little-ringed-plover',
        name_en: 'Little Ringed Plover',
        name_ru: 'Малый зуйок',
        latin_name: 'Charadrius dubius',
        family: 'Charadriidae',
        family_ru: 'Ржанковые',
        category: 'european',
        description_en: 'Tiny plover with brown back, white underparts, black breast band, and yellow legs. River breeder.',
        description_ru: 'Крошечный кулик с коричневой спиной, белым низом, чёрной грудной полосой и жёлтыми ногами. Речной гнездовик.',
        characteristics: {
            size: 'tiny (14-16 cm)',
            wingspan: '32-35 cm',
            color: ['brown', 'white', 'black', 'yellow'],
            features: ['black breast band', 'yellow legs', 'yellow eye-ring'],
            habitat: ['river banks', 'gravel beds', 'wetlands', 'lakeshores'],
            behavior: ['run-stop peck', 'ground nesting', 'territorial', 'migratory']
        }
    },
    {
        id: 'dotterel',
        name_en: 'Eurasian Dotterel',
        name_ru: 'Хрустан',
        latin_name: 'Charadrius morinellus',
        family: 'Charadriidae',
        family_ru: 'Ржанковые',
        category: 'european',
        description_en: 'Medium plover with chestnut breast band, white eyebrow, and grey-brown back. Mountain breeder.',
        description_ru: 'Средний кулик с каштановой грудной полосой, белой бровью и серо-коричневой спиной. Горный гнездовик.',
        characteristics: {
            size: 'medium (20-22 cm)',
            wingspan: '46-53 cm',
            color: ['grey-brown', 'chestnut', 'white', 'black'],
            features: ['chestnut breast', 'white eyebrow', 'plump body'],
            habitat: ['mountains', 'moorland', 'tundra', 'alpine meadows'],
            behavior: ['ground nesting', 'tame behavior', 'flocking', 'migratory']
        }
    },
    {
        id: 'snipe',
        name_en: 'Common Snipe',
        name_ru: 'Бекас',
        latin_name: 'Gallinago gallinago',
        family: 'Scolopacidae',
        family_ru: 'Бекасовые',
        category: 'european',
        description_en: 'Medium wader with long straight bill, camouflaged plumage, and drumming display flight.',
        description_ru: 'Средний кулик с длинным прямым клювом, камуфлированным оперением и барабанящим демонстрационным полётом.',
        characteristics: {
            size: 'medium (25-27 cm)',
            wingspan: '39-45 cm',
            color: ['streaked brown', 'black', 'buff'],
            features: ['long straight bill', 'camouflaged', 'striped head'],
            habitat: ['marshes', 'wet meadows', 'bogs', 'wetlands'],
            behavior: ['probing', 'drumming flight', 'cryptic', 'migratory']
        }
    },
    {
        id: 'woodcock',
        name_en: 'Eurasian Woodcock',
        name_ru: 'Вальдшнеп',
        latin_name: 'Scolopax rusticola',
        family: 'Scolopacidae',
        family_ru: 'Бекасовые',
        category: 'european',
        description_en: 'Large wader with very long bill, large eyes, and cryptic brown plumage. Crepuscular forest dweller.',
        description_ru: 'Крупный кулик с очень длинным клювом, большими глазами и камуфлированным коричневым оперением. Сумеречный лесной обитатель.',
        characteristics: {
            size: 'large (33-36 cm)',
            wingspan: '55-59 cm',
            color: ['streaked brown', 'black', 'buff'],
            features: ['very long bill', 'large eyes', 'barred tail'],
            habitat: ['deciduous forests', 'woodlands', 'wet thickets', 'damp areas'],
            behavior: ['probing', 'crepuscular', 'roding display', 'migratory']
        }
    },
    {
        id: 'godwit',
        name_en: 'Black-tailed Godwit',
        name_ru: 'Большой веретенник',
        latin_name: 'Limosa limosa',
        family: 'Scolopacidae',
        family_ru: 'Бекасовые',
        category: 'european',
        description_en: 'Large wader with very long bill, black tail band, and orange legs. Wetland breeder.',
        description_ru: 'Крупный кулик с очень длинным клювом, чёрной полосой на хвосте и оранжевыми ногами. Гнездится на болотах.',
        characteristics: {
            size: 'large (36-44 cm)',
            wingspan: '70-82 cm',
            color: ['orange', 'black', 'white', 'brown'],
            features: ['very long bill', 'black tail band', 'orange legs'],
            habitat: ['wet meadows', 'marshes', 'mudflats', 'estuaries'],
            behavior: ['probing', 'flocking', 'aerial display', 'migratory']
        }
    },
    {
        id: 'bar-tailed-godwit',
        name_en: 'Bar-tailed Godwit',
        name_ru: 'Малый веретенник',
        latin_name: 'Limosa lapponica',
        family: 'Scolopacidae',
        family_ru: 'Бекасовые',
        category: 'european',
        description_en: 'Large wader with long upturned bill and barred tail. Record-breaking long-distance migrant.',
        description_ru: 'Крупный кулик с длинным вздёрнутым клювом и поперечно-полосатым хвостом. Рекордный дальний мигрант.',
        characteristics: {
            size: 'large (37-41 cm)',
            wingspan: '70-80 cm',
            color: ['streaked brown', 'white', 'black'],
            features: ['upturned bill', 'barred tail', 'long legs'],
            habitat: ['coasts', 'mudflats', 'estuaries', 'tundra'],
            behavior: ['probing', 'flocking', 'long migration', 'migratory']
        }
    },
    {
        id: 'curlew',
        name_en: 'Eurasian Curlew',
        name_ru: 'Большой кроншнеп',
        latin_name: 'Numenius arquata',
        family: 'Scolopacidae',
        family_ru: 'Бекасовые',
        category: 'european',
        description_en: 'Largest wader with very long curved bill. Melancholic cur-lee call. Moorland and coastal breeder.',
        description_ru: 'Крупнейший кулик с очень длинным изогнутым клювом. Меланхоличный крик "крон-крон". Гнездится на болотах и побережьях.',
        characteristics: {
            size: 'very large (50-60 cm)',
            wingspan: '89-106 cm',
            color: ['streaked brown', 'buff', 'white'],
            features: ['very long curved bill', 'long legs', 'streaked plumage'],
            habitat: ['moorland', 'coasts', 'wet meadows', 'estuaries'],
            behavior: ['probing', 'melancholic call', 'ground nesting', 'migratory']
        }
    },
    {
        id: 'whimbrel',
        name_en: 'Whimbrel',
        name_ru: 'Средний кроншнеп',
        latin_name: 'Numenius phaeopus',
        family: 'Scolopacidae',
        family_ru: 'Бекасовые',
        category: 'european',
        description_en: 'Medium curlew with shorter curved bill and striped crown. Coastal and tundra species.',
        description_ru: 'Средний кроншнеп с более коротким изогнутым клювом и полосатой макушкой. Прибрежный и тундровый вид.',
        characteristics: {
            size: 'medium (40-46 cm)',
            wingspan: '84-94 cm',
            color: ['streaked brown', 'buff', 'white'],
            features: ['curved bill', 'striped crown', 'long legs'],
            habitat: ['tundra', 'coasts', 'moorland', 'estuaries'],
            behavior: ['probing', 'flocking', 'whistling call', 'migratory']
        }
    },
    {
        id: 'sandpiper',
        name_en: 'Common Sandpiper',
        name_ru: 'Перевозчик',
        latin_name: 'Actitis hypoleucos',
        family: 'Scolopacidae',
        family_ru: 'Бекасовые',
        category: 'european',
        description_en: 'Small wader with brown back, white underparts, and characteristic tail-bobbing. River specialist.',
        description_ru: 'Маленький кулик с коричневой спиной, белым низом и характерным покачиванием хвостом. Речной специалист.',
        characteristics: {
            size: 'small (18-20 cm)',
            wingspan: '32-35 cm',
            color: ['brown', 'white', 'olive'],
            features: ['tail bobbing', 'stiff wing beat', 'white wing bar'],
            habitat: ['rivers', 'streams', 'lakeshores', 'wetlands'],
            behavior: ['tail bobbing', 'territorial', 'low flight', 'migratory']
        }
    },
    {
        id: 'greenshank',
        name_en: 'Common Greenshank',
        name_ru: 'Большой улит',
        latin_name: 'Tringa nebularia',
        family: 'Scolopacidae',
        family_ru: 'Бекасовые',
        category: 'european',
        description_en: 'Large wader with upturned bill, green legs, and loud three-note call. Coastal and wetland species.',
        description_ru: 'Крупный кулик с вздёрнутым клювом, зелёными ногами и громким трёхнотным криком. Прибрежный и болотный вид.',
        characteristics: {
            size: 'large (30-35 cm)',
            wingspan: '51-57 cm',
            color: ['grey', 'white', 'green'],
            features: ['upturned bill', 'green legs', 'long neck'],
            habitat: ['coasts', 'wetlands', 'mudflats', 'estuaries'],
            behavior: ['probing', 'loud calling', 'wading', 'migratory']
        }
    },
    {
        id: 'redshank',
        name_en: 'Common Redshank',
        name_ru: 'Травник',
        latin_name: 'Tringa totanus',
        family: 'Scolopacidae',
        family_ru: 'Бекасовые',
        category: 'european',
        description_en: 'Medium wader with red legs, brown back, and loud tew-tew call. Wetland breeder.',
        description_ru: 'Средний кулик с красными ногами, коричневой спиной и громким криком "тью-тью". Гнездится на болотах.',
        characteristics: {
            size: 'medium (24-26 cm)',
            wingspan: '41-47 cm',
            color: ['brown', 'white', 'red'],
            features: ['red legs', 'orange bill base', 'white wing bar'],
            habitat: ['wet meadows', 'marshes', 'coasts', 'estuaries'],
            behavior: ['territorial', 'alarm calling', 'probing', 'migratory']
        }
    },
    {
        id: 'spotted-redshank',
        name_en: 'Spotted Redshank',
        name_ru: 'Черныш',
        latin_name: 'Tringa erythropus',
        family: 'Scolopacidae',
        family_ru: 'Бекасовые',
        category: 'european',
        description_en: 'Large wader with black breeding plumage and white spots. Red legs. Deep probing bill.',
        description_ru: 'Крупный кулик с чёрным брачным нарядом и белыми пятнами. Красные ноги. Глубоко зондирующий клюв.',
        characteristics: {
            size: 'large (29-32 cm)',
            wingspan: '47-54 cm',
            color: ['black', 'white', 'red'],
            features: ['black plumage', 'white spots', 'red legs'],
            habitat: ['wetlands', 'mudflats', 'coasts', 'tundra'],
            behavior: ['deep probing', 'wading', 'flocking', 'migratory']
        }
    },
    {
        id: 'dunlin',
        name_en: 'Dunlin',
        name_ru: 'Песочник',
        latin_name: 'Calidris alpina',
        family: 'Scolopacidae',
        family_ru: 'Бекасовые',
        category: 'european',
        description_en: 'Small wader with slightly downcurved bill, black belly in breeding. Most abundant shorebird.',
        description_ru: 'Маленький кулик с немного изогнутым вниз клювом, чёрным брюхом в брачном наряде. Самый многочисленный береговой кулик.',
        characteristics: {
            size: 'small (17-21 cm)',
            wingspan: '32-36 cm',
            color: ['streaked brown', 'black', 'white'],
            features: ['downcurved bill', 'black belly', 'long legs'],
            habitat: ['coasts', 'mudflats', 'tundra', 'wetlands'],
            behavior: ['probing', 'flocking', 'fast feeding', 'migratory']
        }
    },
    {
        id: 'knot',
        name_en: 'Red Knot',
        name_ru: 'Исландский песочник',
        latin_name: 'Calidris canutus',
        family: 'Scolopacidae',
        family_ru: 'Бекасовые',
        category: 'european',
        description_en: 'Medium wader with red breast in breeding, grey otherwise. Long-distance migrant to Arctic.',
        description_ru: 'Средний кулик с красной грудью в брачном наряде, серый в остальное время. Дальний мигрант в Арктику.',
        characteristics: {
            size: 'medium (23-26 cm)',
            wingspan: '47-53 cm',
            color: ['red', 'grey', 'white'],
            features: ['red breast', 'medium bill', 'stout body'],
            habitat: ['coasts', 'mudflats', 'estuaries', 'tundra'],
            behavior: ['probing', 'flocking', 'long migration', 'migratory']
        }
    },
    {
        id: 'sanderling',
        name_en: 'Sanderling',
        name_ru: 'Белохвостый песочник',
        latin_name: 'Calidris alba',
        family: 'Scolopacidae',
        family_ru: 'Бекасовые',
        category: 'european',
        description_en: 'Small pale wader with black legs. Runs along surf line. Arctic breeder, worldwide winter visitor.',
        description_ru: 'Маленький светлый кулик с чёрными ногами. Бегает вдоль линии прибоя. Арктический гнездовик, всемирный зимний гость.',
        characteristics: {
            size: 'small (18-21 cm)',
            wingspan: '35-38 cm',
            color: ['pale grey', 'white', 'black'],
            features: ['black legs', 'pale plumage', 'straight bill'],
            habitat: ['sandy beaches', 'coasts', 'mudflats', 'estuaries'],
            behavior: ['surf running', 'probing', 'flocking', 'migratory']
        }
    },
    {
        id: 'turnstone',
        name_en: 'Ruddy Turnstone',
        name_ru: 'Камнешарка',
        latin_name: 'Arenaria interpres',
        family: 'Scolopacidae',
        family_ru: 'Бекасовые',
        category: 'european',
        description_en: 'Stocky wader with black, white, and chestnut breeding plumage. Turns stones for food.',
        description_ru: 'Коренастый кулик с чёрным, белым и каштановым брачным нарядом. Переворачивает камни в поисках пищи.',
        characteristics: {
            size: 'medium (22-25 cm)',
            wingspan: '47-53 cm',
            color: ['black', 'white', 'chestnut', 'orange'],
            features: ['patterned plumage', 'short orange legs', 'wedge bill'],
            habitat: ['rocky coasts', 'beaches', 'harbors', 'breakwaters'],
            behavior: ['stone turning', 'probing', 'flocking', 'migratory']
        }
    },
    {
        id: 'phalarope',
        name_en: 'Red-necked Phalarope',
        name_ru: 'Красношейный плавунчик',
        latin_name: 'Phalaropus lobatus',
        family: 'Scolopacidae',
        family_ru: 'Бекасовые',
        category: 'european',
        description_en: 'Small wader that swims. Red neck in breeding, grey otherwise. Spins on water to feed.',
        description_ru: 'Маленький кулик, который плавает. Красная шея в брачном наряде, серый в остальное время. Кружится на воде для кормёжки.',
        characteristics: {
            size: 'small (17-19 cm)',
            wingspan: '30-33 cm',
            color: ['red', 'grey', 'white'],
            features: ['thin bill', 'lobed toes', 'swimming ability'],
            habitat: ['tundra ponds', 'lakes', 'wetlands', 'coasts'],
            behavior: ['swimming', 'spinning', 'surface feeding', 'migratory']
        }
    },
    {
        id: 'avocet',
        name_en: 'Pied Avocet',
        name_ru: 'Шилоклювка',
        latin_name: 'Recurvirostra avosetta',
        family: 'Recurvirostridae',
        family_ru: 'Шилоклювковые',
        category: 'european',
        description_en: 'Elegant black and white wader with long upturned bill. Sweeps bill side to side in water.',
        description_ru: 'Элегантный чёрно-белый кулик с длинным вздёрнутым клювом. Водит клювом из стороны в сторону в воде.',
        characteristics: {
            size: 'medium (42-45 cm)',
            wingspan: '67-77 cm',
            color: ['black', 'white', 'blue-grey'],
            features: ['upturned bill', 'long blue legs', 'black and white'],
            habitat: ['salt lagoons', 'wetlands', 'estuaries', 'saltpans'],
            behavior: ['sweeping bill', 'wading', 'colonial', 'migratory']
        }
    },
    {
        id: 'stilt',
        name_en: 'Black-winged Stilt',
        name_ru: 'Ходулочник',
        latin_name: 'Himantopus himantopus',
        family: 'Recurvirostridae',
        family_ru: 'Шилоклювковые',
        category: 'european',
        description_en: 'Elegant wader with extremely long pink legs, black wings, and white body. Graceful wader.',
        description_ru: 'Элегантный кулик с чрезвычайно длинными розовыми ногами, чёрными крыльями и белым телом. Грациозный кулик.',
        characteristics: {
            size: 'medium (33-36 cm)',
            wingspan: '65-72 cm',
            color: ['black', 'white', 'pink'],
            features: ['very long pink legs', 'straight black bill', 'slender body'],
            habitat: ['wetlands', 'saltpans', 'lagoons', 'rice fields'],
            behavior: ['wading', 'probing', 'colonial', 'migratory']
        }
    },
    // Birds of Prey - Eagles
    {
        id: 'white-tailed-eagle',
        name_en: 'White-tailed Eagle',
        name_ru: 'Орлан-белохвост',
        latin_name: 'Haliaeetus albicilla',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Massive eagle with brown body, pale head, and distinctive white tail. Huge wingspan. Fish and waterfowl hunter.',
        description_ru: 'Массивный орёл с коричневым телом, светлой головой и характерным белым хвостом. Огромный размах крыльев. Охотник на рыбу и водоплавающих.',
        characteristics: {
            size: 'very large (70-92 cm)',
            wingspan: '193-244 cm',
            color: ['brown', 'pale buff', 'white', 'yellow'],
            features: ['white tail', 'massive yellow bill', 'broad wings'],
            habitat: ['coasts', 'large lakes', 'rivers', 'wetlands'],
            behavior: ['soaring', 'fish hunting', 'scavenging', 'territorial']
        }
    },
    {
        id: 'lesser-spotted-eagle',
        name_en: 'Lesser Spotted Eagle',
        name_ru: 'Малый подорлик',
        latin_name: 'Clanga pomarina',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Medium dark eagle with pale wing patches. Eastern European breeder. Migrates to Africa.',
        description_ru: 'Средний тёмный орёл со светлыми пятнами на крыльях. Гнездится в Восточной Европе. Мигрирует в Африку.',
        characteristics: {
            size: 'medium (52-62 cm)',
            wingspan: '145-170 cm',
            color: ['dark brown', 'pale buff'],
            features: ['pale wing patches', 'dark plumage', 'yellow cere'],
            habitat: ['woodlands', 'wetlands', 'open country', 'farmland'],
            behavior: ['soaring', 'ground hunting', 'migratory', 'territorial']
        }
    },
    {
        id: 'greater-spotted-eagle',
        name_en: 'Greater Spotted Eagle',
        name_ru: 'Большой подорлик',
        latin_name: 'Clanga clanga',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Large dark eagle with white spots on wings. Rare and endangered. Eastern European species.',
        description_ru: 'Крупный тёмный орёл с белыми пятнами на крыльях. Редкий и исчезающий. Восточноевропейский вид.',
        characteristics: {
            size: 'large (59-69 cm)',
            wingspan: '157-185 cm',
            color: ['dark brown', 'black', 'white'],
            features: ['white wing spots', 'dark plumage', 'large size'],
            habitat: ['wetlands', 'floodplains', 'woodlands', 'open country'],
            behavior: ['soaring', 'ground hunting', 'migratory', 'endangered']
        }
    },
    {
        id: 'imperial-eagle',
        name_en: 'Eastern Imperial Eagle',
        name_ru: 'Орёл-могильник',
        latin_name: 'Aquila heliaca',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Large eagle with dark brown body, golden nape, and white shoulder patches. Rare European breeder.',
        description_ru: 'Крупный орёл с тёмно-коричневым телом, золотистым затылком и белыми пятнами на плечах. Редкий европейский гнездовик.',
        characteristics: {
            size: 'large (72-84 cm)',
            wingspan: '180-215 cm',
            color: ['dark brown', 'golden', 'white'],
            features: ['golden nape', 'white shoulder patches', 'pale crown'],
            habitat: ['open country', 'steppes', 'woodlands', 'plains'],
            behavior: ['soaring', 'ground hunting', 'migratory', 'territorial']
        }
    },
    {
        id: 'booted-eagle',
        name_en: 'Booted Eagle',
        name_ru: 'Орёл-карлик',
        latin_name: 'Hieraaetus pennatus',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Small eagle with feathered legs. Light and dark morphs. Soaring hunter of open country.',
        description_ru: 'Маленький орёл с оперёнными ногами. Светлая и тёмная морфы. Парящий охотник открытых мест.',
        characteristics: {
            size: 'medium (42-51 cm)',
            wingspan: '110-135 cm',
            color: ['dark brown', 'pale buff', 'white'],
            features: ['feathered legs', 'compact body', 'long wings'],
            habitat: ['open woodlands', 'scrubland', 'mountains', 'plains'],
            behavior: ['soaring', 'aerial hunting', 'migratory', 'territorial']
        }
    },
    {
        id: 'short-toed-eagle',
        name_en: 'Short-toed Snake Eagle',
        name_ru: 'Змееяд',
        latin_name: 'Circaetus gallicus',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Large pale eagle with round head and yellow eyes. Specialized snake hunter. Southern European breeder.',
        description_ru: 'Крупный светлый орёл с круглой головой и жёлтыми глазами. Специализированный охотник на змей. Южноевропейский гнездовик.',
        characteristics: {
            size: 'large (62-67 cm)',
            wingspan: '166-188 cm',
            color: ['pale brown', 'white', 'grey'],
            features: ['round head', 'yellow eyes', 'broad wings'],
            habitat: ['open woodlands', 'scrubland', 'hills', 'plains'],
            behavior: ['hovering', 'snake hunting', 'soaring', 'migratory']
        }
    },
    // Birds of Prey - Hawks
    {
        id: 'sparrowhawk',
        name_en: 'Eurasian Sparrowhawk',
        name_ru: 'Перепелятник',
        latin_name: 'Accipiter nisus',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Small hawk with grey male, brown female. Short rounded wings, long tail. Agile woodland hunter.',
        description_ru: 'Маленький ястреб с серым самцом, коричневой самкой. Короткие округлые крылья, длинный хвост. Ловкий лесной охотник.',
        characteristics: {
            size: 'small (29-38 cm)',
            wingspan: '59-64 cm',
            color: ['grey', 'brown', 'orange', 'black'],
            features: ['short wings', 'long tail', 'sharp talons'],
            habitat: ['woodlands', 'forests', 'gardens', 'parks'],
            behavior: ['ambush hunting', 'bird hunting', 'agile flight', 'territorial']
        }
    },
    {
        id: 'levantsparrowhawk',
        name_en: 'Levant Sparrowhawk',
        name_ru: 'Левантский перепелятник',
        latin_name: 'Accipiter brevipes',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Small hawk similar to sparrowhawk but paler. Southeastern European breeder. Bird hunter.',
        description_ru: 'Маленький ястреб, похожий на перепелятника, но светлее. Гнездится в Юго-Восточной Европе. Охотник на птиц.',
        characteristics: {
            size: 'small (30-36 cm)',
            wingspan: '63-75 cm',
            color: ['pale grey', 'brown', 'white'],
            features: ['pale plumage', 'long tail', 'slender build'],
            habitat: ['open woodlands', 'scrubland', 'forest edges', 'plains'],
            behavior: ['bird hunting', 'agile flight', 'migratory', 'territorial']
        }
    },
    {
        id: 'honey-buzzard',
        name_en: 'European Honey Buzzard',
        name_ru: 'Осоед',
        latin_name: 'Pernis apivorus',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Medium raptor with long neck and small head. Specialized in wasp and bee larvae. Migratory.',
        description_ru: 'Средний хищник с длинной шеей и маленькой головой. Специализируется на личинках ос и пчёл. Перелётный.',
        characteristics: {
            size: 'medium (52-60 cm)',
            wingspan: '135-150 cm',
            color: ['brown', 'grey', 'buff'],
            features: ['long neck', 'small head', 'long tail'],
            habitat: ['deciduous forests', 'woodlands', 'open country'],
            behavior: ['wasp hunting', 'ground digging', 'soaring', 'migratory']
        }
    },
    {
        id: 'marsh-harrier',
        name_en: 'Western Marsh Harrier',
        name_ru: 'Болотный лунь',
        latin_name: 'Circus aeruginosus',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Large harrier with brown body, creamy head in females. Low flight over wetlands. V-shaped wings.',
        description_ru: 'Крупный лунь с коричневым телом, кремовой головой у самок. Низкий полёт над болотами. V-образные крылья.',
        characteristics: {
            size: 'large (48-58 cm)',
            wingspan: '118-142 cm',
            color: ['brown', 'cream', 'black'],
            features: ['V-shaped wings', 'low flight', 'long tail'],
            habitat: ['wetlands', 'marshes', 'reed beds', 'lakes'],
            behavior: ['low hunting', 'ground hunting', 'soaring', 'migratory']
        }
    },
    {
        id: 'hen-harrier',
        name_en: 'Hen Harrier',
        name_ru: 'Полевой лунь',
        latin_name: 'Circus cyaneus',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Medium harrier with grey male, brown female. White rump patch. Low flight over open country.',
        description_ru: 'Средний лунь с серым самцом, коричневой самкой. Белое надхвостье. Низкий полёт над открытой местностью.',
        characteristics: {
            size: 'medium (41-52 cm)',
            wingspan: '97-118 cm',
            color: ['grey', 'brown', 'white', 'black'],
            features: ['white rump', 'V-shaped wings', 'owl-like face'],
            habitat: ['moorland', 'marshes', 'farmland', 'coastal areas'],
            behavior: ['low hunting', 'ground hunting', 'soaring', 'migratory']
        }
    },
    {
        id: 'pallid-harrier',
        name_en: 'Pallid Harrier',
        name_ru: 'Степной лунь',
        latin_name: 'Circus macrourus',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Medium harrier with pale grey male, pale brown female. Eastern European steppe breeder.',
        description_ru: 'Средний лунь со светло-серым самцом, светло-коричневой самкой. Гнездится в восточноевропейских степях.',
        characteristics: {
            size: 'medium (41-48 cm)',
            wingspan: '105-115 cm',
            color: ['pale grey', 'pale brown', 'white'],
            features: ['pale plumage', 'white rump', 'slender build'],
            habitat: ['steppes', 'grasslands', 'open plains', 'farmland'],
            behavior: ['low hunting', 'ground hunting', 'migratory', 'colonial']
        }
    },
    {
        id: 'montagu-harrier',
        name_en: "Montagu's Harrier",
        name_ru: 'Луговой лунь',
        latin_name: 'Circus pygargus',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Medium harrier with grey male with black wing tips, brown female. Grassland breeder.',
        description_ru: 'Средний лунь с серым самцом с чёрными кончиками крыльев, коричневой самкой. Гнездится на лугах.',
        characteristics: {
            size: 'medium (40-48 cm)',
            wingspan: '100-118 cm',
            color: ['grey', 'brown', 'black', 'white'],
            features: ['black wing tips', 'white rump', 'slender build'],
            habitat: ['grasslands', 'marshes', 'farmland', 'heathland'],
            behavior: ['low hunting', 'insect hunting', 'migratory', 'colonial']
        }
    },
    // Birds of Prey - Falcons
    {
        id: 'kestrel',
        name_en: 'Common Kestrel',
        name_ru: 'Пустельга',
        latin_name: 'Falco tinnunculus',
        family: 'Falconidae',
        family_ru: 'Соколиные',
        category: 'european',
        description_en: 'Small falcon with reddish-brown back and black spots. Famous hovering hunting flight.',
        description_ru: 'Маленький сокол с рыжевато-коричневой спиной и чёрными пятнами. Знаменитый парящий охотничий полёт.',
        characteristics: {
            size: 'small (32-36 cm)',
            wingspan: '65-82 cm',
            color: ['reddish-brown', 'black', 'buff', 'grey'],
            features: ['hovering flight', 'black spots', 'long tail'],
            habitat: ['farmland', 'grasslands', 'urban areas', 'open country'],
            behavior: ['hovering', 'rodent hunting', 'perching', 'territorial']
        }
    },
    {
        id: 'lesser-kestrel',
        name_en: 'Lesser Kestrel',
        name_ru: 'Степная пустельга',
        latin_name: 'Falco naumanni',
        family: 'Falconidae',
        family_ru: 'Соколиные',
        category: 'european',
        description_en: 'Small falcon similar to kestrel but paler, no black spots on back. Colonial nester. Southern Europe.',
        description_ru: 'Маленький сокол, похожий на пустельгу, но светлее, без чёрных пятен на спине. Колониально гнездится. Южная Европа.',
        characteristics: {
            size: 'small (29-33 cm)',
            wingspan: '63-72 cm',
            color: ['pale reddish', 'buff', 'grey'],
            features: ['pale plumage', 'no back spots', 'pale claws'],
            habitat: ['steppes', 'farmland', 'cliffs', 'villages'],
            behavior: ['hovering', 'insect hunting', 'colonial', 'migratory']
        }
    },
    {
        id: 'hobby',
        name_en: 'Eurasian Hobby',
        name_ru: 'Чеглок',
        latin_name: 'Falco subbuteo',
        family: 'Falconidae',
        family_ru: 'Соколиные',
        category: 'european',
        description_en: 'Medium falcon with dark back, streaked underparts, and red thighs. Fast aerial hunter of birds.',
        description_ru: 'Средний сокол с тёмной спиной, пёстрым низом и красными бёдрами. Быстрый воздушный охотник на птиц.',
        characteristics: {
            size: 'medium (28-36 cm)',
            wingspan: '69-84 cm',
            color: ['dark grey', 'streaked white', 'red'],
            features: ['red thighs', 'dark moustache', 'pointed wings'],
            habitat: ['open woodlands', 'farmland', 'wetlands', 'edges'],
            behavior: ['aerial hunting', 'bird hunting', 'fast flight', 'migratory']
        }
    },
    {
        id: 'eleonoras-falcon',
        name_en: "Eleonora's Falcon",
        name_ru: 'Средиземноморский сокол',
        latin_name: 'Falco eleonorae',
        family: 'Falconidae',
        family_ru: 'Соколиные',
        category: 'european',
        description_en: 'Medium dark falcon with long wings and tail. Late breeder on Mediterranean islands. Bird hunter.',
        description_ru: 'Средний тёмный сокол с длинными крыльями и хвостом. Позднее гнездование на средиземноморских островах. Охотник на птиц.',
        characteristics: {
            size: 'medium (36-42 cm)',
            wingspan: '87-104 cm',
            color: ['dark grey', 'black', 'rufous'],
            features: ['long wings', 'long tail', 'dark morph'],
            habitat: ['coastal cliffs', 'islands', 'Mediterranean', 'rocky shores'],
            behavior: ['aerial hunting', 'migratory hunting', 'colonial', 'migratory']
        }
    },
    {
        id: 'red-footed-falcon',
        name_en: 'Red-footed Falcon',
        name_ru: 'Кобчик',
        latin_name: 'Falco vespertinus',
        family: 'Falconidae',
        family_ru: 'Соколиные',
        category: 'european',
        description_en: 'Small falcon with grey male, rufous female, and distinctive red legs and cere. Insect hunter.',
        description_ru: 'Маленький сокол с серым самцом, рыжей самкой и характерными красными ногами и восковицей. Охотник на насекомых.',
        characteristics: {
            size: 'small (28-33 cm)',
            wingspan: '65-75 cm',
            color: ['grey', 'rufous', 'red', 'white'],
            features: ['red legs', 'red cere', 'white undertail'],
            habitat: ['steppes', 'farmland', 'grasslands', 'open country'],
            behavior: ['insect hunting', 'flocking', 'migratory', 'colonial']
        }
    },
    {
        id: 'merlin',
        name_en: 'Eurasian Merlin',
        name_ru: 'Дербник',
        latin_name: 'Falco columbarius',
        family: 'Falconidae',
        family_ru: 'Соколиные',
        category: 'european',
        description_en: 'Tiny falcon with blue-grey male, brown female. Fast low flight. Hunter of small birds.',
        description_ru: 'Крошечный сокол с сизо-серым самцом, коричневой самкой. Быстрый низкий полёт. Охотник на мелких птиц.',
        characteristics: {
            size: 'tiny (24-32 cm)',
            wingspan: '55-69 cm',
            color: ['blue-grey', 'brown', 'streaked buff'],
            features: ['small size', 'stocky build', 'dark tail band'],
            habitat: ['moorland', 'coasts', 'open country', 'tundra'],
            behavior: ['low hunting', 'bird hunting', 'fast flight', 'migratory']
        }
    },
    {
        id: 'gyrfalcon',
        name_en: 'Gyrfalcon',
        name_ru: 'Кречет',
        latin_name: 'Falco rusticolus',
        family: 'Falconidae',
        family_ru: 'Соколиные',
        category: 'european',
        description_en: 'Largest falcon with white, grey, and dark morphs. Arctic species. Powerful bird hunter.',
        description_ru: 'Крупнейший сокол с белой, серой и тёмной морфами. Арктический вид. Мощный охотник на птиц.',
        characteristics: {
            size: 'large (48-65 cm)',
            wingspan: '109-135 cm',
            color: ['white', 'grey', 'dark brown'],
            features: ['large size', 'broad wings', 'heavy build'],
            habitat: ['arctic tundra', 'cliffs', 'coasts', 'mountains'],
            behavior: ['aerial hunting', 'powerful flight', 'resident', 'territorial']
        }
    },
    {
        id: 'peregrine',
        name_en: 'Peregrine Falcon',
        name_ru: 'Сапсан',
        latin_name: 'Falco peregrinus',
        family: 'Falconidae',
        family_ru: 'Соколиные',
        category: 'european',
        description_en: 'Large falcon with blue-grey back, barred underparts, and black moustache. Fastest animal in dive.',
        description_ru: 'Крупный сокол с сизо-серой спиной, пёстрым низом и чёрными усами. Самое быстрое животное в пикировании.',
        characteristics: {
            size: 'large (38-50 cm)',
            wingspan: '89-120 cm',
            color: ['blue-grey', 'barred white', 'black'],
            features: ['black moustache', 'pointed wings', 'notched tail'],
            habitat: ['cliffs', 'urban areas', 'coasts', 'open country'],
            behavior: ['stoop diving', 'bird hunting', 'fastest flight', 'territorial']
        }
    },
    // Birds of Prey - Owls
    {
        id: 'tawny-owl',
        name_en: 'Tawny Owl',
        name_ru: 'Неясыть',
        latin_name: 'Strix aluco',
        family: 'Strigidae',
        family_ru: 'Совиные',
        category: 'european',
        description_en: 'Medium owl with round head, dark eyes, and grey or rufous morphs. Hoot-hoot call. Woodland dweller.',
        description_ru: 'Средняя сова с круглой головой, тёмными глазами и серой или рыжей морфами. Крик "гу-гу". Лесной обитатель.',
        characteristics: {
            size: 'medium (37-43 cm)',
            wingspan: '81-105 cm',
            color: ['grey', 'rufous', 'brown', 'white'],
            features: ['round head', 'dark eyes', 'no ear tufts'],
            habitat: ['deciduous forests', 'woodlands', 'parks', 'gardens'],
            behavior: ['nocturnal', 'silent flight', 'hoot calling', 'territorial']
        }
    },
    {
        id: 'long-eared-owl',
        name_en: 'Long-eared Owl',
        name_ru: 'Ушастая сова',
        latin_name: 'Asio otus',
        family: 'Strigidae',
        family_ru: 'Совиные',
        category: 'european',
        description_en: 'Medium owl with prominent ear tufts, orange eyes, and streaked plumage. Roosts in dense trees.',
        description_ru: 'Средняя сова с заметными ушными пучками, оранжевыми глазами и пёстрым оперением. Днюёт в густых деревьях.',
        characteristics: {
            size: 'medium (35-40 cm)',
            wingspan: '86-100 cm',
            color: ['streaked brown', 'orange', 'black'],
            features: ['ear tufts', 'orange eyes', 'slender build'],
            habitat: ['coniferous forests', 'woodlands', 'parks', 'hedgerows'],
            behavior: ['nocturnal', 'silent flight', 'rodent hunting', 'colonial roosting']
        }
    },
    {
        id: 'short-eared-owl',
        name_en: 'Short-eared Owl',
        name_ru: 'Болотная сова',
        latin_name: 'Asio flammeus',
        family: 'Strigidae',
        family_ru: 'Совиные',
        category: 'european',
        description_en: 'Medium owl with small ear tufts, yellow eyes, and pale face. Diurnal hunter of open country.',
        description_ru: 'Средняя сова с маленькими ушными пучками, жёлтыми глазами и бледным лицом. Дневной охотник открытых мест.',
        characteristics: {
            size: 'medium (34-43 cm)',
            wingspan: '85-103 cm',
            color: ['streaked brown', 'buff', 'yellow'],
            features: ['small ear tufts', 'yellow eyes', 'pale face'],
            habitat: ['moorland', 'grasslands', 'marshes', 'coastal areas'],
            behavior: ['diurnal', 'low flight', 'rodent hunting', 'migratory']
        }
    },
    {
        id: 'scops-owl',
        name_en: 'Eurasian Scops Owl',
        name_ru: 'Сплюшка',
        latin_name: 'Otus scops',
        family: 'Strigidae',
        family_ru: 'Совиные',
        category: 'european',
        description_en: 'Small owl with ear tufts, yellow eyes, and cryptic grey or rufous plumage. Monotone hooting call.',
        description_ru: 'Маленькая сова с ушными пучками, жёлтыми глазами и камуфлированным серым или рыжим оперением. Монотонный хукающий крик.',
        characteristics: {
            size: 'small (19-21 cm)',
            wingspan: '47-54 cm',
            color: ['grey', 'rufous', 'brown', 'black'],
            features: ['ear tufts', 'yellow eyes', 'small size'],
            habitat: ['open woodlands', 'orchards', 'parks', 'villages'],
            behavior: ['nocturnal', 'insect hunting', 'cavity nesting', 'migratory']
        }
    },
    {
        id: 'snowy-owl',
        name_en: 'Snowy Owl',
        name_ru: 'Белая сова',
        latin_name: 'Bubo scandiacus',
        family: 'Strigidae',
        family_ru: 'Совиные',
        category: 'european',
        description_en: 'Large white owl with yellow eyes and black barring in females. Arctic species, rare winter visitor.',
        description_ru: 'Крупная белая сова с жёлтыми глазами и чёрными полосами у самок. Арктический вид, редкий зимний гость.',
        characteristics: {
            size: 'large (52-71 cm)',
            wingspan: '125-150 cm',
            color: ['white', 'black', 'yellow'],
            features: ['white plumage', 'yellow eyes', 'large size'],
            habitat: ['arctic tundra', 'open plains', 'coastal areas', 'fields'],
            behavior: ['diurnal', 'ground hunting', 'irruptive', 'migratory']
        }
    },
    {
        id: 'eagle-owl',
        name_en: 'Eurasian Eagle-Owl',
        name_ru: 'Филин',
        latin_name: 'Bubo bubo',
        family: 'Strigidae',
        family_ru: 'Совиные',
        category: 'european',
        description_en: 'Largest owl with prominent ear tufts, orange eyes, and deep hooting call. Powerful predator.',
        description_ru: 'Крупнейшая сова с заметными ушными пучками, оранжевыми глазами и глубоким уханьем. Мощный хищник.',
        characteristics: {
            size: 'very large (60-75 cm)',
            wingspan: '138-200 cm',
            color: ['brown', 'black', 'buff', 'orange'],
            features: ['ear tufts', 'orange eyes', 'large size'],
            habitat: ['mountains', 'rocky areas', 'forests', 'cliffs'],
            behavior: ['nocturnal', 'powerful hunting', 'deep hooting', 'territorial']
        }
    },
    {
        id: 'pygmy-owl',
        name_en: 'Eurasian Pygmy Owl',
        name_ru: 'Воробьиный сыч',
        latin_name: 'Glaucidium passerinum',
        family: 'Strigidae',
        family_ru: 'Совиные',
        category: 'european',
        description_en: 'Tiny owl with yellow eyes, no ear tufts, and white spots on head. Diurnal hunter of small birds.',
        description_ru: 'Крошечная сова с жёлтыми глазами, без ушных пучков, с белыми пятнами на голове. Дневной охотник на мелких птиц.',
        characteristics: {
            size: 'tiny (15-19 cm)',
            wingspan: '32-37 cm',
            color: ['brown', 'white', 'yellow'],
            features: ['small size', 'yellow eyes', 'white crown spots'],
            habitat: ['coniferous forests', 'mountain woods', 'taiga'],
            behavior: ['diurnal', 'bird hunting', 'whistling call', 'territorial']
        }
    },
    {
        id: 'little-owl',
        name_en: 'Little Owl',
        name_ru: 'Домовый сыч',
        latin_name: 'Athene noctua',
        family: 'Strigidae',
        family_ru: 'Совиные',
        category: 'european',
        description_en: 'Small owl with flat head, yellow eyes, and white eyebrows. Perches prominently. Agricultural dweller.',
        description_ru: 'Маленькая сова с плоской головой, жёлтыми глазами и белыми бровями. Заметно сидит на возвышениях. Обитатель сельхозугодий.',
        characteristics: {
            size: 'small (21-23 cm)',
            wingspan: '50-58 cm',
            color: ['brown', 'white', 'yellow', 'buff'],
            features: ['flat head', 'yellow eyes', 'white eyebrows'],
            habitat: ['farmland', 'orchards', 'villages', 'open country'],
            behavior: ['diurnal', 'perching', 'insect hunting', 'resident']
        }
    },
    // Birds of Prey - Vultures
    {
        id: 'griffon-vulture',
        name_en: 'Griffon Vulture',
        name_ru: 'Стервятник',
        latin_name: 'Gyps fulvus',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Large vulture with pale brown body, white neck ruff, and bald head. Soaring scavenger of mountains.',
        description_ru: 'Крупный стервятник с бледно-коричневым телом, белым воротником и голой головой. Парящий падальщик гор.',
        characteristics: {
            size: 'very large (93-122 cm)',
            wingspan: '230-280 cm',
            color: ['pale brown', 'white', 'yellow'],
            features: ['bald head', 'white ruff', 'broad wings'],
            habitat: ['mountains', 'cliffs', 'open country', 'plateaus'],
            behavior: ['soaring', 'scavenging', 'colonial', 'resident']
        }
    },
    {
        id: 'cinereous-vulture',
        name_en: 'Cinereous Vulture',
        name_ru: 'Чёрный гриф',
        latin_name: 'Aegypius monachus',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Largest vulture with dark brown plumage, bald head, and massive bill. Rare European breeder.',
        description_ru: 'Крупнейший стервятник с тёмно-коричневым оперением, голой головой и массивным клювом. Редкий европейский гнездовик.',
        characteristics: {
            size: 'very large (98-120 cm)',
            wingspan: '250-310 cm',
            color: ['dark brown', 'black', 'grey'],
            features: ['bald head', 'massive bill', 'dark plumage'],
            habitat: ['mountains', 'open woodlands', 'plains', 'cliffs'],
            behavior: ['soaring', 'scavenging', 'resident', 'territorial']
        }
    },
    {
        id: 'egyptian-vulture',
        name_en: 'Egyptian Vulture',
        name_ru: 'Сипуха',
        latin_name: 'Neophron percnopterus',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Medium vulture with white plumage, black flight feathers, and yellow face. Tool user. Southern Europe.',
        description_ru: 'Средний стервятник с белым оперением, чёрными маховыми перьями и жёлтым лицом. Использует инструменты. Южная Европа.',
        characteristics: {
            size: 'medium (55-65 cm)',
            wingspan: '155-170 cm',
            color: ['white', 'black', 'yellow'],
            features: ['yellow face', 'pointed bill', 'wedge tail'],
            habitat: ['cliffs', 'open country', 'scrubland', 'mountains'],
            behavior: ['soaring', 'scavenging', 'tool use', 'migratory']
        }
    },
    {
        id: 'bearded-vulture',
        name_en: 'Bearded Vulture',
        name_ru: 'Бородач',
        latin_name: 'Gypaetus barbatus',
        family: 'Accipitridae',
        family_ru: 'Ястребиные',
        category: 'european',
        description_en: 'Large vulture with diamond tail, black eye stripe, and orange-tinged plumage. Bone specialist.',
        description_ru: 'Крупный стервятник с ромбовидным хвостом, чёрной полосой у глаза и оперением с оранжевым оттенком. Специалист по костям.',
        characteristics: {
            size: 'very large (94-125 cm)',
            wingspan: '231-283 cm',
            color: ['grey', 'black', 'orange', 'white'],
            features: ['diamond tail', 'black eye stripe', 'bristle beard'],
            habitat: ['high mountains', 'cliffs', 'alpine areas', 'rocky terrain'],
            behavior: ['bone dropping', 'soaring', 'resident', 'territorial']
        }
    },
    // Woodpeckers
    {
        id: 'black-woodpecker',
        name_en: 'Black Woodpecker',
        name_ru: 'Желна',
        latin_name: 'Dryocopus martius',
        family: 'Picidae',
        family_ru: 'Дятловые',
        category: 'european',
        description_en: 'Largest woodpecker with all-black plumage and red crown. Loud laughing call. Old-growth forest specialist.',
        description_ru: 'Крупнейший дятел с полностью чёрным оперением и красной макушкой. Громкий смеющийся крик. Специалист старовозрастных лесов.',
        characteristics: {
            size: 'large (40-50 cm)',
            wingspan: '64-74 cm',
            color: ['black', 'red'],
            features: ['all black', 'red crown', 'large size'],
            habitat: ['old-growth forests', 'coniferous forests', 'mountain woods'],
            behavior: ['drumming', 'excavating', 'loud calling', 'territorial']
        }
    },
    {
        id: 'green-woodpecker',
        name_en: 'European Green Woodpecker',
        name_ru: 'Зелёный дятел',
        latin_name: 'Picus viridis',
        family: 'Picidae',
        family_ru: 'Дятловые',
        category: 'european',
        description_en: 'Large woodpecker with green back, yellow rump, and red crown. Ground feeder on ants.',
        description_ru: 'Крупный дятел с зелёной спиной, жёлтым надхвостьем и красной макушкой. Кормится на земле муравьями.',
        characteristics: {
            size: 'large (30-36 cm)',
            wingspan: '45-51 cm',
            color: ['green', 'yellow', 'red', 'black'],
            features: ['green back', 'yellow rump', 'red crown'],
            habitat: ['open woodlands', 'orchards', 'pastures', 'parklands'],
            behavior: ['ground feeding', 'ant eating', 'loud calling', 'territorial']
        }
    },
    {
        id: 'grey-headed-woodpecker',
        name_en: 'Grey-headed Woodpecker',
        name_ru: 'Седой дятел',
        latin_name: 'Picus canus',
        family: 'Picidae',
        family_ru: 'Дятловые',
        category: 'european',
        description_en: 'Medium woodpecker with grey head, green back, and red forehead in males. Quiet species.',
        description_ru: 'Средний дятел с серой головой, зелёной спиной и красным лбом у самцов. Тихий вид.',
        characteristics: {
            size: 'medium (27-32 cm)',
            wingspan: '42-48 cm',
            color: ['grey', 'green', 'red', 'black'],
            features: ['grey head', 'green back', 'red forehead'],
            habitat: ['deciduous forests', 'alder woods', 'riparian forests'],
            behavior: ['ant eating', 'quiet', 'tree foraging', 'territorial']
        }
    },
    {
        id: 'wryneck',
        name_en: 'Eurasian Wryneck',
        name_ru: 'Вертишейка',
        latin_name: 'Jynx torquilla',
        family: 'Picidae',
        family_ru: 'Дятловые',
        category: 'european',
        description_en: 'Unusual woodpecker with cryptic plumage and snake-like neck twisting. No drumming. Insect hunter.',
        description_ru: 'Необычный дятел с камуфлированным оперением и змееподобным скручиванием шеи. Не барабанит. Охотник на насекомых.',
        characteristics: {
            size: 'medium (16-17 cm)',
            wingspan: '25-27 cm',
            color: ['streaked brown', 'buff', 'black'],
            features: ['cryptic plumage', 'long tail', 'small bill'],
            habitat: ['open woodlands', 'orchards', 'parks', 'forest edges'],
            behavior: ['neck twisting', 'ant eating', 'cavity nesting', 'migratory']
        }
    },
    {
        id: 'three-toed-woodpecker',
        name_en: 'Three-toed Woodpecker',
        name_ru: 'Трёхпалый дятел',
        latin_name: 'Picoides tridactylus',
        family: 'Picidae',
        family_ru: 'Дятловые',
        category: 'european',
        description_en: 'Medium woodpecker with black and white plumage, yellow crown in males. Only three toes. Coniferous specialist.',
        description_ru: 'Средний дятел с чёрно-белым оперением, жёлтой макушкой у самцов. Только три пальца. Специалист хвойных лесов.',
        characteristics: {
            size: 'medium (21-24 cm)',
            wingspan: '33-37 cm',
            color: ['black', 'white', 'yellow'],
            features: ['three toes', 'yellow crown', 'ladder back'],
            habitat: ['coniferous forests', 'mountain woods', 'burnt forests'],
            behavior: ['drumming', 'insect hunting', 'cavity nesting', 'resident']
        }
    },
    {
        id: 'white-backed-woodpecker',
        name_en: 'White-backed Woodpecker',
        name_ru: 'Белоспинный дятел',
        latin_name: 'Dendrocopos leucotos',
        family: 'Picidae',
        family_ru: 'Дятловые',
        category: 'european',
        description_en: 'Large woodpecker with black and white plumage and white back. Rare old-growth forest species.',
        description_ru: 'Крупный дятел с чёрно-белым оперением и белой спиной. Редкий вид старовозрастных лесов.',
        characteristics: {
            size: 'large (25-28 cm)',
            wingspan: '38-42 cm',
            color: ['black', 'white', 'red'],
            features: ['white back', 'red undertail', 'large size'],
            habitat: ['old-growth forests', 'deciduous woods', 'dead wood areas'],
            behavior: ['drumming', 'insect hunting', 'cavity nesting', 'territorial']
        }
    },
    {
        id: 'middle-spotted-woodpecker',
        name_en: 'Middle Spotted Woodpecker',
        name_ru: 'Белоспинный дятел',
        latin_name: 'Dendrocoptes medius',
        family: 'Picidae',
        family_ru: 'Дятловые',
        category: 'european',
        description_en: 'Medium woodpecker with grey-brown back, red crown, and no white shoulder patch. Oak specialist.',
        description_ru: 'Средний дятел с серо-коричневой спиной, красной макушкой и без белого пятна на плече. Специалист по дубам.',
        characteristics: {
            size: 'medium (20-22 cm)',
            wingspan: '31-34 cm',
            color: ['grey-brown', 'red', 'black', 'white'],
            features: ['red crown', 'grey-brown back', 'pale eyes'],
            habitat: ['oak forests', 'deciduous woodlands', 'mature woods'],
            behavior: ['drumming', 'insect hunting', 'cavity nesting', 'territorial']
        }
    },
    {
        id: 'lesser-spotted-woodpecker',
        name_en: 'Lesser Spotted Woodpecker',
        name_ru: 'Малый пёстрый дятел',
        latin_name: 'Dryobates minor',
        family: 'Picidae',
        family_ru: 'Дятловые',
        category: 'european',
        description_en: 'Smallest woodpecker with black and white plumage and red crown in males. High-pitched call.',
        description_ru: 'Самый маленький дятел с чёрно-белым оперением и красной макушкой у самцов. Высокий крик.',
        characteristics: {
            size: 'small (14-16 cm)',
            wingspan: '25-29 cm',
            color: ['black', 'white', 'red'],
            features: ['small size', 'red crown', 'barred wings'],
            habitat: ['deciduous forests', 'woodlands', 'parks', 'orchards'],
            behavior: ['drumming', 'insect hunting', 'cavity nesting', 'territorial']
        }
    },
    {
        id: 'syrian-woodpecker',
        name_en: 'Syrian Woodpecker',
        name_ru: 'Белоспинный дятел',
        latin_name: 'Dendrocopos syriacus',
        family: 'Picidae',
        family_ru: 'Дятловые',
        category: 'european',
        description_en: 'Medium woodpecker similar to great spotted but with plain brown back. Expanding range in Europe.',
        description_ru: 'Средний дятел, похожий на большого пёстрого, но с однотонной коричневой спиной. Расширяет ареал в Европе.',
        characteristics: {
            size: 'medium (21-25 cm)',
            wingspan: '34-39 cm',
            color: ['brown', 'black', 'white', 'red'],
            features: ['brown back', 'red undertail', 'white shoulder'],
            habitat: ['open woodlands', 'orchards', 'parks', 'scrubland'],
            behavior: ['drumming', 'insect hunting', 'cavity nesting', 'territorial']
        }
    },
    // Kingfishers and Bee-eaters
    {
        id: 'white-throated-kingfisher',
        name_en: 'White-throated Kingfisher',
        name_ru: 'Белогрудый зимородок',
        latin_name: 'Halcyon smyrnensis',
        family: 'Alcedinidae',
        family_ru: 'Зимородковые',
        category: 'european',
        description_en: 'Large kingfisher with blue back, white throat, and red bill. Expanding into southeastern Europe.',
        description_ru: 'Крупный зимородок с синей спиной, белым горлом и красным клювом. Расширяет ареал в Юго-Восточной Европе.',
        characteristics: {
            size: 'large (27-30 cm)',
            wingspan: '38-42 cm',
            color: ['blue', 'white', 'brown', 'red'],
            features: ['white throat', 'red bill', 'blue back'],
            habitat: ['wetlands', 'rivers', 'lakes', 'coastal areas'],
            behavior: ['perch hunting', 'fish hunting', 'loud calls', 'resident']
        }
    },
    {
        id: 'belted-kingfisher',
        name_en: 'Belted Kingfisher',
        name_ru: 'Поясной зимородок',
        latin_name: 'Megaceryle alcyon',
        family: 'Alcedinidae',
        family_ru: 'Зимородковые',
        category: 'european',
        description_en: 'Large kingfisher with shaggy crest, blue-grey back, and white collar. Rare vagrant to Europe.',
        description_ru: 'Крупный зимородок с лохматым хохолком, сизо-серой спиной и белым воротником. Редкий залётный в Европе.',
        characteristics: {
            size: 'large (28-35 cm)',
            wingspan: '48-53 cm',
            color: ['blue-grey', 'white', 'rufous'],
            features: ['shaggy crest', 'white collar', 'belted breast'],
            habitat: ['rivers', 'lakes', 'coasts', 'wetlands'],
            behavior: ['perch hunting', 'plunge diving', 'rattling call', 'vagrant']
        }
    },
    {
        id: 'bee-eater',
        name_en: 'European Bee-eater',
        name_ru: 'Золотистая щурка',
        latin_name: 'Merops apiaster',
        family: 'Meropidae',
        family_ru: 'Щурковые',
        category: 'european',
        description_en: 'Colorful bird with chestnut back, yellow throat, green breast, and black eye stripe. Colonial nester.',
        description_ru: 'Красочная птица с каштановой спиной, жёлтым горлом, зелёной грудью и чёрной полосой у глаза. Колониально гнездится.',
        characteristics: {
            size: 'medium (27-29 cm)',
            wingspan: '40-45 cm',
            color: ['chestnut', 'yellow', 'green', 'blue', 'black'],
            features: ['colorful plumage', 'long tail', 'curved bill'],
            habitat: ['open country', 'river banks', 'sandy slopes', 'farmland'],
            behavior: ['aerial hunting', 'bee eating', 'colonial', 'migratory']
        }
    },
    {
        id: 'blue-cheeked-bee-eater',
        name_en: 'Blue-cheeked Bee-eater',
        name_ru: 'Синегрудая щурка',
        latin_name: 'Merops persicus',
        family: 'Meropidae',
        family_ru: 'Щурковые',
        category: 'european',
        description_en: 'Large bee-eater with green body, blue throat, and black eye stripe. Rare visitor to southeastern Europe.',
        description_ru: 'Крупная щурка с зелёным телом, синим горлом и чёрной полосой у глаза. Редкий гость Юго-Восточной Европы.',
        characteristics: {
            size: 'large (28-32 cm)',
            wingspan: '42-48 cm',
            color: ['green', 'blue', 'yellow', 'black'],
            features: ['blue throat', 'green body', 'long tail'],
            habitat: ['open country', 'desert edges', 'river valleys'],
            behavior: ['aerial hunting', 'insect eating', 'colonial', 'migratory']
        }
    },
    {
        id: 'roller',
        name_en: 'European Roller',
        name_ru: 'Сизоворонка',
        latin_name: 'Coracias garrulus',
        family: 'Coraciidae',
        family_ru: 'Сизоворонковые',
        category: 'european',
        description_en: 'Colorful bird with blue head, brown back, and blue-green wings. Acrobatic display flight.',
        description_ru: 'Красочная птица с синей головой, коричневой спиной и сине-зелёными крыльями. Акробатический демонстрационный полёт.',
        characteristics: {
            size: 'medium (29-32 cm)',
            wingspan: '52-58 cm',
            color: ['blue', 'brown', 'green', 'purple'],
            features: ['blue head', 'hooked bill', 'long wings'],
            habitat: ['open country', 'farmland', 'scrubland', 'orchards'],
            behavior: ['perch hunting', 'aerial display', 'ground nesting', 'migratory']
        }
    },
    {
        id: 'hoopoe',
        name_en: 'Eurasian Hoopoe',
        name_ru: 'Удод',
        latin_name: 'Upupa epops',
        family: 'Upupidae',
        family_ru: 'Удодовые',
        category: 'european',
        description_en: 'Distinctive bird with pink-brown body, black and white wings, and large erectile crest. Trumpeting call.',
        description_ru: 'Уникальная птица с розово-коричневым телом, чёрно-белыми крыльями и большим хохолком. Трубящий крик.',
        characteristics: {
            size: 'medium (25-32 cm)',
            wingspan: '44-48 cm',
            color: ['pink-brown', 'black', 'white'],
            features: ['erectile crest', 'long curved bill', 'black and white wings'],
            habitat: ['open country', 'farmland', 'orchards', 'pastures'],
            behavior: ['ground feeding', 'insect hunting', 'cavity nesting', 'migratory']
        }
    },
    // Game Birds - Pheasants and Partridges
    {
        id: 'pheasant',
        name_en: 'Common Pheasant',
        name_ru: 'Фазан обыкновенный',
        latin_name: 'Phasianus colchicus',
        family: 'Phasianidae',
        family_ru: 'Фазановые',
        category: 'european',
        description_en: 'Large game bird with colorful male having iridescent plumage and long tail. Brown female. Ground dweller.',
        description_ru: 'Крупная охотничья птица с красочным самцом с переливающимся оперением и длинным хвостом. Коричневая самка. Наземный обитатель.',
        characteristics: {
            size: 'large (53-89 cm)',
            wingspan: '70-90 cm',
            color: ['iridescent copper', 'green', 'red', 'brown'],
            features: ['long tail', 'red face wattle', 'colorful male'],
            habitat: ['farmland', 'woodlands', 'scrubland', 'reed beds'],
            behavior: ['ground feeding', 'running', 'explosive flight', 'polygamous']
        }
    },
    {
        id: 'grey-partridge',
        name_en: 'Grey Partridge',
        name_ru: 'Серая куропатка',
        latin_name: 'Perdix perdix',
        family: 'Phasianidae',
        family_ru: 'Фазановые',
        category: 'european',
        description_en: 'Medium game bird with grey body, chestnut belly patch, and orange face. Farmland specialist.',
        description_ru: 'Средняя охотничья птица с серым телом, каштановым пятном на брюхе и оранжевым лицом. Специалист сельхозугодий.',
        characteristics: {
            size: 'medium (28-32 cm)',
            wingspan: '45-52 cm',
            color: ['grey', 'chestnut', 'orange', 'brown'],
            features: ['chestnut belly patch', 'orange face', 'grey body'],
            habitat: ['farmland', 'grasslands', 'hedgerows', 'agricultural areas'],
            behavior: ['ground feeding', 'covey living', 'running', 'resident']
        }
    },
    {
        id: 'red-legged-partridge',
        name_en: 'Red-legged Partridge',
        name_ru: 'Красноногая куропатка',
        latin_name: 'Alectoris rufa',
        family: 'Phasianidae',
        family_ru: 'Фазановые',
        category: 'european',
        description_en: 'Medium game bird with grey-brown body, black and white throat, and red legs. Southern European.',
        description_ru: 'Средняя охотничья птица с серо-коричневым телом, чёрно-белым горлом и красными ногами. Южноевропейская.',
        characteristics: {
            size: 'medium (32-35 cm)',
            wingspan: '48-55 cm',
            color: ['grey-brown', 'black', 'white', 'red'],
            features: ['black and white throat', 'red legs', 'flanked bars'],
            habitat: ['farmland', 'scrubland', 'vineyards', 'open hills'],
            behavior: ['ground feeding', 'covey living', 'running', 'resident']
        }
    },
    {
        id: 'rock-partridge',
        name_en: 'Rock Partridge',
        name_ru: 'Каменная куропатка',
        latin_name: 'Alectoris graeca',
        family: 'Phasianidae',
        family_ru: 'Фазановые',
        category: 'european',
        description_en: 'Medium game bird similar to red-legged partridge but with different throat pattern. Mountain species.',
        description_ru: 'Средняя охотничья птица, похожая на красноногую куропатку, но с другим рисунком горла. Горный вид.',
        characteristics: {
            size: 'medium (33-37 cm)',
            wingspan: '49-55 cm',
            color: ['grey-brown', 'black', 'white', 'red'],
            features: ['white throat', 'red legs', 'mountain habitat'],
            habitat: ['mountains', 'rocky slopes', 'alpine meadows', 'cliffs'],
            behavior: ['ground feeding', 'covey living', 'running', 'resident']
        }
    },
    {
        id: 'quail',
        name_en: 'Common Quail',
        name_ru: 'Перепел обыкновенный',
        latin_name: 'Coturnix coturnix',
        family: 'Phasianidae',
        family_ru: 'Фазановые',
        category: 'european',
        description_en: 'Small game bird with streaked brown plumage. Migrant with distinctive three-note call. Grassland dweller.',
        description_ru: 'Маленькая охотничья птица с пёстрым коричневым оперением. Мигрант с характерным трёхнотным криком. Обитатель лугов.',
        characteristics: {
            size: 'small (16-18 cm)',
            wingspan: '27-32 cm',
            color: ['streaked brown', 'buff', 'black'],
            features: ['small size', 'streaked plumage', 'short tail'],
            habitat: ['grasslands', 'farmland', 'meadows', 'agricultural areas'],
            behavior: ['ground feeding', 'running', 'migratory', 'nocturnal calling']
        }
    },
    {
        id: 'snow-cock',
        name_en: 'Caucasian Snowcock',
        name_ru: 'Кавказский улар',
        latin_name: 'Tetraogallus caucasicus',
        family: 'Phasianidae',
        family_ru: 'Фазановые',
        category: 'european',
        description_en: 'Large game bird with grey body, white wing patches, and yellow bill. High mountain endemic.',
        description_ru: 'Крупная охотничья птица с серым телом, белыми пятнами на крыльях и жёлтым клювом. Высокогорный эндемик.',
        characteristics: {
            size: 'large (52-63 cm)',
            wingspan: '75-88 cm',
            color: ['grey', 'white', 'yellow', 'black'],
            features: ['large size', 'white wing patches', 'yellow bill'],
            habitat: ['high mountains', 'alpine meadows', 'rocky slopes', 'cliffs'],
            behavior: ['ground feeding', 'whistling call', 'covey living', 'resident']
        }
    },
    // Game Birds - Grouse
    {
        id: 'black-grouse',
        name_en: 'Black Grouse',
        name_ru: 'Тетерев',
        latin_name: 'Lyrurus tetrix',
        family: 'Phasianidae',
        family_ru: 'Фазановые',
        category: 'european',
        description_en: 'Large game bird with black male having lyre-shaped tail and red eye combs. Brown female.',
        description_ru: 'Крупная охотничья птица с чёрным самцом с лирообразным хвостом и красными бровями. Коричневая самка.',
        characteristics: {
            size: 'large (41-58 cm)',
            wingspan: '54-74 cm',
            color: ['black', 'white', 'brown', 'red'],
            features: ['lyre tail', 'red eye combs', 'white wing bars'],
            habitat: ['moorland', 'forest edges', 'heathland', 'mountain areas'],
            behavior: ['lekking display', 'ground feeding', 'resident', 'territorial']
        }
    },
    {
        id: 'capercaillie',
        name_en: 'Western Capercaillie',
        name_ru: 'Глухарь',
        latin_name: 'Tetrao urogallus',
        family: 'Phasianidae',
        family_ru: 'Фазановые',
        category: 'european',
        description_en: 'Largest grouse with dark male having fan tail and red eye comb. Large brown female. Forest specialist.',
        description_ru: 'Крупнейший тетерев с тё��ным самцом с веерообразным хвостом и красной бровью. Крупная коричневая самка. Лесной специалист.',
        characteristics: {
            size: 'very large (54-90 cm)',
            wingspan: '87-125 cm',
            color: ['dark brown', 'black', 'brown', 'red'],
            features: ['fan tail', 'red eye comb', 'large size'],
            habitat: ['coniferous forests', 'old-growth woods', 'mountain forests'],
            behavior: ['lekking display', 'ground feeding', 'tree perching', 'resident']
        }
    },
    {
        id: 'hazel-grouse',
        name_en: 'Hazel Grouse',
        name_ru: 'Рябчик',
        latin_name: 'Tetrastes bonasia',
        family: 'Phasianidae',
        family_ru: 'Фазановые',
        category: 'european',
        description_en: 'Small grouse with cryptic brown plumage and small crest. Whistling call. Dense forest dweller.',
        description_ru: 'Маленький тетерев с камуфлированным коричневым оперением и небольшим хохолком. Свистящий крик. Обитатель густых лесов.',
        characteristics: {
            size: 'medium (34-39 cm)',
            wingspan: '48-55 cm',
            color: ['streaked brown', 'grey', 'buff'],
            features: ['small crest', 'cryptic plumage', 'black throat'],
            habitat: ['coniferous forests', 'mixed woods', 'dense undergrowth'],
            behavior: ['ground feeding', 'whistling call', 'shy', 'resident']
        }
    },
    {
        id: 'ptarmigan',
        name_en: 'Willow Ptarmigan',
        name_ru: 'Ивовая куропатка',
        latin_name: 'Lagopus lagopus',
        family: 'Phasianidae',
        family_ru: 'Фазановые',
        category: 'european',
        description_en: 'Medium grouse with white winter plumage and brown summer plumage. Feathered feet. Arctic-alpine.',
        description_ru: 'Средний тетерев с белым зимним оперением и коричневым летним. Оперённые ноги. Арктическо-альпийский.',
        characteristics: {
            size: 'medium (35-41 cm)',
            wingspan: '54-65 cm',
            color: ['white', 'brown', 'streaked'],
            features: ['feathered feet', 'seasonal plumage', 'red eye comb'],
            habitat: ['arctic tundra', 'alpine areas', 'moorland', 'willow scrub'],
            behavior: ['ground feeding', 'flocking', 'camouflage', 'resident']
        }
    },
    // Seabirds - Puffins and Auks
    {
        id: 'puffin',
        name_en: 'Atlantic Puffin',
        name_ru: 'Тупик',
        latin_name: 'Fratercula arctica',
        family: 'Alcidae',
        family_ru: 'Чистиковые',
        category: 'european',
        description_en: 'Colorful seabird with black and white plumage and bright orange bill in breeding. Clown of the sea.',
        description_ru: 'Красочная морская птица с чёрно-белым оперением и ярким оранжевым клювом в брачном наряде. Клоун моря.',
        characteristics: {
            size: 'medium (26-29 cm)',
            wingspan: '47-63 cm',
            color: ['black', 'white', 'orange', 'grey'],
            features: ['colorful bill', 'stocky body', 'orange legs'],
            habitat: ['coastal cliffs', 'islands', 'open ocean', 'breeding colonies'],
            behavior: ['diving', 'fish hunting', 'colonial', 'migratory']
        }
    },
    {
        id: 'razorbill',
        name_en: 'Razorbill',
        name_ru: 'Чистик',
        latin_name: 'Alca torda',
        family: 'Alcidae',
        family_ru: 'Чистиковые',
        category: 'european',
        description_en: 'Medium auk with black and white plumage and deep compressed bill with white line. Cliff nester.',
        description_ru: 'Средняя чистиковая с чёрно-белым оперением и глубоким сжатым клювом с белой линией. Гнездится на скалах.',
        characteristics: {
            size: 'medium (38-43 cm)',
            wingspan: '60-69 cm',
            color: ['black', 'white'],
            features: ['deep bill', 'white line', 'black and white'],
            habitat: ['coastal cliffs', 'islands', 'open ocean', 'rocky shores'],
            behavior: ['diving', 'fish hunting', 'colonial', 'migratory']
        }
    },
    {
        id: 'guillemot',
        name_en: 'Common Guillemot',
        name_ru: 'Кайра',
        latin_name: 'Uria aalge',
        family: 'Alcidae',
        family_ru: 'Чистиковые',
        category: 'european',
        description_en: 'Medium auk with black and white plumage, pointed bill, and upright stance. Dense colony nester.',
        description_ru: 'Средняя чистиковая с чёрно-белым оперением, заострённым клювом и вертикальной стойкой. Гнездится плотными колониями.',
        characteristics: {
            size: 'medium (38-46 cm)',
            wingspan: '61-73 cm',
            color: ['black', 'white', 'brown'],
            features: ['pointed bill', 'upright stance', 'brown morph'],
            habitat: ['coastal cliffs', 'islands', 'open ocean', 'rocky ledges'],
            behavior: ['diving', 'fish hunting', 'colonial', 'migratory']
        }
    },
    {
        id: 'black-guillemot',
        name_en: 'Black Guillemot',
        name_ru: 'Белоклювая гагарка',
        latin_name: 'Cepphus grylle',
        family: 'Alcidae',
        family_ru: 'Чистиковые',
        category: 'european',
        description_en: 'Medium auk with black breeding plumage, white wing patches, and red feet. Arctic-alpine species.',
        description_ru: 'Средняя чистиковая с чёрным брачным нарядом, белыми пятнами на крыльях и красными ногами. Арктическо-альпийский вид.',
        characteristics: {
            size: 'medium (30-38 cm)',
            wingspan: '49-58 cm',
            color: ['black', 'white', 'red'],
            features: ['black plumage', 'white wing patches', 'red feet'],
            habitat: ['rocky coasts', 'cliffs', 'islands', 'arctic waters'],
            behavior: ['diving', 'fish hunting', 'colonial', 'resident']
        }
    },
    {
        id: 'little-auk',
        name_en: 'Little Auk',
        name_ru: 'Малая гагарка',
        latin_name: 'Alle alle',
        family: 'Alcidae',
        family_ru: 'Чистиковые',
        category: 'european',
        description_en: 'Smallest auk with black and white plumage, short bill, and compact body. Arctic species.',
        description_ru: 'Самая маленькая чистиковая с чёрно-белым оперением, коротким клювом и компактным телом. Арктический вид.',
        characteristics: {
            size: 'small (17-21 cm)',
            wingspan: '34-38 cm',
            color: ['black', 'white'],
            features: ['small size', 'short bill', 'compact body'],
            habitat: ['arctic waters', 'pack ice', 'coastal cliffs', 'islands'],
            behavior: ['diving', 'plankton feeding', 'colonial', 'migratory']
        }
    },
    // Seabirds - Cormorants
    {
        id: 'cormorant',
        name_en: 'Great Cormorant',
        name_ru: 'Большой баклан',
        latin_name: 'Phalacrocorax carbo',
        family: 'Phalacrocoracidae',
        family_ru: 'Баклановые',
        category: 'european',
        description_en: 'Large black waterbird with long neck, hooked bill, and white thigh patches. Fish hunter.',
        description_ru: 'Крупная чёрная водная птица с длинной шеей, крючковатым клювом и белыми пятнами на бёдрах. Охотник на рыбу.',
        characteristics: {
            size: 'large (77-102 cm)',
            wingspan: '121-160 cm',
            color: ['black', 'green', 'white'],
            features: ['long neck', 'hooked bill', 'white thigh patches'],
            habitat: ['coasts', 'lakes', 'rivers', 'wetlands'],
            behavior: ['diving', 'fish hunting', 'wing drying', 'colonial']
        }
    },
    {
        id: 'shag',
        name_en: 'European Shag',
        name_ru: 'Хохлатый баклан',
        latin_name: 'Gulosus aristotelis',
        family: 'Phalacrocoracidae',
        family_ru: 'Баклановые',
        category: 'european',
        description_en: 'Medium cormorant with green-black plumage, small crest, and yellow bill base. Coastal species.',
        description_ru: 'Средний баклан с зелёно-чёрным оперением, небольшим хохолком и жёлтым основанием клюва. Прибрежный вид.',
        characteristics: {
            size: 'medium (65-80 cm)',
            wingspan: '95-110 cm',
            color: ['green-black', 'yellow'],
            features: ['small crest', 'green gloss', 'yellow bill'],
            habitat: ['rocky coasts', 'cliffs', 'islands', 'sheltered waters'],
            behavior: ['diving', 'fish hunting', 'wing drying', 'colonial']
        }
    },
    {
        id: 'pygmy-cormorant',
        name_en: 'Pygmy Cormorant',
        name_ru: 'Малый баклан',
        latin_name: 'Microcarbo pygmaeus',
        family: 'Phalacrocoracidae',
        family_ru: 'Баклановые',
        category: 'european',
        description_en: 'Small cormorant with short bill and rounded head. Eastern European wetland species. Rare.',
        description_ru: 'Маленький баклан с коротким клювом и округлой головой. Восточноевропейский болотный вид. Редкий.',
        characteristics: {
            size: 'small (45-55 cm)',
            wingspan: '77-88 cm',
            color: ['black', 'brown', 'white'],
            features: ['small size', 'short bill', 'rounded head'],
            habitat: ['wetlands', 'lakes', 'rivers', 'reed beds'],
            behavior: ['diving', 'fish hunting', 'colonial', 'migratory']
        }
    },
    // Seabirds - Pelicans
    {
        id: 'white-pelican',
        name_en: 'Great White Pelican',
        name_ru: 'Розовый пеликан',
        latin_name: 'Pelecanus onocrotalus',
        family: 'Pelecanidae',
        family_ru: 'Пеликановые',
        category: 'european',
        description_en: 'Very large white waterbird with enormous bill and throat pouch. Eastern European wetland species.',
        description_ru: 'Очень крупная белая водная птица с огромным клювом и горловым мешком. Восточноевропейский болотный вид.',
        characteristics: {
            size: 'very large (140-180 cm)',
            wingspan: '226-360 cm',
            color: ['white', 'pink', 'yellow'],
            features: ['enormous bill', 'throat pouch', 'large size'],
            habitat: ['lakes', 'wetlands', 'estuaries', 'shallow waters'],
            behavior: ['group fishing', 'plunge diving', 'colonial', 'migratory']
        }
    },
    {
        id: 'dalmatian-pelican',
        name_en: 'Dalmatian Pelican',
        name_ru: 'Кудрявый пеликан',
        latin_name: 'Pelecanus crispus',
        family: 'Pelecanidae',
        family_ru: 'Пеликановые',
        category: 'european',
        description_en: 'Largest pelican with silvery-white plumage and curly nape feathers. Endangered. Eastern Europe.',
        description_ru: 'Крупнейший пеликан с серебристо-белым оперением и кудрявыми перьями на затылке. Исчезающий. Восточная Европа.',
        characteristics: {
            size: 'very large (160-180 cm)',
            wingspan: '245-351 cm',
            color: ['silvery-white', 'grey', 'orange'],
            features: ['curly nape', 'massive bill', 'largest wingspan'],
            habitat: ['lakes', 'wetlands', 'estuaries', 'shallow waters'],
            behavior: ['group fishing', 'colonial', 'endangered', 'migratory']
        }
    },
    // Seabirds - Other
    {
        id: 'gannet',
        name_en: 'Northern Gannet',
        name_ru: 'Северная олуша',
        latin_name: 'Morus bassanus',
        family: 'Sulidae',
        family_ru: 'Олушевые',
        category: 'european',
        description_en: 'Large white seabird with black wing tips and yellow head. Spectacular plunge diver.',
        description_ru: 'Крупная белая морская птица с чёрными кончиками крыльев и жёлтой головой. Зрелищный ныряльщик.',
        characteristics: {
            size: 'large (87-100 cm)',
            wingspan: '165-180 cm',
            color: ['white', 'black', 'yellow', 'buff'],
            features: ['long pointed wings', 'yellow head', 'streamlined body'],
            habitat: ['open ocean', 'coastal cliffs', 'islands', 'breeding colonies'],
            behavior: ['plunge diving', 'fish hunting', 'colonial', 'migratory']
        }
    },
    {
        id: 'manx-shearwater',
        name_en: 'Manx Shearwater',
        name_ru: 'Средиземноморский буревестник',
        latin_name: 'Puffinus puffinus',
        family: 'Procellariidae',
        family_ru: 'Буревестниковые',
        category: 'european',
        description_en: 'Medium seabird with black upperparts, white underparts, and shearwater flight. Nocturnal at colonies.',
        description_ru: 'Средняя морская птица с чёрной спиной, белым низом и характерным полётом буревестника. Ночная у колоний.',
        characteristics: {
            size: 'medium (30-38 cm)',
            wingspan: '76-89 cm',
            color: ['black', 'white'],
            features: ['long narrow wings', 'shearwater flight', 'tube nose'],
            habitat: ['open ocean', 'coastal waters', 'islands', 'breeding burrows'],
            behavior: ['dynamic soaring', 'nocturnal', 'colonial', 'migratory']
        }
    },
    {
        id: 'great-skua',
        name_en: 'Great Skua',
        name_ru: 'Большой поморник',
        latin_name: 'Stercorarius skua',
        family: 'Stercorariidae',
        family_ru: 'Поморниковые',
        category: 'european',
        description_en: 'Large brown seabird with powerful build. Pirate of the seas, kleptoparasite of other seabirds.',
        description_ru: 'Крупная коричневая морская птица с мощным телосложением. Пират морей, клептопаразит других морских птиц.',
        characteristics: {
            size: 'large (50-58 cm)',
            wingspan: '125-140 cm',
            color: ['dark brown', 'black'],
            features: ['powerful build', 'broad wings', 'hooked bill'],
            habitat: ['open ocean', 'coastal areas', 'moorland', 'islands'],
            behavior: ['kleptoparasitism', 'predation', 'aggressive', 'migratory']
        }
    },
    {
        id: 'arctic-skua',
        name_en: 'Arctic Skua',
        name_ru: 'Средний поморник',
        latin_name: 'Stercorarius parasiticus',
        family: 'Stercorariidae',
        family_ru: 'Поморниковые',
        category: 'european',
        description_en: 'Medium skua with dark and light morphs. Pirate bird harassing terns and gulls. Arctic breeder.',
        description_ru: 'Средний поморник с тёмной и светлой морфами. Птица-пират, терроризирующая крачек и чаек. Арктический гнездовик.',
        characteristics: {
            size: 'medium (41-48 cm)',
            wingspan: '107-122 cm',
            color: ['brown', 'white', 'dark'],
            features: ['pointed wings', 'central tail streamers', 'morphs'],
            habitat: ['arctic tundra', 'moorland', 'coasts', 'open ocean'],
            behavior: ['kleptoparasitism', 'aerial harassment', 'migratory', 'territorial']
        }
    },
    {
        id: 'fulmar',
        name_en: 'Northern Fulmar',
        name_ru: 'Глупыш',
        latin_name: 'Fulmarus glacialis',
        family: 'Procellariidae',
        family_ru: 'Буревестниковые',
        category: 'european',
        description_en: 'Medium seabird with pale grey and white plumage, tube nose, and stiff-winged flight. Cliff nester.',
        description_ru: 'Средняя морская птица с бледно-серым и белым оперением, трубковидным носом и жёстким полётом. Гнездится на скалах.',
        characteristics: {
            size: 'medium (43-53 cm)',
            wingspan: '101-117 cm',
            color: ['pale grey', 'white'],
            features: ['tube nose', 'stiff wings', 'gull-like'],
            habitat: ['open ocean', 'coastal cliffs', 'islands', 'arctic waters'],
            behavior: ['dynamic soaring', 'surface feeding', 'colonial', 'resident']
        }
    },
    {
        id: 'storm-petrel',
        name_en: 'European Storm Petrel',
        name_ru: 'Европейская качурка',
        latin_name: 'Hydrobates pelagicus',
        family: 'Hydrobatidae',
        family_ru: 'Качурковые',
        category: 'european',
        description_en: 'Tiny seabird with black plumage, white rump, and fluttering flight. Smallest European seabird.',
        description_ru: 'Крошечная морская птица с чёрным оперением, белым надхвостьем и порхающим полётом. Самая маленькая морская птица Европы.',
        characteristics: {
            size: 'tiny (13-16 cm)',
            wingspan: '36-39 cm',
            color: ['black', 'white'],
            features: ['tiny size', 'white rump', 'fluttering flight'],
            habitat: ['open ocean', 'coastal waters', 'islands', 'breeding burrows'],
            behavior: ['surface feeding', 'nocturnal', 'colonial', 'migratory']
        }
    },
    {
        id: 'leach-petrel',
        name_en: "Leach's Storm Petrel",
        name_ru: 'Качурка Лича',
        latin_name: '',
        family: 'Hydrobatidae',
        family_ru: 'Качурковые',
        category: 'european',
        description_en: 'Small seabird with dark plumage, white rump band, and forked tail. Nocturnal at breeding colonies.',
        description_ru: 'Маленькая морская птица с тёмным оперением, белой полосой надхвостья и вильчатым хвостом. Ночная у гнездовых колоний.',
        characteristics: {
            size: 'small (18-21 cm)',
            wingspan: '43-48 cm',
            color: ['dark brown', 'black', 'white'],
            features: ['white rump band', 'forked tail', 'tube nose'],
            habitat: ['open ocean', 'islands', 'breeding burrows', 'coastal waters'],
            behavior: ['surface feeding', 'nocturnal', 'colonial', 'migratory']
        }
    },
    {
        id: 'cory-shearwater',
        name_en: "Cory's Shearwater",
        name_ru: 'Атлантический буревестник',
        latin_name: 'Calonectris borealis',
        family: 'Procellariidae',
        family_ru: 'Буревестниковые',
        category: 'european',
        description_en: 'Large shearwater with brown-grey upperparts and pale underparts. Atlantic islands breeder.',
        description_ru: 'Крупный буревестник с коричнево-серой спиной и бледным низом. Гнездится на атлантических островах.',
        characteristics: {
            size: 'large (45-56 cm)',
            wingspan: '111-126 cm',
            color: ['brown-grey', 'pale buff', 'white'],
            features: ['large size', 'long wings', 'tube nose'],
            habitat: ['open ocean', 'Atlantic islands', 'coastal waters', 'breeding cliffs'],
            behavior: ['dynamic soaring', 'surface feeding', 'colonial', 'migratory']
        }
    },
    {
        id: 'great-shearwater',
        name_en: 'Great Shearwater',
        name_ru: 'Большой буревестник',
        latin_name: 'Ardenna gravis',
        family: 'Procellariidae',
        family_ru: 'Буревестниковые',
        category: 'european',
        description_en: 'Large shearwater with dark brown upperparts, white underparts, and dark collar. Vagrant to Europe.',
        description_ru: 'Крупный буревестник с тёмно-коричневой спиной, белым низом и тёмным воротником. Залётный в Европе.',
        characteristics: {
            size: 'large (43-51 cm)',
            wingspan: '104-122 cm',
            color: ['dark brown', 'white', 'black'],
            features: ['dark collar', 'white rump', 'large size'],
            habitat: ['open ocean', 'Atlantic', 'coastal waters'],
            behavior: ['dynamic soaring', 'surface feeding', 'pelagic', 'vagrant']
        }
    },
    {
        id: 'yellow-legged-gull',
        name_en: 'Yellow-legged Gull',
        name_ru: 'Желтоногая чайка',
        latin_name: 'Larus michahellis',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Large gull similar to herring gull but with brighter yellow legs. Southern European coastal species.',
        description_ru: 'Крупная чайка, похожая на серебристую, но с более яркими жёлтыми ногами. Южноевропейский прибрежный вид.',
        characteristics: {
            size: 'large (54-68 cm)',
            wingspan: '125-155 cm',
            color: ['white', 'grey', 'yellow', 'red'],
            features: ['yellow legs', 'grey back', 'red spot on bill'],
            habitat: ['coasts', 'islands', 'urban areas', 'harbors'],
            behavior: ['scavenging', 'colonial', 'opportunistic', 'resident']
        }
    },
    {
        id: 'audouin-gull',
        name_en: "Audouin's Gull",
        name_ru: 'Чайка Одуэна',
        latin_name: 'Ichthyaetus audouinii',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Medium gull with dark grey back, red bill, and dark eye. Mediterranean specialist. Endangered.',
        description_ru: 'Средняя чайка с тёмно-серой спиной, красным клювом и тёмным глазом. Средиземноморский специалист. Исчезающий.',
        characteristics: {
            size: 'medium (42-48 cm)',
            wingspan: '115-125 cm',
            color: ['dark grey', 'white', 'red'],
            features: ['red bill', 'dark eye', 'dark grey back'],
            habitat: ['Mediterranean coasts', 'islands', 'rocky shores', 'lagoons'],
            behavior: ['fish hunting', 'colonial', 'endangered', 'resident']
        }
    },
    {
        id: 'slender-billed-gull',
        name_en: 'Slender-billed Gull',
        name_ru: 'Тонкоклювая чайка',
        latin_name: 'Chroicocephalus genei',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Medium gull with very long thin bill, pale grey back, and pink legs. Southern European species.',
        description_ru: 'Средняя чайка с очень длинным тонким клювом, бледно-серой спиной и розовыми ногами. Южноевропейский вид.',
        characteristics: {
            size: 'medium (40-46 cm)',
            wingspan: '105-115 cm',
            color: ['pale grey', 'white', 'pink', 'black'],
            features: ['long thin bill', 'pale grey back', 'pink legs'],
            habitat: ['coastal lagoons', 'saltpans', 'estuaries', 'wetlands'],
            behavior: ['probing', 'colonial', 'migratory', 'specialist']
        }
    },
    {
        id: 'mediterranean-gull',
        name_en: 'Mediterranean Gull',
        name_ru: 'Средиземноморская чайка',
        latin_name: 'Ichthyaetus melanocephalus',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Medium gull with black hood in summer, white wing tips, and red bill. Expanding range in Europe.',
        description_ru: 'Средняя чайка с чёрной шапкой летом, белыми кончиками крыльев и красным клювом. Расширяет ареал в Европе.',
        characteristics: {
            size: 'medium (38-42 cm)',
            wingspan: '100-110 cm',
            color: ['white', 'grey', 'black', 'red'],
            features: ['black hood', 'white wing tips', 'red bill'],
            habitat: ['coasts', 'wetlands', 'lakes', 'urban areas'],
            behavior: ['scavenging', 'flocking', 'colonial', 'migratory']
        }
    },
    {
        id: 'iceland-gull',
        name_en: 'Iceland Gull',
        name_ru: 'Исландская чайка',
        latin_name: 'Larus glaucoides',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Medium-large gull with very pale grey back, pink legs, and gentle expression. Arctic breeder.',
        description_ru: 'Средне-крупная чайка с очень бледно-серой спиной, розовыми ногами и мягким выражением. Арктический гнездовик.',
        characteristics: {
            size: 'medium-large (52-64 cm)',
            wingspan: '125-142 cm',
            color: ['very pale grey', 'white', 'pink'],
            features: ['pale back', 'pink legs', 'small bill'],
            habitat: ['arctic coasts', 'pack ice', 'northern seas', 'winter coasts'],
            behavior: ['scavenging', 'migratory', 'gentle', 'arctic']
        }
    },
    {
        id: 'glaucous-gull',
        name_en: 'Glaucous Gull',
        name_ru: 'Белая чайка',
        latin_name: 'Larus hyperboreus',
        family: 'Laridae',
        family_ru: 'Чайковые',
        category: 'european',
        description_en: 'Very large gull with pale grey back, pink legs, and massive bill. Arctic species, winter visitor.',
        description_ru: 'Очень крупная чайка с бледно-серой спиной, розовыми ногами и массивным клювом. Арктический вид, зимний гость.',
        characteristics: {
            size: 'very large (64-78 cm)',
            wingspan: '137-165 cm',
            color: ['pale grey', 'white', 'pink'],
            features: ['large size', 'pale back', 'massive bill'],
            habitat: ['arctic coasts', 'pack ice', 'northern seas', 'winter coasts'],
            behavior: ['scavenging', 'predation', 'migratory', 'powerful']
        }
    },
    {
        id: 'pomarine-jaeger',
        name_en: 'Pomarine Jaeger',
        name_ru: 'Средний поморник',
        latin_name: 'Stercorarius pomarinus',
        family: 'Stercorariidae',
        family_ru: 'Поморниковые',
        category: 'european',
        description_en: 'Large skua with two long central tail streamers in breeding plumage. Light and dark morphs.',
        description_ru: 'Крупный поморник с двумя длинными центральными рулевыми перьями в брачном наряде. Светлая и тёмная морфы.',
        characteristics: {
            size: 'large (46-55 cm)',
            wingspan: '110-135 cm',
            color: ['brown', 'white', 'dark'],
            features: ['tail streamers', 'broad wings', 'morphs'],
            habitat: ['arctic tundra', 'open ocean', 'coasts', 'migration routes'],
            behavior: ['kleptoparasitism', 'aerial harassment', 'migratory', 'territorial']
        }
    },
    {
        id: 'long-tailed-jaeger',
        name_en: 'Long-tailed Jaeger',
        name_ru: 'Короткохвостый поморник',
        latin_name: 'Stercorarius longicaudus',
        family: 'Stercorariidae',
        family_ru: 'Поморниковые',
        category: 'european',
        description_en: 'Small elegant skua with long pointed tail streamers. Arctic breeder, graceful flight.',
        description_ru: 'Маленький элегантный поморник с длинными заострёнными рулевыми перьями. Арктический гнездовик, грациозный полёт.',
        characteristics: {
            size: 'small (35-41 cm)',
            wingspan: '87-102 cm',
            color: ['brown', 'grey', 'white'],
            features: ['long tail streamers', 'pointed wings', 'small size'],
            habitat: ['arctic tundra', 'moorland', 'open ocean', 'coasts'],
            behavior: ['lemming hunting', 'kleptoparasitism', 'migratory', 'graceful']
        }
    },
    {
        id: 'skua',
        name_en: 'South Polar Skua',
        name_ru: 'Южнополярный поморник',
        latin_name: 'Stercorarius maccormicki',
        family: 'Stercorariidae',
        family_ru: 'Поморниковые',
        category: 'european',
        description_en: 'Large dark skua, rare vagrant to northern Europe. Antarctic breeder, powerful predator.',
        description_ru: 'Крупный тёмный поморник, редкий залётный на севере Европы. Антарктический гнездовик, мощный хищник.',
        characteristics: {
            size: 'large (50-58 cm)',
            wingspan: '110-140 cm',
            color: ['dark brown', 'black'],
            features: ['large size', 'powerful build', 'dark plumage'],
            habitat: ['Antarctic', 'open ocean', 'rare vagrant'],
            behavior: ['predation', 'scavenging', 'vagrant', 'powerful']
        }
    }
];
