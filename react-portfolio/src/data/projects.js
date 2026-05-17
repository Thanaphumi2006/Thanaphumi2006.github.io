export const projects = [
  {
    id: 'pipelie',
    title: 'PipeLie - Production-Grade URL Shortener',
    date: 'April 2026',
    image: '/pipelie-cover.png',
    thumbnail: '/pipelie-thumbnail.png',
    github: 'https://github.com/PipeLieDev/pe-hackathon',
    devpost: 'https://devpost.com/software/pipe-lie',
    summary: '2nd Place Overall at MLH Production Engineering Hackathon - Full-stack URL shortener with enterprise observability',
    description: 'A production-grade URL shortener API built for the MLH Production Engineering Hackathon. The system creates shortened links, tracks analytics events, and exposes a RESTful API with full OpenAPI/Swagger documentation. Deployed on a self-hosted K3s Kubernetes cluster across 3 physical servers, featuring comprehensive observability with Prometheus, Grafana, and Loki.',
    details: [
      'Architected a complete production stack on physical Dell Optiplex servers running Ubuntu, connected via Tailscale (Tailnet) for secure remote access',
      'Deployed Flask application as 3 replicas on a self-hosted K3s Kubernetes cluster with Traefik ingress and CloudNativePG PostgreSQL (3-instance HA with streaming replication)',
      'Implemented Valkey (Redis-compatible) caching layer with 1 master + 3 replicas + 3 sentinels, featuring graceful degradation when cache is unavailable',
      'Built comprehensive observability stack: Prometheus (7-day retention), Grafana dashboards, Loki + Promtail log aggregation, and Alertmanager with Discord webhook notifications',
      'Created 8 distinct alert rules covering service health, error rates (>5% warning, >25% critical), latency (p95 > 2s), and resource utilization',
      'Engineered CI/CD pipeline with GitHub Actions: PostgreSQL + Valkey service containers, 70% minimum coverage enforcement, and diff coverage checks (80% threshold)',
      'Designed collision-resistant short code generation with retry loops, database savepoints, and Prometheus collision counters',
      'Conducted Locust-based load testing at Bronze (50 users), Silver (200 users), and Gold (500 users) tiers to identify bottlenecks'
    ],
    tags: ['Kubernetes', 'DevOps', 'Flask', 'Observability'],
    achievements: ['2nd Place Overall', 'Reliability Category Winner', '172 Commits / 52+ Pull Requests'],
    technologies: ['Python', 'Flask', 'PostgreSQL', 'Valkey', 'Kubernetes (K3s)', 'Docker', 'Prometheus', 'Grafana', 'Loki', 'Alertmanager', 'GitHub Actions', 'Locust', 'Tailscale', 'Traefik', 'CloudNativePG', 'Gunicorn', 'Peewee ORM', 'OpenAPI/Swagger']
  },
  {
    id: 'hora',
    title: 'HORA - Browser-Based Astrology & Tarot Web App',
    date: 'March 2026',
    image: '/hora-cover.png',
    thumbnail: '/hora-cover.png',
    github: 'https://github.com/Thanaphumi2006/HORA-Project',
    demo: 'https://thanaphumi2006.github.io/HORA-Project/',
    summary: 'Personalized astrology and tarot readings web application',
    description: 'Developed HORA, a browser-based web application that provides users with personalized astrology and tarot readings. The application generates daily horoscope predictions and ruling tarot cards based on the user\'s inputted name, birthdate, and specific life focus areas (e.g., Love, Career).',
    details: [
      'Built a browser-based web application providing personalized astrology and tarot readings',
      'Generates daily horoscope predictions based on user\'s name and birthdate',
      'Implements ruling tarot card selection based on specific life focus areas (Love, Career, etc.)',
      'Developed at The University of British Columbia'
    ],
    tags: ['Web App', 'JavaScript', 'Frontend'],
    technologies: ['JavaScript', 'HTML', 'CSS', 'Web APIs']
  },
  {
    id: 'diabetic',
    title: 'Explainable Early Detection of Diabetic Foot Ulcers',
    date: 'April 2023 - August 2024',
    thumbnail: '/diabetic-thumbnail.jpg',
    github: 'https://github.com/picha-aaa/Explainable-DFU-ViT',
    demo: 'https://huggingface.co/spaces/pichaaa1808/Explainable-DFU-ViT',
    summary: 'AI-powered thermal imaging for medical diagnosis - Silver Medal at Genius Olympiad 2024',
    description: 'A research project combining deep learning with thermal imaging for early detection of diabetic foot ulcers. The system uses Vision Transformers to analyze thermal images and provides explainable AI through Grad-CAM visualizations.',
    details: [
      'Presented research poster at the Rice Ken Kennedy Institute - AI in Health Conference 2024, Rice University',
      'Fine-tuned Vision Transformer (ViT-B/16) and DeiT-B Distilled models on thermal imaging data using class-weighted loss and stratified 5-fold cross-validation',
      'Achieved 91.9% accuracy / 94.5% F1 with ViT and 92.2% accuracy / 94.6% F1 with DeiT',
      'Silver Medal at Genius Olympiad 2024, Finalist for Thailand Innovation Award 2024 (Top 6 out of 410 teams)',
      'Designed hardware architecture interfacing Raspberry Pi with thermal sensor and LCD display for real-time Grad-CAM heatmaps'
    ],
    tags: ['PyTorch', 'Vision Transformer', 'Raspberry Pi', 'Medical AI'],
    achievements: ['Silver Medal - Genius Olympiad 2024', 'Thailand Innovation Award Finalist (Top 6/410)', 'Rice University Conference Presentation'],
    technologies: ['PyTorch', 'Vision Transformers (ViT)', 'DeiT', 'Raspberry Pi', 'FLIR Thermal Sensor', 'Grad-CAM', 'Python']
  },
  {
    id: 'hydrosense',
    title: 'Hydrosense - Hair-Based Absorption System',
    date: 'September 2023 - November 2024',
    image: '/hydrosense-cover.png',
    thumbnail: '/hydrosense-cover.png',
    summary: 'Bio-based water filtration achieving 81% Lead removal - Published research',
    description: 'An innovative environmental engineering project that developed a sustainable water filtration system using chemically treated human hair. The system leverages modified keratin structures to effectively remove heavy metals from contaminated water.',
    details: [
      'Developed a bio-based filtration system utilizing chemically treated human hair to modify keratin structures, achieving 81% Lead and 63% Copper removal rates validated by SEM and UV-Vis spectroscopy',
      'Integrated Arduino and TDS sensors to automate filtration cycles and facilitate real-time water quality monitoring',
      'Published research in the 6th KU-IC 2024 and IJSSHR',
      '1st Place Popular Vote at I-New Gen 2024 and Bronze Medal at NIA STEAM4INNOVATOR Day'
    ],
    tags: ['Arduino', 'Environmental', 'Research'],
    achievements: ['1st Place Popular Vote - I-New Gen 2024', 'Bronze Medal - NIA STEAM4INNOVATOR Day', 'Published in KU-IC 2024 & IJSSHR'],
    technologies: ['Arduino', 'TDS Sensors', 'SEM Analysis', 'UV-Vis Spectroscopy', 'Chemical Engineering']
  },
  {
    id: 'cubesat',
    title: 'Cube Satellite (CubeSat)',
    date: 'March 2023 - May 2023',
    image: '/cubesat-launch.png',
    thumbnail: '/cubesat-cover.png',
    summary: 'High-altitude balloon launch reaching 30km with integrated sensor payload',
    description: 'A functional CubeSat project developed as part of a 9-person engineering team. The satellite featured diverse sensor systems and was successfully launched via high-altitude balloon from Wangchan Valley, Rayong.',
    details: [
      'Designed, built, and launched a functional CubeSat as a core member of a 9-person engineering team',
      'Integrated diverse sensor payload systems, including GPS, environmental (air quality, humidity, UV), and attitude sensors, ensuring seamless data acquisition',
      'Developed embedded software to enable reliable long-range (LoRa) communication and robust data logging onto an SD card',
      'Successfully executed a high-altitude balloon launch from Wangchan Valley, Rayong, reaching a peak altitude of 30 km'
    ],
    tags: ['Embedded Systems', 'LoRa', 'Aerospace'],
    achievements: ['30km Peak Altitude Launch', '9-Person Team Project'],
    technologies: ['Arduino', 'LoRa', 'GPS', 'Environmental Sensors', 'SD Card Logging', 'Embedded C/C++']
  },
  {
    id: 'robotic',
    title: 'Robotic Dog Medical Assistant',
    date: 'January 2024',
    thumbnail: '/robotic-dog-cover.png',
    summary: '1st Place - Biomedical robotics prototype at Mahidol University',
    description: 'A biomedical robotics project that designed and prototyped an assistive robotic dog for medical environments. The project combined 3D modeling, circuit design, and sensor integration to create a functional prototype.',
    details: [
      'Developed a robotic assistant prototype by designing 3D models, circuit schematics, and sensor layouts',
      'Awarded 1st Place among 66 competitors by the School of Biomedical Engineering at Mahidol University'
    ],
    tags: ['3D Modeling', 'Robotics', 'Biomedical'],
    achievements: ['1st Place - Mahidol University Competition (66 competitors)'],
    technologies: ['Fusion 360', '3D Printing', 'Circuit Design', 'Sensor Integration', 'CAD']
  },
  {
    id: 'titan-impact',
    title: 'Titan Impact - Space RPG Adventure Game',
    date: 'January 2024',
    image: '/titan-impact-cover.png',
    thumbnail: '/titan-impact-cover.png',
    youtube: 'https://www.youtube.com/watch?v=Z6EfEmsRXWc',
    summary: 'Space exploration RPG set on Titan in 2077 with resource gathering and alien combat',
    description: 'A game about exploring the star Titan that takes place in the year 2077 and uses robots to explore various resources. The ship exploring the star Titan has a malfunction, causing the star\'s resources to be used to repair the ship. Within the game, there is an environment inside the planet to view and provide knowledge to those interested in the planet Titan and the fun of fighting aliens.',
    details: [
      'Developed a space exploration RPG game set on Saturn\'s moon Titan in the year 2077',
      'Created gameplay mechanics involving robot-controlled resource gathering to repair a malfunctioning spacecraft',
      'Designed immersive planetary environments showcasing Titan\'s unique features',
      'Implemented alien combat system for engaging gameplay experience'
    ],
    tags: ['Game Dev', 'Unreal Engine'],
    technologies: ['Unreal Engine', 'Blueprints', 'Game Design', '3D Modeling']
  }
];
