var impIVlimit = 9;
var quest = {	// квест, описание, уровней квеста, мин уровень взятия, максимальный уровень взятия, [требования])
	medals:["Медали","Делая различные квесты и убивая гуманоидов и животных можно получить немного медалей, которые можно потратить на различные бонусы.",
		200,2,99,function(){return true;},
		function(){talk(dialog.med+(quest.medals[2]-chobj("quest","medals"))+dialog.med2,{
			amedals:[dialog.medals.amedals,function(){charp.points++;numbers($("#point1"),charp.points);return [1,3];},(quest.medals[2]-chobj("quest","medals"))>=3],
			cmedals:[dialog.medals.cmedals,function(){pr.add("feats","maxl",15);return [2,5];},(quest.medals[2]-chobj("quest","medals"))>=5],
			bmedals:[dialog.medals.bmedals,function(){pr.add("feats","live",1);return [3,7];},(quest.medals[2]-chobj("quest","medals"))>=7],
			fmedals:[dialog.medals.fmedals,function(){charp.points+=10;medsp+=10;numbers($("#point1"),charp.points);return [4,10];},(quest.medals[2]-chobj("quest","medals"))>=10 && medsp<maxMedals()],
			gmedals:[dialog.medals.gmedals.split('%n%').join(maxMedals()),function(){charp.points+=maxMedals();medsp+=maxMedals();numbers($("#point1"),charp.points);return [5,maxMedals()];},(quest.medals[2]-chobj("quest","medals"))>=maxMedals() && medsp==0],
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
	hp_den:["+hp в Дене", "Священник в церквушке Дена может укрепить ваше здоровье, если вы спросите его про дела церкви.",
		1,2,99,function(){return true;},
		function(){pr.add("feats","live",stats.CHA[2]);}],
	light_den:["Легкое оружие в Яме", "При наличии нбольшой суммы в размере 3к монеток можно поднять легкое оружие в зависимости от Вашей харизмы",
		1,2,99,function(){return skills.light[0]>=80 && skills.light[0]<120;},
		function(){pr.add("skills","light",stats.CHA[2]*2,1);}],
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
		1,2,99,function(){return stats.CHA[2] < 3 && skills.oratory[0] > 79;},
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
	trade_up:["Торговля до 240%","C каждой сделкой навык торговли повышается и вот вы уже набрали 240%.",
		1,2,99,function(){return true;},
		function(){pr.add("skills","trade",240 - skills.trade[0],1);}],
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
			idrayfild:["["+questinfo.drayfild[5]+"]",function(){pr.add("skills","energy",10,1);return 6;},true],
			gdrayfild:["["+questinfo.drayfild[6]+"]",function(){pr.add("skills","orderly",5,1);pr.add("skills","doctor",5,1);return 7;},true],
			fdrayfild:["["+questinfo.drayfild[7]+"]",function(){pr.add("skills","thrown",10,1);return 8;},true],
			hdrayfild:[dialog.drynone,function(){return 0;},true]});
		}],
	imp_battle:["Боевой имплант","В вас вживлен один из эксперементальных имплантантов. Ваши боевые навыки увеличены.",
		1,2,99,function(){return true;},
		function(){talk(dialog.imp_battle,{
			aimp_battle:[questinfo.imp_battle[0],function() {return 1;}, true],
			bimp_battle:[questinfo.imp_battle[1],function(){pr.addr("normal", 2, 0);pr.addr("laser", 2, 0);pr.addr("fire", 2, 0);pr.addr("explode", 2, 0);pr.addr("plasma", 2, 0);pr.addr("electro", 2, 0);return 2;},true],				
			cimp_battle:[questinfo.imp_battle[2],function(){pr.add("feats", "dodge", 3);pr.add("feats","live",10);return 3;},true],
			dimp_battle:[questinfo.imp_battle[3],function(){pr.add("feats", "armc", 5);pr.add("feats","live",20);return 4;},true],
			eimp_battle:[questinfo.imp_battle[4],function() {pr.add("feats", "crit", 5);return 5;}, true],
			fimp_battle:[questinfo.imp_battle[5],function(){return 6;},true],
			none:[dialog.none,function(){return 0;},true]});
		}],
	imp_medical:["Медицинский имплант","В вас вживлен один из эксперементальных имплантантов. Ваши познания в медицине увеличены.",
		1,2,99,function(){return true;},
		function(){talk(dialog.imp_medical,{
			aimp_medical:[questinfo.imp_medical[0],function() {pr.add("skills", "orderly", 20);pr.add("skills", "doctor",20);return 1;}, true],
			bimp_medical:[questinfo.imp_medical[1],function(){pr.add("skills", "orderly", 30);return 2;},true],
			cimp_medical:[questinfo.imp_medical[2],function(){pr.add("feats", "levh", 5);pr.add("feats","live",20);return 3;},true],
			dimp_medical:[questinfo.imp_medical[3],function(){pr.add("skills", "doctor", 20);return 4;},true],
			eimp_medical:[questinfo.imp_medical[4],function() {pr.add("skills", "orderly", 20);pr.add("skills", "doctor",20);pr.add("feats","live",20);return 5;}, true],
			fimp_medical:[questinfo.imp_medical[5],function(){pr.add("skills", "doctor", 40);return 6;},true],
			none:[dialog.none,function(){return 0;},true]});
		}],
	imp_auxiliary:["Вспомогательный имплант","В вас вживлен один из эксперементальных имплантантов. Ваши вспомогательные функции увеличены.",
		1,2,99,function(){return true;},
		function(){talk(dialog.imp_auxiliary,{
			aimp_auxiliary:[questinfo.imp_auxiliary[0],function(){pr.add("skills", "steal", 50);return 1;}, true],
			bimp_auxiliary:[questinfo.imp_auxiliary[1],function(){pr.add("feats","maxl",75);return 2;},true],
			cimp_auxiliary:[questinfo.imp_auxiliary[2],function(){pr.add("skills", "oratory", 50);return 3;},true],
			dimp_auxiliary:[questinfo.imp_auxiliary[3],function(){pr.add("skills", "hack", 50);return 4;},true],
			eimp_auxiliary:[questinfo.imp_auxiliary[4],function(){pr.add("skills", "traps", 50);return 5;}, true],
			fimp_auxiliary:[questinfo.imp_auxiliary[5],function(){pr.add("skills", "speed", 50);return 6;},true],
			none:[dialog.none,function(){return 0;},true]});
		}],
	imp_bonus:["Бонусный имплант","В вас вживлен один из эксперементальных имплантантов. Получен бонус.",
		200,30,99,function(){return true;},
		function(){talk(dialog.bonus+(impIVlimit-bonuswaste.length)+dialog.bonus2,{
		bonus1:[questinfo.imp_bonus[0],function(){pr.add("skills","ranger",25);bonuswaste.push(1);return [1,1];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(1) == -1)],
		bonus2:[questinfo.imp_bonus[1],function(){pr.add("skills","ranger",20);bonuswaste.push(2);return [2,2];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(2) == -1)],
		bonus3:[questinfo.imp_bonus[2],function(){pr.add("skills","oratory",15);bonuswaste.push(3);return [3,3];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(3) == -1)],
		bonus4:[questinfo.imp_bonus[3],function(){bonuswaste.push(4);return [4,4];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(4) == -1)],
		bonus5:[questinfo.imp_bonus[4],function(){pr.add("feats","stox",20);bonuswaste.push(5);return [5,5];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(5) == -1)],
		bonus6:[questinfo.imp_bonus[5],function(){pr.add("feats","srad",20);bonuswaste.push(6);return [6,6];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(6) == -1)],
		bonus7:[questinfo.imp_bonus[6],function(){pr.add("skills","steal",30);bonuswaste.push(7);return [7,7];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(7) == -1)],
		bonus8:[questinfo.imp_bonus[7],function(){bonuswaste.push(8);return [8,8];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(8) == -1)],
		bonus9:[questinfo.imp_bonus[8],function(){charp.points+=10;pr.add("feats","maxl",50);bonuswaste.push(9);return [9,9];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(9) == -1)],
		bonus10:[questinfo.imp_bonus[9],function(){pr.add("feats","mdmg",Math.floor(skills["melee"][0]/30));bonuswaste.push(10);return [10,10];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(10) == -1)],
		bonus11:[questinfo.imp_bonus[10],function(){pr.add("feats","proc",4);bonuswaste.push(11);return [11,11];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(11) == -1)],
		bonus12:[questinfo.imp_bonus[11],function(){pr.add("feats","live",12);bonuswaste.push(12);return [12,12];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(12) == -1)],
		bonus13:[questinfo.imp_bonus[12],function(){bonuswaste.push(13);return [13,13];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(13) == -1)],
		bonus14:[questinfo.imp_bonus[13],function(){bonuswaste.push(14);return [14,14];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(14) == -1)],
		bonus15:[questinfo.imp_bonus[14],function(){bonuswaste.push(15);return [15,15];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(15) == -1)],
		bonus16:[questinfo.imp_bonus[15],function(){bonuswaste.push(16);return [16,16];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(16) == -1)],
		bonus17:[questinfo.imp_bonus[16],function(){pr.add("skills","repair",10);pr.add("skills","science",10);bonuswaste.push(17);return [17,17];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(17) == -1)],
		bonus18:[questinfo.imp_bonus[17],function(){bonuswaste.push(18);return [18,18];},(impIVlimit-bonuswaste.length >=1 && bonuswaste.indexOf(18) == -1)],
		none:[dialog.none,function(){return 0;},true]});
		}],
	PE_MA_SKIT:["Житель Пустоши(5)", 'Вы настолько изучили пустошь, что получаете +5% к навыку Скиталец и +1% к скорости по глобалу.',
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
