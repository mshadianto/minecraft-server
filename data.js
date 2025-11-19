// data.js - Data untuk Minecraft Hub Pro

const servers = [
    {
        id: 1,
        name: "NetherGames",
        icon: "🎮",
        ip: "play.nethergames.org",
        port: "19132",
        players: "5000+",
        type: "Minigames",
        region: "International",
        version: "1.20+",
        description: "Server minigames terbesar dengan berbagai mode seperti BedWars, SkyWars, Murder Mystery!",
        tags: ["Minigames", "BedWars", "Popular"],
        rating: 4.8,
        reviews: 1250,
        downloadLink: "https://nethergames.org",
        screenshots: ["🎮", "🏃", "⚔️", "🏆"],
        features: [
            "BedWars & SkyWars",
            "Murder Mystery",
            "Duels & PvP Arena",
            "Custom Minigames",
            "Rank System",
            "Anti-Cheat Protection"
        ],
        installation: [
            "Buka Minecraft Bedrock Edition",
            "Pilih 'Play' → 'Servers'",
            "Klik 'Add Server'",
            "Masukkan Name: NetherGames",
            "Masukkan Address: play.nethergames.org",
            "Port: 19132",
            "Klik 'Save' dan 'Join Server'"
        ]
    },
    {
        id: 2,
        name: "CubeCraft",
        icon: "🧊",
        ip: "mco.cubecraft.net",
        port: "19132",
        players: "4000+",
        type: "Minigames",
        region: "International",
        version: "1.20+",
        description: "Server populer dengan EggWars, SkyWars, dan Lucky Islands.",
        tags: ["EggWars", "Quality", "Featured"],
        rating: 4.7,
        reviews: 980,
        downloadLink: "https://cubecraft.net",
        screenshots: ["🧊", "🥚", "☁️", "🎲"],
        features: [
            "EggWars Teams",
            "SkyWars Solo/Teams",
            "Lucky Islands",
            "Tower Defence",
            "Parkour Challenges",
            "Daily Rewards"
        ],
        installation: [
            "Launch Minecraft Bedrock",
            "Navigate to Servers",
            "Add New Server",
            "Server Name: CubeCraft",
            "Server Address: mco.cubecraft.net",
            "Port: 19132",
            "Save and Connect"
        ]
    },
    {
        id: 3,
        name: "The Hive",
        icon: "🐝",
        ip: "geo.hivebedrock.network",
        port: "19132",
        players: "6000+",
        type: "Minigames",
        region: "International",
        version: "1.20+",
        description: "Server minigames premium dengan kualitas tinggi dan mode kompetitif.",
        tags: ["Premium", "Competitive", "Active"],
        rating: 4.9,
        reviews: 1580,
        downloadLink: "https://hivebedrock.network",
        screenshots: ["🐝", "🎯", "⚡", "👑"],
        features: [
            "SkyWars & BedWars",
            "Hide & Seek",
            "DeathRun",
            "Treasure Wars",
            "Competitive Rankings",
            "Monthly Tournaments"
        ],
        installation: [
            "Open Minecraft Bedrock Edition",
            "Go to Play → Servers",
            "Click Add Server",
            "Name: The Hive",
            "Address: geo.hivebedrock.network",
            "Port: 19132",
            "Save and Join"
        ]
    },
    {
        id: 4,
        name: "HyperLands",
        icon: "🌟",
        ip: "play.hyperlandsmc.net",
        port: "19132",
        players: "1500+",
        type: "Survival",
        region: "International",
        version: "1.20+",
        description: "Server survival dengan ekonomi, jobs, dan custom items.",
        tags: ["Survival", "Economy", "Jobs"],
        rating: 4.6,
        reviews: 720,
        downloadLink: "https://hyperlandsmc.net",
        screenshots: ["🌟", "💰", "🏗️", "⚒️"],
        features: [
            "Economy System",
            "Jobs & Ranks",
            "Custom Items",
            "Land Claims",
            "Player Shops",
            "PvE Challenges"
        ],
        installation: [
            "Start Minecraft Bedrock",
            "Select Servers",
            "Add Server",
            "Name: HyperLands",
            "IP: play.hyperlandsmc.net",
            "Port: 19132",
            "Connect"
        ]
    },
    {
        id: 5,
        name: "CosmicPE",
        icon: "🌌",
        ip: "cosmicpe.me",
        port: "19132",
        players: "800+",
        type: "Factions",
        region: "International",
        version: "1.20+",
        description: "Server factions hardcore dengan PvP intens dan raiding.",
        tags: ["Factions", "PvP", "Hardcore"],
        rating: 4.5,
        reviews: 450,
        downloadLink: "https://cosmicpe.me",
        screenshots: ["🌌", "⚔️", "💣", "👥"],
        features: [
            "Factions System",
            "PvP Arena",
            "Raiding & Claiming",
            "Custom Enchants",
            "Economy & Trading",
            "Clan Wars"
        ],
        installation: [
            "Launch Minecraft",
            "Servers Menu",
            "Add Server",
            "Name: CosmicPE",
            "Address: cosmicpe.me",
            "Port: 19132",
            "Join Server"
        ]
    },
    {
        id: 6,
        name: "PixelParadise",
        icon: "🎨",
        ip: "play.pixelparadise.gg",
        port: "19132",
        players: "1000+",
        type: "Creative",
        region: "International",
        version: "1.20+",
        description: "Server creative terbaik dengan plot besar dan WorldEdit.",
        tags: ["Creative", "Building", "WorldEdit"],
        rating: 4.7,
        reviews: 630,
        downloadLink: "https://pixelparadise.gg",
        screenshots: ["🎨", "🏗️", "🌈", "✨"],
        features: [
            "Large Plots",
            "WorldEdit Tools",
            "Building Contests",
            "Plot Merging",
            "Custom Heads",
            "Particle Effects"
        ],
        installation: [
            "Open Minecraft Bedrock",
            "Go to Servers",
            "Add New Server",
            "Name: PixelParadise",
            "IP: play.pixelparadise.gg",
            "Port: 19132",
            "Save & Join"
        ]
    }
];

