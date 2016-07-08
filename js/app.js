var leveluping = 0;
var regi = 1;
var medsp = 0;

function getRandInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var totalskill = {} // Сколько вкачено навыков на каждом уровне
var totalperk = {}
var totalquest = {}

var character = {
	name:	"",
	age:	getRandInt(14, 60),
	sex:	"man",
	level:	1,
	exp:	0,
	nextexp:1000,
	karma:	0,
	crlistperk: "",
	selectperk: "",
	selectquest: "",
	perkpoint: 0
}

var stats = { // стат, добавленный стат
	specialpoint: 5,
	str: [5, 0, 0], 	// Сила
	per: [5, 0, 0],		// Восприятие
	enu: [5, 0, 0],		// Выносливость
	cha: [5, 0, 0],		// Обаяние
	intl:[5, 0, 0],		// Интелект
	agi: [5, 0, 0],		// Ловкость
	luc: [5, 0, 0]		// Удача
};

var textstats = { // Статы описание
	str: ["Cила",""],
	per: ["Восприятие",""],
	enu: ["Выносливость",""],
	cha: ["Обаяние",""],
	intl: ["Интелект",""],
	agi: ["Ловкость",""],
	luc: ["Удача",""]
};
var SkillMod = { // SkillMod.Add2
	MaxValue: 300,
    Add2: 100,
    Add3: 125,
    Add4: 150,
    Add5: 175,
    Add6: 200
};
	
var skills = {	// навык, добавленый навык, добавленный за уровень, тагнутый
	tags: 	 3,	
	points:  0,	
	light: 	[0, 0, 0, 0],	// легкое
	heavy: 	[0, 0, 0, 0],	// тяжелое
	energy:	[0, 0, 0, 0],	// энерго
	melee: 	[0, 0, 0, 0],	// рукопашка
	steel: 	[0, 0, 0, 0],	// холодное
	thrown: [0, 0, 0, 0],	// метательное
	orderly:[0, 0, 0, 0],	// санитар
	doctor: [0, 0, 0, 0],	// доктор
	sneak: 	[0, 0, 0, 0],	// сник
	hack: 	[0, 0, 0, 0],	// взлом
	steal: 	[0, 0, 0, 0],	// воровство
	traps: 	[0, 0, 0, 0],	// ловушки
	science:[0, 0, 0, 0],	// наука
	repair: [0, 0, 0, 0],	// ремонт
	oratory:[0, 0, 0, 0],	// красноречие
	trade: 	[0, 0, 0, 0],	// торговля
	speed: 	[0, 0, 0, 0],	// атлетизм
	ranger: [0, 0, 0, 0]	// скиталец
}

var textskills = {	// навыки описание
	light: ["легкое","Легкое оружие"],
	heavy: ["тяжелое","Тяжелое оружие"],
	energy: ["энерго","Энергооружие"],
	melee: ["рукопашка","Рукопашная"],
	steel: ["холодное","Холодное оружие"],
	thrown: ["метательное","Метательное оружие"],
	orderly: ["санитар","Санитар"],
	doctor: ["доктор","Доктор"],
	sneak: ["сник","Скрытность"],
	hack: ["взлом","Взлом замков"],
	steal: ["воровство","Воровство"],
	traps: ["ловушки","Ловушки"],
	science: ["наука","Наука"],
	repair: ["ремонт","Ремонт"],
	oratory: ["красноречие","Красноречие"],
	trade: ["торговля","Торговля"],
	speed: ["атлетизм","Атлетизм"],
	ranger: ["скиталец","Скиталец"]
}

var book = {
	light: [10,0],
	energy: [10,0],
	orderly: [10,0],
	science: [10,0],
	repair: [10,0],
	ranger: [10,0],
	prewar: [20,0]
}
var textbook = {
	light: "Легкое оружие",
	energy: "Энергетическое оружие",
	orderly: "Первая помощь",
	science: "Наука",
	repair: "Ремонт",
	ranger: "Скиталец",
	prewar: "Довоенки"
}

var feat = { // параметр, добавленный параметр, добавленный за уровень
	dodge:	[0, 0, 0],	// уклон
	live: 	[0, 0, 0],	// жизни
	armc: 	[0, 0, 0],	// класс брони
	apoi: 	[0, 0, 0],	// ОД
	maxl: 	[0, 0, 0],	// макс груз
	mdmg: 	[0, 0, 0],	// рукоп повр
	oview: 	[0, 0, 0],	// радиус обзора
	stox: 	[0, 0, 0, 1],	// уст к яду
	srad: 	[0, 0, 0, 1],	// уст к рад
	proc: 	[0, 0, 0],	// порядок
	levh: 	[0, 0, 0],	// уров лечения
	crit: 	[0, 0, 0]	// шанс на крит
}

var textfeat = { // параметры описание
	dodge:	["улонение",""],
	live: ["жизни",""],
	armc: ["класс брони",""],
	apoi: ["ОД",""],
	maxl: ["макс груз",""],
	mdmg: ["рукоп повр",""],
	oview: ["радиус обзора",""],
	stox: ["уст к яду",""],
	srad: ["уст к рад",""],
	proc: ["порядок",""],
	levh: ["уров лечения",""],
	crit: ["шанс на крит",""]
}

var resist = {
	normal:		{asb:[0, 0, 0], res:[0, 0, 0]},
	laser:		{asb:[0, 0, 0], res:[0, 0, 0]},
	fire:		{asb:[0, 0, 0], res:[0, 0, 0]},
	plasma:		{asb:[0, 0, 0], res:[0, 0, 0]},
	explode:	{asb:[0, 0, 0], res:[0, 0, 0]},
	electro:	{asb:[0, 0, 0], res:[0, 0, 0]},
}

