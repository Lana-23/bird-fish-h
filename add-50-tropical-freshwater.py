#!/usr/bin/env python3
# Add 50 tropical freshwater fish species to fish-river-tropical.js

import json

# 50 Tropical Freshwater Fish Species
tropical_freshwater_fish = [
    {
        "id": "discus",
        "name_en": "Discus",
        "name_ru": "Дискус",
        "latin_name": "Symphysodon aequifasciatus",
        "family": "Cichlidae",
        "family_ru": "Цихловые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Colorful discus-shaped fish from Amazon. Known as king of aquarium fish with vibrant colors and round body.",
        "description_ru": "Красочная дискообразная рыба из Амазонки. Известна как король аквариумных рыб с яркими цветами и круглым телом.",
        "characteristics": {
            "size": "large (20-25 cm)",
            "color": ["blue", "red", "green", "brown"],
            "features": ["disc-shaped body", "vibrant colors", "vertical stripes"],
            "habitat": ["Amazon basin", "warm waters", "heavily planted"],
            "behavior": ["peaceful", "schooling", "sensitive to water"]
        }
    },
    {
        "id": "ram-cichlid",
        "name_en": "Ram Cichlid",
        "name_ru": "Цихлазома рамрези",
        "latin_name": "Mikrogeophagus ramirezi",
        "family": "Cichlidae",
        "family_ru": "Цихловые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Small colorful dwarf cichlid from South America. Blue-gold body with black markings.",
        "description_ru": "Маленькая красочная карликовая цихлида из Южной Америки. Сине-золотое тело с чёрными отметинами.",
        "characteristics": {
            "size": "small (5-7 cm)",
            "color": ["blue", "gold", "black"],
            "features": ["dwarf cichlid", "colorful", "black spots"],
            "habitat": ["Orinoco basin", "warm waters", "sandy bottom"],
            "behavior": ["peaceful", "territorial", "pair bonding"]
        }
    },
    {
        "id": "guppy",
        "name_en": "Guppy",
        "name_ru": "Гуппи",
        "latin_name": "Poecilia reticulata",
        "family": "Poeciliidae",
        "family_ru": "Пецилиевые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Popular small livebearing fish. Males are colorful with large tails, females are larger and less colorful.",
        "description_ru": "Популярная маленькая живородящая рыба. Самцы красочные с большими хвостами, самки крупнее и менее красочные.",
        "characteristics": {
            "size": "small (3-6 cm)",
            "color": ["orange", "blue", "red", "green", "multicolor"],
            "features": ["livebearing", "colorful males", "fan tail"],
            "habitat": ["South America", "Caribbean", "tropical streams"],
            "behavior": ["peaceful", "active", "breeds easily"]
        }
    },
    {
        "id": "platy",
        "name_en": "Platy",
        "name_ru": "Пецилия",
        "latin_name": "Xiphophorus maculatus",
        "family": "Poeciliidae",
        "family_ru": "Пецилиевые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Colorful livebearing fish from Central America. Round body shape, peaceful nature.",
        "description_ru": "Красочная живородящая рыба из Центральной Америки. Круглая форма тела, мирный характер.",
        "characteristics": {
            "size": "small (4-5 cm)",
            "color": ["red", "orange", "blue", "black", "multicolor"],
            "features": ["livebearing", "round body", "colorful"],
            "habitat": ["Central America", "slow streams", "warm waters"],
            "behavior": ["peaceful", "active", "community fish"]
        }
    },
    {
        "id": "swordtail",
        "name_en": "Swordtail",
        "name_ru": "Меченосец",
        "latin_name": "Xiphophorus hellerii",
        "family": "Poeciliidae",
        "family_ru": "Пецилиевые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Livebearing fish with distinctive sword-like tail extension in males. Active and colorful.",
        "description_ru": "Живородящая рыба с характерным мечевидным хвостом у самцов. Активная и красочная.",
        "characteristics": {
            "size": "medium (10-12 cm)",
            "color": ["red", "green", "orange", "black"],
            "features": ["sword tail", "livebearing", "active"],
            "habitat": ["Central America", "fast streams", "vegetated waters"],
            "behavior": ["peaceful", "active swimmer", "jumping"]
        }
    },
    {
        "id": "molly",
        "name_en": "Molly",
        "name_ru": "Моллинезия",
        "latin_name": "Poecilia sphenops",
        "family": "Poeciliidae",
        "family_ru": "Пецилиевые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Hardy livebearing fish from Central and South America. Various color forms available.",
        "description_ru": "Выносливая живородящая рыба из Центральной и Южной Америки. Различные цветовые формы.",
        "characteristics": {
            "size": "small (6-10 cm)",
            "color": ["black", "silver", "gold", "dalmatian"],
            "features": ["livebearing", "hardy", "algae eater"],
            "habitat": ["Central America", "brackish waters", "coastal streams"],
            "behavior": ["peaceful", "active", "grazing"]
        }
    },
    {
        "id": "betta",
        "name_en": "Betta (Siamese Fighting Fish)",
        "name_ru": "Бетта (Сиамский петушок)",
        "latin_name": "Betta splendens",
        "family": "Osphronemidae",
        "family_ru": "Осфронемовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Colorful labyrinth fish from Southeast Asia. Males have flowing fins and are territorial.",
        "description_ru": "Красочная лабиринтовая рыба из Юго-Восточной Азии. Самцы с плавными плавниками и территориальные.",
        "characteristics": {
            "size": "small (6-8 cm)",
            "color": ["red", "blue", "purple", "green", "multicolor"],
            "features": ["labyrinth organ", "flowing fins", "bubble nest"],
            "habitat": ["Thailand", "rice paddies", "slow waters"],
            "behavior": ["territorial", "aggressive to males", "air breather"]
        }
    },
    {
        "id": "gourami",
        "name_en": "Dwarf Gourami",
        "name_ru": "Карликовый гурами",
        "latin_name": "Trichogaster lalius",
        "family": "Osphronemidae",
        "family_ru": "Осфронемовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Small colorful labyrinth fish from India. Blue-red coloration with peaceful nature.",
        "description_ru": "Маленькая красочная лабиринтовая рыба из Индии. Сине-красная окраска с мирным характером.",
        "characteristics": {
            "size": "small (5-6 cm)",
            "color": ["blue", "red", "orange"],
            "features": ["labyrinth organ", "colorful", "thread-like fins"],
            "habitat": ["India", "slow streams", "planted waters"],
            "behavior": ["peaceful", "shy", "air breather"]
        }
    },
    {
        "id": "pearl-gourami",
        "name_en": "Pearl Gourami",
        "name_ru": "Жемчужный гурами",
        "latin_name": "Trichopodus leerii",
        "family": "Osphronemidae",
        "family_ru": "Осфронемовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Beautiful gourami with pearl-like spots covering body. Long anal fin extends to tail.",
        "description_ru": "Красивый гурами с жемчужными пятнами по всему телу. Длинный анальный плавник до хвоста.",
        "characteristics": {
            "size": "medium (10-12 cm)",
            "color": ["gold", "silver", "pearl"],
            "features": ["pearl spots", "labyrinth organ", "elegant fins"],
            "habitat": ["Southeast Asia", "peat swamps", "acidic waters"],
            "behavior": ["peaceful", "bubble nester", "shy"]
        }
    },
    {
        "id": "blue-gourami",
        "name_en": "Blue Gourami",
        "name_ru": "Голубой гурами",
        "latin_name": "Trichopodus trichopterus",
        "family": "Osphronemidae",
        "family_ru": "Осфронемовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Hardy labyrinth fish with blue-silver body and two dark spots. Can breathe air.",
        "description_ru": "Выносливая лабиринтовая рыба с сине-серебристым телом и двумя тёмными пятнами. Может дышать воздухом.",
        "characteristics": {
            "size": "medium (10-15 cm)",
            "color": ["blue", "silver", "gray"],
            "features": ["labyrinth organ", "two spots", "hardy"],
            "habitat": ["Southeast Asia", "still waters", "rice fields"],
            "behavior": ["peaceful", "curious", "air breather"]
        }
    },
    {
        "id": "corydoras-panda",
        "name_en": "Panda Corydoras",
        "name_ru": "Коридорас панда",
        "latin_name": "Corydoras panda",
        "family": "Callichthyidae",
        "family_ru": "Каллихтовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Small catfish with distinctive black markings like a panda. Peaceful bottom dweller.",
        "description_ru": "Маленький сом с характерными чёрными отметинами как у панды. Мирная донная рыба.",
        "characteristics": {
            "size": "small (4-5 cm)",
            "color": ["white", "black", "pink"],
            "features": ["panda markings", "armored body", "whiskers"],
            "habitat": ["Peru", "clear streams", "sandy bottom"],
            "behavior": ["peaceful", "schooling", "bottom feeder"]
        }
    },
    {
        "id": "corydoras-aeneus",
        "name_en": "Bronze Corydoras",
        "name_ru": "Бронзовый коридорас",
        "latin_name": "Corydoras aeneus",
        "family": "Callichthyidae",
        "family_ru": "Каллихтовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Popular armored catfish with bronze-green coloration. Active bottom dweller.",
        "description_ru": "Популярный бронированный сом с бронзово-зелёной окраской. Активная донная рыба.",
        "characteristics": {
            "size": "small (6-7 cm)",
            "color": ["bronze", "green", "gold"],
            "features": ["armored plates", "whiskers", "metallic sheen"],
            "habitat": ["South America", "slow waters", "muddy bottom"],
            "behavior": ["peaceful", "schooling", "scavenger"]
        }
    },
    {
        "id": "corydoras-sterbai",
        "name_en": "Sterba's Corydoras",
        "name_ru": "Коридорас Штерба",
        "latin_name": "Corydoras sterbai",
        "family": "Callichthyidae",
        "family_ru": "Каллихтовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Beautiful corydoras with dark body and white-orange spots. Distinctive striped pattern.",
        "description_ru": "Красивый коридорас с тёмным телом и бело-оранжевыми пятнами. Характерный полосатый узор.",
        "characteristics": {
            "size": "small (6-7 cm)",
            "color": ["black", "white", "orange"],
            "features": ["spotted pattern", "armored body", "striped"],
            "habitat": ["Brazil", "clear rivers", "sandy substrate"],
            "behavior": ["peaceful", "schooling", "active"]
        }
    },
    {
        "id": "otocinclus",
        "name_en": "Otocinclus Catfish",
        "name_ru": "Отоцинклюс",
        "latin_name": "Otocinclus affinis",
        "family": "Loricariidae",
        "family_ru": "Лорикариевые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Small algae-eating catfish. Peaceful and excellent for controlling algae in aquariums.",
        "description_ru": "Маленький сом-водорослеед. Мирный и отлично контролирует водоросли в аквариумах.",
        "characteristics": {
            "size": "small (4-5 cm)",
            "color": ["silver", "brown", "gray"],
            "features": ["sucker mouth", "algae eater", "slender body"],
            "habitat": ["South America", "slow streams", "planted waters"],
            "behavior": ["peaceful", "schooling", "grazing"]
        }
    },
    {
        "id": "pleco-bristlenose",
        "name_en": "Bristlenose Pleco",
        "name_ru": "Анциструс",
        "latin_name": "Ancistrus cirrhosus",
        "family": "Loricariidae",
        "family_ru": "Лорикариевые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Popular algae-eating catfish with bristle-like growths on head. Dark brown with lighter spots.",
        "description_ru": "Популярный сом-водорослеед с щетинкообразными выростами на голове. Тёмно-коричневый со светлыми пятнами.",
        "characteristics": {
            "size": "medium (10-15 cm)",
            "color": ["brown", "black", "gray"],
            "features": ["bristles on head", "sucker mouth", "algae eater"],
            "habitat": ["South America", "fast waters", "rocky substrate"],
            "behavior": ["peaceful", "nocturnal", "territorial"]
        }
    },
    {
        "id": "clown-loach",
        "name_en": "Clown Loach",
        "name_ru": "Боция-клоун",
        "latin_name": "Chromobotia macracanthus",
        "family": "Botiidae",
        "family_ru": "Ботиевые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Colorful striped loach from Indonesia. Orange body with bold black bands. Can grow large.",
        "description_ru": "Красочная полосатая вьюн из Индонезии. Оранжевое тело с жирными чёрными полосами. Может вырасти большой.",
        "characteristics": {
            "size": "large (20-30 cm)",
            "color": ["orange", "black", "yellow"],
            "features": ["bold stripes", "spines under eyes", "long-lived"],
            "habitat": ["Indonesia", "fast rivers", "rocky bottom"],
            "behavior": ["peaceful", "schooling", "playful"]
        }
    },
    {
        "id": "yo-yo-loach",
        "name_en": "Yo-Yo Loach",
        "name_ru": "Боция йо-йо",
        "latin_name": "Botia almorhae",
        "family": "Botiidae",
        "family_ru": "Ботиевые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Patterned loach with Y-O-Y-O like markings. Active and sometimes shy.",
        "description_ru": "Узорчатая вьюн с маркировкой как Y-O-Y-O. Активная и иногда застенчивая.",
        "characteristics": {
            "size": "medium (12-15 cm)",
            "color": ["silver", "brown", "black"],
            "features": ["Y-O-Y-O pattern", "retractable spines", "active"],
            "habitat": ["India", "clear streams", "rocky areas"],
            "behavior": ["peaceful", "shy", "nocturnal"]
        }
    },
    {
        "id": "zebra-loach",
        "name_en": "Zebra Loach",
        "name_ru": "Боция зебра",
        "latin_name": "Botia striata",
        "family": "Botiidae",
        "family_ru": "Ботиевые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Small striped loach with golden-brown body and dark vertical bands. Peaceful and active.",
        "description_ru": "Маленькая полосатая вьюн с золотисто-коричневым телом и тёмными вертикальными полосами. Мирная и активная.",
        "characteristics": {
            "size": "small (8-10 cm)",
            "color": ["gold", "brown", "black"],
            "features": ["vertical stripes", "small size", "active"],
            "habitat": ["India", "hill streams", "rocky substrate"],
            "behavior": ["peaceful", "schooling", "diurnal"]
        }
    },
    {
        "id": "kuhli-loach",
        "name_en": "Kuhli Loach",
        "name_ru": "Вьюн Кюли",
        "latin_name": "Pangio kuhlii",
        "family": "Cobitidae",
        "family_ru": "Вьюновые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Eel-like loach with yellow-pink body and dark bands. Burrows in substrate.",
        "description_ru": "Угреобразная вьюн с жёлто-розовым телом и тёмными полосами. Зарывается в субстрат.",
        "characteristics": {
            "size": "medium (8-12 cm)",
            "color": ["yellow", "pink", "brown", "black"],
            "features": ["eel-like body", "whiskers", "burrowing"],
            "habitat": ["Southeast Asia", "slow waters", "sandy bottom"],
            "behavior": ["peaceful", "nocturnal", "shy"]
        }
    },
    {
        "id": "rainbow-shark",
        "name_en": "Rainbow Shark",
        "name_ru": "Радужная акула",
        "latin_name": "Epalzeorhynchos frenatum",
        "family": "Cyprinidae",
        "family_ru": "Карповые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Dark body with bright red-orange fins. Active swimmer, can be territorial.",
        "description_ru": "Тёмное тело с ярко-красно-оранжевыми плавниками. Активный пловец, может быть территориальным.",
        "characteristics": {
            "size": "medium (12-15 cm)",
            "color": ["black", "red", "orange"],
            "features": ["shark-like shape", "red fins", "active"],
            "habitat": ["Thailand", "fast rivers", "rocky bottom"],
            "behavior": ["semi-aggressive", "territorial", "active swimmer"]
        }
    },
    {
        "id": "red-tailed-shark",
        "name_en": "Red-Tailed Black Shark",
        "name_ru": "Краснохвостая акула",
        "latin_name": "Epalzeorhynchos bicolor",
        "family": "Cyprinidae",
        "family_ru": "Карповые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Velvety black body with bright red tail. Striking appearance, territorial nature.",
        "description_ru": "Бархатисто-чёрное тело с ярко-красным хвостом. Эффектный вид, территориальный характер.",
        "characteristics": {
            "size": "medium (10-12 cm)",
            "color": ["black", "red"],
            "features": ["black body", "red tail", "shark-like"],
            "habitat": ["Thailand", "clear streams", "rocky areas"],
            "behavior": ["territorial", "active", "bold"]
        }
    },
    {
        "id": "cherry-barb",
        "name_en": "Cherry Barb",
        "name_ru": "Вишнёвый барбус",
        "latin_name": "Puntius titteya",
        "family": "Cyprinidae",
        "family_ru": "Карповые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Small peaceful barb with cherry-red males. Elongated body with horizontal stripe.",
        "description_ru": "Маленький мирный барбус с вишнёво-красными самцами. Удлинённое тело с горизонтальной полосой.",
        "characteristics": {
            "size": "small (4-5 cm)",
            "color": ["red", "cherry", "silver"],
            "features": ["cherry red males", "horizontal stripe", "peaceful"],
            "habitat": ["Sri Lanka", "forest streams", "shaded waters"],
            "behavior": ["peaceful", "schooling", "active"]
        }
    },
    {
        "id": "tiger-barb",
        "name_en": "Tiger Barb",
        "name_ru": "Тигровый барбус",
        "latin_name": "Puntigrus tetrazona",
        "family": "Cyprinidae",
        "family_ru": "Карповые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Golden-orange body with bold black vertical stripes. Active and sometimes nippy.",
        "description_ru": "Золотисто-оранжевое тело с жирными чёрными вертикальными полосами. Активный и иногда щиплет плавники.",
        "characteristics": {
            "size": "small (6-7 cm)",
            "color": ["orange", "gold", "black", "red"],
            "features": ["tiger stripes", "active", "red fins"],
            "habitat": ["Indonesia", "clear streams", "planted waters"],
            "behavior": ["active", "schooling", "fin nippers"]
        }
    },
    {
        "id": "rosy-barb",
        "name_en": "Rosy Barb",
        "name_ru": "Розовый барбус",
        "latin_name": "Pethia conchonius",
        "family": "Cyprinidae",
        "family_ru": "Карповые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Hardy barb with rosy-pink coloration in males. Metallic sheen with black markings.",
        "description_ru": "Выносливый барбус с розово-розовой окраской у самцов. Металлический блеск с чёрными отметинами.",
        "characteristics": {
            "size": "small (8-10 cm)",
            "color": ["pink", "rose", "gold", "silver"],
            "features": ["rosy coloration", "metallic sheen", "hardy"],
            "habitat": ["India", "cool streams", "vegetated waters"],
            "behavior": ["peaceful", "active", "schooling"]
        }
    },
    {
        "id": "danio-rerio",
        "name_en": "Zebra Danio",
        "name_ru": "Данио рерио",
        "latin_name": "Danio rerio",
        "family": "Cyprinidae",
        "family_ru": "Карповые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Small striped fish with blue-silver body and horizontal stripes. Very hardy and active.",
        "description_ru": "Маленькая полосатая рыба с сине-серебристым телом и горизонтальными полосами. Очень выносливая и активная.",
        "characteristics": {
            "size": "small (4-5 cm)",
            "color": ["blue", "silver", "gold"],
            "features": ["horizontal stripes", "hardy", "fast"],
            "habitat": ["India", "fast streams", "surface waters"],
            "behavior": ["peaceful", "schooling", "very active"]
        }
    },
    {
        "id": "giant-danio",
        "name_en": "Giant Danio",
        "name_ru": "Гигантский данио",
        "latin_name": "Devario aequipinnatus",
        "family": "Cyprinidae",
        "family_ru": "Карповые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Large active danio with blue-silver body and spotted lines. Fast swimmer.",
        "description_ru": "Крупный активный данио с сине-серебристым телом и пятнистыми линиями. Быстрый пловец.",
        "characteristics": {
            "size": "medium (10-12 cm)",
            "color": ["blue", "silver", "gold"],
            "features": ["large size", "spotted lines", "fast"],
            "habitat": ["India", "fast rivers", "open waters"],
            "behavior": ["peaceful", "schooling", "very active"]
        }
    },
    {
        "id": "white-cloud",
        "name_en": "White Cloud Mountain Minnow",
        "name_ru": "Белая облачная гора",
        "latin_name": "Tanichthys albonubes",
        "family": "Cyprinidae",
        "family_ru": "Карповые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Small peaceful fish with dark body and iridescent blue-red stripes. Cold water tolerant.",
        "description_ru": "Маленькая мирная рыба с тёмным телом и переливающимися сине-красными полосами. Переносит холодную воду.",
        "characteristics": {
            "size": "small (3-4 cm)",
            "color": ["brown", "blue", "red", "white"],
            "features": ["iridescent stripes", "cold tolerant", "small"],
            "habitat": ["China", "mountain streams", "cool waters"],
            "behavior": ["peaceful", "schooling", "hardy"]
        }
    },
    {
        "id": "honey-gourami",
        "name_en": "Honey Gourami",
        "name_ru": "Медовый гурами",
        "latin_name": "Trichogaster chuna",
        "family": "Osphronemidae",
        "family_ru": "Осфронемовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Small peaceful gourami with golden-orange honey coloration. Males more colorful.",
        "description_ru": "Маленький мирный гурами с золотисто-оранжевой медовой окраской. Самцы красочнее.",
        "characteristics": {
            "size": "small (5-6 cm)",
            "color": ["gold", "orange", "honey"],
            "features": ["labyrinth organ", "honey color", "peaceful"],
            "habitat": ["India", "slow waters", "planted areas"],
            "behavior": ["peaceful", "shy", "air breather"]
        }
    },
    {
        "id": "paradise-fish",
        "name_en": "Paradise Fish",
        "name_ru": "Райская рыба",
        "latin_name": "Macropodus opercularis",
        "family": "Osphronemidae",
        "family_ru": "Осфронемовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Colorful striped labyrinth fish with red-blue-green coloration. Hardy and active.",
        "description_ru": "Красочная полосатая лабиринтовая рыба с красно-сине-зелёной окраской. Выносливая и активная.",
        "characteristics": {
            "size": "medium (8-10 cm)",
            "color": ["red", "blue", "green", "orange"],
            "features": ["labyrinth organ", "vertical stripes", "colorful"],
            "habitat": ["Asia", "rice paddies", "still waters"],
            "behavior": ["semi-aggressive", "territorial", "hardy"]
        }
    },
    {
        "id": "killifish-aphyosemion",
        "name_en": "Aphyosemion Killifish",
        "name_ru": "Афиосемион",
        "latin_name": "Aphyosemion australe",
        "family": "Nothobranchiidae",
        "family_ru": "Нотобранховые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Colorful egg-laying fish with lyre-shaped tail. Golden-brown with red-blue spots.",
        "description_ru": "Красочная икромечущая рыба с лирообразным хвостом. Золотисто-коричневая с красно-синими пятнами.",
        "characteristics": {
            "size": "small (5-6 cm)",
            "color": ["gold", "red", "blue", "brown"],
            "features": ["lyre tail", "egg-layer", "colorful"],
            "habitat": ["Africa", "forest streams", "shaded waters"],
            "behavior": ["peaceful", "jumping", "surface dweller"]
        }
    },
    {
        "id": "elephant-nose",
        "name_en": "Elephant Nose Fish",
        "name_ru": "Рыба-слон",
        "latin_name": "Gnathonemus petersii",
        "family": "Mormyridae",
        "family_ru": "Мормировые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Unique fish with trunk-like chin extension. Uses electric signals to navigate. Nocturnal.",
        "description_ru": "Уникальная рыба с хоботообразным выростом на подбородке. Использует электрические сигналы для навигации. Ночная.",
        "characteristics": {
            "size": "large (15-20 cm)",
            "color": ["black", "dark brown"],
            "features": ["trunk chin", "electric organ", "nocturnal"],
            "habitat": ["Africa", "muddy rivers", "low visibility"],
            "behavior": ["peaceful", "nocturnal", "territorial"]
        }
    },
    {
        "id": "glass-knifefish",
        "name_en": "Glass Knifefish",
        "name_ru": "Стеклянный нож",
        "latin_name": "Eigenmannia virescens",
        "family": "Sternopygidae",
        "family_ru": "Стернопигиевые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Translucent fish with elongated body. Swims using undulating anal fin. Peaceful.",
        "description_ru": "Прозрачная рыба с удлинённым телом. Плавает, используя волнообразный анальный плавник. Мирная.",
        "characteristics": {
            "size": "medium (15-20 cm)",
            "color": ["translucent", "green tint"],
            "features": ["transparent body", "knife shape", "undulating fin"],
            "habitat": ["South America", "slow waters", "planted areas"],
            "behavior": ["peaceful", "nocturnal", "shy"]
        }
    },
    {
        "id": "black-ghost-knifefish",
        "name_en": "Black Ghost Knifefish",
        "name_ru": "Чёрный призрак",
        "latin_name": "Apteronotus albifrons",
        "family": "Apteronotidae",
        "family_ru": "Аптеронотовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "All black fish with white tail bands. Swims like a knife using bottom fin. Nocturnal.",
        "description_ru": "Вся чёрная рыба с белыми полосами на хвосте. Плавает как нож, используя нижний плавник. Ночная.",
        "characteristics": {
            "size": "large (30-50 cm)",
            "color": ["black", "white bands"],
            "features": ["all black", "white tail rings", "electric signals"],
            "habitat": ["South America", "fast rivers", "rocky areas"],
            "behavior": ["peaceful", "nocturnal", "large"]
        }
    },
    {
        "id": "scatophagus",
        "name_en": "Spotted Scat",
        "name_ru": "Пятнистый скат",
        "latin_name": "Scatophagus argus",
        "family": "Scatophagidae",
        "family_ru": "Скатовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Disc-shaped fish with black spots. Can live in fresh and brackish water. Hardy.",
        "description_ru": "Дискообразная рыба с чёрными пятнами. Может жить в пресной и солоноватой воде. Выносливая.",
        "characteristics": {
            "size": "large (20-30 cm)",
            "color": ["silver", "green", "black spots"],
            "features": ["disc shape", "black spots", "brackish tolerant"],
            "habitat": ["Asia", "estuaries", "mangroves"],
            "behavior": ["peaceful", "active", "hardy"]
        }
    },
    {
        "id": "archerfish",
        "name_en": "Archerfish",
        "name_ru": "Рыба-лучник",
        "latin_name": "Toxotes jaculatrix",
        "family": "Toxotidae",
        "family_ru": "Токсотовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Famous for shooting water at insects. Silver body with black triangular markings.",
        "description_ru": "Известна тем, что стреляет водой по насекомым. Серебристое тело с чёрными треугольными отметинами.",
        "characteristics": {
            "size": "medium (15-20 cm)",
            "color": ["silver", "black", "yellow"],
            "features": ["water shooter", "triangular marks", "surface feeder"],
            "habitat": ["Southeast Asia", "mangroves", "brackish waters"],
            "behavior": ["peaceful", "jumping", "unique hunting"]
        }
    },
    {
        "id": "mono-argenteus",
        "name_en": "Silver Mono",
        "name_ru": "Серебристый моно",
        "latin_name": "Monodactylus argenteus",
        "family": "Monodactylidae",
        "family_ru": "Монодактилевые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Disc-shaped silver fish with black-edged fins. Brackish water species.",
        "description_ru": "Дискообразная серебристая рыба с чёрными краями плавников. Солоноватоводный вид.",
        "characteristics": {
            "size": "medium (15-20 cm)",
            "color": ["silver", "black", "yellow"],
            "features": ["disc shape", "black fin edges", "brackish"],
            "habitat": ["Indo-Pacific", "estuaries", "mangroves"],
            "behavior": ["peaceful", "schooling", "active"]
        }
    },
    {
        "id": "kissing-gourami",
        "name_en": "Kissing Gourami",
        "name_ru": "Целующийся гурами",
        "latin_name": "Helostoma temminckii",
        "family": "Osphronemidae",
        "family_ru": "Осфронемовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Large gourami known for kissing behavior. Pink-white coloration. Algae grazer.",
        "description_ru": "Крупный гурами, известный поведением поцелуев. Розово-белая окраска. Пасётся на водорослях.",
        "characteristics": {
            "size": "large (20-30 cm)",
            "color": ["pink", "white", "green tint"],
            "features": ["kissing lips", "labyrinth organ", "large"],
            "habitat": ["Southeast Asia", "slow waters", "vegetated"],
            "behavior": ["peaceful", "kissing", "algae eater"]
        }
    },
    {
        "id": "three-spot-gourami",
        "name_en": "Three-Spot Gourami",
        "name_ru": "Трёхпятнистый гурами",
        "latin_name": "Trichopodus trichopterus",
        "family": "Osphronemidae",
        "family_ru": "Осфронемовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Hardy gourami with blue body and two dark spots plus eye spot. Labyrinth fish.",
        "description_ru": "Выносливый гурами с синим телом и двумя тёмными пятнами плюс пятно глаза. Лабиринтовая рыба.",
        "characteristics": {
            "size": "medium (12-15 cm)",
            "color": ["blue", "silver", "gray"],
            "features": ["three spots", "labyrinth organ", "hardy"],
            "habitat": ["Southeast Asia", "still waters", "rice fields"],
            "behavior": ["peaceful", "curious", "air breather"]
        }
    },
    {
        "id": "chocolate-gourami",
        "name_en": "Chocolate Gourami",
        "name_ru": "Шоколадный гурами",
        "latin_name": "Sphaerichthys osphromenoides",
        "family": "Osphronemidae",
        "family_ru": "Осфронемовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Small shy gourami with chocolate-brown coloration and cream vertical bands. Demanding.",
        "description_ru": "Маленький застенчивый гурами с шоколадно-коричневой окраской и кремовыми вертикальными полосами. Требовательный.",
        "characteristics": {
            "size": "small (5-6 cm)",
            "color": ["brown", "chocolate", "cream"],
            "features": ["vertical bands", "labyrinth organ", "shy"],
            "habitat": ["Indonesia", "blackwaters", "peat swamps"],
            "behavior": ["peaceful", "shy", "sensitive"]
        }
    },
    {
        "id": "sparkling-gourami",
        "name_en": "Sparkling Gourami",
        "name_ru": "Блестящий гурами",
        "latin_name": "Trichopodus pectoralis",
        "family": "Osphronemidae",
        "family_ru": "Осфронемовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Small gourami with iridescent blue-green spots. Peaceful and attractive.",
        "description_ru": "Маленький гурами с переливающимися сине-зелёными пятнами. Мирный и привлекательный.",
        "characteristics": {
            "size": "small (8-10 cm)",
            "color": ["brown", "blue", "green", "silver"],
            "features": ["iridescent spots", "labyrinth organ", "small"],
            "habitat": ["Thailand", "slow waters", "planted areas"],
            "behavior": ["peaceful", "active", "air breather"]
        }
    },
    {
        "id": "red-finned-shark",
        "name_en": "Red-Finned Shark",
        "name_ru": "Краснопёрая акула",
        "latin_name": "Epalzeorhynchos frenatum",
        "family": "Cyprinidae",
        "family_ru": "Карповые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Dark body with bright red fins. Active swimmer, similar to rainbow shark.",
        "description_ru": "Тёмное тело с ярко-красными плавниками. Активный пловец, похож на радужную акулу.",
        "characteristics": {
            "size": "medium (12-15 cm)",
            "color": ["black", "red"],
            "features": ["red fins", "shark-like", "active"],
            "habitat": ["Thailand", "fast rivers", "rocky bottom"],
            "behavior": ["semi-aggressive", "territorial", "active"]
        }
    },
    {
        "id": "bala-shark",
        "name_en": "Bala Shark",
        "name_ru": "Акула бала",
        "latin_name": "Balantiocheilos melanopterus",
        "family": "Cyprinidae",
        "family_ru": "Карповые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Large silver fish with black-edged fins. Peaceful but needs large tank. Shark-like appearance.",
        "description_ru": "Крупная серебристая рыба с чёрными краями плавников. Мирная, но нужен большой аквариум. Похожа на акулу.",
        "characteristics": {
            "size": "large (25-35 cm)",
            "color": ["silver", "black", "yellow"],
            "features": ["shark-like", "black fin edges", "large eyes"],
            "habitat": ["Southeast Asia", "large rivers", "open waters"],
            "behavior": ["peaceful", "schooling", "jumpy"]
        }
    },
    {
        "id": "iridescent-shark",
        "name_en": "Iridescent Shark",
        "name_ru": "Радужная акула",
        "latin_name": "Pangasianodon hypophthalmus",
        "family": "Pangasiidae",
        "family_ru": "Пангасиевые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Large catfish with shark-like appearance. Silver body, can grow very large.",
        "description_ru": "Крупный сом с акульим видом. Серебристое тело, может вырасти очень большим.",
        "characteristics": {
            "size": "very large (60-100 cm)",
            "color": ["silver", "gray", "black"],
            "features": ["shark-like", "large size", "catfish"],
            "habitat": ["Mekong basin", "large rivers", "open waters"],
            "behavior": ["peaceful", "active", "skittish"]
        }
    },
    {
        "id": "red-bellied-pacu",
        "name_en": "Red-Bellied Pacu",
        "name_ru": "Краснобрюхий паку",
        "latin_name": "Piaractus brachypomus",
        "family": "Serrasalmidae",
        "family_ru": "Сerrasalmidae",
        "category": "tropical",
        "environment": "river",
        "description_en": "Large fruit-eating fish related to piranha. Silver with red belly. Peaceful giant.",
        "description_ru": "Крупная плодоядная рыба, родственная пиранье. Серебристая с красным брюхом. Мирный гигант.",
        "characteristics": {
            "size": "very large (60-80 cm)",
            "color": ["silver", "red belly", "gray"],
            "features": ["large size", "red belly", "flat teeth"],
            "habitat": ["Amazon", "large rivers", "flooded forests"],
            "behavior": ["peaceful", "schooling", "active"]
        }
    },
    {
        "id": "silver-dollar",
        "name_en": "Silver Dollar",
        "name_ru": "Серебряный доллар",
        "latin_name": "Metynnis argenteus",
        "family": "Serrasalmidae",
        "family_ru": "Сerrasalmidae",
        "category": "tropical",
        "environment": "river",
        "description_en": "Disc-shaped silver fish. Peaceful plant eater. Related to piranha but vegetarian.",
        "description_ru": "Дискообразная серебристая рыба. Мирный растительноядный. Родственник пираньи, но вегетарианец.",
        "characteristics": {
            "size": "medium (12-15 cm)",
            "color": ["silver", "gray"],
            "features": ["disc shape", "silver body", "peaceful"],
            "habitat": ["South America", "slow rivers", "planted areas"],
            "behavior": ["peaceful", "schooling", "plant eater"]
        }
    },
    {
        "id": "headstander",
        "name_en": "Headstander",
        "name_ru": "Рыба, стоящая головой вверх",
        "latin_name": "Abramites hypselonotus",
        "family": "Anostomidae",
        "family_ru": "Аностомовые",
        "category": "tropical",
        "environment": "river",
        "description_en": "Unique fish that swims at head-down angle. Brown with dark vertical bands.",
        "description_ru": "Уникальная рыба, которая плавает под углом головой вниз. Коричневая с тёмными вертикальными полосами.",
        "characteristics": {
            "size": "medium (12-15 cm)",
            "color": ["brown", "gold", "black"],
            "features": ["head-down swimming", "vertical bands", "unique"],
            "habitat": ["South America", "slow waters", "planted areas"],
            "behavior": ["peaceful", "active", "unusual"]
        }
    }
]

