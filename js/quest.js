var quest = {	// квест, уровней квеста, мин уровень взятия, максимальный уровень взятия, [требования])

	medals:[0,200,1,99,function(){return true;}],
	ranger_smile:[0,1,1,99,function(){return skills.ranger[0]<60;}],
	ranger_slim:[0,1,1,99,function(){return true;}],
	melee_klam:[0,1,1,99,function(){return true;}],
	hp_den:[0,1,1,99,function(){return true;}],
	light_den:[0,1,1,99,function(){return skills.light[0]>=80 && skills.light[0]<120;}],
	overviewq:[0,1,1,99,function(){return true;}],
	quest_arroyo:[0,1,1,99,function(){return true;}],
	per_ncr:[0,1,30,99,function(){return charp.level >= 30;}],
	cha_vc:[0,1,1,99,function(){return stats.CHA[2]<4 && skills.oratory[0]>79;}],
	aс_12:[0,1,1,99,function(){return true;}],
	ap_vc:[0,1,1,99,function(){return true;}],
	ap_hack:[0,1,1,99,function(){return skills.hack[0]>199;}],
	heavy_bh:[0,1,1,99,function(){return skills.ranger[0]>99;}],
	skill_geck:[0,1,1,99,function(){return true;}],
	trade_den:[0,1,1,99,function(){return true;}],
	trade_mod:[0,1,1,99,function(){return true;}],
	trade_up:[0,1,1,99,function(){return skills.trade[0]<40;}],
	steel_reno:[0,1,1,99,function(){return true;}],
	valerie_letter:[0,1,1,99,function(){return true;}],
	drayfild:[0,1,21,99,function(){return true;}],
	imp_battle:[0,1,1,99,function(){return true;}],
	imp_medical:[0,1,1,99,function(){return true;}],
	imp_auxiliary:[0,1,1,99,function(){return true;}],
	PE_MA_SKIT:[0,1,1,99,function(){return true;}],
	PE_MA_REM:[0,1,1,99,function(){return true;}],
	PE_MA_FIX:[0,1,1,99,function(){return true;}],
	PE_MA_AID:[0,1,1,99,function(){return true;}]
}

var textquest = {	// Квесты
	medals:["Медали","Делая различные квесты и убивая гуманоидов и животных можно получить немного медалей, которые можно потратить на различные бонусы."],
	ranger_slim:["+2% скиталец","За небольшую плату в 100 монеток Слим из Кламата разкажет много интересного об охоте на гекко."],
	imp_battle:["Боевой имплант","В вас вживлен один из эксперементальных имплантантов. Ваши боевые навыки увеличены."],
	imp_medical:["Медицинский имплант","В вас вживлен один из эксперементальных имплантантов. Ваши познания в медицине увеличены."],
	imp_auxiliary:["Вспомогательный имплант","В вас вживлен один из эксперементальных имплантантов. Ваши вспомогательные функции увеличены."],
	drayfild: ["НеоАрк","Кароче праходим значит убиваим асу и жука получаем ништяки на выбор. (все равно это никто не читает)"],
	quest_arroyo: ["Квесты в Арройо","В процесе набора репутации в Арройо можно получить +1% торговли, +5% ловушки и +1% скитальца, а при наборе 20 репутации Катрин будет рада обучить взлому, так если бы вы прочитали 3 книги по взлому."],
	aс_12: ["+12 AC (Класс брони)","Джеймс из Нью-Рено попросит выполнить вас несколько заданий, за это он обучит вас лучше уклоняться, +12 класс брони."],
	ap_vc: ["+1 ОД (ГУ)","За прохождение цепочки квестов на гвардейца в ГУ можно пройти дополнительную боевую подготовку."],
	ap_hack: ["+1 ОД (взлом)","За уничтожение лагеря рейдеров Риана научит вас двигаться быстрее."],
	overviewq: ["+1 обзора в Яме","При хорошей репутации в Дене и выполнении парочки несложных заданий отца Клиффа, можно получить от него чудодейственное благословление."],
	heavy_bh: ["+5% тяжа в БХ","За небольшую пикантную услугу Маркус обучит вас владению тяжелым оружием."],
	skill_geck: ["+3% боевые в Гекко","За небольшое пожертвование местный мэр обучит вас боевым навыкам."],
	trade_den: ["+5% торговли","Выполнив все задания Джеймса в Яме можно обучиться у него торговле."],
	trade_mod: ["+7% торговли","Став почетным гражданином Модока можно обучится торговли у местного мера."],
	trade_up: ["Торговля до 40%","У некоторых каравано в пустоши можно прокачать торговлю до 40% по 1к монеток за 1%."],
	per_ncr: ["+4% анти/крит в НКР","При хорошей репутации в НКР местный доктор согласится сделать операцию всего за каких-то 50к монеток."],
	cha_vc: ["+1 Обояние в ГУ", "Если найти голодиск с инструкциями по пластической хирургии для докторши в ГУ, то она с радостью сделает вам операцию."],
	hp_den: ["+3 hp в Дене", "Священник в церквушке Дена может укрепить ваше здоровье, если вы спросите его про дела церкви."],
	ranger_smile: ["Скиталец у Смайли", "Смайли по доброте душевно соврешенно бесплатно может прокачать скитальца до 60-69%"],
	valerie_letter: ["Письмо Валери", "Легкое оружие +10% и Ремонт +10%"],
	melee_klam: ["Рукопашка +30%", "В охотничих угодьях Кламата бывший боксер может обучить приемам рукопашного боя за небольшую услугу."],
	steel_reno: ["Холодное оружие +10%", "В Нью-Рено у младшего Мордино можно научится приемам с ножом всего за 200 монет."],
	light_den: ["Легкое оружие в Яме", "При наличии нбольшой суммы в размере 3к монеток можно поднять легкое оружие на 5%"],
	PE_MA_SKIT: ["Житель Пустоши(5)", "Вы настолько изучили пустошь, что получаете +5% к навыку Скиталец и передвигаетесь по Пустоши на 5% быстрее с каждым уровнем этой способности."],
	PE_MA_REM: ["Опытный ремонтник(5)", "Вы настолько часто ремонтировали, что получаете +3% к навыку Ремонт и +1% к навыку Наука с каждым уровнем этой способности."],
	PE_MA_FIX: ["Опытный инженер(5)", "Вы настолько часто изобретали, что получаете +3% к навыку Наука и +1% к навыку Ремонт с каждым уровнем этой способности."],
	PE_MA_AID: ["Опытный врач(5)", "Вы настолько часто лечили, что получаете +2% к навыку Санитар и +2% к навыку Доктор с каждым уровнем этой способности."]
}

