var nameman = ["Adair","Adnan","Aiden","Alaric","Aldrin","Alton","Amit","Angelo","Anton","Arlo","Ashby","Ashwin","Audwin","Aven","Barack","Benjy","Bently","Bill","Blain","Bobby","Brax","Brent","Brie","Broden","Bruno","Buddy","Butch","Caiden","Caleb","Cane","Casper","Cavan","Chance","Chevy","Claude","Cole","Colt","Conrad","Cormac","Cyril","Damion","Daniel","Dariel","Darrel","Dave","Deacon","Deklan","Derek","Devlin","Digby","Donnie","Dougie","Duncan","Dylan","Eden","Egon","Elijah","Elroy","Elwyn","Emory","Errol","Ethen","Ezio","Faisal","Fidel","Frank","Fritz","Galen","Garry","Gerald","Glynn","Grady","Grey","Gunner","Hans","Henley","Herman","Hubert","Hugh","Ieuan","Ishaan","Ivan","Jaden","Jaiden","Jared","Javon","Jayden","Jeff","Jerald","Jethro","Johann","Jonas","Josh","Josue","Julio","Karl","Kason","Keanu","Keenan","Kenan","Kieran","Kirk","Konnor","Kurt","Kyran","Landyn","Laurie","Leigh","Lennie","Lester","Linley","Logan","Louis","Lucian","Lyndon","Marcel","Marik","Martyn","Mathew","Merick","Miller","Mitch","Moses","Mylo","Neel","Nigel","Nils","Nyle","Oberon","Oran","Pablo","Paolo","Percy","Peter","Prince","Randal","Rashan","Reed","Rehan","Rhett","Ridley","River","Rock","Rodney","Ronnie","Rupert","Ryder","Salman","Samuel","Scotty","Sidney","Skylar","Stan","Stevie","Tadhg","Tevin","Thom","Tobias","Tomas","Tracy","Tyler","Tyrone","Vasco","Vidal","Vivian","Weston","Willam","Wyatt","Yahir","Zack","Zeth","Zoltan","Zylen"];

var namewoman = ["Abia","Adalyn","Aerona","Alaina","Alayah","Alecia","Alisha","Alize","Alycia","Amber","Amily","Anahi","Anissa","Anthea","Anya","Arya","Ashley","Astra","Avia","Ayla","Becca","Betsy","Blake","Bobbie","Briana","Brie","Briony","Bryony","Callie","Candis","Carter","Cate","Cayla","Chanel","Cheri","Chole","Clary","Clover","Corey","Dana","Danika","Darcy","Debora","Deidre","Delany","Dianna","Dinah","Doreen","Dympna","Edie","Eilish","Elin","Eliza","Ellie","Elvina","Emelia","Emery","Erika","Estee","Evelin","Fatima","Fiora","Frida","Gert","Gina","Gladys","Halley","Harper","Hayley","Hilary","Honey","Ilene","Ines","Iris","Ivana","Jaiden","Jana","Jania","Jazlyn","Jena","Jenny","Joann","Jojo","Jordan","Kacey","Kalin","Kamryn","Karyn","Katia","Kayden","Keira","Kelly","Kenzie","Kiki","Kira","Kloe","Kylee","Lacy","Lana","Layla","Leda","Leila","Lesly","Lexie","Liara","Lily","Livia","Lola","Lorri","Louise","Lucy","Mabel","Maddy","Maire","Malory","Marcia","Mariam","Martha","Maura","Meera","Mina","Missie","Monika","Nadine","Naomi","Nelly","Nicki","Niki","Nishka","Nyla","Odalys","Olive","Paloma","Patty","Peony","Portia","Rabia","Ramsha","Regan","Renae","Rhian","River","Ronda","Rose","Ruby","Sabine","Sage","Sandra","Sascha","Senuri","Shawn","Sheena","Sheri","Sierra","Skylar","Sofie","Stacia","Steph","Sutton","Tamera","Tammy","Tanya","Tayler","Terri","Thea","Tora","Tricia","Trixie","Vickie","Vivian","Wendi","Xena","Yanna","Yula","Zandra","Zelida","Zita","Zyana"];

var mod = ["All perks","Selected perks"];

// Название, описание, сумма
var stats = {   
	STR: ["Strength","Affects: Str*2 start hitpoints, Carryweight, Melee damage.",0],
	PER: ["Perception","Affects: Field of View, Accuracy, (Aimed) Hit Chance, Sequence (sneak).",0],
	ENU: ["Endurance","Affects: Starting Hit Points, Hit Points per Level, Radiation and Poison Resistance, Healing Rate.",0],
	CHA: ["Charisma","Affects: Amount of people that can follow you, Prices, Dialogue options, Evasion (each Cha points - 1% Evasion).",0],
	INT: ["Intelligence","Affects: Skillpoints per Level (+2 for each Int point), Dialogue options.",0],
	AGI: ["Agility","Affects: Base AP points, Base Armor Class.",0],
	LUC: ["Luck","First Aid formula, Crit Chance, Critical Hit Damage, Critical Miss Chance and Strength, Special Encounter chance.",0]
};

