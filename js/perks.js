var perk = {	//(перк, уровней перка, мин уровень взятия, максимальный уровень взятия, [требования])
	PE_BONUS_HTH_ATTACKS: [0,1,15,29,function(n){return stats.agi[2] >= 6;}],
	PE_BONUS_HTH_DAMAGE: [0,3,30,99,function(n){return !traits.TRAIT_GOOD_NATURED[1] && stats.agi[2] >= 6 && stats.str[2] >= 6;}],
	PE_BONUS_MOVE: [0,2,3,29,function(n){return stats.agi[2] >= 5;}],
	PE_BONUS_RANGED_DAMAGE: [0,1,3,29,function(n){return !traits.TRAIT_GOOD_NATURED[1] && stats.agi[2] >= 6 && stats.luc[2] >=4;}],
	PE_BONUS_RATE_OF_FIRE: [0,1,15,29,function(n){return stats.agi[2] >= 7 && stats.intl[2] >= 6 && stats.per[2] >= 6;}],
	PE_EARLIER_SEQUENCE: [0,2,3,29,function(n){return stats.per[2] >= 7;}],
	PE_FASTER_HEALING: [0,1,9,29,function(n){return stats.enu[2] >= 8;}],
	PE_MORE_CRITICALS: [0,2,3,29,function(n){return stats.per[2] >= 6 && stats.luc[2] >= 2;}],
	PE_RAD_RESISTANCE: [0,2,30,99,function(n){return stats.enu[2] >= 6 && stats.intl[2] >= 4;}],
	PE_TOUGHNESS: [0,2,3,29,function(n){return /*!perk.PE_CULT_OF_PERSONALITY[0] &&*/ !perk.PE_MENTAL_BLOCK[0] && stats.enu[2] >= 6 && stats.str[2] >= 8;}],
	PE_STRONG_BACK: [0,3,3,29,function(n){return stats.str[2] >= 6 && stats.enu[2] >= 6;}],
	PE_SHARPSHOOTER: [0,1,9,29,function(n){return stats.per[2] >= 7 && stats.intl[2] >= 6;}],
	PE_SILENT_RUNNING: [0,1,12,29,function(n){return !perk.PE_ADW_MET[0] && !perk.PE_SNIPER[0] && stats.agi[2] >= 7 && (n||skills.sneak[0]>=150);}],
	PE_SURVIVALIST: [0,3,30,99,function(n){return stats.enu[2] >= 6 && stats.intl[2] >= 6 && (n||skills.ranger[0] >= 40);}],
	PE_MASTER_TRADER: [0,1,30,99,function(n){return (n||skills.trade[0] >= 200);}],
	PE_EDUCATED: [0,1,3,29,function(n){return stats.intl[2] >= 7;}],
	PE_HEALER: [0,1,6,29,function(n){return stats.per[2] >= 1 && stats.agi[2] >= 1 && stats.intl[2] >= 1 && (n||skills.orderly[0] >= 40);}],
	PE_BETTER_CRITICALS: [0,1,9,29,function(n){return stats.per[2] >= 6 && stats.agi[2] >= 4;}],
	PE_SLAYER: [0,1,15,29,function(n){return stats.agi[2] >= 7 && stats.str[2] >= 6 && (n||skills.melee[0] >= 80);}],
	PE_SNIPER: [0,1,15,29,function(n){return !perk.PE_SILENT_RUNNING[0] && !perk.PE_TERMINATOR[0] && !perk.PE_DEFENCE[0];}],
	PE_SILENT_DEATH: [0,1,15,29,function(n){return !traits.TRAIT_GOOD_NATURED[1] && stats.agi[2] >= 10 && (n||skills.doctor[0] >= 100) && stats.luc[2] >= 6;}],
	PE_ACTION_BOY: [0,1,15,29,function(n){return !perk.PE_QUICK_RECOVERY[0] && stats.agi[2] >= 6;}],
	PE_LIFEGIVER: [0,1,12,29,function(n){return stats.enu[2] >= 4;}],
	PE_DODGER: [0,1,6,29,function(n){return stats.agi[2] >= 6;}],
	PE_SNAKEATER: [0,2,30,99,function(n){return stats.enu[2] >= 3;}],
	PE_MR_FIXIT: [0,1,3,32,function(n){return (n||skills.repair[0] >= 40 && skills.science[0] >= 40);}],
	PE_MEDIC: [0,1,3,32,function(n){return (n||skills.orderly[0] >= 40 && skills.doctor[0] >= 40);}],
	PE_MASTER_THIEF: [0,1,30,99,function(n){return (n||skills.steal[0] >= 50 && skills.hack[0] >= 50);}],
	PE_SPEAKER: [0,4,30,99,function(n){return stats.intl[2] >= 4;}],
	PE_HEAVE_HO: [0,1,3,29,function(n){return true;}],
	PE_PICKPOCKET: [0,1,30,99,function(n){return stats.agi[2] >= 8 && (n||skills.steal[0] >= 80);}],
	PE_GHOST: [0,1,6,29,function(n){return (n||skills.sneak[0] >= 100);}],
	PE_EXPLORER: [0,1,6,29,function(n){return true;}],
	PE_PATHFINDER: [0,1,3,29,function(n){return stats.enu[2] >= 6 && (n||skills.ranger[0] >= 40);}],
	PE_SCOUT: [0,1,30,99,function(n){return stats.enu[2] >= 8;}],
	PE_MYSTERIOUS_STRANGER: [0,1,12,29,function(n){return stats.luc[2] >= 2;}],
	PE_RANGER: [0,1,30,99,function(n){return stats.per[2] >= 6;}],
	PE_QUICK_POCKETS: [0,1,3,29,function(n){return stats.agi[2] >= 5;}],
	PE_SMOOTH_TALKER: [0,1,1,1,function(n){return 0;}],
	PE_SWIFT_LEARNER: [0,3,3,29,function(n){return stats.intl[2] >= 6;}],
	PE_ADRENALINE_RUSH: [0,1,12,29,function(n){return stats.enu[2] > 6;}],
	PE_CAUTIOUS_NATURE: [0,1,3,29,function(n){return stats.per[2] >= 6;}],
	PE_COMPREHENSION: [0,1,3,29,function(n){return stats.intl[2] < 7;}],
	PE_DEMOLITION_EXPERT: [0,1,30,99,function(n){return stats.agi[2] >= 4 && (n||skills.traps[0] >= 75);}],
	PE_GAMBLER: [0,1,3,29,function(n){return (n||skills.speed[0] >= 50);}],
	PE_GAIN_STRENGTH: [0,1,6,29,function(n){return stats.str[2] < 10;}],
	PE_GAIN_PERCEPTION: [0,1,6,29,function(n){return stats.per[2] < 10;}],
	PE_GAIN_ENDURANCE: [0,1,6,29,function(n){return stats.enu[2] < 10;}],
	PE_GAIN_CHARISMA: [0,1,6,29,function(n){return stats.cha[2] < 10;}],
	PE_GAIN_INTELLIGENCE: [0,1,6,29,function(n){return stats.intl[2] < 10;}],
	PE_GAIN_AGILITY: [0,1,6,29,function(n){return stats.agi[2] < 10;}],
	PE_GAIN_LUCK: [0,1,6,29,function(n){return stats.luc[2] < 10;}],
	PE_HARMLESS: [0,1,30,99,function(n){return (n||skills.steal[0] >= 50);}],
	PE_HERE_AND_NOW: [0,1,30,99,function(n){return true;}],
	PE_HTH_EVADE: [0,1,3,29,function(n){return stats.agi[2] >= 6 && stats.cha[2] >= 2;}],
	PE_KAMA_SUTRA_MASTER: [0,1,12,29,function(n){return stats.enu[2] >= 8 && stats.str[2] >= 8;}],
	PE_KARMA_BEACON: [0,1,1,1,function(n){return 0;}],
	PE_LIGHT_STEP: [0,1,9,29,function(n){return stats.agi[2] >= 5;}],
	PE_LIVING_ANATOMY: [0,1,12,29,function(n){return !traits.TRAIT_GOOD_NATURED[1] && stats.per[2] >= 7 && (n||skills.doctor[0] >= 80);}],
	PE_MAGNETIC_PERSONALITY: [0,1,30,99,function(n){return stats.cha[2] < 10;}],
	PE_NEGOTIATOR: [0,1,30,99,function(n){return (n||skills.trade[0] >= 200);}],
	PE_PACK_RAT: [0,1,30,99,function(n){return true;}],
	PE_PYROMANIAC: [0,1,9,29,function(n){return !traits.TRAIT_GOOD_NATURED[1] && stats.intl[2] > 3;}], // Мастер огня
	PE_QUICK_RECOVERY: [0,1,3,29,function(n){return !perk.PE_ACTION_BOY[0] && stats.agi[2] >= 5;}],
	PE_SALESMAN: [0,1,30,99,function(n){return (n||skills.trade[0] >= 240);}],
	PE_STONEWALL: [0,1,3,29,function(n){return stats.str[2] >= 6;}],
	PE_THIEF: [0,1,3,32,function(n){return true;}],
	PE_WEAPON_HANDLING: [0,1,51,99,function(n){return stats.agi[2] >= 5;}],
	PE_TERMINATOR: [0,1,15,29,function(n){return !perk.PE_SNIPER[0];}],
	PE_COMPUSTER: [0,1,30,99,function(n){return stats.intl[2] >= 8 && stats.str[2] >= 8 && (n||skills.science[0] >= 160 && skills.repair[0] >= 150);}],
	PE_OFFICER: [0,1,15,29,function(n){return stats.per[2] >= 7 && stats.intl[2] >= 7 && (n||skills.ranger[0] >= 100);}],
	PE_IRON_MAN: [0,1,1,1,function(n){return 0;}],
	PE_PRO_UDAR: [0,1,15,29,function(n){return stats.str[2] >= 10 && (n||skills.melee[0] >= 100 && skills.steel[0] >= 100)}],
	PE_NIGHT_VISION: [0,1,12,29,function(n){return stats.str[2] >= 6 && stats.intl[2] >= 8}],
	PE_MENTAL_BLOCK: [0,1,12,29,function(n){return !perk.PE_CULT_OF_PERSONALITY[0] && !perk.PE_TOUGHNESS[0]  && stats.str[2] >= 8 && stats.intl[2] >= 8}],
	PE_MUTATE: [0,1,12,29,function(n){return stats.agi[2] >= 7 && stats.cha[2] >= 1}],
	PE_EMPATHY: [0,1,3,29,function(n){return !traits.TRAIT_GOOD_NATURED[1] && stats.cha[2] >= 6;}],
	PE_PRESENCE: [0,1,1,1,function(n){return 0;}],
	PE_BOOKWORM: [0,1,15,29,function(n){return stats.cha[2] >= 7 && stats.intl[2] >= 6}],
	PE_AWARENESS: [0,1,3,29,function(n){return stats.per[2] >= 5;}],
	PE_FORTUNE_FINDER: [0,1,12,29,function(n){return stats.agi[2] >= 7 && stats.per[2] >= 6}],
	PE_FRIENDLY_FOE: [0,1,6,29,function(n){return (n||skills.light[0] >= 160) && stats.intl[2] >= 6}],
	PE_SCROUNGER: [0,1,12,29,function(n){return (n||skills.orderly[0] >= 120 && skills.doctor[0] >= 100)}],
	PE_FLOWER_CHILD: [0,1,6,29,function(n){return (n||skills.orderly[0] >= 60 && skills.doctor[0] >= 40)}],
	PE_ANIMAL_FRIEND: [0,1,15,29,function(n){return stats.agi[2] >= 6 && stats.intl[2] >= 8}],
	PE_CULT_OF_PERSONALITY: [0,2,3,29,function(n){return /*!perk.PE_TOUGHNESS[0] &&*/ !perk.PE_MENTAL_BLOCK[0] && stats.per[2] >= 7 && stats.intl[2] >= 8}],
	PE_ADD_ATAC: [0,1,9,29,function(n){return stats.agi[2] >= 7 && stats.intl[2] >= 7}],
	PE_BIVALIY: [0,1,12,29,function(n){return stats.str[2] >= 4 && stats.intl[2] >= 7}],
	PE_NAPROLOM: [0,1,3,32,function(n){return stats.intl[2] >= 5 && stats.cha[2] >= 1}],
	PE_ADW_MET: [0,1,1,1,function(n){return !traits.TRAIT_GOOD_NATURED[1] && !perk.PE_SILENT_RUNNING[0] /*&& stats.agi[2] >= 6*/ && (n||skills.thrown[0] >= 180)}],
	PE_SUPPORTER: [0,1,18,29,function(n){return (n||skills.thrown[0] >= 100) && stats.per[2] >= 7 && stats.agi[2] >= 7;}],
	PE_COMBAT_ENGINEER: [0,1,15,29,function(n){return stats.intl[2] >= 8 && stats.per[2] >= 6 && (n||skills.repair[0] >= 140 && skills.science[0] >= 140)}], 
	PE_DERMAL_IMPACT: [0,1,12,29,function(n){return stats.enu[2] >= 8 && stats.cha[2] >= 3}],
	PE_RAGE: [0,5,30,99,function(n){return !perk.PE_HARD[0];}],
	PE_DEFENCE: [0,1,12,29,function(n){return stats.per[2] >= 5 && stats.enu[2] >= 8 && !traits.TRAIT_FAST_SHOT[1] && !perk.PE_SNIPER[0]}],
	PE_ATTACK: [0,1,9,29,function(n){return stats.per[2] >= 6 && stats.cha[2] >= 2;}],
	PE_HARD: [0,5,30,99,function(n){return !perk.PE_RAGE[0];}],
	PE_VIEW: [0,1,9,29,function(n){return stats.str[2] >= 4;}]
	// PE_CE_POSITION: [0,1,30,99,function(n){return stats.str[2] == 1 && stats.per[2] == 1 && stats.intl[2] == 1 && stats.enu[2] == 1 && stats.agi[2] == 1;}],
}
var texttraits = {	// Трейты
	TRAIT_FAST_METABOLISM: ["Быстрый метаболизм", "Ваш метаболизм превышает норму. Вам дается +60 ХП, 15 к уровню лечения. Но при этом вы сильно подвержены яду и радиации."],
	TRAIT_BRUISER: ["Крушила", "Двигаетесь помедленнее, но выглядите внушительно. Меньше на 1 ОД, но зато +3 Силы. Игнорируется эффект плазмы (тики)."],
	TRAIT_SMALL_FRAME: ["Xилое тело", "Вы не в состоянии таскать тяжелые грузы, зато более проворны. Вам дается +1 Ловкость и +5% к увороту."],
	TRAIT_ONE_HANDER: ["Однорукий", "Вы отлично стреляете из любого одноручного оружия (+60 к навыку при расчетах, +7 к урону и игнор штрафа на силу). С двуручным уже есть проблемы (-40 к навыку при расчетах)"],
	TRAIT_FINESSE: ["Точность", "Точно, но слабо. +20% к шансу критической атаки. -10 к проверке на силу критического эффекта при атаке по вам. Но -5% к общему урону."],
	TRAIT_KAMIKAZE: ["Камикадзе", "Вы прете напролом. +1 Ловкость, также каждые 10 секунд восполняется 1 ОД. Если не в бою - атака отнимет на 2 ОД меньше. КБ снижается до 1. Игнорируется эффект \"Подавление\"."],
	TRAIT_HEAVY_HANDED: ["Громила", "Ваши жестокие удары причиняют огромные повреждения врагам (+25 к рукопашным повреждениям), но они почти никогда не бывают критическими (-30 к критроллу)."],
	TRAIT_FAST_SHOT: ["Быстрый стрелок", "У вас нет времени для нормального прицеливания. Атаки стрелковым и метательным оружием требуют меньше на 1 ОД."],
	TRAIT_BLOODY_MESS: ["Маньяк", "По странной случайности, все вокруг вас умирают страшной и мучительной смертью. Для них вы находите худший вариант кончины. +175% Атлетизма, но -25 Очков жизней."],
	TRAIT_JINXED: ["Дурной глаз", "Xорошая сторона дела заключается в том, что ваши враги часто ошибаются. Плохо то, что вы ошибаетесь не меньше их!"],
	TRAIT_GOOD_NATURED: ["Добродушие", "Ваши боевые навыки меньше, но зато небоевые - больше. Вы всегда думаете о защите, а не нападении (мастер-перки режут урон по вам, а не добавляют к вашему)"],
	TRAIT_CHEM_RELIANT: ["Химик", "Наркотики держатся в три раза дольше. Откаты почти мгновенные. Если появится привыкание, то оно будет длиться долго."],
	TRAIT_CHEM_RESISTANT: ["Стабильный", "Вы критически не попадаете, но и не промахиваетесь критически. Все ваши атаки очень точны (+25 бонуса к окончательной точности)."],
	TRAIT_SEX_APPEAL: ["Жидкое тело", "Вы получаете Сопротивляемость к Урону (-10), увеличение вашего Максимального веса на 50 кг. Стимуляторы и санитар не действуют в полную мощь (-20 ХП при лечении)."],
	TRAIT_SKILLED: ["Умелец", "Параметры персонажа улучшены (+2 Выносливость, Обаяние, Интеллект, Ловкость, +25 ХП). Но вы получаете меньше способностей - одно за каждые четыре уровня опытности."],
	TRAIT_NIGHT_PERSON: ["Импульсивный", "Вы очень активны, и это добавляет вам 2 ОД и 30% шанс восстановить 1 ОД при перезарядке, но вы получаете на 3 Очков умений меньше за каждый уровень. Также +20% к Метательному."]
}
var textperks = {	// Перки
	PE_BONUS_HTH_ATTACKS: ["Доп. рукопашн. атаки", "Вы знакомы с тайными боевыми искусствами востока, и очень быстро дерётесь. Ваши рукопашные атаки занимают на 1 Очко Действия меньше."],
	PE_BONUS_HTH_DAMAGE: ["Доп. рукопашн. повр.", "Большой опыт рукопашных схваток научил вас уделять внимание наносимым повреждениям. За каждый уровень этой способности вы получаете +3 к Рукопашным повреждениям."],
	PE_BONUS_MOVE: ["Бонус движения", "За каждый уровень этой способности, раз в 10 секунд вы можете восполнить 1 Очко Действия. При использовании стимулятора у вас есть шанс восстановить 1 ОД."],
	PE_BONUS_RANGED_DAMAGE: ["Бонус точности", "Ваши тренировки в обращении со стрелковым оружием сделали свое дело. Каждая ваша пуля наносит на 5 единиц урона больше."],
	PE_BONUS_RATE_OF_FIRE: ["Бонус скорости", "Вы нажимаете на курок немного быстрее. Время, расходуемое на атаку меньше на 1 ОД. Данная способность не распространяется на класс Инженерного оружия."],
	PE_EARLIER_SEQUENCE: ["Быстрая реакция", "Враги всегда будут ошибаться, ведь прав тот, кто выстрелил первым. Поэтому ваш Порядок действий увеличивается на 4 с каждым уровнем этой способности."],
	PE_FASTER_HEALING: ["Быстрое лечение", "Вы получаете +5 к уровню лечения, таким образом, ваши раны быстрее заживают. Суперстимуляторы добавляют вам на 15 ХП больше при лечении."],
	PE_MORE_CRITICALS: ["Больше крит. атак", "С каждым уровнем этой способности, вероятность нанесения Критических повреждений противнику увеличена на 8%."],
	PE_NIGHT_VISION: ["Иммунитет", "У вас очень высокий иммунитет. Каждый выстрел наносит вам на 10 Урона меньше."],
	PE_PRESENCE: ["Охранник", "Вы находитесь в своем городе, а дома и стены помогают. Вы получаете +4% ко всем Резистам."],
	PE_RAD_RESISTANCE: ["Уст. к радиации", "Вы лучше переносите сильное воздействие радиации на организм. Каждый уровень этой способности добавляет +15% к Устойчивости к радиации."],
	PE_TOUGHNESS: ["Крутизна", "Крутизна позволяет чувствовать себя под защитой. За каждый уровень этой способности вы получаете +8% к Резисту от нормы, огня, взрыва и Сопротивляемость урона от нормы на 2 единицы."],
	PE_STRONG_BACK: ["Переноска", "Способность таскать тяжелые грузы - далеко не лишняя в условиях пустыни. Прибавляет 100 кг к Максимальному весу и +35% к Атлетизму."],
	PE_SHARPSHOOTER: ["Меткость", "Искусство попадать в цель с большого расстояния. При определении дистанции вы получаете +2 к Восприятию и +6 к Дальности обзора."],
	PE_SILENT_RUNNING: ["Бесшумный бег", "Теперь вы будете двигаться быстро, не издавая больше шума. Ранее это было совершенно неосуществимо в силу технических причин. Несовместим с перком - Снайпер."],
	PE_SURVIVALIST: ["Исследователь", "Привычка к долгой жизни в пустыне выработала у вас невероятную живучесть. С каждым уровнем этой способности вы получаете +25% к навыку Скиталец."],
	PE_MASTER_TRADER: ["Торговля", "Вы стараетесь покупать товары по низким ценам, торгуясь до изнеможения. Вам даётся 25% скидка при покупке товаров."],
	PE_EDUCATED: ["Образование", "У вас отличное образование. Вы получаете +50 очков распределения."],
	PE_HEALER: ["Лечение", "Излечение страждущих легче дается вам с этой способностью. Вы получаете +50 ХП бонуса при использовании санитара, и +5 к суперстимулятору."],
	PE_FORTUNE_FINDER: ["Воодушевление", "Годы игры в \"Ножики\" укрепили ваше здоровье (+25 к Очкам жизней). Каждый Уворот от вражеской атаки прибавляет вам жизненной энергии (+25 к Очкам жизней)."],
	PE_BETTER_CRITICALS: ["Лучшие крит. атаки", "Причиняемые вашему противнику Критические удары более смертоносны. Вы получаете (10+Удача)% бонус для возможных Крит. повреждений, хотя Вероятность их нанесения не увеличивается."],
	PE_EMPATHY: ["Двуличный", "Люди даже не подозревают, что может скрывать приятная внешность. Наносимые вами повреждения увеличиваются на 6 едениц."],
	PE_SLAYER: ["Дробила", "Все атаки ближнего боя (рукопашная и холодное оружие) - критические (100% шанс на критический урон в ближнем бою). Шанс избежать критического попадания - 10%."],
	PE_SNIPER: ["Снайпер", "Любое попадание в цель из оружия может стать Критическим ударом. Шанс нанести Крит. урон по формуле (УД*3). -1 ОД на прицельный выстрел. +20 к Классу Брони."],
	PE_SILENT_DEATH: ["Наемный убийца", "Когда вы крадетесь и бьете противника в спину, вы будете наносить двойные Повреждения при атаке Без оружия."],
	PE_ACTION_BOY: ["Человек действия", "Человек действия все операции совершает бегом, наподобие новобранца. Это придает ему дополнительных 2 Очка Действия, которые можно использовать в любых целях."],
	PE_MENTAL_BLOCK: ["Стойкость", "Вы очень сильны и устойчивы. Вы получаете +25 ХП и +5% ко всем Резистам. Нельзя взять Отличника или Крутизну."],
	PE_LIFEGIVER: ["Сила жизни", "Вы получаете дополнительно +60 Очков жизней. Xоть это и немного, всякое случается, а вдруг пригодится."],
	PE_DODGER: ["Увертливость", "Во время боя в вас будет гораздо сложнее попасть. Независимо от одетых на вас в этот момент доспехов, вы получаете +5 к Классу Брони и 10% к Увороту."],
	PE_SNAKEATER: ["Змееглот", "Любые отравляющие вещества действуют на вас крайне ослаблено. Каждый уровень этой способности добавляет +25% к Устойчивости к яду."],
	PE_MR_FIXIT: ["Самоделкин", "Данная способность дает вам бонус к навыкам Наука и Ремонт на 20%, а также возможность определять количество поломок амуниции."],
	PE_MEDIC: ["Медик", "Знание медицины дает вам бонус к навыкам Санитар и Доктор на 10%. Хорошее лечение - залог успеха."],
	PE_MASTER_THIEF: ["Вор-профессионал", "Вы стали профессионалом своего дела. +40% к навыкам Воровство и Взлом замков."],
	PE_SPEAKER: ["Болтливость", "Болтун - находка для врага! С каждым уровнем этой способности вы получаете +10% к навыку Красноречие."],
	PE_HEAVE_HO: ["Метание", "При расчете максимальной дальности броска, Сила персонажа не учитывается. Урон от Метательного оружия увеличен на 15%."],
	PE_FRIENDLY_FOE: ["Фанат дробовиков", "Вас с детства тянет к дробовикам (+30% к Легкому оружию, +20% к Ремонту). При выстреле с дробовика сопротивление к норме у цели -30, от очереди -5."],
	PE_PICKPOCKET: ["Карманник", "Ваши способности шарить по чужим карманам увеличиваются. Теперь вы можете не обращать внимание на направление взгляда и размер одежды вашего клиента."],
	PE_GHOST: ["Привидение", "Вы научились быть более незаметным, словно призрак. Вы восполняете 1 ОД раз в 10 секунд. Также получаете +40% к Скрытности."],
	PE_CULT_OF_PERSONALITY: ["Отличник", "За каждый уровень этой способности вы получаете +8% к Резисту от лазера, плазмы, электричества. Дополнительно вы получаете +15 ХП."],
	PE_SCROUNGER: ["Полевой медик", "Вы обладаете огромными знаниями по медицине. +20% к навыку Санитар, +30% к навыку Доктор. +3 Удачи при лечении навыком Санитар."],
	PE_EXPLORER: ["Непоседа", "Смысл жизни непоседы заключается в поисках новых, интересных мест. Ваши шансы найти нечто необычное увеличиваются, как и Очки жизней (Сила*5)."],
	PE_FLOWER_CHILD: ["Полевой санитар", "Восстановление навыка Санитар меньше на 4 секунды. При лечении санитаром добавляются (ИН+УД)*2 дополнительные ХП, а также можно восстановить все ХП с шансом (Удача*4)."],
	PE_PATHFINDER: ["Следопыт", "Следопыт всегда находит кратчайший путь до места назначения. С этим бонусом время ваших переходов по Глобальной Карте уменьшено на 25%."],
	PE_ANIMAL_FRIEND: ["Удачный промах", "При уклонении (перком или если шанс попасть по вам выше 70%), есть шанс восполнить все свои ОД (ЛВ/2+ОБ+ВС)%. Если вероятность не выпала, то восстановите 1 ОД."],
	PE_SCOUT: ["Скаут", "Увеличивает на одну клетку радиус трекинга и открытия черных клеток Глобальной Карты. Увеличивает шанс найти уникальную локацию."],
	PE_MYSTERIOUS_STRANGER: ["Ветеран", "В течении жизни вы прошли многое на своем пути и благодаря опыту получаете +35 ХП. Ваша меткость при прицельной стрельбе максимальная."],
	PE_RANGER: ["Рейнджер", "Ваш навык Скиталец повышается на 15%. Увеличивается вероятность избежать встреч в пустыне или наоборот - отыскать там что-то полезное."],
	PE_QUICK_POCKETS: ["Оптимизация", "Вам удалось рассовать свои вещи по карманам так, чтобы они всегда были под рукой. Теперь на перезарядку оружия тратится на 1 Очко Действия меньше."],
	PE_SMOOTH_TALKER: ["Опыт торговли", "Ваш опыт торговли (0-300). При малом опыте вы все равно будете покупать дорого. Опыт торговли не может превышать ваш навык Торговли."],
	PE_SWIFT_LEARNER: ["Самоучка", "Вы можете извлекать из всего большую пользу, чем кто-либо другой. С каждым уровнем этой способности вы получаете на 15% больше опыта."],
	PE_TAG: ["Умение", "Взяв данный бонус, вы можете выбрать какое-либо Умение дополнительно. Оно будет повышаться примерно в 2 раза быстрее."],
	PE_MUTATE: ["Мутация", "Радиация пустыни изменила вас! Вы получаете +30 Очков жизней и +60 очков распределения."],
	PE_BOOKWORM: ["Регенерация", "Ваш обмен веществ в несколько раз быстрее нормы. Вы восстанавливаете ваши Очки здоровья в боевом режиме. +10 к Уровню лечения."],
	PE_AWARENESS: ["Осведомленность", "Вы замечаете больше деталей в окружающем вас мире и людях. Можно увидеть количество Очков здоровья у противника и тип его оружия."],
	PE_BIVALIY: ["Крепкий Орешек", "Вы получаете возможность ослабить по вам Крит. повреждения, но не Вероятность избежать этого. Минус к критроллу по формуле: -(ВС*5). Крит. урон по вам режется как при 10 удачи."],
	PE_RAGE: ["Зарядка", "Привычка заниматься зарядкой по утрам, выработалась у вас давно. С каждым уровнем этой способности ваши Очки здоровья возрастают на 4 единицы."],
	PE_DEFENCE: ["Рефлексы", "Ваши рефлексы повышены и неприцельно вы стреляете быстрее. -1 ОД на не прицельный выстрел. Нельзя взять Снайпера и Быстрого стрелка. Не работает с инженерным оружием."],
	PE_ATTACK: ["Настойчивый", "Ваши промахи восстанавливают 1 ОД, затраченных на атаку."],
	PE_HARD: ["Закалка", "Ваш организм подготовлен к быстрому лечению в сложных условиях. С каждым уровнем этой способности ваш Уровень лечения возрастает на 4 единицы."],
	PE_VIEW: ["Репликант", "Репликация снимает все эффекты, а также становится бесплатной."],
	PE_ADRENALINE_RUSH: ["Кровопийца", "Обстоятельно изучив кровь, вы получаете +35 ХП. Также каждая атака по цели восстановит (4+ВС) Очков здоровья. При использовании навыка Санитар, вы снимаете с себя эффект Нагрева."],
	PE_CAUTIOUS_NATURE: ["Бдительность", "В пустыне вы часто смотрите по сторонам. Ваш Обзор увеличивается, а при определении положения на местности, ваше Восприятие увеличивается на 3 единицы."],
	PE_COMPREHENSION: ["Наблюдательность", "При чтении вы обращаете особенное внимание на мелкие детали (+1 Интеллект). Читая книгу, вы получаете +1% к случайному Навыку, а также +200 опыта."],
	PE_DEMOLITION_EXPERT: ["Эксперт подрывник", "В обращении со взрывчаткой, вы настоящий профессионал. Ваши заряды всегда детонируют вовремя, имеют большой радиус и наносят больше урона."],
	PE_GAMBLER: ["Атлет", "Выше! Быстрее! Сильнее! Усиленные тренировки не проходят даром. +50% к навыку Атлетизм, а также +20 ХП."],
	PE_GAIN_STRENGTH: ["Получить силу", "Этот бонус повышает на одно очко вашу Силу и добавляет +20 Очков жизней."],
	PE_GAIN_PERCEPTION: ["Получить восприятие", "Этот бонус повышает на одно очко ваше Восприятие и добавляет +20 Очков жизней."],
	PE_GAIN_ENDURANCE: ["Получить выносливость", "Этот бонус повышает на одно очко вашу Выносливость и добавляет +20 Очков жизней."],
	PE_GAIN_CHARISMA: ["Получить обаяние", "Этот бонус повышает на одно очко ваше Обаяние и добавляет +20 Очков жизней."],
	PE_GAIN_INTELLIGENCE: ["Получить интеллект", "Этот бонус повышает на одно очко ваш Интеллект и добавляет +20 Очков жизней."],
	PE_GAIN_AGILITY: ["Получить ловкость", "Этот бонус повышает на одно очко вашу Ловкость и добавляет +20 Очков жизней."],
	PE_GAIN_LUCK: ["Получить удачу", "Этот бонус повышает на одно очко вашу Удачу и добавляет +20 Очков жизней."],
	PE_HARMLESS: ["Безвредность", "Ваш невинный вид позволяет вам успешно красть у людей вещи. Вы получаете +40% к навыку Воровство."],
	PE_HERE_AND_NOW: ["Специалист", "Ваш лимит изученных знаний увеличивается на 500. Кроме того, вы сразу получаете еще один Уровень опытности."],
	PE_HTH_EVADE: ["Верткость", "Вы чувствуете, когда надо дернуться с места, природная ловкость помогает вам в этом. Процент Уклонения от атаки увеличивается на: (МаксОД/4)+(ТекущОД/2)."],
	PE_KAMA_SUTRA_MASTER: ["Спортсмен", "Занятия активными видами спорта не прошли даром. Вы получаете +45 Очков жизней и +7 к Классу Брони."],
	PE_KARMA_BEACON: ["Исполнительность", "Вы выполнили ежедневное задание и получаете бонус 20 единиц к Очкам жизней."],
	PE_LIGHT_STEP: ["Легкие шаги", "Вы ловки, удачливы и всегда настороже. Этот бонус вдвое уменьшает шансы на то, что поставленная на вас ловушка сработает. Резист к взрыву увеличен на +25%."],
	PE_LIVING_ANATOMY: ["Анатомия жизни", "Вы хорошо представляете себе внутреннее строение живых существ, их силы и слабости. При атаке вы наносите на 10 Урона больше. Кроме того, вы получаете +20% к навыку Доктор."],
	PE_MAGNETIC_PERSONALITY: ["Привлекательность", "Игрок может водить с собой в группе дополнительно 2-х человек без проверки на Обаяние, но не забывайте, что больше пяти - это уже толпа."],
	PE_NEGOTIATOR: ["Негоциант", "С этим умением вы можете попробовать договориться до чего угодно, имея бонус 20% к навыкам Торговля и Красноречие."],
	PE_PACK_RAT: ["Запаковка", "Вы научились компактно раскладывать вещи в инвентаре. +22 кг к Максимальному весу."],
	PE_PYROMANIAC: ["Пироманьяк", "Вы отлично управляетесь с огнем. Если тип повреждений - огонь, то: +30 бонусного урона, +12 конечного урона. Значительно усиливает эффекты поджигания."],
	PE_QUICK_RECOVERY: ["Прыгучесть", "Вы очень быстро встаете после того, как вас собьют с ног. Реакция и гибкость добавляют вам 1 Очко Действия. Несовместим с Человеком Действия."],
	PE_SALESMAN: ["Продажа", "Вы умеете отлично продавать и покупать. С этой способностью вы на 40% повышаете свой навык Торговля."],
	PE_STONEWALL: ["Человек-глыба", "Ваш шанс избежать Критическое попадание увеличивается на 40% (не работает с Терминатором). Вероятность того, что вас собьют с ног, уменьшается вдвое."],
	PE_THIEF: ["Вор", "В ваших жилах течет кровь истинного вора. Вы повышаете на 25% свои навыки Взлом замков, Воровство, Ловушки, а также на 10% навык Скрытность."],
	PE_WEAPON_HANDLING: ["Обращение с оружием", "Вы можете носить и использовать оружие мощнее, чем остальные. Для этой цели ваша Сила считается на 3 единицы больше."],
	PE_VAULT_CITY_TRAINING: ["Стажировка в Городе-Убежище", "Вы прошли курс обучения медицине у лучших специалистов Города-Убежище."],
	PE_EXPERT_EXCREMENT: ["Спец по уборке экскрементов", "Вы научились убирать дерьмо за браминами лучше, чем кто-либо."],
	PE_JINXED_II: ["Дурной глаз", "Xорошая сторона дела заключается в том, что враги вокруг вас часто ошибаются. Плохо то, что вы ошибаетесь не меньше их!"],
	PE_TERMINATOR: ["Терминатор", "Вы не знаете, что такое Переломы конечностей, Слепота и Нокдауны! Все Критические эффекты игнорируются в зависимости от ваших Силы и Выносливости (СЛ+ВН)*5."],
	PE_IRON_MAN: ["Железный человек", "С этой способностью Вы получаете гораздо меньше урона."],
	PE_PRO_UDAR: ["Проникающий удар", "От мощных ударов противника не спасет даже толстый слой брони. Большая часть защитных свойств любой экипировки игнорируется, если у вас в руках что-то есть."],
	PE_ADD_ATAC: ["Дополнительные атаки", "Отдача от оружия никогда не была для вас проблемой. При выстреле с вероятностью в 20% есть шанс восстановить 2 Очка Действия."],
	PE_NAPROLOM: ["Бывалый", "Вы знаток оружия. +10% к навыку Легкое оружие, Тяжелое оружие, Энергетическое оружие. +15% к навыку Рукопашная и Холодное оружие."],
	PE_ADW_MET: ["Эксперт-метатель", "Вы прекрасно обращаетесь со всеми видами Метательного оружия, что позволяет наносить противнику на 35% больше повреждений. Не совместим с Бесшумным Бегом."],
	PE_GECKO_SKINNING: ["Скорняк", "Вы освоили принципы разделки ящеров и легко обдираете их, чтобы получить ценные шкуры."],
	PE_VAULT_CITY_INOCULATIONS: ["Прививки из Города-Убежище", "Вы получили 10 процентов сопротивляемости к отравлению и радиации."],
	PE_DERMAL_IMPACT: ["Живчик", "Вы имеете повышенную живучесть (+40 ХП) и природное лечение (+7 к Уровню лечения)."],
	PE_DERMAL_IMPACT_ENH: ["Улучшенная подкожная броня", "Вы получили усиленную защиту от атак физического характера."],
	PE_PHOENIX_IMPLANTS: ["Подкожная защита", "Вы чуть реже подвергаетесь ущербу от энергетических атак."],
	PE_PHOENIX_IMPLANTS_ENH: ["Улучшенная подкожная защита", "Вы имеете большую дополнительную защиту против энергетических атак."],
	PE_NCR_PERCEPTION: ["Операция доктора Клауса: Восприятие", "После операции, проведенной Доктором Клаусом из НКР, ваш шанс крита +4%."],
	PE_NCR_ENDURANCE: ["Операция доктора Клауса: Сила", "После операции, проведенной Доктором Клаусом из НКР, ваша антикрит +4%."],
	PE_NCR_BARTER: ["Секреты мастерства: Бартер", "Вы смогли многому научиться у торговца в Дене. Ваш навык Торговли повышен на 5%."],
	PE_NCR_REPAIR: ["Секреты мастерства: Ремонт", "Механик Модока ознакомил вас с новой технологией починки оружия. Ваш навык Ремонта повышен на 5%."],
	PE_COMPUSTER: ["Золотые руки", "Вам больше не понадобится установка для создания некоторых вещей. Открывает новые возможности в сфере крафта."],
	PE_DRIVER: ["Водитель", "Вы настолько освоили автомобиль, что можете возить в нём кого угодно."],
	PE_OFFICER: ["Офицер", "Вы умеете управлять большим отрядом бойцов. Вы получаете +30 ХП, а также срез урона на 5%. Используется выносливость при расчете группы."],
	PE_BISNES_RENO: ["Смотрящий", "Вы теперь один из смотрящих за бизнесом в Нью-Рено."],
	PE_IMP1: ["Боевой имплантант", "В вас вживлен экспериментальный имплантант. Ваши боевые навыки увеличены."],
	PE_IMP2: ["Медицинский имплантант", "В вас вживлен экспериментальный имплантант. Ваши познания в медицине увеличены."],
	PE_IMP3: ["Вспомогательный имплант", "В вас вживлен экспериментальный имплантант. Ваши вспомогательные функции увеличены."],
	PE_COMBAT_ENGINEER: ["Боевой Инженер", "Вы настолько преуспели в инженерном деле, что теперь можете применять эти навыки в бою. Вы получаете +20% к навыку Ремонт и вам доступны особые виды вооружения."],
	PE_CHAT_OPERATOR: ["Оператор чата", "Вы всё видите и слышите, ведь вы - оператор чата."],
	PE_DA_NORMAL: ["Мастер урона", "Вы освоили огнестрельное оружие, и наносите на 2% больше Урона по цели с каждым уровнем мастера. Добродушный -2% повреждений."],
	PE_DA_LASER: ["Мастер лазера", "Вы освоили лазерное оружие, и наносите на 1% больше Урона по цели с каждым уровнем мастера. Добродушный -2% повреждений."],
	PE_DA_FIRE: ["Мастер огня", "Вы освоили обращение с огнем, и получаете +2 к тикам с каждым уровнем мастера. Добродушный -2% повреждений."],
	PE_DA_PLASMA: ["Мастер плазмы", "Вы освоили плазменное оружие, и получаете +5 к тикам с каждым уровнем мастера. Добродушный -2% повреждений."],
	PE_DA_ELECTRO: ["Мастер электричества", "Вы освоили электро-оружие, и получаете шанс 4% уменьшить ОД врага на 1 единицу с каждым уровнем мастера. Добродушный -2% повреждений."],
	PE_DA_EMP: ["Мастер импульса", "Вы настолько освоили своё оружие, что наносите на 3% больше Урона с каждым уровнем этой способности."],
	PE_DA_EXPLODE: ["Мастер взрыва", "Вы освоили все виды взрывов, и получаете шанс 10% увеличить Радиус взрыва на 1 единицу с каждым уровнем мастера. Добродушный -2% повреждений."],
	PE_SUPPORTER: ["Огневая поддержка", "Стрельба очередями \"Подавляет\" врага. Увеличен радиус Дымовой и Газовой завесы, и область поджигания Кокт. \"Молотова\". Также вы получате +20% к навыку Метательное."]
}
var perkup = {
	PE_AWARENESS:function(){         /*Examining a target shows hitpoints, weapon and ammunition count*/
	},
	PE_BONUS_HTH_ATTACKS:function(){ /*-1 Ap on HtH attacks*/
	},
	PE_BONUS_HTH_DAMAGE:function(){
	feat.mdmg[2]+= 3;
	},
	PE_BONUS_MOVE:function(){	// вотановление 2 од раз в 10 сек
	//ST_MAX_MOVE_AP+= 2
	},
	PE_BONUS_RANGED_DAMAGE:function(){    /*In calc damage +3 per range*/
	},
	PE_BONUS_RATE_OF_FIRE:function(){     /*-1 Ap on ranged attacks*/
	},
	PE_EARLIER_SEQUENCE:function(){
	feat.proc[2]+= 4;
	},
	PE_FASTER_HEALING:function(){
	feat.levh[2]+= 5;
	},
	PE_MORE_CRITICALS:function(){
	feat.crit[2]+= 8;//Math.floor(stats.luc[2]/2+3);
	},
	PE_RAD_RESISTANCE:function(){
	feat.srad[2]+= 15;
	},
	PE_TOUGHNESS:function(){
	/*ST_NORMAL_ABSORB+= 2
	ST_NORMAL_RESIST+= 8
	ST_FIRE_RESIST+= 8
	ST_EXPLODE_RESIST+= 8*/
	resist.normal.asb[2]+=2;
	resist.normal.res[2]+=10;
	resist.fire.res[2]+=8;
	resist.explode.res[2]+=8;
	},
	PE_STRONG_BACK:function(){
	feat.maxl[2]+= 100;
	skills.speed[2]+= 35;
	},
	PE_SHARPSHOOTER:function(){
	feat.oview[2]+= 6; /*+2 perception on ranged attack*/ 
	},
	PE_SILENT_RUNNING:function(){     /*No steal off while running*/
	},
	PE_SURVIVALIST:function(){
	skills.ranger[2]+= 25
	},
	PE_MASTER_TRADER:function(){     /*Barter k is zero on buy*/
	},
	PE_EDUCATED:function(){
	skills.points+= 50 /*+2 skill points per range*/ 
	},
	PE_HEALER:function(){     /*Additional Hp bonus in scripts*/
	},
	PE_BETTER_CRITICALS:function(){
	//ST_MAX_CRITICAL+= stats.luc[2]+10
	},
	PE_SLAYER:function(){   
	//ST_MELEE_DAMAGE, += 10],          /*All unarmed and melee attacks is critical*/
	},
	PE_SNIPER:function(){/*All gun attacks is critical*/
	feat.crit[2]+= stats.luc[2]*3
	feat.armc[2]+= 20
	},
	PE_SILENT_DEATH:function(){ /*Attack from sneak from back x2 damage*/
	},
	PE_ACTION_BOY:function(){
	feat.apoi[2]+= 2
	},
	PE_LIFEGIVER:function(){
	feat.live[2]+= 60;
	},
	PE_DODGER:function(){
	feat.armc[2]+= 5;
	feat.dodge[2]+= 10;
	},
	PE_SNAKEATER:function(){
	feat.stox[2]+= 25
	},
	PE_MR_FIXIT:function(){
	skills.repair[2]+= 20
	skills.science[2]+= 20
	},
	PE_MEDIC:function(){
	skills.orderly[2]+= 10
	skills.doctor[2]+= 10
	},
	PE_MASTER_THIEF:function(){
	skills.steal[2]+= 40
	skills.hack[2]+= 40
	},
	PE_SPEAKER:function(){
	skills.oratory[2]+= 10
	},
	PE_HEAVE_HO:function(){   /*+2 strength for throwing weapon*/
	},
	PE_PICKPOCKET:function(){ /*Ignore size and facing while stealing*/
	},
	PE_GHOST:function(){      /*+15% sneak*/
	skills.sneak[2]+= 40
	},
	PE_EXPLORER:function(){   /*Higher chance of finding special places and people in random encounters*/
	feat.live[2]+= stats.str[2]*5
	},
	PE_PATHFINDER:function(){ /*+25% speed on global per range*/
	},
	PE_SCOUT:function(){      /*This will increase the amount of the map you can see while exploring and make finding the special random encounters a little easier.*/
	//feat.live[2]+= 15
	// ST_HEALING_RATE+= 2
	},
	PE_RANGER:function(){
	skills.ranger[2]+= 15 /*Fewer hostile random encounters*/ 
	},
	PE_QUICK_POCKETS:function(){     /*Inventory items move ap cost div 2*/
	},
	PE_SMOOTH_TALKER:function(){     /*+2 intellect on dialogs checks*/
	},
	PE_SWIFT_LEARNER:function(){     /*+15% add experience per range*/
	},
	PE_ADRENALINE_RUSH:function(){   /*+1 strength on <50% hp in battle*/
	feat.live[2]+= 35
	},
	PE_CAUTIOUS_NATURE:function(){   /*+3 perception on encounter generate*/
	feat.oview[2]+= 3;
	//ST_BONUS_LOOK+= 3
	},
	PE_COMPREHENSION:function(){     /*50% more points on books reading*/
	stats.intl[0]++;
	},
	PE_DEMOLITION_EXPERT:function(){ /*Used in explosion script*/
	},
	PE_GAMBLER:function(){
	skills.speed[2]+= 50;
	feat.live[2]+= 20;
	},
	PE_GAIN_STRENGTH:function(){
	stats.str[1]++;
	feat.live[2]+= 20;
	//  ST_UNSPENT_SKILL_POINTS+= 15
	},
	PE_GAIN_PERCEPTION:function(){
	stats.per[1]++;
	feat.live[2]+= 20;
	// ST_UNSPENT_SKILL_POINTS+= 15
	},
	PE_GAIN_ENDURANCE:function(){
	stats.enu[1]++;
	feat.live[2]+= 20;
	// ST_UNSPENT_SKILL_POINTS+= 15
	},
	PE_GAIN_CHARISMA:function(){
	stats.cha[1]++;
	feat.live[2]+= 20;
	//  ST_UNSPENT_SKILL_POINTS+= 15
	},
	PE_GAIN_INTELLIGENCE:function(){
	stats.intl[1]++;
	feat.live[2]+= 20;
	// ST_UNSPENT_SKILL_POINTS+= 15
	},
	PE_GAIN_AGILITY:function(){
	stats.agi[1]++;
	feat.live[2]+= 20;
	// ST_UNSPENT_SKILL_POINTS+= 15
	},
	PE_GAIN_LUCK:function(){
	stats.luc[1]++;
	feat.live[2]+= 20;
	// ST_UNSPENT_SKILL_POINTS+= 15
	},
	PE_HARMLESS:function(){
	skills.steal[2]+= 40;
	},
	PE_HERE_AND_NOW:function(){      /*+1 level*/
		levelup();
	//cr.StatBase[ ST_EXPERIENCE ] += NextLevelNeedExp( cr ) - cr.ParamBase[ ST_EXPERIENCE ];
	},
	PE_HTH_EVADE:function(){         /*+3 ac per 1 ap on end turn; (МаксОД/4)+(ТекущиеОД/2)*/ 	
	},
	PE_KAMA_SUTRA_MASTER:function(){ /*In dialogs*/
	feat.live[2]+= 45;
	feat.armc[2]+= 7;
	},
	PE_KARMA_BEACON:function(){      /*Karma x2*/
	feat.live[2]+= 20;
	},
	PE_LIGHT_STEP:function(){        /*50% less chance of setting off a trap*/
	resist.explode.res[2]+=25; //резист от взрыва
	},
	PE_LIVING_ANATOMY:function(){
	skills.doctor[2]+= 20; /*Also +20 dmg*/ 
	},
	PE_MAGNETIC_PERSONALITY:function(){     /*+2 people in group*/
	},
	PE_NEGOTIATOR:function(){
	skills.oratory[2]+= 20;
	skills.trade[2]+= 20;
	},
	PE_PACK_RAT:function(){
	feat.maxl[2]+= 22;	// WTF??? LBS_TO_GRAMM( 50 )
	},
	PE_PYROMANIAC:function(){     /*+30 damage on fire attack*/
	},
	PE_QUICK_RECOVERY:function(){ /* 1 ap for stending up*/
	//  feat.live[2]+= 15
	feat.apoi[2]+= 1;
	},
	PE_SALESMAN:function(){
	skills.trade[2]+= 40;
	},
	PE_STONEWALL:function(){     /*Reduction in chance to be knocked down during combat*/
	},
	PE_THIEF:function(){
	skills.sneak[2]+= 10;
	skills.hack[2]+= 25;
	skills.steal[2]+= 25;
	skills.traps[2]+= 25;
	},
	PE_WEAPON_HANDLING:function(){     /*In use weapon strength +3*/
	},
	PE_NCR_PERCEPTION:function(){
	stats.per[1]++;
	},
	PE_NCR_ENDURANCE:function(){
	//  ST_STRENGTH++
	},
	PE_NCR_BARTER:function(){
	skills.trade[2]+= 5;
	},
	PE_NCR_REPAIR:function(){
	skills.repair[2]+= 5;
	},
	PE_TERMINATOR:function(){     /*Examining a target shows hitpoints, weapon and ammunition count*/
	},
	PE_COMPUSTER:function(){
	},
	PE_OFFICER:function(){
	feat.live[2]+= 30;
	},
	PE_IRON_MAN:function(){    
	},    
	PE_PRO_UDAR:function(){
	},
	PE_NIGHT_VISION:function(){
	},
	PE_MENTAL_BLOCK:function(){	// РЕЗИСТЫ!!! В атаку бля!
	feat.live[2]+= 25;
	resist.normal.res[2]+=5;
	resist.laser.res[2]+=5;
	resist.fire.res[2]+=5;
	resist.plasma.res[2]+=5;
	resist.explode.res[2]+=5;
	resist.electro.res[2]+=5;
	},
	PE_MUTATE:function(){
	feat.live[2]+= 30;
	skills.points+= 60;
	},
	PE_EMPATHY:function(){
	},
	PE_PRESENCE:function(){	
	resist.normal.res[2]+=4;
	resist.laser.res[2]+=4;
	resist.fire.res[2]+=4;
	resist.plasma.res[2]+=4;
	resist.explode.res[2]+=4;
	resist.electro.res[2]+=4;
	},
	PE_BOOKWORM:function(){
	feat.levh[2]+= 10;
	},
	PE_FORTUNE_FINDER:function(){
	feat.live[2]+= 25;
	},
	PE_FRIENDLY_FOE:function(){
	skills.light[2]+= 30;
	skills.repair[2]+= 20;
	},
	PE_SCROUNGER:function(){
	skills.orderly[2]+= 20;
	skills.doctor[2]+= 30;
	},
	PE_FLOWER_CHILD:function(){
	},
	PE_ANIMAL_FRIEND:function(){
	},
	PE_CULT_OF_PERSONALITY:function(){
	feat.live[2]+= 15;
	resist.plasma.res[2]+=6;
	resist.electro.res[2]+=6;
	resist.laser.res[2]+=6;
	},
	PE_SUPPORTER:function(){
	skills.thrown[2]+= 20;
	},
	PE_ADD_ATAC:function(){
	},
	PE_BIVALIY:function(){
	},
	PE_NAPROLOM:function(){
	skills.light[2]+= 10;
	skills.heavy[2]+= 10;
	skills.energy[2]+= 10;
	skills.melee[2]+= 15;
	skills.steel[2]+= 15;
	},  
	PE_ADW_MET:function(){
	},
	PE_COMBAT_ENGINEER:function(){
	skills.repair[2]+= 20;
	},
	PE_CE_POSITION:function(){
	},
	PE_CE_POSITION_L:function(){
	},
	PE_DERMAL_IMPACT:function(){
	feat.live[2]+= 40;
	feat.levh[2]+= 7;
	},
	PE_RAGE:function(){
	feat.live[2]+= 4;
	},
	PE_DEFENCE:function(){ // -1 од на неприцельный выстрел
	},
	PE_ATTACK:function(){
	},
	PE_HARD:function(){
	feat.levh[2]+= 4;
	},
	PE_VIEW:function(){
	},
	PE_RATING:function(){
	},
	PE_MYSTERIOUS_STRANGER:function(){
	feat.live[2] += 35;
	}
}
