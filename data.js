const targetMaterials = [
  {
    name: "Woven Roving 200 gsm + Polyester Resin",
    note: "Exact target system. Add direct fatigue and tensile records here when papers are available.",
    evidenceCount: 1
  },
  {
    name: "Woven Roving 600 gsm + Polyester Resin",
    note: "Exact target system. Useful for comparing areal weight effects in woven reinforcement.",
    evidenceCount: 1
  },
  {
    name: "Chopped Strand Mat 300 gsm + Polyester Resin",
    note: "Exact target system. Keep directional tensile notes explicit even if the layup is more random.",
    evidenceCount: 2
  },
  {
    name: "Chopped Strand Mat 225 gsm + Polyester Resin",
    note: "Exact target system. Store separately from 300 gsm because laminate behavior may differ.",
    evidenceCount: 0
  }
];

const whyFour = {
  title: "Why These Four Materials?",
  summary: "This page stores the background logic behind the four primary GFRP material systems. It supports the project context, while the main database stays focused on extracting fatigue and S-N information from research papers.",
  materials: [
    {
      name: "Woven Roving 200 gsm + Polyester Resin",
      shortLabel: "WR 200",
      headline: "Chosen for lightweight skin and secondary structures",
      why: "This lower gsm woven roving was selected for areas where a lighter finish and easier surface build-up are more useful than maximum stiffness.",
      typicalUse: [
        "Wing skin and secondary structures",
        "Ribs that help maintain aerofoil curvature",
        "Stringers and secondary reinforcement zones"
      ],
      propertyFocus: [
        "Lower areal weight",
        "Useful for lighter laminate build-up",
        "Good comparison point against heavier woven roving"
      ]
    },
    {
      name: "Woven Roving 600 gsm + Polyester Resin",
      shortLabel: "WR 600",
      headline: "Chosen for primary load-carrying reinforcement",
      why: "This higher gsm woven roving was selected for regions where stiffness and axial load carrying capacity are more important.",
      typicalUse: [
        "Front and rear spars",
        "Spar caps",
        "Primary structural reinforcement zones",
        "0 degree plies that resist bending loads"
      ],
      propertyFocus: [
        "High stiffness",
        "High axial strength",
        "Primary reinforcement behavior"
      ]
    },
    {
      name: "Chopped Strand Mat 225 gsm + Polyester Resin",
      shortLabel: "CSM 225",
      headline: "Chosen for highly contoured regions",
      why: "This lighter chopped strand mat was selected because it is more flexible and better suited to curved or highly contoured geometry.",
      typicalUse: [
        "Highly contoured regions",
        "Geometry-sensitive laminate areas"
      ],
      propertyFocus: [
        "Superior flexibility",
        "Better conformability during layup",
        "Useful where woven roving is harder to place"
      ]
    },
    {
      name: "Chopped Strand Mat 300 gsm + Polyester Resin",
      shortLabel: "CSM 300",
      headline: "Chosen for balanced internal stiffness",
      why: "This heavier chopped strand mat was selected for internal regions where a more balanced stiffness contribution is needed.",
      typicalUse: [
        "Internal components",
        "Intermediate structural layers"
      ],
      propertyFocus: [
        "Balanced stiffness",
        "Heavier mat than 225 gsm",
        "Internal structural support role"
      ]
    }
  ],
  binderNotes: [
    {
      title: "Polyester Resin",
      role: "Primary matrix binder",
      detail: "Polyester resin is the main binding agent for the four selected laminate systems."
    },
    {
      title: "Epoxy Resin / Structural Epoxy",
      role: "Assembly adhesive",
      detail: "Epoxy is used as a joining adhesive for finished parts, such as bonding ribs and spars to skin panels."
    },
    {
      title: "Resin Slurry",
      role: "Core adhesion support",
      detail: "Resin slurry is used to prime foam cores so fiber layers bond correctly to the core."
    }
  ],
  processNotes: [
    "The four primary study materials use polyester resin as the laminate matrix binder.",
    "Wet layup with vacuum bagging is part of the practical reasoning because it helps reduce voids.",
    "Adhesives are treated separately from matrix binders because they join completed parts rather than create the original laminate."
  ]
};

