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
	treb: "Requirement: ",
	net: "no",
	traits: "Traits: ",
	nav: "Skills: ",
	procnav: "Learned skills: ",
	imp: "Implants: ",
	medals: "Medals: ",
	medals_in: " medals -> ",
	medals_skillpoint: " skillpoint",
	medals_carryweight: " carryweight",
	medals_hp: " hp",
	book: "Books: ",
	nosave: "Saves is temporarily not working.",
}

var questinfo = {
    imp_battle: ["+30% to Small Guns, +3 to final accuracy.",
				 "+30% to Big Guns, +3 to final accuracy.",
				 "+30% to Energy Weapons, +3 to final accuracy.",
				 "+30% to Throwing, +3 to Evasion.",
				 "+30% to Repair, +2 to ending damage.",
				 "+20% to melee weapons, +20% to unarmed, -3 seconds combat timer."],
    imp_medical: ["+35% to FA, +40 to friendly heal.",
				  "(-2) sec FA cd, +25% doc.",
				  "+20 hp, +10 to healing rate.",
				  "+40% doc, immune to Bleed.",
				  "+40 HP when using FA on self, +5 AC.",
				  "+5 hp per superstim on self, +30% doc."],
    imp_auxiliary: ["+100kg carryweight.",
					"+25% to worldmap movespeed.",
					"+100% to Traps.",
					"Replicanto perk, +20% to Speech.",
					"+100% to Pickpocket, +20% to Lockpick.",
					"+50 to Athleticism."], 
    drayfild: ["All combat +5%",
			   "Unarmed +10%",
			   "Melee Weapons +10%",
			   "Small Guns +10%",
			   "Big Guns +10%",
			   "Energy Weapons +10%",
			   "First Aid and Doctor +5%",
			   "Thrown Weapons +10%"],
    per_ncr: ["+4% to crit","+4% to anticrit"],
	medals: ["1 skillpoint",
			 "+15 carryweight",
			 "1 hp",
			 "+10 skillpoints",
			 "+80 skillpoints"]
}