const skins = [
    {
        id: 1,
        name: "Steve HD",
        icon: "👤",
        type: "Classic",
        resolution: "64x64",
        downloads: "50K+",
        description: "Skin Steve klasik dengan texture HD yang lebih detail dan realistik.",
        tags: ["HD", "Classic", "Popular"],
        rating: 4.5,
        reviews: 850,
        downloadLink: "https://mcpedl.com/steve-hd-skin",
        fileSize: "125 KB",
        screenshots: ["👤", "🎮", "⛏️", "🔨"],
        features: [
            "High Resolution 64x64",
            "Detailed Textures",
            "Classic Style",
            "Compatible dengan semua versi",
            "No Lag",
            "Clean Design"
        ],
        installation: [
            "Download file .png skin",
            "Buka Minecraft Bedrock",
            "Profile → Edit Character",
            "Pilih 'Classic Skins'",
            "Klik 'Choose New Skin'",
            "Browse dan pilih file yang di-download",
            "Klik 'Confirm' untuk apply skin"
        ]
    },
    {
        id: 2,
        name: "Enderman Cool",
        icon: "👾",
        type: "Mob",
        resolution: "128x128",
        downloads: "35K+",
        description: "Skin Enderman dengan style modern dan efek purple glow yang keren.",
        tags: ["Mob", "Cool", "Glow"],
        rating: 4.7,
        reviews: 620,
        downloadLink: "https://mcpedl.com/enderman-cool",
        fileSize: "256 KB",
        screenshots: ["👾", "💜", "✨", "🌟"],
        features: [
            "Ultra HD 128x128",
            "Purple Glow Effects",
            "Animated Eyes",
            "Particle Effects Ready",
            "Unique Design",
            "Mobile Optimized"
        ],
        installation: [
            "Download skin file",
            "Open Minecraft",
            "Go to Profile",
            "Edit Character",
            "Select 'Owned'",
            "Import Downloaded Skin",
            "Apply and Enjoy!"
        ]
    },
    {
        id: 3,
        name: "Ninja Warrior",
        icon: "🥷",
        type: "Character",
        resolution: "64x64",
        downloads: "42K+",
        description: "Skin ninja hitam dengan armor dan senjata detail untuk PvP players.",
        tags: ["PvP", "Ninja", "Cool"],
        rating: 4.8,
        reviews: 790,
        downloadLink: "https://mcpedl.com/ninja-warrior",
        fileSize: "180 KB",
        screenshots: ["🥷", "⚔️", "🗡️", "💨"],
        features: [
            "HD Quality",
            "Detailed Armor",
            "Weapon Details",
            "Stealth Design",
            "PvP Focused",
            "Dark Theme"
        ],
        installation: [
            "Download file ninja.png",
            "Launch Minecraft Bedrock",
            "Click Profile",
            "Edit Character",
            "Choose New Skin",
            "Select downloaded file",
            "Confirm to apply"
        ]
    },
    {
        id: 4,
        name: "Dragon Knight",
        icon: "🐉",
        type: "Fantasy",
        resolution: "128x128",
        downloads: "38K+",
        description: "Knight dengan armor naga dan efek api, cocok untuk RPG servers.",
        tags: ["Fantasy", "Knight", "HD"],
        rating: 4.9,
        reviews: 920,
        downloadLink: "https://mcpedl.com/dragon-knight",
        fileSize: "310 KB",
        screenshots: ["🐉", "🔥", "⚔️", "🛡️"],
        features: [
            "Ultra HD 128x128",
            "Dragon Scale Armor",
            "Fire Effects",
            "Detailed Cape",
            "RPG Style",
            "Epic Design"
        ],
        installation: [
            "Download Dragon Knight skin",
            "Open Minecraft",
            "Profile Menu",
            "Edit Character",
            "Classic Skins",
            "Import New Skin",
            "Apply"
        ]
    },
    {
        id: 5,
        name: "Cyber Girl",
        icon: "🤖",
        type: "Futuristic",
        resolution: "64x64",
        downloads: "31K+",
        description: "Skin futuristik dengan neon lights dan tech armor untuk style modern.",
        tags: ["Futuristic", "Neon", "Girl"],
        rating: 4.6,
        reviews: 580,
        downloadLink: "https://mcpedl.com/cyber-girl",
        fileSize: "195 KB",
        screenshots: ["🤖", "💎", "⚡", "🌟"],
        features: [
            "Neon Glow Effects",
            "Tech Armor Design",
            "Modern Style",
            "LED Patterns",
            "Female Character",
            "Cyberpunk Theme"
        ],
        installation: [
            "Download skin",
            "Minecraft Bedrock",
            "Profile",
            "Edit Character",
            "Choose Skin",
            "Import File",
            "Done!"
        ]
    },
    {
        id: 6,
        name: "Creeper Boy",
        icon: "💚",
        type: "Mob Hybrid",
        resolution: "64x64",
        downloads: "28K+",
        description: "Mix antara human dan creeper, unique skin untuk stand out!",
        tags: ["Unique", "Creeper", "Hybrid"],
        rating: 4.4,
        reviews: 490,
        downloadLink: "https://mcpedl.com/creeper-boy",
        fileSize: "140 KB",
        screenshots: ["💚", "💥", "😈", "🌿"],
        features: [
            "Human-Creeper Hybrid",
            "Green Texture",
            "Unique Design",
            "Fun Style",
            "Stand Out",
            "Easy to Recognize"
        ],
        installation: [
            "Download file",
            "Open Game",
            "Profile Settings",
            "Edit Skin",
            "Import",
            "Apply"
        ]
    }
];

