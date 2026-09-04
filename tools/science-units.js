/* ─────────────────────────────────────────────────────────────────────────
   science-units.js — the life science course outline.

   🚨 TRANSCRIBED FROM THE BOOK'S OWN CONTENTS PAGES, NOT INFERRED. Read off the
   Internet Archive reader on 2026-09-04, spreads iv-v, vi-vii, viii-ix, x-xi and
   xii, with Paul's borrow. Nothing here was guessed and nothing was invented to
   round a chapter out. If a row is not in this file it was not on the page —
   the same rule that makes english-units.js and maths-units.js trustworthy.

   Merrill Life Science — Lucy Daniel · Glencoe / Macmillan / McGraw-Hill, 1994
   791 pages · archive.org/details/merrilllifescien0000dani
   🚨 BORROW-ONLY (internetarchivebooks · inlibrary · printdisabled). Paul borrows
   it and the spreads are read from the live reader. Do not claim open access.

   ══ WHY A CHAPTER IS A "UNIT" HERE ══
   The book has 8 UNITS holding 28 CHAPTERS holding 107 numbered sections. A book
   unit is far too big for one shelf panel — Unit 6 alone holds 6 chapters and 26
   sections. A CHAPTER is four sections on average, which is the size the panel was
   built for and the size the four existing science lessons already are.
   So: **the pager's unit IS the book's chapter.** `bookUnit` and `bookUnitTitle`
   keep the larger grouping, because it is real and will matter for a contents page
   later, but nothing renders off it today.

   ⚠️ PAGE NUMBERS ARE BUILD NOTES, for opening the right spread. They are NEVER
   shown on a card. Paul, on the English outlines: "I don't want those pages on
   our lessons."

   ⚠️ A "Science and Society" row IS a numbered section (1-4, 2-4, 3-4 …), so it is
   a lesson like any other. It is not a sidebar. That matters here more than in any
   other subject, because those sections are where the origin question and the
   ethics live → see the side-by-side rule in BEHAVIOR.md.

   ══ 🚨 THE TITLES ARE OURS. THE BOOK'S TITLES ARE A BUILD NOTE ══
   Paul, 2026-09-04: "we agree not use the titles because of copyright ... we were
   going to do life science through like a creation lens." Both halves matter, and
   the second one is the bigger reason: the four built lessons are named for what
   they TEACH under that lens, not for what Merrill calls the section.
     title:  ours. Shown on the card. null until it is written.
     book:   Merrill's wording. A build note for finding the right spread, exactly
             like . 🚨 NEVER RENDERED. Do not "helpfully" fall back to it.
   An unnamed slot shows Coming Soon under its real lesson number. The numbering is
   the book's structure, which is fact and not ours to rename; the name is ours to
   write when the lesson is built.
   ⚠️ 102 of 106 are unnamed today. That is the honest state, not a gap to fill in
   one pass - see the never-assign-an-unbuilt-lesson rule.

   SHAPE
     { n, title, book, page, bookUnit, bookUnitTitle, items: [ { label, title, book, page, kind, slug } ] }
     kind: "lesson"    a numbered section — the thing a slot becomes
           "activity"  a numbered Activity, hands-on
           "feature"   Problem Solving / Technology / Flex Your Brain — a page, not a lesson
     `slug` is the built lesson's id under /lessons/, or absent when nothing is built.

   🚨 ONLY kind === "lesson" IS SHELVED. The 55 activities and the features stay in
   the data so the choice can be remade without re-reading the book — the same rule
   the 39 Mathematics Labs follow in maths-units.js. Change the filter, never the
   data.
   ───────────────────────────────────────────────────────────────────────── */
"use strict";