var traits = {
	summ: 2,
	traits0: [function(){	// Быстрый метаболизм
							// Плюсы: Добавляется 60 жизней и 15 к уровню лечения.
							// Минусы: Обнуляется защита к радиации и отравлению. Уменьшает защиту от радиации и отравления в 2 раза. Яд не выводится из организма самостоятельно.
			if(!this[1] && traits.summ>0) {
				feat.live[1]+=60; 
				feat.levh[1]+=15; 
				feat.stox[3] = 0; 
				feat.srad[3] = 0; 
				this[1] = 1;
				traits.summ--;	}
			else if(this[1] && traits.summ<2) {
				feat.live[1]-=60; 
				feat.levh[1]-=15; 
				feat.stox[3] = 1; 
				feat.srad[3] = 1; 
				this[1] = 0;
				traits.summ++;	}
			},0],
	traits1: [function(){	// Крушила Плюсы: +3 силы, игнор тиков плазмы. Минусы: -1 Очко Действия (ОД).
			if(!this[1] && traits.summ>0) {
				stats.str[0]+=3; 
				feat.apoi[1]-=1;
				this[1] = 1;
				traits.summ--;	}
			else if(this[1] && traits.summ<2) {
				stats.str[0]-=3;
				feat.apoi[1]+=1;
				this[1] = 0;
				traits.summ++;	}
			},0],
	traits2: [function(){	// Хилое тело 
							// Плюсы: +1 ловкости, +5% к увороту.
							// Минусы: Уменьшает максимальный переносимый вес относительно силы персонажа.
			if(!this[1] && traits.summ>0) {
				feat.dodge[1]+=5;
				stats.agi[0]+=1; 
				this[1] = 1;
				traits.summ--;	}
			else if(this[1] && traits.summ<2) {
				feat.dodge[1]-=5;
				stats.agi[0]-=1; 
				this[1] = 0;
				traits.summ++;	}
			},0],
	traits3: [function(){	//	Однорукий 
							//	Плюсы: Игнор силы на одноручное, +60 к навыку одноручного оружия.
							//	Минусы: -40 к навыку при использовании двуручного оружия.
			if(!this[1] && traits.summ>0) {
				this[1] = 1; 
				traits.summ--;	} 
			else if(this[1] && traits.summ<2) {
				this[1] = 0; 
				traits.summ++;	
			}
			},0],
	traits4: [function(){	// Точность
							// Плюсы: +20% к шансу критической атаки. -10 к проверке на силу критического эффекта при атаке по вам.
							// Минусы: -5% к урону.
			if(!this[1] && traits.summ>0){
				feat.crit[1]+=20;
				this[1] = 1; 
				traits.summ--;	} 
			else if(this[1] && traits.summ<2){
				feat.crit[1]-=20;
				this[1] = 0; 
				traits.summ++;	
			}
			},0],
	traits5: [function(){	// Камикадзе
							// Плюсы: +1 Ловкости. Каждые 10 секунд вы восстанавливаете 1 ОД. Если вы не в бою - первая атака отнимет на 2 ОД меньше. Игнорирование эффекта "Подавление".
							// Минусы: Персонаж не получает КБ от параметра Ловкости.
			if(!this[1] && traits.summ>0){
				stats.agi[1]+=1; 
				this[1] = 1; 
				traits.summ--;	} 
			else if(this[1] && traits.summ<2){
				stats.agi[1]-=1; 
				this[1] = 0; 
				traits.summ++;	
			}
			},0],
	traits6: [function(){	// Громила
							// Плюсы: +25 к рукопашным повреждениям (урезаются повреждения у Доп. рукопашн. повр. и у Слеера)
							// Минусы: -30 критролла.
			if(!this[1] && traits.summ>0){
				feat.mdmg[1]+=25;
				this[1] = 1; 
				traits.summ--;	} 
			else if(this[1] && traits.summ<2){
				feat.mdmg[1]-=25;
				this[1] = 0; 
				traits.summ++;	
			}
			},0],
	traits7: [function(){	// Быстрый стрелок
							// Плюсы: Атаки стрелковым и метательным оружием требуют меньше на 1 ОД.
							// Минусы: Полностью отсутствует прицельный режим атаки. Критический урон не удваивается, хотя эффекты остаются.
			if(!this[1] && traits.summ>0){
				this[1] = 1; 
				traits.summ--;	} 
			else if(this[1] && traits.summ<2){
				this[1] = 0; 
				traits.summ++;	
			}
			},0],
	traits8: [function(){	// Маньяк
							// Плюсы: +175 к навыку Атлетизма.
							// Минусы: -25 ОЗ.
			if(!this[1] && traits.summ>0){
				skills.speed[1]+=175;
				feat.live[1]-=25;
				this[1] = 1; 
				traits.summ--;	} 
			else if(this[1] && traits.summ<2){
				skills.speed[1]-=175;
				feat.live[1]+=25;
				this[1] = 0; 
				traits.summ++;	
			}
			},0],
	traits9: [function(){	// Дурной глаз
							// Плюсы: Промах по вам станет для соперника критическим с 50% вероятностью.
							// Минусы: Вы критически промахиваетесь с этой же вероятностью.
			if(!this[1] && traits.summ>0){
				this[1] = 1; 
				traits.summ--;	} 
			else if(this[1] && traits.summ<2){
				this[1] = 0; 
				traits.summ++;	
			}
			},0],
	traits10: [function(){	// Добродушие
							// Плюсы: +25 к навыкам Санитар, Доктор, Красноречие и Торговля. НПЦ-люди не атакуют на энкаунтерах. Влияет на формулу бонуса от КБ и снижает урон от мастеров-перков (см. Перки).
							// Минусы: Все боевые навыки уменьшаются на 15.
			if(!this[1] && traits.summ>0){
				skills.orderly[1]+=15;
				skills.doctor[1]+=25;
				skills.oratory[1]+=35;
				skills.trade[1]+=25;
				skills.light[1]-=15;
				skills.heavy[1]-=15;
				skills.energy[1]-=15;
				skills.steel[1]-=10;
				skills.melee[1]-=10;
				skills.thrown[1]-=10;
				this[1] = 1; 	
				traits.summ--;	} 
			else if(this[1] && traits.summ<2){
				skills.orderly[1]-=15;
				skills.doctor[1]-=25;
				skills.oratory[1]-=35;
				skills.trade[1]-=25;
				skills.light[1]+=15;
				skills.heavy[1]+=15;
				skills.energy[1]+=15;
				skills.steel[1]+=10;
				skills.melee[1]+=10;
				skills.thrown[1]+=10;
				this[1] = 0; 
				traits.summ++;	
			}
			},0],
	traits11: [function(){	// Химик
							// Плюсы: Наркотики держатся в три раза дольше. Откаты почти мнгновенные. Но если есть привыкание, оно держится долго.
							// Минусы: Привыкание в два раза чаще.
			if(!this[1] && traits.summ>0){
				this[1] = 1; 
				traits.summ--;	} 
			else if(this[1] && traits.summ<2){
				this[1] = 0; 
				traits.summ++;	
			}
			},0],
	traits12: [function(){	// Стабильный
							// Плюсы: Вы никогда критически не промахиваетесь, +25 бонуса к окончательной точности (даже в дыму). Игнорируется эффект плазмы (тики).
							// Минусы: Вы никогда критически не попадаете.
			if(!this[1] && traits.summ>0){
				this[1] = 1; 
				traits.summ--;	} 
			else if(this[1] && traits.summ<2){
				this[1] = 0; 
				traits.summ++;	
			}
			},0],
	traits13: [function(){	// Жидкое тело
							// Плюсы: Каждый выстрел наносит вам на 10 повреждений меньше. Игнорирование тиков от огня. +50 веса.
							// Минусы: Стимуляторы и Санитар не работают в полную мощь (-20 к отхилу).
			if(!this[1] && traits.summ>0){
				feat.maxl[1]+=50;
				this[1] = 1; 
				traits.summ--;	} 
			else if(this[1] && traits.summ<2){
				feat.maxl[1]-=50;
				this[1] = 0; 
				traits.summ++;	
			}
			},0],
	traits14: [function(){	// Умелец
							// Плюсы: +1 к Силе, Восприятию, Выносливости, Харизме, Интеллекту, Ловкости и Удаче.
							// Минусы: Перк дается через 4 уровня, а не через 3.
			if(!this[1] && traits.summ>0){
				stats.enu[1]+=2;
				stats.cha[1]+=2;
				stats.intl[1]+=2;
				stats.agi[1]+=2;
				feat.live[1]+=25; 
				
				this[1] = 1; 
				traits.summ--;	} 
			else if(this[1] && traits.summ<2){
				stats.enu[1]-=2;
				stats.cha[1]-=2;
				stats.intl[1]-=2;
				stats.agi[1]-=2;
				feat.live[1]-=25;
				this[1] = 0; 
				traits.summ++;	
			}
			},0],
	traits15: [function(){	// Импульсивный
							// Плюсы: +2 ОД, +20 к навыку Метания.
							// Минусы: -3 Очков Умений за каждый уровень.
			if(!this[1] && traits.summ>0){
				feat.apoi[1]+=2;
				skills.thrown[1]+=20;
				this[1] = 1; 
				traits.summ--;	} 
			else if(this[1] && traits.summ<2){
				feat.apoi[1]-=2;
				skills.thrown[1]-=20;
				this[1] = 0; 
				traits.summ++;	
			}
			},0]
}

