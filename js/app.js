var leveluping = false; // для отладки!!!
var regi = true;
var medsp = 0;
var save = false;
var mode = 0;
var send = false; // Чтоб отправлялось в базу 1 раз за раз.
var req = false;
var textSeachPerk = '';

function getRandInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Выбранные в списках перки и квесты
var select = {
	crperk: "",
	perk: "",
	quest: ""
}

var mychar = {
	tperk: {},
	traits: {},
	perks: {},
	tags: {},
	skills: {},
	feats: {},
	resist: {},
	quest: {},
	points: {},
	stats: { // Природная,добавленная
		STR: [8,0], // Сила
		PER: [7,0], // Восприятие
		ENU: [6,0], // Выносливость
		CHA: [1,0], // Харизма
		INT: [8,0], // Интелект
		AGI: [8,0], // Ловкость
		LUC: [2,0] // Удача
	},
	book: { // Доступно книг, лишние очки
		light: [10,0,{}],
		energy: [10,0,{}],
		orderly: [10,0,{}],
		science: [10,0,{}],
		repair: [10,0,{}],
		ranger: [10,0,{}],
		prewar: [10,0,{}]
	}
};
// mychar.book
var charp = {
	age: getRandInt(14, 60), // возраст
	sex: "man", // пол
	level: 1, // уровень
	tagt: 2, // очки на таг трейтов
	tags: 3, // очки на таг скилов
	points: 0,	// скилпоинты
	specialpoint: 0, // Очки распределения статов
	perkpoint: 0, // Очки перков
	name: "", // имя
	//демчев насрал костылями для крушилы
	kostylbruiser34: 0,
	kostyltrait: 0,
};