// навык, кр.название, название, описание
var skills = {		
	light: 	[0,"light","Small Guns","The use, care and general knowledge of small firearms - pistols, SMGs and rifles."],
	heavy: 	[0,"heavy","Big Guns","The operation and maintenance of really big guns - miniguns, rocket launchers, flamethrowers and such."],
	energy:	[0,"energy","Energy Weapons","The care and feeding of energy-based weapons. How to arm and operate weapons that use laser or plasma technology."],
	melee: 	[0,"unarmed","Unarmed","A combination of martial arts, boxing and other hand-to-hand martial arts. Usage of fist-handled weaponry."],
	steel: 	[0,"melee","Melee Weapons","The  usage of non-ranged melee weapons such as knives, sledgehammers, spears, clubs and so on."],
	thrown: [0,"throwing","Throwing","The skill of muscle-propelled ranged weapons, such as throwing knives, spears and grenades."],
	orderly:[0,"fa","First Aid","General healing skill. FA formula is following: Heal Amount = Minimal is Skill/6+Luck*Skill/12, maximum is Skill value."],
	doctor: [0,"doc","Doctor","The healing of major wounds and crippled limbs. Also works for stopping bleed."],
	sneak: 	[0,"sneak","Sneak","Quiet movement, and the ability to remain unnoticed. If successful, you will be much harder to locate. You cannot run and sneak at the same time without perk."],
	hack: 	[0,"lock","Lockpick","Skill wich helps the door to serve it's true purpose - removing locks from it without keys. Art of lockpicks and electronic lockpicks usage."],
	steal: 	[0,"thief","Pickpocket","Your ability to make someone else's things yours without permission. Not bad for a thief career."],
	traps: 	[0,"traps","Traps","The skill of finding, arming and disarming various types of traps."],
	science:[0,"science","Science","Physics, chemistry and biology. Knowledge of computer systems and so, and so."],
	repair: [0,"repair","Repair","The application of scientific principles and practical knowledge in order to build and maintain various machines, weapons and devices."],
	oratory:[0,"speech","Speech","The ability to communicate in a practical and efficient manner. The skill of convincing others that your position is correct."],
	trade: 	[0,"trade","Trade","Trading and trade-related skills. Increasing your Trade Experience, skill will progress as well."],
	speed: 	[0,"athlet","Athleticism","Ability to move faster while walking and running."],
	ranger: [0,"outdoors","Outdoorsman","Practical knowledge of the outdoors, and the ability to live off the land. The knowledge of plants and animals."]
};

var textbook = {
	light: "Small Guns",
	energy: "Energy Weapons",
	orderly: "First Aid",
	science: "Science",
	repair: "Repair",
	ranger: "Outdoorsman",
	prewar: "Lavender"
};
// параметр, название, описние
var feat = { 
    acrit:  [0,"antricrit",""],
	dodge:	[0,"evasion",""],
	live: 	[0,"hp",""],
	armc: 	[0,"armor class",""],
	apoi: 	[0,"AP",""],
	maxl: 	[0,"max carry",""],
	mdmg: 	[0,"melee damage",""],
	oview: 	[0,"field of view",""],
	stox: 	[0,"res to pois",""],
	srad: 	[0,"res to rad",""],
	proc: 	[0,"sequence",""],
	levh: 	[0,"heal rate",""],
	crit: 	[0,"crit chance",""]
};
// Резисты
var resist = {
	normal:		["Normal",""],
	laser:		["Lazer",""],
	fire:		["Fire",""],
	plasma:		["Plasma",""],
	explode:	["Explosion",""],
	electro:	["Electro",""]
};

var statlvl = ["Error","V. Bad", "Bad","Poor","Fair","Avrg","Good","V.Good","Great","Exl.","Heroic"];
var sextext = {	men: "Man.", women: "Wom."};

var anytext = {
	training: "Character leveling",
	msgerror: "Special points is not allocated or not 3 skills tagged!",
	perks: "Perks: ",
	lvl: "Level ",
	lvl2: " level:",
	lvl3: " lvl:",
	dop: "Additional",
	bonus: "Bonuses",
	quest: "Quests",
	treb: "Requirement:",
	net: "no",
	traits: "Traits: ",
	nav: "Skills: ",
	procnav: "Learned skills:",
	imp: "Implants:",
	book: "Books:",
	nosave: "Saves is temporarily not working.",
}