var texttraits = {
	TRAIT_FAST_METABOLISM: ["Fast Metabolism", "<font color='#000096'> Pros: </font> You receive +40 to Healing Rate. +15 superstimpack healing bonus. </br><font color='#CC0000'> Cons: </font> Radiation and Poison resistances from perks, items and drugs are halved. Poison dot effects are ticking twice as fast. Superstimpacks drawback is two times faster and more powerful."],
	TRAIT_BRUISER: ["Bruiser", "A little slower, and a little bigger.</br><font color='#000096'> Pros: </font> +3 Str.</br><font color='#CC0000'> Cons: </font> -1 maximum AP."],
	TRAIT_SMALL_FRAME: ["Small Frame", "You are not big as the other people, but that never slowed you down.</br><font color='#000096'> Pros: </font> You receive +1 to Agi and +5% to Evasion.</br><font color='#CC0000'> Cons: </font> Carryweight is reduced."],
	TRAIT_ONE_HANDER: ["One Handed", "<font color='#000096'> Pros: </font> For all onehanded weapons: ignorance of Str requirement, +60 to a Skill on accuracy check, +7 to flat damage. </br><font color='#CC0000'> Cons: </font> Two-handed weapons receive -40 to Skill on accuracy check."],
	TRAIT_FINESSE: ["Finesse", "You like to take your time, then deliver bigger punches.</br><font color='#000096'> Pros: </font> +20% minimum and maximum damage.</br><font color='#CC0000'> Cons: </font> AP to unaimed shot cost."],
	TRAIT_KAMIKAZE: ["Kamikaze", "<font color='#000096'> Pros: </font> +1 Agi, each 10 seconds you restore 1 AP. If you're not in combat, your 1st attack will cost 2 AP less. Gives immunity to 'Suppression'.</br><font color='#CC0000'> Cons: </font> AC decreased by 10."],
	TRAIT_HEAVY_HANDED: ["Thief", "<font color='#000096'> Pros: </font> +20 HR. +10 flat damage to one-h melee & throw. knives. Wearing CLJ gives +10% to Evasion and -30 critroll against you.</br><font color='#CC0000'> Cons: </font> Accuracy of all other weapons divided by 2."],
	TRAIT_FAST_SHOT: ["Fast Shot", "You don't have much time to aim.</br><font color='#000096'> Pros: </font> Shooting and throwing costs 1 AP less.</br><font color='#CC0000'> Cons: </font> You can't aim. Your critical damage is always 1x."],
	TRAIT_BLOODY_MESS: ["Maniac", "You need to be fast to get precious kills.</br><font color='#000096'> Pros: </font> Leave combat upon player kill. Receive 6 AP per player kill. Receive 3 AP per NPC kill. </br><font color='#CC0000'> Cons: </font> Both your's and enemy's armor deteriorates twice as fast upon taking damage and upon death. Your weapon deteriorate twice as fast."],
	TRAIT_JINXED: ["Jinxed", "<font color='#000096'> Pros: </font> A good side of it - enemy are making stupid mistakes more often. Works only if enemy hitchance is above 87% and attack WAS NOT an Evasion.</br><font color='#CC0000'> Cons: </font> Bad side is - same applies to you!</br>You need Luck to negate critical misses chance."],
	TRAIT_GOOD_NATURED: ["Good Natured", "Violence is not an option - that's what they told you.</br><font color='#000096'> Pros: </font> You recieve perks every two levels, humanoid NPCs don't aggro on you but all other aggro instantly.</br><font color='#CC0000'> Cons: </font> You can't take any offensive perks. You can't apply DoT effects. Penalty to combat skills."],
	TRAIT_CHEM_RELIANT: ["Chemist", "<font color='#000096'> Pros: </font> Duration of drugs you're taking are increased by 3 times. Drawbacks are nearly instant.</br><font color='#CC0000'> Cons: </font> If you'll get affliction, it'll last for a really long time."],
	TRAIT_CHEM_RESISTANT: ["Stable", "Keep it steady, come to daddy - your motto.</br><font color='#000096'> Pros: </font> You can't critically miss - at all. All your attacks receive +35 bonus to Accuracy. +1 to Perception, and bonus to hit target in the smoke.</br><font color='#CC0000'> Cons: </font> You can't critically hit - at all."],
	TRAIT_SEX_APPEAL: ["Liquid Body", "You are very tough to hit - like a rock. You are very hard to heal - like a rock.</br><font color='#000096'> Pros: </font> You ignore 10 flat damage, maximum Carryweight increases by 50. </br><font color='#CC0000'> Cons: </font> Superstims and First Aid heal are decreased by 20 (ss will become +55, -20 to ending FA heal amount).."],
	TRAIT_SKILLED: ["Skilled", "<font color='#000096'> Pros: </font> Stats of character increases - +2 to End, Cha, Int, Agi. +60 anticrit, +15 crit.</br><font color='#CC0000'> Cons: </font> You can't take any uberperk (Sniper, Teminator, Expendable, Silent Running) and you receive perks only each 4 level, not each 3."],
	TRAIT_NIGHT_PERSON: ["Impulsive", "<font color='#000096'> Pros: </font> +20% to Throwing, +2 AP and 30% chance to restore 1 AP during Reload.</br><font color='#CC0000'> Cons: </font> You receive 3 less Skillpoints each level."]
}

