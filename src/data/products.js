// products.js - Uni Motors technical product catalog
export const categoryShowcase = [
  {
    id: "synchronous-motors",
    name: "Synchronous Motors",
    categoryKey: "Synchronous Motors",
    image: "/synchronous-motor.png",
    status: "Available",
    description: "UL and CE compliant constant-speed AC synchronous motors engineered for precise angular velocity, immediate bi-directional reversing, and continuous industrial operations.",
    features: [
      "Precision 250 RPM & 500 RPM fixed speed",
      "Torque output up to 10 Ncm",
      "Instantaneous direction reversal",
      "Voltages from 12V to 240V AC"
    ]
  },
  {
    id: "pm-stepper-motors",
    name: "PM Stepper Motors",
    categoryKey: "PM Stepper Motors",
    image: "/pm-stepper-motor.png",
    status: "Available",
    description: "Permanent magnet stepper motors delivering rapid start-stop-pause response, zero cumulative step error, and holding torque up to 30 cNm.",
    features: [
      "11.25° & 15° standard step angles",
      "Holding torque up to 30 cNm",
      "Unipolar and Bipolar windings",
      "High detent torque for power-off holding"
    ]
  },
  {
    id: "spur-gearbox",
    name: "Spur Gearbox",
    categoryKey: "Spur Gearbox",
    image: "/spur-gearbox.png",
    status: "Available",
    description: "High-torque reduction gearheads featuring reinforced die-cast alloy casings, low backlash ground steel gear trains, and high lateral force tolerance.",
    features: [
      "Torque transmission up to 15 Nm",
      "Extreme reduction ratios available",
      "Sintered bronze & ball bearing options",
      "Multi-position universal mounting"
    ]
  },
  {
    id: "dc-geared-motors",
    name: "DC Geared Motors",
    categoryKey: "DC Geared Motors",
    image: "/dc-geared-motor.png",
    status: "Coming soon",
    description: "Upcoming series of variable-speed brushed DC geared drive units with custom reduction profiles, designed for battery-powered automation and high starting torque applications.",
    features: [
      "Coming soon for OEM prototyping",
      "Custom voltage ratings 12V / 24V / 48V",
      "Integrated spur reduction stages",
      "Flexible shaft & keyway configurations"
    ]
  }
];

export const productCategories = [
  "All",
  "Synchronous Motors",
  "PM Stepper Motors",
  "Spur Gearbox",
  "DC Geared Motors"
];

