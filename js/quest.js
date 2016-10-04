var quest = {	// квест, описание, уровней квеста, мин уровень взятия, максимальный уровень взятия, [требования])
	medals:["Медали","Делая различные квесты и убивая гуманоидов и животных можно получить немного медалей, которые можно потратить на различные бонусы.",
        200,2,99,function(){return true;},
        function(){talk(dialog.med+(quest.medals[2]-chobj("quest","medals"))+dialog.med2,{ 	
			amedals:[dialog.medals.amedals,function(){charp.points++;numbers($("#point1"),charp.points);return 3;},(quest.medals[2]-chobj("quest","medals"))>=3],
            cmedals:[dialog.medals.cmedals,function(){pr.add("feats","maxl",15);return 5;},(quest.medals[2]-chobj("quest","medals"))>=5],
			bmedals:[dialog.medals.bmedals,function(){pr.add("feats","live",1);return 10;},(quest.medals[2]-chobj("quest","medals"))>=10],
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
			/*dmedals:["+5 очков навыка(20 медалей)",function(){skillsmedals(5,20);return -1;},(quest.medals[1]-quest.medals[0])>=20],*/
			fmedals:[dialog.medals.fmedals,function(){charp.points+=10;medsp+=10;numbers($("#point1"),charp.points);return 10;},(quest.medals[2]-chobj("quest","medals"))>=10 && medsp<150],
			gmedals:[dialog.medals.gmedals,function(){charp.points+=150;medsp+=150;numbers($("#point1"),charp.points);return 150;},(quest.medals[2]-chobj("quest","medals"))>=150 && medsp<150],
			zmedals:[dialog.none,function(){return 0;},true]});
        }],
	PE_NCR_REPAIR:["Секреты мастерства: Ремонт", "Механик Модока ознакомил вас с новой технологией починки оружия. Ваш навык Ремонта повышен на 5%.",
        1,2,99,function(){return true;},
        function(){pr.add("skills","repair",5,1);}],
	ranger_smile:["Скиталец у Смайли", "Смайли по доброте душевно соврешенно бесплатно может прокачать скитальца до 60-69%",
        1,2,99,function(){return skills.ranger[0]<60;},
        function(){var t = 10;while ((skills.ranger[0]+t)<60) t += 10;pr.add("skills","ranger",t,1);}],
	ranger_slim:["+2% скиталец","За небольшую плату в 100 монеток Слим из Кламата разкажет много интересного об охоте на гекко.",
        1,2,99,function(){return true;},
        function(){pr.add("skills","ranger",2,1);}],
	melee_klam:["Рукопашка +30%", "В охотничих угодьях Кламата бывший боксер может обучить приемам рукопашного боя за небольшую услугу.",
        1,2,99,function(){return true;},
        function(){pr.add("skills","melee",30,1);}],
	hp_den:["+3 hp в Дене", "Священник в церквушке Дена может укрепить ваше здоровье, если вы спросите его про дела церкви.",
        1,2,99,function(){return true;},
        function(){pr.add("feats","live",3);}],
	light_den:["Легкое оружие в Яме", "При наличии нбольшой суммы в размере 3к монеток можно поднять легкое оружие на 5%",
        1,2,99,function(){return skills.light[0]>=80 && skills.light[0]<120;},
        function(){pr.add("skills","light",5,1);}],
	overviewq:["+1 обзора в Яме","При хорошей репутации в Дене и выполнении парочки несложных заданий отца Клиффа, можно получить от него чудодейственное благословление.",
        1,2,99,function(){return true;},
        function(){pr.add("feats","oview",1);}],
	quest_arroyo:["Квесты в Арройо","В процесе набора репутации в Арройо можно получить +1% торговли, +5% ловушки и +1% скитальца, а при наборе 20 репутации Катрин будет рада обучить взлому, так если бы вы прочитали 3 книги по взлому.",
        1,2,99,function(){return true;},
        function(){
            pr.add("skills","trade",1,1);
            pr.add("skills","traps",5,1);
            pr.add("skills","ranger",1,1);
			var sk = skpoint(skills.hack[0],18);
            pr.add("skills","hack",sk[0],1);
        }],
	per_ncr:["+4% анти/крит в НКР","При хорошей репутации в НКР местный доктор согласится сделать операцию всего за каких-то 50к монеток.",
        1,30,99,function(){return charp.level >= 30;},
        function(){talk(dialog.per_ncr,{ 	
			crit5:[questinfo.per_ncr[0],function(){pr.add("feats","crit",4);return 1;},true],
			anticrit5:[questinfo.per_ncr[1],function(){pr.add("feats","acrit",4);return 2;},true],
			none:[dialog.none,function(){return 0;},true]});
        }],
	cha_vc:["+1 Обояние в ГУ", "Если найти голодиск с инструкциями по пластической хирургии для докторши в ГУ, то она с радостью сделает вам операцию.",
        1,2,99,function(){return stats.CHA[2]<4 && skills.oratory[0]>79;},
        function(){mychar.stats.CHA[1]++;},
        function(){mychar.stats.CHA[1]--;}],
	ac_12:["+12 AC (Класс брони)","Джеймс из Нью-Рено попросит выполнить вас несколько заданий, за это он обучит вас лучше уклоняться, +12 класс брони.",
        1,2,99,function(){return true;},
        function(){pr.add("feats","armc",12);}],
	ap_vc:["+1 ОД (ГУ)","За прохождение цепочки квестов на гвардейца в ГУ можно пройти дополнительную боевую подготовку.",
        1,2,99,function(){return true;},
        function(){pr.add("feats","apoi",1);}],
	ap_hack:["+1 ОД (взлом)","За уничтожение лагеря рейдеров Риана научит вас двигаться быстрее.",
        1,2,99,function(){return skills.hack[0]>199;},
        function(){	pr.add("feats","apoi",1);}],
	heavy_bh:["+5% тяжа и рукопашной в БХ","За небольшую пикантную услугу Маркус обучит вас владению тяжелым оружием и правильно бить в дыню.",
        1,2,99,function(){return skills.ranger[0]>99;},
        function(){pr.add("skills","heavy",5,1);pr.add("skills","melee",5,1);}],
	skill_geck:["+3% боевые в Гекко","За небольшое пожертвование местный мэр обучит вас боевым навыкам.",
        1,2,99,function(){return true;},
        function(){pr.add("skills","light",3,1);pr.add("skills","heavy",3,1);pr.add("skills","energy",3,1); pr.add("skills","melee",3,1);pr.add("skills","steel",3,1);}],
	trade_den:["+5% торговли","Выполнив все задания Джеймса в Яме можно обучиться у него торговле.",
        1,2,99,function(){return true;},
        function(){pr.add("skills","trade",5,1);}],
	trade_mod:["+7% торговли","Став почетным гражданином Модока можно обучится торговли у местного мера.",
        1,2,99,function(){return true;},
        function(){pr.add("skills","trade",7,1);}],
	trade_up:["Торговля до 40%","У некоторых каравано в пустоши можно прокачать торговлю до 40% по 1к монеток за 1%.",
        1,2,99,function(){return skills.trade[0]<40;},
        function(){pr.add("skills","trade",40 - skills.trade[0],1);}],
	steel_reno:["Холодное оружие +10%", "В Нью-Рено у младшего Мордино можно научится приемам с ножом всего за 200 монет.",
        1,2,99,function(){return true;},
        function(){pr.add("skills","steel",10,1);}],
	valerie_letter:["Письмо Валери", "Легкое оружие +10% и Ремонт +10%",
        1,2,99,function(){return true;},
        function(){pr.add("skills","repair",10,1);pr.add("skills","light",10,1);}],
	drayfild:["НеоАрк","Кароче праходим значит убиваим асу и жука получаем ништяки на выбор. (все равно это никто не читает)",
        1,21,99,function(){return true;},
        function(){talk(dialog.drayfild,{ 
			adrayfild:["["+questinfo.drayfild[0]+"]",function(){pr.add("skills","melee",5,1);pr.add("skills","steel",5,1);pr.add("skills","light",5,1);pr.add("skills","energy",5,1);pr.add("skills","heavy",5,1);return 1;},true],
			bdrayfild:["["+questinfo.drayfild[1]+"]",function(){pr.add("skills","melee",10,1);return 2;},true],
			cdrayfild:["["+questinfo.drayfild[2]+"]",function(){pr.add("skills","steel",10,1);return 3;},true],
			ddrayfild:["["+questinfo.drayfild[3]+"]",function(){pr.add("skills","light",10,1);return 4;},true], 
			edrayfild:["["+questinfo.drayfild[4]+"]",function(){pr.add("skills","heavy",10,1);return 5;},true],
			fdrayfild:["["+questinfo.drayfild[5]+"]",function(){pr.add("skills","energy",10,1);return 6;},true],
			gdrayfild:["["+questinfo.drayfild[6]+"]",function(){pr.add("skills","orderly",5,1);pr.add("skills","doctor",5,1);return 7;},true],
			hdrayfild:[dialog.drynone,function(){return 0;},true]});
        }],
	imp_battle:["Боевой имплант","В вас вживлен один из эксперементальных имплантантов. Ваши боевые навыки увеличены.",
        1,2,99,function(){return true;},
        function(){talk(dialog.imp_battle,{ 	
            aimp_battle:[questinfo.imp_battle[0],function(){pr.add("skills","light",30,1);return 1;},true],
            bimp_battle:[questinfo.imp_battle[1],function(){pr.add("skills","heavy",30,1);return 2;},true],
            cimp_battle:[questinfo.imp_battle[2],function(){pr.add("skills","energy",30,1);return 3;},true],
            dimp_battle:[questinfo.imp_battle[3],function(){pr.add("skills","thrown",30,1);pr.add("feats","dodge",3);return 4;},true],
            eimp_battle:[questinfo.imp_battle[4],function(){pr.add("skills","repair",30,1);return 5;},true],
            fimp_battle:[questinfo.imp_battle[5],function(){pr.add("skills","melee",20,1);pr.add("skills","steel",20,1);return 6;},true],
            none:[dialog.none,function(){return 0;},true]});
        }],
	imp_medical:["Медицинский имплант","В вас вживлен один из эксперементальных имплантантов. Ваши познания в медицине увеличены.",
        1,2,99,function(){return true;},
        function(){talk(dialog.imp_medical,{ 	
			aimp_medical:[questinfo.imp_medical[0],function(){pr.add("skills","orderly",35,1);return 1;},true],
			bimp_medical:[questinfo.imp_medical[1],function(){pr.add("skills","doctor",25,1);return 2;},true],
			cimp_medical:[questinfo.imp_medical[2],function(){pr.add("feats","live",20);pr.add("feats","levh",10);return 3;},true],
            dimp_medical:[questinfo.imp_medical[3],function(){pr.add("skills","doctor",40,1);return 4;},true],
			eimp_medical:[questinfo.imp_medical[4],function(){pr.add("feats","armc",5);return 5;},true],
			fimp_medical:[questinfo.imp_medical[5],function(){pr.add("skills","doctor",30,1);return 6;},true],
			none:[dialog.none,function(){return 0;},true]});
        }],
	imp_auxiliary:["Вспомогательный имплант","В вас вживлен один из эксперементальных имплантантов. Ваши вспомогательные функции увеличены.",
        1,2,99,function(){return true;},
        function(){talk(dialog.imp_auxiliary,{ 	
			aimp_auxiliary:[questinfo.imp_auxiliary[0],function(){pr.add("feats","maxl",100);return 1;},true], 
			bimp_auxiliary:[questinfo.imp_auxiliary[1],function(){return 2;},true],
			cimp_auxiliary:[questinfo.imp_auxiliary[2],function(){pr.add("skills","traps",100,1);return 3;},true],
			dimp_auxiliary:[questinfo.imp_auxiliary[3],function(){/*addperk("PE_VIEW");*/pr.add("skills","oratory",50,1);return 4;},true],
			eimp_auxiliary:[questinfo.imp_auxiliary[4],function(){pr.add("skills","steal",100,1);pr.add("skills","hack",20,1);return 5;},true],
			fimp_auxiliary:[questinfo.imp_auxiliary[5],function(){pr.add("skills","speed",50,1);return 6;},true],
			none:[dialog.none,function(){return 0;},true]});
        }],
	PE_MA_SKIT:["Житель Пустоши(5)", "Вы настолько изучили пустошь, что получаете +5% к навыку Скиталец и передвигаетесь по Пустоши на 5% быстрее с каждым уровнем этой способности.",
        1,2,99,function(){return true;},
        function(){pr.add("skills","ranger",5*5,1);}],
	PE_MA_REM:["Опытный ремонтник(5)", "Вы настолько часто ремонтировали, что получаете +3% к навыку Ремонт и +1% к навыку Наука с каждым уровнем этой способности.",
        1,2,99,function(){return true;},
        function(){pr.add("skills","repair",3*5,1);pr.add("skills","science",1*5,1);}],
	PE_MA_FIX:["Опытный инженер(5)", "Вы настолько часто изобретали, что получаете +3% к навыку Наука и +1% к навыку Ремонт с каждым уровнем этой способности.",
        1,2,99,function(){return true;},
        function(){pr.add("skills","science",3*5,1);pr.add("skills","repair",1*5,1);}],
	PE_MA_AID:["Опытный врач(5)", "Вы настолько часто лечили, что получаете +2% к навыку Санитар и +2% к навыку Доктор с каждым уровнем этой способности.",
        1,2,99,function(){return true;},
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
	arr["zmedals"] = [dialog.none,function(){return 0;},true];
	talk("Выберете навык", arr);
}