var textquest = {
	medals:["Medals","For each your achievement in various minitasks, you acquire these. Can be exchanged for char buffs at hubologists in San-Fran"],
	PE_NCR_REPAIR:["Secret Arts: Repair", "Modoc's mechanic shared his techniques at repairing weapons. Your Repair skill increases by 5%."],
	ranger_smile:["Outdoorsman from Smiley", "Smiley for nothing but a smile can train your Outdoorsman to 60-69%"],
	ranger_slim:["+2% outdoorsman","Slim from Klamath will tell you fairytales about gecko hunting, just for 100 coins ."],
	melee_klam:["Unarmed +30%", "On Trapping Caves boxer from New Reno can show you few tricks."],
	hp_den:["+3 hp in Den", "If you'll ask the man in Den's Church about the church."],
	light_den:["Small Guns in Den", "Can increase your Small Guns skill from 115 to 120% for 3k coins."],
	overviewq:["+1 Field of View","You need to have good reputation in Den, then talk to father Clifford."],
	quest_arroyo:["Arroyo Quests","When doing Arroyo quests, you can get +1% trade, +5% traps and +1% outdoorsman, for 20+ rep Katrin can give you a lesson on Lockpick, giving 18 skillpoints in that skill."],
	per_ncr:["+4% anti/crit in NCR","20+ NCR reputation, and doctor there will perform surgery on your request for 50k coins."],
	cha_vc:["+1 Charisma in Vault-City", "9+ VC reputation, 81% Speech, <4 Cha, ask girl inside Vault."],
	ac_12:["+12 AC","James from New-Reno will ask you to complete numerous tasks in order to get reward."],
	ap_vc:["+1 AP (VC)","You need to complete VC Guardsman questline in order to get this reward."],
	ap_hack:["+1 AP (lockpick)","You need +200 Lockpick skill in order to start the quest in Den, ask Rianna."],
	heavy_bh:["+5% BG and Melee","Markus from Broken Hills will teach you few things for a small task."],
	skill_geck:["+3% all combat in Gecko","Ask Harold, and don't forget to take 5k+ coins."],
	trade_den:["+5% barter","For completeing all James quests in Den."],
	trade_mod:["+7% barter","Becoming Modoc citizen will allow you to learn few things from mayor."],
	trade_up:["Barter before 40%","Some caravans in the Wasteland - inb4 40% for 1к coins for 1%."],
	steel_reno:["Melee Weapons +10%", "New-Reno, Mordino junior, 200 caps."],
	valerie_letter:["+10% SG and Repair", "Valery letter. Starts at May 5 up to May 31, ask Valery in Vault-City."],
	drayfild:["NeoArk","Go in, kill fuggin wasp, then use toxic spray on beetol, dismantol turet and get teh reword. Who cares, noone reads anyway."],
	imp_battle:["Combat Implant","Combat one."],
	imp_medical:["Medical Implant","Medical one."],
	imp_auxiliary:["Utility Implant","Utility one."],
	PE_MA_SKIT:["Wasteland Dweller(5)", "+5% to Outdoorsman. Tracking opens from Mastery Level 3."],
	PE_MA_REM:["Master of Repairs(5)", "You receive +3% to Repair and +1% to Science with each level."],
	PE_MA_FIX:["Master of Science(5)", "You receive +3% to Science and +1% to Repair with each level."],
	PE_MA_AID:["Master of Medkit(5)", "You receive +2% to First Aid and +2% to Doctor."]
}

