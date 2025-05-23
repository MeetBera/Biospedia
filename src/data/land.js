const landCreatures = [
    {
              id: "panthera-leo",
              name: "Lion",
              scientificName: "Panthera leo",
              size: "1.4–2.5 meters long",
              habitat: "Savannas, grasslands, dense bush",
              description:
                "Lions are large carnivores known as the 'king of the jungle'.",
              image:
                "https://res.cloudinary.com/davy75aew/image/upload/v1747916776/Gemini_Generated_Image_ys4q0pys4q0pys4q_nnpj7v.png"
            },
            {
              id: "panthera-tigris",
              name: "Tiger",
              scientificName: "Panthera tigris",
              size: "2.7–3.1 meters long",
              habitat: "Forests, grasslands",
              description:
                "Tigers are the largest cat species, recognizable by their orange coat and black stripes.",
              image:
                "https://res.cloudinary.com/davy75aew/image/upload/v1747916777/Gemini_Generated_Image_sksutxsksutxsksu_jlmvdf.png"
            },
            {
              id: "lynx-lynx",
              name: "Lynx",
              scientificName: "Lynx lynx",
              size: "0.8–1.3 meters long",
              habitat: "Forests of Europe, Asia, and North America",
              description:
                "Lynxes are medium-sized wild cats known for their tufted ears and excellent hunting skills.",
              image:
                "https://res.cloudinary.com/davy75aew/image/upload/v1747916777/Gemini_Generated_Image_47gmo247gmo247gm_rf8ao8.png"
            },
            {
              id: "panthera-pardus",
              name: "Leopard",
              scientificName: "Panthera pardus",
              size: "1.6–2.0 meters long",
              habitat: "Forests, grasslands, mountains",
              description:
                "Leopards are agile and stealthy big cats known for their rosette-patterned coats.",
              image:
                "https://res.cloudinary.com/davy75aew/image/upload/v1747916775/Gemini_Generated_Image_w1l2inw1l2inw1l2_zk3iwx.png"
            },
            {
              id: "panthera-onca",
              name: "Jaguar",
              scientificName: "Panthera onca",
              size: "1.5–2.7 meters long",
              habitat: "Rainforests, swamps, grasslands",
              description:
                "Jaguars are powerful cats native to the Americas, recognized for their robust build and spotted coat.",
              image:
                "https://res.cloudinary.com/davy75aew/image/upload/v1747916772/Gemini_Generated_Image_g9slblg9slblg9sl_cm5t46.png"
            },
            {
              id: "panthera-uncia",
              name: "Snow Leopard",
              scientificName: "Panthera uncia",
              size: "0.75–1.5 meters long",
              habitat: "Mountain ranges of Central and South Asia",
              description:
                "Snow leopards are elusive, solitary big cats known for their thick fur and long tails.",
              image:
                "https://res.cloudinary.com/davy75aew/image/upload/v1747916774/Gemini_Generated_Image_vb1hqrvb1hqrvb1h_kiz1cp.png"
            },
            {
              id: "acinonyx-jubatus",
              name: "Cheetah",
              scientificName: "Acinonyx jubatus",
              size: "1.1–1.5 meters long",
              habitat: "Savannas, grasslands",
              description:
                "Cheetahs are the fastest land animals, known for their slender build and distinctive black tear stripes.",
              image:
                "https://res.cloudinary.com/davy75aew/image/upload/v1747916772/Gemini_Generated_Image_ov0jpkov0jpkov0j_gj3fdp.png"
            },
            {
              id: "puma-concolor",
              name: "Cougar",
              scientificName: "Puma concolor",
              size: "1.5–2.75 meters long",
              habitat: "Mountains, forests, deserts",
              description:
                "Cougars, also known as mountain lions or pumas, are solitary and adaptable predators of the Americas.",
              image:
                "https://res.cloudinary.com/davy75aew/image/upload/v1747916772/Gemini_Generated_Image_98exzq98exzq98ex_r8mh1q.png"
            },
            {
              id: "neofelis-nebulosa",
              name: "Clouded Leopard",
              scientificName: "Neofelis nebulosa",
              size: "0.7–1.1 meters long",
              habitat: "Tropical forests of Southeast Asia",
              description:
                "Clouded leopards are elusive cats with unique cloud-shaped spots and excellent climbing skills.",
              image:
                "https://res.cloudinary.com/davy75aew/image/upload/v1747916773/Gemini_Generated_Image_29yxra29yxra29yx_kscyrx.png"
            },
            {
              id: "herpailurus-yagouaroundi",
              name: "Jaguarundi",
              scientificName: "Herpailurus yagouaroundi",
              size: "0.5–0.77 meters long",
              habitat: "Scrublands, forests, grasslands of the Americas",
              description:
                "Jaguarundis are small, sleek wild cats with short legs and a weasel-like appearance.",
              image:
                "https://res.cloudinary.com/davy75aew/image/upload/v1747916770/Gemini_Generated_Image_sk2qlfsk2qlfsk2q_tldt7q.png"
            },
            {
                id: "canis-lupus",
                name: "Gray Wolf",
                scientificName: "Canis lupus",
                size: "1–1.6 meters long",
                habitat: "Forests, tundras, mountains, and grasslands",
                description:
                  "The gray wolf is a social predator, known for its complex pack behavior and widespread historical distribution.",
                image:
                  "https://res.cloudinary.com/davy75aew/image/upload/v1747939735/gray_wolf_l9bvy5.jpg"
              },
              {
                id: "vulpes-vulpes",
                name: "Red Fox",
                scientificName: "Vulpes vulpes",
                size: "0.5–0.9 meters long",
                habitat: "Forests, grasslands, mountains, and deserts",
                description:
                  "The red fox is a highly adaptable animal known for its cunning behavior and bushy tail.",
                image:
                  "https://res.cloudinary.com/davy75aew/image/upload/v1747939735/Red_fox_dumsq5.jpg"
              },
              {
                id: "canis-latrans",
                name: "Coyote",
                scientificName: "Canis latrans",
                size: "0.75–1 meter long",
                habitat: "Deserts, grasslands, and urban areas",
                description:
                  "Coyotes are intelligent and resourceful canids native to North and Central America.",
                image:
                  "https://res.cloudinary.com/davy75aew/image/upload/v1747939737/Coyote_o32ips.jpg"
              },
              {
                id: "canis-familiaris",
                name: "Domestic Dog",
                scientificName: "Canis familiaris",
                size: "Varies widely by breed",
                habitat: "Human settlements worldwide",
                description:
                  "Domesticated descendants of wolves, dogs have been bred for various purposes from hunting to companionship.",
                image:
                  "https://res.cloudinary.com/davy75aew/image/upload/v1747939737/Domestic_Dog_alug78.jpg"
              },
              {
                id: "lycaon-pictus",
                name: "African Wild Dog",
                scientificName: "Lycaon pictus",
                size: "0.75–1.1 meters long",
                habitat: "Savannas and arid zones in sub-Saharan Africa",
                description:
                  "Also known as the painted wolf, this social carnivore is known for its unique coat and pack behavior.",
                image:
                  "https://res.cloudinary.com/davy75aew/image/upload/v1747939737/African_Wild_Dog_ot5gdl.jpg"
              },
              {
                id: "urocyon-cinereoargenteus",
                name: "Gray Fox",
                scientificName: "Urocyon cinereoargenteus",
                size: "0.8–1.1 meters long",
                habitat: "Woodlands and brushy areas",
                description:
                  "The gray fox is the only American canid that can climb trees, often to escape predators or find food.",
                image:
                  "https://res.cloudinary.com/davy75aew/image/upload/v1747939737/gray_fox_oixz4a.jpg"
              },
              {
                id: "lycalopex-fulvipes",
                name: "Darwin's Fox",
                scientificName: "Lycalopex fulvipes",
                size: "0.5–0.8 meters long",
                habitat: "Temperate rainforests in southern Chile",
                description: "An endangered species of fox endemic to Chile, known for its elusive nature and small population.",
                image: "https://res.cloudinary.com/davy75aew/image/upload/v1747939736/darwins_fox_oagfkq.png"
              },
              {
                id: "otocyon-megalotis",
                name: "Bat-eared Fox",
                scientificName: "Otocyon megalotis",
                size: "0.6–0.8 meters long",
                habitat: "Savannas and arid grasslands in Africa",
                description: "Noted for its large ears and insectivorous diet, the bat-eared fox plays a vital role in pest control.",
                image: "https://res.cloudinary.com/davy75aew/image/upload/v1747939735/Bat_eared_fox_lg7nuv.jpg"
              },
              {
                id: "vulpes-lagopus",
                name: "Arctic Fox",
                scientificName: "Vulpes lagopus",
                size: "0.46–0.68 meters long",
                habitat: "Arctic tundra",
                description: "Well-adapted to freezing environments, the Arctic fox has a thick coat that changes color with the seasons.",
                image: "https://res.cloudinary.com/davy75aew/image/upload/v1747939735/arctic_fox_jut3bd.jpg"
              },
              {
                id: "nyctereutes-procyonoides",
                name: "Common Raccoon Dog",
                scientificName: "Nyctereutes procyonoides",
                size: "0.5–0.7 meters long",
                habitat: "Forests, wetlands, and rural areas of East Asia",
                description: "Named for its facial resemblance to raccoons, this canid is unique for its omnivorous diet and winter hibernation.",
                image: "https://res.cloudinary.com/davy75aew/image/upload/v1747939737/common_raccoon_dog_bhoeyq.jpg"
              },
              {
                id: "nyctereutes-viverrinus",
                name: "Japanese Raccoon Dog",
                scientificName: "Nyctereutes viverrinus",
                size: "0.5–0.65 meters long",
                habitat: "Forests and rural areas of Japan",
                description: "A subspecies of raccoon dog native to Japan, known as 'tanuki' in folklore and culture.",
                image: "https://res.cloudinary.com/davy75aew/image/upload/v1747939736/Japanese_raccoon_dog_tkfmy2.jpg"
              },
              {
                id: "ursus-arctos",
                name: "Brown Bear",
                scientificName: "Ursus arctos",
                size: "1.4–2.8 meters long",
                habitat: "Forests, mountains, tundra",
                description: "One of the most widespread bear species, including the grizzly and Kodiak bear subspecies.",
                image: "https://res.cloudinary.com/davy75aew/image/upload/v1747981016/brown_bear_yvzcsm.jpg"
              },
              {
                id: "ursus-maritimus",
                name: "Polar Bear",
                scientificName: "Ursus maritimus",
                size: "2.4–3 meters long",
                habitat: "Arctic sea ice",
                description: "A carnivorous bear adapted to cold climates and dependent on sea ice for hunting seals.",
                image: "https://res.cloudinary.com/davy75aew/image/upload/v1747981015/Polar_Bear_xtds14.jpg"
              },
              {
                id: "ursus-americanus",
                name: "American Black Bear",
                scientificName: "Ursus americanus",
                size: "1.2–2 meters long",
                habitat: "Forests and mountainous regions of North America",
                description: "The most common bear species in North America, known for its adaptability and omnivorous diet.",
                image: "https://res.cloudinary.com/davy75aew/image/upload/v1747981015/American_Black_Bear_huzuce.jpg"
              },
              {
                id: "ursus-thibetanus",
                name: "Asian Black Bear",
                scientificName: "Ursus thibetanus",
                size: "1.2–1.9 meters long",
                habitat: "Forests of Asia",
                description: "Also called the moon bear due to the crescent marking on its chest, it is primarily herbivorous.",
                image: "https://res.cloudinary.com/davy75aew/image/upload/v1747981016/Asian_Black_Bear_x7kbd4.jpg"
              },
              {
                id: "melursus-ursinus",
                name: "Sloth Bear",
                scientificName: "Melursus ursinus",
                size: "1.4–1.9 meters long",
                habitat: "Indian subcontinent",
                description: "Known for its shaggy coat and long snout, it feeds mainly on termites and fruits.",
                image: "https://res.cloudinary.com/davy75aew/image/upload/v1747981017/Sloth_Bear_dxo0ol.jpg"
              },
              {
                id: "helarctos-malayanus",
                name: "Sun Bear",
                scientificName: "Helarctos malayanus",
                size: "1.2–1.5 meters long",
                habitat: "Tropical forests of Southeast Asia",
                description: "The smallest bear species, distinguished by its short black fur and a bright chest patch.",
                image: "https://res.cloudinary.com/davy75aew/image/upload/v1747981017/Sun_Bear_ee8k9a.jpg"
              },
              {
                id: "tremarctos-ornatus",
                name: "Spectacled Bear",
                scientificName: "Tremarctos ornatus",
                size: "1.2–2 meters long",
                habitat: "Andes Mountains of South America",
                description: "The only bear species native to South America, recognized by its facial markings.",
                image: "https://res.cloudinary.com/davy75aew/image/upload/v1747981017/Spectacled_Bear_qtzkk5.jpg"
              },
              {
                id: "ailuropoda-melanoleuca",
                name: "Giant Panda",
                scientificName: "Ailuropoda melanoleuca",
                size: "1.2–1.9 meters long",
                habitat: "Mountain forests of central China",
                description: "Famous for its black-and-white coat and bamboo diet, it's one of the most iconic endangered animals.",
                image: "https://res.cloudinary.com/davy75aew/image/upload/v1747981016/Giant_Panda_riqsp2.jpg"
              },
              
]

export default landCreatures;