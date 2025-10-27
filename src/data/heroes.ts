export type HeroRole = 'Fighter' | 'Tank' | 'Assassin' | 'Mage' | 'Marksman' | 'Support';
export type TierRank = 'S+' | 'S' | 'A' | 'B' | 'C';

export interface Hero {
  id: string;
  name: string;
  title: string;
  role: HeroRole;
  tier: TierRank;
  image: string;
  splashArt: string;
  lore: string;
  skills: {
    passive: {
      name: string;
      description: string;
      icon: string;
    };
    skill1: {
      name: string;
      description: string;
      cooldown: number;
      damageType: 'Physical' | 'Magic' | 'True';
      icon: string;
    };
    skill2: {
      name: string;
      description: string;
      cooldown: number;
      damageType: 'Physical' | 'Magic' | 'True';
      icon: string;
    };
    ultimate: {
      name: string;
      description: string;
      cooldown: number;
      damageType: 'Physical' | 'Magic' | 'True';
      icon: string;
    };
  };
}

export interface Build {
  heroId: string;
  name: string;
  type: 'Jungler' | 'EXP Lane' | 'Mid Lane' | 'Gold Lane' | 'Roam';
  items: string[];
  emblem: {
    name: string;
    talents: string[];
  };
  battleSpells: string[];
}

