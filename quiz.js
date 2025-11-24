/****************************************************************
        * Quiz data - add/update questions here
        * Each chapter has id, title, questions: [{id,text,options:[{id,text}],answer:optionId, explanation}]
        ****************************************************************/


const QUIZ_DB = [
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
                id: "ch1q3",
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
        ]
    },

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
            }
        ]
    },

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
            }
        ]
    },

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
                explanation: "Cnidarians exhibit radial symmetry."
            }
        ]
    },

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
                explanation: "Mango is a drupe; its mesocarp is edible."
            }
        ]
    },

    {
        id: "ch6",
        title: "Anatomy of Flowering Plants",
        questions: [
            {
                id: "ch6q1",
                text: "Casparian strips occur in:",
                options: [
                    { id: "a", text: "Endodermis" },
                    { id: "b", text: "Epidermis" },
                    { id: "c", text: "Cortex" },
                    { id: "d", text: "Pericycle" }
                ],
                answer: "a",
                explanation: "Endodermis contains Casparian strips."
            }
        ]
    },

    {
        id: "ch7",
        title: "Structural Organisation in Animals",
        questions: [
            {
                id: "ch7q1",
                text: "The functional unit of the liver is:",
                options: [
                    { id: "a", text: "Lobule" },
                    { id: "b", text: "Nephron" },
                    { id: "c", text: "Neuron" },
                    { id: "d", text: "Alveoli" }
                ],
                answer: "a",
                explanation: "Liver lobules are structural and functional units."
            }
        ]
    },

    {
        id: "ch8",
        title: "Cell: The Unit of Life",
        questions: [
            {
                id: "ch8q1",
                text: "Mitochondria are known as:",
                options: [
                    { id: "a", text: "Powerhouse of the cell" },
                    { id: "b", text: "Kitchen of the cell" },
                    { id: "c", text: "Control center" },
                    { id: "d", text: "Protein factory" }
                ],
                answer: "a",
                explanation: "Mitochondria produce ATP."
            }
        ]
    },

    {
        id: "ch9",
        title: "Cell Cycle and Cell Division",
        questions: [
            {
                id: "ch9q1",
                text: "Which phase involves chromosome condensation?",
                options: [
                    { id: "a", text: "Prophase" },
                    { id: "b", text: "Metaphase" },
                    { id: "c", text: "Anaphase" },
                    { id: "d", text: "Telophase" }
                ],
                answer: "a",
                explanation: "Chromosomes condense during prophase."
            }
        ]
    },

    {
        id: "ch10",
        title: "Cell Cycle and Cell Division",
        questions: [
            {
                id: "ch10q1",
                text: "Which phase involves separation of sister chromatids?",
                options: [
                    { id: "a", text: "Anaphase" },
                    { id: "b", text: "Prophase" },
                    { id: "c", text: "Telophase" },
                    { id: "d", text: "Interphase" }
                ],
                answer: "a",
                explanation: "Chromatids separate during anaphase."
            }
        ]
    },

    {
        id: "ch11",
        title: "Transport in Plants",
        questions: [
            {
                id: "ch11q1",
                text: "Which tissue transports water?",
                options: [
                    { id: "a", text: "Xylem" },
                    { id: "b", text: "Phloem" },
                    { id: "c", text: "Parenchyma" },
                    { id: "d", text: "Collenchyma" }
                ],
                answer: "a",
                explanation: "Xylem transports water and minerals."
            }
        ]
    },

    {
        id: "ch12",
        title: "Mineral Nutrition",
        questions: [
            {
                id: "ch12q1",
                text: "Nodule formation occurs in:",
                options: [
                    { id: "a", text: "Legumes" },
                    { id: "b", text: "Gymnosperms" },
                    { id: "c", text: "Algae" },
                    { id: "d", text: "Bryophytes" }
                ],
                answer: "a",
                explanation: "Rhizobium forms nodules in leguminous plants."
            }
        ]
    },

    {
        id: "ch13",
        title: "Photosynthesis in Higher Plants",
        questions: [
            {
                id: "ch13q1",
                text: "Where does the Calvin cycle occur?",
                options: [
                    { id: "a", text: "Stroma" },
                    { id: "b", text: "Thylakoid" },
                    { id: "c", text: "Mitochondria" },
                    { id: "d", text: "Cytoplasm" }
                ],
                answer: "a",
                explanation: "The Calvin cycle occurs in the stroma of chloroplasts."
            }
        ]
    },

    {
        id: "ch14",
        title: "Respiration in Plants",
        questions: [
            {
                id: "ch14q1",
                text: "Which is the universal energy currency?",
                options: [
                    { id: "a", text: "ATP" },
                    { id: "b", text: "ADP" },
                    { id: "c", text: "GTP" },
                    { id: "d", text: "NADH" }
                ],
                answer: "a",
                explanation: "ATP is the universal energy currency."
            }
        ]
    },

    {
        id: "ch15",
        title: "Plant Growth and Development",
        questions: [
            {
                id: "ch15q1",
                text: "Which hormone promotes cell elongation?",
                options: [
                    { id: "a", text: "Auxin" },
                    { id: "b", text: "Cytokinin" },
                    { id: "c", text: "ABA" },
                    { id: "d", text: "Ethylene" }
                ],
                answer: "a",
                explanation: "Auxin promotes cell elongation."
            }
        ]
    },

    {
        id: "ch16",
        title: "Digestion and Absorption",
        questions: [
            {
                id: "ch16q1",
                text: "Which enzyme breaks down proteins?",
                options: [
                    { id: "a", text: "Pepsin" },
                    { id: "b", text: "Amylase" },
                    { id: "c", text: "Lipase" },
                    { id: "d", text: "Maltase" }
                ],
                answer: "a",
                explanation: "Pepsin digests proteins."
            }
        ]
    },

    {
        id: "ch17",
        title: "Breathing and Exchange of Gases",
        questions: [
            {
                id: "ch17q1",
                text: "The functional unit of lungs is:",
                options: [
                    { id: "a", text: "Alveoli" },
                    { id: "b", text: "Nephron" },
                    { id: "c", text: "Villi" },
                    { id: "d", text: "Bronchi" }
                ],
                answer: "a",
                explanation: "Alveoli allow gas exchange."
            }
        ]
    },

    {
        id: "ch18",
        title: "Body Fluids and Circulation",
        questions: [
            {
                id: "ch18q1",
                text: "Which blood group is universal donor?",
                options: [
                    { id: "a", text: "O-" },
                    { id: "b", text: "AB+" },
                    { id: "c", text: "A+" },
                    { id: "d", text: "B-" }
                ],
                answer: "a",
                explanation: "O- has no antigens, so universal donor."
            }
        ]
    },

    {
        id: "ch19",
        title: "Excretory Products and Their Elimination",
        questions: [
            {
                id: "ch19q1",
                text: "The functional unit of kidney is:",
                options: [
                    { id: "a", text: "Nephron" },
                    { id: "b", text: "Neuron" },
                    { id: "c", text: "Alveolus" },
                    { id: "d", text: "Glomerulus" }
                ],
                answer: "a",
                explanation: "Nephron filters blood."
            }
        ]
    },

    {
        id: "ch20",
        title: "Locomotion and Movement",
        questions: [
            {
                id: "ch20q1",
                text: "Which protein is responsible for muscle contraction?",
                options: [
                    { id: "a", text: "Actin & Myosin" },
                    { id: "b", text: "Keratin" },
                    { id: "c", text: "Collagen" },
                    { id: "d", text: "Elastin" }
                ],
                answer: "a",
                explanation: "Muscles contract by actin and myosin interaction."
            }
        ]
    },

    {
        id: "ch21",
        title: "Neural Control and Coordination",
        questions: [
            {
                id: "ch21q1",
                text: "Unit of nervous system is:",
                options: [
                    { id: "a", text: "Neuron" },
                    { id: "b", text: "Nephron" },
                    { id: "c", text: "Axon" },
                    { id: "d", text: "Dendrite" }
                ],
                answer: "a",
                explanation: "Neuron is functional and structural unit."
            }
        ]
    },

    {
        id: "ch22",
        title: "Chemical Coordination and Integration",
        questions: [
            {
                id: "ch22q1",
                text: "Which gland is called master gland?",
                options: [
                    { id: "a", text: "Pituitary" },
                    { id: "b", text: "Thyroid" },
                    { id: "c", text: "Adrenal" },
                    { id: "d", text: "Pancreas" }
                ],
                answer: "a",
                explanation: "Pituitary regulates all other endocrine glands."
            }
        ]
    }
];