//function $("#"+ id ) { return document.getElementById( id ); }

function trait(){	// Выбор трейта
	var str = this.id.substr(3);
	traits[str][0]();
	statpoints();
	settle();
	if(traits[str][1]) $("#"+str).css("color", "#ABABAB");
	else $("#"+str).css("color", "#00FF00");
	infoparm("traits",str);
}

function tagnumb(){	// Обновление тагнутых поинтов)
	var link = $("#point2");
	link.html("");
	var n = skills["tags"];
	var col = 1;
	var num = [0, 0];
	if (n>99) n=99;
	num[1] = Math.floor(n/10);
	num[0] = Math.floor(n/1)-num[1]*10;
	for(var i = col; i>=0; i--)
		link.append("<img src=\"img/"+num[i]+".png\" onload=\"imgLoaded(this)\">");
}

function tags() {	// Выбор тагнутых навыков
	var str = this.id.substr(3);
	if(!skills[str][3] && skills["tags"] > 0) {
		skills[str][3] = 1 ;
		skills["tags"]--;
		skills[str][1]+=20;
		$("#"+str+"s").css("color", "#ABABAB");
		$("#"+str).css("color", "#ABABAB");
	}
	else if(skills[str][3] && skills["tags"] < 3)	{
		skills[str][3] = 0;
		skills["tags"]++;
		skills[str][1]-=20;
		$("#"+str+"s").css("color", "#00FF00");
		$("#"+str).css("color", "#00FF00");
	}
	tagnumb();
	settle();
}

function settle() {	// расчеты навыков и параметров и их обновление
	var link;
	// Легкое оружие
	skills.light[0] = skills.light[2] + skills.light[1] + 5 + stats.agi[0]*4;					
	// Тяжелое
	skills.heavy[0] = skills.heavy[2] + skills.heavy[1] + stats.agi[0]*2;						
	// Энергетическое
	skills.energy[0] = skills.energy[2] + skills.energy[1] + 0 + stats.agi[0]*2;					
	// Рукопашка
	skills.melee[0] = skills.melee[2] + skills.melee[1] + 30 + (stats.str[0]+stats.agi[0])*2;	
	// Холодное
	skills.steel[0] = skills.steel[2] + skills.steel[1] + 20 + (stats.str[0]+stats.agi[0])*2;	
	// Метательное
	skills.thrown[0] = skills.thrown[2] + skills.thrown[1] + stats.agi[0]*4;						
	// Санитар
	skills.orderly[0] = skills.orderly[2] + skills.orderly[1] + (stats.per[0]+stats.intl[0])*2;		
	// Доктор
	skills.doctor[0] = skills.doctor[2] + skills.doctor[1] + 5 + stats.per[0]+stats.intl[0];		
	// Скрытность
	skills.sneak[0] = skills.sneak[2] + skills.sneak[1] + 5 + stats.agi[0]*3;					
	// Взлом
	skills.hack[0] = skills.hack[2] + skills.hack[1] + 10 + stats.agi[0]+ stats.per[0];		
	// Воровство
	skills.steal[0] = skills.steal[2] + skills.steal[1] + stats.agi[0]*3;						
	// Ловушки
	skills.traps[0] = skills.traps[2] + skills.traps[1] + 10 + stats.agi[0]+ stats.per[0];		
	// Наука
	skills.science[0] = skills.science[2] + skills.science[1] + stats.intl[0]*4;					
	// Ремонт
	skills.repair[0] = skills.repair[2] + skills.repair[1] + stats.intl[0]*3;						
	// Красноречие
	skills.oratory[0] = skills.oratory[2] + skills.oratory[1] + stats.cha[0]*5;						
	// Торговля
	skills.trade[0] = skills.trade[2] + skills.trade[1] + stats.cha[0]*4;						
	// Атлет
	skills.speed[0] = skills.speed[2] + skills.speed[1] + 0;									
	// Скиталец
	skills.ranger[0] = skills.ranger[2] + skills.ranger[1] + (stats.enu[0]+stats.intl[0])*2;	

	
	str = stats.str[0] + stats.str[1];
	enu = stats.enu[0] + stats.enu[1];
	per = stats.per[0] + stats.per[1];
	luc = stats.luc[0] + stats.luc[1];
	agi = stats.agi[0] + stats.agi[1];
	cha = stats.cha[0] + stats.cha[1];
	
	// Жизни
	feat.live[0] = feat.live[2] + feat.live[1] + 30 + str + enu*2;		
	// Класс брони
	feat.armc[0] = feat.armc[2] + feat.armc[1] + agi*(traits.traits5[1] ? 0 : 1)+(traits.traits5[1] ? 1 : 0);							
	// Очки действий
	feat.apoi[0] = feat.apoi[2] + feat.apoi[1] + 5 + Math.floor(agi/2);			
	// Макс груз
	//feat.maxl[0] = feat.maxl[2] + feat.maxl[1] + 11 + str*11 + Math.round(traits.traits2[1] ?(str)*(-4.24):(str-1)*0.32);	
	feat.maxl[0] = feat.maxl[2] + feat.maxl[1] + Math.round(0.453*( 25 + str * ( 25 - traits.traits2[1] * 10 )));
	
	/*console.log(453*( 25 + str * ( 25 - traits.traits2[1] * 10 ) ));
	console.log(11 + str*11 + (traits.traits2[1] ?(str)*(-4.24):(str-1)*0.32));*/
	// Рукоп. повр.
	feat.mdmg[0] = feat.mdmg[2] + feat.mdmg[1] + (str > 5 ? str-5 : 1);	
	// Радиус обзора
	feat.oview[0] = feat.oview[2] + feat.oview[1] + 20 + per*3;										
	// Уст. яду
	feat.stox[0] = feat.stox[2] + feat.stox[1] + feat.stox[3]*enu*5;
	if(feat.stox[0]>95) feat.stox[0] = 95;
	// Уст. радиации
	feat.srad[0] = feat.srad[2] + feat.srad[1] + feat.srad[3]*enu*2;	
	if(feat.srad[0]>95) feat.srad[0] = 95;
	// Порядок
	feat.proc[0] = feat.proc[2] + feat.proc[1] + per*2;							
	// Уровень лечения
	feat.levh[0] = feat.levh[2] + feat.levh[1] + (enu > 5 ? Math.floor(enu/3) : 1);	
	// Крит
	feat.crit[0] = feat.crit[2] + feat.crit[1] + luc;	

	//Уворот
	feat.dodge[0] = feat.dodge[2] + feat.dodge[1] + cha + (perk.PE_HTH_EVADE[0] ? (feat.apoi[0]/4)+(feat.apoi[0]/2) : 0);
	
	$("#live").html(feat.live[0]+"/"+feat.live[0]);
	$("#crit").html(feat.crit[0]+"%");
	$("#dodge").html(feat.dodge[0]+"%");
	
	
	for(var n in resist) {
		resist[n].asb[0] = resist[n].asb[1] + resist[n].asb[2];
		resist[n].res[0] = resist[n].res[1] + resist[n].res[2];
		$("#"+n).html(resist[n].asb[0]+"/"+resist[n].res[0]+"%");
	}
	for(var j in skills){
		if(j != "tags" && j != "points") {
			if(skills[j][0] > 300) skills[j][0] = 300;
			$("#"+j).html(skills[j][0]+"%");
		}
	}
	for(var j in feat){
		if(j != "crit" && j != "live" && j != "dodge") {
			$("#"+j).html(feat[j][0]);
		}
	}
}
// Обновление без полного перерасчета
function settle0() { 
	for(var n in resist) {
		resist[n].asb[0] = resist[n].asb[1] + resist[n].asb[2];
		resist[n].res[0] = resist[n].res[1] + resist[n].res[2];
		$("#"+n).html(resist[n].asb[0]+"/"+resist[n].res[0]+"%");
	} 
	for(var j in skills)
		if(j != "tags" && j != "points") {
			skills[j][0] = skills[j][2] + skills[j][1];
			$("#"+j).html(skills[j][0]+"%");
		}
	for(var j in feat)
		if(j != "crit" && j != "live" && j != "dodge") {
			feat[j][0] = feat[j][2] + feat[j][1];
			$("#"+j).html(feat[j][0]);
		}
	feat.live[0] = feat.live[2] + feat.live[1];
	$("#live").html(feat.live[0]+"/"+feat.live[0]);
	$("#crit").html(feat.crit[0]+"%");
	$("#dodge").html(feat.dodge[0]+"%");
}



