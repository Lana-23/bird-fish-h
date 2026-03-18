#!/usr/bin/env python3
"""
Add 50 tropical freshwater fish species to fish-river-tropical.js
"""

# 50 Tropical Freshwater Fish Species
freshwater_species = [
    # Tetras (15)
    {'id': 'neon-tetra', 'name': 'Neon Tetra', 'name_ru': 'Неоновая тетра', 'latin': 'Paracheirodon innesi', 'family': 'Characidae', 'family_ru': 'Харациновые'},
    {'id': 'cardinal-tetra', 'name': 'Cardinal Tetra', 'name_ru': 'Кардинальская тетра', 'latin': 'Paracheirodon axelrodi', 'family': 'Characidae', 'family_ru': 'Харациновые'},
    {'id': 'black-neon-tetra', 'name': 'Black Neon Tetra', 'name_ru': 'Чёрная неоновая тетра', 'latin': 'Hyphessobrycon herbertaxelrodi', 'family': 'Characidae', 'family_ru': 'Харациновые'},
    {'id': 'green-neon-tetra', 'name': 'Green Neon Tetra', 'name_ru': 'Зелёная неоновая тетра', 'latin': 'Paracheirodon simulans', 'family': 'Characidae', 'family_ru': 'Харациновые'},
    {'id': 'ember-tetra', 'name': 'Ember Tetra', 'name_ru': 'Тетра уголёк', 'latin': 'Hyphessobrycon amandae', 'family': 'Characidae', 'family_ru': 'Харациновые'},
    {'id': 'lemon-tetra', 'name': 'Lemon Tetra', 'name_ru': 'Лимонная тетра', 'latin': 'Hyphessobrycon pulchripinnis', 'family': 'Characidae', 'family_ru': 'Харациновые'},
    {'id': 'rummy-nose-tetra', 'name': 'Rummy-Nose Tetra', 'name_ru': 'Тетра с красным носом', 'latin': 'Hemigrammus rhodostomus', 'family': 'Characidae', 'family_ru': 'Харациновые'},
    {'id': 'black-phantom-tetra', 'name': 'Black Phantom Tetra', 'name_ru': 'Чёрная фантомная тетра', 'latin': 'Hyphessobrycon megalopterus', 'family': 'Characidae', 'family_ru': 'Харациновые'},
    {'id': 'serpae-tetra', 'name': 'Serpae Tetra', 'name_ru': 'Тетра серпа', 'latin': 'Hyphessobrycon eques', 'family': 'Characidae', 'family_ru': 'Харациновые'},
    {'id': 'red-eye-tetra', 'name': 'Red-Eye Tetra', 'name_ru': 'Тетра с красными глазами', 'latin': 'Moenkhausia sanctaefilomenae', 'family': 'Characidae', 'family_ru': 'Харациновые'},
    {'id': 'congo-tetra', 'name': 'Congo Tetra', 'name_ru': 'Конго тетра', 'latin': 'Phenacogrammus interruptus', 'family': 'Alestidae', 'family_ru': 'Алестовые'},
    {'id': 'diamond-tetra', 'name': 'Diamond Tetra', 'name_ru': 'Алмазная тетра', 'latin': 'Moenkhausia pittieri', 'family': 'Characidae', 'family_ru': 'Харациновые'},
    {'id': 'bleeding-heart-tetra', 'name': 'Bleeding Heart Tetra', 'name_ru': 'Тетра с кровоточащим сердцем', 'latin': 'Hyphessobrycon socolofi', 'family': 'Characidae', 'family_ru': 'Харациновые'},
    {'id': 'silver-tip-tetra', 'name': 'Silver-Tip Tetra', 'name_ru': 'Тетра с серебряными кончиками', 'latin': 'Hasemania nana', 'family': 'Characidae', 'family_ru': 'Харациновые'},
    {'id': 'penguin-tetra', 'name': 'Penguin Tetra', 'name_ru': 'Пингвинья тетра', 'latin': 'Thayeria boehlkei', 'family': 'Characidae', 'family_ru': 'Харациновые'},
    
    # Barbs (8)
    {'id': 'cherry-barb', 'name': 'Cherry Barb', 'name_ru': 'Вишнёвый барбус', 'latin': 'Puntius titteya', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'tiger-barb', 'name': 'Tiger Barb', 'name_ru': 'Тигровый барбус', 'latin': 'Puntigrus tetrazona', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'rosy-barb', 'name': 'Rosy Barb', 'name_ru': 'Розовый барбус', 'latin': 'Pethia conchonius', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'gold-barb', 'name': 'Gold Barb', 'name_ru': 'Золотой барбус', 'latin': 'Pethia gelius', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'odessa-barb', 'name': 'Odessa Barb', 'name_ru': 'Одесский барбус', 'latin': 'Pethia padamya', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'clown-barb', 'name': 'Clown Barb', 'name_ru': 'Барбус клоун', 'latin': 'Puntius everetti', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'denison-barb', 'name': 'Denison Barb', 'name_ru': 'Барбус Денисона', 'latin': 'Sahyadria denisonii', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'checker-barb', 'name': 'Checker Barb', 'name_ru': 'Шахматный барбус', 'latin': 'Puntius oligolepis', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    
    # Danios (5)
    {'id': 'zebra-danio', 'name': 'Zebra Danio', 'name_ru': 'Данио-зебра', 'latin': 'Danio rerio', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'pearl-danio', 'name': 'Pearl Danio', 'name_ru': 'Жемчужный данио', 'latin': 'Danio albolineatus', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'leopard-danio', 'name': 'Leopard Danio', 'name_ru': 'Данио-леопард', 'latin': 'Danio frankei', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'giant-danio', 'name': 'Giant Danio', 'name_ru': 'Гигантский данио', 'latin': 'Devario aequipinnatus', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'celestial-pearl-danio', 'name': 'Celestial Pearl Danio', 'name_ru': 'Небесный жемчужный данио', 'latin': 'Danio margaritatus', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    
    # Rasboras (7)
    {'id': 'harlequin-rasbora', 'name': 'Harlequin Rasbora', 'name_ru': 'Расбора-арлекин', 'latin': 'Trigonostigma heteromorpha', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'chili-rasbora', 'name': 'Chili Rasbora', 'name_ru': 'Расбора чили', 'latin': 'Boraras brigittae', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'mosquito-rasbora', 'name': 'Mosquito Rasbora', 'name_ru': 'Расбора комар', 'latin': 'Boraras maculatus', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'phoenix-rasbora', 'name': 'Phoenix Rasbora', 'name_ru': 'Расбора феникс', 'latin': 'Boraras merah', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'lambchop-rasbora', 'name': 'Lambchop Rasbora', 'name_ru': 'Расбора ягнёнок', 'latin': 'Trigonostigma espei', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'scissortail-rasbora', 'name': 'Scissortail Rasbora', 'name_ru': 'Расбора с ножницеобразным хвостом', 'latin': 'Rasbora trilineata', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    {'id': 'dwarf-rasbora', 'name': 'Dwarf Rasbora', 'name_ru': 'Карликовая расбора', 'latin': 'Boraras maculatus', 'family': 'Cyprinidae', 'family_ru': 'Карповые'},
    
    # Livebearers (5)
    {'id': 'guppy', 'name': 'Guppy', 'name_ru': 'Гуппи', 'latin': 'Poecilia reticulata', 'family': 'Poeciliidae', 'family_ru': 'Пецилиевые'},
    {'id': 'molly', 'name': 'Molly Fish', 'name_ru': 'Моллинезия', 'latin': 'Poecilia sphenops', 'family': 'Poeciliidae', 'family_ru': 'Пецилиевые'},
    {'id': 'platy', 'name': 'Platy Fish', 'name_ru': 'Пецилия', 'latin': 'Xiphophorus maculatus', 'family': 'Poeciliidae', 'family_ru': 'Пецилиевые'},
    {'id': 'swordtail', 'name': 'Swordtail', 'name_ru': 'Меченосец', 'latin': 'Xiphophorus hellerii', 'family': 'Poeciliidae', 'family_ru': 'Пецилиевые'},
    {'id': 'endlers-guppy', 'name': 'Endler\'s Guppy', 'name_ru': 'Гуппи Эндлера', 'latin': 'Poecilia wingei', 'family': 'Poeciliidae', 'family_ru': 'Пецилиевые'},
    
    # Cichlids (5)
    {'id': 'angelfish', 'name': 'Freshwater Angelfish', 'name_ru': 'Пресноводный скалярий', 'latin': 'Pterophyllum scalare', 'family': 'Cichlidae', 'family_ru': 'Цихловые'},
    {'id': 'discus', 'name': 'Discus', 'name_ru': 'Дискус', 'latin': 'Symphysodon aequifasciatus', 'family': 'Cichlidae', 'family_ru': 'Цихловые'},
    {'id': 'oscar', 'name': 'Oscar Fish', 'name_ru': 'Оскар', 'latin': 'Astronotus ocellatus', 'family': 'Cichlidae', 'family_ru': 'Цихловые'},
    {'id': 'convict-cichlid', 'name': 'Convict Cichlid', 'name_ru': 'Цихлида-зебра', 'latin': 'Amatitlania nigrofasciata', 'family': 'Cichlidae', 'family_ru': 'Цихловые'},
    {'id': 'ram-cichlid', 'name': 'Ram Cichlid', 'name_ru': 'Бабочка-апистограмма', 'latin': 'Mikrogeophagus ramirezi', 'family': 'Cichlidae', 'family_ru': 'Цихловые'},
    
    # Catfish (5)
    {'id': 'corydoras-panda', 'name': 'Panda Corydoras', 'name_ru': 'Коридорас панда', 'latin': 'Corydoras panda', 'family': 'Callichthyidae', 'family_ru': 'Панцирные сомы'},
    {'id': 'corydoras-aeneus', 'name': 'Bronze Corydoras', 'name_ru': 'Бронзовый коридорас', 'latin': 'Corydoras aeneus', 'family': 'Callichthyidae', 'family_ru': 'Панцирные сомы'},
    {'id': 'otocinclus', 'name': 'Otocinclus', 'name_ru': 'Отоцинклюс', 'latin': 'Otocinclus vestitus', 'family': 'Loricariidae', 'family_ru': 'Кольчужные сомы'},
    {'id': 'bristlenose-pleco', 'name': 'Bristlenose Pleco', 'name_ru': 'Анциструс', 'latin': 'Ancistrus cirrhosus', 'family': 'Loricariidae', 'family_ru': 'Кольчужные сомы'},
    {'id': 'clown-pleco', 'name': 'Clown Pleco', 'name_ru': 'Клоун плекостомус', 'latin': 'Panaqolus maccus', 'family': 'Loricariidae', 'family_ru': 'Кольчужные сомы'},
    
    # Loaches (5)
    {'id': 'clown-loach', 'name': 'Clown Loach', 'name_ru': 'Боция-клоун', 'latin': 'Chromobotia macracanthus', 'family': 'Botiidae', 'family_ru': 'Боциевые'},
    {'id': 'kuhli-loach', 'name': 'Kuhli Loach', 'name_ru': 'Вьюн кули', 'latin': 'Pangio kuhlii', 'family': 'Cobitidae', 'family_ru': 'Вьюновые'},
    {'id': 'yo-yo-loach', 'name': 'Yo-Yo Loach', 'name_ru': 'Боция йо-йо', 'latin': 'Botia almorhae', 'family': 'Botiidae', 'family_ru': 'Боциевые'},
    {'id': 'zebra-loach', 'name': 'Zebra Loach', 'name_ru': 'Боция-зебра', 'latin': 'Botia striata', 'family': 'Botiidae', 'family_ru': 'Боциевые'},
    {'id': 'weather-loach', 'name': 'Weather Loach', 'name_ru': 'Вьюн обыкновенный', 'latin': 'Misgurnus anguillicaudatus', 'family': 'Cobitidae', 'family_ru': 'Вьюновые'},
]

def create_species_entry(s):
    """Create a species entry for fish-river-tropical.js"""
    return f"""    {{
        id: '{s['id']}',
        name_en: '{s['name']}',
        name_ru: '{s['name_ru']}',
        latin_name: '{s['latin']}',
        family: '{s['family']}',
        family_ru: '{s['family_ru']}',
        category: 'tropical',
        environment: 'river',
        description_en: 'Popular freshwater tropical aquarium fish species.',
        description_ru: 'Популярный вид пресноводных тропических аквариумных рыб.',
        characteristics: {{
            size: 'small to medium',
            color: ['colorful', 'varied'],
            features: ['tropical freshwater species'],
            habitat: ['tropical rivers', 'streams', 'aquariums'],
            behavior: ['peaceful', 'community fish', 'aquarium dwelling']
        }}
    }}"""

def main():
    # Read existing file
    try:
        with open('/Users/svetik/Projects/bird-fish-h/fish-river-tropical.js', 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        # Create new file if it doesn't exist
        content = '// River Tropical Fish Species Data (Freshwater)\nexport const riverTropicalFish = [\n];'
    
    # Find the end of the array (before ]);)
    if '];' in content:
        base_content = content[:content.rfind('];')]
    else:
        base_content = content.rstrip()
    
    # Generate new species entries
    new_entries = [create_species_entry(s) for s in freshwater_species]
    
    # Write updated file
    with open('/Users/svetik/Projects/bird-fish-h/fish-river-tropical.js', 'w', encoding='utf-8') as f:
        f.write(base_content)
        if 'export const riverTropicalFish = [' in content and len(content.strip()) > 50:
            f.write(',\n')
        f.write(',\n'.join(new_entries))
        f.write('\n];\n')
    
    print(f"✓ Added {len(freshwater_species)} tropical freshwater fish species to fish-river-tropical.js")
    print(f"Total species in file: {len(freshwater_species) + 1}")  # +1 for existing angelfish

if __name__ == '__main__':
    main()