const LIFE = {
  book: "Merrill Life Science (Glencoe, 1994)",
  archive: "merrilllifescien0000dani",
  units: [
    /* ══ BOOK UNIT 1 — LIFE (p2) ══ */
    {
      n: 1, page: 4, title: "What Life Is, and How We Study It", book: "Exploring Life", bookUnit: 1, bookUnitTitle: "Life",
      items: [
        /* 🚨 ALL FOUR OF THESE ARE BUILT, in Paul's own words, 2026-09-03. This is
           the only complete chapter on the whole shelf. */
        { label: "1-1", title: "What Makes Something Alive", book: "Living Things", page: 6, kind: "lesson",
          slug: "science/what-makes-something-alive" },
        { label: "1-2", title: "Life Only Comes From Life", book: "Where Does Life Come From?", page: 10, kind: "lesson",
          slug: "science/life-only-comes-from-life" },
        { label: "1-3", title: "How We Know What We Know", book: "What Is Science?", page: 13, kind: "lesson",
          slug: "science/how-we-know-what-we-know" },
        { label: "1-4", title: "Science You Use Every Day",
          book: "Science and Society: The Impact of Science on Your Life",
          page: 22, kind: "lesson", slug: "science/science-you-use-every-day" },
        { label: "PS", title: "Problem Solving: The Long Island Duck Problem", page: 16, kind: "feature" },
        { label: "FYB", title: "Flex Your Brain", page: 18, kind: "feature" },
        { label: "T", title: "Technology: Cockleburs and Space Shuttles", page: 19, kind: "feature" },
        { label: "1-1A", title: "Activity: Using a Scientific Method", page: 24, kind: "activity" },
        { label: "1-5", title: "Unit 1 Review: What Life Is, and How We Study It", kind: "review" },
      ],
    },
    {
      n: 2, page: 28, title: "Inside the Cell", book: "The Cell", bookUnit: 1, bookUnitTitle: "Life",
      items: [
        { label: "2-1", title: "Cells: The Building Blocks of Life", book: "Cells: The Units of Life", page: 30, kind: "lesson" },
        { label: "2-2", title: "Inside a Cell, Part by Part", book: "Cell Structure", page: 34, kind: "lesson" },
        { label: "2-3", title: "From Cells to Tissues to Organs", book: "Cell Organization", page: 44, kind: "lesson" },
        { label: "2-4", title: "Organ Transplants, and the Questions They Raise", book: "Science and Society: Organ Transplants", page: 46, kind: "lesson" },
        { label: "T", title: "Technology: A Touch of Diamonds", page: 33, kind: "feature" },
        { label: "PS", title: "Problem Solving: A Tale of a Tail", page: 40, kind: "feature" },
        { label: "2-1A", title: "Activity: Comparing Plant and Animal Cells", page: 43, kind: "activity" },
        { label: "2-2A", title: "Activity: Comparing Plant and Animal Tissues", page: 48, kind: "activity" },
        { label: "2-5", title: "Unit 2 Review: Inside the Cell", kind: "review" },
      ],
    },
    {
      n: 3, page: 52, title: "How Cells Work", book: "Cell Processes", bookUnit: 1, bookUnitTitle: "Life",
      items: [
        { label: "3-1", title: "What Living Things Are Made Of", book: "Chemistry of Living Things", page: 54, kind: "lesson" },
        { label: "3-2", title: "How Things Get In and Out of a Cell", book: "Cell Transport", page: 58, kind: "lesson" },
        { label: "3-3", title: "Where a Cell Gets Its Energy", book: "Energy in Cells", page: 63, kind: "lesson" },
        { label: "3-4", title: "What We Throw Away, and Where It Goes",
          book: "Science and Society: Nondegradable Materials in Your Environment",
          page: 66, kind: "lesson" },
        { label: "PS", title: "Problem Solving: What Happened to the Salad?", page: 61, kind: "feature" },
        { label: "T", title: "Technology: Biodegradable Plastics", page: 65, kind: "feature" },
        { label: "3-1A", title: "Activity: Observing Osmosis", page: 62, kind: "activity" },
        { label: "3-2A", title: "Activity: Photosynthesis and Respiration", page: 68, kind: "activity" },
        { label: "3-5", title: "Unit 3 Review: How Cells Work", kind: "review" },
      ],
    },
    {
      n: 4, page: 72, title: "How Cells Make More Cells", book: "Cell Reproduction", bookUnit: 1, bookUnitTitle: "Life",
      items: [
        { label: "4-1", title: "How a Cell Grows and Divides", book: "Cell Growth and Division", page: 74, kind: "lesson" },
        { label: "4-2", title: "Two Parents, and How Traits Combine", book: "Sexual Reproduction and Meiosis", page: 82, kind: "lesson" },
        { label: "4-3", title: "DNA: The Instructions Inside", book: "DNA", page: 86, kind: "lesson" },
        { label: "4-4", title: "Engineering Living Things, and Where the Line Is", book: "Science and Society: Inventing Organisms", page: 92, kind: "lesson" },
        { label: "PS", title: "Problem Solving: Cell Biology and Cancer Research", page: 78, kind: "feature" },
        { label: "T", title: "Technology: The Bacteria Factory", page: 89, kind: "feature" },
        { label: "4-1A", title: "Activity: Mitosis in Plant and Animal Cells", page: 79, kind: "activity" },
        { label: "4-2A", title: "Activity: Making a Model", page: 94, kind: "activity" },
        { label: "4-5", title: "Unit 4 Review: How Cells Make More Cells", kind: "review" },
      ],
    },

    /* ══ BOOK UNIT 2 — HEREDITY AND EVOLUTION (p102) ══ */
    {
      n: 5, page: 104, title: "How Traits Pass Down", book: "Heredity", bookUnit: 2, bookUnitTitle: "Heredity and Evolution",
      items: [
        { label: "5-1", title: "Why You Look Like Your Parents", book: "What Is Genetics?", page: 106, kind: "lesson" },
        { label: "5-2", title: "What We Learned After Mendel", book: "Genetics Since Mendel", page: 114, kind: "lesson" },
        { label: "5-3", title: "Traits, Disorders, and Human Genetics", book: "Human Genetics", page: 117, kind: "lesson" },
        { label: "5-4", title: "Mapping the Human Genome", book: "Science and Society: The Human Genome", page: 122, kind: "lesson" },
        { label: "PS", title: "Problem Solving: Boy or Girl?", page: 118, kind: "feature" },
        { label: "T", title: "Technology: Karyotyping", page: 120, kind: "feature" },
        { label: "5-1A", title: "Activity: Expected and Observed Results", page: 113, kind: "activity" },
        { label: "5-2A", title: "Activity: Determining Polygenic Inheritance", page: 124, kind: "activity" },
        { label: "5-5", title: "Unit 5 Review: How Traits Pass Down", kind: "review" },
      ],
    },
    {
      n: 6, page: 128, title: "Origins: Evolution and Creation, Side by Side", book: "Evolution", bookUnit: 2, bookUnitTitle: "Heredity and Evolution",
      items: [
        /* 🚨 THE CHAPTER THE SIDE-BY-SIDE RULE EXISTS FOR. Four sections, all of
           them the origin question in one form or another. Do not build any of
           these without re-reading BEHAVIOR.md first. */
        { label: "6-1", title: "What Evolution Claims, and What It Rests On", book: "Mechanisms of Evolution", page: 130, kind: "lesson" },
        { label: "6-2", title: "The Evidence, Examined Honestly", book: "Evidence for Evolution", page: 136, kind: "lesson" },
        { label: "6-3", title: "Extinction, and Caring for What Remains", book: "Science and Society: Plant and Animal Extinction", page: 144, kind: "lesson" },
        { label: "6-4", title: "Human Origins: Two Accounts, Side by Side", book: "Human Evolution", page: 146, kind: "lesson" },
        { label: "PS", title: "Problem Solving: Why Isn't Earth Covered with Pumpkins and Pikes?",
          page: 133, kind: "feature" },
        { label: "T", title: "Technology: An Ostrich Egg Timer", page: 140, kind: "feature" },
        { label: "6-1A", title: "Activity: A Radioactive Dating Model", page: 143, kind: "activity" },
        { label: "6-2A", title: "Activity: Designing an Experiment", page: 150, kind: "activity" },
        { label: "6-5", title: "Unit 6 Review: Origins: Evolution and Creation, Side by Side", kind: "review" },
      ],
    },
    {
      n: 7, page: 154, title: "Sorting and Naming Living Things", book: "Classification of Living Things", bookUnit: 2,
      bookUnitTitle: "Heredity and Evolution",
      items: [
        { label: "7-1", title: "Why We Sort Living Things", book: "What Is Classification?", page: 156, kind: "lesson" },
        { label: "7-2", title: "How Scientists Classify Today", book: "Modern Classification", page: 160, kind: "lesson" },
        { label: "7-3", title: "The Rain Forest, and What Is Being Lost", book: "Science and Society: The Rain Forest Crisis", page: 164, kind: "lesson" },
        { label: "7-4", title: "Identifying an Organism Yourself", book: "Identifying Organisms", page: 166, kind: "lesson" },
        { label: "PS", title: "Problem Solving: Whose Shoe?", page: 158, kind: "feature" },
        { label: "T", title: "Technology: Beyond Appearances", page: 163, kind: "feature" },
        { label: "7-1A", title: "Activity: Classifying Seeds", page: 159, kind: "activity" },
        { label: "7-2A", title: "Activity: Using a Dichotomous Key", page: 170, kind: "activity" },
        { label: "7-5", title: "Unit 7 Review: Sorting and Naming Living Things", kind: "review" },
      ],
    },

    /* ══ BOOK UNIT 3 — SIMPLE LIVING THINGS (p178) ══ */
    {
      n: 8, page: 180, title: "The Smallest Living Things", book: "Viruses and Monerans", bookUnit: 3, bookUnitTitle: "Simple Living Things",
      items: [
        { label: "8-1", title: "Viruses: Alive, or Not?", book: "Viruses: Are They Alive?", page: 182, kind: "lesson" },
        { label: "8-2", title: "What It Costs to Cure a Disease", book: "Science and Society: The Cost of Curing a Disease", page: 186, kind: "lesson" },
        { label: "8-3", title: "Bacteria, the Kingdom Monera", book: "Kingdom Monera", page: 188, kind: "lesson" },
        { label: "8-4", title: "The Bacteria You Live With Every Day", book: "Monerans in Your Life", page: 193, kind: "lesson" },
        { label: "PS", title: "Problem Solving: How Are E. coli Bacteria Helpful?", page: 190, kind: "feature" },
        { label: "T", title: "Technology: Hungry Bacteria", page: 195, kind: "feature" },
        { label: "8-1A", title: "Activity: Observing Cyanobacteria", page: 192, kind: "activity" },
        { label: "8-2A", title: "Activity: Observing and Culturing Bacteria", page: 196, kind: "activity" },
        { label: "8-5", title: "Unit 8 Review: The Smallest Living Things", kind: "review" },
      ],
    },
    {
      n: 9, page: 200, title: "Protists and Fungi", book: "Protists and Fungi", bookUnit: 3, bookUnitTitle: "Simple Living Things",
      items: [
        { label: "9-1", title: "Protists: The Odd Ones Out", book: "Kingdom Protista", page: 202, kind: "lesson" },
        { label: "9-2", title: "Fungi, and What They Break Down", book: "Kingdom Fungi", page: 211, kind: "lesson" },
        { label: "9-3", title: "Why We Could Not Live Without Fungi", book: "Science and Society: Fungus, Can't Live Without It", page: 216, kind: "lesson" },
        { label: "PS", title: "Problem Solving: Puzzled about Slime", page: 206, kind: "feature" },
        { label: "T", title: "Technology: A Yeast Library", page: 213, kind: "feature" },
        { label: "9-1A", title: "Activity: Comparing Algae and Protozoa", page: 210, kind: "activity" },
        { label: "9-2A", title: "Activity: Designing an Experiment", page: 218, kind: "activity" },
        { label: "9-4", title: "Unit 9 Review: Protists and Fungi", kind: "review" },
      ],
    },

    /* ══ BOOK UNIT 4 — PLANTS (p226) ══ */
    {
      n: 10, page: 228, title: "Meet the Plants", book: "Introduction to Plants", bookUnit: 4, bookUnitTitle: "Plants",
      items: [
        { label: "10-1", title: "What Makes a Plant a Plant", book: "Characteristics of Plants", page: 230, kind: "lesson" },
        { label: "10-2", title: "Mosses, Ferns, and Plants Without Seeds", book: "Seedless Plants", page: 236, kind: "lesson" },
        { label: "10-3", title: "Peat, Fuel, and Using a Bog", book: "Science and Society: Peat Moss as Fuel", page: 245, kind: "lesson" },
        { label: "T", title: "Technology: Oil from Desert Plants", page: 235, kind: "feature" },
        { label: "PS", title: "Problem Solving: What Is in Nature's Medicine Chest?", page: 240, kind: "feature" },
        { label: "10-1A", title: "Activity: Comparing Mosses and Liverworts", page: 239, kind: "activity" },
        { label: "10-2A", title: "Activity: The Life Cycle of a Fern", page: 246, kind: "activity" },
        { label: "10-4", title: "Unit 10 Review: Meet the Plants", kind: "review" },
      ],
    },
    {
      n: 11, page: 252, title: "Seeds, Roots, and Flowers", book: "The Seed Plants", bookUnit: 4, bookUnitTitle: "Plants",
      items: [
        { label: "11-1", title: "Seeds, and Why They Changed Everything", book: "Seed Plants", page: 254, kind: "lesson" },
        { label: "11-2", title: "Roots, Stems, and Leaves", book: "Parts of Complex Plants", page: 259, kind: "lesson" },
        { label: "11-3", title: "How Seed Plants Reproduce", book: "Seed Plant Reproduction", page: 262, kind: "lesson" },
        { label: "11-4", title: "Acid Rain, and What It Does to Plants", book: "Science and Society: Effects of Acid Rain", page: 268, kind: "lesson" },
        { label: "T", title: "Technology: Plants in Space?", page: 260, kind: "feature" },
        { label: "PS", title: "Problem Solving: How Can You Tell If Seeds Are Living?", page: 265, kind: "feature" },
        { label: "11-1A", title: "Activity: Inside a Seed", page: 267, kind: "activity" },
        { label: "11-2A", title: "Activity: Parts of a Flower", page: 270, kind: "activity" },
        { label: "11-5", title: "Unit 11 Review: Seeds, Roots, and Flowers", kind: "review" },
      ],
    },
    {
      n: 12, page: 274, title: "How Plants Live and Grow", book: "Plant Processes", bookUnit: 4, bookUnitTitle: "Plants",
      items: [
        { label: "12-1", title: "Photosynthesis and Respiration", book: "Photosynthesis and Respiration", page: 276, kind: "lesson" },
        { label: "12-2", title: "How a Plant Responds to the World", book: "Plant Responses", page: 282, kind: "lesson" },
        { label: "12-3", title: "Plants Living With Other Living Things", book: "Plant Relationships", page: 285, kind: "lesson" },
        { label: "12-4", title: "The Tropics, and the Plants We Have Not Studied Yet", book: "Science and Society: The Treasure of Tropical Plants", page: 288, kind: "lesson" },
        { label: "T", title: "Technology: Designer Plants", page: 278, kind: "feature" },
        { label: "PS", title: "Problem Solving: How Do Plants Climb Fences?", page: 285, kind: "feature" },
        { label: "12-1A", title: "Activity: Stomata in Leaves", page: 281, kind: "activity" },
        { label: "12-2A", title: "Activity: Plant Tropisms", page: 290, kind: "activity" },
        { label: "12-5", title: "Unit 12 Review: How Plants Live and Grow", kind: "review" },
      ],
    },

    /* ══ BOOK UNIT 5 — ANIMALS (p298) ══ */
    {
      n: 13, page: 300, title: "Meet the Animals", book: "Introduction to Animals", bookUnit: 5, bookUnitTitle: "Animals",
      items: [
        { label: "13-1", title: "What Makes an Animal an Animal", book: "What Is an Animal?", page: 302, kind: "lesson" },
        { label: "13-2", title: "Using Animals in Experiments", book: "Science and Society: Experiments Using Animals", page: 306, kind: "lesson" },
        { label: "13-3", title: "Sponges, Jellyfish, and the Simplest Animals", book: "The Simplest Invertebrates", page: 308, kind: "lesson" },
        { label: "13-4", title: "The Simple Worms", book: "The Simple Worms", page: 315, kind: "lesson" },
        { label: "T", title: "Technology: Sea Pharmacy", page: 312, kind: "feature" },
        { label: "PS", title: "Problem Solving: Barbara's New Puppy", page: 317, kind: "feature" },
        { label: "13-1A", title: "Activity: Determining Symmetry", page: 305, kind: "activity" },
        { label: "13-2A", title: "Activity: Observing a Cnidarian", page: 314, kind: "activity" },
        { label: "13-5", title: "Unit 13 Review: Meet the Animals", kind: "review" },
      ],
    },
    {
      n: 14, page: 322, title: "Animals Without Backbones", book: "Complex Invertebrates", bookUnit: 5, bookUnitTitle: "Animals",
      items: [
        { label: "14-1", title: "Mollusks", book: "Mollusks", page: 324, kind: "lesson" },
        { label: "14-2", title: "Segmented Worms", book: "Segmented Worms", page: 327, kind: "lesson" },
        { label: "14-3", title: "Arthropods: The Largest Group of All", book: "Arthropods", page: 332, kind: "lesson" },
        { label: "14-4", title: "Pesticides, and What Else They Kill", book: "Science and Society: Pesticides", page: 340, kind: "lesson" },
        { label: "14-5", title: "Sea Stars and Their Relatives", book: "Echinoderms", page: 342, kind: "lesson" },
        { label: "T", title: "Technology: Leeches to the Rescue", page: 329, kind: "feature" },
        { label: "PS", title: "Problem Solving: Spinning Spiders", page: 334, kind: "feature" },
        { label: "14-1A", title: "Activity: Observing a Segmented Worm", page: 331, kind: "activity" },
        { label: "14-2A", title: "Activity: Observing a Crayfish", page: 339, kind: "activity" },
        { label: "14-6", title: "Unit 14 Review: Animals Without Backbones", kind: "review" },
      ],
    },
    {
      n: 15, page: 348, title: "Fish, Frogs, and Reptiles", book: "Cold-Blooded Vertebrates", bookUnit: 5, bookUnitTitle: "Animals",
      items: [
        { label: "15-1", title: "Fish", book: "Fish", page: 350, kind: "lesson" },
        { label: "15-2", title: "Amphibians", book: "Amphibians", page: 356, kind: "lesson" },
        { label: "15-3", title: "Why Frogs Are Disappearing", book: "Science and Society: Amphibian Population Decline", page: 360, kind: "lesson" },
        { label: "15-4", title: "Reptiles", book: "Reptiles", page: 363, kind: "lesson" },
        { label: "PS", title: "Problem Solving: Marsupial Frogs", page: 359, kind: "feature" },
        { label: "T", title: "Technology: Snake Oil Medicines", page: 366, kind: "feature" },
        { label: "15-1A", title: "Activity: Designing an Experiment", page: 355, kind: "activity" },
        { label: "15-2A", title: "Activity: Metamorphosis in Frogs", page: 362, kind: "activity" },
        { label: "15-5", title: "Unit 15 Review: Fish, Frogs, and Reptiles", kind: "review" },
      ],
    },
    {
      n: 16, page: 370, title: "Birds and Mammals", book: "Warm-Blooded Animals", bookUnit: 5, bookUnitTitle: "Animals",
      items: [
        { label: "16-1", title: "Birds", book: "Birds", page: 372, kind: "lesson" },
        { label: "16-2", title: "Mammals", book: "Mammals", page: 379, kind: "lesson" },
        { label: "16-3", title: "Saving the Manatee", book: "Science and Society: Saving the Manatee", page: 386, kind: "lesson" },
        { label: "T", title: "Technology: Healthier Eggs", page: 376, kind: "feature" },
        { label: "PS", title: "Problem Solving: What Colors Can Spot See?", page: 384, kind: "feature" },
        { label: "16-1A", title: "Activity: Observing Contour and Down Feathers", page: 378, kind: "activity" },
        { label: "16-2A", title: "Activity: Classifying Vertebrates", page: 388, kind: "activity" },
        { label: "16-4", title: "Unit 16 Review: Birds and Mammals", kind: "review" },
      ],
    },
    {
      n: 17, page: 392, title: "Why Animals Do What They Do", book: "Animal Behavior", bookUnit: 5, bookUnitTitle: "Animals",
      items: [
        { label: "17-1", title: "Instinct and Learned Behaviour", book: "Types of Behavior", page: 394, kind: "lesson" },
        { label: "17-2", title: "How Animals Adapt Their Behaviour", book: "Behavioral Adaptations", page: 401, kind: "lesson" },
        { label: "17-3", title: "Returning a Wild Animal to the Wild", book: "Science and Society: Rehabilitation of Wild Animals", page: 406, kind: "lesson" },
        { label: "PS", title: "Problem Solving: The Disappearing Lizards", page: 398, kind: "feature" },
        { label: "T", title: "Technology: Looking for a Sign", page: 406, kind: "feature" },
        { label: "17-1A", title: "Activity: Designing an Experiment", page: 400, kind: "activity" },
        { label: "17-2A", title: "Activity: Observing Social Behavior in Ants", page: 408, kind: "activity" },
        { label: "17-4", title: "Unit 17 Review: Why Animals Do What They Do", kind: "review" },
      ],
    },

    /* ══ BOOK UNIT 6 — THE HUMAN BODY (p416) ══ */
    {
      n: 18, page: 418, title: "Bones, Muscles, and Skin", book: "Bones, Muscles, and Skin", bookUnit: 6, bookUnitTitle: "The Human Body",
      items: [
        { label: "18-1", title: "The Skeleton, and What It Does", book: "The Skeletal System", page: 420, kind: "lesson" },
        { label: "18-2", title: "Muscles, and How They Pull", book: "The Muscular System", page: 426, kind: "lesson" },
        { label: "18-3", title: "Drugs for Fitness, and What They Cost", book: "Science and Society: Drugs for Fitness?", page: 429, kind: "lesson" },
        { label: "18-4", title: "Skin, the Organ You Can See", book: "Skin", page: 430, kind: "lesson" },
        { label: "PS", title: "Problem Solving: High Altitude Bones", page: 428, kind: "feature" },
        { label: "T", title: "Technology: Robot Skin", page: 434, kind: "feature" },
        { label: "18-1A", title: "Activity: Observing Bones", page: 425, kind: "activity" },
        { label: "18-2A", title: "Activity: Observing Muscle", page: 436, kind: "activity" },
        { label: "18-5", title: "Unit 18 Review: Bones, Muscles, and Skin", kind: "review" },
      ],
    },
    {
      n: 19, page: 440, title: "Food and Digestion", book: "Nutrients and Digestion", bookUnit: 6, bookUnitTitle: "The Human Body",
      items: [
        { label: "19-1", title: "What Food Is Actually Made Of", book: "Nutrition", page: 442, kind: "lesson" },
        { label: "19-2", title: "The Journey Food Takes", book: "Your Digestive System", page: 451, kind: "lesson" },
        { label: "19-3", title: "Eating Disorders, and Getting Help", book: "Science and Society: Eating Disorders", page: 456, kind: "lesson" },
        { label: "T", title: "Technology: Fake Fat", page: 445, kind: "feature" },
        { label: "PS", title: "Problem Solving: The Big Race", page: 449, kind: "feature" },
        { label: "19-1A", title: "Activity: Identifying Vitamin C Content", page: 450, kind: "activity" },
        { label: "19-2A", title: "Activity: Protein Digestion", page: 458, kind: "activity" },
        { label: "19-4", title: "Unit 19 Review: Food and Digestion", kind: "review" },
      ],
    },
    {
      n: 20, page: 462, title: "The Heart and the Blood", book: "Your Circulatory System", bookUnit: 6, bookUnitTitle: "The Human Body",
      items: [
        { label: "20-1", title: "The Heart and How Blood Moves", book: "Circulation", page: 464, kind: "lesson" },
        { label: "20-2", title: "What Blood Is Made Of", book: "Blood", page: 471, kind: "lesson" },
        { label: "20-3", title: "Giving Blood, and Receiving It", book: "Science and Society: Autologous Blood Transfusions", page: 478, kind: "lesson" },
        { label: "20-4", title: "The Lymphatic System", book: "Your Lymphatic System", page: 480, kind: "lesson" },
        { label: "T", title: "Technology: An Assist for the Heart", page: 469, kind: "feature" },
        { label: "PS", title: "Problem Solving: The Blood Type Mystery", page: 475, kind: "feature" },
        { label: "20-1A", title: "Activity: Taking Blood Pressure", page: 470, kind: "activity" },
        { label: "20-2A", title: "Activity: Comparing Blood Cells", page: 477, kind: "activity" },
        { label: "20-5", title: "Unit 20 Review: The Heart and the Blood", kind: "review" },
      ],
    },
    {
      n: 21, page: 486, title: "Breathing, and Cleaning the Blood", book: "Respiration and Excretion", bookUnit: 6, bookUnitTitle: "The Human Body",
      items: [
        { label: "21-1", title: "Breathing, and What the Lungs Do", book: "Your Respiratory System", page: 488, kind: "lesson" },
        { label: "21-2", title: "Air That Is Not Safe to Breathe", book: "Science and Society: Dangerous Breathing", page: 496, kind: "lesson" },
        { label: "21-3", title: "The Kidneys, and Cleaning the Blood", book: "Your Urinary System", page: 498, kind: "lesson" },
        { label: "PS", title: "Problem Solving: Frederick's First Baseball Game", page: 499, kind: "feature" },
        { label: "T", title: "Technology: Kidney Transplants", page: 501, kind: "feature" },
        { label: "21-1A", title: "Activity: The Effects of Respiration", page: 495, kind: "activity" },
        { label: "21-2A", title: "Activity: Sweat Glands in the Skin", page: 502, kind: "activity" },
        { label: "21-4", title: "Unit 21 Review: Breathing, and Cleaning the Blood", kind: "review" },
      ],
    },
    {
      n: 22, page: 506, title: "The Brain, the Nerves, and the Senses", book: "Body Regulation", bookUnit: 6, bookUnitTitle: "The Human Body",
      items: [
        { label: "22-1", title: "The Brain, the Spinal Cord, and the Nerves", book: "Your Nervous System", page: 508, kind: "lesson" },
        { label: "22-2", title: "The Five Senses", book: "The Senses", page: 515, kind: "lesson" },
        { label: "22-3", title: "Alzheimer's Disease", book: "Science and Society: Alzheimer's Disease", page: 520, kind: "lesson" },
        { label: "22-4", title: "Hormones, and the Endocrine System", book: "Your Endocrine System", page: 522, kind: "lesson" },
        { label: "T", title: "Technology: Watching the Brain at Work", page: 511, kind: "feature" },
        { label: "PS", title: "Problem Solving: Why Am I So Tired?", page: 524, kind: "feature" },
        { label: "22-1A", title: "Activity: Reaction Time", page: 514, kind: "activity" },
        { label: "22-2A", title: "Activity: Predicting and Experimenting", page: 519, kind: "activity" },
        { label: "22-5", title: "Unit 22 Review: The Brain, the Nerves, and the Senses", kind: "review" },
      ],
    },
    {
      n: 23, page: 528, title: "How People Are Made, and How They Grow", book: "Reproduction and Growth", bookUnit: 6, bookUnitTitle: "The Human Body",
      items: [
        /* ⚠️ 23-1, 23-2 and 23-4 are human reproduction and sexuality. Paul's call
           entirely, and not a chapter to build without asking him first. */
        { label: "23-1", title: "How Life Begins", book: "Human Reproduction", page: 530, kind: "lesson" },
        { label: "23-2", title: "From Conception to Birth", book: "Fertilization to Birth", page: 535, kind: "lesson" },
        { label: "23-3", title: "Growing Up, and Growing Older", book: "Development after Birth", page: 540, kind: "lesson" },
        { label: "23-4", title: "Your Body, and Treating It as a Gift", book: "Science and Society: Sexuality", page: 544, kind: "lesson" },
        { label: "PS", title: "Problem Solving: When Is the Baby Due?", page: 536, kind: "feature" },
        { label: "T", title: "Technology: Operating in the Womb", page: 538, kind: "feature" },
        { label: "23-1A", title: "Activity: Interpreting Diagrams", page: 534, kind: "activity" },
        { label: "23-2A", title: "Activity: Average Growth Rate in Humans", page: 546, kind: "activity" },
        { label: "23-5", title: "Unit 23 Review: How People Are Made, and How They Grow", kind: "review" },
      ],
    },

    /* ══ BOOK UNIT 7 — STAYING HEALTHY (p554) ══ */
    {
      n: 24, page: 556, title: "Sickness, and How the Body Defends Itself", book: "Immunity", bookUnit: 7, bookUnitTitle: "Staying Healthy",
      items: [
        { label: "24-1", title: "What Disease Is, and How It Spreads", book: "The Nature of Disease", page: 558, kind: "lesson" },
        { label: "24-2", title: "How the Body Fights Back", book: "Your Immune System", page: 563, kind: "lesson" },
        { label: "24-3", title: "Preventing Disease Before It Starts", book: "Science and Society: Preventing Disease", page: 568, kind: "lesson" },
        { label: "24-4", title: "Diseases You Cannot Catch", book: "Noncommunicable Disease", page: 570, kind: "lesson" },
        { label: "T", title: "Technology: Super Sleuth!", page: 565, kind: "feature" },
        { label: "PS", title: "Problem Solving: Fighting TB", page: 573, kind: "feature" },
        { label: "24-1A", title: "Activity: Microorganisms and Disease", page: 567, kind: "activity" },
        { label: "24-2A", title: "Activity: Designing an Experiment", page: 574, kind: "activity" },
        { label: "24-5", title: "Unit 24 Review: Sickness, and How the Body Defends Itself", kind: "review" },
      ],
    },
    {
      n: 25, page: 578, title: "Drugs, Medicine, and the Body", book: "Facts about Drugs", bookUnit: 7, bookUnitTitle: "Staying Healthy",
      items: [
        { label: "25-1", title: "Medicine, and How Drugs Affect the Body", book: "Drugs and Health", page: 580, kind: "lesson" },
        { label: "25-2", title: "Drugs and the Society Around Them", book: "Science and Society: Drugs in Society", page: 586, kind: "lesson" },
        { label: "25-3", title: "Illegal Drugs, and What They Do", book: "Problems with Illegal Drugs", page: 588, kind: "lesson" },
        { label: "T", title: "Technology: Taking Your Medicine", page: 581, kind: "feature" },
        { label: "PS", title: "Problem Solving: Passive Smoke", page: 583, kind: "feature" },
        { label: "25-1A", title: "Activity: Interpreting Drug Label Information", page: 582, kind: "activity" },
        { label: "25-2A", title: "Activity: The Effect of Drugs on Heartbeat Rate", page: 594, kind: "activity" },
        { label: "25-4", title: "Unit 25 Review: Drugs, Medicine, and the Body", kind: "review" },
      ],
    },

    /* ══ BOOK UNIT 8 — ECOLOGY (p602) ══ */
    {
      n: 26, page: 604, title: "Living Things and Where They Live", book: "Organisms and Their Environments", bookUnit: 8, bookUnitTitle: "Ecology",
      items: [
        { label: "26-1", title: "Where a Living Thing Fits", book: "Organisms and Their Environments", page: 606, kind: "lesson" },
        { label: "26-2", title: "How Living Things Depend on Each Other", book: "Biotic Relationships", page: 612, kind: "lesson" },
        { label: "26-3", title: "Sunlight, Water, Soil, and Air", book: "Abiotic Factors in the Biosphere", page: 617, kind: "lesson" },
        { label: "26-4", title: "Fire, and When It Helps", book: "Science and Society: Friendly Fires", page: 620, kind: "lesson" },
        { label: "PS", title: "Problem Solving: The Milk Carton Garden", page: 607, kind: "feature" },
        { label: "T", title: "Technology: Monitoring Mayflies", page: 618, kind: "feature" },
        { label: "26-1A", title: "Activity: Counting Populations", page: 609, kind: "activity" },
        { label: "26-2A", title: "Activity: Studying an Ecosystem", page: 622, kind: "activity" },
        { label: "26-5", title: "Unit 26 Review: Living Things and Where They Live", kind: "review" },
      ],
    },
    {
      n: 27, page: 626, title: "The Earth's Biomes", book: "Biomes", bookUnit: 8, bookUnitTitle: "Ecology",
      items: [
        { label: "27-1", title: "What Makes One Place Different From Another", book: "Factors That Affect Biomes", page: 628, kind: "lesson" },
        { label: "27-2", title: "The Land Biomes", book: "Land Biomes", page: 632, kind: "lesson" },
        { label: "27-3", title: "Rivers, Lakes, and Oceans", book: "Water Ecosystems", page: 637, kind: "lesson" },
        { label: "27-4", title: "Wetlands, and Why They Matter", book: "Science and Society: Coastal Wetlands", page: 640, kind: "lesson" },
        { label: "T", title: "Technology: Life in a Glass World", page: 636, kind: "feature" },
        { label: "PS", title: "Problem Solving: What Caused the Fish to Die?", page: 639, kind: "feature" },
        { label: "27-1A", title: "Activity: Interpreting a Map", page: 630, kind: "activity" },
        { label: "27-2A", title: "Activity: Designing an Experiment", page: 642, kind: "activity" },
        { label: "27-5", title: "Unit 27 Review: The Earth's Biomes", kind: "review" },
      ],
    },
    {
      n: 28, page: 646, title: "Caring for What We Were Given", book: "Resources and the Environment", bookUnit: 8, bookUnitTitle: "Ecology",
      items: [
        { label: "28-1", title: "The Resources We Depend On", book: "Natural Resources", page: 648, kind: "lesson" },
        { label: "28-2", title: "Conservation and Protection", book: "Conservation and Protection", page: 654, kind: "lesson" },
        { label: "28-3", title: "Responsibility for What Comes Next", book: "Future Responsibility", page: 658, kind: "lesson" },
        { label: "28-4", title: "The Earth in 2030", book: "Science and Society: Earth in 2030", page: 660, kind: "lesson" },
        { label: "PS", title: "Problem Solving: Sharing a Technology", page: 650, kind: "feature" },
        { label: "T", title: "Technology: Test Tube Tigers", page: 657, kind: "feature" },
        { label: "28-1A", title: "Activity: Designing an Experiment", page: 653, kind: "activity" },
        { label: "28-2A", title: "Activity: Identifying Air Pollution Sites", page: 662, kind: "activity" },
        { label: "28-5", title: "Unit 28 Review: Caring for What We Were Given", kind: "review" },
      ],
    },
  ],
};