function statpoints(){	// Обновление статов
	for(var j in stats)	{
		var link = $("#"+j);
		link.html("");
		var n = stats[j];
		if(j != "specialpoint") {
			n = stats[j][0] + stats[j][1];
			var str = "";
			switch (n) {
				case 1: str = "Гадко"; break;
				case 2: str = "Плохо"; break;
				case 3: str = "Низко"; break;
				case 4: str = "Непл."; break;
				case 5: str = "Средн."; break;
				case 6: str = "Хорош."; break;
				case 7: str = "Высок."; break;
				case 8: str = "Отлич."; break;
				case 9: str = "Круто"; break;
				case 10: str = "Герой!"; break;
			}
			$("#"+j+"t").html(str);
		}
		var num = [0, 0];
		if(n>99) n = 99;
		num[1] = Math.floor(n/10);
		num[0] = Math.floor(n/1)-num[1]*10;
		for(var i = 1; i>=0; i--)
			link.append("<img src=\"img/"+num[i]+".png\" onload=\"imgLoaded(this)\">");
		createlistperk();
	}
}

function plusspec(pop){	// Добавление стата
	var str = this.id.substr(4);
	var n = stats[str][0] + stats[str][1];
	var s = stats["specialpoint"];
	if (n<10 && s!=0)
	{
		n++;
		s--;
	}
	stats[str][0] = n - stats[str][1];
	stats["specialpoint"] = s;
	statpoints();
	settle();
}

function minusspec(pop){	// Отнимание стата
	var str = this.id.substr(5);
	var n = stats[str][0] + stats[str][1];
	if(traits.traits14[1] && n < 4 && str != "str" && str != "per" && str != "luc") return;
	var s = stats["specialpoint"];
	if (n>1)
	{
		n--;
		s++;
	}
	stats[str][0] = n - stats[str][1];
	stats["specialpoint"] = s;
	statpoints();
	settle();
}

function spoints(){	// обновление скилпоинтов
	var link = $("#point1");
	link.html("");
	var n = skills.points;
	var col = 1;
	var num = [0, 0, 0];
	if (n>99) {	num[2] = Math.floor(n/100); col++; }
	num[1] = Math.floor(n/10)-num[2]*10;
	num[0] = Math.floor(n/1)-num[1]*10-num[2]*100;
	for(var i = col; i>=0; i--)
		link.append("<img src=\"img/"+num[i]+".png\" onload=\"imgLoaded(this)\">");
}

/*function plus()	// прокачка навыков
{
	var n = skills[this.id.substr(4)][0];	// Навык
	var m = skills[this.id.substr(4)][2];	// Прибавленно на уровне
	var s = skills.points;					// Очки навыков
	if(s>0)
	{		
		if(n%2)	// нечетный
		{
			if(n<101 && s>=1)		s-=1;
			else if(n<127 && s>=2)	s-=2;
			else if(n<151 && s>=3)	s-=3;
			else if(n<177 && s>=4)	s-=4;
			else if(n<201 && s>=5)	s-=5;
			else if(n<300 && s>=6)	s-=6;
			else return;
		}
		else	// четный
		{
			if(n<102 && s>=1)		s-=1;
			else if(n<126 && s>=2)	s-=2;
			else if(n<152 && s>=3)	s-=3;
			else if(n<176 && s>=4)	s-=4;
			else if(n<202 && s>=5)	s-=5;
			else if(n<300 && s>=6)	s-=6;
			else return;
		}
		if(!skills[this.id.substr(4)][3])	m+=1;
		else m+=2
		skills.points = s;
		skills[this.id.substr(4)][2] = m;
		spoints();
		settle();
	}
}*/

