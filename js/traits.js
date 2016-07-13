var traits = {
	// Быстрый метаболизм
	// Плюсы: Добавляется 60 жизней и 15 к уровню лечения.
	// Минусы: Обнуляется защита к радиации и отравлению. Уменьшает защиту от радиации и отравления в 2 раза. Яд не выводится из организма самостоятельно.
	TRAIT_FAST_METABOLISM: [function(str){	
			if(!mychar.traits[str] && charp.tagt>0) {
				feat.live[1]+=60; 
				feat.levh[1]+=15; 
				feat.stox[3] = 0; 
				feat.srad[3] = 0; 
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2) {
				feat.live[1]-=60; 
				feat.levh[1]-=15; 
				feat.stox[3] = 1; 
				feat.srad[3] = 1; 
				delete mychar.traits[str];
				charp.tagt++;	}
			},"Быстрый метаболизм", "Ваш метаболизм превышает норму. Вам дается +60 ХП, 15 к уровню лечения. Но при этом вы сильно подвержены яду и радиации."],
	// Крушила Плюсы: +3 силы, игнор тиков плазмы. Минусы: -1 Очко Действия (ОД).
	TRAIT_BRUISER: [function(str){	
			if(!mychar.traits[str] && charp.tagt>0) {
				mychar.stats.STR[0]+=3; 
				feat.apoi[1]-=1;
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2) {
				mychar.stats.STR[0]-=3;
				feat.apoi[1]+=1;
				delete mychar.traits[str];
				charp.tagt++;	}
			},"Крушила", "Двигаетесь помедленнее, но выглядите внушительно. Меньше на 1 ОД, но зато +3 Силы. Игнорируется эффект плазмы (тики)."],
	// Хилое тело 
	// Плюсы: +1 ловкости, +5% к увороту.
	// Минусы: Уменьшает максимальный переносимый вес относительно силы персонажа.
	TRAIT_SMALL_FRAME: [function(str){	
			if(!mychar.traits[str] && charp.tagt>0) {
				feat.dodge[1]+=5;
				mychar.stats.AGI[0]+=1; 
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2) {
				feat.dodge[1]-=5;
				mychar.stats.AGI[0]-=1; 
				delete mychar.traits[str];
				charp.tagt++;	}
			},"Xилое тело", "Вы не в состоянии таскать тяжелые грузы, зато более проворны. Вам дается +1 Ловкость и +5% к увороту."],
	//	Однорукий 
	//	Плюсы: Игнор силы на одноручное, +60 к навыку одноручного оружия.
	//	Минусы: -40 к навыку при использовании двуручного оружия.
	TRAIT_ONE_HANDER: [function(str){	
			if(!mychar.traits[str] && charp.tagt>0) {
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2) {
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},"Однорукий", "Вы отлично стреляете из любого одноручного оружия (+60 к навыку при расчетах, +7 к урону и игнор штрафа на силу). С двуручным уже есть проблемы (-40 к навыку при расчетах)"],
	// Точность
	// Плюсы: +20% к шансу критической атаки. -10 к проверке на силу критического эффекта при атаке по вам.
	// Минусы: -5% к урону.
	TRAIT_FINESSE: [function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				feat.crit[1]+=20;
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				feat.crit[1]-=20;
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},"Точность", "Точно, но слабо. +20% к шансу критической атаки. -10 к проверке на силу критического эффекта при атаке по вам. Но -5% к общему урону."],
	// Камикадзе
	// Плюсы: +1 Ловкости. Каждые 10 секунд вы восстанавливаете 1 ОД. Если вы не в бою - первая атака отнимет на 2 ОД меньше. Игнорирование эффекта "Подавление".
	// Минусы: Персонаж не получает КБ от параметра Ловкости.
	TRAIT_KAMIKAZE: [function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				mychar.stats.AGI[1]+=1; 
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				mychar.stats.AGI[1]-=1; 
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},"Камикадзе", "Вы прете напролом. +1 Ловкость, также каждые 10 секунд восполняется 1 ОД. Если не в бою - атака отнимет на 2 ОД меньше. КБ снижается до 1. Игнорируется эффект \"Подавление\"."],
	// Громила
	// Плюсы: +25 к рукопашным повреждениям (урезаются повреждения у Доп. рукопашн. повр. и у Слеера)
	// Минусы: -30 критролла.
	TRAIT_HEAVY_HANDED: [function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				feat.mdmg[1]+=25;
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				feat.mdmg[1]-=25;
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},"Громила", "Ваши жестокие удары причиняют огромные повреждения врагам (+25 к рукопашным повреждениям), но они почти никогда не бывают критическими (-30 к критроллу)."],
	// Быстрый стрелок
	// Плюсы: Атаки стрелковым и метательным оружием требуют меньше на 1 ОД.
	// Минусы: Полностью отсутствует прицельный режим атаки. Критический урон не удваивается, хотя эффекты остаются.
	TRAIT_FAST_SHOT: [function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},"Быстрый стрелок", "У вас нет времени для нормального прицеливания. Атаки стрелковым и метательным оружием требуют меньше на 1 ОД."],
	// Маньяк
	// Плюсы: +175 к навыку Атлетизма.
	// Минусы: -25 ОЗ.
	TRAIT_BLOODY_MESS: [function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				skills.speed[1]+=175;
				feat.live[1]-=25;
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				skills.speed[1]-=175;
				feat.live[1]+=25;
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},"Маньяк", "По странной случайности, все вокруг вас умирают страшной и мучительной смертью. Для них вы находите худший вариант кончины. +175% Атлетизма, но -25 Очков жизней."],
	// Дурной глаз
	// Плюсы: Промах по вам станет для соперника критическим с 50% вероятностью.
	// Минусы: Вы критически промахиваетесь с этой же вероятностью.
	TRAIT_JINXED: [function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},"Дурной глаз", "Xорошая сторона дела заключается в том, что ваши враги часто ошибаются. Плохо то, что вы ошибаетесь не меньше их!"],
	// Добродушие
	// Плюсы: +25 к навыкам Санитар, Доктор, Красноречие и Торговля. НПЦ-люди не атакуют на энкаунтерах. Влияет на формулу бонуса от КБ и снижает урон от мастеров-перков (см. Перки).
	// Минусы: Все боевые навыки уменьшаются на 15.
	TRAIT_GOOD_NATURED: [function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
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
				mychar.traits[str] = 1; 	
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
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
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},"Добродушие", "Ваши боевые навыки меньше, но зато небоевые - больше. Вы всегда думаете о защите, а не нападении (мастер-перки режут урон по вам, а не добавляют к вашему)"],
	// Химик
	// Плюсы: Наркотики держатся в три раза дольше. Откаты почти мнгновенные. Но если есть привыкание, оно держится долго.
	// Минусы: Привыкание в два раза чаще.
	TRAIT_CHEM_RELIANT: [function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},"Химик", "Наркотики держатся в три раза дольше. Откаты почти мгновенные. Если появится привыкание, то оно будет длиться долго."],
	// Стабильный
	// Плюсы: Вы никогда критически не промахиваетесь, +25 бонуса к окончательной точности (даже в дыму). Игнорируется эффект плазмы (тики).
	// Минусы: Вы никогда критически не попадаете.
	TRAIT_CHEM_RESISTANT: [function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},"Стабильный", "Вы критически не попадаете, но и не промахиваетесь критически. Все ваши атаки очень точны (+25 бонуса к окончательной точности)."],
	// Жидкое тело
	// Плюсы: Каждый выстрел наносит вам на 10 повреждений меньше. Игнорирование тиков от огня. +50 веса.
	// Минусы: Стимуляторы и Санитар не работают в полную мощь (-20 к отхилу).
	TRAIT_SEX_APPEAL: [function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				feat.maxl[1]+=50;
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				feat.maxl[1]-=50;
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},"Жидкое тело", "Вы получаете Сопротивляемость к Урону (-10), увеличение вашего Максимального веса на 50 кг. Стимуляторы и санитар не действуют в полную мощь (-20 ХП при лечении)."],
	// Умелец
	// Плюсы: +1 к Силе, Восприятию, Выносливости, Харизме, Интеллекту, Ловкости и Удаче.
	// Минусы: Перк дается через 4 уровня, а не через 3.
	TRAIT_SKILLED: [function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				mychar.stats.ENU[1]+=2;
				mychar.stats.CHA[1]+=2;
				mychar.stats.INT[1]+=2;
				mychar.stats.AGI[1]+=2;
				feat.live[1]+=25; 
				
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				mychar.stats.ENU[1]-=2;
				mychar.stats.CHA[1]-=2;
				mychar.stats.INT[1]-=2;
				mychar.stats.AGI[1]-=2;
				feat.live[1]-=25;
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},"Умелец", "Параметры персонажа улучшены (+2 Выносливость, Обаяние, Интеллект, Ловкость, +25 ХП). Но вы получаете меньше способностей - одно за каждые четыре уровня опытности."],
	// Импульсивный
	// Плюсы: +2 ОД, +20 к навыку Метания.
	// Минусы: -3 Очков Умений за каждый уровень.
	TRAIT_NIGHT_PERSON: [function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				feat.apoi[1]+=2;
				skills.thrown[1]+=20;
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				feat.apoi[1]-=2;
				skills.thrown[1]-=20;
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},"Импульсивный", "Вы очень активны, и это добавляет вам 2 ОД и 30% шанс восстановить 1 ОД при перезарядке, но вы получаете на 3 Очков умений меньше за каждый уровень. Также +20% к Метательному."]
}