function depth(i,n,m){skills[i][2]+=n;return m;}
function skillsmedals(n,m) {
	var arr = {};
	for(var i in textskills) {
		arr[i] = [];
		arr[i].push("+"+n+"% "+textskills[i][0]);
		arr[i].push(function(){return [n,m];});
		arr[i].push(skills[i][0]<200);
	}
	arr["zmedals"] = ["Ничего",function(){return 0;},true];
	talk("Выберете навык", arr);
}	
	
var questup = {
	medals:function(){
			talk("У вас "+(quest.medals[1]-quest.medals[0])+" медалей выберите награду:",{ 	
			amedals:["1 очко распределения(3 медали)",function(){charp.points++;spoints();return 3;},(quest.medals[1]-quest.medals[0])>=3], // точность +3%
			bmedals:["1 очко жизней(10 медалей)",function(){feat.live[2]++;return 10;},(quest.medals[1]-quest.medals[0])>=10], // точность врага -3%, 3% уроврота.
			/*cmedals:["+1% любого резиста(10 медалей)",function(){
				talk("Выберите резист:", {
					amedals: ["+1% к норме", function(){resist.normal.res[2]++;return 10;},resist.normal.res[0]<25],
					bmedals: ["+1% к лвзеру", function(){resist.laser.res[2]++;return 10;},resist.laser.res[0]<25],
					cmedals: ["+1% к огню", function(){resist.fire.res[2]++;return 10;},resist.fire.res[0]<25],
					dmedals: ["+1% к плазме", function(){resist.plasma.res[2]++;return 10;},resist.plasma.res[0]<25],
					emedals: ["+1% к взрыву", function(){resist.explode.res[2]++;return 10;},resist.explode.res[0]<25],
					fmedals: ["+1% к электро", function(){resist.electro.res[2]++;return 10;},resist.electro.res[0]<25],
					zmedals:["Ничего",function(){return 0;},true]
				}); return -1;},(quest.medals[1]-quest.medals[0])>=10], // +3 урона*/
			/*dmedals:["+5 очков навыка(20 медалей)",function(){skillsmedals(5,20);return -1;},(quest.medals[1]-quest.medals[0])>=20],
			emedals:["+10 очков навыка(40 медалей)",function(){skillsmedals(10,40);return -1;},(quest.medals[1]-quest.medals[0])>=40],
			fmedals:["+20 очков навыка(60 медалей)",function(){skillsmedals(20,60);return -1;},(quest.medals[1]-quest.medals[0])>=60],
			gmedals:["+50 очков навыка(100 медалей)",function(){skillsmedals(50,100);return -1;},(quest.medals[1]-quest.medals[0])>=100],*/
			fmedals:["+10 очков распределения(10 медалей)",function(){charp.points+=10;medsp+=10;spoints();return 10;},(quest.medals[1]-quest.medals[0])>=10 && medsp<150],
			gmedals:["+150 очков распределения(150 медалей)",function(){charp.points+=150;medsp+=150;spoints();return 150;},(quest.medals[1]-quest.medals[0])>=150 && medsp<150],
			zmedals:["Ничего",function(){return 0;},true]
		});
	},
	imp_battle:function(){
		talk("Выберите бовевой имплант:",{ 	
			aimp_battle:["Оптимизация, +15 к очкам жизни, +3% к точности",function(){perk.PE_QUICK_POCKETS[0]+=1;feat.live[2]+=15;return 1;},true], // точность +3%
			bimp_battle:["-3% к точности врага, +5 к трешхолду взрыву, +3% уворота",function(){resist.explode.asb[2]+=5;return 1;},true], // точность врага -3%, 3% уроврота.
			cimp_battle:["+3 конечного урона, +5% к критическим попаданиям",function(){feat.crit[2]+=5;return 1;},true], // +3 урона
			dimp_battle:["+20% Метательное оружие, +15 XP, +5 AC",function(){addSkills("thrown",20,1);feat.live[2]+=15;feat.armc[2]+=5;return 1;},true],
			eimp_battle:["+2 к всем трешхолдам",function(){for(var n in resist) resist[n].asb[2]+=2;return 1;},true],
			fimp_battle:["+30% Легкое оружие, +30% Тяжелое оружие, +30% Энергооружие",function(){addSkills("light",30,1);addSkills("heavy",30,1);addSkills("energy",30,1);return 1;},true],
			none:["Ничего",function(){return 0;},true]
		});
	},
	imp_medical:function(){
		talk("Выберите медицинский имплант:",{ 	
			aimp_medical:["+20% Санитар, +20% Доктор, +50 xp при лечении другого игрока",function(){addSkills("orderly",20,1);addSkills("doctor",20,1);return 1;},true], //+50
			bimp_medical:["+2 удачи при санитаре, +20 XP.",function(){feat.live[2]+=20;return 1;},true], //+ 2 удачи
			cimp_medical:["+40% Доктор, +20 XP лечении санитаром, +5 AC",function(){addSkills("doctor",40,1);feat.armc[2]+=5;return 1;},true], // 20 при лечении
			dimp_medical:["+30% Санитар, +5 уровнь лечения.",function(){addSkills("orderly",30,1);feat.levh[2]+=5;return 1;},true],
			eimp_medical:["+5 уровнь лечения, +20 XP",function(){feat.levh[2]+=5;feat.live[2]+=20;return 1;},true],
			fimp_medical:["+20% Санитар, +20% Доктор, +20 XP",function(){addSkills("orderly",20,1);addSkills("doctor",20,1);feat.live[2]+=20;return 1;},true],
			none:["Ничего",function(){return 0;},true]
		});
	},
	imp_auxiliary:function(){
		talk("Выберите вспомогательный имплант:",{ 	
			aimp_auxiliary:["Осведомленность, +20% Скрытность, +5 АС",function(){perk.PE_AWARENESS[0]+=1;addSkills("sneak",20,1);feat.armc[2]+=5;return 1;},true], 
			bimp_auxiliary:["Репликант, +30% Наука, +30% Ремонт",function(){perk.PE_VIEW[0]+=1;addSkills("science",30,1);addSkills("repair",30,1);return 1;},true],
			cimp_auxiliary:["Осведомленность, Следопыт, +50% Скиталец",function(){perk.PE_AWARENESS[0]+=1;perk.PE_PATHFINDER[0]+=1;addSkills("ranger",50,1);return 1;},true],
			dimp_auxiliary:["Переноска, +20% Атлетизм",function(){perk.PE_STRONG_BACK[0]+=1;feat.maxl[2]+=100;;addSkills("speed",55,1);return 1;},true],
			eimp_auxiliary:["+40% Красноречие, +40% Торговля, +100% Ловушки",function(){addSkills("oratory",40,1);addSkills("trade",40,1);addSkills("traps",100,1);return 1;},true],
			fimp_auxiliary:["Бдительность, +20% Взлом",function(){perk.PE_CAUTIOUS_NATURE[0]+=1;feat.oview[2]+=3;addSkills("hack",20,1);return 1;},true],
			none:["Ничего",function(){return 0;},true]
		});
	},
	drayfild:function(){
		talk("По поводу награды, есть два варианта: первый - ускоренный курс бойца, узнаешь много всего, но по чуть-чуть. Или второй вариант - специализация на определенном оружии или пелевой поддержке. Что выберешь?",{ 
			adrayfild:["[Все боевые +5%]",function(){addSkills("melee",5,1);addSkills("steel",5,1);addSkills("light",5,1);addSkills("energy",5,1);addSkills("heavy",5,1);return 1;},true],
			bdrayfild:["[Рукопашная]",function(){addSkills("melee",10,1);return 1;},true],
			cdrayfild:["[Холодное оружие]",function(){addSkills("steel",10,1);return 1;},true],
			ddrayfild:["[Легкое оружие]",function(){addSkills("light",10,1);return 1;},true], 
			edrayfild:["[Тяжолое оружие]",function(){addSkills("heavy",10,1);return 1;},true],
			fdrayfild:["[Энергетическое оружие]",function(){addSkills("energy",10,1);return 1;},true],
			gdrayfild:["[Первая помощь и Доктор]",function(){addSkills("orderly",5,1);addSkills("doctor",5,1);return 1;},true],
			hdrayfild:["Эм... я еще не готов к знаниям.",function(){return 0;},true]
		});
	},	
	quest_arroyo:function(){
		addSkills("trade",1,1);
		addSkills("traps",5,1);
		addSkills("ranger",1,1);
		
		var n = skills.hack[0];		// Навык
		var np = 0;
		var s = 18;	// Очки навыков
		for(var i = 0;i<18&&s>0;i++){
			if(n%2)	// нечетный
			{
				if(n<101 && s>=1)		s-=1;
				else if(n<127 && s>=2)	s-=2;
				else if(n<151 && s>=3)	s-=3;
				else if(n<=175 && s>=4)	s-=4;
				else if(n<201 && s>=5)	s-=5;
				else if(n<300 && s>=6)	s-=6;
				else break;
				np++;
				n++;
			}
			else	// четный
			{
				if(n<102 && s>=1)		s-=1;
				else if(n<126 && s>=2)	s-=2;
				else if(n<152 && s>=3)	s-=3;
				else if(n<176 && s>=4)	s-=4;
				else if(n<202 && s>=5)	s-=5;
				else if(n<300 && s>=6)	s-=6;
				else break;
				np++;
				n++;
			}
		}
		addSkills("hack",np,1);
	},
	aс_12:function(){
		feat.armc[2] += 12;
	},
	ap_vc:function(){
		feat.apoi[2] += 1;
	},
	ap_hack:function(){
		feat.apoi[2] += 1;
	},
	overviewq:function(){
		feat.oview[2]+= 1;
	},
	heavy_bh:function(){
		addSkills("heavy",5,1);
		addSkills("melee",5,1);
	},
	skill_geck:function(){
		addSkills("light",3,1);
		addSkills("heavy",3,1);
		addSkills("energy",3,1);
		addSkills("melee",3,1);
		addSkills("steel",3,1);
	},
	trade_den:function(){
		addSkills("trade",5,1);
	},
	trade_mod:function(){
		addSkills("trade",7,1);
	},
	trade_up:function(){
		addSkills("trade",40 - skills.trade[0],1);
	},
	per_ncr:function(){
		talk("Выберите награду за квест НКР:",{ 	
			crit5:["+4% к криту",function(){feat.crit[1]+=4;return 1;},true],
			anticrit5:["+4% к антикриту",function(){return 1;},true],
			none:["Ничего",function(){return 0;},true]
		});
	},
	cha_vc:	function(){
		mychar.stats.CHA[1] += 1;
	},
	hp_den: function(){
		feat.live[2] += 3;
	},
	ranger_slim:function(){
		addSkills("ranger",2,1);
	},
	ranger_smile: function(){
		var temp = 10;
		while ((skills.ranger[0]+temp)<60) temp += 10;
		addSkills("ranger",temp,1);
	},
	valerie_letter: function(){
		addSkills("repair",10,1);
		addSkills("light",10,1);
	},
	melee_klam:function(){
		addSkills("melee",30,1);
	},
	steel_reno:function(){
		addSkills("steel",10,1);
	},
	light_den:function(){
		addSkills("light",5,1);
	},
	PE_MA_REM:function(){
		addSkills("repair",3*5,1);
		addSkills("science",1*5,1);
	},
	PE_MA_SKIT:function(){
		addSkills("ranger",5*5,1);
	// feat.live[2]+= 5
	},
	PE_MA_FIX:function(){
		addSkills("science",3*5,1);
		addSkills("repair",1*5,1);
	},
	PE_MA_AID:function(){
		addSkills("orderly",2*5,1);
		addSkills("doctor",2*5,1);
	}
}