function plus() {
	var n = skills[this.id.substr(4)][0];
	if( n >= SkillMod.MaxValue ) return;

	var s = 1;
	if( n > SkillMod.Add6 ) s = 6;
	else if( n > SkillMod.Add5 ) s = 5;
	else if( n > SkillMod.Add4 ) s = 4;
	else if( n > SkillMod.Add3 ) s = 3;
	else if( n > SkillMod.Add2 ) s = 2;
	if( skills.points < s ) return;
	n++;
	if( skills[this.id.substr(4)][3] && n < SkillMod.MaxValue )
		n++;
	skills[this.id.substr(4)][2] += n - skills[this.id.substr(4)][0];
	skills.points -= s;
	spoints();
	settle();
}



/*function minus()	// откачка навыков
{
	var n = skills[this.id.substr(5)][0];	// Навык
	var m = skills[this.id.substr(5)][2];	// Прибавленно на уровне
	var s = skills.points;					// Очки навыков
	if(m>0)
	{
		if(n%2)	// нечетный
		{
			if(n<=101)		s+=1;
			else if(n<=125)	s+=2;
			else if(n<=151)	s+=3;
			else if(n<=175)	s+=4;
			else if(n<=201)	s+=5;
			else if(n<=300)	s+=6;
		}
		else	// четный
		{
			if(n<=100)		s+=1;
			else if(n<=126)	s+=2;
			else if(n<=150)	s+=3;
			else if(n<=176)	s+=4;
			else if(n<=202)	s+=5;
			else if(n<=300)	s+=6;
			
		}
		if(!skills[this.id.substr(5)][3])	m-=1;
		else m-=2
		skills.points = s;
		skills[this.id.substr(5)][2] = m;
		spoints();
		settle();
	}
}*/

function minus() {
	var skillid = this.id.substr(5);
	var n = skills[skillid][0];
	if( n <= 0 ||  skills[skillid][2] <= 0) return;
	
	var tag = skills[skillid][3] ? 2 : 1;
	for(var i = 0; i < tag; i++) {
	var s = 1;
	if( n > SkillMod.Add6 + 1 ) s = 6;
	else if( n > SkillMod.Add5 + 1 ) s = 5;
	else if( n > SkillMod.Add4 + 1 ) s = 4;
	else if( n > SkillMod.Add3 + 1 ) s = 3;
	else if( n > SkillMod.Add2 + 1 ) s = 2;
	if(n > 0 )
		n--;
	}
	skills[skillid][2] += n - skills[skillid][0];
	skills.points += s;
	spoints();
	settle();
}

function modalCloseEsc (pop) {	// скрытие окон по Esc
  if ( !pop.keyCode || pop.keyCode === 27 ) {
	$("#entername").hide();
	$("#enterage").hide();
	$("#entersex").hide();
	$("#wrap").hide();
	$("#perk").hide();
	$("#quest").hide();
	$("#total").hide();
  }
}

function modalCloseClick () {	// скрытие окон по клику
	$("#entername").hide();
	$("#enterage").hide();
	$("#entersex").hide();
	$("#wrap").hide();
}