const resourcePacks = [
    {
        id: 1,
        name: "Faithful 32x",
        icon: "📦",
        resolution: "32x32",
        version: "1.20+",
        size: "15 MB",
        downloads: "2M+",
        description: "Texture pack yang mempertahankan style vanilla tapi lebih HD dan detail.",
        tags: ["Vanilla+", "HD", "Popular"],
        rating: 4.9,
        reviews: 5200,
        downloadLink: "https://faithfulpack.net/download",
        screenshots: ["📦", "🏔️", "🌲", "🏠"],
        features: [
            "32x32 Resolution",
            "Vanilla Style Enhanced",
            "All Blocks Covered",
            "Performance Friendly",
            "Regular Updates",
            "Community Support"
        ],
        installation: [
            "Download Faithful32x.mcpack",
            "Tap file untuk auto-import",
            "Atau copy ke: games/com.mojang/resource_packs/",
            "Buka Minecraft",
            "Settings → Global Resources",
            "Activate Faithful 32x",
            "Restart game untuk apply"
        ]
    },
    {
        id: 2,
        name: "Mizuno's 16 CIT",
        icon: "🎨",
        resolution: "16x16",
        version: "1.20+",
        size: "8 MB",
        downloads: "800K+",
        description: "Texture realistik dengan detail luar biasa, perfect untuk builders.",
        tags: ["Realistic", "Detailed", "Builder"],
        rating: 4.8,
        reviews: 3100,
        downloadLink: "https://mizunomcmemo.blogspot.com",
        screenshots: ["🎨", "🏰", "🌄", "🌊"],
        features: [
            "16x16 Detailed",
            "Realistic Textures",
            "Connected Textures",
            "Custom Models",
            "Builder Friendly",
            "Japanese Style"
        ],
        installation: [
            "Download .mcpack file",
            "Click to install",
            "Or manual: resource_packs folder",
            "Launch Minecraft",
            "Settings → Resource Packs",
            "Enable Mizuno's",
            "Apply Changes"
        ]
    },
    {
        id: 3,
        name: "PureBDcraft",
        icon: "🖌️",
        resolution: "64x64",
        version: "1.20+",
        size: "45 MB",
        downloads: "1.5M+",
        description: "Style kartun unik dengan warna-warna vibrant dan texture lucu.",
        tags: ["Cartoon", "Vibrant", "Unique"],
        rating: 4.7,
        reviews: 4300,
        downloadLink: "https://bdcraft.net/downloads",
        screenshots: ["🖌️", "🎪", "🌈", "🎭"],
        features: [
            "Comic/Cartoon Style",
            "Vibrant Colors",
            "Unique Art",
            "64x Resolution",
            "Complete Coverage",
            "Fun Atmosphere"
        ],
        installation: [
            "Download PureBDcraft pack",
            "Import to Minecraft",
            "Move to resource_packs",
            "Open Minecraft Settings",
            "Activate Resource Pack",
            "Restart if needed"
        ]
    },
    {
        id: 4,
        name: "Flows HD",
        icon: "💎",
        resolution: "128x128",
        version: "1.20+",
        size: "80 MB",
        downloads: "600K+",
        description: "Ultra HD realistic texture dengan shader-ready materials.",
        tags: ["Ultra HD", "Realistic", "Shader"],
        rating: 4.8,
        reviews: 2800,
        downloadLink: "https://resourcepack.net/flows-hd",
        screenshots: ["💎", "🏔️", "🌅", "💧"],
        features: [
            "128x128 Ultra HD",
            "PBR Textures",
            "Shader Compatible",
            "Realistic Materials",
            "High Performance",
            "Premium Quality"
        ],
        installation: [
            "Download Flows HD",
            "Extract if zipped",
            "Import to Minecraft",
            "Settings → Resource Packs",
            "Activate Flows HD",
            "Note: Requires good device"
        ]
    }
];