var questinfo = {
    imp_battle: ["+30% to Small Guns, +3 to final accuracy.","+30% to Big Guns, +3 to final accuracy.","+30% to Energy Weapons, +3 to final accuracy.","+30% to Throwing, +3 to Evasion.","+30% to Repair, +2 to ending damage.","+20% to melee weapons, +20% to unarmed, -3 seconds combat timer."],
    imp_medical: ["+35% to FA, +40 to friendly heal.","(-2) sec FA cd, +25% doc.","+20 hp, +10 to healing rate.","+40% doc, immune to Bleed.","+40 HP when using FA on self, +5 AC.","+5 hp per superstim on self, +30% doc."],
    imp_auxiliary: ["+100kg carryweight.","+25% to worldmap movespeed.","+100% to Traps.","Replicanto perk, +50% to Speech.","+100% to Pickpocket, +20% to Lockpick.","+50 to Athleticism."], 
    drayfild: ["All combat +5%","Unarmed +10%","Melee Weapons +10%","Small Guns +10%","Big Guns +10%","Energy Weapons +10%","First Aid and Doctor +5%"],
    per_ncr: ["+4% to crit","+4% to anticrit"]
}

var texttraits = {
	TRAIT_FAST_METABOLISM: ["Fast Metabolism", "You receive +40 hp, +35 to Healing Rate. On the contrary, you're very vulnerable to poison and radiation."],
	TRAIT_BRUISER: ["Bruiser", "-1 maximum AP, but +3 Str. You receive half less plasma tick damage."],
	TRAIT_SMALL_FRAME: ["Small Frame", "You receive +1 Agi and +5% to Evasion, but Carryweight is reduced."],
	TRAIT_ONE_HANDER: ["One Handed", "For all onehanded weapons: ignorance of Str requirement, +60 to a Skill on accuracy check, +7 to flat damage. Two-handed receive -40 to skill on accuracy."],
	TRAIT_FINESSE: ["Finesse", "+20% to critical chance. -10 to critroll against you. But, -5% to a total damage."],
	TRAIT_KAMIKAZE: ["Kamikaze", "+1 Agi, each 10 seconds you restore 1 AP. If you're not in combat, your 1st attack will cost 2 AP less. Gives immunity to Suppression. AC decreased by 10."],
	TRAIT_HEAVY_HANDED: ["Heavy Handed", "You deal devastating damage to people in melee - +25 to melee damage, but crits is really bad (-30 to critroll)."],
	TRAIT_FAST_SHOT: ["Fast Shot", "You don't have much time to aim. Shooting and throwing costs 1 AP less. You can't aim. Your critical damage is always 1x."],
	TRAIT_BLOODY_MESS: ["Maniac", "+175% to Athleticism, but -25 hitpoints. Enemies always die in most harsh way."],
	TRAIT_JINXED: ["Jinxed", "A good side of it - enemy are making critical misses more often. Bad side is - same applies to you! You need Luck to be effective."],
	TRAIT_GOOD_NATURED: ["Goodheart", "-25% damage from bursts or fire. You can't take any offensive perk. You can't apply DoT effects."],
	TRAIT_CHEM_RELIANT: ["Chemist", "Drugs duration are increased by 3 times. Drawbacks are nearly instant. If you'll get affliction, it'll last for long time."],
	TRAIT_CHEM_RESISTANT: ["Stable", "You can't critically hit - at all, and can't critically miss - at all. All your attacks receive +25 bonus to final Accuracy calculation."],
	TRAIT_SEX_APPEAL: ["Liquid Body", "You ignore 10 flat damage, maximum Carryweight increases by 50. Superstims and First Aid are decreased by 20 (ss will become +55, -20 to ending FA heal amount)."],
	TRAIT_SKILLED: ["Skilled", "Stats of character increases - +2 to End, Cha, Int, Agi. +60 anticrit, +15 crit. But, you can't take any uberperk and you receive perks only each 4 level, not each 3."],
	TRAIT_NIGHT_PERSON: ["Impulsive", "+20% to Throwing, +2 AP и 30% chance to restore 1 AP during reload. But, you receive 3 less skillpoints each level."]
}