function showthis() {
	str = this.id;
	$("#enter"+str).show();
	$("#wrap").show();
}
// Обновление возраста
function numberage() {
	var link = $("#numberage");
	link.html("");
	var n = character.age;
	$("#age").html(n);
	var col = 1;
	var num = [0, 0];
	if (n>99) n=99;
	num[1] = Math.floor(n/10);
	num[0] = Math.floor(n/1)-num[1]*10;
	for(var i = col; i>=0; i--)
		link.append("<img src=\"img/"+num[i]+".png\" onload=\"imgLoaded(this)\">");
}
function plusage() { // Прибавить возраст
	character.age++;
	if(character.age>60) character.age = 14;
	numberage();
}
function minusage() { // Отнять возраст
	character.age--;
	if(character.age<14) character.age = 60;
	numberage();
}
// Смена пола
function changesex() {
	if(this.id === "men" && character.sex !== "men") {
		character.sex = "men";
		$("#men").css('backgroundImage', 'url(img/men.png)');
		$("#women").css('backgroundImage', '');
		$("#sex").html("МУЖ.");
	}
	else if(this.id === "women" && character.sex !== "women") {
		character.sex = "women";
		$("#women").css('backgroundImage', 'url(img/women.png)');
		$("#men").css('backgroundImage', '');
		$("#sex").html("ЖЕН.");
	}
}
// Переход к прокачке
function leveling() {
	if((!stats.specialpoint && !skills.tags)||leveluping){
		if(regi) {
			$('title').text("Прокачка персонажа");
			$("#main").animate({'opacity':'0'},100);
			$("#main").css('backgroundImage', "url(img/char.gif)");
			$(".reg").hide();
			$(".leveling").show();
			$("#level").html(character.level);
			$("#exp").html(character.exp);
			$("#nextexp").html(character.nextexp);
			spoints();
			$("<div/>", {"id": "select"}).appendTo("#main").css({	'backgroundImage': 	"url(img/skillpad.png)", 
																	"position": 		"absolute",
																	"top":				"-9px",
																	"left":				"324px",
																	"width":			"286px",
																	"height":			"70px",
																	"z-index":			"100"
																	});
			var pl = $("<div/>", {"id": "pluslight"}).appendTo("#select").css({	
																	"position": 		"absolute",
																	"left":				"246px",
																	"width":			"33px",
																	"height":			"33px"});
			var mi = $("<div/>", {"id": "minuslight"}).appendTo("#select").css({
																	"position": 		"absolute",
																	"left":				"246px",
																	"top":				"33px",
																	"width":			"33px",
																	"height":			"33px"});
			
			pl.mousedown(	function()	{pl.css('backgroundImage',"url(img/greendot_big.png)")});
			pl.mouseup(	function()	{pl.css(	'backgroundImage', 	"")});
			mi.mousedown(function()	{mi.css('backgroundImage', 	"url(img/greendot_big.png)")});
			mi.mouseup(	function()	{mi.css(	'backgroundImage', 	"")});
			pl.click(plus);
			mi.click(minus);
			var plInterval;
			var collp = 1;
			var collm = 1;
			pl.on('mousedown', function(){
				clearInterval(plInterval);
				collp = 1;
				plInterval = setInterval(function(){
					for(var i = 0; i<collp; i++) pl.click();
					if(collp<10) collp+=2;
				}, 200);
			});
			pl.on('mouseup mouseout', function(){
				clearInterval(plInterval);
			});		
			var miInterval;
			mi.on('mousedown', function(){
				clearInterval(miInterval);
				collm = 1;
				miInterval = setInterval(function(){
					for(var i = 0; i<collm; i++) mi.click();
					if(collm<10) collm+=2;
				}, 200);
			});
			mi.on('mouseup mouseout', function(){
				clearInterval(miInterval);
			});
			showlistperk();
			regi = 0;
			$("#nameparm").html("");
			$("#textparm").html("");
			$("#imgparm").html("");
			$("#main").animate({'opacity':'1'},500);
		}
	}	
	else alert("Не распределены special point или не тагнуты 3 навыка!");
	
}
// Переход обратно к созданию
function reg(){
	location.reload();
	return;
	if(!regi) {
		$('title').text("Создание персонажа");
		$("#main").css('backgroundImage', "url(img/reg.png)");
		$("body").css('backgroundImage', "");
		$(".reg").show();
		$(".leveling").hide();
		$("#select").remove();
		for(var j = 1; j<4;j++) $("#textlist"+j).hide();
		regi = 1;
	}
}
// Получить количество опыта необходимое для этого уровня
function levelexp(n) {
	var e = 0;
	for(var i=0; i<n;i++) e += i*1000;
	return e; 
}
// Переход между вкладками БОНУСЫ КНИГИ КВЕСТЫ
function switchinfo() {
	var n = +this.id.substr(10);
	for(var i = 1; i<4;i++) {
		if(n===i) { 
			if($("#textlist1").is(":visible")&&character.perkpoint) {
				listperkup();
			}
			else if(n===3) {
				listquestup();
			}
			$("#textlist"+i).show();
			$("#switch"+i).css('backgroundImage', "url(img/switchon.png)");
			$("#textswitch"+i).css('top', "7px");

		}
		else {
			$("#switch"+i).css('backgroundImage', "url(img/switchoff.png)");
			$("#textswitch"+i).css('top', "9px");
			$("#textlist"+i).hide();
		}
		
	}
}
// Выбор навыка для прокачки
function selectskill() {
	var n = $("#select").remove();
	var tops = this.offsetParent.offsetTop + this.offsetTop - 27;
	var lefts = this.offsetParent.offsetLeft + this.offsetLeft - 6;
	/*var n = $("<div/>", {"id": "select"}).appendTo("#main").css({	'backgroundImage': 	"url(img/skillpad.png)", 
																	"position": 		"absolute",
																	"top":				tops+"px",
																	"left":				lefts+"px",
																	"width":			"286px",
																	"height":			"70px",
																	"z-index":			"1"
																	});*/
	n.appendTo("#main").css({	"top":				tops+"px",
								"left":				lefts+"px",
								});
	
	var pl = n.find("div")[0].id = "plus" + this.id.substr(4);
	var mi = n.find("div")[1].id = "minus" + this.id.substr(4);
	
	$("#"+pl).mousedown(function(){$("#"+pl).css('backgroundImage',"url(img/greendot_big.png)")});
	$("#"+pl).mouseup(function(){$("#"+pl).css(	'backgroundImage',"")});
	$("#"+mi).mousedown(function(){$("#"+mi).css('backgroundImage',"url(img/greendot_big.png)")});
	$("#"+mi).mouseup(function(){$("#"+mi).css(	'backgroundImage',"")});
	$("#"+pl).click(plus);
	$("#"+mi).click(minus);
	var plInterval;
	var collp = 1;
	var collm = 1;
	$("#"+pl).on('mousedown', function(){
		clearInterval(plInterval);
		collp = 1;
		plInterval = setInterval(function(){		
			for(var i = 0; i<collp; i++) $("#"+pl).click();
			if(collp<10) collp+=2;
		}, 200);
	});
	$("#"+pl).on('mouseup mouseout', function(){
		clearInterval(plInterval);
	});		
	var miInterval;
	$("#"+mi).on('mousedown', function(){
		clearInterval(miInterval);
		collm = 1;
		miInterval = setInterval(function(){
			for(var i = 0; i<collm; i++) $("#"+mi).click();
			if(collm<10) collm+=2;
		}, 200);
	});
	$("#"+mi).on('mouseup mouseout', function(){
		clearInterval(miInterval);
	});
}
// Повышение уровня
function levelup(){
	if(character.level==99) return;
	result();
	character.level++;
	$("#level").html(character.level);
	$("#exp").html(character.exp = levelexp(character.level));
	$("#nextexp").html(character.nextexp = levelexp(character.level+1));
	if(character.level<29)	{
		feat.live[2]+=2+Math.floor(stats.enu[2]/2)+(stats.enu[2]%2?(character.level%2?0:1):0);
		feat.live[0] = feat.live[2] + feat.live[1] + 30 + stats.str[2] + stats.enu[2]*2;
		$("#live").html(feat.live[0]+"/"+feat.live[0]);
		skills.points += 5 + (stats.intl[2] * 2) - (traits.traits15[1]?3:0);
		spoints();
	}
	if(character.level>28&&character.level<60)	{
		feat.live[2]+=1;
		feat.live[0] = feat.live[2] + feat.live[1] + 30 + stats.str[2] + stats.enu[2]*2;
		$("#live").html(feat.live[0]+"/"+feat.live[0]);
	}
	if(!(character.level%(traits.traits14[1]?4:3)))	{
		character.perkpoint++;
		listperkup();	
	}
	if(character.perkpoint)	{
		listperkup();	
	}
	
}
// Окно выбора перков
function listperkup(){
	$("#perk").show();
	$("#perk").animate({'opacity':'1'},200);
	$("#selectperk").html("");
	$("#nameparms").html("");
	$("#textparms").html("");
	$("#imgparms").html("");
	character.selectperk = "";
	for(var i in perk){
		if(perk[i][0]<perk[i][1]&&character.level>=perk[i][2]&&character.level<=perk[i][3]&&perk[i][4](0)){
			var perkit = $("<div id=\""+i+"\" class=\"perklist\">"+textperks[i][0]+"</div>").appendTo("#selectperk")
			perkit.click(function(){
				if(character.selectperk) $("#"+character.selectperk).css("color","#00AB00");
				character.selectperk = this.id;
				$("#"+this.id).css("color","#00FF00");
				infoperk(this.id);
			})
		}	
	}	
}
//Создание списка перков в окне доступных перков
function createlistperk() {
	var lineit = $("#crlistperk").html("");
	//lineit.append("<center>Доступные перки</center><hr>");
	
	for(var i in stats)
		if(i!=="specialpoint")
			stats[i][2] = stats[i][0] + stats[i][1];		
	
	for(var i in perk) 
		if(perk[i][4](1)&&perk[i][3]===29||perk[i][3]===32) {
			var perkit = $("<div id=\"lists"+i+"\" class=\"perklist\">"+textperks[i][0]+"</div>").appendTo("#crlistperk")
			perkit.click(function(){
				if(character.crlistperk) $("#"+character.crlistperk).css("color","#00AB00");
				character.crlistperk = this.id;
				$("#"+this.id).css("color","#00FF00");
				infoparm("perks",this.id.substr(5));
			})
		}
}

