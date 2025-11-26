/****************************************************************
        * Quiz data - add/update questions here
        * Each chapter has id, title, questions: [{id,text,options:[{id,text}],answer:optionId, explanation}]
        ****************************************************************/


const QUIZ_DB = [
    /* ---------------------------------------------------------
       CHAPTER 1 — THE LIVING WORLD (10 QUESTIONS)
    --------------------------------------------------------- */
    {
        id: "ch1",
        title: "The Living World",
        questions: [
            {
                id: "ch1q1",
                text: "Which is the basic unit of classification?",
                options: [
                    { id: "a", text: "Species" },
                    { id: "b", text: "Genus" },
                    { id: "c", text: "Family" },
                    { id: "d", text: "Order" }
                ],
                answer: "a",
                explanation: "Species is the fundamental unit of classification."
            },
            {
                id: "ch1q2",
                text: "Which of the following is NOT a characteristic of living organisms?",
                options: [
                    { id: "a", text: "Metabolism" },
                    { id: "b", text: "Reproduction" },
                    { id: "c", text: "Evolution" },
                    { id: "d", text: "Fossilization" }
                ],
                answer: "d",
                explanation: "Fossilization is not a living characteristic."
            },
            {
                id: "ch1q3",
                text: "ICBN stands for:",
                options: [
                    { id: "a", text: "International Code of Biological Names" },
                    { id: "b", text: "International Code of Botanical Nomenclature" },
                    { id: "c", text: "Indian Code of Botanical Nomenclature" },
                    { id: "d", text: "Institutional Code of Biology Names" }
                ],
                answer: "b",
                explanation: "ICBN standardizes plant naming rules."
            },
            {
                id: "ch1q4",
                text: "Name writing follows:",
                options: [
                    { id: "a", text: "Trinomial nomenclature" },
                    { id: "b", text: "Binomial nomenclature" },
                    { id: "c", text: "Polynomial nomenclature" },
                    { id: "d", text: "None" }
                ],
                answer: "b",
                explanation: "Binomial nomenclature uses Genus + species."
            },
            {
                id: "ch1q5",
                text: "Which taxonomic category ranks above Family?",
                options: [
                    { id: "a", text: "Class" },
                    { id: "b", text: "Genus" },
                    { id: "c", text: "Order" },
                    { id: "d", text: "Phylum" }
                ],
                answer: "c",
                explanation: "The order contains related families."
            },
            {
                id: "ch1q6",
                text: "The book 'Systema Naturae' was written by:",
                options: [
                    { id: "a", text: "Darwin" },
                    { id: "b", text: "Linnaeus" },
                    { id: "c", text: "Aristotle" },
                    { id: "d", text: "Mendel" }
                ],
                answer: "b",
                explanation: "Linnaeus introduced binomial nomenclature."
            },
            {
                id: "ch1q7",
                text: "Biological classification mainly helps in:",
                options: [
                    { id: "a", text: "Identifying organisms" },
                    { id: "b", text: "Studying evolution" },
                    { id: "c", text: "Understanding relationships" },
                    { id: "d", text: "All of these" }
                ],
                answer: "d",
                explanation: "Classification helps in identification and relationships."
            },
            {
                id: "ch1q8",
                text: "Taxonomy and systematics differ because systematics includes:",
                options: [
                    { id: "a", text: "Identification" },
                    { id: "b", text: "Classification" },
                    { id: "c", text: "Evolutionary relationships" },
                    { id: "d", text: "Naming only" }
                ],
                answer: "c",
                explanation: "Systematics = taxonomy + phylogeny."
            },
            {
                id: "ch1q9",
                text: "Which is a defining property of living beings?",
                options: [
                    { id: "a", text: "Growth" },
                    { id: "b", text: "Metabolism" },
                    { id: "c", text: "Movement" },
                    { id: "d", text: "Response to touch" }
                ],
                answer: "b",
                explanation: "Metabolism is unique to living organisms."
            },
            {
                id: "ch1q10",
                text: "The term 'taxonomy' was coined by:",
                options: [
                    { id: "a", text: "Linnaeus" },
                    { id: "b", text: "De Candolle" },
                    { id: "c", text: "Aristotle" },
                    { id: "d", text: "Haeckel" }
                ],
                answer: "b",
                explanation: "A. P. de Candolle coined the term taxonomy."
            }
        ]
    },

    /* ---------------------------------------------------------
       CHAPTER 2 — BIOLOGICAL CLASSIFICATION (10 QUESTIONS)
    --------------------------------------------------------- */
    {
        id: "ch2",
        title: "Biological Classification",
        questions: [
            {
                id: "ch2q1",
                text: "Which kingdom includes prokaryotes?",
                options: [
                    { id: "a", text: "Monera" },
                    { id: "b", text: "Protista" },
                    { id: "c", text: "Fungi" },
                    { id: "d", text: "Plantae" }
                ],
                answer: "a",
                explanation: "Kingdom Monera contains prokaryotic organisms."
            },
            {
                id: "ch2q2",
                text: "Five kingdom classification was proposed by:",
                options: [
                    { id: "a", text: "Whittaker" },
                    { id: "b", text: "Linnaeus" },
                    { id: "c", text: "Haeckel" },
                    { id: "d", text: "Copeland" }
                ],
                answer: "a",
                explanation: "R.H. Whittaker proposed the five kingdom system."
            },
            {
                id: "ch2q3",
                text: "Which organism is included under Protista?",
                options: [
                    { id: "a", text: "Amoeba" },
                    { id: "b", text: "Yeast" },
                    { id: "c", text: "Mushroom" },
                    { id: "d", text: "Spirogyra" }
                ],
                answer: "a",
                explanation: "Protista includes unicellular eukaryotes."
            },
            {
                id: "ch2q4",
                text: "Viruses are classified under:",
                options: [
                    { id: "a", text: "Monera" },
                    { id: "b", text: "Protista" },
                    { id: "c", text: "None of the kingdoms" },
                    { id: "d", text: "Fungi" }
                ],
                answer: "c",
                explanation: "Viruses are acellular and placed outside kingdoms."
            },
            {
                id: "ch2q5",
                text: "Slime moulds are placed in:",
                options: [
                    { id: "a", text: "Protista" },
                    { id: "b", text: "Fungi" },
                    { id: "c", text: "Plantae" },
                    { id: "d", text: "Animalia" }
                ],
                answer: "a",
                explanation: "Slime moulds are fungus-like protists."
            },
            {
                id: "ch2q6",
                text: "Which fungi are known as imperfect fungi?",
                options: [
                    { id: "a", text: "Phycomycetes" },
                    { id: "b", text: "Deuteromycetes" },
                    { id: "c", text: "Basidiomycetes" },
                    { id: "d", text: "Ascomycetes" }
                ],
                answer: "b",
                explanation: "They lack sexual reproduction."
            },
            {
                id: "ch2q7",
                text: "Archaebacteria can survive extreme conditions due to:",
                options: [
                    { id: "a", text: "Thick cell walls" },
                    { id: "b", text: "Unique lipid composition" },
                    { id: "c", text: "Lignin" },
                    { id: "d", text: "Chitin" }
                ],
                answer: "b",
                explanation: "Their membrane lipids are branched and stable."
            },
            {
                id: "ch2q8",
                text: "Which kingdom includes multicellular heterotrophic organisms lacking cell walls?",
                options: [
                    { id: "a", text: "Animalia" },
                    { id: "b", text: "Fungi" },
                    { id: "c", text: "Protista" },
                    { id: "d", text: "Plantae" }
                ],
                answer: "a",
                explanation: "Animals lack cell walls and are heterotrophic."
            },
            {
                id: "ch2q9",
                text: "Lichen is a symbiotic relationship between:",
                options: [
                    { id: "a", text: "Alga & fungus" },
                    { id: "b", text: "Plant & bacterium" },
                    { id: "c", text: "Two fungi" },
                    { id: "d", text: "Alga & virus" }
                ],
                answer: "a",
                explanation: "Algae provide food; fungi provide shelter."
            },
            {
                id: "ch2q10",
                text: "Methanogens are found in:",
                options: [
                    { id: "a", text: "Respiratory tract" },
                    { id: "b", text: "Human intestine" },
                    { id: "c", text: "Rumen of cattle" },
                    { id: "d", text: "Leaf surface" }
                ],
                answer: "c",
                explanation: "Methanogens in rumen help fermentation."
            }
        ]
    },

    /* ---------------------------------------------------------
       CHAPTER 3 — PLANT KINGDOM (10 QUESTIONS)
    --------------------------------------------------------- */
    {
        id: "ch3",
        title: "Plant Kingdom",
        questions: [
            {
                id: "ch3q1",
                text: "Which group of plants has no vascular tissue?",
                options: [
                    { id: "a", text: "Bryophytes" },
                    { id: "b", text: "Pteridophytes" },
                    { id: "c", text: "Gymnosperms" },
                    { id: "d", text: "Angiosperms" }
                ],
                answer: "a",
                explanation: "Bryophytes lack vascular tissue."
            },
            {
                id: "ch3q2",
                text: "Prothallus is found in:",
                options: [
                    { id: "a", text: "Moss" },
                    { id: "b", text: "Fern" },
                    { id: "c", text: "Pine" },
                    { id: "d", text: "Cycas" }
                ],
                answer: "b",
                explanation: "Fern gametophyte is prothallus."
            },
            {
                id: "ch3q3",
                text: "Which plant group is called 'amphibians of the plant kingdom'?",
                options: [
                    { id: "a", text: "Algae" },
                    { id: "b", text: "Bryophytes" },
                    { id: "c", text: "Gymnosperms" },
                    { id: "d", text: "Angiosperms" }
                ],
                answer: "b",
                explanation: "They need water for fertilization."
            },
            {
                id: "ch3q4",
                text: "Double fertilization is a characteristic of:",
                options: [
                    { id: "a", text: "Gymnosperms" },
                    { id: "b", text: "Angiosperms" },
                    { id: "c", text: "Bryophytes" },
                    { id: "d", text: "Algae" }
                ],
                answer: "b",
                explanation: "Angiosperms show triple fusion and syngamy."
            },
            {
                id: "ch3q5",
                text: "Which produces naked seeds?",
                options: [
                    { id: "a", text: "Angiosperms" },
                    { id: "b", text: "Pteridophytes" },
                    { id: "c", text: "Gymnosperms" },
                    { id: "d", text: "Bryophytes" }
                ],
                answer: "c",
                explanation: "Gymnosperms have exposed ovules."
            },
            {
                id: "ch3q6",
                text: "An example of homosporous pteridophyte:",
                options: [
                    { id: "a", text: "Selaginella" },
                    { id: "b", text: "Equisetum" },
                    { id: "c", text: "Cycas" },
                    { id: "d", text: "Pinus" }
                ],
                answer: "b",
                explanation: "Equisetum produces one type of spore."
            },
            {
                id: "ch3q7",
                text: "Angiosperms are characterized by:",
                options: [
                    { id: "a", text: "Seeds enclosed in fruit" },
                    { id: "b", text: "Naked seeds" },
                    { id: "c", text: "Rhizoids" },
                    { id: "d", text: "Absence of xylem" }
                ],
                answer: "a",
                explanation: "Fruit is a unique angiosperm feature."
            },
            {
                id: "ch3q8",
                text: "Which algae group contains chlorophyll a + d?",
                options: [
                    { id: "a", text: "Rhodophyceae" },
                    { id: "b", text: "Phaeophyceae" },
                    { id: "c", text: "Chlorophyceae" },
                    { id: "d", text: "Cyanophyceae" }
                ],
                answer: "a",
                explanation: "Red algae have pigments a + d."
            },
            {
                id: "ch3q9",
                text: "Kelps belong to:",
                options: [
                    { id: "a", text: "Green algae" },
                    { id: "b", text: "Brown algae" },
                    { id: "c", text: "Red algae" },
                    { id: "d", text: "Blue-green algae" }
                ],
                answer: "b",
                explanation: "Phaeophyceae algae form large kelps."
            },
            {
                id: "ch3q10",
                text: "Which generation is dominant in bryophytes?",
                options: [
                    { id: "a", text: "Gametophyte" },
                    { id: "b", text: "Sporophyte" },
                    { id: "c", text: "Both equal" },
                    { id: "d", text: "Only diploid" }
                ],
                answer: "a",
                explanation: "Bryophytes have dominant gametophytes."
            }
        ]
    },

    /* ---------------------------------------------------------
       CHAPTER 4 — ANIMAL KINGDOM (10 QUESTIONS)
    --------------------------------------------------------- */
    {
        id: "ch4",
        title: "Animal Kingdom",
        questions: [
            {
                id: "ch4q1",
                text: "Which phylum contains animals with radial symmetry?",
                options: [
                    { id: "a", text: "Cnidaria" },
                    { id: "b", text: "Arthropoda" },
                    { id: "c", text: "Chordata" },
                    { id: "d", text: "Annelida" }
                ],
                answer: "a",
                explanation: "Cnidarians show radial symmetry."
            },
            {
                id: "ch4q2",
                text: "Which group exhibits water vascular system?",
                options: [
                    { id: "a", text: "Porifera" },
                    { id: "b", text: "Echinodermata" },
                    { id: "c", text: "Mollusca" },
                    { id: "d", text: "Chordata" }
                ],
                answer: "b",
                explanation: "Echinoderms have tube feet and hydrostatic canals."
            },
            {
                id: "ch4q3",
                text: "Notochord is present in:",
                options: [
                    { id: "a", text: "Arthropods" },
                    { id: "b", text: "Chordates" },
                    { id: "c", text: "Molluscs" },
                    { id: "d", text: "Annelids" }
                ],
                answer: "b",
                explanation: "Notochord is a hallmark of chordates."
            },
            {
                id: "ch4q4",
                text: "Which phylum has segmented body?",
                options: [
                    { id: "a", text: "Annelida" },
                    { id: "b", text: "Porifera" },
                    { id: "c", text: "Echinodermata" },
                    { id: "d", text: "Coelenterata" }
                ],
                answer: "a",
                explanation: "Annelids show metamerism."
            },
            {
                id: "ch4q5",
                text: "Spicules occur in:",
                options: [
                    { id: "a", text: "Porifera" },
                    { id: "b", text: "Arthropoda" },
                    { id: "c", text: "Chordata" },
                    { id: "d", text: "Reptilia" }
                ],
                answer: "a",
                explanation: "Sponges contain spicules."
            },
            {
                id: "ch4q6",
                text: "Which class is warm-blooded?",
                options: [
                    { id: "a", text: "Aves" },
                    { id: "b", text: "Amphibia" },
                    { id: "c", text: "Reptilia" },
                    { id: "d", text: "Pisces" }
                ],
                answer: "a",
                explanation: "Birds and mammals are warm-blooded."
            },
            {
                id: "ch4q7",
                text: "Which organism shows bilateral symmetry?",
                options: [
                    { id: "a", text: "Hydra" },
                    { id: "b", text: "Starfish" },
                    { id: "c", text: "Earthworm" },
                    { id: "d", text: "Aurelia" }
                ],
                answer: "c",
                explanation: "Earthworm has bilateral symmetry."
            },
            {
                id: "ch4q8",
                text: "Flame cells are characteristic of:",
                options: [
                    { id: "a", text: "Annelida" },
                    { id: "b", text: "Platyhelminthes" },
                    { id: "c", text: "Mollusca" },
                    { id: "d", text: "Echinodermata" }
                ],
                answer: "b",
                explanation: "Flame cells help in excretion."
            },
            {
                id: "ch4q9",
                text: "Which is the largest phylum?",
                options: [
                    { id: "a", text: "Chordata" },
                    { id: "b", text: "Arthropoda" },
                    { id: "c", text: "Mollusca" },
                    { id: "d", text: "Nematoda" }
                ],
                answer: "b",
                explanation: "Arthropoda includes insects, the largest group."
            },
            {
                id: "ch4q10",
                text: "Which phylum includes exclusively marine animals?",
                options: [
                    { id: "a", text: "Echinodermata" },
                    { id: "b", text: "Arthropoda" },
                    { id: "c", text: "Platyhelminthes" },
                    { id: "d", text: "Nematoda" }
                ],
                answer: "a",
                explanation: "Echinoderms are strictly marine."
            }
        ]
    },

    /* ---------------------------------------------------------
       CHAPTER 5 — MORPHOLOGY OF FLOWERING PLANTS (10 QUESTIONS)
    --------------------------------------------------------- */
    {
        id: "ch5",
        title: "Morphology of Flowering Plants",
        questions: [
            {
                id: "ch5q1",
                text: "The edible part of a mango is:",
                options: [
                    { id: "a", text: "Mesocarp" },
                    { id: "b", text: "Endocarp" },
                    { id: "c", text: "Seed" },
                    { id: "d", text: "Exocarp" }
                ],
                answer: "a",
                explanation: "Mango is a drupe; the mesocarp is edible."
            },
            {
                id: "ch5q2",
                text: "Which root modification stores food?",
                options: [
                    { id: "a", text: "Prop roots" },
                    { id: "b", text: "Pneumatophores" },
                    { id: "c", text: "Tuberous roots" },
                    { id: "d", text: "Climbing roots" }
                ],
                answer: "c",
                explanation: "Tuberous roots store food (e.g., sweet potato)."
            },
            {
                id: "ch5q3",
                text: "Which type of venation is found in monocots?",
                options: [
                    { id: "a", text: "Reticulate" },
                    { id: "b", text: "Parallel" },
                    { id: "c", text: "Palmate" },
                    { id: "d", text: "Pinnate" }
                ],
                answer: "b",
                explanation: "Monocot leaves usually show parallel venation."
            },
            {
                id: "ch5q4",
                text: "Which inflorescence has sessile flowers on an unbranched axis?",
                options: [
                    { id: "a", text: "Spike" },
                    { id: "b", text: "Raceme" },
                    { id: "c", text: "Umbel" },
                    { id: "d", text: "Head" }
                ],
                answer: "a",
                explanation: "Spike has sessile flowers."
            },
            {
                id: "ch5q5",
                text: "Which fruit is formed from a single flower with multiple carpels?",
                options: [
                    { id: "a", text: "Aggregate fruit" },
                    { id: "b", text: "Composite fruit" },
                    { id: "c", text: "Simple fruit" },
                    { id: "d", text: "Multiple fruit" }
                ],
                answer: "a",
                explanation: "Aggregate fruit forms from many carpels."
            },
            {
                id: "ch5q6",
                text: "Climbing stem modification is seen in:",
                options: [
                    { id: "a", text: "Pumpkin" },
                    { id: "b", text: "Ginger" },
                    { id: "c", text: "Potato" },
                    { id: "d", text: "Carrot" }
                ],
                answer: "a",
                explanation: "Pumpkin shows tendril modification for climbing."
            },
            {
                id: "ch5q7",
                text: "Phyllode is found in:",
                options: [
                    { id: "a", text: "Opuntia" },
                    { id: "b", text: "Acacia" },
                    { id: "c", text: "Euphorbia" },
                    { id: "d", text: "Eucalyptus" }
                ],
                answer: "b",
                explanation: "Acacia has phyllode (flattened petiole)."
            },
            {
                id: "ch5q8",
                text: "Ginger is a:",
                options: [
                    { id: "a", text: "Rhizome" },
                    { id: "b", text: "Tuber" },
                    { id: "c", text: "Corm" },
                    { id: "d", text: "Bulb" }
                ],
                answer: "a",
                explanation: "Ginger is a horizontal underground stem."
            },
            {
                id: "ch5q9",
                text: "Which type of placentation is seen in mustard?",
                options: [
                    { id: "a", text: "Axile" },
                    { id: "b", text: "Parietal" },
                    { id: "c", text: "Free central" },
                    { id: "d", text: "Basal" }
                ],
                answer: "b",
                explanation: "Mustard shows parietal placentation."
            },
            {
                id: "ch5q10",
                text: "Which leaf arrangement has one leaf per node?",
                options: [
                    { id: "a", text: "Opposite" },
                    { id: "b", text: "Whorled" },
                    { id: "c", text: "Alternate" },
                    { id: "d", text: "Fascicled" }
                ],
                answer: "c",
                explanation: "Alternate phyllotaxy shows one leaf per node."
            }
        ]
    },


    /* ---------------------------------------------------------
    CHAPTER 6 — ANATOMY OF FLOWERING PLANTS (10 QUESTIONS)
 --------------------------------------------------------- */
    {
        id: "ch6",
        title: "Anatomy of Flowering Plants",
        questions: [
            {
                id: "ch6q1",
                text: "The protective layer over root epidermis is called:",
                options: [
                    { id: "a", text: "Endodermis" },
                    { id: "b", text: "Epiblema" },
                    { id: "c", text: "Pericycle" },
                    { id: "d", text: "Cortex" }
                ],
                answer: "b",
                explanation: "Root epidermis is called epiblema or piliferous layer."
            },
            {
                id: "ch6q2",
                text: "Casparian strips occur in:",
                options: [
                    { id: "a", text: "Endodermis" },
                    { id: "b", text: "Cortex" },
                    { id: "c", text: "Pericycle" },
                    { id: "d", text: "Pith" }
                ],
                answer: "a",
                explanation: "Endodermal cells have Casparian strips of suberin."
            },
            {
                id: "ch6q3",
                text: "Which tissue is dead at maturity?",
                options: [
                    { id: "a", text: "Xylem vessels" },
                    { id: "b", text: "Phloem sieve tubes" },
                    { id: "c", text: "Companion cells" },
                    { id: "d", text: "Parenchyma" }
                ],
                answer: "a",
                explanation: "Xylem vessels are lignified and dead."
            },
            {
                id: "ch6q4",
                text: "Cambium is responsible for:",
                options: [
                    { id: "a", text: "Primary growth" },
                    { id: "b", text: "Secondary growth" },
                    { id: "c", text: "Transport" },
                    { id: "d", text: "Photosynthesis" }
                ],
                answer: "b",
                explanation: "Vascular cambium forms secondary xylem and phloem."
            },
            {
                id: "ch6q5",
                text: "Annual rings are formed due to:",
                options: [
                    { id: "a", text: "Primary xylem" },
                    { id: "b", text: "Primary phloem" },
                    { id: "c", text: "Secondary xylem" },
                    { id: "d", text: "Pith" }
                ],
                answer: "c",
                explanation: "Secondary xylem deposition forms annual rings."
            },
            {
                id: "ch6q6",
                text: "The functional phloem in plants is known as:",
                options: [
                    { id: "a", text: "Primary phloem" },
                    { id: "b", text: "Secondary phloem" },
                    { id: "c", text: "Bast" },
                    { id: "d", text: "Hard bast" }
                ],
                answer: "c",
                explanation: "Phloem fibres and sieve elements form commercial bast."
            },
            {
                id: "ch6q7",
                text: "Lenticels are involved in:",
                options: [
                    { id: "a", text: "Transpiration" },
                    { id: "b", text: "Gaseous exchange" },
                    { id: "c", text: "Food storage" },
                    { id: "d", text: "Water absorption" }
                ],
                answer: "b",
                explanation: "Lenticels are openings in cork for gas exchange."
            },
            {
                id: "ch6q8",
                text: "Interfascicular cambium originates from:",
                options: [
                    { id: "a", text: "Xylem" },
                    { id: "b", text: "Phloem" },
                    { id: "c", text: "Medullary rays" },
                    { id: "d", text: "Pith" }
                ],
                answer: "c",
                explanation: "Cells of medullary rays become meristematic."
            },
            {
                id: "ch6q9",
                text: "Which is NOT a simple permanent tissue?",
                options: [
                    { id: "a", text: "Parenchyma" },
                    { id: "b", text: "Collenchyma" },
                    { id: "c", text: "Sclerenchyma" },
                    { id: "d", text: "Xylem" }
                ],
                answer: "d",
                explanation: "Xylem is a complex permanent tissue."
            },
            {
                id: "ch6q10",
                text: "Wood is composed mainly of:",
                options: [
                    { id: "a", text: "Xylem" },
                    { id: "b", text: "Phloem" },
                    { id: "c", text: "Cortex" },
                    { id: "d", text: "Epidermis" }
                ],
                answer: "a",
                explanation: "Wood = secondary xylem."
            }
        ]
    },

    /* ---------------------------------------------------------
       CHAPTER 7 — STRUCTURAL ORGANISATION IN ANIMALS (10 Q)
    --------------------------------------------------------- */
    {
        id: "ch7",
        title: "Structural Organisation in Animals",
        questions: [
            {
                id: "ch7q1",
                text: "Pseudostratified epithelium is found in:",
                options: [
                    { id: "a", text: "Skin" },
                    { id: "b", text: "Trachea" },
                    { id: "c", text: "Blood vessels" },
                    { id: "d", text: "Stomach" }
                ],
                answer: "b",
                explanation: "Trachea has ciliated pseudostratified epithelium."
            },
            {
                id: "ch7q2",
                text: "Which connective tissue stores fat?",
                options: [
                    { id: "a", text: "Adipose tissue" },
                    { id: "b", text: "Areolar tissue" },
                    { id: "c", text: "Blood" },
                    { id: "d", text: "Cartilage" }
                ],
                answer: "a",
                explanation: "Adipocytes store lipids."
            },
            {
                id: "ch7q3",
                text: "Intercalated discs are present in:",
                options: [
                    { id: "a", text: "Smooth muscle" },
                    { id: "b", text: "Cardiac muscle" },
                    { id: "c", text: "Skeletal muscle" },
                    { id: "d", text: "Voluntary muscle" }
                ],
                answer: "b",
                explanation: "Cardiac muscle has intercalated discs for rapid conduction."
            },
            {
                id: "ch7q4",
                text: "Earthworm excretes through:",
                options: [
                    { id: "a", text: "Malpighian tubules" },
                    { id: "b", text: "Nephridia" },
                    { id: "c", text: "Flame cells" },
                    { id: "d", text: "Green glands" }
                ],
                answer: "b",
                explanation: "Metanephridia perform excretion in earthworms."
            },
            {
                id: "ch7q5",
                text: "Which gland secretes sebum?",
                options: [
                    { id: "a", text: "Sweat gland" },
                    { id: "b", text: "Sebaceous gland" },
                    { id: "c", text: "Pituitary gland" },
                    { id: "d", text: "Thyroid" }
                ],
                answer: "b",
                explanation: "Sebaceous glands lubricate skin and hair."
            },
            {
                id: "ch7q6",
                text: "Chondriocytes are present in:",
                options: [
                    { id: "a", text: "Bone" },
                    { id: "b", text: "Cartilage" },
                    { id: "c", text: "Blood" },
                    { id: "d", text: "Lymph" }
                ],
                answer: "b",
                explanation: "Chondrocytes are cells of cartilage."
            },
            {
                id: "ch7q7",
                text: "Which tissue connects muscle to bone?",
                options: [
                    { id: "a", text: "Ligament" },
                    { id: "b", text: "Tendon" },
                    { id: "c", text: "Cartilage" },
                    { id: "d", text: "Areolar tissue" }
                ],
                answer: "b",
                explanation: "Tendons attach muscles to bones."
            },
            {
                id: "ch7q8",
                text: "Which epithelial tissue is specialized for absorption?",
                options: [
                    { id: "a", text: "Cuboidal" },
                    { id: "b", text: "Simple columnar" },
                    { id: "c", text: "Stratified squamous" },
                    { id: "d", text: "Transitional" }
                ],
                answer: "b",
                explanation: "Columnar epithelium lines intestine for absorption."
            },
            {
                id: "ch7q9",
                text: "Blood is a type of:",
                options: [
                    { id: "a", text: "Connective tissue" },
                    { id: "b", text: "Muscle tissue" },
                    { id: "c", text: "Nervous tissue" },
                    { id: "d", text: "Epithelial tissue" }
                ],
                answer: "a",
                explanation: "Blood contains cells suspended in plasma."
            },
            {
                id: "ch7q10",
                text: "Setae in earthworm help in:",
                options: [
                    { id: "a", text: "Respiration" },
                    { id: "b", text: "Locomotion" },
                    { id: "c", text: "Reproduction" },
                    { id: "d", text: "Excretion" }
                ],
                answer: "b",
                explanation: "Setae anchor body for movement."
            }
        ]
    },

    /* ---------------------------------------------------------
       CHAPTER 8 — CELL: THE UNIT OF LIFE (10 QUESTIONS)
    --------------------------------------------------------- */
    {
        id: "ch8",
        title: "Cell: The Unit of Life",
        questions: [
            {
                id: "ch8q1",
                text: "Prokaryotic cells lack:",
                options: [
                    { id: "a", text: "Ribosomes" },
                    { id: "b", text: "Nucleus" },
                    { id: "c", text: "DNA" },
                    { id: "d", text: "Cell membrane" }
                ],
                answer: "b",
                explanation: "Prokaryotes have no true nucleus."
            },
            {
                id: "ch8q2",
                text: "The powerhouse of the cell is:",
                options: [
                    { id: "a", text: "Chloroplast" },
                    { id: "b", text: "Nucleus" },
                    { id: "c", text: "Mitochondria" },
                    { id: "d", text: "Golgi body" }
                ],
                answer: "c",
                explanation: "Mitochondria generate ATP."
            },
            {
                id: "ch8q3",
                text: "70S ribosomes are found in:",
                options: [
                    { id: "a", text: "Eukaryotic cytoplasm" },
                    { id: "b", text: "Mitochondria & chloroplasts" },
                    { id: "c", text: "Nucleus" },
                    { id: "d", text: "Golgi apparatus" }
                ],
                answer: "b",
                explanation: "Mitochondria & chloroplasts have prokaryotic ribosomes."
            },
            {
                id: "ch8q4",
                text: "Lysosomes originate from:",
                options: [
                    { id: "a", text: "RER" },
                    { id: "b", text: "SER" },
                    { id: "c", text: "Golgi bodies" },
                    { id: "d", text: "Nucleus" }
                ],
                answer: "c",
                explanation: "Lysosomal vesicles bud off from Golgi."
            },
            {
                id: "ch8q5",
                text: "Cell wall of plants is made of:",
                options: [
                    { id: "a", text: "Peptidoglycan" },
                    { id: "b", text: "Chitin" },
                    { id: "c", text: "Cellulose" },
                    { id: "d", text: "Lignin" }
                ],
                answer: "c",
                explanation: "Cellulose is a main component of plant cell walls."
            },
            {
                id: "ch8q6",
                text: "Fluid mosaic model was proposed by:",
                options: [
                    { id: "a", text: "Robert Brown" },
                    { id: "b", text: "Singer & Nicolson" },
                    { id: "c", text: "Watson & Crick" },
                    { id: "d", text: "Schwann" }
                ],
                answer: "b",
                explanation: "They described membrane as a fluid mosaic structure."
            },
            {
                id: "ch8q7",
                text: "Cristae are found in:",
                options: [
                    { id: "a", text: "Chloroplast" },
                    { id: "b", text: "Nucleus" },
                    { id: "c", text: "Mitochondria" },
                    { id: "d", text: "Lysosomes" }
                ],
                answer: "c",
                explanation: "Cristae are folds of mitochondrial inner membrane."
            },
            {
                id: "ch8q8",
                text: "Which organelle detoxifies drugs?",
                options: [
                    { id: "a", text: "SER" },
                    { id: "b", text: "Golgi" },
                    { id: "c", text: "RER" },
                    { id: "d", text: "Nucleus" }
                ],
                answer: "a",
                explanation: "SER performs detoxification."
            },
            {
                id: "ch8q9",
                text: "The region where DNA is found in bacteria is:",
                options: [
                    { id: "a", text: "Nucleus" },
                    { id: "b", text: "Nucleoid" },
                    { id: "c", text: "Nucleolus" },
                    { id: "d", text: "Plastid" }
                ],
                answer: "b",
                explanation: "Bacteria have a nucleoid instead of nucleus."
            },
            {
                id: "ch8q10",
                text: "Turgidity in plant cells is maintained by:",
                options: [
                    { id: "a", text: "Nucleus" },
                    { id: "b", text: "Vacuole" },
                    { id: "c", text: "Chloroplast" },
                    { id: "d", text: "Centrosome" }
                ],
                answer: "b",
                explanation: "Large central vacuole maintains turgor."
            }
        ]
    },

    /* ---------------------------------------------------------
       CHAPTER 9 — BIOMOLECULES (10 QUESTIONS)
    --------------------------------------------------------- */
    {
        id: "ch9",
        title: "Biomolecules",
        questions: [
            {
                id: "ch9q1",
                text: "Monosaccharides are:",
                options: [
                    { id: "a", text: "Polymers" },
                    { id: "b", text: "Simple sugars" },
                    { id: "c", text: "Lipids" },
                    { id: "d", text: "Proteins" }
                ],
                answer: "b",
                explanation: "Monosaccharides are basic sugar units."
            },
            {
                id: "ch9q2",
                text: "Which is the storage polysaccharide in plants?",
                options: [
                    { id: "a", text: "Glycogen" },
                    { id: "b", text: "Starch" },
                    { id: "c", text: "Cellulose" },
                    { id: "d", text: "Chitin" }
                ],
                answer: "b",
                explanation: "Plants store glucose as starch."
            },
            {
                id: "ch9q3",
                text: "Amino acids are linked by:",
                options: [
                    { id: "a", text: "Glycosidic bond" },
                    { id: "b", text: "Phosphodiester bond" },
                    { id: "c", text: "Peptide bond" },
                    { id: "d", text: "Hydrogen bond" }
                ],
                answer: "c",
                explanation: "Peptide bonds form between amino acids."
            },
            {
                id: "ch9q4",
                text: "Which vitamin is fat-soluble?",
                options: [
                    { id: "a", text: "Vitamin C" },
                    { id: "b", text: "Vitamin B12" },
                    { id: "c", text: "Vitamin K" },
                    { id: "d", text: "Vitamin B2" }
                ],
                answer: "c",
                explanation: "Vitamins A, D, E, K are fat-soluble."
            },
            {
                id: "ch9q5",
                text: "RNA contains the sugar:",
                options: [
                    { id: "a", text: "Deoxyribose" },
                    { id: "b", text: "Ribose" },
                    { id: "c", text: "Glucose" },
                    { id: "d", text: "Fructose" }
                ],
                answer: "b",
                explanation: "RNA has ribose sugar."
            },
            {
                id: "ch9q6",
                text: "Enzymes are chemically:",
                options: [
                    { id: "a", text: "Lipids" },
                    { id: "b", text: "Proteins" },
                    { id: "c", text: "Carbohydrates" },
                    { id: "d", text: "Nucleic acids" }
                ],
                answer: "b",
                explanation: "Most enzymes are proteins."
            },
            {
                id: "ch9q7",
                text: "Which lipid is part of cell membrane?",
                options: [
                    { id: "a", text: "Starch" },
                    { id: "b", text: "Phospholipid" },
                    { id: "c", text: "Glycogen" },
                    { id: "d", text: "Chitin" }
                ],
                answer: "b",
                explanation: "Phospholipids form bilayer."
            },
            {
                id: "ch9q8",
                text: "Nitrogenous base present in RNA but not DNA:",
                options: [
                    { id: "a", text: "Adenine" },
                    { id: "b", text: "Uracil" },
                    { id: "c", text: "Cytosine" },
                    { id: "d", text: "Thymine" }
                ],
                answer: "b",
                explanation: "Uracil replaces thymine in RNA."
            },
            {
                id: "ch9q9",
                text: "The bond in DNA backbone is:",
                options: [
                    { id: "a", text: "Hydrogen bond" },
                    { id: "b", text: "Peptide bond" },
                    { id: "c", text: "Phosphodiester bond" },
                    { id: "d", text: "Ionic bond" }
                ],
                answer: "c",
                explanation: "Phosphodiester bonds link nucleotides."
            },
            {
                id: "ch9q10",
                text: "Essential amino acids are those:",
                options: [
                    { id: "a", text: "Synthesized by body" },
                    { id: "b", text: "Required in diet" },
                    { id: "c", text: "Not required for proteins" },
                    { id: "d", text: "Produced by plants only" }
                ],
                answer: "b",
                explanation: "Essential amino acids must be obtained from diet."
            }
        ]
    },

    /* ---------------------------------------------------------
       CHAPTER 10 — CELL CYCLE & CELL DIVISION (10 Q)
    --------------------------------------------------------- */
    {
        id: "ch10",
        title: "Cell Cycle and Cell Division",
        questions: [
            {
                id: "ch10q1",
                text: "Longest phase of cell cycle is:",
                options: [
                    { id: "a", text: "M-phase" },
                    { id: "b", text: "G1-phase" },
                    { id: "c", text: "G2-phase" },
                    { id: "d", text: "S-phase" }
                ],
                answer: "b",
                explanation: "G1 is longest and metabolically active."
            },
            {
                id: "ch10q2",
                text: "Chromosomes align at equator during:",
                options: [
                    { id: "a", text: "Prophase" },
                    { id: "b", text: "Metaphase" },
                    { id: "c", text: "Anaphase" },
                    { id: "d", text: "Telophase" }
                ],
                answer: "b",
                explanation: "Metaphase plate formation occurs here."
            },
            {
                id: "ch10q3",
                text: "Crossing over occurs during:",
                options: [
                    { id: "a", text: "Zygotene" },
                    { id: "b", text: "Pachytene" },
                    { id: "c", text: "Diplotene" },
                    { id: "d", text: "Diakinesis" }
                ],
                answer: "b",
                explanation: "Pachytene is the stage of crossing over."
            },
            {
                id: "ch10q4",
                text: "Cytokinesis in plant cells occurs by:",
                options: [
                    { id: "a", text: "Cleavage furrow" },
                    { id: "b", text: "Cell plate formation" },
                    { id: "c", text: "Constriction" },
                    { id: "d", text: "Elongation" }
                ],
                answer: "b",
                explanation: "Cell plate forms by Golgi vesicles."
            },
            {
                id: "ch10q5",
                text: "Number of daughter cells formed in meiosis:",
                options: [
                    { id: "a", text: "2" },
                    { id: "b", text: "4" },
                    { id: "c", text: "1" },
                    { id: "d", text: "8" }
                ],
                answer: "b",
                explanation: "Meiosis produces 4 haploid cells."
            },
            {
                id: "ch10q6",
                text: "DNA replication occurs in:",
                options: [
                    { id: "a", text: "Prophase" },
                    { id: "b", text: "G1-phase" },
                    { id: "c", text: "S-phase" },
                    { id: "d", text: "G2-phase" }
                ],
                answer: "c",
                explanation: "S-phase is synthesis phase."
            },
            {
                id: "ch10q7",
                text: "Bivalent is formed during:",
                options: [
                    { id: "a", text: "Leptotene" },
                    { id: "b", text: "Zygotene" },
                    { id: "c", text: "Metaphase II" },
                    { id: "d", text: "Anaphase I" }
                ],
                answer: "b",
                explanation: "Homologous chromosomes pair in zygotene."
            },
            {
                id: "ch10q8",
                text: "Centromere splits during:",
                options: [
                    { id: "a", text: "Anaphase I" },
                    { id: "b", text: "Anaphase II" },
                    { id: "c", text: "Metaphase I" },
                    { id: "d", text: "Prophase I" }
                ],
                answer: "b",
                explanation: "Sister chromatids separate in anaphase II."
            },
            {
                id: "ch10q9",
                text: "Synaptonemal complex is formed in:",
                options: [
                    { id: "a", text: "Metaphase" },
                    { id: "b", text: "Prophase I" },
                    { id: "c", text: "Telophase" },
                    { id: "d", text: "Interphase" }
                ],
                answer: "b",
                explanation: "It appears during zygotene of prophase I."
            },
            {
                id: "ch10q10",
                text: "Mitosis occurs in:",
                options: [
                    { id: "a", text: "Somatic cells" },
                    { id: "b", text: "Gametes" },
                    { id: "c", text: "Zygote only" },
                    { id: "d", text: "All of the above" }
                ],
                answer: "a",
                explanation: "Mitosis is division of somatic cells."
            }
        ]
    },


    /* ---------------------------------------------------------
       CHAPTER 11 – Photosynthesis in Higher Plants
    --------------------------------------------------------- */
    {
        id: "ch11_photosynthesis",
        title: "Photosynthesis in Higher Plants",
        questions: [
            {
                id: "ch11q1",
                text: "Which pigment is primarily responsible for trapping light energy?",
                options: [
                    { id: "a", text: "Chlorophyll a" },
                    { id: "b", text: "Chlorophyll b" },
                    { id: "c", text: "Xanthophyll" },
                    { id: "d", text: "Carotene" }
                ],
                answer: "a",
                explanation: "Chlorophyll a is the reaction centre and essential pigment."
            },
            {
                id: "ch11q2",
                text: "The first stable product of C3 cycle is:",
                options: [
                    { id: "a", text: "PGA" },
                    { id: "b", text: "PEP" },
                    { id: "c", text: "OAA" },
                    { id: "d", text: "RuBP" }
                ],
                answer: "a",
                explanation: "C3 plants form phosphoglyceric acid (PGA) first."
            },
            {
                id: "ch11q3",
                text: "Light reactions occur in which part of the chloroplast?",
                options: [
                    { id: "a", text: "Stroma" },
                    { id: "b", text: "Thylakoid membrane" },
                    { id: "c", text: "Outer membrane" },
                    { id: "d", text: "Inner membrane" }
                ],
                answer: "b",
                explanation: "Light reactions occur on thylakoid membranes."
            },
            {
                id: "ch11q4",
                text: "Which enzyme fixes CO₂ in the Calvin cycle?",
                options: [
                    { id: "a", text: "PEP carboxylase" },
                    { id: "b", text: "Rubisco" },
                    { id: "c", text: "ATP synthase" },
                    { id: "d", text: "Carbonic anhydrase" }
                ],
                answer: "b",
                explanation: "Rubisco catalyzes the fixation of CO₂ with RuBP."
            },
            {
                id: "ch11q5",
                text: "The oxygen released during photosynthesis comes from:",
                options: [
                    { id: "a", text: "CO₂" },
                    { id: "b", text: "H₂O" },
                    { id: "c", text: "Glucose" },
                    { id: "d", text: "NADPH" }
                ],
                answer: "b",
                explanation: "Photolysis of water produces O₂."
            },
            {
                id: "ch11q6",
                text: "C4 plants minimize photorespiration by:",
                options: [
                    { id: "a", text: "Having stomata open at night" },
                    { id: "b", text: "Spatial separation of steps" },
                    { id: "c", text: "Using only Rubisco" },
                    { id: "d", text: "Increasing CO₂ solubility" }
                ],
                answer: "b",
                explanation: "C4 plants use bundle sheath and mesophyll separation."
            },
            {
                id: "ch11q7",
                text: "Z-scheme describes:",
                options: [
                    { id: "a", text: "Electron flow in respiration" },
                    { id: "b", text: "Electron transport in photosynthesis" },
                    { id: "c", text: "ATP production in mitochondria" },
                    { id: "d", text: "Calvin cycle steps" }
                ],
                answer: "b",
                explanation: "Z-scheme is the electron flow from PSII → PSI."
            },
            {
                id: "ch11q8",
                text: "Which of the following is NOT a product of light reaction?",
                options: [
                    { id: "a", text: "ATP" },
                    { id: "b", text: "NADPH" },
                    { id: "c", text: "O₂" },
                    { id: "d", text: "Glucose" }
                ],
                answer: "d",
                explanation: "Glucose is produced in the Calvin cycle, not light reaction."
            },
            {
                id: "ch11q9",
                text: "During cyclic photophosphorylation, which photosystem is used?",
                options: [
                    { id: "a", text: "PSI only" },
                    { id: "b", text: "PSII only" },
                    { id: "c", text: "Both PSI & PSII" },
                    { id: "d", text: "None of these" }
                ],
                answer: "a",
                explanation: "Only PSI participates in cyclic photophosphorylation."
            },
            {
                id: "ch11q10",
                text: "CAM plants open their stomata:",
                options: [
                    { id: "a", text: "During daytime only" },
                    { id: "b", text: "During nighttime only" },
                    { id: "c", text: "Both day and night" },
                    { id: "d", text: "Never" }
                ],
                answer: "b",
                explanation: "CAM plants open stomata at night to reduce water loss."
            }
        ]
    },


    /* ---------------------------------------------------------
       CHAPTER 12 – Respiration in Plants (10 Questions)
    --------------------------------------------------------- */
    {
        id: "ch12_respiration",
        title: "Respiration in Plants",
        questions: [

            {
                id: "ch12q1",
                text: "Which is the universal energy currency?",
                options: [
                    { id: "a", text: "ATP" },
                    { id: "b", text: "ADP" },
                    { id: "c", text: "GTP" },
                    { id: "d", text: "NADH" }
                ],
                answer: "a",
                explanation: "ATP is the universal energy currency."
            },

            {
                id: "ch12q2",
                text: "Where does glycolysis occur?",
                options: [
                    { id: "a", text: "Mitochondrial matrix" },
                    { id: "b", text: "Cytoplasm" },
                    { id: "c", text: "Chloroplast" },
                    { id: "d", text: "Ribosome" }
                ],
                answer: "b",
                explanation: "Glycolysis takes place in the cytoplasm."
            },

            {
                id: "ch12q3",
                text: "How many ATP are formed in glycolysis (net)?",
                options: [
                    { id: "a", text: "2" },
                    { id: "b", text: "4" },
                    { id: "c", text: "6" },
                    { id: "d", text: "8" }
                ],
                answer: "a",
                explanation: "Net gain of ATP in glycolysis is 2."
            },

            {
                id: "ch12q4",
                text: "Link between glycolysis and Krebs cycle is:",
                options: [
                    { id: "a", text: "Citrate" },
                    { id: "b", text: "Pyruvate" },
                    { id: "c", text: "Acetyl CoA" },
                    { id: "d", text: "Oxaloacetate" }
                ],
                answer: "c",
                explanation: "Pyruvate is converted into Acetyl CoA."
            },

            {
                id: "ch12q5",
                text: "Where does Krebs cycle occur?",
                options: [
                    { id: "a", text: "Cytoplasm" },
                    { id: "b", text: "Mitochondrial matrix" },
                    { id: "c", text: "Cristae" },
                    { id: "d", text: "Outer membrane" }
                ],
                answer: "b",
                explanation: "Krebs cycle occurs in mitochondrial matrix."
            },

            {
                id: "ch12q6",
                text: "Which process produces the maximum ATP?",
                options: [
                    { id: "a", text: "Glycolysis" },
                    { id: "b", text: "Krebs Cycle" },
                    { id: "c", text: "Electron Transport Chain" },
                    { id: "d", text: "Fermentation" }
                ],
                answer: "c",
                explanation: "ETC generates majority of ATP."
            },

            {
                id: "ch12q7",
                text: "Which enzyme converts glucose to glucose-6-phosphate?",
                options: [
                    { id: "a", text: "Hexokinase" },
                    { id: "b", text: "Phosphofructokinase" },
                    { id: "c", text: "Aldolase" },
                    { id: "d", text: "Isomerase" }
                ],
                answer: "a",
                explanation: "Hexokinase phosphorylates glucose."
            },

            {
                id: "ch12q8",
                text: "Respiratory Quotient (RQ) of fats is:",
                options: [
                    { id: "a", text: "1" },
                    { id: "b", text: "0.7" },
                    { id: "c", text: "0.9" },
                    { id: "d", text: "1.2" }
                ],
                answer: "b",
                explanation: "Fats have RQ around 0.7."
            },

            {
                id: "ch12q9",
                text: "In which stage is CO₂ released?",
                options: [
                    { id: "a", text: "Glycolysis" },
                    { id: "b", text: "Krebs Cycle" },
                    { id: "c", text: "ETC" },
                    { id: "d", text: "Chemiosmosis" }
                ],
                answer: "b",
                explanation: "CO₂ is produced during decarboxylation in Krebs cycle."
            },

            {
                id: "ch12q10",
                text: "Fermentation occurs in the absence of:",
                options: [
                    { id: "a", text: "Glucose" },
                    { id: "b", text: "NADH" },
                    { id: "c", text: "Oxygen" },
                    { id: "d", text: "ADP" }
                ],
                answer: "c",
                explanation: "Fermentation is an anaerobic process."
            }
        ]
    },

    /* ---------------------------------------------------------
       CHAPTER 13 – Plant Growth and Development (10 Questions)
    --------------------------------------------------------- */
    {
        id: "ch13",
        title: "Plant Growth and Development",
        questions: [

            {
                id: "ch13q1",
                text: "Which hormone promotes cell elongation?",
                options: [
                    { id: "a", text: "Auxin" },
                    { id: "b", text: "Cytokinin" },
                    { id: "c", text: "ABA" },
                    { id: "d", text: "Ethylene" }
                ],
                answer: "a",
                explanation: "Auxin promotes elongation of cells."
            },

            {
                id: "ch13q2",
                text: "Which pigment perceives photoperiod?",
                options: [
                    { id: "a", text: "Carotene" },
                    { id: "b", text: "Phytochrome" },
                    { id: "c", text: "Chlorophyll" },
                    { id: "d", text: "Xanthophyll" }
                ],
                answer: "b",
                explanation: "Phytochrome is the light receptor."
            },

            {
                id: "ch13q3",
                text: "Which hormone breaks seed dormancy?",
                options: [
                    { id: "a", text: "GA" },
                    { id: "b", text: "ABA" },
                    { id: "c", text: "Cytokinin" },
                    { id: "d", text: "Ethylene" }
                ],
                answer: "a",
                explanation: "Gibberellin breaks seed dormancy."
            },

            {
                id: "ch13q4",
                text: "Circadian rhythm is:",
                options: [
                    { id: "a", text: "24-hour cycle" },
                    { id: "b", text: "12-hour cycle" },
                    { id: "c", text: "Annual cycle" },
                    { id: "d", text: "Seasonal cycle" }
                ],
                answer: "a",
                explanation: "Circadian rhythms repeat every 24 hours."
            },

            {
                id: "ch13q5",
                text: "Which hormone is a natural inhibitor?",
                options: [
                    { id: "a", text: "Auxin" },
                    { id: "b", text: "GA" },
                    { id: "c", text: "ABA" },
                    { id: "d", text: "Cytokinin" }
                ],
                answer: "c",
                explanation: "ABA promotes dormancy and inhibits growth."
            },

            {
                id: "ch13q6",
                text: "Phototropism is caused by uneven distribution of:",
                options: [
                    { id: "a", text: "Auxin" },
                    { id: "b", text: "GA" },
                    { id: "c", text: "ABA" },
                    { id: "d", text: "Cytokinin" }
                ],
                answer: "a",
                explanation: "Auxin accumulates on the shaded side."
            },

            {
                id: "ch13q7",
                text: "Vernalization is:",
                options: [
                    { id: "a", text: "Effect of light" },
                    { id: "b", text: "Effect of cold" },
                    { id: "c", text: "Effect of water" },
                    { id: "d", text: "Effect of hormones" }
                ],
                answer: "b",
                explanation: "Vernalization means induction by cold."
            },

            {
                id: "ch13q8",
                text: "Which hormone induces flowering in long-day plants?",
                options: [
                    { id: "a", text: "Cytokinin" },
                    { id: "b", text: "Florigen" },
                    { id: "c", text: "GA" },
                    { id: "d", text: "Auxin" }
                ],
                answer: "b",
                explanation: "Florigen is flowering hormone."
            },

            {
                id: "ch13q9",
                text: "Apical dominance is controlled by:",
                options: [
                    { id: "a", text: "ABA" },
                    { id: "b", text: "Cytokinin" },
                    { id: "c", text: "Auxin" },
                    { id: "d", text: "Ethylene" }
                ],
                answer: "c",
                explanation: "Auxin suppresses lateral buds."
            },

            {
                id: "ch13q10",
                text: "Fruit ripening is promoted by:",
                options: [
                    { id: "a", text: "Auxin" },
                    { id: "b", text: "GA" },
                    { id: "c", text: "ABA" },
                    { id: "d", text: "Ethylene" }
                ],
                answer: "d",
                explanation: "Ethylene promotes fruit ripening."
            }
        ]
    },

    /* ---------------------------------------------------------
       CHAPTER 14 – Breathing & Gas Exchange (10 Questions)
    --------------------------------------------------------- */
    {
        id: "ch14",
        title: "Breathing and Exchange of Gases",
        questions: [

            {
                id: "ch14q1",
                text: "The functional unit of lungs is:",
                options: [
                    { id: "a", text: "Alveoli" },
                    { id: "b", text: "Nephron" },
                    { id: "c", text: "Villi" },
                    { id: "d", text: "Bronchi" }
                ],
                answer: "a",
                explanation: "Alveoli are sites of gas exchange."
            },

            {
                id: "ch14q2",
                text: "Normal breathing rate per minute is:",
                options: [
                    { id: "a", text: "12-16" },
                    { id: "b", text: "5-6" },
                    { id: "c", text: "25-30" },
                    { id: "d", text: "2-3" }
                ],
                answer: "a",
                explanation: "Average breathing rate is 12–16/min."
            },

            {
                id: "ch14q3",
                text: "Oxygen binds with hemoglobin to form:",
                options: [
                    { id: "a", text: "Carboxyhemoglobin" },
                    { id: "b", text: "Oxyhemoglobin" },
                    { id: "c", text: "Methemoglobin" },
                    { id: "d", text: "Carbaminohemoglobin" }
                ],
                answer: "b",
                explanation: "Hb + O₂ → Oxyhemoglobin."
            },

            {
                id: "ch14q4",
                text: "Most CO₂ is transported as:",
                options: [
                    { id: "a", text: "Carbaminohemoglobin" },
                    { id: "b", text: "Dissolved CO₂" },
                    { id: "c", text: "Bicarbonate ions" },
                    { id: "d", text: "CO₂ gas" }
                ],
                answer: "c",
                explanation: "Around 70% CO₂ is carried as bicarbonate ions."
            },

            {
                id: "ch14q5",
                text: "Inspiration occurs when:",
                options: [
                    { id: "a", text: "Diaphragm relaxes" },
                    { id: "b", text: "Diaphragm contracts" },
                    { id: "c", text: "Lungs shrink" },
                    { id: "d", text: "Thoracic volume decreases" }
                ],
                answer: "b",
                explanation: "Contraction increases thoracic volume."
            },

            {
                id: "ch14q6",
                text: "The respiratory pigment in humans is:",
                options: [
                    { id: "a", text: "Chlorocruorin" },
                    { id: "b", text: "Hemocyanin" },
                    { id: "c", text: "Hemoglobin" },
                    { id: "d", text: "Haemocyanin" }
                ],
                answer: "c",
                explanation: "Hemoglobin is iron-based pigment."
            },

            {
                id: "ch14q7",
                text: "Bohr effect explains:",
                options: [
                    { id: "a", text: "CO₂ effect on O₂ binding" },
                    { id: "b", text: "N₂ solubility" },
                    { id: "c", text: "Haldane effect" },
                    { id: "d", text: "Diffusion of gases" }
                ],
                answer: "a",
                explanation: "High CO₂ decreases Hb's affinity for O₂."
            },

            {
                id: "ch14q8",
                text: "Which part controls breathing rhythm?",
                options: [
                    { id: "a", text: "Cerebellum" },
                    { id: "b", text: "Medulla oblongata" },
                    { id: "c", text: "Hypothalamus" },
                    { id: "d", text: "Frontal lobe" }
                ],
                answer: "b",
                explanation: "Medulla controls respiratory rhythm."
            },

            {
                id: "ch14q9",
                text: "Vital capacity is:",
                options: [
                    { id: "a", text: "TV + IRV + ERV" },
                    { id: "b", text: "TV + RV" },
                    { id: "c", text: "ERV + RV" },
                    { id: "d", text: "TV + RV + IRV" }
                ],
                answer: "a",
                explanation: "Vital capacity = tidal + inspiratory reserve + expiratory reserve."
            },

            {
                id: "ch14q10",
                text: "Tidal volume of an adult is:",
                options: [
                    { id: "a", text: "100 mL" },
                    { id: "b", text: "250 mL" },
                    { id: "c", text: "500 mL" },
                    { id: "d", text: "1500 mL" }
                ],
                answer: "c",
                explanation: "Normal tidal volume ≈ 500 mL."
            }
        ]
    },

    /* ---------------------------------------------------------
       CHAPTER 15 – Body Fluids & Circulation (10 Questions)
    --------------------------------------------------------- */
    {
        id: "ch15",
        title: "Body Fluids and Circulation",
        questions: [

            {
                id: "ch15q1",
                text: "Which blood group is universal donor?",
                options: [
                    { id: "a", text: "O-" },
                    { id: "b", text: "AB+" },
                    { id: "c", text: "A+" },
                    { id: "d", text: "B-" }
                ],
                answer: "a",
                explanation: "O− has no antigens."
            },

            {
                id: "ch15q2",
                text: "Normal pH of blood is:",
                options: [
                    { id: "a", text: "6.8" },
                    { id: "b", text: "7.4" },
                    { id: "c", text: "5.5" },
                    { id: "d", text: "8.0" }
                ],
                answer: "b",
                explanation: "Human blood pH ≈ 7.4."
            },

            {
                id: "ch15q3",
                text: "Heartbeat is initiated by:",
                options: [
                    { id: "a", text: "AV Node" },
                    { id: "b", text: "Purkinje fibres" },
                    { id: "c", text: "SA Node" },
                    { id: "d", text: "Bundle of His" }
                ],
                answer: "c",
                explanation: "SA node is pacemaker."
            },

            {
                id: "ch15q4",
                text: "Which blood vessel carries oxygenated blood?",
                options: [
                    { id: "a", text: "Pulmonary artery" },
                    { id: "b", text: "Pulmonary vein" },
                    { id: "c", text: "Vena cava" },
                    { id: "d", text: "Renal vein" }
                ],
                answer: "b",
                explanation: "Pulmonary vein carries oxygenated blood to the heart."
            },

            {
                id: "ch15q5",
                text: "Which component of blood helps in clotting?",
                options: [
                    { id: "a", text: "RBC" },
                    { id: "b", text: "WBC" },
                    { id: "c", text: "Platelets" },
                    { id: "d", text: "Plasma" }
                ],
                answer: "c",
                explanation: "Platelets release clotting factors."
            },

            {
                id: "ch15q6",
                text: "Normal blood pressure is:",
                options: [
                    { id: "a", text: "120/80 mmHg" },
                    { id: "b", text: "140/90 mmHg" },
                    { id: "c", text: "100/70 mmHg" },
                    { id: "d", text: "80/120 mmHg" }
                ],
                answer: "a",
                explanation: "Normal BP ≈ 120/80."
            },

            {
                id: "ch15q7",
                text: "Which artery supplies blood to kidneys?",
                options: [
                    { id: "a", text: "Hepatic artery" },
                    { id: "b", text: "Renal artery" },
                    { id: "c", text: "Pulmonary artery" },
                    { id: "d", text: "Carotid artery" }
                ],
                answer: "b",
                explanation: "Renal artery → kidneys."
            },

            {
                id: "ch15q8",
                text: "Plasma without clotting factors is called:",
                options: [
                    { id: "a", text: "Serum" },
                    { id: "b", text: "Lymph" },
                    { id: "c", text: "Platelets" },
                    { id: "d", text: "Tissue fluid" }
                ],
                answer: "a",
                explanation: "Serum = plasma − fibrinogen."
            },

            {
                id: "ch15q9",
                text: "Largest WBC is:",
                options: [
                    { id: "a", text: "Neutrophil" },
                    { id: "b", text: "Eosinophil" },
                    { id: "c", text: "Basophil" },
                    { id: "d", text: "Monocyte" }
                ],
                answer: "d",
                explanation: "Monocytes are the largest WBCs."
            },

            {
                id: "ch15q10",
                text: "Heart sound 'lub' is produced by closure of:",
                options: [
                    { id: "a", text: "Semilunar valves" },
                    { id: "b", text: "Atrioventricular valves" },
                    { id: "c", text: "Mitral valve only" },
                    { id: "d", text: "Pulmonary valve only" }
                ],
                answer: "b",
                explanation: "'Lub' = AV valves close."
            }
        ]
    },

    /* ---------------------------------------------------------
       CHAPTER 16 – Excretion (10 Questions)
    --------------------------------------------------------- */
    {
        id: "ch16",
        title: "Excretory Products and Their Elimination",
        questions: [

            {
                id: "ch16q1",
                text: "The functional unit of kidney is:",
                options: [
                    { id: "a", text: "Nephron" },
                    { id: "b", text: "Neuron" },
                    { id: "c", text: "Alveolus" },
                    { id: "d", text: "Glomerulus" }
                ],
                answer: "a",
                explanation: "Nephron filters blood."
            },

            {
                id: "ch16q2",
                text: "Which is the main nitrogenous waste in humans?",
                options: [
                    { id: "a", text: "Ammonia" },
                    { id: "b", text: "Urea" },
                    { id: "c", text: "Uric acid" },
                    { id: "d", text: "Amino acids" }
                ],
                answer: "b",
                explanation: "Humans are ureotelic."
            },

            {
                id: "ch16q3",
                text: "Bowman's capsule encloses:",
                options: [
                    { id: "a", text: "Loop of Henle" },
                    { id: "b", text: "Glomerulus" },
                    { id: "c", text: "DCT" },
                    { id: "d", text: "Collecting duct" }
                ],
                answer: "b",
                explanation: "Bowman's capsule surrounds the glomerulus."
            },

            {
                id: "ch16q4",
                text: "Which hormone increases water reabsorption?",
                options: [
                    { id: "a", text: "Aldosterone" },
                    { id: "b", text: "ADH" },
                    { id: "c", text: "Insulin" },
                    { id: "d", text: "Thyroxine" }
                ],
                answer: "b",
                explanation: "ADH increases water reabsorption."
            },

            {
                id: "ch16q5",
                text: "Maximum water reabsorption occurs in:",
                options: [
                    { id: "a", text: "DCT" },
                    { id: "b", text: "Collecting duct" },
                    { id: "c", text: "PCT" },
                    { id: "d", text: "Loop of Henle" }
                ],
                answer: "c",
                explanation: "PCT absorbs ~65% water."
            },

            {
                id: "ch16q6",
                text: "Filtration of blood occurs in:",
                options: [
                    { id: "a", text: "Bowman’s capsule" },
                    { id: "b", text: "PCT" },
                    { id: "c", text: "DCT" },
                    { id: "d", text: "Collecting duct" }
                ],
                answer: "a",
                explanation: "Ultrafiltration occurs in Bowman’s capsule."
            },

            {
                id: "ch16q7",
                text: "Which part forms urine concentration?",
                options: [
                    { id: "a", text: "Proximal tubule" },
                    { id: "b", text: "Loop of Henle" },
                    { id: "c", text: "Collecting duct" },
                    { id: "d", text: "Renal pelvis" }
                ],
                answer: "b",
                explanation: "Loop of Henle creates concentration gradient."
            },

            {
                id: "ch16q8",
                text: "Kidney stones are mainly:",
                options: [
                    { id: "a", text: "Calcium oxalate" },
                    { id: "b", text: "Sodium chloride" },
                    { id: "c", text: "Magnesium sulphate" },
                    { id: "d", text: "Urea crystals" }
                ],
                answer: "a",
                explanation: "Most stones are calcium oxalate."
            },

            {
                id: "ch16q9",
                text: "Which organ excretes bilirubin?",
                options: [
                    { id: "a", text: "Kidney" },
                    { id: "b", text: "Liver" },
                    { id: "c", text: "Skin" },
                    { id: "d", text: "Lungs" }
                ],
                answer: "b",
                explanation: "Liver excretes bilirubin through bile."
            },

            {
                id: "ch16q10",
                text: "Micturition is:",
                options: [
                    { id: "a", text: "Formation of urine" },
                    { id: "b", text: "Release of urine" },
                    { id: "c", text: "Filtration of blood" },
                    { id: "d", text: "Reabsorption of water" }
                ],
                answer: "b",
                explanation: "Micturition = urination."
            }
        ]
    },
    /* ---------------------------------------------------------
          CHAPTER 17 – Locomotion and Movement (10 Questions)
       --------------------------------------------------------- */
    {
        id: "ch17_locomotion",
        title: "Locomotion and Movement",
        questions: [

            {
                id: "ch17q1",
                text: "Which protein forms the thick filament in a myofibril?",
                options: [
                    { id: "a", text: "Actin" },
                    { id: "b", text: "Myosin" },
                    { id: "c", text: "Troponin" },
                    { id: "d", text: "Tropomyosin" }
                ],
                answer: "b",
                explanation: "Myosin forms thick filaments while actin forms thin filaments."
            },

            {
                id: "ch17q2",
                text: "Which ion is essential for muscle contraction?",
                options: [
                    { id: "a", text: "Na⁺" },
                    { id: "b", text: "K⁺" },
                    { id: "c", text: "Ca²⁺" },
                    { id: "d", text: "Mg²⁺" }
                ],
                answer: "c",
                explanation: "Calcium ions bind to troponin and initiate contraction."
            },

            {
                id: "ch17q3",
                text: "Which part of the sarcomere shortens during muscle contraction?",
                options: [
                    { id: "a", text: "A-band" },
                    { id: "b", text: "I-band" },
                    { id: "c", text: "H-zone" },
                    { id: "d", text: "Both I-band and H-zone" }
                ],
                answer: "d",
                explanation: "During contraction, both I-band and H-zone decrease in length."
            },

            {
                id: "ch17q4",
                text: "The functional unit of muscle contraction is:",
                options: [
                    { id: "a", text: "Myofibril" },
                    { id: "b", text: "Sarcomere" },
                    { id: "c", text: "Muscle fiber" },
                    { id: "d", text: "Fascicle" }
                ],
                answer: "b",
                explanation: "Sarcomere is the structural and functional unit of contraction."
            },

            {
                id: "ch17q5",
                text: "Which joint allows movement in all directions?",
                options: [
                    { id: "a", text: "Hinge joint" },
                    { id: "b", text: "Ball and socket joint" },
                    { id: "c", text: "Pivot joint" },
                    { id: "d", text: "Gliding joint" }
                ],
                answer: "b",
                explanation: "Ball-and-socket joints (e.g., shoulder) allow multi-direction movement."
            },

            {
                id: "ch17q6",
                text: "The largest bone in the human body is:",
                options: [
                    { id: "a", text: "Humerus" },
                    { id: "b", text: "Femur" },
                    { id: "c", text: "Tibia" },
                    { id: "d", text: "Pelvis" }
                ],
                answer: "b",
                explanation: "Femur is the longest and strongest bone."
            },

            {
                id: "ch17q7",
                text: "Rickets is caused due to deficiency of:",
                options: [
                    { id: "a", text: "Vitamin A" },
                    { id: "b", text: "Vitamin C" },
                    { id: "c", text: "Vitamin D" },
                    { id: "d", text: "Vitamin K" }
                ],
                answer: "c",
                explanation: "Vitamin D is necessary for bone mineralization."
            },

            {
                id: "ch17q8",
                text: "Which of the following is an example of a synovial joint?",
                options: [
                    { id: "a", text: "Suture of skull" },
                    { id: "b", text: "Intervertebral joint" },
                    { id: "c", text: "Hip joint" },
                    { id: "d", text: "Pubic symphysis" }
                ],
                answer: "c",
                explanation: "Hip joint is a typical ball-and-socket synovial joint."
            },

            {
                id: "ch17q9",
                text: "Which structure connects muscle to bone?",
                options: [
                    { id: "a", text: "Ligament" },
                    { id: "b", text: "Tendon" },
                    { id: "c", text: "Cartilage" },
                    { id: "d", text: "Fascia" }
                ],
                answer: "b",
                explanation: "Tendons attach muscles to bones; ligaments bone to bone."
            },

            {
                id: "ch17q10",
                text: "Which disease involves degeneration of motor neurons causing muscle weakness?",
                options: [
                    { id: "a", text: "Arthritis" },
                    { id: "b", text: "Osteoporosis" },
                    { id: "c", text: "ALS" },
                    { id: "d", text: "Gout" }
                ],
                answer: "c",
                explanation: "ALS (Amyotrophic Lateral Sclerosis) affects motor neurons."
            }
        ]
    },
    /* ---------------------------------------------------------
      CHAPTER 18 – Neural Control and Coordination (10 Questions)
    --------------------------------------------------------- */
    {
        id: "ch18_neural",
        title: "Neural Control and Coordination",
        questions: [

            {
                id: "ch18q1",
                text: "The structural and functional unit of the nervous system is:",
                options: [
                    { id: "a", text: "Neuron" },
                    { id: "b", text: "Axon" },
                    { id: "c", text: "Dendrite" },
                    { id: "d", text: "Synapse" }
                ],
                answer: "a",
                explanation: "Neuron is the basic functional and structural unit of the nervous system."
            },

            {
                id: "ch18q2",
                text: "Myelin sheath around axons is formed by:",
                options: [
                    { id: "a", text: "Astrocytes" },
                    { id: "b", text: "Schwann cells" },
                    { id: "c", text: "Microglia" },
                    { id: "d", text: "Ependymal cells" }
                ],
                answer: "b",
                explanation: "Schwann cells form the myelin sheath in the peripheral nervous system."
            },

            {
                id: "ch18q3",
                text: "Which part of the brain controls posture and balance?",
                options: [
                    { id: "a", text: "Cerebrum" },
                    { id: "b", text: "Hypothalamus" },
                    { id: "c", text: "Cerebellum" },
                    { id: "d", text: "Medulla oblongata" }
                ],
                answer: "c",
                explanation: "Cerebellum maintains posture, balance and coordination."
            },

            {
                id: "ch18q4",
                text: "The gap between two neurons is called:",
                options: [
                    { id: "a", text: "Node of Ranvier" },
                    { id: "b", text: "Synapse" },
                    { id: "c", text: "Axon hillock" },
                    { id: "d", text: "Nissl granule" }
                ],
                answer: "b",
                explanation: "Synapse is the functional junction between two neurons."
            },

            {
                id: "ch18q5",
                text: "Which ion is essential for the release of neurotransmitters at synapse?",
                options: [
                    { id: "a", text: "Sodium" },
                    { id: "b", text: "Potassium" },
                    { id: "c", text: "Calcium" },
                    { id: "d", text: "Chloride" }
                ],
                answer: "c",
                explanation: "Influx of Ca²⁺ into synaptic knobs triggers neurotransmitter release."
            },

            {
                id: "ch18q6",
                text: "Reflex actions are controlled by:",
                options: [
                    { id: "a", text: "Brain" },
                    { id: "b", text: "Cerebellum" },
                    { id: "c", text: "Spinal cord" },
                    { id: "d", text: "Medulla" }
                ],
                answer: "c",
                explanation: "Reflex arcs are mediated mainly through the spinal cord."
            },

            {
                id: "ch18q7",
                text: "Which part of the brain regulates hunger and body temperature?",
                options: [
                    { id: "a", text: "Pons" },
                    { id: "b", text: "Thalamus" },
                    { id: "c", text: "Hypothalamus" },
                    { id: "d", text: "Cerebrum" }
                ],
                answer: "c",
                explanation: "Hypothalamus maintains homeostasis including temperature, hunger and thirst."
            },

            {
                id: "ch18q8",
                text: "The fluid present in the ventricles of the brain is:",
                options: [
                    { id: "a", text: "Lymph" },
                    { id: "b", text: "Cerebrospinal fluid" },
                    { id: "c", text: "Plasma" },
                    { id: "d", text: "Synovial fluid" }
                ],
                answer: "b",
                explanation: "CSF protects the brain and spinal cord by cushioning."
            },

            {
                id: "ch18q9",
                text: "Repolarization of a neuron membrane occurs due to:",
                options: [
                    { id: "a", text: "Influx of Na⁺" },
                    { id: "b", text: "Efflux of K⁺" },
                    { id: "c", text: "Influx of Ca²⁺" },
                    { id: "d", text: "Efflux of Cl⁻" }
                ],
                answer: "b",
                explanation: "Outflow of K⁺ restores the negative membrane potential."
            },

            {
                id: "ch18q10",
                text: "Which part of the eye regulates the amount of light entering it?",
                options: [
                    { id: "a", text: "Lens" },
                    { id: "b", text: "Retina" },
                    { id: "c", text: "Iris" },
                    { id: "d", text: "Cornea" }
                ],
                answer: "c",
                explanation: "Iris controls pupil size, thereby regulating light entry."
            }
        ]
    },

    /* ---------------------------------------------------------
      CHAPTER 19 – Chemical Coordination and Integration  (10 Questions)
    --------------------------------------------------------- */
    {
        id: "ch19_chemical",
        title: "Chemical Coordination and Integration",
        questions: [

            {
                id: "ch19q1",
                text: "Which gland is known as the 'master gland' of the endocrine system?",
                options: [
                    { id: "a", text: "Thyroid gland" },
                    { id: "b", text: "Pituitary gland" },
                    { id: "c", text: "Adrenal gland" },
                    { id: "d", text: "Pancreas" }
                ],
                answer: "b",
                explanation: "The pituitary gland regulates the activity of many other endocrine glands."
            },

            {
                id: "ch19q2",
                text: "Which hormone is responsible for regulating the basal metabolic rate (BMR)?",
                options: [
                    { id: "a", text: "Insulin" },
                    { id: "b", text: "Thyroxine" },
                    { id: "c", text: "Aldosterone" },
                    { id: "d", text: "Prolactin" }
                ],
                answer: "b",
                explanation: "Thyroxine produced by the thyroid gland regulates BMR."
            },

            {
                id: "ch19q3",
                text: "Which hormone is secreted by the adrenal medulla?",
                options: [
                    { id: "a", text: "Cortisol" },
                    { id: "b", text: "Adrenaline" },
                    { id: "c", text: "Aldosterone" },
                    { id: "d", text: "Melatonin" }
                ],
                answer: "b",
                explanation: "Adrenaline (epinephrine) is released during stress and increases alertness."
            },

            {
                id: "ch19q4",
                text: "Which hormone decreases blood glucose levels?",
                options: [
                    { id: "a", text: "Glucagon" },
                    { id: "b", text: "Insulin" },
                    { id: "c", text: "Thyroxine" },
                    { id: "d", text: "Cortisol" }
                ],
                answer: "b",
                explanation: "Insulin promotes glucose uptake by cells and lowers blood sugar."
            },

            {
                id: "ch19q5",
                text: "Which hormone controls sleep–wake cycles (circadian rhythm)?",
                options: [
                    { id: "a", text: "Oxytocin" },
                    { id: "b", text: "Melatonin" },
                    { id: "c", text: "TSH" },
                    { id: "d", text: "FSH" }
                ],
                answer: "b",
                explanation: "Melatonin is secreted by the pineal gland and regulates circadian rhythm."
            },

            {
                id: "ch19q6",
                text: "Which gland secretes parathyroid hormone (PTH)?",
                options: [
                    { id: "a", text: "Thyroid gland" },
                    { id: "b", text: "Pituitary gland" },
                    { id: "c", text: "Parathyroid gland" },
                    { id: "d", text: "Pancreas" }
                ],
                answer: "c",
                explanation: "PTH regulates calcium and phosphate levels in the blood."
            },

            {
                id: "ch19q7",
                text: "Aldosterone mainly regulates:",
                options: [
                    { id: "a", text: "Blood sugar levels" },
                    { id: "b", text: "Calcium absorption" },
                    { id: "c", text: "Sodium and water balance" },
                    { id: "d", text: "RBC production" }
                ],
                answer: "c",
                explanation: "Aldosterone increases sodium reabsorption and water retention."
            },

            {
                id: "ch19q8",
                text: "Which hormone is responsible for the 'fight or flight' response?",
                options: [
                    { id: "a", text: "Insulin" },
                    { id: "b", text: "Adrenaline" },
                    { id: "c", text: "Thyroxine" },
                    { id: "d", text: "GH" }
                ],
                answer: "b",
                explanation: "Adrenaline prepares the body for emergency situations."
            },

            {
                id: "ch19q9",
                text: "Which part of the brain controls pituitary gland secretions?",
                options: [
                    { id: "a", text: "Cerebellum" },
                    { id: "b", text: "Hypothalamus" },
                    { id: "c", text: "Medulla oblongata" },
                    { id: "d", text: "Cerebrum" }
                ],
                answer: "b",
                explanation: "The hypothalamus releases hormones that regulate the pituitary gland."
            },

            {
                id: "ch19q10",
                text: "Which hormone increases water reabsorption in the kidneys?",
                options: [
                    { id: "a", text: "LH" },
                    { id: "b", text: "TSH" },
                    { id: "c", text: "ADH" },
                    { id: "d", text: "FSH" }
                ],
                answer: "c",
                explanation: "ADH (vasopressin) increases water reabsorption in kidney tubules."
            }
        ]
    }
];