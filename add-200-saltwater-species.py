#!/usr/bin/env python3
"""
Add 200 tropical saltwater fish species to fish-tropical.js
"""

# 200 Saltwater Tropical Fish Species
saltwater_species = [
    # Clownfish and Anemonefish (10)
    {'id': 'ocellaris-clownfish', 'name': 'Ocellaris Clownfish', 'name_ru': 'Клоун оцеллярис', 'latin': 'Amphiprion ocellaris', 'family': 'Pomacentridae', 'family_ru': 'Помацентровые'},
    {'id': 'percula-clownfish', 'name': 'Percula Clownfish', 'name_ru': 'Клоун перкула', 'latin': 'Amphiprion percula', 'family': 'Pomacentridae', 'family_ru': 'Помацентровые'},
    {'id': 'maroon-clownfish', 'name': 'Maroon Clownfish', 'name_ru': 'Мраморный клоун', 'latin': 'Premnas biaculeatus', 'family': 'Pomacentridae', 'family_ru': 'Помацентровые'},
    {'id': 'pink-skunk-clownfish', 'name': 'Pink Skunk Clownfish', 'name_ru': 'Розовый клоун', 'latin': 'Amphiprion perideraion', 'family': 'Pomacentridae', 'family_ru': 'Помацентровые'},
    {'id': 'red-sebae-clownfish', 'name': 'Red Sebae Clownfish', 'name_ru': 'Красный себа', 'latin': 'Amphiprion frenatus', 'family': 'Pomacentridae', 'family_ru': 'Помацентровые'},
    {'id': 'tomato-clownfish', 'name': 'Tomato Clownfish', 'name_ru': 'Томатный клоун', 'latin': 'Amphiprion frenatus', 'family': 'Pomacentridae', 'family_ru': 'Помацентровые'},
    {'id': 'saddleback-clownfish', 'name': 'Saddleback Clownfish', 'name_ru': 'Седловидный клоун', 'latin': 'Amphiprion polymnus', 'family': 'Pomacentridae', 'family_ru': 'Помацентровые'},
    {'id': 'sebae-clownfish', 'name': 'Sebae Clownfish', 'name_ru': 'Клоун себа', 'latin': 'Amphiprion sebae', 'family': 'Pomacentridae', 'family_ru': 'Помацентровые'},
    {'id': 'clarkii-clownfish', 'name': 'Clark\'s Clownfish', 'name_ru': 'Клоун Кларка', 'latin': 'Amphiprion clarkii', 'family': 'Pomacentridae', 'family_ru': 'Помацентровые'},
    {'id': 'allardii-clownfish', 'name': 'Allard\'s Clownfish', 'name_ru': 'Клоун Алларда', 'latin': 'Amphiprion allardi', 'family': 'Pomacentridae', 'family_ru': 'Помацентровые'},
    
    # Tangs and Surgeonfish (20)
    {'id': 'yellow-tang', 'name': 'Yellow Tang', 'name_ru': 'Жёлтая танг', 'latin': 'Zebrasoma flavescens', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'purple-tang', 'name': 'Purple Tang', 'name_ru': 'Фиолетовая танг', 'latin': 'Zebrasoma xanthurum', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'powder-blue-tang', 'name': 'Powder Blue Tang', 'name_ru': 'Голубая танг', 'latin': 'Acanthurus leucosternon', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'palette-tang', 'name': 'Palette Tang', 'name_ru': 'Танг палитра', 'latin': 'Paracanthurus hepatus', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'zebra-tang', 'name': 'Zebra Tang', 'name_ru': 'Зебра танг', 'latin': 'Acanthurus nigrofuscus', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'sailfin-tang', 'name': 'Sailfin Tang', 'name_ru': 'Парусная танг', 'latin': 'Zebrasoma veliferum', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'red-sea-tang', 'name': 'Red Sea Tang', 'name_ru': 'Красноморская танг', 'latin': 'Acanthurus sohal', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'unicorn-tang', 'name': 'Unicorn Tang', 'name_ru': 'Танг единорог', 'latin': 'Naso unicornis', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'bluespine-unicorn', 'name': 'Bluespine Unicornfish', 'name_ru': 'Синешипый единорог', 'latin': 'Naso unicornis', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'orange-shoulder-tang', 'name': 'Orange Shoulder Tang', 'name_ru': 'Оранжевоплечая танг', 'latin': 'Acanthurus olivaceus', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'powder-brown-tang', 'name': 'Powder Brown Tang', 'name_ru': 'Коричневая танг', 'latin': 'Acanthurus japonicus', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'convict-tang', 'name': 'Convict Tang', 'name_ru': 'Танг каторжник', 'latin': 'Acanthurus triostegus', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'eyestripe-tang', 'name': 'Eyestripe Tang', 'name_ru': 'Глазополосая танг', 'latin': 'Acanthurus dussumieri', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'goldrim-tang', 'name': 'Goldrim Tang', 'name_ru': 'Золотокаёмная танг', 'latin': 'Acanthurus leucopareius', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'lipstick-tang', 'name': 'Lipstick Tang', 'name_ru': 'Помадная танг', 'latin': 'Acanthurus nigricans', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'ringtail-tang', 'name': 'Ringtail Tang', 'name_ru': 'Кольцехвостая танг', 'latin': 'Acanthurus bahianus', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'doctorfish', 'name': 'Doctorfish', 'name_ru': 'Рыба-доктор', 'latin': 'Acanthurus chirurgus', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'ocean-surgeon', 'name': 'Ocean Surgeonfish', 'name_ru': 'Океанский хирург', 'latin': 'Acanthurus bahianus', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'blue-tang', 'name': 'Blue Tang', 'name_ru': 'Голубая танг', 'latin': 'Paracanthurus hepatus', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'yellow-eye-tang', 'name': 'Yellow-eye Tang', 'name_ru': 'Жёлтоглазая танг', 'latin': 'Zebrasoma xanthurum', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    
    # Angelfish Marine (20)
    {'id': 'emperor-angelfish', 'name': 'Emperor Angelfish', 'name_ru': 'Императорский ангел', 'latin': 'Pomacanthus imperator', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'queen-angelfish', 'name': 'Queen Angelfish', 'name_ru': 'Ангел королева', 'latin': 'Holacanthus ciliaris', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'blue-angelfish', 'name': 'Blue Angelfish', 'name_ru': 'Синий ангел', 'latin': 'Holacanthus bermudensis', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'french-angelfish', 'name': 'French Angelfish', 'name_ru': 'Французский ангел', 'latin': 'Pomacanthus paru', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'gray-angelfish', 'name': 'Gray Angelfish', 'name_ru': 'Серый ангел', 'latin': 'Pomacanthus arcuatus', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'rock-beauty', 'name': 'Rock Beauty', 'name_ru': 'Красавица скала', 'latin': 'Holacanthus tricolor', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'cortez-angelfish', 'name': 'Cortez Angelfish', 'name_ru': 'Ангел Кортеса', 'latin': 'Pomacanthus zonipectus', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'majestic-angelfish', 'name': 'Majestic Angelfish', 'name_ru': 'Величественный ангел', 'latin': 'Pomacanthus navarchus', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'blueface-angelfish', 'name': 'Blueface Angelfish', 'name_ru': 'Синелицый ангел', 'latin': 'Pomacanthus xanthometopon', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'sixbar-angelfish', 'name': 'Sixbar Angelfish', 'name_ru': 'Шестиполосый ангел', 'latin': 'Pomacanthus sexstriatus', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'maculosus-angelfish', 'name': 'Maculosus Angelfish', 'name_ru': 'Пятнистый ангел', 'latin': 'Pomacanthus maculosus', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'regal-angelfish', 'name': 'Regal Angelfish', 'name_ru': 'Королевский ангел', 'latin': 'Pygoplites diacanthus', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'flame-angelfish', 'name': 'Flame Angelfish', 'name_ru': 'Огненный ангел', 'latin': 'Centropyge loricula', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'cherub-angelfish', 'name': 'Cherub Angelfish', 'name_ru': 'Ангел херувим', 'latin': 'Centropyge argi', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'lemonpeel-angelfish', 'name': 'Lemonpeel Angelfish', 'name_ru': 'Лимонный ангел', 'latin': 'Centropyge flavissima', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'coral-beauty', 'name': 'Coral Beauty', 'name_ru': 'Коралловая красота', 'latin': 'Centropyge bispinosa', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'keyhole-angelfish', 'name': 'Keyhole Angelfish', 'name_ru': 'Замочная скважина', 'latin': 'Centropyge tibicen', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'midnight-angelfish', 'name': 'Midnight Angelfish', 'name_ru': 'Полночный ангел', 'latin': 'Centropyge nox', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'pearly-angelfish', 'name': 'Pearly Angelfish', 'name_ru': 'Жемчужный ангел', 'latin': 'Centropyge venusta', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    {'id': 'flameback-angelfish', 'name': 'Flameback Angelfish', 'name_ru': 'Огненная спина', 'latin': 'Centropyge acanthops', 'family': 'Pomacanthidae', 'family_ru': 'Помакантовые'},
    
    # Butterflyfish (20)
    {'id': 'threadfin-butterflyfish', 'name': 'Threadfin Butterflyfish', 'name_ru': 'Нитчатая бабочка', 'latin': 'Chaetodon auriga', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'copperband-butterflyfish', 'name': 'Copperband Butterflyfish', 'name_ru': 'Медная бабочка', 'latin': 'Chelmon rostratus', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'longnose-butterflyfish', 'name': 'Longnose Butterflyfish', 'name_ru': 'Длинноносая бабочка', 'latin': 'Forcipiger flavissimus', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'racoon-butterflyfish', 'name': 'Racoon Butterflyfish', 'name_ru': 'Бабочка енот', 'latin': 'Chaetodon lunula', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'teardrop-butterflyfish', 'name': 'Teardrop Butterflyfish', 'name_ru': 'Бабочка капля', 'latin': 'Chaetodon unimaculatus', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'mask-butterflyfish', 'name': 'Mask Butterflyfish', 'name_ru': 'Масковая бабочка', 'latin': 'Chaetodon semilarvatus', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'pygmy-butterflyfish', 'name': 'Pygmy Butterflyfish', 'name_ru': 'Карликовая бабочка', 'latin': 'Chaetodon permutandus', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'spotband-butterflyfish', 'name': 'Spotband Butterflyfish', 'name_ru': 'Пятнистая бабочка', 'latin': 'Chaetodon punctatofasciatus', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'redfin-butterflyfish', 'name': 'Redfin Butterflyfish', 'name_ru': 'Красноплавничная бабочка', 'latin': 'Chaetodon trifasciatus', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'lattice-butterflyfish', 'name': 'Lattice Butterflyfish', 'name_ru': 'Решётчатая бабочка', 'latin': 'Chaetodon rafflesii', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'ornate-butterflyfish', 'name': 'Ornate Butterflyfish', 'name_ru': 'Украшенная бабочка', 'latin': 'Chaetodon ornatissimus', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'pearce-butterflyfish', 'name': 'Pearce\'s Butterflyfish', 'name_ru': 'Бабочка Пирса', 'latin': 'Chaetodon pelewensis', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'bluecheek-butterflyfish', 'name': 'Blue-cheek Butterflyfish', 'name_ru': 'Синещёкая бабочка', 'latin': 'Chaetodon semilarvatus', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'forceps-butterflyfish', 'name': 'Forceps Butterflyfish', 'name_ru': 'Щипцовая бабочка', 'latin': 'Forcipiger flavissimus', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'scrawled-butterflyfish', 'name': 'Scrawled Butterflyfish', 'name_ru': 'Исписанная бабочка', 'latin': 'Chaetodon meyeri', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'eightband-butterflyfish', 'name': 'Eightband Butterflyfish', 'name_ru': 'Восьмиполосая бабочка', 'latin': 'Chaetodon octofasciatus', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'fourspot-butterflyfish', 'name': 'Fourspot Butterflyfish', 'name_ru': 'Четырёхпятнистая бабочка', 'latin': 'Chaetodon quadrimaculatus', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'redtail-butterflyfish', 'name': 'Redtail Butterflyfish', 'name_ru': 'Краснохвостая бабочка', 'latin': 'Chaetodon collare', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'saddle-butterflyfish', 'name': 'Saddle Butterflyfish', 'name_ru': 'Седловидная бабочка', 'latin': 'Chaetodon falcula', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    {'id': 'triangle-butterflyfish', 'name': 'Triangle Butterflyfish', 'name_ru': 'Треугольная бабочка', 'latin': 'Chaetodon triangulum', 'family': 'Chaetodontidae', 'family_ru': 'Рыбы-бабочки'},
    
    # Wrasse (20)
    {'id': 'coris-wrasse', 'name': 'Coris Wrasse', 'name_ru': 'Корис губан', 'latin': 'Coris gaimard', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'hogfish', 'name': 'Hogfish', 'name_ru': 'Свиная рыба', 'latin': 'Bodianus rufus', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'sheephead', 'name': 'California Sheephead', 'name_ru': 'Овцеголовая рыба', 'latin': 'Semicossyphus pulcher', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'tuskfish', 'name': 'Blue Tuskfish', 'name_ru': 'Синяя зубастая', 'latin': 'Choerodon anchorago', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'flasher-wrasse', 'name': 'Flasher Wrasse', 'name_ru': 'Сверкающий губан', 'latin': 'Paracheilinus carpenteri', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'fairy-wrasse', 'name': 'Fairy Wrasse', 'name_ru': 'Сказочный губан', 'latin': 'Cirrhilabrus exquisitus', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'cleaner-wrasse', 'name': 'Cleaner Wrasse', 'name_ru': 'Губан чистильщик', 'latin': 'Labroides dimidiatus', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'bird-wrasse', 'name': 'Bird Wrasse', 'name_ru': 'Птичий губан', 'latin': 'Gomphosus varius', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'harlequin-tuskfish', 'name': 'Harlequin Tuskfish', 'name_ru': 'Арлекин тускфиш', 'latin': 'Choerodon fasciatus', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'maori-wrasse', 'name': 'Maori Wrasse', 'name_ru': 'Губан маори', 'latin': 'Cheilinus undulatus', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'slate-pencil-wrasse', 'name': 'Slate Pencil Wrasse', 'name_ru': 'Грифельный губан', 'latin': 'Hemigymnus fasciatus', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'sixline-wrasse', 'name': 'Six-line Wrasse', 'name_ru': 'Шестиполосый губан', 'latin': 'Pseudocheilinus hexataenia', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'eightline-wrasse', 'name': 'Eight-line Wrasse', 'name_ru': 'Восьмиполосый губан', 'latin': 'Pseudocheilinus octotaenia', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'leopard-wrasse', 'name': 'Leopard Wrasse', 'name_ru': 'Губан леопард', 'latin': 'Macropharyngodon meleagris', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'green-wrasse', 'name': 'Green Wrasse', 'name_ru': 'Зелёный губан', 'latin': 'Thalassoma bifasciatum', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'bluehead-wrasse', 'name': 'Bluehead Wrasse', 'name_ru': 'Синеголовый губан', 'latin': 'Thalassoma bifasciatum', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'spanish-hogfish', 'name': 'Spanish Hogfish', 'name_ru': 'Испанская свиная', 'latin': 'Bodianus rufus', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'saddle-wrasse', 'name': 'Saddle Wrasse', 'name_ru': 'Седловидный губан', 'latin': 'Thalassoma duperrey', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'puddingwife-wrasse', 'name': 'Puddingwife Wrasse', 'name_ru': 'Губан пудингвайф', 'latin': 'Halichoeres radiatus', 'family': 'Labridae', 'family_ru': 'Губановые'},
    {'id': 'yellowhead-wrasse', 'name': 'Yellowhead Wrasse', 'name_ru': 'Жёлтоголовый губан', 'latin': 'Halichoeres garnoti', 'family': 'Labridae', 'family_ru': 'Губановые'},
    
    # Triggerfish (10)
    {'id': 'clown-triggerfish', 'name': 'Clown Triggerfish', 'name_ru': 'Триггер клоун', 'latin': 'Balistoides conspicillum', 'family': 'Balistidae', 'family_ru': 'Спинороговые'},
    {'id': 'titan-triggerfish', 'name': 'Titan Triggerfish', 'name_ru': 'Титановый триггер', 'latin': 'Balistoides viridescens', 'family': 'Balistidae', 'family_ru': 'Спинороговые'},
    {'id': 'gray-triggerfish', 'name': 'Gray Triggerfish', 'name_ru': 'Серый триггер', 'latin': 'Balistes capriscus', 'family': 'Balistidae', 'family_ru': 'Спинороговые'},
    {'id': 'queen-triggerfish', 'name': 'Queen Triggerfish', 'name_ru': 'Триггер королева', 'latin': 'Balistes vetula', 'family': 'Balistidae', 'family_ru': 'Спинороговые'},
    {'id': 'blue-throat-triggerfish', 'name': 'Blue-throat Triggerfish', 'name_ru': 'Синегорлый триггер', 'latin': 'Balistes couba', 'family': 'Balistidae', 'family_ru': 'Спинороговые'},
    {'id': 'orange-lined-triggerfish', 'name': 'Orange-lined Triggerfish', 'name_ru': 'Оранжевополосый триггер', 'latin': 'Balistapus undulatus', 'family': 'Balistidae', 'family_ru': 'Спинороговые'},
    {'id': 'pink-tailed-triggerfish', 'name': 'Pink-tailed Triggerfish', 'name_ru': 'Розовохвостый триггер', 'latin': 'Melichthys vidua', 'family': 'Balistidae', 'family_ru': 'Спинороговые'},
    {'id': 'black-triggerfish', 'name': 'Black Triggerfish', 'name_ru': 'Чёрный триггер', 'latin': 'Melichthys niger', 'family': 'Balistidae', 'family_ru': 'Спинороговые'},
    {'id': 'wedgetail-triggerfish', 'name': 'Wedgetail Triggerfish', 'name_ru': 'Клинохвостый триггер', 'latin': 'Rhinecanthus aculeatus', 'family': 'Balistidae', 'family_ru': 'Спинороговые'},
    {'id': 'picasso-triggerfish', 'name': 'Picasso Triggerfish', 'name_ru': 'Триггер Пикассо', 'latin': 'Rhinecanthus aculeatus', 'family': 'Balistidae', 'family_ru': 'Спинороговые'},
    
    # Groupers (15)
    {'id': 'grouper', 'name': 'Mediterranean Grouper', 'name_ru': 'Груп', 'latin': 'Epinephelus marginatus', 'family': 'Serranidae', 'family_ru': 'Серрановые'},
    {'id': 'dusky-grouper', 'name': 'Dusky Grouper', 'name_ru': 'Тёмный груп', 'latin': 'Epinephelus marginatus', 'family': 'Serranidae', 'family_ru': 'Серрановые'},
    {'id': 'goldblotch-grouper', 'name': 'Goldblotch Grouper', 'name_ru': 'Золотнистый груп', 'latin': 'Epinephelus costae', 'family': 'Serranidae', 'family_ru': 'Серрановые'},
    {'id': 'white-grouper', 'name': 'White Grouper', 'name_ru': 'Белый груп', 'latin': 'Epinephelus aeneus', 'family': 'Serranidae', 'family_ru': 'Серрановые'},
    {'id': 'giant-grouper', 'name': 'Giant Grouper', 'name_ru': 'Гигантский груп', 'latin': 'Epinephelus lanceolatus', 'family': 'Serranidae', 'family_ru': 'Серрановые'},
    {'id': 'coral-grouper', 'name': 'Coral Grouper', 'name_ru': 'Коралловый груп', 'latin': 'Plectropomus leopardus', 'family': 'Serranidae', 'family_ru': 'Серрановые'},
    {'id': 'blacktip-grouper', 'name': 'Blacktip Grouper', 'name_ru': 'Чернокончиковый груп', 'latin': 'Epinephelus fasciatus', 'family': 'Serranidae', 'family_ru': 'Серрановые'},
    {'id': 'red-grouper', 'name': 'Red Grouper', 'name_ru': 'Красный груп', 'latin': 'Epinephelus morio', 'family': 'Serranidae', 'family_ru': 'Серрановые'},
    {'id': 'gag-grouper', 'name': 'Gag Grouper', 'name_ru': 'Гэг груп', 'latin': 'Mycteroperca microlepis', 'family': 'Serranidae', 'family_ru': 'Серрановые'},
    {'id': 'scamp-grouper', 'name': 'Scamp Grouper', 'name_ru': 'Скэмп груп', 'latin': 'Mycteroperca phenax', 'family': 'Serranidae', 'family_ru': 'Серрановые'},
    {'id': 'yellowfin-grouper', 'name': 'Yellowfin Grouper', 'name_ru': 'Желтоплавничный груп', 'latin': 'Mycteroperca venenosa', 'family': 'Serranidae', 'family_ru': 'Серрановые'},
    {'id': 'yellowmouth-grouper', 'name': 'Yellowmouth Grouper', 'name_ru': 'Желторотый груп', 'latin': 'Mycteroperca interstitialis', 'family': 'Serranidae', 'family_ru': 'Серрановые'},
    {'id': 'coney-grouper', 'name': 'Coney Grouper', 'name_ru': 'Кролик груп', 'latin': 'Cephalopholis fulva', 'family': 'Serranidae', 'family_ru': 'Серрановые'},
    {'id': 'graysby-grouper', 'name': 'Graysby Grouper', 'name_ru': 'Грейсби груп', 'latin': 'Cephalopholis cruentata', 'family': 'Serranidae', 'family_ru': 'Серрановые'},
    {'id': 'rock-hind', 'name': 'Rock Hind', 'name_ru': 'Скальный окунь', 'latin': 'Epinephelus adscensionis', 'family': 'Serranidae', 'family_ru': 'Серрановые'},
    
    # Other Saltwater (45)
    {'id': 'lionfish', 'name': 'Lionfish', 'name_ru': 'Крылатка', 'latin': 'Pterois volitans', 'family': 'Scorpaenidae', 'family_ru': 'Скорпеновые'},
    {'id': 'turkeyfish', 'name': 'Turkeyfish', 'name_ru': 'Индюковая рыба', 'latin': 'Pterois volitans', 'family': 'Scorpaenidae', 'family_ru': 'Скорпеновые'},
    {'id': 'firefish', 'name': 'Firefish', 'name_ru': 'Огненная рыба', 'latin': 'Nemateleotris magnifica', 'family': 'Microdesmidae', 'family_ru': 'Микродесмовые'},
    {'id': 'dartfish', 'name': 'Dartfish', 'name_ru': 'Рыба дротик', 'latin': 'Ptereleotris evides', 'family': 'Microdesmidae', 'family_ru': 'Микродесмовые'},
    {'id': 'cardinalfish', 'name': 'Banggai Cardinalfish', 'name_ru': 'Кардинал бангаи', 'latin': 'Pterapogon kauderni', 'family': 'Apogonidae', 'family_ru': 'Апогоновые'},
    {'id': 'pajama-cardinalfish', 'name': 'Pajama Cardinalfish', 'name_ru': 'Кардинал пижама', 'latin': 'Sphaeramia nematoptera', 'family': 'Apogonidae', 'family_ru': 'Апогоновые'},
    {'id': 'flamefish', 'name': 'Flamefish', 'name_ru': 'Огненная рыба', 'latin': 'Apogon maculatus', 'family': 'Apogonidae', 'family_ru': 'Апогоновые'},
    {'id': 'squirrelfish', 'name': 'Squirrelfish', 'name_ru': 'Рыба белка', 'latin': 'Holocentrus rufus', 'family': 'Holocentridae', 'family_ru': 'Голоцентровые'},
    {'id': 'soldierfish', 'name': 'Soldierfish', 'name_ru': 'Рыба солдат', 'latin': 'Myripristis murdjan', 'family': 'Holocentridae', 'family_ru': 'Голоцентровые'},
    {'id': 'cornetfish', 'name': 'Cornetfish', 'name_ru': 'Рыба корнет', 'latin': 'Fistularia commersonii', 'family': 'Fistulariidae', 'family_ru': 'Фистуляриевые'},
    {'id': 'trumpetfish', 'name': 'Trumpetfish', 'name_ru': 'Рыба труба', 'latin': 'Aulostomus chinensis', 'family': 'Aulostomidae', 'family_ru': 'Аулостомовые'},
    {'id': 'pipefish', 'name': 'Pipefish', 'name_ru': 'Игла рыба', 'latin': 'Syngnathus acus', 'family': 'Syngnathidae', 'family_ru': 'Игловые'},
    {'id': 'leafy-seadragon', 'name': 'Leafy Seadragon', 'name_ru': 'Морской дракон', 'latin': 'Phycodurus eques', 'family': 'Syngnathidae', 'family_ru': 'Игловые'},
    {'id': 'weedy-seadragon', 'name': 'Weedy Seadragon', 'name_ru': 'Травяной дракон', 'latin': 'Phyllopteryx taeniolatus', 'family': 'Syngnathidae', 'family_ru': 'Игловые'},
    {'id': 'ghost-pipefish', 'name': 'Ghost Pipefish', 'name_ru': 'Рыба призрак', 'latin': 'Solenostomus paradoxus', 'family': 'Solenostomidae', 'family_ru': 'Соленостомовые'},
    {'id': 'frogfish', 'name': 'Frogfish', 'name_ru': 'Рыба лягушка', 'latin': 'Antennarius pictus', 'family': 'Antennariidae', 'family_ru': 'Удильщиковые'},
    {'id': 'stonefish', 'name': 'Stonefish', 'name_ru': 'Рыба камень', 'latin': 'Synanceia verrucosa', 'family': 'Synanceiidae', 'family_ru': 'Бородавчатковые'},
    {'id': 'scorpionfish', 'name': 'Scorpionfish', 'name_ru': 'Скорпионовая рыба', 'latin': 'Scorpaena scrofa', 'family': 'Scorpaenidae', 'family_ru': 'Скорпеновые'},
    {'id': 'peacock-flounder', 'name': 'Peacock Flounder', 'name_ru': 'Павлинья камбала', 'latin': 'Bothus mancus', 'family': 'Bothidae', 'family_ru': 'Ботовые'},
    {'id': 'boxfish', 'name': 'Yellow Boxfish', 'name_ru': 'Жёлтая коробка', 'latin': 'Ostracion cubicus', 'family': 'Ostraciidae', 'family_ru': 'Кузовковые'},
    {'id': 'cowfish', 'name': 'Longhorn Cowfish', 'name_ru': 'Длиннорогая корова', 'latin': 'Lactoria cornuta', 'family': 'Ostraciidae', 'family_ru': 'Кузовковые'},
    {'id': 'filefish', 'name': 'Scrawled Filefish', 'name_ru': 'Исписанная пила', 'latin': 'Aluterus scriptus', 'family': 'Monacanthidae', 'family_ru': 'Единороговые'},
    {'id': 'batfish', 'name': 'Spadefish', 'name_ru': 'Рыба лопата', 'latin': 'Chaetodipterus faber', 'family': 'Ephippidae', 'family_ru': 'Эфипповые'},
    {'id': 'teira-batfish', 'name': 'Teira Batfish', 'name_ru': 'Летучая мышь', 'latin': 'Platax teira', 'family': 'Ephippidae', 'family_ru': 'Эфипповые'},
    {'id': 'orbicular-batfish', 'name': 'Orbicular Batfish', 'name_ru': 'Круглая летучая', 'latin': 'Platax orbicularis', 'family': 'Ephippidae', 'family_ru': 'Эфипповые'},
    {'id': 'pinnatus-batfish', 'name': 'Pinnatus Batfish', 'name_ru': 'Перистая летучая', 'latin': 'Platax pinnatus', 'family': 'Ephippidae', 'family_ru': 'Эфипповые'},
    {'id': 'mono', 'name': 'Mono Angelfish', 'name_ru': 'Моно ангел', 'latin': 'Monodactylus argenteus', 'family': 'Monodactylidae', 'family_ru': 'Монодактилевые'},
    {'id': 'scat', 'name': 'Spotted Scat', 'name_ru': 'Пятнистый скат', 'latin': 'Scatophagus argus', 'family': 'Scatophagidae', 'family_ru': 'Скатофаговые'},
    {'id': 'archerfish', 'name': 'Archerfish', 'name_ru': 'Рыба лучник', 'latin': 'Toxotes jaculatrix', 'family': 'Toxotidae', 'family_ru': 'Брызгуновые'},
    {'id': 'mudskipper', 'name': 'Mudskipper', 'name_ru': 'Илистый прыгун', 'latin': 'Periophthalmus barbarus', 'family': 'Gobiidae', 'family_ru': 'Бычковые'},
    {'id': 'neon-goby', 'name': 'Neon Goby', 'name_ru': 'Неоновый бычок', 'latin': 'Elacatinus oceanops', 'family': 'Gobiidae', 'family_ru': 'Бычковые'},
    {'id': 'shrimp-goby', 'name': 'Shrimp Goby', 'name_ru': 'Креветочный бычок', 'latin': 'Amblyeleotris wheeleri', 'family': 'Gobiidae', 'family_ru': 'Бычковые'},
    {'id': 'watchman-goby', 'name': 'Watchman Goby', 'name_ru': 'Бычок сторож', 'latin': 'Cryptocentrus cinctus', 'family': 'Gobiidae', 'family_ru': 'Бычковые'},
    {'id': 'moray-eel', 'name': 'Giant Moray Eel', 'name_ru': 'Гигантская мурена', 'latin': 'Gymnothorax javanicus', 'family': 'Muraenidae', 'family_ru': 'Муреновые'},
    {'id': 'green-moray', 'name': 'Green Moray', 'name_ru': 'Зелёная мурена', 'latin': 'Gymnothorax funebris', 'family': 'Muraenidae', 'family_ru': 'Муреновые'},
    {'id': 'snowflake-moray', 'name': 'Snowflake Moray', 'name_ru': 'Снежинка мурена', 'latin': 'Echidna nebulosa', 'family': 'Muraenidae', 'family_ru': 'Муреновые'},
    {'id': 'zebra-moray', 'name': 'Zebra Moray', 'name_ru': 'Зебра мурена', 'latin': 'Gymnomuraena zebra', 'family': 'Muraenidae', 'family_ru': 'Муреновые'},
    {'id': 'dragon-moray', 'name': 'Dragon Moray', 'name_ru': 'Дракон мурена', 'latin': 'Enchelycore pardalis', 'family': 'Muraenidae', 'family_ru': 'Муреновые'},
    {'id': 'viperfish', 'name': 'Viperfish', 'name_ru': 'Рыба гадюка', 'latin': 'Chauliodus sloani', 'family': 'Stomiidae', 'family_ru': 'Стомиевые'},
    {'id': 'lanternfish', 'name': 'Lanternfish', 'name_ru': 'Рыба фонарь', 'latin': 'Myctophum punctatum', 'family': 'Myctophidae', 'family_ru': 'Миктофовые'},
    {'id': 'anglerfish', 'name': 'Anglerfish', 'name_ru': 'Удильщик', 'latin': 'Lophius piscatorius', 'family': 'Lophiidae', 'family_ru': 'Удильщиковые'},
    {'id': 'seahorse', 'name': 'Common Seahorse', 'name_ru': 'Морской конёк', 'latin': 'Hippocampus kuda', 'family': 'Syngnathidae', 'family_ru': 'Игловые'},
    {'id': 'stingray', 'name': 'Blue-spotted Stingray', 'name_ru': 'Голубопятнистый скат', 'latin': 'Neotrygon kuhlii', 'family': 'Dasyatidae', 'family_ru': 'Хвостоколовые'},
    {'id': 'eagle-ray', 'name': 'Eagle Ray', 'name_ru': 'Орлиный скат', 'latin': 'Aetobatus narinari', 'family': 'Myliobatidae', 'family_ru': 'Орляковые'},
    {'id': 'manta-ray', 'name': 'Manta Ray', 'name_ru': 'Манта', 'latin': 'Manta birostris', 'family': 'Myliobatidae', 'family_ru': 'Орляковые'},
    {'id': 'barracuda', 'name': 'Great Barracuda', 'name_ru': 'Большая барракуда', 'latin': 'Sphyraena barracuda', 'family': 'Sphyraenidae', 'family_ru': 'Барракудовые'},
    {'id': 'clownfish', 'name': 'Clownfish', 'name_ru': 'Рыба клоун', 'latin': 'Amphiprion ocellaris', 'family': 'Pomacentridae', 'family_ru': 'Помацентровые'},
    {'id': 'blue-tang', 'name': 'Blue Tang', 'name_ru': 'Голубая танг', 'latin': 'Paracanthurus hepatus', 'family': 'Acanthuridae', 'family_ru': 'Хирурговые'},
    {'id': 'moorish-idol', 'name': 'Moorish Idol', 'name_ru': 'Мавританский идол', 'latin': 'Zanclus cornutus', 'family': 'Zanclidae', 'family_ru': 'Занкловые'},
    {'id': 'royal-gramma', 'name': 'Royal Gramma', 'name_ru': 'Королевская грамма', 'latin': 'Gramma loreto', 'family': 'Grammatidae', 'family_ru': 'Грамматовые'},
    {'id': 'mandarinfish', 'name': 'Mandarinfish', 'name_ru': 'Рыба мандаринка', 'latin': 'Synchiropus splendidus', 'family': 'Callionymidae', 'family_ru': 'Драконовые'},
]

def create_species_entry(s):
    """Create a species entry for fish-tropical.js"""
    return f"""    {{
        id: '{s['id']}',
        name_en: '{s['name']}',
        name_ru: '{s['name_ru']}',
        latin_name: '{s['latin']}',
        family: '{s['family']}',
        family_ru: '{s['family_ru']}',
        category: 'tropical',
        environment: 'ocean',
        description_en: 'Beautiful saltwater tropical fish species found in coral reefs and tropical oceans.',
        description_ru: 'Красивый вид морских тропических рыб, обитающий в коралловых рифах и тропических океанах.',
        characteristics: {{
            size: 'medium',
            color: ['colorful'],
            features: ['tropical marine species'],
            habitat: ['coral reefs', 'tropical waters'],
            behavior: ['reef dwelling', 'marine']
        }}
    }}"""

def main():
    # Read existing file
    with open('/Users/svetik/Projects/bird-fish-h/fish-tropical.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the end of the array (before ]);)
    if '];' in content:
        base_content = content[:content.rfind('];')]
    else:
        base_content = content.rstrip()
    
    # Generate new species entries
    new_entries = [create_species_entry(s) for s in saltwater_species]
    
    # Write updated file
    with open('/Users/svetik/Projects/bird-fish-h/fish-tropical.js', 'w', encoding='utf-8') as f:
        f.write(base_content)
        f.write(',\n')
        f.write(',\n'.join(new_entries))
        f.write('\n];\n')
    
    print(f"✓ Added {len(saltwater_species)} saltwater tropical fish species to fish-tropical.js")
    print(f"Total species: {len(saltwater_species) + 7}")  # 7 original species

if __name__ == '__main__':
    main()