function showlistperk(){	// Выводит имеющиеся трейты и перки в #textlist1
	var lineit = $("#textlist1").html("");
	if(!traits.summ){
	lineit.append("<center>Дополнительно</center>");
	for(var j in traits)
		if(traits[j][1]) {
			lineit.append("<div id=\"list"+j+"\">"+texttraits[j][0]+"</div>");
			$("#list"+j).click(function(){infoparm("traits",this.id.substr(4))})
		}
	}
	lineit.append("<center>Бонусы</center>");
	for(var j in perk)
		if(perk[j][0]) {
			lineit.append("<div id=\"list"+j+"\">"+textperks[j][0]+(perk[j][0]>1?"("+perk[j][0]+")":"")+"</div>");
			$("#list"+j).click(function(){infoparm("perks",this.id.substr(4))})
		}
}
//Создание списка квестов в окне выбора квестов
function listquestup(){
	var chval = false;
	for(var i in quest)
		chval = chval || (quest[i][0]<quest[i][1]&&character.level>=quest[i][2]&&character.level<=quest[i][3]&&quest[i][4]());
	if (!chval) return;
	$("#quest").show();
	$("#selectquest").html("");
	$("#nameparmq").html("");
	$("#textparmq").html("");
	character.selectquest = "";
	for(var i in quest){
		if(quest[i][0]<quest[i][1]&&character.level>=quest[i][2]&&character.level<=quest[i][3]&&quest[i][4]()){
			var questit = $("<div id=\""+i+"\" class=\"perklist\">"+textquest[i][0]+"</div>").appendTo("#selectquest")
			questit.click(function(){
				if(character.selectquest) $("#"+character.selectquest).css("color","#00AB00");
				character.selectquest = this.id;
				$("#"+this.id).css("color","#00FF00");
				$("#nameparmq").html(textquest[this.id][0]);
				$("#textparmq").html(textquest[this.id][1]);
			})
		}	
	}	
}

function showlistquest(){	// Выводит взятые квесты в #textlist3
	var lineit = $("#textlist3").html("");
	lineit.append("<center>Квесты</center>");
	for(var j in quest)
		if(quest[j][0]) {
			lineit.append("<div id=\"list"+j+"\">"+textquest[j][0]+(quest[j][0]>1?"("+quest[j][0]+")":"")+"</div>");
			$("#list"+j).click(function(){infoparm("quest",this.id.substr(4))})
		}
}
// Вывод информации о перке или квесте по клику
function infoparm(ch,prm){
	switch(ch) {
		case "traits": 
			$("#nameparm").html(texttraits[prm][0]);
			$("#textparm").html(texttraits[prm][1]);
			//$("#imgparm").html("<img src=\"skill/"+prm+".jpg\">");
			$("#imgparm").html("<img src=\"skill/"+prm+".jpg\" onload=\"imgLoaded(this)\">");
		break;
		case "perks": 
			$("#nameparm").html(textperks[prm][0]);
			$("#textparm").html(textperks[prm][1]);
			//$("#imgparm").html("<img src=\"skill/"+prm.substr(3)+".jpg\">");
			$("#imgparm").html("<img src=\"skill/"+prm.substr(3)+".jpg\" onload=\"imgLoaded(this)\">");
		break;
		case "quest": // добавить описание
			$("#nameparm").html(textquest[prm][0]);
			$("#textparm").html(textquest[prm][1]);
		break;
		case "skills": // добавить описание
			$("#nameparm").html(textperks[prm][0]);
			$("#textparm").html(textperks[prm][1]);
			$("#imgparm").html("<img src=\"skill/"+prm.substr(3)+".jpg\" onload=\"imgLoaded(this)\">");
		break;
		case "stats": // добавить описание
			$("#nameparm").html(textperks[prm][0]);
			$("#textparm").html(textperks[prm][1]);
			$("#imgparm").html("<img src=\"skill/"+prm.substr(3)+".jpg\" onload=\"imgLoaded(this)\">");
		break;
	}
}
// Информация о перке по названию
function infoperk(prm){
	$("#nameparms").html(textperks[prm][0]);
	$("#textparms").html(textperks[prm][1]);
	$("#imgparms").html("<img src=\"skill/"+prm.substr(3)+".jpg\" onload=\"imgLoaded(this)\">");
}

