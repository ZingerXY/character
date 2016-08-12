var leveluping = false; // для отладки!!!
var regi = true;
var medsp = 0;
var save = false;
var mode = 0;
var mod = ["Все перки","Выбранные перки","Доступные перки"];

var nameman = ["Август","Авенир","Аврорий","Адам","Адонис","Алевтин","Алексей","Альберт","Альбин","Альфред","Андрей","Анисий","Антоний","Антонин","Антуан","Аполлон","Аргент","Аркадий","Арсен","Арсений","Артемий","Артур","Атеист","Бажен","Богдан","Боеслав","Боримир","Борис","Будимир","Булат","Вадим","Валерий","Вальтер","Василий","Велорий","Виктор","Вилен","Виталий","Витольд","Влад","Владлен","Воин","Воислав","Володар","Волемир","Всемил","Гаврил","Гаррий","Гелий","Гений","Георгий","Герман","Гертруд","Глеб","Гордий","Горимир","Гранит","Давид","Дамир","Дан","Данил","Дар","Денис","Джозеф","Джон","Дионис","Добрыня","Дональт","Донат","Евгений","Евдоким","Егор","Ефим","Ждан","Захар","Зиновий","Зорий","Ибрагим","Иван","Игорь","Сидор","Июлий","Казимир","Карл","Касьян","Киприан","Кир","Кирилл","Клавдий","Клемент","Клим","Козьма","Лазарь","Ларион","Леонард","Леонид","Леонтий","Лука","Лукиан","Любим","Любомир","Люциан","Май","Маеслав","Макарий","Макс","Максим","Милий","Милонег","Мир","Мирон","Михайло","Модест","Моисей","Монолит","Назарий","Натан","Наум","Неон","Неонил","Нестер","Никандр","Норд","Овидий","Одиссей","Октябрь","Олег","Орест","Осип","Павел","Панфил","Пётр","Прохор","Радий","Радим","Радомир","Сава","Савелий","Свет","Светлан","Север","Северин","Северян","Семён","Сергей","Сталий","Стефан","Тарас","Тристан","Трофим","Фаддей","Фёдор","Федор","Феликс","Филимон","Филипп","Флегонт","Флоренц","Флорин","Фрол","Храбр","Христоф","Эдуард","Эльбрус","Энергий","Эрнст","Юлиан","Юрий","Януарий","Ярополк"];
var namewoman = ["Агата","Агния","Аза","Аида","Акулина","Аксинья","Алёна","Алиса","Алла","Альбина","Анжела","Анисья","Анита","Анна","Антония","Анфуса","Ариадна","Арина","Арсения","Астра","Астрид","Аэлита","Бажена","Беата","Бела","Белла","Берта","Богдана","Валерия","Ванда","Варвара","Венера","Вера","Веста","Видана","Вилена","Влада","Гайя","Галина","Ганна","Гелена","Глория","Дайна","Дана","Дария","Дарина","Дарьяна","Дия","Диана","Диния","Добрава","Домина","Доротея","Ева","Евгения","Евдокия","Елена","Евфимия","Жанна","Ждана","Зорина","Зинаида","Зиновия","Злата","Зоя","Иванна","Илария","Инга","Инесса","Инна","Иоанна","Иона","Ипатия","Ираида","Ироида","Ирина","Исидора","Искра","Ия","Кирилла","Клавдия","Клара","Ксения","Лада","Лариса","Лениана","Ленина","Леонида","Леонила","Леонтия","Леся","Ливия","Лидия","Лилиана","Лилия","Лина","Любава","Любовь","Людмила","Магда","Мадлен","Мая","Марина","Марья","Мари","Марта","Марфа","Матрона","Меланья","Милада","Милица","Мира","Мирра","Млада","Муза","Надежда","Надия","Нелли","Неонила","Ника","Нина","Нинель","Новелла","Нора","Оксана","Олеся","Олимпия","Ольга","Павла","Павлина","Полина","Радмила","Раиса","Ревмира","Регина","Рената","Римма","Рогнеда","Роза","Розалия","Розана","Руслана","Руфь","Савина","Соломея","Свобода","Селина","Слава","Славяна","Снежана","София","Стелла","Сосанна","Сюзанна","Таира","Таисия","Тамара","Томила","Татьяна","Ульяна","Устинья","Фелиция","Феодора","Флавия","Флория","Фотина","Харита","Хиония","Эльвира","Эльмира","Эльза","Эмма","Эрика","Юлиана","Юнона","Ядвига","Яна","Янина","Яромира"];

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
		ENU: [8,0], // Выносливость
		CHA: [1,0], // Обаяние
		INT: [8,0], // Интелект
		AGI: [7,0], // Ловкость
		LUC: [1,0] // Удача
	},
    book: { // Доступно книг, лишние очки
        light: [10,0,{}],
        energy: [10,0,{}],
        orderly: [10,0,{}],
        science: [10,0,{}],
        repair: [10,0,{}],
        ranger: [10,0,{}],
        prewar: [20,0,{}]
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
	name: "" // имя
};
// Название, описание, сумма
var stats = {   
	STR: ["Cила","Грубая физическая сила. Хорошо подходит для воинов и им подобных. Оказывает влияние на Очки Жизней, наносимые Повреждения и Переноску Груза.",0],
	PER: ["Восприятие","Способность иначе видеть, слышать и замечать события. Необходимое качество для каждого снайпера. Оказывает влияние на Дальность стрельбы и Порядок действий.",0],
	ENU: ["Выносливость","Выносливость помогает переносить тяготы и лишения судьбы героя с подобающим спокойствием. Оказывает влияние на Очки Жизней, Устойчивость к Яду и Радиации, Уровень Лечения и др.",0],
	CHA: ["Обаяние","Обаяние - это комбинация внешности и шарма. Подходит для персонажей, которые всего добиваются словами. Влияет на реакцию людей и цены товаров.",0],
	INT: ["Интелект","Интеллект отвечает за память, скорость реакции и способность оценивать события. Влияет на количество очков умений на уровень, режимы диалога и многое др.",0],
	AGI: ["Ловкость","Ловкость и координация движений могут спасти вас от верной гибели. В ловкости нуждается каждый персонаж. Влияет на Очки Действия, Класс Брони, Порядок действий и многое др.",0],
	LUC: ["Удача","Степень воздействия теории вероятностей на вашу судьбу. Высокая или низкая удачливость часто определяют, как вам повезет в игре, и как будут развиваться дальнейшие события.",0]
};
// SkillMod.Add2
var SkillMod = { 
	MaxValue: 300,
    Add2: 100,
    Add3: 125,
    Add4: 150,
    Add5: 175,
    Add6: 200
};
// навык, кр.название, название, описание
var skills = {		
	light: 	[0,"легкое","Легкое оружие","Использование,починка и общие знания по стрелковому оружию. Пистолетам,автоматам и винтовкам."],
	heavy: 	[0,"тяжелое","Тяжелое оружие","Умение работать с тяжелым вооружением. Ручные и многоствольные пулеметы,гранатометы,огнеметы и тому подобное."],
	energy:	[0,"энерго","Энергооружие","Способность эффективно применять энерго-оружие. Ведение огня из различных лазерных и плазменных орудий."],
	melee: 	[0,"рукопашка","Рукопашная","Сочетание боевых искусств,знание рукопашного боя и навыков самообороны позволяют вам драться используя только руки и ноги."],
	steel: 	[0,"холодное","Холодное оружие","Использование разных подручных средств в ближнем бою. Ножи,дубинки,копья,кувалды,ломы и тому подобный хлам."],
	thrown: [0,"метательное","Метательное оружие","Способность успешно применять метательные средства. Копья,гранаты,коктейли Молотова и прочее."],
	orderly:[0,"санитар","Санитар","Общие познания в области первой медицинской помощи. Способность лечиться от мелких порезов,царапин и прочего. По игре способность восстанавливает больше жизней,чем просто отдых."],
	doctor: [0,"доктор","Доктор","Излечение тяжелых ранений и умение обращаться с поврежденными частями тела. Без этой способности для излечения будет требоваться очень много времени."],
	sneak: 	[0,"сник","Скрытность","Тихое передвижение и способность оставаться незамеченным. В случае успеха вас будет гораздо тяжелее обнаружить. Вы не можете одновременно бежать и красться."],
	hack: 	[0,"взлом","Взлом замков","Умение открывать двери,даже не имея подходящего ключа. Использование отмычек или электронных устройств сильно улучшает жизненные перспективы."],
	steal: 	[0,"воровство","Воровство","Часто вы оказываетесь в состоянии позаимствовать чужие вещи без ведома владельца. Неплохо для воровской карьеры."],
	traps: 	[0,"ловушки","Ловушки","Способность обнаруживать и обезвреживать ловушки. Кроме того,установка зарядов взрывчатого вещества."],
	science:[0,"наука","Наука","Большое количество научного знания,включая работу с компьютером,биологию,физику и геологию помогут в дальнейшем."],
	repair: [0,"ремонт","Ремонт","Практическое применение научных знаний. Ремонт и создание снаряжения,разнообразных механизмов,электроники и оружия."],
	oratory:[0,"красноречие","Красноречие","Способность общаться с людьми и использовать принципы риторики на практике. Интуиция,позволяющая отличать ложь от правды."],
	trade: 	[0,"торговля","Торговля","Умение торговать. Можно повысить только бартером с торговцем,после чего растёт Опыт торговли. С ростом Опыта торговли,растёт и сам навык."],
	speed: 	[0,"атлетизм","Атлетизм","Вы много занимамались атлетикой,что дало вам возможность быстрее двигаться."],
	ranger: [0,"скиталец","Скиталец","Вы не остаетесь подолгу в закрытом помещении,а всегда в дороге. Вы многое знаете о зверях,птицах,растениях и пустыне."]
};
var textbook = {
	light: "Легкое оружие",
	energy: "Энергетическое оружие",
	orderly: "Первая помощь",
	science: "Наука",
	repair: "Ремонт",
	ranger: "Скиталец",
	prewar: "Довоенки"
};
// параметр, название, описние
var feat = { 
    acrit:  [0,"антикрит",""],
	dodge:	[0,"улонение",""],
	live: 	[0,"жизни",""],
	armc: 	[0,"класс брони",""],
	apoi: 	[0,"ОД",""],
	maxl: 	[0,"макс груз",""],
	mdmg: 	[0,"рукоп повр",""],
	oview: 	[0,"радиус обзора",""],
	stox: 	[0,"уст к яду",""],
	srad: 	[0,"уст к рад",""],
	proc: 	[0,"порядок",""],
	levh: 	[0,"уров лечения",""],
	crit: 	[0,"шанс на крит",""]
};
// Резисты
var resist = {
	normal:		["Норма",""],
	laser:		["Лазер",""],
	fire:		["Огонь",""],
	plasma:		["Плазма",""],
	explode:	["Взрыв",""],
	electro:	["Электро",""]
};
// SKILLS
var pr = {// Создание ветки обьекта crSkills
    cr: function(pr,str){
        if(!(charp.level in mychar[pr]))
            mychar[pr][charp.level]={};
        if(!(str in mychar[pr][charp.level]))
            mychar[pr][charp.level][str] = [0,0];
    },// Удаление ветки обьекта прокачки скилов если он пустой delSkills
    del: function(pr,str){
        if(!this.ch(pr,str)) return;
        if(mychar[pr][charp.level][str][0] == 0 && 
           mychar[pr][charp.level][str][1] == 0)
            delete mychar[pr][charp.level][str];
        if(emptyObject(mychar[pr][charp.level]))
            delete mychar[pr][charp.level];	
    },// Добавление к навыку addSkills
    add: function(pr,str,n,c){
        c = c===undefined ? 0 : c;
        this.cr(pr,str);
        mychar[pr][charp.level][str][c] += n;
        this.del(pr,str);
    },
    addr: function(str,asb,res){
        this.cr("resist",str);
        mychar.resist[charp.level][str][0] += asb;
        mychar.resist[charp.level][str][1] += res;
        this.del("resist",str);
    },// Проверка наличия прокачки навыка
    ch: function(pr,str){
        if(charp.level in mychar[pr])
            if(str in mychar[pr][charp.level])
                if(mychar[pr][charp.level][str][0]>0)
                    return true;
        else
            return false;
    },
    sum: function(pr,str){
        var sum = 0;
        for(var j in mychar[pr])
            if(str in mychar[pr][j]) {
                sum += mychar[pr][j][str][0];
                sum += mychar[pr][j][str][1];
            }
        return sum;
    },
    sumr: function(str){
        var sum = [0,0];
        for(var j in mychar.resist)
            if(str in mychar.resist[j]) {
                sum[0] += mychar.resist[j][str][0];
                sum[1] += mychar.resist[j][str][1];
            }
        return sum;
    }
}
// Выбор трейта
function trait(){	
	var str = this.id.substr(3);	
	traits[str][0](str);
	statpoints();
	settle();
	if(mychar.traits[str]) $("#"+str).css("color", "#ABABAB");
	else $("#"+str).css("color", "#00FF00");
	infoparm("traits",str);
}
// Выбор тагнутых навыков
function tags() {	
	var str = this.id.substr(3);
	if(!(str in mychar.tags) && charp.tags > 0) {
		mychar.tags[str] = 1;
		charp.tags--;
		pr.add("skills",str,20,1);
		$("#"+str+"s").css("color", "#ABABAB");
		$("#"+str).css("color", "#ABABAB");
	}
	else if((str in mychar.tags) && charp.tags < 3)	{
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
function settle() {	
	// Легкое оружие
	skills.light[0] = 5 + mychar.stats.AGI[0]*4;					
	// Тяжелое
	skills.heavy[0] = mychar.stats.AGI[0]*2;						
	// Энергетическое
	skills.energy[0] = 0 + mychar.stats.AGI[0]*2;					
	// Рукопашка
	skills.melee[0] = 30 + (mychar.stats.STR[0]+mychar.stats.AGI[0])*2;	
	// Холодное
	skills.steel[0] = 20 + (mychar.stats.STR[0]+mychar.stats.AGI[0])*2;	
	// Метательное
	skills.thrown[0] = mychar.stats.AGI[0]*4;						
	// Санитар
	skills.orderly[0] = (mychar.stats.PER[0]+mychar.stats.INT[0])*2;		
	// Доктор
	skills.doctor[0] = 5 + mychar.stats.PER[0]+mychar.stats.INT[0];		
	// Скрытность
	skills.sneak[0] = 5 + mychar.stats.AGI[0]*3;					
	// Взлом
	skills.hack[0] = 10 + mychar.stats.AGI[0]+ mychar.stats.PER[0];		
	// Воровство
	skills.steal[0] = mychar.stats.AGI[0]*3;						
	// Ловушки
	skills.traps[0] = 10 + mychar.stats.AGI[0]+ mychar.stats.PER[0];		
	// Наука
	skills.science[0] = mychar.stats.INT[0]*4;					
	// Ремонт
	skills.repair[0] = mychar.stats.INT[0]*3;						
	// Красноречие
	skills.oratory[0] = mychar.stats.CHA[0]*5;						
	// Торговля
	skills.trade[0] = mychar.stats.CHA[0]*4;						
	// Атлет
	skills.speed[0] = 0;									
	// Скиталец
	skills.ranger[0] = (mychar.stats.ENU[0]+mychar.stats.INT[0])*2;
	
	for(var i in skills) 
		skills[i][0] += pr.sum("skills",i);			
	
    for(var i in mychar.stats)
			stats[i][2] = mychar.stats[i][0] + mychar.stats[i][1];
	// Жизни
	feat.live[0] = 60 + stats.STR[2] + stats.ENU[2]*2;		
	// Класс брони
	feat.armc[0] = stats.AGI[2]*(mychar.traits.TRAIT_KAMIKAZE ? 0 : 1)+(mychar.traits.TRAIT_KAMIKAZE ? 1 : 0);							
	// Очки действий
	feat.apoi[0] = 5 + Math.floor(stats.AGI[2]/2);			
	// Макс груз
	feat.maxl[0] = Math.round(0.453*( 25 + stats.STR[2] * ( 25 - (mychar.traits.TRAIT_SMALL_FRAME ? 1 : 0) * 10 )));
	// Рукоп. повр.
	feat.mdmg[0] = (stats.STR[2] > 5 ? stats.STR[2]-5 : 1);	
	// Радиус обзора
	feat.oview[0] = 20 + stats.PER[2]*3;										
	// Уст. яду
	feat.stox[0] = (mychar.traits.TRAIT_FAST_METABOLISM ? 0 : 1)*stats.ENU[2]*5;
	if(feat.stox[0]>95) feat.stox[0] = 95;
	// Уст. радиации
	feat.srad[0] = (mychar.traits.TRAIT_FAST_METABOLISM ? 0 : 1)*stats.ENU[2]*2;	
	if(feat.srad[0]>95) feat.srad[0] = 95;
	// Порядок
	feat.proc[0] = stats.PER[2]*2;							
	// Уровень лечения
	feat.levh[0] = (stats.ENU[2] > 5 ? Math.floor(stats.ENU[2]/3) : 1);	
	// Крит
	feat.crit[0] = stats.LUC[2];	
	//Уворот
	feat.dodge[0] = stats.CHA[2] + (checkperk("PE_HTH_EVADE") ? (feat.apoi[0]/4)+(feat.apoi[0]/2) : 0);
    //Антикрит
    feat.acrit[0] = checkperk("PE_TERMINATOR") ? (stats.STR[2] + stats.ENU[2])*5 : 
                    mychar.traits.TRAIT_SKILLED ? 60 : 
                    checkperk("PE_STONEWALL") ?  40 : 0;
	
	for(var i in feat) 
		feat[i][0] += pr.sum("feats",i);	
		
	for(var n in resist) {
		var res = pr.sumr(n);
		$("#"+n).html(res[0]+" / "+res[1]+"%");
	}
	for(var j in skills){
		if(skills[j][0] > 300) skills[j][0] = 300;
		$("#"+j).html(skills[j][0]+"%");
		
	}
	for(var j in feat){
		if(j != "acrit" &&j != "crit" && j != "live" && j != "dodge") 
			$("#"+j).html(feat[j][0]);
        else if(j != "live")
            $("#"+j).html(feat[j][0]+"%");
        else
            $("#"+j).html(feat[j][0]+"/"+feat[j][0]);
	}
}
// Обновление статов
function statpoints(){	
	for(var j in mychar.stats)	{
		var link = $("#"+j);
		var n = mychar.stats[j];
		n = mychar.stats[j][0] + mychar.stats[j][1];
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
			default: str = n < 1 ? "Гадко" : n > 10 ? "Герой!" : "Error";
		}
		$("#"+j+"t").html(str);
		numbers(link,n);
	}
	numbers($("#specialpoint"),charp.specialpoint);
	settle();
	createlistperk();
}
// Отображение разлиных поинтов
function numbers(div,n) {
	if(n<0) {
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
	
	if(num[2]===0 && num[1]==1 || num[2]==1)	{
		div.css({"padding-left":"6px", "letter-spacing":"6px"});		
	}
	if(num[1]==1 && num[2]==1) {
		div.css({"letter-spacing":"8px"});
		if(num[0]==1)
			div.css({"letter-spacing":"9px"});
	}	
	if(num[2]>1 && num[0]==1)
		div.css({"letter-spacing":"6px"});
	if((num[2]>1 && num[1]==1)||(num[0]==1 && num[2]==1)||(num[0]==1 && num[1]==1))
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
	if(mychar.traits.TRAIT_SKILLED && n < 4 && str != "STR" && str != "PER" && str != "LUC") return;
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
        if( n > SkillMod.Add6 ) {if(p >= 6) p -= 6;}
        else if( n > SkillMod.Add5 ) {if( p >= 5 ) p -= 5; else break;}
        else if( n > SkillMod.Add4 ) {if( p >= 4 ) p -= 4; else break;}
        else if( n > SkillMod.Add3 ) {if( p >= 3 ) p -= 3; else break;}
        else if( n > SkillMod.Add2 ) {if( p >= 2 ) p -= 2; else break;}
        else if(n <= SkillMod.Add2 ) {if( p >= 1) p -= 1; else break;}
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
	if( n >= SkillMod.MaxValue ) return;
	var s = 1;
	if( n > SkillMod.Add6 ) s = 6;
	else if( n > SkillMod.Add5 ) s = 5;
	else if( n > SkillMod.Add4 ) s = 4;
	else if( n > SkillMod.Add3 ) s = 3;
	else if( n > SkillMod.Add2 ) s = 2;
	if( charp.points < s ) return;
	n++;
	if((str in mychar.tags) && n < SkillMod.MaxValue )
		n++;
	pr.add("skills",str, n - skills[str][0]);
	charp.points -= s;
	numbers($("#point1"),charp.points);
	settle();
}
// Откачка навыков
function minus() {
	var str = this.id.substr(5);
	var n = skills[str][0];
	if( n <= 0 ||  !pr.ch("skills",str)) return;
	
	var tag = (str in mychar.tags) ? 2 : 1;
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
	pr.add("skills",str, n - skills[str][0]);
	charp.points += s;
	numbers($("#point1"),charp.points);
	settle();
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
	if(charp.age>60) charp.age = 14;
	numbers($("#numberage"),charp.age);
    $("#age").html(charp.age);
}
// Отнять возраст
function minusage() { 
	charp.age--;
	if(charp.age<14) charp.age = 60;
	numbers($("#numberage"),charp.age);
    $("#age").html(charp.age);
}
// Смена пола
function changesex() {
	if(this.id === "men" && charp.sex !== "men") {
		charp.sex = "men";
		$("#men").css('backgroundImage', 'url(img/men.png)');
		$("#women").css('backgroundImage', '');
		$("#sex").html("МУЖ.");
	}
	else if(this.id === "women" && charp.sex !== "women") {
		charp.sex = "women";
		$("#women").css('backgroundImage', 'url(img/women.png)');
		$("#men").css('backgroundImage', '');
		$("#sex").html("ЖЕН.");
	}
}
// Переход к прокачке
function leveling() {
	if((!charp.specialpoint && !charp.tags)||leveluping){
		if(regi) {
			if(!charp.name)
			{
				if(charp.sex == "man")
					charp.name = nameman[0,getRandInt(0, nameman.length-1)];
				if(charp.sex == "women")
					charp.name = namewoman[0,getRandInt(0, namewoman.length-1)];
			}
			$("#namenter").html(charp.name);
			$("#name").html($("#namenter").html().toUpperCase());
			$('title').text("Прокачка персонажа");
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
			
			pl.mousedown(	function()	{pl.css('backgroundImage',"url(img/greendot_big.png)");});
			pl.mouseup(	function()	{pl.css(	'backgroundImage', 	"")});
			mi.mousedown(function()	{mi.css('backgroundImage', 	"url(img/greendot_big.png)");});
			mi.mouseup(	function()	{mi.css(	'backgroundImage', 	"");});
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
			regi = false;
			$("#nameparm").html("");
			$("#textparm").html("");
			$("#imgparm").html("");
		}
		else {
			if(charp.level>=28)
				setbuild();
		}
	}	
	else alert("Не распределены special point или не тагнуты 3 навыка!");
}
// Переход обратно к созданию
function reg(){
	Cookies.remove('hash', { path: '' });
	location.replace("index.htm");
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
			if($("#textlist1").is(":visible")&&charp.perkpoint) {
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
	n.appendTo("#main").css({	"top":				tops+"px",
								"left":				lefts+"px",
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
    $("#leveldown").show();
	if(charp.level==99) {if(matrix==undefined)matrix=new Matrix;return;}
    mychar.points[charp.level] = charp.points;
	charp.level++;
	$("#level").html(charp.level);
	$("#exp").html(levelexp(charp.level));
	$("#nextexp").html(levelexp(charp.level+1));
	if(charp.level<29)	{
		pr.add("feats", "live", 2+Math.floor(stats.ENU[2]/2)+(stats.ENU[2]%2?(charp.level%2?0:1):0));
		feat.live[0] = pr.sum("feats", "live") + 60 + stats.STR[2] + stats.ENU[2]*2;
		$("#live").html(feat.live[0]+"/"+feat.live[0]);
		charp.points += 5 + (stats.INT[2] * 2) - (mychar.traits.TRAIT_NIGHT_PERSON?3:0);
		numbers($("#point1"),charp.points);
        
	}   
	if(!(charp.level%(mychar.traits.TRAIT_SKILLED?4:3)))
		charp.perkpoint++;	
	if(charp.perkpoint > 0)	
		listperkup();	
}
function addperk(perks) {
    mychar.perks[perks] = {vol: checkperk(perks) + 1, lvl: checkperk(perks) ? mychar.perks[perks].lvl : []};
    mychar.perks[perks].lvl.push(charp.level);
    perk[select.perk][6]();
}

function delobj(obj,str,c) {
    if(chobj(obj,str)<=1)
        delete mychar[obj][str];
    else {
        if(!(str in questinfo)&&str!="medals") {
            mychar[obj][str].vol--;
            delete mychar[obj][str].lvl[c];
        }
        else if(str!="medals") 
            delete mychar[obj][str];
    }
    if(obj == "perks")
        if(perk[str][7]!==undefined)
            perk[str][7]();
    else if(obj == "quest")
        if(quest[str][7]!==undefined)
            quest[str][7]();
}
function checkperk(strperk) {
	if(mychar.perks[strperk]===undefined)
		return 0;
	else
		return mychar.perks[strperk].vol;
}
function chobj(obj,strq) { //chquest => chobj("quest",strq)
	if(mychar[obj][strq]===undefined)
		return 0;
	else
		return mychar[obj][strq].vol;
}
function chtr(str) {
	if(mychar.traits[str]===undefined) return 0;
	else return mychar.traits[str];
}
// Понижение уовня
function leveldown() {
    if(charp.level < 2) return;
    // Удаление перка
    for(var i in mychar.perks)
        for(var j in mychar.perks[i].lvl)
            if(mychar.perks[i].lvl[j] == charp.level)
                delobj("perks",i,j);
    // Удаление квестов
    for(var i in mychar.quest)
        for(var j in mychar.quest[i].lvl)
            if(mychar.quest[i].lvl[j] == charp.level)
                delobj("quest",i,j);
    // Удаление книг
    for(var i in mychar.book)
        for(var j in mychar.book[i][2])
            if(j == charp.level) {
                mychar.book[i][0] += mychar.book[i][2][j][i][0];
                delete mychar.book[i][2][j];
            }
    delete mychar.feats[charp.level];   // Удаление параметров
    delete mychar.skills[charp.level];  // Удаление скилов
    delete mychar.resist[charp.level];  // Удаление резистов
    

    
    charp.level--;
    charp.points = mychar.points[charp.level];
    for(var i in mychar.book)
        $("#book"+i).html("x"+mychar.book[i][0]);
    $("#level").html(charp.level);
	$("#exp").html(levelexp(charp.level));
	$("#nextexp").html(levelexp(charp.level+1));
    if(charp.level == 1)
        $("#leveldown").hide();
    numbers($("#point1"),charp.points); // обновление скилпоинтов
	statpoints();                       // обновление статов
	settle();                           // обновление навыков и параметров
    showlistquest();                    // обновление списка квестов
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
		if(checkperk(i)<perk[i][2]&&charp.level>=perk[i][3]&&charp.level<=perk[i][4]&&perk[i][5](0)){
			var perkit = $("<div id=\""+i+"\" class=\"perklist\">"+perk[i][0]+"</div>").appendTo("#selectperk");
			perkit.click(function(){
				if(select.perk) $("#"+select.perk).css("color","#00AB00");
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
	var mperk = {3: [],6: [],9: [],12: [],15: [],18: [],30: [],51: []};
    var s = 0;
    if(!("tperk" in mychar)) 
        mychar["tperk"] = {};
    if(mode == 0) {
        for(var i in perk)
            if(perk[i][4]!==1)
                mperk[perk[i][3]].push(i);
    }
    else if(mode == 1) {        
        for(var i in mychar.tperk){
            mperk[perk[i][3]].push(i);
            s++;
        }
        $("<div class=\"listlevel\">Перки: "+s+" / "+(mychar.traits.TRAIT_SKILLED?7:9)+"</div><hr>").appendTo("#crlistperk");
    }
	for(var i in mperk) {
		if(mperk[i].length === 0) continue;
		$("<div id=\"lists"+i+"\" class=\"listlevel\">Уровень "+i+"</div>").appendTo("#crlistperk");	
		for(var j in mperk[i]) {
			var perkit = $("<div id=\"lists"+mperk[i][j]+"\" class=\"perklist\">"+perk[mperk[i][j]][0]+"</div>").appendTo("#crlistperk");
            if(mperk[i][j] in mychar.tperk) $("#lists"+mperk[i][j]).css("color","#07B");
            if(!verPerkandTrait(mperk[i][j])) 
                $("#lists"+mperk[i][j]).css("color","#B00");
            perkit.click(function(){
                if(select.crperk) 
                    if(!verPerkandTrait(select.crperk.substr(5)))
                        $("#"+select.crperk).css("color","#B00");                    
                    else if(!(select.crperk.substr(5) in mychar.tperk))
                        $("#"+select.crperk).css("color","#00AB00");
                    else 
                        $("#"+select.crperk).css("color","#07B");
                select.crperk = this.id;
                if(!verPerkandTrait(select.crperk.substr(5)))
                    $("#"+this.id).css("color","#F00");
                else
                    $("#"+this.id).css("color","#0F0");
                infoparm("perks",this.id.substr(5));
            });
            perkit.dblclick(function(){
                var pp = this.id.substr(5);
                if(!verPerkandTrait(pp))
                    return;
                if(!(pp in mychar.tperk)) {
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
    var obj = perk[p][8];
    if(!emptyObject(obj)) {
        if("traits" in obj)
            for(var j in obj.traits)
                if(j in mychar.traits) {
                    delete mychar.tperk[p];
                    return false;
                }
        if("perks" in obj)
            for(var j in obj.perks)
                if(j in mychar.tperk) {
                    delete mychar.tperk[p];
                    return false;   
                }
    }
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
        var obj = perk[i][8];
        if(!emptyObject(obj)) {
            if("stats" in obj)
                for(var j in obj.stats)
                    if(obj.stats[j]>stats[j][2] && !obj.ch) stats[j][2] = obj.stats[j];
            if("skills" in obj)
                for(var j in obj.skills) {
                    if(sk[j] < obj.skills[j]) sk[j] = obj.skills[j];
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
    if(!regi) return;
    if(emptyObject(mychar.tperk)) {
        testperks();
        mychar.stats = {
            STR: [8+(chtr("TRAIT_BRUISER")?3:0),0],
            PER: [7,0],
            ENU: [8,0+(chtr("TRAIT_SKILLED")?2:0)],
            CHA: [1,0+(chtr("TRAIT_SKILLED")?2:0)],
            INT: [8,0+(chtr("TRAIT_SKILLED")?2:0)],
            AGI: [7+(chtr("TRAIT_SMALL_FRAME")?1:0),0+(chtr("TRAIT_KAMIKAZE")?1:0)+(chtr("TRAIT_SKILLED")?2:0)],
            LUC: [1,0]};
            charp.specialpoint = 0;
    }
    else {
        var ss = 40 + (chtr("TRAIT_BRUISER")?3:0) + (chtr("TRAIT_SMALL_FRAME")?1:0) + (chtr("TRAIT_KAMIKAZE")?1:0) + (chtr("TRAIT_SKILLED")?8:0)
        var res = testperks(ss);
        if(res[0]==70) return;
        charp.specialpoint = ss - res[0];
        for(var i in mychar.stats) 
            mychar.stats[i][0] = res[1][i];               
        if(chtr("TRAIT_KAMIKAZE"))
            mychar.stats.AGI[0]--;
        if(chtr("TRAIT_SKILLED")) {
            mychar.stats.ENU[0]-=2;mychar.stats.CHA[0]-=2;mychar.stats.INT[0]-=2;mychar.stats.AGI[0]-=2;
        }
    }
    statpoints();
}
// Выводит имеющиеся трейты и перки в #textlist1
function showlistperk(){	
	var lineit = $("#textlist1").html("");
	if(charp.tagt<2){
		lineit.append("<div class=\"listhead\">Дополнительно</div>");
		for(var j in mychar.traits)
			if(mychar.traits[j]) {
				lineit.append("<div id=\"list"+j+"\" class=\"perklist\">"+traits[j][1]+"</div>");
				$("#list"+j).click(function(){infoparm("traits",this.id.substr(4));});
			}
	}
	if(!emptyObject(mychar.perks)) {
		var mperk = [];
		lineit.append("<div class=\"listhead\">Бонусы</div>");	
		for(var j in mychar.perks)
			for(var i in mychar.perks[j].lvl)
				mperk[mychar.perks[j].lvl[i]] = j;
		for(var j in mperk){
			lineit.append("<div><span id=\"lists"+j+"\" class=\"listlvl\">"+j+" ур: </span><span id=\"list"+mperk[j]+"\" class=\"perklist\">"+perk[mperk[j]][0]/*+(checkperk(mperk[j])>1?"("+checkperk(mperk[j])+")":"")*/+"</span></div>");
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
		if(chobj("quest",i)<quest[i][2]&&charp.level>=quest[i][3]&&charp.level<=quest[i][4]&&quest[i][5]()){
			var questit = $("<div id=\""+i+"\" class=\"perklist\">"+quest[i][0]+"</div>").appendTo("#selectquest");
			questit.click(function(){
				if(select.quest) $("#"+select.quest).css("color","#00AB00");
				select.quest = this.id;
				$("#"+this.id).css("color","#00FF00");
				$("#nameparmq").html(quest[this.id][0]);
				$("#textparmq").html(quest[this.id][1]);
			});
		}	
	}	
}
// Выводит взятые квесты в #textlist3
function showlistquest(){	
	var lineit = $("#textlist3").html("");
    if(!emptyObject(mychar.quest)) {
        var mquest = [];
        lineit.append("<div class=\"listhead\">Квесты</div>");
        for(var j in mychar.quest)
			for(var i in mychar.quest[j].lvl) {
                if(mquest[mychar.quest[j].lvl[i]] == undefined) 
                    mquest[mychar.quest[j].lvl[i]] = [];
                mquest[mychar.quest[j].lvl[i]].push(j);
            }			
        for(var j in mquest) {
            lineit.append("<div><span id=\"lists"+j+"\" class=\"listlvl\">"+j+" уровень: </span></div>");
            for(var n in mquest[j]){
                lineit.append("<div><span id=\"list"+mquest[j][n]+"\" class=\"perklist\">"+quest[mquest[j][n]][0]+(chobj("quest",mquest[j][n])>1?"("+chobj("quest",mquest[j][n])+")":"")+"</span></div>");
                $("#list"+mquest[j][n]).click(function(){infoparm("quest",this.id.substr(4));});
            }
        }
    }
}
function require(p) {
    var str = "<br><br>Требования:";
    var obj = perk[p][8];
    if(emptyObject(obj)){
        str += "<br>нет";
        return str;
    }
    if("stats" in obj)
        for(var i in obj.stats)
            str += "<br>"+stats[i][0]+": "+(obj.ch?"<":"")+obj.stats[i];
    if("skills" in obj)
        for(var i in obj.skills)
            str += "<br>"+skills[i][2]+": "+obj.skills[i];
    if("traits" in obj)
        for(var i in obj.traits)
            str += "<br><span class='deperk'>-"+traits[i][1]+"</span>";
    if("perks" in obj)
        for(var i in obj.perks)
            str += "<br><span class='deperk'>-"+perk[i][0]+"</span>";
    return str;
    
}
// Вывод информации о перке или квесте по клику
function infoparm(ch,prm){
	switch(ch) {
		case "traits": 
			$("#nameparm").html(traits[prm][1]);
			$("#textparm").html(traits[prm][2]);
			$("#imgparm").removeClass('loaded');
			$("#imgparm").html("<img src=\"skill/"+prm+".jpg\" onload=\"imgLoaded(this)\">");
		break;
		case "perks": 
			$("#nameparm").html(perk[prm][0]);
            var str = perk[prm][1] + require(prm);
			$("#textparm").html(str);
			$("#imgparm").removeClass('loaded');
			$("#imgparm").html("<img src=\"skill/"+prm.substr(3)+".jpg\" onload=\"imgLoaded(this)\">");
		break;
		case "quest":
			$("#nameparm").html(quest[prm][0]);
            var str = quest[prm][1] + ((prm in questinfo) ? "<br>" + questinfo[prm][mychar.quest[prm].vol - 1] : "");
			$("#textparm").html(str);
		break;
		case "skills": // добавить описание
			$("#nameparm").html(perk[prm][0]);
			$("#textparm").html(perk[prm][1]);
			$("#imgparm").removeClass('loaded');
			$("#imgparm").html("<img src=\"skill/"+prm.substr(3)+".jpg\" onload=\"imgLoaded(this)\">");
		break;
		case "stats": // добавить описание
			$("#nameparm").html(stats[prm][0]);
			$("#textparm").html(stats[prm][1]);
			$("#imgparm").removeClass('loaded');
			$("#imgparm").html("<img src=\"skill/"+prm+".jpg\" onload=\"imgLoaded(this)\">");
		break;
	}
}
// Информация о перке по названию
function infoperk(prm){
	$("#nameparms").html(perk[prm][0]);
	$("#textparms").html(perk[prm][1]);
	$("#imgparms").removeClass('loaded');
	$("#imgparms").html("<img src=\"skill/"+prm.substr(3)+".jpg\" onload=\"imgLoaded(this)\">");
}
// Чтение книг
function plusbook() {	
	var str = this.id.substr(4);
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
	if(mychar.book[str][0]) {
		var s = 6 + mychar.book[str][1];	// Очки навыков
		var sk = skpoint(skills[strn][0],s);
        mychar.book[str][1] = sk[1];
		pr.add("skills",strn,sk[0],1);
		if(!(charp.level in mychar.book[str][2]))
			mychar.book[str][2][charp.level] = {};
		if(!(strn in mychar.book[str][2][charp.level]))
			mychar.book[str][2][charp.level][strn] = [0,0];
		mychar.book[str][2][charp.level][strn][0]++;
		mychar.book[str][2][charp.level][strn][1]+=sk[0];
		mychar.book[str][0]--;
		$("#book"+str).html("x"+mychar.book[str][0]);
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
				if(nup===0) return;
				if(typeof nup == "object") {
					pr.add("skills",e.currentTarget.id.substr(4),nup[0],1);
					nup = nup[1];
				}
				mychar.quest[select.quest]={vol:chobj("quest",select.quest) + nup, lvl: chobj("quest",select.quest) ? mychar.quest[select.quest].lvl : []};
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
	textarea += "\nТрейты: ";
	for(var i in traits)
		if(mychar.traits[i])
			textarea += traits[i][1]+" ";
	textarea += "\nНавыки: ";
	for(var i in skills) 
		if(i in mychar.tags)
			textarea += skills[i][1]+" ";
	textarea += "\n";
	if(!emptyObject(mychar.perks)) {
		var mperk = [];
		for(var j in mychar.perks)
			for(var i in mychar.perks[j].lvl)
				mperk[mychar.perks[j].lvl[i]] = j;
		for(var j in mperk)
			textarea += ""+j+" ур: "+perk[mperk[j]][0] + "\n";
	}
	textarea += "\nПрокаченные навыки:\n";
	for(var i in skills) 
		if(skills[i][0] > 80) 
			textarea += skills[i][2]+": "+skills[i][0]+"\n";
	textarea += "\nКниги:\n";
	for(var i in mychar.book) {
		if(i!="prewar"&&mychar.book[i][0]<10)	textarea += textbook[i]+" "+(10-mychar.book[i][0])+"\n";
		else if (i=="prewar"&&mychar.book[i][0]<20)   textarea += textbook[i]+" "+(20-mychar.book[i][0])+"\n"
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
    for(var i in mychar.tags) {
        $("#"+i+"s").css("color", "#ABABAB");
		$("#"+i).css("color", "#ABABAB");
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
	if(charp.sex === "men") {
		$("#men").css('backgroundImage', 'url(img/men.png)');
		$("#women").css('backgroundImage', '');
		$("#sex").html("МУЖ.");
	}
	else if(charp.sex === "women") {
		$("#women").css('backgroundImage', 'url(img/women.png)');
		$("#men").css('backgroundImage', '');
		$("#sex").html("ЖЕН.");
	}
	numbers($("#point1"),charp.points); // обновление скилпоинтов
	numbers($("#point2"),charp.tags);   // обновление очков тага навыков
	statpoints();                       // обновление статов
	settle();                           // обновление навыков и параметров
	createlistperk();                   // создание доступных перков
    showlistquest();                    // обновление списка квестов
}
// Сохранение билда в базу данных
function setbuild() {
    var nameui = charp.name;
    charp.name = encodeURIComponent(charp.name);
	var arr = [mychar,charp];
    if(online) {
        var str = "setbuild="+JSON.stringify(arr)+"&name="+nameui;
        if(cookiehash)
            str += "&hash="+cookiehash;

        $.ajax({
        type: "POST",
        url: "basechar.php",
        data: str,
        success: function(msg){
                if(msg) {
                    save = true;
                    cookiehash = Cookies.get("hash");
                    totalurl("http://"+location.host+"/character/?hash="+Cookies.get("hash"));                  
                }
				else {
					totalurl("Сохранения временно не работают.");
				}
        }});
    }
    else {
        save = true;
        totalurl(lzw(JSON.stringify(arr)));
    }
}
// Загрузка билда из базы данных
function getbuild(hash) {
	hash = hash == undefined?cookiehash:hash;
	$.ajax({
	type: "POST",
	url: "basechar.php",
	dataType: 'json',
	data: "getbuild="+hash,
	success: function(msg){
			if(msg)		
                loadbuild(msg[0],msg[1]);
			}
	});
}
//главная функция
function main() 
{
	$("#totaltext").on('wheel', scrollit);
	$("#crlistperk").on('wheel', scrollit);
	$("#selectperk").on('wheel', scrollit);
	$("#selectquest").on('wheel', scrollit);
	$("#textparm").on('wheel', scrollit);
	$("#textparms").on('wheel', scrollit);
	$("#textparmq").on('wheel', scrollit);
	$("#answ").on('wheel', scrollit);
	for(var i = 1; i<4;i++) $("#textlist"+i).on('wheel', scrollit);
	
	$("#totalkey").click(total);
	$("#canceltotal").click(function(){$("#total").hide();})
	
	$("#men").click(changesex);
	$("#women").click(changesex);
	
	document.addEventListener('keydown', modalCloseEsc);
	$("#wrap").click(modalCloseClick);
    $(document).keydown(function(e){
        if(select.crperk)
            if(e.which==40) {// down
                var next = $("#"+select.crperk).next();
                if(next.attr("id") == undefined) return;
                if(next.attr("id").length < 8) next = next.next();
                if(next.position().top >= 408) next.parent().scrollTop(next.parent().scrollTop()+(next.position().top-408));
                if(!(select.crperk.substr(5) in mychar.tperk))
                    $("#"+select.crperk).css("color","#00AB00");
                else
                    $("#"+select.crperk).css("color","#07B");
				select.crperk = next.attr("id");
				next.css("color","#00FF00");
				infoparm("perks",next.attr("id").substr(5));
            }
            else if(e.which==38) {// up
                var prev = $("#"+select.crperk).prev();
                if(prev.attr("id") == "lists3") return;
                if(prev.attr("id").length < 8) prev = prev.prev();
                if(prev.position().top < 0) prev.parent().scrollTop(prev.parent().scrollTop()+prev.position().top);
                if(prev.parent().scrollTop()==12) prev.parent().scrollTop(0);
                if(!(select.crperk.substr(5) in mychar.tperk))
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
	$("#namenter").keydown(function(pop){ if(pop.keyCode === 13) modalCloseClick();});
	$("#pasenter").keydown(function(pop){ if(pop.keyCode === 13) modalCloseClick();});
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
						if(select.perk) {
							addperk(select.perk);
							charp.perkpoint--;
							showlistperk();
							settle();
							statpoints();
							numbers($("#point1"),charp.points);
						}
						});
	$("#cancelperk").click(function(){$("#perk").hide();$("#perk").animate({'opacity':'0'},200);});
	
	$("#donequest").click(function(){
						$("#quest").hide(); 
						if(select.quest) {
							if(select.quest!="per_ncr" && select.quest!="medals" && select.quest!="drayfild" && select.quest.substr(0,3)!="imp") {
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
		$("#"+j).click(function(){infoparm("traits",this.id)});
	}
	
	for(var j in skills){
		$("#key"+j).mousedown(function(){$("#lkey"+this.id.substr(3)).html("<img src=\"img/small_key.png\" onload=\"imgLoaded(this)\">");});
		$("#key"+j).mouseup(function(){$("#lkey"+this.id.substr(3)).html("");});
		$("#key"+j).click(tags);
		$("#butt"+j).click(selectskill);
        $("#"+j+"s").html(skills[j][2]);
	}    
    $("#titlelist").click(function(){
        mode++;
        if(mode>1) mode = 0;
        $("#titlelist").html(mod[mode]);
        createlistperk();
        decalc();
    });
    $("#totaltext").on('input', function(){
        var str = $("#totaltext").val();
        if(str[0] == '[')
            $("#loadtotal").show();
        else 
            $("#loadtotal").hide();
    });
    $("#loadtotal").click(function(){
        loadbjson(delzw($("#totaltext").val()));
        $("#total").hide();
    });
    $("#loadkey").click(function(){
        totalurl("");
    })
    
    $("#titlelist").html(mod[mode]);
	$("#men").css('backgroundImage', 'url(img/men.png)');
	$("#age").html(charp.age);
	numbers($("#numberage"),charp.age); // обновление циферок возраста
	numbers($("#point1"),charp.points); // обновление скилпоинтов
	numbers($("#point2"),charp.tags);   // обновление очков тага навыков
	statpoints();                       // обновление статов
	settle();                           // обновление навыков и параметров
	createlistperk();                   // создание доступных перков

    var bgImg = new Image;
    bgImg.src = "img/reg.png";
    bgImg.onload = function(){
        $("#main").css('backgroundImage', 'url(' + bgImg.src + ')');
        $("#main").animate({'opacity':'1'},500);
    };		
	if(cookiehash)
		getbuild();
}
//window.addEventListener('DOMContentLoaded', main);
window.addEventListener("load", main);