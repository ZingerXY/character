var quest = {	// квест, уровней квеста, мин уровень взятия, максимальный уровень взятия, [требования])
	medals:["Медали","Делая различные квесты и убивая гуманоидов и животных можно получить немного медалей, которые можно потратить на различные бонусы.",
        200,1,99,function(){return true;},
        function(){talk("У вас "+(quest.medals[2]-chquest("medals"))+" медалей выберите награду:",{ 	
			amedals:["1 очко распределения(3 медали)",function(){charp.points++;spoints();return 3;},(quest.medals[2]-chquest("medals"))>=3], // точность +3%
			bmedals:["1 очко жизней(10 медалей)",function(){feat.live[2]++;return 10;},(quest.medals[2]-chquest("medals"))>=10], // точность врага -3%, 3% уроврота.
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
			fmedals:["+10 очков распределения(10 медалей)",function(){charp.points+=10;medsp+=10;spoints();return 10;},(quest.medals[2]-chquest("medals"))>=10 && medsp<150],
			gmedals:["+150 очков распределения(150 медалей)",function(){charp.points+=150;medsp+=150;spoints();return 150;},(quest.medals[2]-chquest("medals"))>=150 && medsp<150],
			zmedals:["Ничего",function(){return 0;},true]});
        }],
	ranger_smile:["Скиталец у Смайли", "Смайли по доброте душевно соврешенно бесплатно может прокачать скитальца до 60-69%",
        1,1,99,function(){return skills.ranger[0]<60;},
        function(){var t = 10;while ((skills.ranger[0]+t)<60) t += 10;pr.add("skills","ranger",t,1);}],
	ranger_slim:["+2% скиталец","За небольшую плату в 100 монеток Слим из Кламата разкажет много интересного об охоте на гекко.",
        1,1,99,function(){return true;},
        function(){pr.add("skills","ranger",2,1);}],
	melee_klam:["Рукопашка +30%", "В охотничих угодьях Кламата бывший боксер может обучить приемам рукопашного боя за небольшую услугу.",
        1,1,99,function(){return true;},
        function(){pr.add("skills","melee",30,1);}],
	hp_den:["+3 hp в Дене", "Священник в церквушке Дена может укрепить ваше здоровье, если вы спросите его про дела церкви.",
        1,1,99,function(){return true;},
        function(){pr.add("feats","live",3);}],
	light_den:["Легкое оружие в Яме", "При наличии нбольшой суммы в размере 3к монеток можно поднять легкое оружие на 5%",
        1,1,99,function(){return skills.light[0]>=80 && skills.light[0]<120;},
        function(){pr.add("skills","light",5,1);}],
	overviewq:["+1 обзора в Яме","При хорошей репутации в Дене и выполнении парочки несложных заданий отца Клиффа, можно получить от него чудодейственное благословление.",
        1,1,99,function(){return true;},
        function(){pr.add("feats","oview",1);}],
	quest_arroyo:["Квесты в Арройо","В процесе набора репутации в Арройо можно получить +1% торговли, +5% ловушки и +1% скитальца, а при наборе 20 репутации Катрин будет рада обучить взлому, так если бы вы прочитали 3 книги по взлому.",
        1,1,99,function(){return true;},
        function(){
            pr.add("skills","trade",1,1);
            pr.add("skills","traps",5,1);
            pr.add("skills","ranger",1,1);
			var sk = skpoint(skills.hack[0],18);
            pr.add("skills","hack",sk[0],1);
        }],
	per_ncr:["+4% анти/крит в НКР","При хорошей репутации в НКР местный доктор согласится сделать операцию всего за каких-то 50к монеток.",
        1,30,99,function(){return charp.level >= 30;},
        function(){talk("Выберите награду за квест НКР:",{ 	
			crit5:["+4% к криту",function(){feat.crit[1]+=4;return 1;},true],
			anticrit5:["+4% к антикриту",function(){return 1;},true],
			none:["Ничего",function(){return 0;},true]});
        }],
	cha_vc:["+1 Обояние в ГУ", "Если найти голодиск с инструкциями по пластической хирургии для докторши в ГУ, то она с радостью сделает вам операцию.",
        1,1,99,function(){return stats.CHA[2]<4 && skills.oratory[0]>79;},
        function(){mychar.stats.CHA[1] += 1;}],
	aс_12:["+12 AC (Класс брони)","Джеймс из Нью-Рено попросит выполнить вас несколько заданий, за это он обучит вас лучше уклоняться, +12 класс брони.",
        1,1,99,function(){return true;},
        function(){pr.add("feats","armc",12);}],
	ap_vc:["+1 ОД (ГУ)","За прохождение цепочки квестов на гвардейца в ГУ можно пройти дополнительную боевую подготовку.",
        1,1,99,function(){return true;},
        function(){pr.add("feats","apoi",1);}],
	ap_hack:["+1 ОД (взлом)","За уничтожение лагеря рейдеров Риана научит вас двигаться быстрее.",
        1,1,99,function(){return skills.hack[0]>199;},
        function(){	pr.add("feats","apoi",1);}],
	heavy_bh:["+5% тяжа и рукопашной в БХ","За небольшую пикантную услугу Маркус обучит вас владению тяжелым оружием и правильно бить в дыню.",
        1,1,99,function(){return skills.ranger[0]>99;},
        function(){pr.add("skills","heavy",5,1);pr.add("skills","melee",5,1);}],
	skill_geck:["+3% боевые в Гекко","За небольшое пожертвование местный мэр обучит вас боевым навыкам.",
        1,1,99,function(){return true;},
        function(){pr.add("skills","light",3,1);pr.add("skills","heavy",3,1);pr.add("skills","energy",3,1); pr.add("skills","melee",3,1);pr.add("skills","steel",3,1);}],
	trade_den:["+5% торговли","Выполнив все задания Джеймса в Яме можно обучиться у него торговле.",
        1,1,99,function(){return true;},
        function(){pr.add("skills","trade",5,1);}],
	trade_mod:["+7% торговли","Став почетным гражданином Модока можно обучится торговли у местного мера.",
        1,1,99,function(){return true;},
        function(){pr.add("skills","trade",7,1);}],
	trade_up:["Торговля до 40%","У некоторых каравано в пустоши можно прокачать торговлю до 40% по 1к монеток за 1%.",
        1,1,99,function(){return skills.trade[0]<40;},
        function(){pr.add("skills","trade",40 - skills.trade[0],1);}],
	steel_reno:["Холодное оружие +10%", "В Нью-Рено у младшего Мордино можно научится приемам с ножом всего за 200 монет.",
        1,1,99,function(){return true;},
        function(){pr.add("skills","steel",10,1);}],
	valerie_letter:["Письмо Валери", "Легкое оружие +10% и Ремонт +10%",
        1,1,99,function(){return true;},
        function(){pr.add("skills","repair",10,1);pr.add("skills","light",10,1);}],
	drayfild:["НеоАрк","Кароче праходим значит убиваим асу и жука получаем ништяки на выбор. (все равно это никто не читает)",
        1,21,99,function(){return true;},
        function(){talk("По поводу награды, есть два варианта: первый - ускоренный курс бойца, узнаешь много всего, но по чуть-чуть. Или второй вариант - специализация на определенном оружии или пелевой поддержке. Что выберешь?",{ 
			adrayfild:["[Все боевые +5%]",function(){pr.add("skills","melee",5,1);pr.add("skills","steel",5,1);pr.add("skills","light",5,1);pr.add("skills","energy",5,1);pr.add("skills","heavy",5,1);return 1;},true],
			bdrayfild:["[Рукопашная]",function(){pr.add("skills","melee",10,1);return 1;},true],
			cdrayfild:["[Холодное оружие]",function(){pr.add("skills","steel",10,1);return 1;},true],
			ddrayfild:["[Легкое оружие]",function(){pr.add("skills","light",10,1);return 1;},true], 
			edrayfild:["[Тяжолое оружие]",function(){pr.add("skills","heavy",10,1);return 1;},true],
			fdrayfild:["[Энергетическое оружие]",function(){pr.add("skills","energy",10,1);return 1;},true],
			gdrayfild:["[Первая помощь и Доктор]",function(){pr.add("skills","orderly",5,1);pr.add("skills","doctor",5,1);return 1;},true],
			hdrayfild:["Эм... я еще не готов к знаниям.",function(){return 0;},true]});
        }],
	imp_battle:["Боевой имплант","В вас вживлен один из эксперементальных имплантантов. Ваши боевые навыки увеличены.",
        1,1,99,function(){return true;},
        function(){talk("Выберите бовевой имплант:",{ 	
            aimp_battle:["Оптимизация, +15 к очкам жизни, +3% к точности",function(){perk.PE_QUICK_POCKETS[0]+=1;pr.add("feats","live",15);return 1;},true], // точность +3%
            bimp_battle:["-3% к точности врага, +5 к трешхолду взрыву, +3% уворота",function(){pr.addr("explode",5,0);return 1;},true], // точность врага -3%, 3% уроврота.
            cimp_battle:["+3 конечного урона, +5% к критическим попаданиям",function(){pr.add("feats","crit",5);return 1;},true], // +3 урона
            dimp_battle:["+20% Метательное оружие, +15 XP, +5 AC",function(){pr.add("skills","thrown",20,1);pr.add("feats","live",15);pr.add("feats","armc",5);return 1;},true],
            eimp_battle:["+2 к всем трешхолдам",function(){for(i in resist)pr.addr(i,2,0);return 1;},true],
            fimp_battle:["+30% Легкое оружие, +30% Тяжелое оружие, +30% Энергооружие",function(){pr.add("skills","light",30,1);pr.add("skills","heavy",30,1);pr.add("skills","energy",30,1);return 1;},true],
            none:["Ничего",function(){return 0;},true]});
        }],
	imp_medical:["Медицинский имплант","В вас вживлен один из эксперементальных имплантантов. Ваши познания в медицине увеличены.",
        1,1,99,function(){return true;},
        function(){talk("Выберите медицинский имплант:",{ 	
			aimp_medical:["+20% Санитар, +20% Доктор, +50 xp при лечении другого игрока",function(){pr.add("skills","orderly",20,1);pr.add("skills","doctor",20,1);return 1;},true], //+50
			bimp_medical:["+2 удачи при санитаре, +20 XP.",function(){pr.add("feats","live",20);return 1;},true], //+ 2 удачи
			cimp_medical:["+40% Доктор, +20 XP лечении санитаром, +5 AC",function(){pr.add("skills","doctor",40,1);pr.add("feats","armc",5);return 1;},true], // 20 при лечении
			dimp_medical:["+30% Санитар, +5 уровнь лечения.",function(){pr.add("skills","orderly",30,1);pr.add("feats","levh",5);return 1;},true],
			eimp_medical:["+5 уровнь лечения, +20 XP",function(){pr.add("feats","levh",5);pr.add("feats","live",20);return 1;},true],
			fimp_medical:["+20% Санитар, +20% Доктор, +20 XP",function(){pr.add("skills","orderly",20,1);pr.add("skills","doctor",20,1);pr.add("feats","live",20);return 1;},true],
			none:["Ничего",function(){return 0;},true]});
        }],
	imp_auxiliary:["Вспомогательный имплант","В вас вживлен один из эксперементальных имплантантов. Ваши вспомогательные функции увеличены.",
        1,1,99,function(){return true;},
        function(){talk("Выберите вспомогательный имплант:",{ 	
			aimp_auxiliary:["Осведомленность, +20% Скрытность, +5 АС",function(){perk.PE_AWARENESS[0]+=1;pr.add("skills","sneak",20,1);pr.add("feats","armc",5);return 1;},true], 
			bimp_auxiliary:["Репликант, +30% Наука, +30% Ремонт",function(){perk.PE_VIEW[0]+=1;pr.add("skills","science",30,1);pr.add("skills","repair",30,1);return 1;},true],
			cimp_auxiliary:["Осведомленность, Следопыт, +50% Скиталец",function(){perk.PE_AWARENESS[0]+=1;perk.PE_PATHFINDER[0]+=1;pr.add("skills","ranger",50,1);return 1;},true],
			dimp_auxiliary:["Переноска, +20% Атлетизм",function(){perk.PE_STRONG_BACK[0]+=1;pr.add("feats","maxl",100);;pr.add("skills","speed",55,1);return 1;},true],
			eimp_auxiliary:["+40% Красноречие, +40% Торговля, +100% Ловушки",function(){pr.add("skills","oratory",40,1);pr.add("skills","trade",40,1);pr.add("skills","traps",100,1);return 1;},true],
			fimp_auxiliary:["Бдительность, +20% Взлом",function(){perk.PE_CAUTIOUS_NATURE[0]+=1;pr.add("feats","oview",3);pr.add("skills","hack",20,1);return 1;},true],
			none:["Ничего",function(){return 0;},true]});
        }],
	PE_MA_SKIT:["Житель Пустоши(5)", "Вы настолько изучили пустошь, что получаете +5% к навыку Скиталец и передвигаетесь по Пустоши на 5% быстрее с каждым уровнем этой способности.",
        1,1,99,function(){return true;},
        function(){pr.add("skills","ranger",5*5,1);}],
	PE_MA_REM:["Опытный ремонтник(5)", "Вы настолько часто ремонтировали, что получаете +3% к навыку Ремонт и +1% к навыку Наука с каждым уровнем этой способности.",
        1,1,99,function(){return true;},
        function(){pr.add("skills","repair",3*5,1);pr.add("skills","science",1*5,1);}],
	PE_MA_FIX:["Опытный инженер(5)", "Вы настолько часто изобретали, что получаете +3% к навыку Наука и +1% к навыку Ремонт с каждым уровнем этой способности.",
        1,1,99,function(){return true;},
        function(){pr.add("skills","science",3*5,1);pr.add("skills","repair",1*5,1);}],
	PE_MA_AID:["Опытный врач(5)", "Вы настолько часто лечили, что получаете +2% к навыку Санитар и +2% к навыку Доктор с каждым уровнем этой способности.",
        1,1,99,function(){return true;},
        function(){pr.add("skills","orderly",2*5,1);pr.add("skills","doctor",2*5,1);}]
}

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