var textquest = {
	medals:["Medals","For each your achievement in various minitasks, you acquire these. Can be exchanged for char buffs at hubologists in San-Fran"],
	PE_NCR_REPAIR:["Secret Arts: Repair", "Modoc's mechanic shared his techniques at repairing weapons. Your Repair skill increases by 5%."],
	ranger_smile:["Outdoorsman from Smiley", "Smiley for nothing but a smile can train your Outdoorsman to 60-69%"],
	ranger_slim:["+2% outdoorsman","For 100 coins Slim from Clamath will tell fairytailes about gecko hunting."],
	melee_klam:["Unarmed +30%", "On Trapping Caves boxer from New Reno can show you few tricks."],
	hp_den:["+3 hp in Den", "If you'll ask the man in Den's Church about the church."],
	light_den:["Small Guns in Den", "Can increase your Small Guns skill from 115 to 120% for 3k coins."],
	overviewq:["+1 Field of View","You need to have good reputation in Den, then talk to father Clifford."],
	quest_arroyo:["Arroyo Quests","When doing Arroyo quests, you can get +1% trade, +5% traps and +1% outdoorsman, for 20+ rep Katrin can give you a lesson on Lockpick, giving 18 skillpoints in that skill."],
	per_ncr:["+4% anti/crit in NCR","20+ NCR reputation, and doctor there will perform surgery on your request for 50k coins."],
	cha_vc:["+1 Charisma in Vault-City", "9+ VC reputation, 81% Speech, <4 Cha, ask girl inside Vault."],
	ac_12:["+12 AC","James from New-Reno will ask you to complete numerous tasks in order to get reward."],
	ap_vc:["+1 AP (VC)","You need to complete VC Guardsman questline in order to get this reward."],
	ap_hack:["+1 AP (lockpick)","You need +200 Lockpick skill in order to start quest in Den, ask Rianna."],
	heavy_bh:["+5% BG and Melee","Markus from Broken Hills will teach you few things for a small task."],
	skill_geck:["+3% all combat in Gecko","Ask Harold, and don't forget to take 5k+ coins."],
	trade_den:["+5% barter","For completeing all James quests in Den."],
	trade_mod:["+7% barter","Becoming Modoc citizen will allow you to learn few things from mayor."],
	trade_up:["Barter before 40%","Some caravans in the Wasteland - inb4 40% for 1к coins for 1%."],
	steel_reno:["Melee Weapons +10%", "New-Reno, Mordino junior, 200 caps."],
	valerie_letter:["+10% SG and Repair", "Valery letter. Starts at May 5 up to May 31, ask Valery in Vault-City."],
	drayfild:["NeoArk","Go in, kill fuggin wasp, then use toxic spray on bettle and get teh reword. Who cares, noone reads anyway."],
	imp_battle:["Combat Implant","Combat one."],
	imp_medical:["Medical Implant","Medical one."],
	imp_auxiliary:["Utility Implant","Utility one."],
	PE_MA_SKIT:["Wasteland Dweller(5)", "+5% to Outdoorsman and 5% worldmap speed. Tracking opens from Mastery Level 3."],
	PE_MA_REM:["Master of Repairs(5)", "You receive +3% to Repair and +1% to Science with each level."],
	PE_MA_FIX:["Master of Science(5)", "You receive +3% to Science and +1% to Repair with each level."],
	PE_MA_AID:["Master of Medkit(5)", "You receive +2% to First Aid and +2% to Doctor."]
}

var dialog = {
	medals: {
		amedals: "1 skillpoint(3 medals)",
		cmedals: "+15 carryweight(5 medals)",
		bmedals: "1 hp(10 medals)",
		fmedals: "+10 skillpoints(10 medals)",
		gmedals: "+150 skillpoints(150 medals)",
	},
	drayfild: "You have 2 options - first is overall combat course, where you'll learn everything, but few. Second - specialisation on selected weaponry or field aid. Your choice?", 
	drynone: "Ehm... I'm not ready to learn yet.", 
	none: "Who cares.", 
	med: "You have ",
	med2: " medals, choose reward:",
	per_ncr: "Choose NCR quest reward:",
	imp_battle: "Choose combat implant:",
	imp_medical: "Choose medical implant:",
	imp_auxiliary: "Choose utility implant:"
}