/* What is built, and what is deliberately not mapped. Kept as prose so the
   reasoning survives a rebuild — the same job BUILT_NOTES does for maths. */
const BUILT_NOTES = [
  "Chapter 1 is COMPLETE: all four numbered sections are built lessons, written in " +
    "Paul's own words on 2026-09-03. It is the only finished chapter in the book.",
  "The four built lessons were shelved before this outline existed, under an invented " +
    "unit title ('Life and How We Study It'). The book calls it Unit 1 Life, Chapter 1 " +
    "Exploring Life. Their `seq.unitTitle` in lessons.js should follow the book now.",
  "Chapter 6 (Evolution) is the origin question in four sections. BEHAVIOR.md's " +
    "side-by-side rule governs every one of them. Do not build one without re-reading it.",
  "Chapter 23 (Reproduction and Growth) is human reproduction and sexuality. Paul's " +
    "call whether it is taught here at all.",
];

const tally = () => ({
  chapters: LIFE.units.length,
  bookUnits: new Set(LIFE.units.map((u) => u.bookUnit)).size,
  lessons: LIFE.units.reduce((n, u) => n + u.items.filter((i) => i.kind === "lesson").length, 0),
  activities: LIFE.units.reduce((n, u) => n + u.items.filter((i) => i.kind === "activity").length, 0),
  built: LIFE.units.reduce((n, u) => n + u.items.filter((i) => i.slug).length, 0),
  rows: LIFE.units.reduce((n, u) => n + u.items.length, 0),
});

module.exports = { LIFE, BUILT_NOTES, tally };