//bonuses КОСТЫЛЬ
var bonuswaste = [];
// SkillMod.Add2
var SkillMod = {
	MaxValue: 300,
	Add2: 100,
	Add3: 125,
	Add4: 150,
	Add5: 175,
	Add6: 200
};
startskills = {
	light: function(){return (5 + mychar.stats.AGI[0]*4)},
	heavy: function(){return (mychar.stats.AGI[0]*2)},
	energy: function(){return (0 + mychar.stats.AGI[0]*2)},
	melee: function(){return (30 + (mychar.stats.STR[0]+mychar.stats.AGI[0])*2)},
	steel: function(){return (20 + (mychar.stats.STR[0]+mychar.stats.AGI[0])*2)},
	thrown: function(){return (mychar.stats.AGI[0]*4)},
	orderly: function(){return ((mychar.stats.PER[0]+mychar.stats.INT[0])*2)},
	doctor: function(){return (5 + mychar.stats.PER[0]+mychar.stats.INT[0])},
	sneak: function(){return (5 + mychar.stats.AGI[0]*3)},
	hack: function(){return (10 + mychar.stats.AGI[0]+ mychar.stats.PER[0])},
	steal: function(){return (mychar.stats.AGI[0]*3)},
	traps: function(){return (10 + mychar.stats.AGI[0]+ mychar.stats.PER[0])},
	science: function(){return (mychar.stats.INT[0]*4)},
	repair: function(){return (mychar.stats.INT[0]*3)},
	oratory: function(){return (mychar.stats.CHA[0]*5)},
	trade: function(){return (mychar.stats.CHA[0]*4)},
	speed: function(){return (0)},
	ranger: function(){return ((mychar.stats.ENU[0]+mychar.stats.INT[0])*2)}
}
// SKILLS
var pr = {// Создание ветки обьекта crSkills
	cr: function(pr,str){
		if (!(charp.level in mychar[pr]))
			mychar[pr][charp.level]={};
		if (!(str in mychar[pr][charp.level]))
			mychar[pr][charp.level][str] = [0,0];
	},// Удаление ветки обьекта прокачки скилов если он пустой delSkills
	del: function(pr,str){
		if (!this.ch(pr,str)) return;
		if (mychar[pr][charp.level][str][0] == 0 &&
			mychar[pr][charp.level][str][1] == 0)
			delete mychar[pr][charp.level][str];
		if (emptyObject(mychar[pr][charp.level]))
			delete mychar[pr][charp.level];
	},// Добавление к навыку addSkills
	add: function(pr,str,n,c){
		c = c===undefined ? 0 : c;
		this.cr(pr,str);
		mychar[pr][charp.level][str][c] += n;
		this.del(pr,str);
	}, // Добавление к навыку скилпоинтами для имплантов
	addn: function(pr,str,s,c){
		s *= 6;
		var n = skpoint(skills[str][0], s)[0];
		this.add(pr, str, n, 1);
	},
	addr: function(str,asb,res){
		this.cr("resist",str);
		mychar.resist[charp.level][str][0] += asb;
		mychar.resist[charp.level][str][1] += res;
		this.del("resist",str);
	},// Проверка наличия прокачки навыка
	ch: function(pr,str){
		if (charp.level in mychar[pr])
			if (str in mychar[pr][charp.level])
				if (mychar[pr][charp.level][str][0]>0)
					return true;
		else
			return false;
	},
	sum: function(pr,str){
		var sum = 0;
		for(var j in mychar[pr])
			if (str in mychar[pr][j]) {
				sum += mychar[pr][j][str][0];
				sum += mychar[pr][j][str][1];
			}
		return sum;
	},
	sumr: function(str){
		var sum = [0,0];
		for(var j in mychar.resist)
			if (str in mychar.resist[j]) {
				sum[0] += mychar.resist[j][str][0];
				sum[1] += mychar.resist[j][str][1];
			}
		return sum;
	}
}
// Выбор трейта
function trait(){
	var str = this.id.substr(3);
	traits[str](str);
	statpoints();
	settle();
	if (mychar.traits[str]) $("#"+str).css("color", "#ABABAB");
	else $("#"+str).css("color", "#00FF00");
	infoparm("traits",str);
}
// Выбор тагнутых навыков
function tags() {
	var str = this.id.substr(3);
	if (!(str in mychar.tags) && charp.tags > 0) {
		mychar.tags[str] = 1;
		charp.tags--;
		pr.add("skills",str,20,1);
		$("#"+str+"s").css("color", "#ABABAB");
		$("#"+str).css("color", "#ABABAB");
	}
	else if ((str in mychar.tags) && charp.tags < 3)	{
		delete mychar.tags[str];
		charp.tags++;
		pr.add("skills",str,-20,1);
		$("#"+str+"s").css("color", "#00FF00");
		$("#"+str).css("color", "#00FF00");
	}
	numbers($("#point2"),charp.tags);
	settle();
}
// расчеты навыков и параметров и их обновление
function settle(str) {
	str = str || false;
	// Легкое оружие
	skills.light[0] = mychar.stats.AGI[0]*3 + mychar.stats.LUC[0];
	// Тяжелое
	skills.heavy[0] = mychar.stats.AGI[0]*2 + mychar.stats.LUC[0];
	// Энергетическое
	skills.energy[0] = 0 + mychar.stats.AGI[0]*2 + mychar.stats.LUC[0];
	// Рукопашка
	skills.melee[0] = 30 + (mychar.stats.STR[0]+mychar.stats.AGI[0])*2 + mychar.stats.LUC[0];
	// Холодное
	skills.steel[0] = 20 + (mychar.stats.STR[0]+mychar.stats.AGI[0])*2 + mychar.stats.LUC[0];
	// Метательное
	skills.thrown[0] = mychar.stats.AGI[0]*4 + mychar.stats.LUC[0];
	// Санитар
	skills.orderly[0] = (mychar.stats.PER[0]+mychar.stats.INT[0])*2 + mychar.stats.LUC[0];
	// Доктор
	skills.doctor[0] = 5 + mychar.stats.PER[0]+mychar.stats.INT[0] + mychar.stats.LUC[0];
	// Скрытность
	skills.sneak[0] = 5 + mychar.stats.AGI[0]*3 + mychar.stats.LUC[0];
	// Взлом
	skills.hack[0] = 5 + mychar.stats.AGI[0] + mychar.stats.PER[0] + mychar.stats.LUC[0]*2;
	// Воровство
	skills.steal[0] = mychar.stats.AGI[0]*3 + mychar.stats.LUC[0];
	// Ловушки
	skills.traps[0] = 9 + mychar.stats.AGI[0] + mychar.stats.PER[0] + mychar.stats.LUC[0];
	// Наука
	skills.science[0] = mychar.stats.INT[0]*3 + mychar.stats.LUC[0];
	// Ремонт
	skills.repair[0] = 5 + mychar.stats.INT[0]*2 + mychar.stats.LUC[0];
	// Красноречие
	skills.oratory[0] = mychar.stats.CHA[0]*5 + mychar.stats.LUC[0];
	// Торговля
	skills.trade[0] = mychar.stats.CHA[0]*4 + mychar.stats.LUC[0];
	// Атлет
	skills.speed[0] =  mychar.stats.LUC[0] - 1;
	// Скиталец
	skills.ranger[0] = (mychar.stats.ENU[0]+mychar.stats.INT[0])*2 + mychar.stats.LUC[0]+20;

	for(var i in skills)
		skills[i][0] += pr.sum("skills",i);

	for(var i in mychar.stats)
			stats[i][2] = mychar.stats[i][0] + mychar.stats[i][1];
	// Жизни 150+Сила*3+Выносливость*10+Ловкость*2, если добродуш Выносливость * 7 + Харизма * Харизма * 2
	// pre 32
	//Если нет Добродушного 200+Сила*5+Выносливость*15
	//Если есть Добродушный 80+Харизма*Харизма*2+Выносливость*5
	//feat.live[0] = (mychar.traits.TRAIT_GOOD_NATURED ?
		//(80+mychar.stats.CHA[0] * mychar.stats.CHA[0] * 2 + mychar.stats.ENU[0] * 5) :
		//(200 + mychar.stats.STR[0] * 5 + mychar.stats.ENU[0] * 15));
	feat.live[0] = (80+mychar.stats.CHA[0] * mychar.stats.CHA[0] * 2 + mychar.stats.ENU[0] * 5);

	// Класс брони
	feat.armc[0] = stats.AGI[2]*(mychar.traits.TRAIT_KAMIKAZE ? 0 : 1)+(mychar.traits.TRAIT_KAMIKAZE ? 1 : 0);
	// Очки действий 7+Ловкость/3
	feat.apoi[0] = 7 + Math.floor(stats.AGI[2]/3);
	// Макс груз
	feat.maxl[0] = Math.round(0.453*( 25 + stats.STR[2] * ( 25 - (mychar.traits.TRAIT_SMALL_FRAME ? 1 : 0) * 10 )));
	// Рукоп. повр.
	feat.mdmg[0] = (stats.STR[2] > 5 ? stats.STR[2]-5 : 1);
	// Радиус обзора
	feat.oview[0] = 20 + stats.PER[2]*3;
	// Уст. яду
	feat.stox[0] = (mychar.traits.TRAIT_FAST_METABOLISM ? 0.5 : 1)*stats.ENU[2]*5;
	if (feat.stox[0]>95) feat.stox[0] = 95;
	// Уст. радиации
	feat.srad[0] = (mychar.traits.TRAIT_FAST_METABOLISM ? 0.5 : 1)*stats.ENU[2]*2;
	if (feat.srad[0]>95) feat.srad[0] = 95;
	// Порядок
	feat.proc[0] = stats.PER[2]*2.5;
	// Уровень лечения
	feat.levh[0] = stats.LUC[2]*1;
	// Крит
	//feat.crit[0] = stats.LUC[2] + (mychar.traits.TRAIT_SKILLED ? 15 : 0);
	//pre 32  Первоначальный расчет: (Удача-1)*2+Удача/2 
	feat.crit[0] = ((stats.LUC[2]-1)*2)+(stats.LUC[2]/2)+(mychar.traits.TRAIT_SKILLED ? 5 : 0);
	//Уворот
	feat.dodge[0] = /*stats.CHA[2] +*/ (checkperk("PE_HTH_EVADE") ? feat.apoi[0]/2 : 0);
	//if (mychar.traits.TRAIT_GOOD_NATURED) 
	//	feat.dodge[0] = Math.floor(feat.dodge[0] / 2);
	//Антикрит
	feat.acrit[0] = (checkperk("PE_TERMINATOR") ? (stats.STR[2] + stats.ENU[2]) * 5 : stats.STR[2] * 5 + (mychar.traits.TRAIT_SKILLED ? 20 : 0));

	for(var i in feat) {
		if (i == "dodge" && mychar.traits.TRAIT_GOOD_NATURED) {
			feat[i][0] += Math.floor(pr.sum("feats",i) / 2);
		} else {
			feat[i][0] += pr.sum("feats",i);
		}
	}
	
	feat.crit[0] = mychar.traits.TRAIT_CHEM_RESISTANT ? 0 : feat.crit[0];

	if (feat.acrit[0] > 100)
		feat.acrit[0] = 100;

	for(var n in resist) {
		var res = pr.sumr(n);
		$("#"+n).html(res[0]+" / "+res[1]+"%");
	}
	for(var j in skills){
		if (skills[j][0] > 300) skills[j][0] = 300;
		$("#"+j).html(skills[j][0]+"%");

	}
	for(var j in feat){
		if (j != "acrit" &&j != "crit" && j != "live" && j != "dodge")
			$("#"+j).html(feat[j][0]);
		else if (j != "live")
			$("#"+j).html(feat[j][0]+"%");
		else
			$("#"+j).html(feat[j][0]+"/"+feat[j][0]);
	}
	if (str && str == "speed"){
		infoparm("skills","speed");
		$("#buttreq").css("background-color", "rgba(0, 255, 0, 0.55)");
		$("#textparm").hide();
		$("#textparmreq").show();
		req = true;
	}

}
// Обновление статов
function statpoints(){
	for(var j in mychar.stats)	{
		var link = $("#"+j);
		var n = mychar.stats[j];
		n = mychar.stats[j][0] + mychar.stats[j][1];
		var str = "";
		if (n < 1 || n > 10)
			str = n < 1 ? statlvl[1] : n > 10 ? statlvl[10] : "Error";
		else
			str = statlvl[n];
		$("#"+j+"t").html(str);
		numbers(link,n);
	}
	numbers($("#specialpoint"),charp.specialpoint);
	settle();
	createlistperk();
}
// Отображение разлиных поинтов
function numbers(div,n) {
	if (div.hasClass('numspec') && (n < 1 || n > 10)) {
		if (n < 1)
			n = 0;
		div.css("text-shadow", "0 0 1px #e00");
	}
	else {
		div.css("text-shadow", "0 0 1px #dedede");
	}
	div.html("");
	div.css("background-image", "url(img/nums.png )");
	var col = 1;
	var num = [0, 0, 0];
	if (n>99) {	div.css("background-image", "url(img/num3.png )"); num[2] = Math.floor(n/100); col++; }
	num[1] = Math.floor(n/10)-num[2]*10;
	num[0] = Math.floor(n/1)-num[1]*10-num[2]*100;

	div.css({"padding-left":"5px", "letter-spacing":"4px"});

	if (num[2]===0 && num[1]==1 || num[2]==1){
		div.css({"padding-left":"6px", "letter-spacing":"6px"});
	}
	if (num[1]==1 && num[2]==1) {
		div.css({"letter-spacing":"8px"});
		if (num[0]==1)
			div.css({"letter-spacing":"9px"});
	}
	if (num[2]>1 && num[0]==1)
		div.css({"letter-spacing":"6px"});
	if ((num[2]>1 && num[1]==1)||(num[0]==1 && num[2]==1)||(num[0]==1 && num[1]==1))
		div.css({"letter-spacing":"7px"});

	for(var i = col; i>=0; i--)
		div.append(num[i]);
}
// Добавление стата
function plusspec(pop){
	var str = this.id.substr(4);
	var n = mychar.stats[str][0] + mychar.stats[str][1];
	var s = charp.specialpoint;
	if (n<10 && s!==0)
	{
		n++;
		s--;
	}
	mychar.stats[str][0] = n - mychar.stats[str][1];
	charp.specialpoint = s;
	statpoints();
}
// Отнимание стата
function minusspec(pop){
	var str = this.id.substr(5);
	var n = mychar.stats[str][0] + mychar.stats[str][1];
	if (mychar.traits.TRAIT_SKILLED && n < 3 && str != "STR" && str != "PER" && str != "LUC") return;
	var s = charp.specialpoint;
	if (n>1)
	{
		n--;
		s++;
	}
	mychar.stats[str][0] = n - mychar.stats[str][1];
	charp.specialpoint = s;
	statpoints();
}
// расчет прокачки навыка
function skpoint(n,p){
	var r = [0,0];
	for(var i = p; i > 0 && p > 0; i-- ) {
		if ( n > SkillMod.Add6 ) {if (p >= 6) p -= 6; else break;}
		else if ( n > SkillMod.Add5 ) {if ( p >= 5 ) p -= 5; else break;}
		else if ( n > SkillMod.Add4 ) {if ( p >= 4 ) p -= 4; else break;}
		else if ( n > SkillMod.Add3 ) {if ( p >= 3 ) p -= 3; else break;}
		else if ( n > SkillMod.Add2 ) {if ( p >= 2 ) p -= 2; else break;}
		else if (n <= SkillMod.Add2 ) {if ( p >= 1) p -= 1; else break;}
		else break;
		r[0]++;
		n++;
	}
	r[1] = p;
	return r;
}
// Прокачка навыков
function plus() {
	var str = this.id.substr(4);
	var n = skills[str][0];
	if ( n >= SkillMod.MaxValue ) return;
	var s = 1;
	if ( n > SkillMod.Add6 ) s = 6;
	else if ( n > SkillMod.Add5 ) s = 5;
	else if ( n > SkillMod.Add4 ) s = 4;
	else if ( n > SkillMod.Add3 ) s = 3;
	else if ( n > SkillMod.Add2 ) s = 2;
	if ( charp.points < s ) return;
	n++;
	if ((str in mychar.tags) && n < SkillMod.MaxValue )
		n++;
	pr.add("skills",str, n - skills[str][0]);
	charp.points -= s;
	numbers($("#point1"),charp.points);
	settle(str);
}
// Откачка навыков
function minus() {
	var str = this.id.substr(5);
	var n = skills[str][0];
	if ( n <= 0 || !pr.ch("skills",str)) return;

	var tag = (str in mychar.tags) ? 2 : 1;
	for(var i = 0; i < tag; i++) {
		var s = 1;
		if ( n > SkillMod.Add6 + 1 ) s = 6;
		else if ( n > SkillMod.Add5 + 1 ) s = 5;
		else if ( n > SkillMod.Add4 + 1 ) s = 4;
		else if ( n > SkillMod.Add3 + 1 ) s = 3;
		else if ( n > SkillMod.Add2 + 1 ) s = 2;
		if (n > 0 )
			n--;
	}
	pr.add("skills",str, n - skills[str][0]);
	charp.points += s;
	numbers($("#point1"),charp.points);
	settle(str);
}
// скрытие окон по Esc
function modalCloseEsc (pop) {
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
// скрытие окон по клику
function modalCloseClick () {
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
// Прибавить возраст
function plusage() {
	charp.age++;
	if (charp.age>60) charp.age = 14;
	numbers($("#numberage"),charp.age);
	$("#age").html(charp.age);
}
// Отнять возраст
function minusage() {
	charp.age--;
	if (charp.age<14) charp.age = 60;
	numbers($("#numberage"),charp.age);
	$("#age").html(charp.age);
}
// Смена пола
function changesex() {
	if (this.id === "men" && charp.sex !== "men") {
		charp.sex = "men";
		$("#men").css('backgroundImage', 'url(img/men.png)');
		$("#women").css('backgroundImage', '');
		$("#sex").html(sextext.men);
	}
	else if (this.id === "women" && charp.sex !== "women") {
		charp.sex = "women";
		$("#women").css('backgroundImage', 'url(img/women.png)');
		$("#men").css('backgroundImage', '');
		$("#sex").html(sextext.women);
	}
}
// Переход к прокачке
function leveling() {
	if ((!charp.specialpoint && !charp.tags&& charp.kostyltrait != 2 && !BruiserCheck34())||leveluping){
		if (regi) {
			if (!charp.name)
			{
				if (charp.sex == "man")
					charp.name = nameman[0,getRandInt(0, nameman.length-1)];
				if (charp.sex == "women")
					charp.name = namewoman[0,getRandInt(0, namewoman.length-1)];
			}
			$("#namenter").html(charp.name);
			$("#name").html($("#namenter").html().toUpperCase());
			$('title').text(anytext.training);
			$("#main").stop(true,true);
			$("#main").animate({'opacity':'0'},100);
			var bgImg = new Image();
			bgImg.src = "img/char.gif";
			bgImg.onload = function(){
				$("#main").css('backgroundImage', 'url(' + bgImg.src + ')');
				$("#main").animate({'opacity':'1'},500);
			};
			$(".reg").hide();
			$(".leveling").show();
			$("#level").html(charp.level);
			$("#exp").html(levelexp(charp.level));
			$("#nextexp").html(levelexp(charp.level+1));
			numbers($("#point1"),charp.points);
			if (!$("div").is('#select')) {
				$("<div/>", {"id": "select"}).appendTo("#main").css({	'backgroundImage':	"url(img/skillpad.png)",
																		"position":			"absolute",
																		"top":				"-9px",
																		"left":				"324px",
																		"width":			"286px",
																		"height":			"70px",
																		"z-index":			"100"
																		});
				var pl = $("<div/>", {"id": "pluslight"}).appendTo("#select").css({
																		"position":			"absolute",
																		"left":				"246px",
																		"width":			"33px",
																		"height":			"33px"});
				var mi = $("<div/>", {"id": "minuslight"}).appendTo("#select").css({
																		"position":			"absolute",
																		"left":				"246px",
																		"top":				"33px",
																		"width":			"33px",
																		"height":			"33px"});

				pl.mousedown(	function()	{pl.css('backgroundImage',"url(img/greendot_big.png)");});
				pl.mouseup(	function()	{pl.css(	'backgroundImage', "")});
				mi.mousedown(function()	{mi.css('backgroundImage', "url(img/greendot_big.png)");});
				mi.mouseup(	function()	{mi.css(	'backgroundImage', "");});
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
						if (collp<10) collp+=2;
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
						if (collm<10) collm+=2;
					}, 200);
				});
				mi.on('mouseup mouseout', function(){
					clearInterval(miInterval);
				});
			}
			showlistperk();
			regi = false;
			$("#nameparm").html("");
			$("#textparm").html("");
			$("#imgparm").html("");
		}
		else {
			if (charp.level>=28)
				setbuild();
		}
	}
	else alert(anytext.msgerror);
}
// Переход обратно к созданию
function reg(){
	Cookies.remove('hash', { path: '' });
	document.location.search = "";
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
		if (n===i) {
			if ($("#textlist1").is(":visible")&&charp.perkpoint) {
				listperkup();
			}
			else if (n===3) {
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
	if (regi) return;
	var n = $("#select").remove();
	var tops = this.offsetParent.offsetTop + this.offsetTop - 27;
	var lefts = this.offsetParent.offsetLeft + this.offsetLeft - 6;
	n.appendTo("#main").css({	"top":		tops+"px",
								"left":		lefts+"px",
								});

	var pl = n.find("div")[0].id = "plus" + this.id.substr(4);
	var mi = n.find("div")[1].id = "minus" + this.id.substr(4);

	$("#"+pl).mousedown(function(){$("#"+pl).css('backgroundImage',"url(img/greendot_big.png)");});
	$("#"+pl).mouseup(function(){$("#"+pl).css(	'backgroundImage',"")});
	$("#"+mi).mousedown(function(){$("#"+mi).css('backgroundImage',"url(img/greendot_big.png)");});
	$("#"+mi).mouseup(function(){$("#"+mi).css(	'backgroundImage',"");});
	$("#"+pl).click(plus);
	$("#"+mi).click(minus);
	var plInterval;
	var collp = 1;
	$("#"+pl).on('mousedown touchstart', function(){
		clearInterval(plInterval);
		collp = 1;
		plInterval = setInterval(function(){
			for(var i = 0; i<collp; i++) $("#"+pl).click();
			if (collp<10) collp+=2;
		}, 200);
	});
	$("#"+pl).on('mouseup mouseout touchend', function(){
		clearInterval(plInterval);
	});
	var miInterval;
	var collm = 1;
	$("#"+mi).on('mousedown touchstart', function(){
		clearInterval(miInterval);
		collm = 1;
		miInterval = setInterval(function(){
			for(var i = 0; i<collm; i++) $("#"+mi).click();
			if (collm<10) collm+=2;
		}, 200);
	});
	$("#"+mi).on('mouseup mouseout touchend', function(){
		clearInterval(miInterval);
	});
}
// Повышение уровня
function levelup(){
	$("#leveldown").show();
	if (charp.level==99) {if (matrix==undefined)matrix=new Matrix;return;}
	mychar.points[charp.level] = charp.points;
	charp.level++;
	$("#level").html(charp.level);
	$("#exp").html(levelexp(charp.level));
	$("#nextexp").html(levelexp(charp.level+1));
	if (charp.level < 29)	{
		charp.points += 5 + (stats.INT[2] * 2) + (mychar.traits.TRAIT_SKILLED?3:0) - (mychar.traits.TRAIT_NIGHT_PERSON?3:0);
		numbers($("#point1"),charp.points);
	} else if(charp.level > 29 && !(charp.level%3)) {
		pr.add("feats", "live", 1);
		feat.live[0] = pr.sum("feats", "live") + stats.ENU[2]*16 + stats.STR[2]*3 + 109;
		$("#live").html(feat.live[0]+"/"+feat.live[0]);
	}
	if (!(charp.level % (mychar.traits.TRAIT_SKILLED && !mychar.traits.TRAIT_GOOD_NATURED ? 4 : (mychar.traits.TRAIT_GOOD_NATURED && !mychar.traits.TRAIT_SKILLED ? 2 : 3)))) {
		charp.perkpoint = 1;
		$("#textswitch1").addClass("perkup");
	}
	if (charp.perkpoint > 0)
		listperkup();
}
function addperk(perks) {
	mychar.perks[perks] = {vol: checkperk(perks) + 1, lvl: checkperk(perks) ? mychar.perks[perks].lvl : []};
	mychar.perks[perks].lvl.push(charp.level);
	perk[perks][5]();
}

//mychar.quest[j].med[i]
function delobj(obj,str,c) {
	if (chobj(obj,str)<=1) {
		delete mychar[obj][str];
	} else {
		if (!(str in questinfo)&&str!="medals"&&str!="imp_bonus") {
			mychar[obj][str].vol--;
			delete mychar[obj][str].lvl[c];
		}
		else if (str!="medals"&&str!="imp_bonus") {
			delete mychar[obj][str];
		}
	}
	if (str == "medals") {
		var numMed = mychar[obj][str].med[c][0];
		var diffMed = mychar[obj][str].med[c][1];
		mychar[obj][str].vol -= diffMed;
		if (numMed > 3) medsp -= diffMed;
		delete mychar[obj][str].med[c];
		delete mychar[obj][str].lvl[c];
		if (!chobj(obj,str)) {
			delete mychar[obj][str]
		}
	}
	if (str == "imp_bonus")
	{
		bonuswaste.pop();
		var numMed = mychar[obj][str].med[c][0];
		var diffMed = mychar[obj][str].med[c][1];
		mychar[obj][str].vol -= diffMed;
		if (numMed > 3) medsp -= diffMed;
		delete mychar[obj][str].med[c];
		delete mychar[obj][str].lvl[c];
		if (!chobj(obj,str)) {
			delete mychar[obj][str]
		}
	}
	if (obj == "perks") {
		if (perk[str][6]!==undefined)
			perk[str][6]();
	}
}
function checkperk(strperk) {
	if (mychar.perks[strperk]===undefined)
		return 0;
	else
		return mychar.perks[strperk].vol;
}
function chobj(obj,strq) { //chquest => chobj("quest",strq)
	if (mychar[obj][strq]===undefined)
		return 0;
	else
		return mychar[obj][strq].vol;
}
function chtr(str) {
	if (mychar.traits[str]===undefined) return 0;
	else return mychar.traits[str];
}
// Понижение уовня
function leveldown() {
	if (charp.level < 2) return;
	// Удаление перка
	for(var i in mychar.perks)
		for(var j in mychar.perks[i].lvl)
			if (mychar.perks[i].lvl[j] == charp.level)
				delobj("perks",i,j);
	// Удаление квестов
	for(var i in mychar.quest)
		for(var j in mychar.quest[i].lvl)
			if (mychar.quest[i].lvl[j] == charp.level) {
				delobj("quest",i,j);
			}
	// Удаление книг
	for(var i in mychar.book)
		for(var j in mychar.book[i][2])
			if (j == charp.level) {
				if (i != 'prewar') {
					mychar.book[i][0] += mychar.book[i][2][j][i][0];
				} else {
					for(var k in mychar.book[i][2][j])
						mychar.book[i][0] += mychar.book[i][2][j][k][0];
				}
				delete mychar.book[i][2][j];
			}
	delete mychar.feats[charp.level];	// Удаление параметров
	delete mychar.skills[charp.level];	// Удаление скилов
	delete mychar.resist[charp.level];	// Удаление резистов

	if (!(charp.level % (mychar.traits.TRAIT_SKILLED && !mychar.traits.TRAIT_GOOD_NATURED ? 4 : (mychar.traits.TRAIT_GOOD_NATURED && !mychar.traits.TRAIT_SKILLED ? 2 : 3)))) {
		if (charp.perkpoint>0) {
			charp.perkpoint = 0;
			$("#textswitch1").removeClass("perkup");
		}
	}

	charp.level--;
	charp.points = mychar.points[charp.level];
	for(var i in mychar.book)
		$("#book"+i).html("x"+mychar.book[i][0]);
	$("#level").html(charp.level);
	$("#exp").html(levelexp(charp.level));
	$("#nextexp").html(levelexp(charp.level+1));
	if (charp.level == 1)
		$("#leveldown").hide();
	numbers($("#point1"),charp.points);	// обновление скилпоинтов
	statpoints();						// обновление статов
	settle();							// обновление навыков и параметров
	showlistquest();					// обновление списка квестов
	showlistperk();
}
// Окно выбора перков
function listperkup(){
	$("#perk").show();
	$("#perk").animate({'opacity':'1'},200);
	$("#selectperk").html("");
	$("#nameparms").html("");
	$("#textparms").html("");
	$("#imgparms").html("");
	select.perk = "";
	for(var i in perk){
		if (verRequirPerk(i)){
			var perkit = $("<div id=\""+i+"\" class=\"perklist\">"+textperk[i][0]+"</div>").appendTo("#selectperk");
			perkit.click(function(){
				if (select.perk) $("#"+select.perk).css("color","#00AB00");
				select.perk = this.id;
				$("#"+this.id).css("color","#00FF00");
				infoperk(this.id);
			});
		}
	}
}
//Создание списка перков в окне доступных перков
function createlistperk() {
	$("#crlistperk").html("");
	var mperk = {2: [],6: [],9: [],12: [],15: [],18: [],30: [],32: [],51: []};
	var s = 0;
	if (!("tperk" in mychar))
		mychar["tperk"] = {};
	if (mode == 0) {
		for(var i in perk)
			if (perk[i][4]!==1) {
				let lvl = perk[i][3] == 33 ? 32 : perk[i][3];
				try {
					if (perk[i][0].toLowerCase().includes(textSeachPerk))
						mperk[lvl].push(i);
				} catch (e) {
					console.log(e,perk, lvl, i, perk[i]);
				}
			}
	}
	else if (mode == 1) {
		for(var i in mychar.tperk){
			let lvl = perk[i][3] == 33 ? 32 : perk[i][3];
			mperk[lvl].push(i);
			s++;
		}
		$("<div class=\"listlevel\">"+anytext.perks+s+" / "+(mychar.traits.TRAIT_SKILLED?7:(mychar.traits.TRAIT_GOOD_NATURED?14:9))+"</div><hr>").appendTo("#crlistperk");
	}
	for(var i in mperk) {
		if (mperk[i].length === 0) continue;
		$("<div id=\"lists"+i+"\" class=\"listlevel\">"+anytext.lvl+i+"</div>").appendTo("#crlistperk");
		for(var j in mperk[i]) {
			var perkit = $("<div id=\"lists"+mperk[i][j]+"\" class=\"perklist\">"+textperk[mperk[i][j]][0]+(perk[mperk[i][j]][2]>1?"("+perk[mperk[i][j]][2]+")":"")+"</div>").appendTo("#crlistperk");
			if (mperk[i][j] in mychar.tperk) $("#lists"+mperk[i][j]).css("color","#07B");
			if (!verPerkandTrait(mperk[i][j]))
				$("#lists"+mperk[i][j]).css("color","#B00");
			perkit.click(function(){
				if (select.crperk)
					if (!verPerkandTrait(select.crperk.substr(5)))
						$("#"+select.crperk).css("color","#B00");
					else if (!(select.crperk.substr(5) in mychar.tperk))
						$("#"+select.crperk).css("color","#00AB00");
					else
						$("#"+select.crperk).css("color","#07B");
				select.crperk = this.id;
				if (!verPerkandTrait(select.crperk.substr(5)))
					$("#"+this.id).css("color","#F00");
				else
					$("#"+this.id).css("color","#0F0");
				infoparm("perks",this.id.substr(5));
			});
			perkit.dblclick(function(){
				var pp = this.id.substr(5);
				if (!verPerkandTrait(pp))
					return;
				if (!(pp in mychar.tperk)) {
					mychar.tperk[pp] = 1;
					$("#"+this.id).css("color","#07B");
				}
				else {
					delete mychar.tperk[pp];
					$("#"+this.id).css("color","#0F0");
				}
				decalc();
			});
		}
	}
}
function verPerkandTrait(p) {
	var obj = perk[p][7];
	if (!emptyObject(obj)) {
		if ("traits" in obj)
			for(var j in obj.traits) {
				if (j in mychar.traits) {
					if (obj.traits[j] == 1) {
						delete mychar.tperk[p];
						return false;
					}
				} else if (obj.traits[j] == 0) {
					delete mychar.tperk[p];
					return false;
				}
			}
		if ("perks" in obj)
			for(var j in obj.perks)
				if (j in mychar.tperk) {
					if (obj.perks[j] == 1) {
						delete mychar.tperk[p];
						return false;
					}
				} else if (obj.perks[j] == 0) {
					return false;
				}
	}
	return true;
}
// Проверка требований перка
function verRequirPerk(p) {
	// Проверка колличества разрядов перка
	if (checkperk(p) >= perk[p][2]) 
		return false;
	// Проверка соответствия уровня
	if (charp.level < perk[p][3] || charp.level > perk[p][4]) 
		return false;
	var obj = perk[p][7];
	var ormode = false;
	if (!emptyObject(obj)) {
		if ("traits" in obj) // Проверка исключающих трейтов
			for(var j in obj.traits) {
				if (j in mychar.traits) {
					if (obj.traits[j] == 1)
						return false;
				} else if (obj.traits[j] == 0) {
					return false;
				}
			}
		if ("perks" in obj) // Проверка исключающих перков
			for(var j in obj.perks) {
				if (j in mychar.perks) {
					if (obj.perks[j] == 1)
						return false;
				} else if (obj.perks[j] == 0) {
					return false;
				}
			}
		if ("skills" in obj) // Проверка скилов
			for(var j in obj.skills) {
				if ("ormode" in obj && "skills" in obj.ormode) {
					if (j in obj.ormode.skills && skills[j][0] >= obj.skills[j])
						ormode = ormode || true;
				} else {
					if (skills[j][0] < obj.skills[j]) {
						return false;
					}
				}
			}
		if ("stats" in obj) // Проверка статов
			for(var j in obj.stats) {
				if ("ormode" in obj && "stats" in obj.ormode) {
					if (j in obj.ormode.stats && stats[j][2] >= obj.stats[j])
						ormode = ormode || true;
				} else {
					if (obj.ch && stats[j][2] >= obj.stats[j]) 
						return false;
					else if (!obj.ch && stats[j][2] < obj.stats[j])
						return false;
				}			
			}
	}
	if ("ormode" in obj && !ormode)
		return false;
	return true;
}
// Рейверс кальк
function testperks(ss) {
	ss = ss===undefined ? 40 : ss;
	var sk = {};
	for(var j in skills){
		$("#s"+j).html("");
		sk[j] = 0;
	}

	for(var i in stats)	stats[i][2]=1;
	for(var i in mychar.tperk) {
		var obj = perk[i][7];
		if (!emptyObject(obj)) {
			if ("stats" in obj)
				for(var j in obj.stats)
					if (obj.stats[j]>stats[j][2] && !obj.ch) stats[j][2] = obj.stats[j];
			if ("skills" in obj)
				for(var j in obj.skills) {
					if (sk[j] < obj.skills[j]) sk[j] = obj.skills[j];
					$("#s"+j).html(sk[j]+"%");
				}
		}
	}
	var sum = 0, arr = {};
	for(var i in stats)	{
		sum += stats[i][2];
		arr[i] = stats[i][2];
	}
	return [sum,arr];
}
// Рейверс кальк
function decalc() {
	if (!regi) return;
	if (emptyObject(mychar.tperk)) {
		testperks();
		mychar.stats = {
			STR: [8 + (chtr("TRAIT_BRUISER") ? 2 : 0), 0],
			PER: [7, 0 + (chtr("TRAIT_CHEM_RESISTANT") ? 1 : 0)],
			ENU: [8 + (chtr("TRAIT_SKILLED") ? 1 : 0), 0],
			CHA: [1 + (chtr("TRAIT_SKILLED") ? 1: 0), 0],
			INT: [8 + (chtr("TRAIT_SKILLED") ? 1 : 0), 0],
			AGI: [7 + (chtr("TRAIT_SMALL_FRAME") ? 1 : 0) + (chtr("TRAIT_SKILLED") ? 1 : 0), 0 + (chtr("TRAIT_KAMIKAZE") ? 1 : 0)],
			LUC: [1,0]};
			charp.specialpoint = 0;
	} else {
		var ss = 40 + (chtr("TRAIT_BRUISER") ? 2 : 0) + (chtr("TRAIT_SMALL_FRAME") ? 1 : 0) + (chtr("TRAIT_KAMIKAZE") ? 1 : 0) + (chtr("TRAIT_SKILLED") ? 4 : 0) + (chtr("TRAIT_CHEM_RESISTANT") ? 1 : 0);
		var res = testperks(ss);
		if (res[0]==70) return;
		charp.specialpoint = ss - res[0];
		for(var i in mychar.stats)
			mychar.stats[i][0] = res[1][i];
		if (chtr("TRAIT_KAMIKAZE"))
			mychar.stats.AGI[0]--;
		// if (chtr("TRAIT_SKILLED")) {
		// 	mychar.stats.CHA[0] -= 2;
		// 	mychar.stats.ENU[0] -= 2;
		// 	mychar.stats.INT[0] -= 2;
		// 	mychar.stats.AGI[0] -= 2;
		// }
	}
	statpoints();
}
// Выводит имеющиеся трейты и перки в #textlist1
function showlistperk(){
	var lineit = $("#textlist1").html("");
	if (charp.tagt<2){
		lineit.append("<div class=\"listhead\">"+anytext.dop+"</div>");
		for(var j in mychar.traits)
			if (mychar.traits[j]) {
				lineit.append("<div id=\"list"+j+"\" class=\"perklist\">"+texttraits[j][0]+"</div>");
				$("#list"+j).click(function(){infoparm("traits",this.id.substr(4));});
			}
	}
	if (!emptyObject(mychar.perks)) {
		var mperk = [];
		lineit.append("<div class=\"listhead\">"+anytext.bonus+"</div>");
		for(var j in mychar.perks)
			for(var i in mychar.perks[j].lvl)
				mperk[mychar.perks[j].lvl[i]] = j;
		for(var j in mperk){
			lineit.append("<div><span id=\"lists"+j+"\" class=\"listlvl\">"+j+anytext.lvl3+" </span><span id=\"list"+mperk[j]+"\" class=\"perklist\">"+textperk[mperk[j]][0]/*+(checkperk(mperk[j])>1?"("+checkperk(mperk[j])+")":"")*/+"</span></div>");
			$("#list"+mperk[j]).click(function(){infoparm("perks",this.id.substr(4));});
		}
	}

}
//Создание списка квестов в окне выбора квестов
function listquestup(){
	var chval = false;
	for(var i in quest)
		chval = chval || (chobj("quest",i)<quest[i][2]&&charp.level>=quest[i][3]&&charp.level<=quest[i][4]&&quest[i][5]());
	if (!chval) return;
	$("#quest").show();
	$("#selectquest").html("");
	$("#nameparmq").html("");
	$("#textparmq").html("");
	select.quest = "";
	for(var i in quest){
		if (chobj("quest",i)<quest[i][2]&&charp.level>=quest[i][3]&&charp.level<=quest[i][4]&&quest[i][5]()){
			var questit = $("<div id=\""+i+"\" class=\"perklist\">"+textquest[i][0]+"</div>").appendTo("#selectquest");
			questit.click(function(){
				if (select.quest) $("#"+select.quest).css("color","#00AB00");
				select.quest = this.id;
				$("#"+this.id).css("color","#00FF00");
				$("#nameparmq").html(textquest[this.id][0]);
				$("#textparmq").html(textquest[this.id][1]);
			});
		}
	}
}
// Выводит взятые квесты в #textlist3
function showlistquest(){
	var lineit = $("#textlist3").html("");
	if (!emptyObject(mychar.quest)) {
		var mquest = [];
		lineit.append("<div class=\"listhead\">"+anytext.quest+"</div>");
		for (var j in mychar.quest)
			for(var i in mychar.quest[j].lvl) {
				if (mquest[mychar.quest[j].lvl[i]] == undefined)
					mquest[mychar.quest[j].lvl[i]] = [];
				if (j == "medals" && mychar.quest[j]['med']) {
					mquest[mychar.quest[j].lvl[i]].push([j,i].concat(mychar.quest[j].med[i]));
				}
				else if (j == "imp_bonus" && mychar.quest[j]['med']) {
					mquest[mychar.quest[j].lvl[i]].push([j,i].concat(mychar.quest[j].med[i]));
				}				
				else {
					mquest[mychar.quest[j].lvl[i]].push(j);
				}
			}
		for (var j in mquest) {
			lineit.append("<div><span id=\"lists"+j+"\" class=\"listlvl\">"+j+anytext.lvl2+" </span></div>");
			for (var n in mquest[j]) {
				var elem = mquest[j][n];
				if (typeof elem == "object") {
					namequest = elem[0];
					idquest = elem[1];
					lineit.append("<div><span id=\"list"+namequest+idquest+"\" data-namequest=\""+namequest+"\" data-idquest=\""+idquest+"\" class=\"perklist\">"+textquest[namequest][0]+(chobj("quest",namequest)>1?"("+elem[3]+")":"")+"</span></div>");
					$("#list"+namequest+idquest).click(function(){infoparm("quest",this.dataset.namequest,this.dataset.idquest);});
				} else {
					lineit.append("<div><span id=\"list"+elem+"\" class=\"perklist\">"+textquest[elem][0]+(chobj("quest",elem)>1?"("+chobj("quest",elem)+")":"")+"</span></div>");
					$("#list"+elem).click(function(){infoparm("quest",this.id.substr(4));});
				}
			}
		}
	}
}
// Создает строку требований перка
function require(p) {
	var str = anytext.treb;
	var obj = perk[p][7];
	str += "<br>" + anytext.lvl + ": " + perk[p][3] + " - " + perk[p][4];
	if ("stats" in obj)
		for(var i in obj.stats)
			str += "<br>"+stats[i][0]+": "+(obj.ch?"<":"")+obj.stats[i];
	if ("skills" in obj)
		for(var i in obj.skills)
			str += "<br>"+skills[i][2]+": "+obj.skills[i];
	if ("traits" in obj)
		for(var i in obj.traits)
			if (obj.traits[i] == 1)
				str += "<br><span class='deperk'>-"+texttraits[i][0]+"</span>";
			else if (obj.traits[i] == 0)
				str += "<br><span class='dedeperk'>+"+texttraits[i][0]+"</span>";
	if ("perks" in obj)
		for(var i in obj.perks)
			if (obj.perks[i] == 1)
				str += "<br><span class='deperk'>-"+textperk[i][0]+"</span>";
			else if (obj.perks[i] == 0)
				str += "<br><span class='dedeperk'>-" + textperk[i][0] + "</span>";
	return str;
}

// Вывод информации о перке или квесте по клику
function infoparm(ch,prm,med) {
	switch(ch) {
		case "traits": // описание трейтов
			$("#nameparm").html(texttraits[prm][0]);
			$("#textparm").html(texttraits[prm][1]);
			$("#textparmreq").html("");
			$("#imgparm").removeClass('loaded');
			$("#imgparm").html("<img src=\"skill/"+prm+".jpg\" onload=\"imgLoaded(this)\">");
		break;
		case "perks": // описание перков
			$("#nameparm").html(textperk[prm][0]);
			$("#textparm").html(textperk[prm][1]);
			$("#textparmreq").html(require(prm));
			$("#imgparm").removeClass('loaded');
			$("#imgparm").html("<img src=\"skill/"+prm.substr(3)+".jpg\" onload=\"imgLoaded(this)\">");
		break;
		case "quest": // описание квестов
			const replace = ['%n%','%r%'];
			$("#nameparm").html(textquest[prm][0]);
			$("#textparmreq").html("");
			var str = "";
			if (med || prm == 'medals') {
				str = textquest[prm][1] + ((prm in questinfo && med) ? "<br>" + questinfo[prm][mychar.quest[prm].med[med][0] - 1] : "");
			} else if (prm.slice(0, 3) == 'imp') {
				let descript = ((prm in questinfo) ? "<br>" + questinfo[prm][mychar.quest[prm].vol - 1] : "");
				if (prm in questinfo && mychar.quest[prm]?.sk) {
					let addSkills = mychar.quest[prm].sk;
					for (let n = 0; n < addSkills.length; n++) {
						descript = descript.replace(replace[n], addSkills[n][1]);
					}
				} 
				str = textquest[prm][1] + descript;
			} else {
				str = textquest[prm][1] + ((prm in questinfo) ? "<br>" + questinfo[prm][mychar.quest[prm].vol - 1] : "");
			}
			$("#textparm").html(str);
		break;
		case "skills": // описание скилов
			$("#nameparm").html(skills[prm][2]);
			$("#textparm").html(skills[prm][3]);
			$("#textparmreq").html((prm == "speed" ? skills["speed"][0] >= 100 ?
				"<br>Ходьба: "+Math.floor(300000/(1200*2.5-2.5*skills["speed"][0]))+"%"+
				"<br>Бег: "+Math.floor(200000/(2000-skills["speed"][0]))+"%"
				: "" : "" ));
			$("#imgparm").removeClass('loaded');
			$("#imgparm").html("<img src=\"skill/"+prm+".jpg\" onload=\"imgLoaded(this)\">");
		break;
		case "stats": // описание статов
			$("#nameparm").html(stats[prm][0]);
			$("#textparm").html(stats[prm][1]);
			$("#textparmreq").html("");
			$("#imgparm").removeClass('loaded');
			$("#imgparm").html("<img src=\"skill/"+prm+".jpg\" onload=\"imgLoaded(this)\">");
		break;
	}
}
// Информация о перке по названию
function infoperk(prm){
	$("#nameparms").html(textperk[prm][0]);
	$("#textparms").html(textperk[prm][1]);
	$("#imgparms").removeClass('loaded');
	$("#imgparms").html("<img src=\"skill/"+prm.substr(3)+".jpg\" onload=\"imgLoaded(this)\">");
}
// Чтение книг
function plusbook() {
	var str = this.id.substr(4);
	var strn;
	if (str==="prewar") {
		strn = "oratory";
	}
	else {
		strn = str;
	}
	if (mychar.book[str][0]) {
		var s = 6 + mychar.book[str][1];	// Очки навыков
		var sk = skpoint(skills[strn][0],s);
		mychar.book[str][1] = sk[1];
		pr.add("skills",strn,sk[0],1);
		if (!(charp.level in mychar.book[str][2]))
			mychar.book[str][2][charp.level] = {};
		if (!(strn in mychar.book[str][2][charp.level]))
			mychar.book[str][2][charp.level][strn] = [0,0];
		mychar.book[str][2][charp.level][strn][0]++;
		mychar.book[str][2][charp.level][strn][1]+=sk[0];
		mychar.book[str][0]--;
		$("#book"+str).html("x"+mychar.book[str][0]);
		settle();
	}
}
/*Диалог.
var textdialog текст диалога
var ans массив вариантов ответа
	каждый овтет состит из масива который содержит 3 элемента:
	1. Текст ответа
	2. Функция которая выполняется при выборе этого ответа
		если функция вернет -1 диалог не закроется
		если функция вернет 0 обнвления данных перса не произойдет
		если функция вернет объект то будут выполнены доп действия
	3. Условие появления варианта ответа
Пример использования:
talk("Может сходим в бар сегодня?",{	a:["Да пошли.",function(){alert("Идем в бар.");return 0;}, true],
										b:["Нет я не хочу.",function(){alert("Остаемся дома.");return 0;}, true] })
*/
function talk(textdialog,answ) {
	$("#talk").show();
	$("#dialog").html(textdialog);
	$("#answ").html("");
	for(var i in answ) {
		if (answ[i][2]) {						// &#9899;
			var reply = $("<div id=\"answ"+i+"\">&#149; "+answ[i][0]+"</div>").appendTo("#answ");
			reply.hover(function(){$(this).toggleClass('hover');});
			reply.click({func:answ[i][1],name:answ[i][0]},function(e){
				var nup = e.data.func();
				if (nup==-1) return;
				$("#talk").hide();
				if (nup===0) return;
				if (typeof nup == "object" && select.quest == "medals") {
					mychar.quest[select.quest]={ 
						vol: chobj("quest",select.quest) + nup[1], 
						lvl: chobj("quest",select.quest) ? mychar.quest[select.quest].lvl : [],
						med: chobj("quest",select.quest) ? mychar.quest[select.quest].med : [],
					};
					mychar.quest[select.quest].med.push(nup);
				}
				else if (typeof nup == "object" && select.quest == "imp_bonus") {
					mychar.quest[select.quest]={ 
						vol: chobj("quest",select.quest) + nup[1], 
						lvl: chobj("quest",select.quest) ? mychar.quest[select.quest].lvl : [],
						med: chobj("quest",select.quest) ? mychar.quest[select.quest].med : [],
					};
					mychar.quest[select.quest].med.push(nup);
				}

				 else if (typeof nup == "object" && select.quest.slice(0, 3) == 'imp') {
					mychar.quest[select.quest] = {
						vol: chobj("quest", select.quest) + nup[0],
						lvl: chobj("quest", select.quest) ? mychar.quest[select.quest].lvl : [],
						sk: nup[1]
					};
				} else {
					mychar.quest[select.quest]={ 
						vol: chobj("quest",select.quest) + nup, 
						lvl: chobj("quest",select.quest) ? mychar.quest[select.quest].lvl : []
					};
				}
				mychar.quest[select.quest].lvl.push(charp.level);
				settle();
				statpoints();
				showlistquest();
				});
		}
	}
}
// Проверка обекта на наличие элементов
function emptyObject(obj) {
	for (var i in obj) return false;
	return true;
}
function totalurl(textarea) {
	$("#total").show();
	$("#totaltext").val(textarea);
}
// Итоговые результаты в текстовом виде
function total() {
	$("#total").show();
	var textarea = charp.name+" "+feat.live[0]+" XP\n";
	for(var i in stats)
			textarea += stats[i][2]+" ";
	textarea += "\n"+anytext.traits;
	for(var i in traits)
		if (mychar.traits[i])
			textarea += texttraits[i][0]+" ";
	textarea += "\n"+anytext.nav;
	for(var i in skills)
		if (i in mychar.tags)
			textarea += skills[i][1]+" ";
	textarea += "\n";
	if (!emptyObject(mychar.perks)) {
		var mperk = [];
		for(var j in mychar.perks)
			for(var i in mychar.perks[j].lvl)
				mperk[mychar.perks[j].lvl[i]] = j;
		for(var j in mperk)
			textarea += ""+j+" ур: "+textperk[mperk[j]][0] + "\n";
	}
	// Прокаченые навыки
	var str = "";
	for(var i in skills)
		if (skills[i][0] > 80) {
			var sum = 0;
			for(var j in mychar.skills) {
				if (mychar.skills[j][i] != undefined) {
					sum += mychar.skills[j][i][0];
					if (j == 1)
						sum += mychar.skills[j][i][1];
				}
			}
			sumperk = sum+startskills[i]();
			if (sumperk > skills[i][0]) sumperk = skills[i][0];
			sumperk2 = skills[i][0]-sumperk;
			str += skills[i][2]+": "+skills[i][0]+(sumperk2>0?" = "+sumperk+" + "+sumperk2:"")+"\n";
		}
	if (str != "")
		textarea += "\n"+anytext.procnav+"\n"+str;
	// Импланты
	str = "";
	for(var i in questinfo)
		if (i.substr(0,3) == "imp")
			if (i in mychar.quest) {
				const replace = ['%n%', '%r%'];
				let descript = questinfo[i][mychar.quest[i].vol - 1]
				let addSkills = mychar.quest[i]?.sk;
				if (addSkills) {
					for (let n = 0; n < addSkills.length; n++) {
						descript = descript.replace(replace[n], addSkills[n][1]);
					}
				}
				str += descript + "\n";
			}
	if (str != "")
		textarea += "\n"+anytext.imp+"\n"+str;
	// Медали
	str = "";
	if (mychar.quest.medals && mychar.quest.medals.med) {
		var medinfo = {skillpoint: [0,0], carryweight: [0,0], hp: [0,0]}
		for(var i in mychar.quest.medals.med) {
			var elem = mychar.quest.medals.med[i];
			if (elem[0] == 1 || elem[0] == 4 || elem[0] == 5) {
				medinfo.skillpoint[0] += (elem[0] > 1) ? ((elem[0] == 4) ? 10 : 80) : 1;
				medinfo.skillpoint[1] += elem[1];
			} else if (elem[0] == 2) {
				medinfo.carryweight[0] += 15;
				medinfo.carryweight[1] += elem[1];
			} else if (elem[0] == 3) {
				medinfo.hp[0] += 1;
				medinfo.hp[1] += elem[1];
			}
		}
		if (medinfo.skillpoint[1])
			str += medinfo.skillpoint[1] + anytext.medals_in + medinfo.skillpoint[0] + anytext.medals_skillpoint + "\n";
		if (medinfo.carryweight[1])
			str += medinfo.carryweight[1] + anytext.medals_in + medinfo.carryweight[0] + anytext.medals_carryweight + "\n";
		if (medinfo.hp[1])
			str += medinfo.hp[1] + anytext.medals_in + medinfo.hp[0] + anytext.medals_hp + "\n";
		
	}
	if (str != "" || mychar.quest.medals)
		textarea += "\n" + anytext.medals+mychar.quest.medals.vol + "\n" + str;
	// Книги
	str = "";
	for(var i in mychar.book) {
		if (i!="prewar"&&mychar.book[i][0]<10)	str += textbook[i]+" "+(10-mychar.book[i][0])+"\n";
		else if (i=="prewar"&&mychar.book[i][0]<20) str += textbook[i]+" "+(20-mychar.book[i][0])+"\n";
	}
	if (str != "")
		textarea += "\n"+anytext.book+"\n"+str;
	if (cookiehash)
		textarea += "http://"+location.host+"/?hash="+cookiehash+"\n";

	/*textarea += "base64:\n";
	var nameui = charp.name;
	charp.name = encodeURIComponent(charp.name);
	textarea += Base64.encode(lzw(JSON.stringify([mychar,charp])));
	charp.name = nameui;*/
	$("#totaltext").val(textarea);
	if ((typeof autoArr) == "function")
		autoArr();
}
// Скрол по 1 строчке
function scrollit(e){
		var delta = e.originalEvent.deltaY || e.originalEvent.detail || e.originalEvent.wheelDelta;
		if (delta>0) $(this).scrollTop(this.scrollTop + 12);
		else $(this).scrollTop(this.scrollTop - 12);
		e.preventDefault();
}

function imgLoaded(img){
	var $img = $(img);
	$img.parent().addClass('loaded');
}
// Загрузка билда из json строк
function loadbjson(str) {
	var arr = JSON.parse(str);
	loadbuild(arr[0],arr[1]);
}

// Згарузка билда из обьектов
function loadbuild(myc,cp) {
	mychar = myc;
	charp = cp;
	charp.name = decodeURIComponent(charp.name);
	for(var i in skills){
		if (i in mychar.tags) {
			$("#"+i+"s").css("color", "#ABABAB");
			$("#"+i).css("color", "#ABABAB");
		}
		else {
			$("#"+i+"s").css("color", "#0E0");
			$("#"+i).css("color", "#0E0");
		}
	}
	for(var i in mychar.book)
		$("#book"+i).html("x"+mychar.book[i][0]);
	leveluping = true;
	regi = true;
	leveling();
	showlistperk();
	$("#level").html(charp.level);
	$("#exp").html(levelexp(charp.level));
	$("#nextexp").html(levelexp(charp.level+1));
	$("#namenter").html(charp.name);
	$("#name").html($("#namenter").html().toUpperCase());
	numbers($("#numberage"),charp.age); // обновление циферок возраста
	$("#age").html(charp.age);
	if (charp.sex === "men") {
		$("#men").css('backgroundImage', 'url(img/men.png)');
		$("#women").css('backgroundImage', '');
		$("#sex").html(sextext.men);
	}
	else if (charp.sex === "women") {
		$("#women").css('backgroundImage', 'url(img/women.png)');
		$("#men").css('backgroundImage', '');
		$("#sex").html(sextext.women);
	}
	numbers($("#point1"),charp.points);	// обновление скилпоинтов
	numbers($("#point2"),charp.tags);	// обновление очков тага навыков
	statpoints();						// обновление статов
	settle();							// обновление навыков и параметров
	createlistperk();					// создание доступных перков
	showlistquest();					// обновление списка квестов
	// Отображение требования навыков к перкам
	for(var k in mychar.tperk)
		if ("skills" in perk[k][7])
			for(var j in perk[k][7].skills) {
				$("#s"+j).html(perk[k][7].skills[j]+"%");
			}
}
// Сохранение билда в базу данных
function setbuild() {
	if (send)
		return;
	var nameui = charp.name;
	charp.name = encodeURIComponent(charp.name);
	var arr = [mychar,charp];
	if (online) { // Сохранение билда в онлайн версии
		var str = "setbuild="+encodeURIComponent(Base64.encode(lzw(JSON.stringify(arr))))+"&name="+nameui;
		if (cookiehash)
			str += "&hash="+cookiehash;

		send = true;
		$.ajax({
		type: "POST",
		url: "basechar.php",
		data: str,
		success: function(msg){
				if (msg) {
					send = false;
					save = true;
					cookiehash = Cookies.get("hash");
					totalurl("http://"+location.host+"/?hash="+Cookies.get("hash"));
				}
				else {
					totalurl(anytext.nosave);
				}
		}});
	}
	else { // Сохранение билда в офлайн версии
		save = true;
		totalurl(Base64.encode(lzw(JSON.stringify(arr))));
	}
	charp.name = nameui;
}
// Загрузка билда из базы данных
function getbuild(hash) {
	hash = hash == undefined?cookiehash:hash;
	$.ajax({
	type: "POST",
	url: "basechar.php",
	//dataType: 'json',
	data: "getbuild="+hash,
	success: function(msg){
				if (msg) {
					if (msg[0] == '[')
						loadbjson(msg);
					else if (msg[0] == 'W') {
						var temp = Base64.decode(msg);
						temp = delzw(temp);
						loadbjson(temp);
					}
				}
				//loadbuild(msg[0],msg[1]);
			}
	});
}

function maxMedals() {
	return 80;
}
// костыль демчева: вернуть true если тагнуты не подходящие навыки для крушилы
function BruiserCheck34() {
	var censor = ["легкое","тяжелое","энерго","ремонт","метательное"]
	if (charp.kostylbruiser34 == 0) {return false;}
	for(var i in skills)
		if (i in mychar.tags) 
			if (censor.indexOf(skills[i][1]) != -1) {return true;}
	return false;
}
//главная функция
function main()
{
	if (window == top)
		$("body").css("background-color", "rgba(0, 0, 0, 255)");
	else
		$("body").css("background-color", "rgba(0, 0, 0, 0)");

	$("#totaltext").on('wheel', scrollit);
	$("#crlistperk").on('wheel', scrollit);
	$("#selectperk").on('wheel', scrollit);
	$("#selectquest").on('wheel', scrollit);
	$("#textparm").on('wheel', scrollit);
	$("#textparms").on('wheel', scrollit);
	$("#textparmq").on('wheel', scrollit);
	$("#answ").on('wheel', scrollit);
	for(var i = 1; i<4;i++) $("#textlist"+i).on('wheel', scrollit);

	$("#buttreq").click(function(e){
		if (req) {
			$("#buttreq").css("background-color", "rgba(255, 0, 0, 0.55)");
			$("#textparm").show();
			$("#textparmreq").hide();
		}
		else {
			$("#buttreq").css("background-color", "rgba(0, 255, 0, 0.55)");
			$("#textparm").hide();
			$("#textparmreq").show();
		}
		req = !req;
	});
	$("#totalkey").click(total);
	$("#canceltotal").click(function(){$("#total").hide();})

	$("#upscroll").click(function(){
		var idscroll = $("#selectperk");
		idscroll.scrollTop(idscroll.scrollTop() - 12);
	});
	$("#downscroll").click(function(){
		var idscroll = $("#selectperk");
		idscroll.scrollTop(idscroll.scrollTop() + 12);
	});

	$("#upscrollist").click(function(){
		var idscroll = $("#crlistperk");
		idscroll.scrollTop(idscroll.scrollTop() - 12*3);
	});
	$("#downscrollist").click(function(){
		var idscroll = $("#crlistperk");
		idscroll.scrollTop(idscroll.scrollTop() + 12*3);
	});

	$("#selectbuild").change(function(){
		var bhash = $("#selectbuild option:selected").val();
		//console.log(bhash);
		cookiehash = bhash;
		document.location.search = "?hash="+bhash;
		//getbuild(bhash);
	});

	$("#men").click(changesex);
	$("#women").click(changesex);

	document.addEventListener('keydown', modalCloseEsc);
	$("#wrap").click(modalCloseClick);
	$(document).keydown(function(e){
		if (select.crperk)
			if (e.which==40) {// down
				var next = $("#"+select.crperk).next();
				if (next.attr("id") == undefined) return;
				if (next.attr("id").length < 8) next = next.next();
				if (next.position().top >= 408) next.parent().scrollTop(next.parent().scrollTop()+(next.position().top-408));
				if (!(select.crperk.substr(5) in mychar.tperk))
					$("#"+select.crperk).css("color","#00AB00");
				else
					$("#"+select.crperk).css("color","#07B");
				select.crperk = next.attr("id");
				next.css("color","#00FF00");
				infoparm("perks",next.attr("id").substr(5));
			}
			else if (e.which==38) {// up
				var prev = $("#"+select.crperk).prev();
				if (prev.attr("id") == "lists3") return;
				if (prev.attr("id").length < 8) prev = prev.prev();
				if (prev.position().top < 0) prev.parent().scrollTop(prev.parent().scrollTop()+prev.position().top);
				if (prev.parent().scrollTop()==12) prev.parent().scrollTop(0);
				if (!(select.crperk.substr(5) in mychar.tperk))
					$("#"+select.crperk).css("color","#00AB00");
				else
					$("#"+select.crperk).css("color","#07B");
				select.crperk = prev.attr("id");
				prev.css("color","#00FF00");
				infoparm("perks",prev.attr("id").substr(5));
			}
			else return;
	})

	$("#name").click(showthis);
	$("#age").click(showthis);
	$("#sex").click(showthis);

	$("#plusage").click(plusage);
	$("#minusage").click(minusage);
	$("#namenter").keydown(function(pop){ if (pop.keyCode === 13) modalCloseClick();});
	$("#pasenter").keydown(function(pop){ if (pop.keyCode === 13) modalCloseClick();});
	$("#namenter").keyup(function(){
											$("#name").html($("#namenter").html().toUpperCase());
											charp.name = $("#namenter").html();
											});

	$("#done").click(leveling);
	$("#cancel").click(reg);
	// ДОБАВЛЕНИЕ ПЕРКА!!!!
	$("#doneperk").click(function(){
						$("#perk").hide();
						$("#perk").animate({'opacity':'0'},200);
						if (select.perk) {
							addperk(select.perk);
							charp.perkpoint = 0;
							$("#textswitch1").removeClass("perkup");
							showlistperk();
							settle();
							statpoints();
							numbers($("#point1"),charp.points);
						}
						});
	$("#cancelperk").click(function(){$("#perk").hide();$("#perk").animate({'opacity':'0'},200);});

	$("#donequest").click(function(){
						$("#quest").hide();
						if (select.quest) {
							if (select.quest!="per_ncr" && select.quest!="medals" && select.quest!="drayfild" && select.quest.substr(0,3)!="imp") {
								mychar.quest[select.quest] = {vol:chobj("quest",select.quest) + 1, lvl:chobj("quest",select.quest) ? mychar.quest[select.quest].lvl:[]};
								mychar.quest[select.quest].lvl.push(charp.level);
							}
							quest[select.quest][6]();
							showlistquest();
							settle();
							statpoints();
						}
						});
	$("#cancelquest").click(function(){$("#quest").hide()});

	$("#levelup").click(levelup);
	$("#leveldown").click(leveldown);

	for(var i = 1; i<4;i++) $("#textswitch"+i).click(switchinfo);

	for(var j in mychar.book) // Чтение книг
		$("#book"+j).click(plusbook);

	for(var j in stats) {
		$("#plus"+j).click(plusspec);
		$("#minus"+j).click(minusspec);
		$("#"+j+"n").click(function(){infoparm("stats",this.id.substr(0,3))});
		$("#"+j+"t").click(function(){infoparm("stats",this.id.substr(0,3))});
		$("#"+j).click(function(){infoparm("stats",this.id.substr(0,3))});
	}
	for(var j in traits){
		$("#key"+j).mousedown(function(){$("#lkey"+this.id.substr(3)).html("<img src=\"img/small_key.png\" onload=\"imgLoaded(this)\">");});
		$("#key"+j).mouseup(function(){$("#lkey"+this.id.substr(3)).html("");});
		$("#key"+j).click(trait);
		$("#"+j).click(function(){infoparm("traits",this.id)}).html(texttraits[j][0]);
	}

	for(var j in skills){
		$("#key"+j).mousedown(function(){$("#lkey"+this.id.substr(3)).html("<img src=\"img/small_key.png\" onload=\"imgLoaded(this)\">");});
		$("#key"+j).mouseup(function(){$("#lkey"+this.id.substr(3)).html("");});
		$("#key"+j).click(tags);
		$("#butt"+j).click(selectskill);
		$("#butt"+j).click(function(){infoparm("skills",this.id.substr(4))});
		$("#"+j+"s").html(skills[j][2]);
	}
	$("#titlelist").click(function(){
		mode++;
		if (mode>1) mode = 0;
		$("#titlelist").html(mod[mode]);
		createlistperk();
		decalc();
		$("#search").val('');
		textSeachPerk = '';
	});
	$("#totaltext").on('input', function(){
		var str = $("#totaltext").val();
		if (str[0] == '[' || str[0] == 'W')
			$("#loadtotal").show();
		else
			$("#loadtotal").hide();
	});
	$("#loadtotal").click(function(){
		var str = $("#totaltext").val();
		if (str[0] == '[')
			loadbjson(delzw(str));
		else if (str[0] == 'W') {
			var temp = Base64.decode(str);
			temp = delzw(temp);
			loadbjson(temp);
		}

		$("#total").hide();
	});
	$("#loadkey").click(function(){
		totalurl("");
	});
	$("#search").on('input', function(e) {
		textSeachPerk = e.currentTarget.value.toLowerCase();
		createlistperk();
	});

	$("#titlelist").html(mod[mode]);
	$("#men").css('backgroundImage', 'url(img/men.png)');
	$("#age").html(charp.age);
	numbers($("#numberage"),charp.age);	// обновление циферок возраста
	numbers($("#point1"),charp.points);	// обновление скилпоинтов
	numbers($("#point2"),charp.tags);	// обновление очков тага навыков
	statpoints();						// обновление статов
	settle();							// обновление навыков и параметров
	createlistperk();					// создание доступных перков

	if (cookiehash)
		getbuild();
	var bgImg = new Image;
	bgImg.src = "img/reg.png";
	bgImg.onload = function(){
		if (regi) {
			$("#main").css('backgroundImage', 'url(' + bgImg.src + ')');
			$("#main").animate({'opacity':'1'},500);
		}
	};
}
//window.addEventListener('DOMContentLoaded', main);
window.addEventListener("load", main);