def format_characteristics(chars):
    """Format characteristics dictionary to JS object string"""
    lines = []
    for key, value in chars.items():
        if isinstance(value, list):
            lines.append(f"            {key}: {json.dumps(value)}")
        else:
            lines.append(f"            {key}: '{value}'")
    return "{\n" + ",\n".join(lines) + "\n        }"

def format_fish_entry(fish, index):
    """Format a fish entry as JavaScript object"""
    entry = f"""    {{
        id: '{fish['id']}',
        name_en: '{fish['name_en']}',
        name_ru: '{fish['name_ru']}',
        latin_name: '{fish['latin_name']}',
        family: '{fish['family']}',
        family_ru: '{fish['family_ru']}',
        category: '{fish['category']}',
        environment: '{fish['environment']}',
        description_en: '{fish['description_en']}',
        description_ru: '{fish['description_ru']}',
        characteristics: {format_characteristics(fish['characteristics'])}
    }}"""
    return entry

def main():
    # Read existing file
    with open('fish-river-tropical.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the export statement
    lines = content.split('\n')
    
    # Find where the array ends
    insert_index = None
    for i, line in enumerate(lines):
        if 'export const riverTropicalFish' in line:
            insert_index = i + 1
            break
    
    if insert_index is None:
        print("Error: Could not find riverTropicalFish export")
        return
    
    # Generate new entries
    new_entries = []
    for i, fish in enumerate(tropical_freshwater_fish):
        new_entries.append(format_fish_entry(fish, i))
    
    # Find the closing bracket of the array
    array_end_index = None
    bracket_count = 0
    for i in range(insert_index, len(lines)):
        if '[' in lines[i]:
            bracket_count += 1
        if ']' in lines[i]:
            bracket_count -= 1
            if bracket_count == 0:
                array_end_index = i
                break
    
    if array_end_index is None:
        print("Error: Could not find end of array")
        return
    
    # Build new content
    before_array_end = '\n'.join(lines[:array_end_index])
    after_array_end = '\n'.join(lines[array_end_index:])
    
    # Add new entries with commas
    new_content = before_array_end + ',\n' + ',\n'.join(new_entries) + '\n' + after_array_end
    
    # Write back
    with open('fish-river-tropical.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Added {len(tropical_freshwater_fish)} tropical freshwater fish species to fish-river-tropical.js")
    print("Species added:")
    for fish in tropical_freshwater_fish:
        print(f"  - {fish['name_en']} ({fish['name_ru']})")

if __name__ == '__main__':
    main()