export const productsData = [
  // =========================================================================
  // 1. SYNCHRONOUS MOTORS (UMSM05, UMSM4a, UMSM4b, UMSM4D, UMSM6A, UMSM8)
  // =========================================================================
  {
    id: "umsm05",
    name: "UMSM05",
    category: "Synchronous Motors",
    shortDescription: "Ventilated 500 RPM AC synchronous motor delivering 1.35 Ncm running torque with superior thermal dissipation.",
    description: "The UMSM05 is a versatile 2.1W bi-directional AC synchronous motor designed for timing-critical continuous operations. Features a ventilated metal housing for superior heat dispersion, precision sintered bronze bearings, and compatibility with spur reduction gearboxes for high-torque applications.",
    specifications: {
      speed: "500 RPM (50Hz) / 600 RPM (60Hz)",
      torque: "1.35 Ncm",
      powerOutput: "0.7 W",
      inputPower: "2.1 W (50Hz) / 2.2 W (60Hz)",
      detentTorque: "0.35 Ncm",
      voltage: "12V / 24V / 48V / 110V / 230V AC",
      frequency: "50 / 60 Hz",
      dutyCycle: "100% Continuous",
      enclosure: "IP40",
      thermalClass: "105°C",
      rotorShaft: "Hardened steel, precision ground & polished",
      bearings: "Sintered bronze, self-lubricating",
      dimensions: "Dia 48 x 25 mm",
      weight: "140 g"
    },
    applications: [
      "Process Recorders & Timing Instruments",
      "Automated Valve Actuators",
      "Medical Diagnostic Equipment",
      "HVAC Dampers & Refrigeration Controls",
      "Peristaltic & Dosing Pumps",
      "Textile & Diamond Machinery"
    ],
    features: [
      "Zero rotational slip under rated torque",
      "Ventilated outer casing for reliable thermal dissipation",
      "Class IEC60034-1 high-voltage test compliant",
      "Stall-protected rotor architecture prevents burn-out"
    ],
    image: "https://mechtex.com/uploads/images/202311/image_750x_654dd4a289f8e.jpg",
    drawingImage: "/drawings/synchronous-motors.png",
    imageType: "ac-motor-1"
  },
  {
    id: "umsm4a",
    name: "UMSM4a",
    category: "Synchronous Motors",
    shortDescription: "Heavy-duty 250 RPM AC synchronous motor engineered for high running torque of 3.6 Ncm.",
    description: "The UMSM4a is built for low-speed high-torque industrial duty, delivering a steady 250 RPM rotational speed with 3.6 Ncm running torque. Its heavy-duty stator windings and reinforced drive shaft allow dependable operation in demanding damper and valve control installations.",
    specifications: {
      speed: "250 RPM (50Hz) / 300 RPM (60Hz)",
      torque: "3.6 Ncm",
      powerOutput: "0.94 W",
      inputPower: "4.0 W",
      detentTorque: "0.45 Ncm",
      voltage: "24V / 110V / 230V AC",
      frequency: "50 / 60 Hz",
      dutyCycle: "100% Continuous",
      enclosure: "IP40",
      thermalClass: "105°C",
      rotorShaft: "Hardened ground steel",
      bearings: "Self-lubricating bronze sleeve",
      dimensions: "Dia 52 x 28.5 mm",
      weight: "190 g"
    },
    applications: [
      "Industrial Valve & Damper Actuators",
      "Packaging Indexing Mechanisms",
      "Stage & Architectural Lighting Rotators",
      "Commercial Refrigeration Dampers",
      "Fluid Metering Systems",
      "Display Automation Turnstiles"
    ],
    features: [
      "Robust 3.6 Ncm torque at low 250 RPM",
      "Instantaneous reversible direction capability",
      "Heavy load bearing support",
      "Pre-wired with color-coded leads"
    ],
    image: "https://mechtex.com/uploads/images/202311/image_750x_654dd2b7b9d99.jpg",
    drawingImage: "/drawings/mtr4a.png",
    imageType: "ac-motor-2"
  },
  {
    id: "umsm4b",
    name: "UMSM4b",
    category: "Synchronous Motors",
    shortDescription: "Enclosed 500 RPM AC synchronous motor delivering 2.7 Ncm torque for high dynamic stability.",
    description: "The UMSM4b features an enclosed transmission section that provides 2.7 Ncm running torque at 500 RPM. Engineered for quiet operation and zero-maintenance longevity, it is an industry favorite for automated dispensing and medical instrumentation.",
    specifications: {
      speed: "500 RPM (50Hz) / 600 RPM (60Hz)",
      torque: "2.7 Ncm",
      powerOutput: "1.41 W",
      inputPower: "3.6 W",
      detentTorque: "0.46 Ncm",
      voltage: "24V / 110V / 230V AC",
      frequency: "50 / 60 Hz",
      dutyCycle: "100% Continuous",
      enclosure: "IP40",
      thermalClass: "105°C",
      rotorShaft: "Hardened steel, ground & polished",
      bearings: "Sintered bronze bushings",
      dimensions: "Dia 52 x 28.5 mm",
      weight: "190 g"
    },
    applications: [
      "Precision Dispensing Equipment",
      "Label Printing & Application Drives",
      "Medical Laboratory Agitators",
      "HVAC Ventilation Actuation",
      "Vending Machine Drives",
      "Rotary Switches"
    ],
    features: [
      "Enclosed dust-resistant motor housing",
      "High power efficiency of 1.41W output",
      "Extremely quiet operational sound profile (<40 dB)",
      "Universal mounting alignment"
    ],
    image: "https://mechtex.com/uploads/images/202311/image_750x_654dd4ef0dcf6.jpg",
    drawingImage: "/drawings/mtr4b.png",
    imageType: "ac-motor-3"
  },
  {
    id: "umsm4d",
    name: "UMSM4D",
    category: "Synchronous Motors",
    shortDescription: "Dual-bearing high stability synchronous motor with reinforced front plate mounting.",
    description: "The UMSM4D incorporates an advanced dual-bearing support system and reinforced mounting faceplate to absorb severe lateral and axial shaft loads. Engineered for heavy industrial linkages and harsh operating environments.",
    specifications: {
      speed: "500 RPM (50Hz) / 600 RPM (60Hz)",
      torque: "2.8 Ncm",
      powerOutput: "1.45 W",
      inputPower: "3.8 W",
      detentTorque: "0.48 Ncm",
      voltage: "24V / 110V / 230V AC",
      frequency: "50 / 60 Hz",
      dutyCycle: "100% Continuous",
      enclosure: "IP40",
      thermalClass: "105°C",
      rotorShaft: "Heavy-duty hardened ground steel",
      bearings: "Dual sintered bronze sleeve bearings",
      dimensions: "Dia 52 x 34 mm",
      weight: "210 g"
    },
    applications: [
      "Heavy Industrial Valve Actuators",
      "Conveyor Belt Diverters",
      "Commercial Oven Rotary Mechanisms",
      "Automated Material Handlers",
      "Industrial Printing Machinery"
    ],
    features: [
      "Dual bearing system for elevated lateral load support",
      "Rigid mounting faceplate with pre-tapped holes",
      "Stall-safe rotor architecture",
      "Extended service life under continuous operation"
    ],
    image: "https://mechtex.com/uploads/images/202311/image_750x_654dd515248fc.jpg",
    drawingImage: "/drawings/mtr4db.png",
    imageType: "ac-motor-2"
  },
  {
    id: "umsm6a",
    name: "UMSM6A",
    category: "Synchronous Motors",
    shortDescription: "High-power 500 RPM synchronous motor delivering robust rotational drive for heavy mechanisms.",
    description: "The UMSM6A represents our high-torque medium frame synchronous motor platform, generating consistent rotational power under heavy dynamic loads. Ideal for large damper systems, valve controllers, and commercial appliance drives.",
    specifications: {
      speed: "500 RPM (50Hz) / 600 RPM (60Hz)",
      torque: "4.5 Ncm",
      powerOutput: "2.2 W",
      inputPower: "5.5 W",
      detentTorque: "0.75 Ncm",
      voltage: "24V / 110V / 230V AC",
      frequency: "50 / 60 Hz",
      dutyCycle: "100% Continuous",
      enclosure: "IP40",
      thermalClass: "120°C",
      rotorShaft: "Precision ground hardened steel",
      bearings: "Self-aligning sintered bronze bushings",
      dimensions: "Dia 58 x 35 mm",
      weight: "280 g"
    },
    applications: [
      "Commercial HVAC Dampers & Air Handlers",
      "Industrial Fluid Flow Regulators",
      "Heavy Display Turntables",
      "Automated Security Gates",
      "Feed Metering & Dosing Pumps"
    ],
    features: [
      "Substantial 4.5 Ncm running torque",
      "Enhanced thermal insulation rating (Class E/B)",
      "High shock load resistance",
      "Direct coupling compatible with GB spur gearboxes"
    ],
    image: "https://mechtex.com/uploads/images/202311/image_750x_654dd61eeeec0.jpg",
    drawingImage: "/drawings/mtr6b.png",
    imageType: "ac-motor-3"
  },
  {
    id: "umsm8",
    name: "UMSM8",
    category: "Synchronous Motors",
    shortDescription: "Flagship 10.2 Ncm high-torque reversible synchronous drive with Class F thermal insulation.",
    description: "Our premier synchronous motor drive unit. The UMSM8 produces a massive 10.2 Ncm torque with thermal Class F (130°C) certification. Built for extreme industrial automation where uncompromising power, continuous operation, and exact synchronization are mandatory.",
    specifications: {
      speed: "500 RPM (50Hz) / 600 RPM (60Hz)",
      torque: "10.2 Ncm",
      powerOutput: "4.5 W",
      inputPower: "11.0 W",
      detentTorque: "1.5 Ncm",
      voltage: "24V / 110V / 230V AC",
      frequency: "50 / 60 Hz",
      dutyCycle: "100% Continuous",
      enclosure: "IP40",
      thermalClass: "130°C (Class F)",
      rotorShaft: "Hardened & ground polished steel",
      bearings: "Self-lubricating, self-centering sintered bronze",
      dimensions: "Dia 66.4 x 40.4 mm",
      weight: "450 g"
    },
    applications: [
      "Heavy Reversible Power Drives for Actuators",
      "Chemical Dosing & High-Pressure Pumps",
      "Industrial Label Printing & Packaging Machinery",
      "High-Force Rotary Indexers",
      "Automatic Vending & Dispensing Systems"
    ],
    features: [
      "Industry-leading 10.2 Ncm maximum running torque",
      "Class F 130°C thermal protection standard",
      "Self-centering bearing architecture for reduced friction",
      "Can remain stalled under voltage without burning"
    ],
    image: "https://mechtex.com/uploads/images/202311/image_750x_654dd597bbc27.jpg",
    drawingImage: "/drawings/mtr8c.png",
    imageType: "ac-motor-3"
  },

  // =========================================================================
  // 2. PM STEPPER MOTORS (UMSM5D, UMSM4D, UMSM4E, UMSM8D)
  // =========================================================================
  {
    id: "umsm5d",
    name: "UMSM5D",
    category: "PM Stepper Motors",
    shortDescription: "15° step angle permanent magnet stepper motor with 2.5 cNm holding torque.",
    description: "The UMSM5D is a 24-step permanent magnet stepper motor delivering precise 15° angular displacement per pulse. Features 2.5 cNm holding torque, making it suitable for compact indexing, valve positioning, and laboratory automation.",
    specifications: {
      stepAngle: "15° (24 Steps / Revolution)",
      holdingTorque: "2.5 cNm",
      detentTorque: "0.45 cNm",
      voltage: "6V to 24V DC",
      resistancePerWinding: "20 Ω",
      winding: "Unipolar / Bipolar",
      thermalClass: "105°C (max)",
      axialForce: "2 N",
      lateralForce: "4 N",
      rotorInertia: "6 g-cm²",
      dimensions: "Dia 48 x 25 mm"
    },
    applications: [
      "Medical Infusion & Dosing Pumps",
      "Automated Valve Positioners",
      "Optical Filter & Shutter Indexers",
      "Camera Pan-Tilt Mechanisms",
      "Currency & Ticket Handling Machines"
    ],
    features: [
      "15° discrete step resolution (24 steps/rev)",
      "Strong detent torque keeps position when power is removed",
      "Instantaneous stop and reverse with minimal settling time",
      "Compatible with unipolar and bipolar drive circuits"
    ],
    image: "https://mechtex.com/uploads/images/202311/image_750x_654dd4a289f8e.jpg",
    drawingImage: "/drawings/mts5.png",
    imageType: "ac-motor-1"
  },
  {
    id: "umsm4d-pm",
    name: "UMSM4D",
    category: "PM Stepper Motors",
    shortDescription: "High-stability 7.5° PM stepper motor engineered for yarn and textile motion indexing.",
    description: "The UMSM4D is optimized for high-speed indexing applications requiring tight step accuracy and dependable position holding. With 48 steps per revolution and reinforced casing, it is widely utilized in textile yarn feeders and precision robotics.",
    specifications: {
      stepAngle: "7.5° / 15°",
      holdingTorque: "3.2 cNm",
      detentTorque: "0.6 cNm",
      voltage: "5V to 24V DC",
      resistancePerWinding: "30 Ω",
      winding: "Bipolar / Unipolar",
      thermalClass: "105°C",
      axialForce: "4 N",
      lateralForce: "8 N",
      dimensions: "Dia 52 x 28.5 mm"
    },
    applications: [
      "Textile Machinery & Yarn Feed Systems",
      "Automated Pick-and-Place Feeders",
      "Analytical Specimen Carousels",
      "Medical Diagnostic Robots",
      "Industrial Dispensing Valves"
    ],
    features: [
      "High step resolution with rapid pulse response",
      "Low mechanical backlash and minimal resonance",
      "Pre-lubricated sintered bronze bearings",
      "Direct gearbox flange mounting"
    ],
    image: "https://mechtex.com/uploads/images/202311/image_750x_654dd597bbc27.jpg",
    drawingImage: "/drawings/mts4b.png",
    imageType: "ac-motor-2"
  },
  {
    id: "umsm4e",
    name: "UMSM4E",
    category: "PM Stepper Motors",
    shortDescription: "Reinforced PM stepper motor with dual bearing support for high lateral force duty.",
    description: "The UMSM4E (MTSD4b series) provides enhanced mechanical rigidity through an extended front housing and dual-bushing shaft support. Designed to withstand severe radial loads in gear-coupled drives and precision mechanical actuators.",
    specifications: {
      stepAngle: "7.5° / 15°",
      holdingTorque: "3.5 cNm",
      detentTorque: "0.7 cNm",
      voltage: "5V to 24V DC",
      resistancePerWinding: "25 Ω",
      winding: "Bipolar / Unipolar",
      thermalClass: "105°C",
      axialForce: "5 N",
      lateralForce: "10 N",
      dimensions: "Dia 52 x 34 mm"
    },
    applications: [
      "Direct Gear-Coupled Actuators",
      "Conveyor Belt Indexing & Sorting",
      "Automated Locker & Turnstile Locking",
      "Pharmaceutical Blister Packaging",
      "Security Access Control Hardware"
    ],
    features: [
      "Reinforced front plate for elevated lateral loads",
      "Stable detent torque prevents mechanical drift",
      "Smooth micro-stepping compatibility",
      "Long continuous service life"
    ],
    image: "https://mechtex.com/uploads/images/202311/image_750x_654dd515248fc.jpg",
    drawingImage: "/drawings/mts4s.png",
    imageType: "ac-motor-2"
  },
  {
    id: "umsm8d",
    name: "UMSM8D",
    category: "PM Stepper Motors",
    shortDescription: "Heavy-duty 30 cNm holding torque PM stepper motor with 130°C thermal endurance.",
    description: "The flagship UMSM8D is our most powerful permanent magnet stepper motor, generating a massive 30 cNm holding torque. Rated to Class B/F (130°C max winding temperature), it is built for commercial ovens, voltage stabilizers, and heavy industrial automation.",
    specifications: {
      stepAngle: "11.25° (32 Steps / Revolution)",
      holdingTorque: "30 cNm",
      detentTorque: "2.0 cNm",
      voltage: "4.5V to 24V DC",
      resistancePerWinding: "4 Ω",
      winding: "Bipolar / Unipolar",
      thermalClass: "130°C (Class F)",
      axialForce: "6 N",
      lateralForce: "15 N",
      rotorInertia: "155 g-cm²",
      dimensions: "Dia 66.4 x 40.4 mm",
      weight: "450 g"
    },
    applications: [
      "Commercial Combi Ovens & Food Machinery",
      "Industrial Voltage Stabilizers & Servo Regulators",
      "Heavy Doner Kebab Rotary Drives",
      "Material Handling Rotary Tables",
      "Solar Tracking Multi-Axis Drives"
    ],
    features: [
      "Extraordinary 30 cNm holding torque capacity",
      "Class F 130°C winding temperature tolerance",
      "Heavy rotor inertia for dampening vibration",
      "Can withstand continuous stall without thermal damage"
    ],
    image: "https://mechtex.com/uploads/images/202311/image_750x_654dd597bbc27.jpg",
    drawingImage: "/drawings/mts8c.png",
    imageType: "ac-motor-3"
  },

  // =========================================================================
  // 3. SPUR GEARBOX (UMGB5A, UMGB5B, UMGB7A, UMGB4A, UMGB8A, UMGBUA, UMGBXA)
  // =========================================================================
  {
    id: "umgb5a",
    name: "UMGB5A",
    category: "Spur Gearbox",
    shortDescription: "Compact pear-shaped spur reduction gearbox delivering up to 1.0 Nm gear torque.",
    description: "The UMGB5A is a classic pear-shaped spur reduction gearbox engineered for compact installations. Compatible with MTR, MTS, and small DC motors, it offers broad reduction ratios up to 5.4 lac with quiet, long-life lubrication.",
    specifications: {
      gearType: "Spur Reduction",
      gearTorque: "0.5 Nm to 1.0 Nm",
      radialTorque: "0.6 Nm",
      axialThrust: "20 N",
      lateralForce: "60 N",
      outputBearing: "Sintered bronze sleeve bushings (Ball bearing on request)",
      outputShafts: "3.175, 4.00, 4.76, 5.00, 6.00 & 7.00 mm",
      mounting: "Universal, any position",
      enclosure: "IP40",
      ambientTemp: "-15°C to +55°C",
      weight: "60 g",
      dimensions: "55.2 x 65.8 x 16.6 mm"
    },
    applications: [
      "Automated Valve Controls",
      "Display Turntables & Indexing Wheels",
      "Vending Machine Dispensers",
      "HVAC Damper Actuation",
      "Laboratory Fluid Mixers"
    ],
    features: [
      "Pear-shaped offset profile for flexible mounting",
      "Wide gear reduction ratios up to 5.4 lac",
      "High lateral force tolerance of 60 N",
      "Pre-lubricated with high-grade synthetic grease"
    ],
    image: "https://mechtex.com/uploads/images/202311/image_750x_654e185fc4f24.jpg",
    drawingImage: "/drawings/gb5p.png",
    imageType: "gearbox-1"
  },
  {
    id: "umgb5b",
    name: "UMGB5B",
    category: "Spur Gearbox",
    shortDescription: "Slimline 12.1 mm reduction gearbox providing 0.8 Nm torque with metal faceplate.",
    description: "The UMGB5B offers an ultra-thin 12.1 mm profile combined with 0.8 Nm continuous gear torque capacity. Designed for tight spatial enclosures where thickness is limited, without sacrificing gear integrity or shaft rigidity.",
    specifications: {
      gearType: "Spur Reduction",
      gearTorque: "0.8 Nm",
      radialTorque: "0.6 Nm",
      axialThrust: "20 N",
      lateralForce: "60 N",
      outputBearing: "Sintered bronze sleeve bushings",
      outputShafts: "4 x 12 mm standard (Custom available)",
      mounting: "Universal, any position",
      enclosure: "IP40",
      ambientTemp: "-15°C to +55°C",
      weight: "55 g",
      dimensions: "55.2 x 65.8 x 12.1 mm"
    },
    applications: [
      "Slim Profile Shutter Regulators",
      "Printing Machinery Feeders",
      "Dosing Pump Assemblies",
      "Electronic Security Locksets",
      "Optical Filter Wheels"
    ],
    features: [
      "Slim 12.1 mm envelope for compact equipment",
      "Precision brass and steel gear train",
      "Low mechanical backlash profile",
      "Vibration-isolated alloy faceplate"
    ],
    image: "https://mechtex.com/uploads/images/202311/image_750x_654e185fc4f24.jpg",
    drawingImage: "/drawings/gb5h.png",
    imageType: "gearbox-2"
  },
  {
    id: "umgb7a",
    name: "UMGB7A",
    category: "Spur Gearbox",
    shortDescription: "Heavy industrial spur gearbox delivering 5 Nm gear torque and 400 N lateral force resistance.",
    description: "The UMGB7A is an industrial workhorse capable of transmitting up to 5 Nm of torque with an exceptional 400 N lateral force rating. Features an 8 x 22 mm D-cut shaft, sintered bronze sleeve bushings, and an alloy casing for heavy power transmission.",
    specifications: {
      gearType: "Spur Reduction",
      gearTorque: "5.0 Nm (50 kg-cm)",
      radialTorque: "4.0 Nm",
      axialThrust: "100 N",
      lateralForce: "400 N",
      outputBearing: "Sintered bronze sleeve bushings",
      outputShafts: "Dia 8 x 22 mm (with flat D-cut)",
      mounting: "Universal, any position",
      enclosure: "IP30",
      ambientTemp: "-15°C to +55°C",
      weight: "300 g",
      dimensions: "60 x 60 x 19 mm"
    },
    applications: [
      "Heavy Conveyors & Elevating Mechanisms",
      "Industrial Agitators & Chemical Mixers",
      "Automated Gates & Security Barriers",
      "Packaging Sealing & Crimping Drives",
      "Motorized Valve Operators"
    ],
    features: [
      "5.0 Nm high-torque rating for heavy power transfer",
      "Superior 400 N lateral mechanical resistance",
      "Standard 8 mm drive shaft with machined D-flat",
      "Compatible with UMSM05, UMSM4a, UMSM4b, UMSM4D, and DC motors"
    ],
    image: "/umgb7a.jpg",
    drawingImage: "/drawings/gb7.png",
    imageType: "gearbox-3"
  },
  {
    id: "umgb4a",
    name: "UMGB4A",
    category: "Spur Gearbox",
    shortDescription: "High-shock 5 Nm reduction gearbox with 8 x 23 mm shaft for severe industrial service.",
    description: "The UMGB4A is engineered to absorb extreme mechanical shocks and heavy continuous torque up to 5 Nm. Features reinforced die-cast alloy base plates, heavy-duty 8 mm shafting, and optional ball bearings for demanding automation lines.",
    specifications: {
      gearType: "Spur Reduction",
      gearTorque: "5.0 Nm (50 kg-cm)",
      radialTorque: "4.0 Nm",
      axialThrust: "100 N",
      lateralForce: "300 N",
      outputBearing: "Sintered Bronze (Ball Bearing on request)",
      outputShafts: "Dia 8 x 23 mm (with flat D-cut)",
      mounting: "Universal, any position",
      enclosure: "IP30",
      ambientTemp: "-15°C to +55°C",
      weight: "350 g",
      dimensions: "70 x 70 x 19 mm"
    },
    applications: [
      "Material Handling Drives",
      "Automated Assembly Line Conveyors",
      "Commercial Dishwashers & Pump Drives",
      "Heavy Flow Control Actuation",
      "Packaging Indexing Heads"
    ],
    features: [
      "Reinforced casing for high shock load tolerance",
      "Heavy 300 N lateral force absorption",
      "Optional sealed ball bearings for extreme reliability",
      "Multi-hole universal mounting geometry"
    ],
    image: "https://mechtex.com/uploads/images/202311/image_750x_654e1bd0d0c7d.jpg",
    drawingImage: "/drawings/gb4.png",
    imageType: "gearbox-4"
  },
  {
    id: "umgb8a",
    name: "UMGB8A",
    category: "Spur Gearbox",
    shortDescription: "Mid-range 4 Nm spur reduction unit offering balanced weight and high mechanical reliability.",
    description: "The UMGB8A provides a balanced 4 Nm torque output in a lightweight 200 g alloy housing. Engineered for industrial applications requiring strong torque without excess weight, such as robotic arms and overhead automation carriages.",
    specifications: {
      gearType: "Spur Reduction",
      gearTorque: "4.0 Nm (40 kg-cm)",
      radialTorque: "3.0 Nm",
      axialThrust: "100 N",
      lateralForce: "250 N",
      outputBearing: "Sintered bronze sleeve bushing (Ball bearing on request)",
      outputShafts: "Dia 8 x 23 mm (with flat D-cut)",
      mounting: "Universal, any position",
      enclosure: "IP30",
      ambientTemp: "-15°C to +55°C",
      weight: "200 g",
      dimensions: "65 x 65 x 18 mm"
    },
    applications: [
      "Robotic Gripper & Joint Actuators",
      "Overhead Conveyor Carriages",
      "Labeling & Coding Machinery",
      "Solar Tracking Linkages",
      "Automated Door & Window Actuators"
    ],
    features: [
      "Balanced 4.0 Nm torque output at only 200 g weight",
      "Hardened steel output pinion",
      "Long maintenance-free life with synthetic grease",
      "Broad motor mounting compatibility"
    ],
    image: "https://mechtex.com/uploads/images/202311/image_750x_654e1c3142e02.jpg",
    drawingImage: "/drawings/gb8.png",
    imageType: "gearbox-5"
  },
  {
    id: "umgbua",
    name: "UMGBUA",
    category: "Spur Gearbox",
    shortDescription: "Heavy-duty 6 Nm reduction unit compatible with motors up to 52 mm frame size.",
    description: "The UMGBUA gearbox delivers a continuous 6 Nm torque rating and accommodates larger motor frames up to 52 mm, including the UMSM8, UMSM8D, and DC motors. Built for high mechanical reliability under high axial and radial forces.",
    specifications: {
      gearType: "Spur Reduction",
      gearTorque: "6.0 Nm (60 kg-cm)",
      radialTorque: "4.0 Nm",
      axialThrust: "30 N",
      lateralForce: "250 N",
      outputBearing: "Sintered bronze sleeve bushings (Ball bearing on special request)",
      outputShafts: "Dia 8 x 25 mm (with flat D-cut)",
      mounting: "Universal, any position",
      enclosure: "IP30",
      ambientTemp: "-15°C to +55°C",
      weight: "350 g",
      dimensions: "72 x 72 x 20 mm"
    },
    applications: [
      "High-Force Linear Actuators",
      "Automated Factory Gate Drives",
      "Heavy Rotary Dosing Units",
      "Packaging Sealing & Press Mechanisms",
      "Textile Processing Rollers"
    ],
    features: [
      "6.0 Nm continuous industrial rating",
      "Accommodates high-output 52 mm motor platforms",
      "Heavy-duty 8 x 25 mm shaft with precision flat",
      "Multi-stage high reduction steel gear train"
    ],
    image: "https://mechtex.com/uploads/images/202311/image_750x_654e1c92b7bb0.jpg",
    drawingImage: "/drawings/gbu.png",
    imageType: "gearbox-6"
  },
  {
    id: "umgbxa",
    name: "UMGBXA",
    category: "Spur Gearbox",
    shortDescription: "Ultra-heavy 15 Nm industrial spur transmission with reinforced 12 mm drive shaft.",
    description: "The UMGBXA is our highest capacity reduction gearbox, delivering an impressive 15 Nm of output torque with a 600 N lateral load rating. Built with a 12 x 25.5 mm hardened drive shaft, it handles non-stop heavy plant operation and severe duty cycles.",
    specifications: {
      gearType: "Spur Reduction",
      gearTorque: "15.0 Nm (150 kg-cm)",
      radialTorque: "6.0 Nm",
      axialThrust: "400 N",
      lateralForce: "600 N",
      outputBearing: "Sintered Bronze Sleeve bushings (Ball bearing on request)",
      outputShafts: "Dia 12 x 25.5 mm (with flat D-cut)",
      mounting: "Universal, any position",
      enclosure: "IP30",
      ambientTemp: "-15°C to +55°C",
      weight: "550 g",
      dimensions: "85 x 85 x 24 mm"
    },
    applications: [
      "Mining & Material Handling Conveyors",
      "Heavy Industrial Mixing Vats",
      "Automated Overhead Hoists",
      "High-Pressure Valve Positioning",
      "Extrusion & Packaging Feeding"
    ],
    features: [
      "Maximum capacity 15 Nm output gear torque",
      "Heavy-duty 12 mm drive shaft with machined D-flat",
      "Exceptional 600 N lateral and 400 N axial resistance",
      "Precision heat-treated steel gear profiles"
    ],
    image: "https://mechtex.com/uploads/images/202311/image_750x_654e1f7f3fbbb.jpg",
    drawingImage: "/drawings/gbw.png",
    imageType: "gearbox-6"
  }
];