const mods = [
    {
        id: 1,
        name: "Too Many Items",
        icon: "🔧",
        type: "Utility",
        version: "1.20+",
        size: "2 MB",
        downloads: "5M+",
        description: "Inventory editor yang memudahkan creative mode dan testing builds.",
        tags: ["Utility", "Creative", "Essential"],
        rating: 4.7,
        reviews: 8900,
        downloadLink: "https://mcpedl.com/too-many-items",
        screenshots: ["🔧", "📦", "🎮", "⚙️"],
        features: [
            "Item Spawner",
            "Creative Tools",
            "Quick Access",
            "Search Function",
            "Favorites System",
            "Easy to Use"
        ],
        installation: [
            "Download .mcaddon file",
            "Tap to install automatically",
            "Or: Import via Settings",
            "Create new world",
            "Behavior Packs → Activate TMI",
            "Resource Packs → Activate TMI",
            "Start world with cheats ON"
        ]
    },
    {
        id: 2,
        name: "Lucky Block",
        icon: "🎰",
        type: "Fun",
        version: "1.20+",
        size: "5 MB",
        downloads: "4M+",
        description: "Block berisi random rewards atau traps, sangat fun untuk survival!",
        tags: ["Fun", "Random", "Popular"],
        rating: 4.8,
        reviews: 7200,
        downloadLink: "https://mcpedl.com/lucky-block-addon",
        screenshots: ["🎰", "💎", "💣", "🎁"],
        features: [
            "Random Drops",
            "100+ Possibilities",
            "Custom Crafting",
            "Multiplayer Compatible",
            "Configurable",
            "Regular Updates"
        ],
        installation: [
            "Download Lucky Block addon",
            "Import to Minecraft",
            "Create World",
            "Add Behavior Pack",
            "Add Resource Pack",
            "Enable Experiments",
            "Craft with Gold Ingots"
        ]
    },
    {
        id: 3,
        name: "Pixelmon",
        icon: "⚡",
        type: "Adventure",
        version: "1.20+",
        size: "50 MB",
        downloads: "10M+",
        description: "Pokemon di Minecraft! Catch, battle, dan train 800+ Pokemon.",
        tags: ["Pokemon", "Adventure", "Popular"],
        rating: 4.9,
        reviews: 15000,
        downloadLink: "https://mcpedl.com/pixelmon-addon",
        screenshots: ["⚡", "🔥", "💧", "🌿"],
        features: [
            "800+ Pokemon",
            "Battle System",
            "Catch Mechanics",
            "Evolution",
            "Trading",
            "Gyms & Badges"
        ],
        installation: [
            "Download Pixelmon addon",
            "Import both packs",
            "Create new world",
            "Enable Behavior Pack",
            "Enable Resource Pack",
            "Turn ON Experiments",
            "Start adventure!"
        ]
    },
    {
        id: 4,
        name: "Furniture Mod",
        icon: "🪑",
        type: "Decoration",
        version: "1.20+",
        size: "8 MB",
        downloads: "2.5M+",
        description: "Tambahkan 100+ furniture items untuk dekorasi rumah yang realistik.",
        tags: ["Decoration", "Building", "Furniture"],
        rating: 4.6,
        reviews: 4500,
        downloadLink: "https://mcpedl.com/furniture-addon",
        screenshots: ["🪑", "🛋️", "🚪", "💡"],
        features: [
            "100+ Furniture",
            "Functional Items",
            "Custom Crafting",
            "Realistic Design",
            "Interior Decoration",
            "Builder Essential"
        ],
        installation: [
            "Download furniture pack",
            "Import to game",
            "World Settings",
            "Add packs",
            "Enable experiments",
            "Craft furniture!"
        ]
    }
];