const papers = [
  {
    id: "01",
    page: "paper-01.html",
    polymerName: "GFRP Laminate + Vinyl Ester Resin",
    title: "Testing and modelling the fatigue behaviour of GFRP composites - Effect of stress level, stress concentration and frequency",
    relevance: "related",
    summary: "Related reference paper. Not an exact polyester-resin match, but it provides clear tensile and fatigue data that can support comparison.",
    source: {
      doi: "10.1016/j.jestch.2020.01.001",
      doiUrl: "https://doi.org/10.1016/j.jestch.2020.01.001",
      articleUrl: "https://www.sciencedirect.com/science/article/pii/S2215098619321135",
      localFile: "../01.pdf"
    },
    materialSummary: {
      fiberSystem: "Glass fiber reinforced polymer laminate",
      resinSystem: "Vinyl ester",
      manufacturing: "Hand layup",
      layup: "10 equally thick plies",
      orientation: "60% longitudinal, 40% diagonal",
      fiberVolumeFraction: "55%"
    },
    tensileProperties: [
      { property: "Ultimate tensile strength, longitudinal", value: "500", unit: "MPa" },
      { property: "Elastic modulus, longitudinal", value: "18", unit: "GPa" },
      { property: "Elastic modulus, transverse", value: "9", unit: "GPa" },
      { property: "Poisson's ratio", value: "0.25", unit: "-" },
      { property: "Shear modulus", value: "6", unit: "GPa" },
      { property: "Strain at failure", value: "0.028", unit: "-" }
    ],
    fatigueSetup: [
      { label: "Loading mode", value: "Tension-tension" },
      { label: "Stress ratio, R", value: "0.1" },
      { label: "Frequency range", value: "2 to 8 Hz" },
      { label: "Runout", value: "8,000,000 cycles" },
      { label: "Reported S-N curve", value: "Yes" }
    ],
    fatigueData: [
      { stressLevel: 80, stressMpa: 400, fatigueLife: 360, fatigueLifeLabel: "~360 cycles" },
      { stressLevel: 70, stressMpa: 350, fatigueLife: 984, fatigueLifeLabel: "~984 cycles" },
      { stressLevel: 60, stressMpa: 300, fatigueLife: 1879, fatigueLifeLabel: "~1,879 cycles" },
      { stressLevel: 50, stressMpa: 250, fatigueLife: 29174, fatigueLifeLabel: "~29,174 cycles" },
      { stressLevel: 40, stressMpa: 200, fatigueLife: 187292, fatigueLifeLabel: "~187,292 cycles" },
      { stressLevel: 25, stressMpa: 125, fatigueLife: 8000000, fatigueLifeLabel: ">8,000,000 cycles", runout: true }
    ],
    keyFindings: [
      "Pure tensile fiber rupture was reported at 70% UTS and 80% UTS.",
      "At 60% UTS and below, failure was dominated by stress concentration effects.",
      "The paper states 88% retention of original strength after 8 million cycles.",
      "This record should be treated as comparative evidence, not as direct data for the four polyester target systems."
    ]
  },
  {
    id: "02",
    page: "paper-02.html",
    polymerName: "Fabricated GFRP Fibre Mat [0/90] + Epoxy Resin",
    title: "High-Cycle Fatigue Life Behaviour of Fabricated Glass Fibre-Reinforced Polymer",
    relevance: "related",
    summary: "Related reference paper. Not one of the four polyester target systems, but it provides a clean tensile strength value, specimen preparation details, applied stress levels, and an S-N fit for a hand-layup GFRP laminate.",
    source: {
      doi: "10.15282/ijame.20.3.2023.13.0827",
      doiUrl: "https://doi.org/10.15282/ijame.20.3.2023.13.0827",
      articleUrl: "https://journal.ump.edu.my/ijame/article/view/8889",
      localFile: "../02.pdf"
    },
    materialSummary: {
      fiberSystem: "Glass fibre mat reinforced polymer laminate",
      resinSystem: "Epoxy resin",
      manufacturing: "Hand layup",
      layup: "Four fibre mats and five epoxy resin layers",
      orientation: "[0/90] fibre orientation",
      fiberVolumeFraction: "Not explicitly reported"
    },
    tensileProperties: [
      { property: "Ultimate tensile strength", value: "110", unit: "MPa" },
      { property: "Maximum load", value: "4431", unit: "N" },
      { property: "Young's modulus", value: "Not explicitly reported numerically", unit: "-" }
    ],
    fatigueSetup: [
      { label: "Loading mode", value: "Constant amplitude tension-tension" },
      { label: "Stress ratio, R", value: "0.1" },
      { label: "Frequency", value: "2 Hz" },
      { label: "Stress levels used", value: "40%, 50%, 60%, 70%, 80% of UTS" },
      { label: "Reported S-N curve", value: "Yes, with fitted equation S = -7.657 ln(N) + 131.55" }
    ],
    fatigueData: [
      { stressLevel: 40, stressMpa: 44.50, fatigueLife: 86568, fatigueLifeLabel: "~86,568 cycles", inferred: true },
      { stressLevel: 50, stressMpa: 55.50, fatigueLife: 20580, fatigueLifeLabel: "~20,580 cycles", inferred: true },
      { stressLevel: 60, stressMpa: 66.75, fatigueLife: 4736, fatigueLifeLabel: "~4,736 cycles", inferred: true },
      { stressLevel: 70, stressMpa: 77.75, fatigueLife: 1126, fatigueLifeLabel: "~1,126 cycles", inferred: true },
      { stressLevel: 80, stressMpa: 89.00, fatigueLife: 259, fatigueLifeLabel: "~259 cycles", inferred: true }
    ],
    keyFindings: [
      "The paper reports a tensile strength of 110 MPa for the fabricated GFRP.",
      "Higher stress levels reduced fatigue life, following the expected composite S-N trend.",
      "The published fitted relation is S = -7.657 ln(N) + 131.55 with R^2 = 0.8038.",
      "The fatigue lives shown on this page are inferred from the published fitted equation because the paper text does not provide a direct fatigue-life table."
    ]
  },
  {
    id: "03",
    page: "paper-03.html",
    polymerName: "Woven Roving 200/400/600 gsm + Polyester Resin",
    title: "Comparative Analysis of the Size of Glass Fiber Woven Roving based on a Polyester Matrix on the Impact Strength of Composite Materials",
    relevance: "exact",
    summary: "Exact target-family paper for woven roving with polyester matrix. This paper reports impact performance rather than fatigue or tensile S-N data, but it is directly useful for the woven roving 200 gsm and 600 gsm polyester systems.",
    source: {
      doi: "10.20961/mekanika.v23i1.76695",
      doiUrl: "https://doi.org/10.20961/mekanika.v23i1.76695",
      articleUrl: "https://jurnal.uns.ac.id/mekanika/article/view/76695",
      localFile: "../03.pdf"
    },
    materialSummary: {
      fiberSystem: "Fiberglass woven roving",
      resinSystem: "Polyester resin type 108",
      manufacturing: "Compression moulding",
      layup: "Single woven roving laminate in 200 gsm, 400 gsm, and 600 gsm variants",
      orientation: "Bidirectional woven roving",
      fiberVolumeFraction: "Not explicitly reported"
    },
    tensileProperties: [
      { property: "Ultimate tensile strength", value: "Not reported in this paper", unit: "-" },
      { property: "Young's modulus", value: "Not reported in this paper", unit: "-" }
    ],
    experimentalDataTitle: "Impact Strength Data",
    experimentalDataHeaders: ["Woven size", "Average impact strength", "Notes"],
    experimentalData: [
      ["200 gsm", "0.145 J/mm2", "Lowest average impact strength"],
      ["400 gsm", "0.202 J/mm2", "Intermediate average impact strength"],
      ["600 gsm", "0.280 J/mm2", "Highest average impact strength"]
    ],
    fatigueSetup: [
      { label: "Primary test type", value: "Charpy impact test" },
      { label: "Standard", value: "ASTM D6110-10" },
      { label: "Measured property", value: "Impact strength" },
      { label: "Reported S-N curve", value: "No" }
    ],
    fatigueData: [],
    keyFindings: [
      "This paper is directly relevant to the exact woven roving + polyester target family.",
      "The 600 gsm woven roving composite showed the highest average impact strength at 0.280 J/mm2.",
      "The 200 gsm woven roving composite showed the lowest average impact strength at 0.145 J/mm2.",
      "The paper does not report tensile strength or fatigue S-N data."
    ]
  },
  {
    id: "04",
    page: "paper-04.html",
    polymerName: "CSM / WRM E-glass + Unsaturated Polyester Resin",
    title: "Mechanical properties of glass fiber reinforced polyester resin for use as the wall of the Acehnese boat 'Thep-Thep'",
    relevance: "related",
    summary: "Related polyester-matrix paper with useful tensile information for CSM and WRM laminate combinations. It is valuable for polyester-based GFRP screening, but it does not provide fatigue S-N data and the layups are not exact one-to-one matches to all four target materials.",
    source: {
      doi: "10.1088/1757-899X/523/1/012080",
      doiUrl: "https://doi.org/10.1088/1757-899X/523/1/012080",
      articleUrl: "https://iopscience.iop.org/article/10.1088/1757-899X/523/1/012080/meta",
      localFile: "../04.pdf"
    },
    materialSummary: {
      fiberSystem: "E-glass chopped strand mat (CSM) and woven roving mat (WRM)",
      resinSystem: "Unsaturated polyester resin",
      manufacturing: "Hand lay-up with 25 kg/cm2 pressure for 24 hours",
      layup: "CSM; WRM/CSM; CSM/WRM/CSM",
      orientation: "Reported as 0°, 90°, and 0° specimen use",
      fiberVolumeFraction: "Not explicitly reported"
    },
    tensileProperties: [
      { property: "CSM tensile strength", value: "7.385", unit: "MPa" },
      { property: "WRM/CSM tensile strength", value: "34.462", unit: "MPa" },
      { property: "CSM/WRM/CSM tensile strength", value: "49.231", unit: "MPa" },
      { property: "Composite maximum highlighted in abstract", value: "49.2", unit: "MPa" }
    ],
    experimentalDataTitle: "Constituent Material Properties",
    experimentalDataHeaders: ["Component", "Tensile strength", "Young's modulus", "Elongation", "Density"],
    experimentalData: [
      ["Glass fiber", "919 MPa", "113 GPa", "15%", "2.54 g/cm3"],
      ["Polyester resin", "42 MPa", "30 GPa", "2.1%", "1.24 g/cm3"]
    ],
    fatigueSetup: [
      { label: "Primary test type", value: "Tensile test" },
      { label: "Standard", value: "ASTM D3039-00" },
      { label: "Measured property", value: "Tensile strength" },
      { label: "Reported S-N curve", value: "No" }
    ],
    fatigueData: [],
    keyFindings: [
      "The paper reports polyester-based GFRP tensile data for different CSM and WRM layer combinations.",
      "The highest tensile strength reported is about 49.231 MPa for the CSM/WRM/CSM laminate.",
      "Adding layers increased tensile strength in the reported results.",
      "The paper does not provide fatigue-life or S-N data."
    ]
  },
  {
    id: "05",
    page: "paper-05.html",
    polymerName: "Polyester + Chopped Strand Mat (CSM) Glass Fiber Laminate",
    title: "Static Tensile Strength And Fatigue Behavior Of Polyester Reinforced With The Chopped Strand Mat (CSM) Of Fiber Glass At Elevated Temperature",
    relevance: "exact",
    summary: "Strong exact-family match for chopped strand mat reinforced polyester, with direct fatigue behavior, S-N data, and temperature effects. The paper reports the laminate as [CSM]3 with 33% fiber volume fraction, though the gsm value is not explicitly stated in the extracted text.",
    source: {
      doi: "Not listed in provided URL file",
      doiUrl: "https://jeasd.uomustansiriyah.edu.iq/index.php/jeasd/article/view/997/825",
      articleUrl: "https://jeasd.uomustansiriyah.edu.iq/index.php/jeasd/article/view/997",
      localFile: "../05.pdf"
    },
    materialSummary: {
      fiberSystem: "E-glass chopped strand mat (CSM)",
      resinSystem: "Unsaturated polyester resin (TOPAZ-1110 TP)",
      manufacturing: "Hand lay-up",
      layup: "[CSM]3 laminate",
      orientation: "Chopped strand mat laminate",
      fiberVolumeFraction: "33%"
    },
    tensileProperties: [
      { property: "Average ultimate tensile strength at 30 C (RT)", value: "144", unit: "MPa" },
      { property: "Average ultimate tensile strength at 40 C", value: "131", unit: "MPa" },
      { property: "Average ultimate tensile strength at 50 C", value: "115", unit: "MPa" },
      { property: "Average ultimate tensile strength at 60 C", value: "110", unit: "MPa" },
      { property: "Strength reduction at 60 C vs RT", value: "23.6", unit: "%" },
      { property: "E-glass reference modulus", value: "72.4", unit: "GPa" },
      { property: "E-glass reference strength", value: "3450", unit: "MPa" },
      { property: "Polyester reference modulus", value: "2.1-3.4", unit: "GPa" },
      { property: "Polyester reference strength", value: "34.5-103", unit: "MPa" }
    ],
    experimentalDataTitle: "Measured UTS At Different Temperatures",
    experimentalDataHeaders: ["Temperature", "Specimens", "Measured UTS values", "Average UTS"],
    experimentalData: [
      ["30 C (RT)", "4, 5, 6", "142, 142.5, 147.5 MPa", "144 MPa"],
      ["40 C", "7, 8, 9", "134.7, 130.5, 128 MPa", "131 MPa"],
      ["50 C", "10, 11, 12", "117.2, 112, 115 MPa", "115 MPa"],
      ["60 C", "13, 14, 15", "110.9, 109.2, 110.1 MPa", "110 MPa"]
    ],
    fatigueSetup: [
      { label: "Loading mode", value: "Cyclic reverse bending" },
      { label: "Stress ratio, R", value: "-1" },
      { label: "Cycling rate", value: "1400 rpm" },
      { label: "Fiber volume fraction", value: "33%" },
      { label: "Reported S-N curve", value: "Yes, for RT, 40 C, 50 C, and 60 C" },
      { label: "Fatigue strength at 10^6 cycles", value: "78.536 MPa at RT; 54.543 MPa at 60 C" }
    ],
    fatigueData: [
      { stressLevel: 75.27, stressMpa: 108.39, fatigueLife: 55000, fatigueLifeLabel: "55,000 cycles", note: "Specimens 16, 17, 18 -> 60,000; 50,000; 55,000" },
      { stressLevel: 63.69, stressMpa: 91.71, fatigueLife: 382000, fatigueLifeLabel: "382,000 cycles", note: "Specimens 19, 20, 21 -> 360,000; 406,000; 380,000" },
      { stressLevel: 56.38, stressMpa: 81.18, fatigueLife: 913000, fatigueLifeLabel: "913,000 cycles", note: "Specimens 22, 23, 24 -> 900,000; 989,000; 850,000" },
      { stressLevel: 51.19, stressMpa: 73.717, fatigueLife: 1250000, fatigueLifeLabel: "1,250,000 cycles", note: "Specimens 25, 26, 27 -> 1,150,000; 1,220,000; 1,380,000" }
    ],
    keyFindings: [
      "This paper directly studies polyester reinforced with chopped strand mat glass fiber as a [CSM]3 laminate.",
      "Both tensile strength and fatigue strength decreased as temperature increased up to 60 C.",
      "At room temperature, the corrected fatigue table gives average lives of 55,000 cycles at 108.39 MPa, 382,000 cycles at 91.71 MPa, 913,000 cycles at 81.18 MPa, and 1,250,000 cycles at 73.717 MPa.",
      "The paper reports a fatigue-life reduction factor at 60 C in the range of 41% to 61% for applied stress amplitudes between 80 MPa and 100 MPa."
    ]
  }
];