export const heroes: Hero[] = [
  {
    id: 'fanny',
    name: 'Fanny',
    title: 'Blade Dancer',
    role: 'Assassin',
    tier: 'S+',
    image: '/assets/fanny.mp4',
    splashArt: '/assets/fanny_bg.mp4',
    lore: 'Seorang pemburu hadiah yang menggunakan kabel baja untuk bergerak dengan kecepatan tinggi dan menebas musuh-musuhnya.',
    skills: {
      passive: {
        name: 'Air Superiority',
        description: 'Fanny regenerates 10 energy setiap kali menggunakan kabel. Damage meningkat seiring energy yang tersisa.',
        icon: '🌀'
      },
      skill1: {
        name: 'Tornado Strike',
        description: 'Fanny melempar pedang yang berputar, memberikan Physical Damage dan memperlambat musuh.',
        cooldown: 8,
        damageType: 'Physical',
        icon: '⚔️'
      },
      skill2: {
        name: 'Steel Cable',
        description: 'Fanny menembakkan kabel ke arah yang ditentukan untuk meluncur dengan cepat.',
        cooldown: 0.2,
        damageType: 'Physical',
        icon: '🪝'
      },
      ultimate: {
        name: 'Cut Throat',
        description: 'Fanny melakukan serangan cepat dengan damage besar pada target. Cooldown reset jika membunuh hero.',
        cooldown: 35,
        damageType: 'Physical',
        icon: '💀'
      }
    }
  },
  {
    id: 'gusion',
    name: 'Gusion',
    title: 'Holy Blade',
    role: 'Assassin',
    tier: 'S',
    image: '/assets/gusion.mp4',
    splashArt: '/assets/gusion_bg.mp4',
    lore: 'Putra dari keluarga Paxley yang memberontak dan menguasai seni pedang ajaib untuk melawan takdir.',
    skills: {
      passive: {
        name: 'Dagger Specialist',
        description: 'Setiap kali Gusion menggunakan skill, Basic Attack berikutnya memberikan Magic Damage tambahan.',
        icon: '🗡️'
      },
      skill1: {
        name: 'Sword Spike',
        description: 'Gusion melempar 5 belati ke arah yang ditentukan, memberikan Magic Damage.',
        cooldown: 6,
        damageType: 'Magic',
        icon: '🔪'
      },
      skill2: {
        name: 'Shadowblade Slaughter',
        description: 'Gusion melakukan dash ke arah target dan memanggil kembali belati, memberikan damage.',
        cooldown: 12,
        damageType: 'Magic',
        icon: '⚡'
      },
      ultimate: {
        name: 'Incandescence',
        description: 'Gusion mengombinasikan semua belatinya untuk serangan area dengan damage besar.',
        cooldown: 40,
        damageType: 'Magic',
        icon: '💥'
      }
    }
  },
  {
    id: 'kagura',
    name: 'Kagura',
    title: 'Onmyouji Master',
    role: 'Mage',
    tier: 'S+',
    image: '/assets/kagura.mp4',
    splashArt: '/assets/kagura_bg.mp4',
    lore: 'Master Onmyouji yang mengendalikan payung ajaib untuk melindungi dan menyerang musuh.',
    skills: {
      passive: {
        name: 'Yin Yang Gathering',
        description: 'Setiap kali skill mengenai musuh, Kagura mendapat shield dan movement speed.',
        icon: '☯️'
      },
      skill1: {
        name: 'Seimei Umbrella Open',
        description: 'Kagura melempar payung yang memberikan Magic Damage dan memperlambat musuh.',
        cooldown: 7,
        damageType: 'Magic',
        icon: '☂️'
      },
      skill2: {
        name: 'Rasho Umbrella Flee',
        description: 'Kagura berpindah ke lokasi payung atau melakukan dash jika payung ada di tangan.',
        cooldown: 2,
        damageType: 'Magic',
        icon: '💨'
      },
      ultimate: {
        name: 'Yin Yang Overturn',
        description: 'Kagura menarik semua musuh di area payung ke tengah dan memberikan massive damage.',
        cooldown: 45,
        damageType: 'Magic',
        icon: '🌸'
      }
    }
  },
  {
    id: 'chou',
    name: 'Chou',
    title: 'Kung Fu Boy',
    role: 'Fighter',
    tier: 'S',
    image: '/assets/chou.mp4',
    splashArt: '/assets/chou_bg.mp4',
    lore: 'Master bela diri yang menggunakan teknik kung fu legendaris untuk mengalahkan musuh.',
    skills: {
      passive: {
        name: 'Only Fast',
        description: 'Setiap 2 skill yang digunakan, skill berikutnya tidak bisa di-interrupt dan memberikan damage bonus.',
        icon: '👊'
      },
      skill1: {
        name: 'Jeet Kune Do',
        description: 'Chou melakukan 3 pukulan berturut-turut, pukulan terakhir knock-up musuh.',
        cooldown: 9,
        damageType: 'Physical',
        icon: '🥊'
      },
      skill2: {
        name: 'Shunpo',
        description: 'Chou melakukan dash ke arah yang ditentukan dan memberikan shield.',
        cooldown: 10,
        damageType: 'Physical',
        icon: '🛡️'
      },
      ultimate: {
        name: 'The Way of Dragon',
        description: 'Chou menendang musuh, memberikan knockback jauh dan damage besar.',
        cooldown: 38,
        damageType: 'Physical',
        icon: '🐉'
      }
    }
  },
  {
    id: 'khufra',
    name: 'Khufra',
    title: 'Desert Tyrant',
    role: 'Tank',
    tier: 'A',
    image: '/assets/khufra.mp4',
    splashArt: '/assets/khufra.mp4',
    lore: 'Tiran gurun kuno yang bangkit dari tidurnya untuk menguasai Land of Dawn.',
    skills: {
      passive: {
        name: 'Spell Curse',
        description: 'Damage Khufra meningkat berdasarkan max HP. Musuh yang terkena CC tidak bisa dash.',
        icon: '⛓️'
      },
      skill1: {
        name: 'Tyrant Revenge',
        description: 'Khufra menggelinding dengan cepat, memberikan damage dan knock-up saat menabrak musuh.',
        cooldown: 12,
        damageType: 'Magic',
        icon: '🏐'
      },
      skill2: {
        name: 'Bouncing Ball',
        description: 'Khufra melompat dan menekan area, knock-up musuh dan mengganggu dash.',
        cooldown: 9,
        damageType: 'Magic',
        icon: '🎯'
      },
      ultimate: {
        name: 'Tyrant Rage',
        description: 'Khufra menarik semua musuh di sekitar dan menghempaskan mereka ke tanah.',
        cooldown: 42,
        damageType: 'Magic',
        icon: '💢'
      }
    }
  },
  {
    id: 'claude',
    name: 'Claude',
    title: 'Plunderous Trickster',
    role: 'Marksman',
    tier: 'A',
    image: '/assets/claude.mp4',
    splashArt: '/assets/claude_bg.mp4',
    lore: 'Pencuri yang menggunakan teknologi tinggi dan monyet ajaibnya untuk mengalahkan musuh.',
    skills: {
      passive: {
        name: 'Battle Side-by-Side',
        description: 'Claude dan Dexter menyerang secara bersamaan. Attack speed Claude bertambah setiap level.',
        icon: '🐵'
      },
      skill1: {
        name: 'Art of Thievery',
        description: 'Claude mencuri shield musuh dan meningkatkan attack speed sementara.',
        cooldown: 8,
        damageType: 'Physical',
        icon: '💰'
      },
      skill2: {
        name: 'Battle Mirror Image',
        description: 'Claude dan Dexter bertukar posisi, memberikan immunity singkat.',
        cooldown: 16,
        damageType: 'Physical',
        icon: '✨'
      },
      ultimate: {
        name: 'Blazing Duet',
        description: 'Claude menembak dengan kecepatan tinggi ke segala arah, memberikan massive damage.',
        cooldown: 40,
        damageType: 'Physical',
        icon: '🔥'
      }
    }
  },
  {
    id: 'estes',
    name: 'Estes',
    title: 'Moon Elf King',
    role: 'Support',
    tier: 'B',
    image: '/assets/estes.mp4',
    splashArt: '/assets/estes_bg.mp4',
    lore: 'Raja Elf yang menggunakan kekuatan bulan untuk menyembuhkan dan melindungi sekutunya.',
    skills: {
      passive: {
        name: 'Moonlight Immersion',
        description: 'Estes regenerates HP dari skill yang mengenai hero. Regeneration meningkat di malam hari.',
        icon: '🌙'
      },
      skill1: {
        name: 'Moonlight Immersion',
        description: 'Estes memanggil hujan cahaya bulan yang menyembuhkan sekutu di area.',
        cooldown: 4.5,
        damageType: 'Magic',
        icon: '💫'
      },
      skill2: {
        name: 'Domain of Moon Goddess',
        description: 'Estes menciptakan area yang memperlambat musuh dan menyembuhkan sekutu.',
        cooldown: 11,
        damageType: 'Magic',
        icon: '🔮'
      },
      ultimate: {
        name: 'Blessing of Moon Goddess',
        description: 'Estes menyembuhkan semua sekutu secara terus menerus untuk durasi tertentu.',
        cooldown: 50,
        damageType: 'Magic',
        icon: '✨'
      }
    }
  },
  {
    id: 'valir',
    name: 'Valir',
    title: 'Son of Flames',
    role: 'Mage',
    tier: 'S',
    image: '/assets/valir.mp4',
    splashArt: '/assets/valir_bg.mp4',
    lore: 'Putra api yang mengendalikan kekuatan flame untuk melindungi kerajaan dari musuh.',
    skills: {
      passive: {
        name: 'Ashing',
        description: 'Skill Valir memberikan Ashing stack pada musuh. Saat mencapai 4 stack, musuh menerima damage tambahan.',
        icon: '🔥'
      },
      skill1: {
        name: 'Burst Fireball',
        description: 'Valir menembakkan bola api yang memberikan damage dan knockback.',
        cooldown: 6,
        damageType: 'Magic',
        icon: '⚽'
      },
      skill2: {
        name: 'Searing Torrent',
        description: 'Valir memanggil aliran api yang memberikan continuous damage.',
        cooldown: 8.5,
        damageType: 'Magic',
        icon: '🌊'
      },
      ultimate: {
        name: 'Vengeance Flame',
        description: 'Valir melepaskan ledakan api besar yang memberikan massive damage dan knockback.',
        cooldown: 44,
        damageType: 'Magic',
        icon: '💥'
      }
    }
  },
  {
    id: 'yu-zhong',
    name: 'Yu Zhong',
    title: 'Black Dragon',
    role: 'Fighter',
    tier: 'S+',
    image: '/assets/yz.mp4',
    splashArt: '/assets/yz_bg.mp4',
    lore: 'Penerus darah naga hitam yang menguasai kekuatan gelap untuk menghancurkan musuh-musuhnya. Dengan transformasi naga yang mengerikan, dia menjadi penguasa medan pertempuran.',
    skills: {
      passive: {
        name: 'Cursing Touch',
        description: 'Skill Yu Zhong memberikan stack Sha Residu. Saat mencapai 5 stack, musuh menerima damage berkelanjutan dan Yu Zhong mendapat heal.',
        icon: '🐉'
      },
      skill1: {
        name: 'Dragon Tail',
        description: 'Yu Zhong mengayunkan ekor naga ke area berbentuk kipas, memberikan Physical Damage dan slow.',
        cooldown: 7,
        damageType: 'Physical',
        icon: '💥'
      },
      skill2: {
        name: 'Soul Grip',
        description: 'Yu Zhong menangkap musuh dengan cakar naga, menarik mereka dan memberikan damage.',
        cooldown: 10,
        damageType: 'Physical',
        icon: '👹'
      },
      ultimate: {
        name: 'Black Dragon Form',
        description: 'Yu Zhong berubah menjadi naga hitam, mendapatkan shield besar, movement speed, dan damage area. Dapat digunakan kembali untuk dive ke lokasi target.',
        cooldown: 45,
        damageType: 'Physical',
        icon: '🌑'
      }
    }
  },
  {
    id: 'arlot',
    name: 'Arlot',
    title: 'Iron Warden',
    role: 'Fighter',
    tier: 'S+',
    image: '/assets/arlot.mp4',
    splashArt: '/assets/arlot.mp4',
    lore: 'Penjaga besi dari kerajaan kuno yang bangkit untuk melindungi Land of Dawn. Dengan armor tak tertembus dan kekuatan super, dia adalah benteng yang hidup di medan perang.',
    skills: {
      passive: {
        name: 'Iron Will',
        description: 'Setelah menerima damage tertentu, Arlot mendapatkan shield dan damage bonus untuk serangan berikutnya.',
        icon: '🛡️'
      },
      skill1: {
        name: 'Shield Bash',
        description: 'Arlot menghantam musuh dengan perisainya, memberikan Physical Damage dan stun singkat.',
        cooldown: 8,
        damageType: 'Physical',
        icon: '⚡'
      },
      skill2: {
        name: 'Ground Slam',
        description: 'Arlot menghentakkan tanah, memberikan damage area dan memperlambat musuh di sekitarnya.',
        cooldown: 9,
        damageType: 'Physical',
        icon: '🌋'
      },
      ultimate: {
        name: 'Unbreakable Fortress',
        description: 'Arlot memasuki mode bertahan, mengurangi damage yang diterima dan memberikan knockback kepada musuh di sekitar.',
        cooldown: 50,
        damageType: 'Physical',
        icon: '🏰'
      }
    }
  },
  {
    id: 'kalea',
    name: 'Kalea',
    title: 'Mountain Guardian',
    role: 'Tank',
    tier: 'S',
    image: '/assets/kalea_bg.mp4',
    splashArt: '/assets/kalea_bg.mp4',
    lore: 'Penjaga gunung suci yang memiliki kekuatan bumi dan batu. Dengan tubuhnya yang kokoh bagai batu karang, dia melindungi sekutunya dari segala ancaman.',
    skills: {
      passive: {
        name: 'Stone Skin',
        description: 'Kalea mendapatkan armor dan magic resistance tambahan berdasarkan max HP. Saat HP rendah, regenerasi meningkat.',
        icon: '🪨'
      },
      skill1: {
        name: 'Boulder Toss',
        description: 'Kalea melempar boulder besar ke area target, memberikan Magic Damage dan stun.',
        cooldown: 11,
        damageType: 'Magic',
        icon: '🗿'
      },
      skill2: {
        name: 'Earth Barrier',
        description: 'Kalea menciptakan tembok batu yang memblokir pergerakan musuh dan memberikan shield kepada sekutu di belakangnya.',
        cooldown: 14,
        damageType: 'Magic',
        icon: '🧱'
      },
      ultimate: {
        name: 'Mountain Crash',
        description: 'Kalea melompat ke lokasi target, memberikan massive Magic Damage dan knock-up kepada musuh di area impact.',
        cooldown: 55,
        damageType: 'Magic',
        icon: '⛰️'
      }
    }
  },
  {
    id: 'angela',
    name: 'Angela',
    title: 'Loving Caretaker',
    role: 'Support',
    tier: 'A',
    image: '/assets/angela.mp4',
    splashArt: '/assets/angela_bg.mp4',
    lore: 'Perawat ajaib yang menggunakan kekuatan cinta dan kasih sayang untuk menyembuhkan sekutunya. Dengan boneka beruangnya yang ajaib, dia selalu siap membantu teman-temannya di medan pertempuran.',
    skills: {
      passive: {
        name: 'Smart Heart',
        description: 'Skill penyembuhan Angela memberikan bonus movement speed kepada dirinya dan target. Healing effectiveness meningkat berdasarkan bonus magic power.',
        icon: '💖'
      },
      skill1: {
        name: 'Love Waves',
        description: 'Angela mengirimkan gelombang cinta yang memberikan Magic Damage kepada musuh dan menyembuhkan sekutu di jalurnya.',
        cooldown: 6,
        damageType: 'Magic',
        icon: '🌊'
      },
      skill2: {
        name: 'Puppet-on-a-String',
        description: 'Angela melemparkan boneka beruangnya yang memberikan Magic Damage dan menjerat musuh pertama yang terkena.',
        cooldown: 12,
        damageType: 'Magic',
        icon: '🧸'
      },
      ultimate: {
        name: 'Heart Guardian',
        description: 'Angela menyatu dengan hero sekutu target, memberikan shield besar dan meningkatkan stats mereka. Selama bergabung, Angela dapat menggunakan skill dari dalam hero sekutu.',
        cooldown: 60,
        damageType: 'Magic',
        icon: '✨'
      }
    }
  }
];