var textperk = {
	PE_BOOKWORM: ["Regeneration", "Each 7 seconds you: restore from KO\KD, have Doctor skill check to heal cripples, you can regenerate health equal to your Healing Rate in combat. +15 to Healing Rate."],
	PE_AWARENESS: ["Awareness", "With Awareness, you are given detailed information about any critter you examine. You see their exact hit points and information about any weapon\armor they are equipped with."],
	PE_BONUS_HTH_ATTACKS: ["Fast Fists", "You have learned the secret arts of the East, or you just punch faster. In any case, your Hand-to-Hand attacks cost 1 AP less to perform."],
	PE_BONUS_HTH_DAMAGE: ["Bonus HtH Damage", "Experience in unarmed combat has given you the edge when it comes to damage.  You cause +3 points of damage with hand-to-hand and melee attacks for each level of this Perk."],
	PE_BONUS_MOVE: ["Bonus Moves", "For each instance of this perk you receive 10% chance to get 1 AP back for using stimpacks. Also you regenerate 1 AP each 10 seconds."],
	PE_BONUS_RANGED_DAMAGE: ["Bonus Ranged Damage", "Your training in urban warfare has made you more deadly in close combat. You do +5(5\Luck) points of damage with every bullet."],
	PE_BONUS_RATE_OF_FIRE: ["Bonus rate of Fire", "This Perk allows you to pull the trigger a little faster and still remain as accurate as before.  Each ranged weapon attack costs 1 AP less to perform."],
	PE_EARLIER_SEQUENCE: ["Earlier Sequence", "You are more likely to move before your opponents in combat, since your Sequence is +4 for each level of this Perk."],
	PE_FASTER_HEALING: ["Faster Healing", "With each level of this Perk, you get a +10 bonus to your Healing Rate. Superstimpacks with this perk heal for additional 15 hitpoints."],
	PE_MORE_CRITICALS: ["More Critical", "Each level of More Critical gets you an additional +8% chance to cause a critical hit."],
    PE_NIGHT_VISION: ["Immunity", "You have very high immunity to... bullets. Each shot decreases raw damage dealt to your character equal to your Strength."],
    PE_PRESENCE: ["Town-keeper", "You're in your own town, even the walls help here. You receive +4% to all Resistances."],
	PE_RAD_RESISTANCE: ["Rad Resistance", "You are better able to avoid radiation and the bad effects radiation causes.  Each level of this Perk improves your Radiation Resistance by 15%."],
	PE_TOUGHNESS: ["Toughness", "When you are tough, you take less damage. This Perk adds +10% resistance to Normal, +8% Explosion and Fire damage types. +2 to Normal DT. Can't take Durability perk."],
	PE_STRONG_BACK: ["Strong Back", "AKA Mule. You can carry an additional 100 kg of equipment. Additionally gives %35 of Athleticism skill, for faster hamstering."],
	PE_SHARPSHOOTER: ["Sharpshooter", "You have a talent for hitting things at longer distances. You get a +2 bonus to Perception to accuracy calculations, also +6 Sight Range."],
	PE_SILENT_RUNNING: ["Silent Running", "You can Sneak and run at the same time. Can't be taken with other uberperks - Sniper, Expendable, Terminator."],
	PE_SURVIVALIST: ["Survivalist", "You are a master of the outdoors. This Perk confers the ability to survive in hostile environments. You get a +25% bonus to Outdoorsman."],
	PE_MASTER_TRADER: ["Master Trader", "You have mastered one aspect of bartering. With this Perk, you get a 25% discount when purchasing items from caravans or other traders."],
	PE_EDUCATED: ["Educated", "You had really decent education in the past. You're getting +50 skillpoints to distribute."],
	PE_HEALER: ["Healer", "The healing of bodies comes easier to you with this Perk. You're receiving additional +50 hitpoints each time you use FA, also +5 to superstims."],
    PE_FORTUNE_FINDER: ["Twister", "You're getting inspired each time your enemy miss or you evade. Each successful Evasion heals you for +40 hitpoints and gives 1 AP."],
	PE_BETTER_CRITICALS: ["Better Critical", "The critical hits you cause in combat are more devastating. You gain (10+Luck)% bonus on the critical hit table, however your chances doesn't increase."],
    PE_EMPATHY: ["Deceitful", "People don't even expect you to be such a villain. Increases your raw damage at the end of calculation by +6."],
	PE_SLAYER: ["Slayer", "All melee attacks (HtH and melee weapons) - are critical (100% chance for a critical damage in close combat). Also gives anticritical - 10%."],
	PE_SNIPER: ["Sniper", "Increases your chance to score a critical hit by (Luck*3). -1 AP for aimed shot. +20 to Armor Class."],
	PE_SILENT_DEATH: ["Backstabber", "You first hit in the back while in sneak mod deals double damage. Works only with melee weapons or unarmed."],
	PE_ACTION_BOY: ["Action Boy", "Each level of Action Boy (insert Girl if you wish) gives you +2 APs."],
    PE_MENTAL_BLOCK: ["Durability", "During your journeys you developed strong and durable body. You receive +25 hitpoints and +5% to all Resistances."],
	PE_LIFEGIVER: ["Lifegiver", "You receive additional +65 hitpoints."],
	PE_DODGER: ["Dodger", "You are less likely to be hit by single shots in combat if you have this Perk. You get +2 to your Armor Class and +10% Evasion."],
	PE_SNAKEATER: ["Snakeater", "um! Tastes like chicken. For each level of this Perk, you gain +25% to your Poison Resistance."],
	PE_MR_FIXIT: ["Mr. Fixit", "For each level of this perk, you get +10% to your Repair skill, +20% to Science skills. This perk reveals amount of item's malfunctions."],
	PE_MEDIC: ["Medic", "The Medic Perk gives you a one-time bonus of +10% to the First Aid and Doctor skills."],
	PE_MASTER_THIEF: ["Master Thief", "ou gain +40% to Pickpocket and Lockpick. Steal from the rich, and give to you."],
	PE_SPEAKER: ["Speaker", "Being a Speaker means that for each instance of this perk you gain +10% to Speech."],
	PE_HEAVE_HO: ["Heave Ho!", "When calculating max distance of the throw, your Strength doesn't count (important - not accuracy, only distance). Damage of the throwing weaponry increased by 15%."],
    PE_FRIENDLY_FOE: ["Shotgun Fan", "Since childhood you was a shotgun fan! (+30% to Small Guns, +20% to Repair). +10 damage for shotguns single shot, +4 for a burst (each bullet)."],
	PE_PICKPOCKET: ["Pickpocket", "With this Perk, you ignore volume and facing modifiers when stealing from a person."],
	PE_GHOST: ["Ghost", "you move like a ghost with this Perk. Your Sneak skill is enhanced - +40% to it, also you regenerate 1 AP each 10 seconds while sneaking."],
    PE_CULT_OF_PERSONALITY: ["Excellence", "6% Resist from Laser, Plasma damage and 8% Resist from Electro damage."],
    PE_SCROUNGER: ["Field Medic", "Your knowledge of battlefield treatment is incredible. +20% to First Aid, +30% to Doctor. +3 Luck for a First Aid formula."],
	PE_EXPLORER: ["Explorer", "Harsh and tough adventures in wasteland didn't go in a vain. Your chances to find special encounter increase, also you receive +(STR*5) max hitpoints."],
    PE_FLOWER_CHILD: ["Combat Medic", "Decreases First Aid cooldown by 4 seconds. You receive (Int+Luck)*2 additional hp after FA use, also you have chances equal to (Luck*4) to restore full hp."],
	PE_PATHFINDER: ["Pathfinder", "With this Perk, your travel time on the World Map is reduced by 25%."],
	PE_ANIMAL_FRIEND: ["Lucky Move", "Dodging (with perks or enemy hitchance higher then 70%) triggers chance to fully restore all APs (Agi/2+Cha+PE)%. If it didn't, you'll receive 1 AP."],
	PE_SCOUT: ["Scout", "Increases your tracking radar range by 1 square, as well as opening black squares on WM. Increases chances for special encounter."],
	PE_MYSTERIOUS_STRANGER: ["Veteran", "After being through many battlefields, your accuracy for aimed shots is now maximum (counts as torso shots). Additionally - +35 hitpoints."],
	PE_RANGER: ["Ranger", "Outdoorsman +15%. Increased chance to evade unneeded encounters - or to find interesting (special) ones."],
	PE_QUICK_POCKETS: ["Quick Pockets", "You've got your ammunition ready and steady. You now waste 1 AP less for Reload."],
	PE_SMOOTH_TALKER: ["Barter Exp", "Your barter experience (0-300). This value can't exceed over Trade skill. To increase b-exp without skillpoints, you need to sell items to traders with higher Trade skill."],
	PE_SWIFT_LEARNER: ["Swift Learner", "You are indeed a Swift Learner with this Perk, it gives you an additional +15% bonus whenever you earn experience points."],
    PE_TAG: ["Tag!", "Your skills have improved to the point where you can pick an additional Tag Skill. Tag skills increase twice as fast."],
  	PE_MUTATE: ["Mutate!", "The radiation of the Wasteland has changed you! You receive +30 hitpoints and +60 skillpoints."],
	PE_BIVALIY: ["Hard Nut", "You're a hard nut to crack. Critroll of attackers negates with formula: (PE*3)+STR. Critical damage -(PE + Agi) / 2 value for Luck."],
	PE_RAGE: ["Push-up", "You have a good habit to keep your body fit and tight. With push-ups. You receive +5 hitpoints. Can't take Hardened."],
	PE_DEFENCE: ["Reflexes", "One of your strong side is super reflexes. -1 AP for unaimed shot. Can't be taken with Sniper or Fast Shot. Doesn't work on engineer weapons."],
	PE_ATTACK: ["Expendable", "ou're... expendable. You receive +4 AP and +10% bonus to all damage. Can't take Terminator, Action Boy, Sniper. 0% anticrit glasscanon, as it is."],
	PE_HARD: ["Hardened", "ВYour organism adapted for survival in difficult situations. Your Healing Rate is increased by 5. Can't take Push-Up"],
	PE_VIEW: ["Replicanto", "Replication removes all negative effects, and becomes for free as well."],
	PE_ADRENALINE_RUSH: ["Bloodsucker", "You've studied blood so closely, that you receive +35 hitpoints. Each attack restore (PE*2) hitpoints. When using FA skill, you remove HEAT effect from self."],
	PE_CAUTIOUS_NATURE: ["Cautious Nature", "Your FoV increases by 3 hexes. You recover 1 AP from each miss. Encounter NPC spawn distance - +3 Perception to calculation."],
	PE_COMPREHENSION: ["Comprehension", "You pay much closer attention to the smaller details when reading (+1 Intelligence). You gain 200 experience and 1% to a random skill when reading books."],
	PE_DEMOLITION_EXPERT: ["Demolition Expert", "You are an expert when it comes to the fine art of handling explosives. They get extra area of effect and extra damage."],
	PE_GAMBLER: ["Athlete", "Harder! Better! Faster! Stronger! +60% to Athleticism skill."],
	PE_GAIN_STRENGTH: ["Gain Strength", "With this Perk you gain +1 to your Strength and gives +20 hitpoints."],
	PE_GAIN_PERCEPTION: ["Gain Perception", "With this Perk you gain +1 to your Perception and gives +20 hitpoints."],
	PE_GAIN_ENDURANCE: ["Gain Endurance", "With this Perk you gain +1 to your Endurance and gives +20 hitpoints."],
	PE_GAIN_CHARISMA: ["Gain Charisma", "With this Perk you gain +1 to your Charisma and gives +20 hitpoints."],
	PE_GAIN_INTELLIGENCE: ["Gain Intelligence", "With this Perk you gain +1 to your Intelligence and gives +20 hitpoints."],
	PE_GAIN_AGILITY: ["Gain Agility", "With this Perk you gain +1 to your Agility and gives +20 hitpoints."],
	PE_GAIN_LUCK: ["Gain Luck", "With this Perk you gain +1 to your Luck and gives +20 hitpoints."],
	PE_HARMLESS: ["Harmless", "Your innocent demeanor makes stealing from people a little easier. You gain 40% to your Steal skill."],
	PE_HERE_AND_NOW: ["Specialist", "With this Perk you immediately gain one skill point. One. Skillpoint."],
	PE_HTH_EVADE: ["Evader", "You feel the moment when you need to move. Evasion chance increases: (Max AP/4)+(Current AP/2)."],
	PE_KAMA_SUTRA_MASTER: ["Sportsman", "Fitness lessons you learned didn't go to waste. You acquire +40 hitpoints and +8 to Armor Class."],
 	PE_KARMA_BEACON: ["Diligence", "You've completed your everyday task and receive daily bonus to your maximum hitpoints - +20."],
	PE_LIGHT_STEP: ["Light Steps", " You are agile, lucky, and always careful. This perk gives you a 25% chance to avoid trap, 25% chance to ignore knockback. Explosive resistances increases by +25%."],
	PE_LIVING_ANATOMY: ["Living Anatomy", "Anatomy of living stuff... You know it well. Damage dealt increases by 10 at the end of calculation. Besides, you receive +20% to Doctor."],
	PE_MAGNETIC_PERSONALITY: ["Magnetic Personality", "Player can lead two more idiots with him without Charisma check."],
	PE_NEGOTIATOR: ["Negotiator", "You are a very skilled negotiator, who have +20% to both Trade and Speech."],
	PE_PACK_RAT: ["Pack Rat", "You are efficient at arranging your inventory in general. +22 kilos to a maximum Carryweight."],
	PE_PYROMANIAC: ["Pyromaniac", "Creates fire under creatures with any fire weapon type. +20 to a fire damage, +10 to fire DoT. DoT and fire -lake- effectiveness depends on Master(s) of Fire."],
	PE_QUICK_RECOVERY: ["Quick Recovery", "You are quick at recovering from being knocked out or knocked down. You receive additional 1 Action Point. You can't take Action Boy with it."],
	PE_SALESMAN: ["Salesman", "You get 40% bonus to a Trade skill."],
    PE_STONEWALL: ["Stonewall", "Gives you chance to avoid critical hit - 40% (doesn't stack with Terminator or Skilled trait). Decreases chance to get knocked by 50%."],
	PE_THIEF: ["Thief", "Career begins. You increase by 25% your Lockpick, Pickpocket and Traps skills, and also Sneak skill by 10%."],
	PE_WEAPON_HANDLING: ["Weapon Handling", "Adds +3 Str for a weapon handling check."],
	PE_VAULT_CITY_TRAINING: ["VC Med Course", "You managed to get medical training from the best Vault City specialists."],
	PE_EXPERT_EXCREMENT: ["Expert Expeditor", "You're best in anything involving brahmin shit."],
	PE_JINXED_II: ["Jinxed Eye", "A good side of it - enemy are making stupid mistakes more often. Bad side is - same applies to you!"],
	PE_TERMINATOR: ["Terminator", "You don't know anything about knockdowns, blind or cripples. All critical effects are ignored following this formula: (Str+End)*5."],
	PE_IRON_MAN: ["Iron Man", "You receive less pizduley with this perk."],
    PE_PRO_UDAR: ["Piercing Strike", "Your Chi-energy control allows you to pierce enemy armor. Enemy Resistances are greatly decreased when using melee weapon."],
	PE_ADD_ATAC: ["Bonus Attacks", "Weapon trigger pressing is your finest ability. You have 20% chance to restore 2 Action Points on each attack."],
	PE_NAPROLOM: ["Seasoned", "+7% to Small, Energy and Big Guns skills. +10% to Throwing. +15% to Unarmed and Melee Weapons."],
 	PE_ADW_MET: ["Throwing Expert", "ou're a pro at everything involving  throwing for 35% more damage. Can't be taken with Silent Running."],
	PE_GECKO_SKINNING: ["Skinner", "Skinning different lizards to get some profit is no mystery for you any more."],
	PE_VAULT_CITY_INOCULATIONS: ["VC Inoculations", "You received 10% Resistance to Poison and Radiation."],
	PE_DERMAL_IMPACT: ["Zinger", "You're a very healty person. +40 hitpoints and natural regeneration - +15 to Healing Rate."],
	PE_DERMAL_IMPACT_ENH: ["Улучшенная подкожная броня", "Вы получили усиленную защиту от атак физического характера."],
	PE_PHOENIX_IMPLANTS: ["Подкожная защита", "Вы чуть реже подвергаетесь ущербу от энергетических атак."],
	PE_PHOENIX_IMPLANTS_ENH: ["Улучшенная подкожная защита", "Вы имеете большую дополнительную защиту против энергетических атак."],
	PE_NCR_PERCEPTION: ["Doctor Klause's surgery: Crit", "After surviving doctor Klause's surgery in NCR, you received +4% to critical chance."],
	PE_NCR_ENDURANCE: ["Doctor Klaus'es surgery: Anticrit", "After surviving doctor Klause's surgery in NCR, you received +4% to anticrit."],
	PE_NCR_BARTER: ["Secret Arts: Barter", "You managed to learn alot from trader of Den. Your Trade skill increases by 5%."],
	PE_NCR_REPAIR: ["Secret Arts: Repair", "Modoc mechanic shared his techniques at repairing weapons. Your Repair skill increases by 5%."],
	PE_COMPUSTER: ["Golden Hands", "Opens wide horizons in craft menu."],
	PE_DRIVER: ["Driver", "Removes Charisma check for amount of people to drag with by cars."],
	PE_OFFICER: ["Officer", "Professional yelling at people. You receive +30 hitpoints, and final damage reduce by 5%. End instead of Cha for group number."],
 	PE_BISNES_RENO: ["Watcher", "Now you're the one who's watching over business in New-Reno."],
	PE_IMP1: ["Combat Implant", "You have an experimental dermal stuff injected. Your combat abilities improves."],
	PE_IMP2: ["Medical Implant", "You have an experimental dermal stuff injected. Your medic abilities improves."],
	PE_IMP3: ["Utility Implant", "You have an experimental dermal stuff injected. Your utility capabilities increases."],
	PE_COMBAT_ENGINEER: ["Combat Engineer", "You're very good at operating different engineer stuff. You receive +20% to Repair and ability to use unique weapons."],
	PE_CHAT_OPERATOR: ["Chat Operator", "You hear and see everything, since you're chat operator."],
	PE_DA_NORMAL: ["Master of Normal", "You deal 2% more damage with normal damage type with each level."],
	PE_DA_LASER: ["Master of Laser", "You deal 1% more damage with lazer to a target with each level."],
	PE_DA_FIRE: ["Master of Fire", "You receive +2 to fire DoT damage with each level."],
	PE_DA_PLASMA: ["Master of Plasma", "You receive +5 to plasma DoT damage with each level."],
	PE_DA_ELECTRO: ["Master of Electro", "You receive 4% chance to decrease enemy's AP by 1 with each level."],
	PE_DA_EMP: ["Master of Emp", "You deal 3% more damage with each level."],
	PE_DA_EXPLODE: ["Master of Explosion", "You have 10% chance to increase explosion AoE by 1 hex with each level."],
	PE_SUPPORTER: ["Fire Support", "Adds ability of burst weapons to suppress targets. AoE effect of fire (molotov), smoke and gas grenades increased. You also receive +20% to Throwing."]
}

/*
Текстовые данные для html файла:

Создание персонажа - калькулятор билдов Fallout Online: Requiem
Калькулятор билдов Fallout Online для сервера Requiem
ИМЯ
ПАРОЛЬ
МУЖ.
ST
PE
EN
CH
IN
AG
LK
Средн.
ОЧКИ РАСП.
Уровень:
Опыт:
След.ур.:
Жизни
Уворот
Антикрит
Норма
Лазер
Огонь
Плазма
Взрыв
Электро
Класс брони
Очки действий
Макс. груз
Рукоп. повр.
Радиус обзора
Уст. к яду
Уст. к рад
Порядок
Уров. лечен.
Шанс на крит.
ОЧКИ УМЕНИЙ
ОСОБЫЕ НАВ
БОНУСЫ
КНИГИ
КВЕСТЫ
Быстрый метабол
Крушила
Хилое тело
Однорукий
Точность
Камикадзе
Громила
Быстрый стрелок
Маньяк
Дурной глаз
Добродушие
Химик
Стабильный
Жидкое тело
Умелец
Импульсивный
Написать автору
ЗАГРУЗИТЬ
ИТОГ
*/