function plusbook() {	// Чтение книг
	var str = this.id.substr(4)
	var strn;
	if(str==="prewar") {
		var r = getRandInt(0, 59);
		if(r<20) strn = "steal";
		else if(r<40) strn = "trade";
		else if(r<60) strn = "oratory";
	}
	else {
		strn = str;
	}
	if(book[str][0]) {
		var n = skills[strn][0];		// Навык
		var np = 0;
		var s = 6 + book[str][1];	// Очки навыков
		for(var i = 0;i<6&&s>0;i++){
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
		book[str][1] = s;
		skills[strn][2] += np;
		book[str][0]--;
		$("#book"+str).html("x"+book[str][0]);
		settle();
	}
}
/*Диалог. 
Пример использования:
talk("Может сходим в бар сегодня?",{ 	a:["Да пошли.",function(){alert("Идем в бар.")}], 
										b:["Нет я не хочу.",function(){alert("Остаемся дома.")}] })
*/
function talk(textdialog,answ) {
	$("#talk").show();
	$("#dialog").html(textdialog);
	$("#answ").html("");
	for(var i in answ) {
		if(answ[i][2]) {						//  &#9899;
			var reply = $("<div id=\"answ"+i+"\">&#149; "+answ[i][0]+"</div>").appendTo("#answ");
			reply.hover(function(){$(this).toggleClass('hover');});
			reply.click({func:answ[i][1],name:answ[i][0]},function(e){
				var nup = e.data.func();
				if(nup==-1) return;
				$("#talk").hide();
				if(nup==0) return;
				if(typeof nup == "object") {
					skills[e.currentTarget.id.substr(4)][2]+=nup[0];
					nup = nup[1];
				}
				quest[character.selectquest][0] += nup;
					var n = totalquest[character.level];
					if(n==undefined) n = [];
					n.push(textquest[character.selectquest][0]+"("+e.data.name+")");
					totalquest[character.level] = n;
				settle();
				statpoints();
				showlistquest();
				});
		}
	}
}
// Скидывание всех полученых за уровень скилов в постоянные
function result() {
	var lvl = {};
	for(var j in skills)
		if(j != "tags" && j != "points") {
			if(skills[j][2]) {
				lvl[j] = skills[j][2];
				skills[j][1]+=skills[j][2];
				skills[j][2]=0;
			}
		}
	totalskill[character.level] = lvl;
	
}
// Проверка обекта на наличие элементов
function emptyObject(obj) {
    for (var i in obj) {
        return false;
    }
    return true;
}

// Итоговые результаты в текстовом виде
function total() {
	$("#total").show();
	//$("#totaltext")
	var textarea = character.name+" "+feat.live[0]+" XP\n";
	for(var i in stats)
		if(i!=="specialpoint")
			textarea += stats[i][2]+" ";
	textarea += "\nТрейты: "
	for(var i in texttraits)
		if(traits[i][1])
			textarea += texttraits[i][0]+" ";
	textarea += "\nНавыки: "
	for(var i in textskills) 
		if(skills[i][3])
			textarea += textskills[i][0]+" ";
	for(var i in totalskill)
		if(/*!emptyObject(totalskill[i])||*/(i in totalperk)/*||(i in totalquest)*/) {
			textarea += "\n"+i+" lvl: ";
			if (i in totalperk) textarea += totalperk[i][0];
			/*if(!emptyObject(totalskill[i])) textarea += "\n";
			for(var j in totalskill[i]) 
				textarea += textskills[j][0]+" +"+totalskill[i][j]+"% ";
			
			if (i in totalquest) {
				textarea += "\n"
				textarea += totalquest[i];
			}*/
		}
	textarea += "\n\nПрокаченные навыки:\n";
	for(var i in skills) 
		if(skills[i][0] > 80) 
			textarea += textskills[i][1]+": "+skills[i][0]+"\n";
	textarea += "\nКниги:\n"
	for(var i in book) {
		if(i!="prewar"&&book[i][0]<10)	textarea += textbook[i]+" "+(10-book[i][0])+"\n";
		else if (i=="prewar"&&book[i][0]<20)textarea += textbook[i]+" "+(20-book[i][0])+"\n"
	}
	$("#totaltext").val(textarea);	
		
}
// Скрол по 1 строчке
function scrollit(e){
		var delta = e.originalEvent.deltaY || e.originalEvent.detail || e.originalEvent.wheelDelta;
		if(delta>0) $(this).scrollTop(this.scrollTop + 12);
		else $(this).scrollTop(this.scrollTop - 12);
		e.preventDefault();
}

function imgLoaded(img){
    var $img = $(img);
    $img.parent().addClass('loaded');
}

function main() //главная функция
{
	
	$("#crlistperk").on('wheel', scrollit);
	$("#selectperk").on('wheel', scrollit);
	$("#selectquest").on('wheel', scrollit);
	$("#textparm").on('wheel', scrollit);
	$("#textparms").on('wheel', scrollit);
	$("#textparmq").on('wheel', scrollit);
	$("#answ").on('wheel', scrollit);
	for(var i = 1; i<4;i++) $("#textlist"+i).on('wheel', scrollit);
	
	/*var scale = 1;
	$(document).on('wheel', function(e) {	// маштабирование
		if($("#"+e.originalEvent.currentTarget.id).css("overflow")!=="auto") {
			var delta = e.originalEvent.deltaY || e.originalEvent.detail || e.originalEvent.wheelDelta;
			if (delta > 0) scale += 0.05;
			else scale -= 0.05;
			$("#main").css("transform", "scale("+scale+")");
			e.preventDefault();
		}
	});*/
	
	$("#totalkey").click(total);
	$("#canceltotal").click(function(){$("#total").hide();})
	
	$("#men").click(changesex);
	$("#women").click(changesex);
	
	document.addEventListener('keydown', modalCloseEsc);
	$("#wrap").click(modalCloseClick);
	
	$("#name").click(showthis);
	$("#age").click(showthis);
	$("#sex").click(showthis);
	
	$("#plusage").click(plusage);
	$("#minusage").click(minusage);
	$("#namenter").keydown(function(pop){ if(pop.keyCode === 13) modalCloseClick();});
	$("#pasenter").keydown(function(pop){ if(pop.keyCode === 13) modalCloseClick();});
	$("#namenter").keyup(function(){ 
											$("#name").html($("#namenter").html().toUpperCase());
											character.name = $("#namenter").html();
											});
											
	$("#done").click(leveling);
	$("#cancel").click(reg);
	
	$("#doneperk").click(function(){
						$("#perk").hide(); 
						$("#perk").animate({'opacity':'0'},200);
						if(character.selectperk) {
							perk[character.selectperk][0] += 1;
							character.perkpoint--;
							perkup[character.selectperk]();
							totalperk[character.level] = textperks[character.selectperk];
							showlistperk();
							settle();
							statpoints();
							spoints();
						}
						});
	$("#cancelperk").click(function(){$("#perk").hide();$("#perk").animate({'opacity':'0'},200);});
	
	$("#donequest").click(function(){
						$("#quest").hide(); 
						if(character.selectquest) {
							if(character.selectquest!="per_ncr"&&character.selectquest!="medals"&&character.selectquest!="drayfild"&&character.selectquest.substr(0,3)!="imp") {
								quest[character.selectquest][0] += 1;
								var n = totalquest[character.level];
								if(n==undefined) n = [];
								n.push(textquest[character.selectquest][0]);
								totalquest[character.level] = n;
							}
							questup[character.selectquest]();
							showlistquest();
							settle();
							statpoints();
						}
						});
	$("#cancelquest").click(function(){$("#quest").hide()});
	
	$("#levelup").click(levelup);
	
	for(var i = 1; i<4;i++) $("#textswitch"+i).click(switchinfo);
	
	for(var j in book){ // Чтение книг
		if(j != "point") {
			$("#book"+j).click(plusbook);
		}
	}
	
	for(var j in stats){
		if(j != "specialpoint") {
			$("#plus"+j).click(plusspec);
			$("#minus"+j).click(minusspec);
		}
	}
	for(var j in traits){
		if(j != "summ") {
			$("#key"+j).mousedown(function(){$("#lkey"+this.id.substr(3)).html("<img src=\"img/small_key.png\" onload=\"imgLoaded(this)\">");});
			$("#key"+j).mouseup(function(){$("#lkey"+this.id.substr(3)).html("");});
			$("#key"+j).click(trait);
			$("#"+j).click(function(){infoparm("traits",this.id)});
		}
	}
	
	for(var j in skills){
		if(j != "tags" && j != "points") {
			$("#key"+j).mousedown(function(){$("#lkey"+this.id.substr(3)).html("<img src=\"img/small_key.png\" onload=\"imgLoaded(this)\">");});
			$("#key"+j).mouseup(function(){$("#lkey"+this.id.substr(3)).html("");});
			$("#key"+j).click(tags);
			$("#butt"+j).click(selectskill);
		}
	}
	$("#men").css('backgroundImage', 'url(img/men.png)');
	numberage();
	spoints();
	tagnumb();
	statpoints();
	settle();
	createlistperk();
	$(".main").animate({'opacity':'1'},200);
	
}

//window.addEventListener('DOMContentLoaded', main);
window.addEventListener("load", main);