export const builds: Build[] = [
  {
    heroId: 'fanny',
    name: 'Full Damage Jungler',
    type: 'Jungler',
    items: ['Raptor Machete', 'Tough Boots', 'Blade of Heptaseas', 'Endless Battle', 'Malefic Roar', 'Blade of Despair'],
    emblem: {
      name: 'Assassin Emblem',
      talents: ['Agility', 'Invasion', 'Killing Spree']
    },
    battleSpells: ['Retribution', 'Execute']
  },
  {
    heroId: 'gusion',
    name: 'Burst Assassin',
    type: 'Jungler',
    items: ['Star Shard', 'Arcane Boots', 'Calamity Reaper', 'Holy Crystal', 'Divine Glaive', 'Blood Wings'],
    emblem: {
      name: 'Mage Emblem',
      talents: ['Agility', 'Observation', 'Magic Worship']
    },
    battleSpells: ['Retribution', 'Flicker']
  },
  {
    heroId: 'kagura',
    name: 'Magic Burst',
    type: 'Mid Lane',
    items: ['Ice Queen Wand', 'Arcane Boots', 'Lightning Truncheon', 'Holy Crystal', 'Divine Glaive', 'Blood Wings'],
    emblem: {
      name: 'Mage Emblem',
      talents: ['Agility', 'Observation', 'Impure Rage']
    },
    battleSpells: ['Flicker', 'Purify']
  },
  {
    heroId: 'chou',
    name: 'Fighter EXP',
    type: 'EXP Lane',
    items: ['Warrior Boots', 'Endless Battle', 'Thunder Belt', 'Oracle', 'Blade of Despair', 'Immortality'],
    emblem: {
      name: 'Fighter Emblem',
      talents: ['Bravery', 'Firmness', 'Festival of Blood']
    },
    battleSpells: ['Flicker', 'Sprint']
  }
];
