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
    evidenceCount: 1
  },
  {
    name: "Chopped Strand Mat 225 gsm + Polyester Resin",
    note: "Exact target system. Store separately from 300 gsm because laminate behavior may differ.",
    evidenceCount: 0
  }
];

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
  }
];