var dialog = {
	medals: {
		amedals: "1 skillpoint(3 medals)",
		cmedals: "+15 carryweight(5 medals)",
		bmedals: "1 hp(7 medals)",
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
	PE_BONUS_HTH_ATTACKS: ["Fast Fists", "You have learned the secret arts of the East, or you just punch faster. In any case, your Hand-to-Hand attacks cost 1 AP less to perform."],
	PE_BONUS_HTH_DAMAGE: ["Bonus HtH Damage", "Experience in unarmed combat is giving you an edge when it comes to dealing damage. For each instance of this perk you receive +3 bonus damage to Unarmed."],
	PE_BONUS_MOVE: ["Bonus Moves", "For each instance of this perk you receive 10% chance to get 1 AP back for using stimpacks. Also you regenerate 1 AP each 10 seconds."],
	PE_BONUS_RANGED_DAMAGE: ["Bonus Ranged Damage", "You deal +(Burst Bullets Amount + 10) additional raw damage. Works with bursts only."],
	PE_BONUS_RATE_OF_FIRE: ["Bonus Rate of Fire", "This Perk allows you to pull the trigger a little faster and still remain as accurate as before. Each ranged weapon attack costs 1 AP less to perform."],
	PE_EARLIER_SEQUENCE: ["Earlier Sequence", "You are more likely to move before your opponents in combat, since your Sequence is +4 for each level of this Perk."],
	PE_FASTER_HEALING: ["Faster Healing", "You know how to do it quick and efficient. You get +20 to Healing Rate. You receive 1\4 your maximum AP when using First Aid. First Aid and Doctor AP cost reduced by 1."],
	PE_MORE_CRITICALS: ["More Critical", "Each level of More Critical gives you an additional +8% chance to cause a critical hit."],
	PE_NIGHT_VISION: ["Immunity", "You have very high immunity to... bullets. Each shot decreases raw damage dealt to your character equal to your Strength."],
	PE_PRESENCE: ["Town Keeper", "You're in your own town, even the walls help here. You receive +4% to all Resistances."],
	PE_RAD_RESISTANCE: ["Rad Resistance", "You are better able to avoid radiation and the bad effects radiation causes.  Each level of this Perk improves your Radiation Resistance by 15%."],
	PE_TOUGHNESS: ["Toughness", "If you are tough, you're tough. This Perk adds +5% to Normal DR, +8% to Explosion and Fire DR. Doesn't stack with Durability perk."],
	PE_STRONG_BACK: ["Strong Back", "AKA Mule. You can carry an additional 100 kg of equipment. Additionally gives %35 of Athletics skill, for faster hamstering."],
	PE_SHARPSHOOTER: ["Sharpshooter", "You have a talent for hitting things at longer distances. You get +2 Perception if your Perception is 3 or lower. Decreases target's change to Dodge by 5%. Also +6 Sight Range."],
	PE_SILENT_RUNNING: ["Silent Running", "You can Sneak and run at the same time. Can't be taken with other uberperks or Skilled trait."],
	PE_SURVIVALIST: ["Survivalist", "You are a master of the some places out there. This Perk confers the ability to skip encounters rather then fall into them. You get a +25% bonus to Outdoorsman."],
	PE_MASTER_TRADER: ["Master Trader", "You have mastered one aspect of bartering. With this perk, you get a 25% discount when purchasing items from caravans or other traders."],
	PE_EDUCATED: ["Educated", "You had really decent education in the past. You're getting +50 skillpoints to distribute."],
	PE_HEALER: ["Healer", "You can actually heal something out of people with this Perk. You receive additional +40 hitpoints each time you use FA. Additionally, +20 when carrying FA kit or doctor's bag."],
	PE_FORTUNE_FINDER: ["Twister", "Let's shake like an earthquake! Each Dodge gives you +1 AP. You receive +(Charisma*5)HP. If your HP is 33% or lower, you don't receive critical hits."],
	PE_BETTER_CRITICALS: ["Better Critical", "The critical hits you inflict in combat are more devastating. You gain 20% bonus on the critroll."],
	PE_EMPATHY: ["Deceitful", "People don't even expect you to be such a villain. Increases your raw damage at the end of calculation by +8."],
	PE_SLAYER: ["Slayer", "All melee attacks (HtH and melee weapons) - are critical (100% chance for a critical damage in close combat). Melee crit damage is x1,33."],
	PE_SNIPER: ["Sniper", "Increases your chance to score a critical hit by (Luck*4). -1 AP for aimed shot."],
	PE_SILENT_DEATH: ["Foxery", "Nimble like a fox. +25 hp, +5% to Dodge, +50% to Athleticism. When entering a sneak mode, you're leaving combat (if you have Combat Jacket equipped as well)."],
	PE_ACTION_BOY: ["Action Boy", "Action Boy (insert Girl if you wish) makes everything (s)he does on the run only, just like a conscript. Gives you +2 APs."],
	PE_MENTAL_BLOCK: ["Durability", "During your journeys you developed strong and durable body. You receive +25 hitpoints and +3% to Normal, and +5% to the rest Resistances. Can't take Toughness and Excellence."],
	PE_LIFEGIVER: ["Lifegiver", "You receive additional +60 hitpoints. Long live the Lifegiver!"],
	PE_DODGER: ["Dodger", "You are less likely to be hit by single shots in combat if you have this Perk. You get +10% Dodge."],
	PE_SNAKEATER: ["Snakeater", "Yum! Tastes like a chicken. For each level of this Perk, you gain +25% to your Poison Resistance."],
	PE_MR_FIXIT: ["Mr. Fixthis", "For each level of this perk, you get +10% to your Repair skill, +20% to Science skills. This perk reveals amount of item's malfunctions."],
	PE_MEDIC: ["Medic", "The Medic Perk gives you a one-time bonus of +10% to the First Aid and Doctor skills."],
	PE_MASTER_THIEF: ["Master Thief", "You gain +40% to Pickpocket and Lockpick. Lockpick tools never break. Regeneration while sneaking each 10 seconds. 200% Pickpocket skill allows to open crates with crowbar."],
	PE_SPEAKER: ["Speaker", "Being a Speaker means that for each instance of this perk you gain +10% to Speech."],
	PE_HEAVE_HO: ["Ace Holder", "You always have a trick or two upon sleeve. You receive +Luck to critroll. If you have coins in inventory, you receive  Luck% chance to avoid getting shot. Applying a doctor with a chance Luck% will restore you all and all AP."],
	PE_FRIENDLY_FOE: ["Shotgun Fan", "Since childhood you have been a shotgun fan! (+30% to Small Guns, +20% to Repair). +10 damage to shotguns single shot, +4 to a burst (each bullet)."],
	PE_PICKPOCKET: ["Hustler", "With this Perk, you ignore volume and facing direction modifiers when stealing from a person. Hustle your fingers towards the bright future!"],
	PE_GHOST: ["Ghost", "You move like a ghost with this Perk. Your Sneak skill is enhanced - +40% to it, also you regenerate 1 AP each 10 seconds while sneaking."],
	PE_CULT_OF_PERSONALITY: ["Excellence", "Studying Cat's Paws, Issue 6 on particular, has given you unique knowledge. 6% Resist from Laser, Plasma damage and 8% Resist from Electro damage. Can't take Durability."],
	PE_SCROUNGER: ["Field Medic", "Your knowledge of battlefield treatment is incredible. +20% to First Aid, +30% to Doctor. +3 Luck for a First Aid formula."],
	PE_EXPLORER: ["Explorer", "Harsh and tough adventures in wasteland didn't go in a vain. Your chances to find special encounter increase, also you receive +(STR*5) bonus hitpoints."],
	PE_FLOWER_CHILD: ["Combat Medic", "Decreases First Aid cooldown by 4 seconds. You receive (Int+Luck)*3 additional hp after FA use, also you have chances equal to (Luck*4) to restore full hp."],
	PE_PATHFINDER: ["Pathfinder", "With this Perk, your travel speed on the World Map is increased by 25%."],
	PE_ANIMAL_FRIEND: ["Lucky Move", "You like the way you move. Each time an attack against you misses, you restore 1 AP. With changes (CHA+AGI+PE)% you will recover AP equal to enemy's accuracy\10."],
	PE_SCOUT: ["Scout", "Increases your tracking radar range by 1 square, as well as opening black squares on WM. Increases chances for special encounter."],
	PE_MYSTERIOUS_STRANGER: ["Veteran", "After being through that many battlefields, your accuracy for aimed shots is now maximum (any aimed shot counts as torso shot). Additionally - +35 hitpoints."],
	PE_RANGER: ["Ranger", "Outdoorsman +15%. Increased chance to evade unneeded encounters - or to find interesting (special) ones."],
	PE_QUICK_POCKETS: ["Quick Pockets", "You've got your ammunition ready and steady. You now waste 1 AP less for Reload. 40% chance to get 1 AP back while reloading."],
	PE_SMOOTH_TALKER: ["Barter Exp", "Your barter experience (0-300). This value can't exceed over Trade skill. To increase b-exp without skillpoints, you need to sell items to traders with higher Trade skill."],
	PE_SWIFT_LEARNER: ["Swift Learner", "You are indeed a Swift Learner with this Perk, it gives you an additional +15% bonus whenever you earn experience points."],
	PE_TAG: ["Mathematican", "Your brain works like a calculator, you're precise and deadly. You recieve +30% Combat Skill, additional 15% bonus from smoke greandes and +10 bonus from cover."],
	PE_MUTATE: ["Mutate!", "The radiation of the Wasteland has changed you! You receive +20 hitpoints and +100 skillpoints."],
	PE_BOOKWORM: ["Regeneration", "Each 10 seconds you: restore from KO\KD, have Doctor skill check to heal cripples, regenerate health equal to your Healing Rate in combat. +20 to Healing Rate."],
	PE_AWARENESS: ["Awareness", "With Awareness, you can see exact hit points and information about any weapon\armor the guys you're looking at are equipped with."],
	PE_BIVALIY: ["Die Hard", "You're a real hard nut to crack. Critroll of attackers negates with formula: (PE*3)+STR. Critical damage -(PE + Agi) / 2 value for Luck."],
	
	PE_PALESKIN:["Бледнокожий","Вы не очень любите дневной свет и пристальные взгляды. А вот стимуляторы вам по душе. И вы их не колете.. вы их пьете. Сски отхиливают +6хп. Ночью с 20:00 до 08:00 у ссок нет откатов. Исключает Реаниматора."],
	PE_GECKON:["Ящерица","У вас была терминальная стадия рака и единственным выходом было нетрадиционное лечение. Никто не знал, что инъекции стволовых клеток ящерицы обернутся таким приятным сюрпризом. Входящий по вам урон свыше 65 ед. с вероятностью 50% восстановит Сила*2 ОЖ."],
	PE_GUY:["Крутой парень","Игнорирование требования Силы на дальность метания. Ваша атака по сопернику и атака соперника по вам имеет шанс (Восприятие/2+Сила/2)% сжечь ему 3 Од. Сжигание ОД работает на погексовые атаки."],
	PE_BIGSKIN:["Толстокожий","От типов урона норма, взрыв, импульс, плазма вы полчаете на 15% меньше повреждений."],
	PE_MASTERMELE:["Мастер ближнего боя","Шанс (Восприятие+Харизма)% заблокировать или отразить в атакующего 2/3 урона, нанесенного с расстояния до 1-6 гексов."],
	PE_COWBOY:["Ковбой","Все бонусы действуют только для огнестрельных пистолетов. Прицельные атаки вернут 1 од (если нет перка Снайпер). Шанс крита +5%. Если не в бою, то выстрел обнуляет патроны цели  в магазине. Исключает Бесшумный бег."],
	PE_FISTRAGE:["Кулак ярости","Ваши яростые атаки выбивают из колеи любого противника, позволяя нанести оглушительный удар. Каждая пятая атака по цели накладывает эффект контузия, при учете того, что она наносит минимум 60 урона."],
	PE_ADEPTGLOW:["Адепт Глоу","Иммунитет к облучению. Поглощение из урановой руды 250 пунктов радиации. Поголощение происходит путем использования доктора на обогащенный уран в инвентаре. Действует 2 минуты и откаты 6 минут. Поглощенные пункты тратятся вместе с атаками и при поглощении урона."],
	PE_FANAT:["Фанатик","Вы остаетесь в сознании даже получая смертельные раны. При получении такого ранения ваше здоровье останавливается на значении 1хп. По истечении 3 секунд, если ваше здоровье меньше 50% от мах, вы умираете. Кд способности 1 минута. Ислючает Стоика."],
	PE_STOIK:["Стоик","Хабологи хранят в строжайшей тайне то, что заставляет вас возвращаться к жизни вновь и вновь. При получении летального урона персонаж не умрет и восстановит здоровье по формуле (Уд+Хар)2+Вн3=%. Кд способности минута. Исключает Фаната."],
	PE_CRITTER:["Существо","Вражеские атаки вас только злят. И чем вы злее, тем опаснее. При здоровье <50% +Харизма% урона. При убийстве игрока восстанавливает Харизма*10% здоровья и (Харизма+удача)/2 Од. Уберперк."],
	PE_TARGETING:["Пристрелка","При атаке одной и той же цели вы получаете +2 урона и +3 точности за каждое попадание вплоть до +10 и +15 соответственно. При смене цели бонусы пропадают."],
	
	PE_RAGE: ["Push Up", "You have a good habit to keep your body fit and tight. With push-ups. You receive +5 hitpoints. Can't take Hardened."],
	PE_DEFENCE: ["Reflexes", "One of your strong side is super reflexes. -1 AP for unaimed shot. Can't be taken with Sniper perk or Fast Shot trait. Doesn't work on engineer weapons."],
	PE_ATTACK: ["Expendable", "You're... well, expendable. You receive Agi/2 AP and +(Agi + PE)*5% bonus to Athleticism skill. Incompatible with tons of perks, check wiki. 0% anticrit glasscanon, as it is."],
	PE_HARD: ["Hardened", "Your organism is adapted for survival in difficult situations. Your Healing Rate is increased by 5. Can't take Push Up."],
	PE_VIEW: ["Replicanto", "Replication removes all negative effects, and becomes for free as well."],
	PE_ADRENALINE_RUSH: ["Vampiro", "You've studied blood so closely, that you receive +30 hitpoints. Each your direct (not AoE) attack is restoring (PE*2) hitpoints. Additionally, using FA skill, you remove HEAT debuff from self."],
	PE_CAUTIOUS_NATURE: ["Cautious Nature", "Your FoV increases by 3 hexes. You recover 1 AP each time you miss a shot. Encounter NPC spawn distance - +3 Perception to calculation."],
	PE_COMPREHENSION: ["Comprehension", "You pay much closer attention to the smaller details when reading (+1 Intelligence). You gain 200 experience for each book you read."],
	PE_DEMOLITION_EXPERT: ["Demolition Expert", "You are an expert when it comes to the fine art of making kabooms. Your charges get extra area of effect and extra damage."],
	PE_GAMBLER: ["Athlete", "Harder! Better! Faster! Stronger! +60% to Athleticism skill."],
	PE_GAIN_STRENGTH: ["Gain Strength", "With this Perk you gain +1 to your Strength and +20 hitpoints."],
	PE_GAIN_PERCEPTION: ["Gain Perception", "With this Perk you gain +1 to your Perception and +20 hitpoints."],
	PE_GAIN_ENDURANCE: ["Gain Endurance", "With this Perk you gain +1 to your Endurance and +20 hitpoints."],
	PE_GAIN_CHARISMA: ["Gain Charisma", "With this Perk you gain +1 to your Charisma and +20 hitpoints."],
	PE_GAIN_INTELLIGENCE: ["Gain Intelligence", "With this Perk you gain +1 to your Intelligence and +20 hitpoints."],
	PE_GAIN_AGILITY: ["Gain Agility", "With this Perk you gain +1 to your Agility and +20 hitpoints."],
	PE_GAIN_LUCK: ["Gain Luck", "With this Perk you gain +1 to your Luck and +20 hitpoints."],
	PE_HARMLESS: ["Harmless", "You learned to use your innocent demeanor, which makes confusing and subsequent stealing from people a little easier. You gain 40% to your Steal skill."],
	PE_HERE_AND_NOW: ["Specialist", "With this Perk you immediately gain one skill point. One. Skillpoint."],
	PE_HTH_EVADE: ["Evader", "You really feel the moment when you need to move. Evasion chance increases: (Max AP/3)+(Current AP/2)."],
	PE_KAMA_SUTRA_MASTER: ["Sportsman", "Fitness lessons you've learned didn't go to waste. You acquire +30 hitpoints and +8 to Armor Class."],
	PE_KARMA_BEACON: ["Contractor", "You've completed your everyday task and receive bonus to your maximum hitpoints - +20."],
	PE_LIGHT_STEP: ["Light Steps", "You are agile, lucky, and always careful. This perk gives you a 50% chance to avoid trap, 25% decreased damage from traps, +15% to Explosive resistance, +5 to Fire DT."],
	PE_LIVING_ANATOMY: ["Living Anatomy", "Anatomy of living stuff... You know it well. Damage dealt increases by 10 at the end of calculation. Besides, you receive +20% to Doctor."],
	PE_MAGNETIC_PERSONALITY: ["Magnetic Personality", "Player can lead two more idiots with him without Charisma check."],
	PE_NEGOTIATOR: ["Negotiator", "You are a very skilled negotiator, who have +20% to both Trade and Speech."],
	PE_PACK_RAT: ["Pack Rat", "You are efficient at arranging your inventory in general. +22 kilos to a maximum Carryweight."],
	PE_PYROMANIAC: ["Pyromaniac", "Feed your inner pyromancer. For any Fire damage weaponry this gives: +10 bonus damage, +15 ending damage. Boosts fire DoT effect."],
	PE_QUICK_RECOVERY: ["Quick Recovery", "You are quick at recovering from being knocked out or knocked down. You receive additional 1 Action Point. You can't take Action Boy with it."],
	PE_SALESMAN: ["Salesman", "You get 40% bonus to a Trade skill."],
	PE_STONEWALL: ["Stonewall", "Gives you 50% chance to avoid knockdown (doesn't stack with Terminator or Skilled trait). +5 to Explosion DT."],
	PE_THIEF: ["Thief", "Career begins. You increase by 25% your Lockpick, Pickpocket and Traps skills, and also Sneak skill by 10%."],
	PE_WEAPON_HANDLING: ["Weapon Handling", "Adds +3 Str for a weapon handling check."],
	PE_VAULT_CITY_TRAINING: ["VC Med Course", "You managed to get medical training from the best Vault City specialists."],
	PE_EXPERT_EXCREMENT: ["Expert Expeditor", "You're best in anything involving brahmin shit."],
	PE_JINXED_II: ["Jinxed Eye", "A good side of it - enemy are making stupid mistakes more often. Bad side is - same applies to you!"],
	PE_TERMINATOR: ["Terminator", "You don't know anything about knockdowns, blinds or cripples. All critical effects are ignored following this formula: End*5."],
	PE_IRON_MAN: ["Explosion Producer", "With this feature, you can clear the territory within a radius of 1 hex ('Science for yourself'), the switches of the plates are faster and there is an opportunity to make robot shahids (robot + plastids)."],
	PE_PRO_UDAR: ["Toxicologist", "You have reached unprecedented heights in chemistry. Any of your weapons do additional poisoning damage."],
	PE_ADD_ATAC: ["Bonus Attacks", "Weapon trigger pressing is your finest ability. You have chance to restore 2 Action Points equal to (10 * attack AP Cost)%."],
	PE_NAPROLOM: ["Seasoned", "+7% to Small, Energy and Big Guns skills. +10% to Throwing. +15% to Unarmed and Melee Weapons."],
	PE_ADW_MET: ["Throwing Expert", "You're a pro at everything involving  throwing for 35% more damage. Can't be taken with Silent Running."],
	PE_GECKO_SKINNING: ["Skinner", "Skinning different lizards to get some profit is no mystery for you any more."],
	PE_VAULT_CITY_INOCULATIONS: ["VC Inoculations", "You received 10% Resistance to Poison and Radiation."],
	PE_DERMAL_IMPACT: ["Zinger", "You're a very healty person. +35 hitpoints and natural regeneration - +15 to Healing Rate."],
	PE_DERMAL_IMPACT_ENH: ["РЈР»СѓС‡С€РµРЅРЅР°СЏ РїРѕРґРєРѕР¶РЅР°СЏ Р±СЂРѕРЅСЏ", "Р’С‹ РїРѕР»СѓС‡РёР»Рё СѓСЃРёР»РµРЅРЅСѓСЋ Р·Р°С‰РёС‚Сѓ РѕС‚ Р°С‚Р°Рє С„РёР·РёС‡РµСЃРєРѕРіРѕ С…Р°СЂР°РєС‚РµСЂР°."],
	PE_PHOENIX_IMPLANTS: ["Reanimator", "You are an excellent doctor. Any change in the points of life (no matter, plus or minus) adds 4 units to them, provided that you are not poisoned."],
	PE_PHOENIX_IMPLANTS_ENH: ["РЈР»СѓС‡С€РµРЅРЅР°СЏ РїРѕРґРєРѕР¶РЅР°СЏ Р·Р°С‰РёС‚Р°", "Р’С‹ РёРјРµРµС‚Рµ Р±РѕР»СЊС€СѓСЋ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅСѓСЋ Р·Р°С‰РёС‚Сѓ РїСЂРѕС‚РёРІ СЌРЅРµСЂРіРµС‚РёС‡РµСЃРєРёС… Р°С‚Р°Рє."],
	PE_NCR_PERCEPTION: ["Doctor Klause's surgery: Crit", "After surviving doctor Klause's surgery in NCR, you received +4% to critical chance."],
	PE_NCR_ENDURANCE: ["Doctor Klaus'es surgery: Anticrit", "After surviving doctor Klause's surgery in NCR, you received +4% to anticrit."],
	PE_NCR_BARTER: ["Secret Arts: Bargain", "You've got the knowledge of how do they do business in Den. Your Trade skill increases by 5%."],
	PE_NCR_REPAIR: ["Secret Arts: Repair", "Modoc's mechanic shared his techniques at repairing weapons. Your Repair skill increases by 5%."],
	PE_COMPUSTER: ["Golden Hands", "Opens wide horizons in craft menu."],
	PE_DRIVER: ["Driver", "Removes Charisma check for amount of people to drag with using cars."],
	PE_OFFICER: ["Officer", "Professional yelling at people. You receive +20 hitpoints, and final damage reduce by 5%. End instead of Cha checks for group number."],
	PE_BISNES_RENO: ["Watcher", "Now you're the one who's watching over business in New-Reno."],
	PE_IMP1: ["Combat Implant", "You have an experimental dermal stuff injected. Your combat abilities improves."],
	PE_IMP2: ["Medical Implant", "You have an experimental dermal stuff injected. Your medic abilities improves."],
	PE_IMP3: ["Utility Implant", "You have an experimental dermal stuff injected. Your utility capabilities increases."],
	PE_COMBAT_ENGINEER: ["Combat Engineer", "You're very good at operating different engineer stuff. You receive +20% to Repair and full ability to use unique weapons."],
	PE_CHAT_OPERATOR: ["Chat Operator", "You hear and see everything, since you're a chat operator."],
	PE_DA_NORMAL: ["Master of Normal", "You deal 1% more damage with normal damage type with each level. Doesn't work if Good Natured trait is taken."],
	PE_DA_LASER: ["Master of Laser", "You deal 1% more damage with lazer damage type with each level. Doesn't work if Good Natured trait is taken."],
	PE_DA_FIRE: ["Master of Fire", "You receive +2 to fire DoT damage with each level. Doesn't work if Good Natured trait is taken."],
	PE_DA_PLASMA: ["Master of Plasma", "You receive +5 to plasma DoT damage with each level. Doesn't work if Good Natured trait is taken."],
	PE_DA_ELECTRO: ["Master of Electro", "You receive 4% chance to decrease enemy's AP by 1 with each level. Doesn't work if Good Natured trait is taken."],
	PE_DA_EMP: ["Master of Emp", "You deal 3% more damage with each level. Doesn't work if Good Natured trait is taken."],
	PE_DA_EXPLODE: ["Master of Explosion", "You deal 1% more damage with explosion damage type with each level."],
	PE_SUPPORTER: ["Fire Support", "Adds ability of BG burst and SG single shot weapons with perk 'Long Range' to Suppress targets. AoE effect of fire (Molotof), smoke and gas grenades are increased by 1 hex. You also receive +20% to Throwing."]
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