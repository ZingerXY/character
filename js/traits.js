var traits = {
	// Быстрый метаболизм
	// Плюсы: +50нр, 20 к уровню лечения.Время восстановления нр 10 сек, но не в боевом режиме.
	// Минусы: Устойчивость к яду и Устойчивость к радиации равна 0. Устойчивость к яду и Устойчивость к радиации от перков, наркотиков и предметов уменьшается в 2 раза. Яд не выводится из организма самостоятельно.
	TRAIT_FAST_METABOLISM: function(str){	
			if(!mychar.traits[str] && charp.tagt>0) {
				//pr.add("feats","live",50); 
				pr.add("feats","levh",40); 
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2) {
				//pr.add("feats","live",-50); 
				pr.add("feats","levh",-40); 
				delete mychar.traits[str];
				charp.tagt++;	}
			},
	// Крушила Плюсы: +3 к силе, +25 рукопашных повреждений. Минусы: -1ОД, -30 к критроллу.
	TRAIT_BRUISER: function(str){	
			if(!mychar.traits[str] && charp.tagt>0) {
				mychar.stats.STR[0]+=3; 
				pr.add("feats","apoi",-1);
				pr.add("feats","mdmg",25);
				pr.add("feats","critr",-30);
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2) {
				mychar.stats.STR[0]-=3;
				pr.add("feats","apoi",1);
				pr.add("feats","mdmg",-25);
				pr.add("feats","critr",30);
				delete mychar.traits[str];
				charp.tagt++;	}
			},
	// Хилое тело 
	// Плюсы: +1 ловкости, +5% к увороту.
	// Минусы: Уменьшает максимальный переносимый вес относительно силы персонажа.
	TRAIT_SMALL_FRAME: function(str){	
			if(!mychar.traits[str] && charp.tagt>0) {
				pr.add("feats","dodge",5);
				mychar.stats.AGI[0]+=1; 
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2) {
				pr.add("feats","dodge",-5);
				mychar.stats.AGI[0]-=1; 
				delete mychar.traits[str];
				charp.tagt++;	}
			},
	//	Однорукий 
	//	Плюсы: Игнор силы на одноручное, +60 к навыку одноручного оружия.
	//	Минусы: -40 к навыку при использовании двуручного оружия.
	TRAIT_ONE_HANDER: function(str){	
			if(!mychar.traits[str] && charp.tagt>0) {
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2) {
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},
	// Точность
	// Плюсы: +20% к шансу критической атаки. -10 к проверке на силу критического эффекта при атаке по вам.
	// Минусы: -5% к урону.
	TRAIT_FINESSE: function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				//pr.add("feats","crit",20);
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				//pr.add("feats","crit",-20);
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},
	// Камикадзе
	// Плюсы: +1 Ловкости. Каждые 10 секунд вы восстанавливаете 1 ОД. Если вы не в бою - первая атака отнимет на 2 ОД меньше. Игнорирование эффекта "Подавление".
	// Минусы: Персонаж не получает КБ от параметра Ловкости.
	TRAIT_KAMIKAZE: function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				mychar.stats.AGI[1]+=1; 
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				mychar.stats.AGI[1]-=1; 
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},
	// Вор (вместо Громилы)
	// Плюсы: Холодное одноручное оружие и метательные ножи наносят +10 конечного урона, Уровень лечения +20. Бонусы вора.
	// Минусы: Точность стрелкового и двуручного оружия делится пополам. Вы не можете критовать.
	TRAIT_HEAVY_HANDED: function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				pr.add("feats","levh",20); 
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				pr.add("feats","levh",-20); 
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},
	// Быстрый стрелок
	// Плюсы: Атаки стрелковым и метательным оружием требуют меньше на 1 ОД.
	// Минусы: Полностью отсутствует прицельный режим атаки. Критический урон не удваивается, хотя эффекты остаются.
	TRAIT_FAST_SHOT: function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},
	// Маньяк
	// Плюсы: +175 к навыку Атлетизма.
	// Минусы: -25 ОЗ.
	TRAIT_BLOODY_MESS: function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				//pr.add("skills","speed",175,1);
				//pr.add("feats","live",-25);
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				//pr.add("skills","speed",-175,1);
				//pr.add("feats","live",25);
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},
	// Дурной глаз
	// Плюсы: Промах по вам станет для соперника критическим с 50% вероятностью.
	// Минусы: Вы критически промахиваетесь с этой же вероятностью.
	TRAIT_JINXED: function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},
	// Добродушие
	// Плюсы: +25 к навыкам Санитар, Доктор, Красноречие и Торговля. НПЦ-люди не атакуют на энкаунтерах. Влияет на формулу бонуса от КБ и снижает урон от мастеров-перков (см. Перки).
	// Минусы: Все боевые навыки уменьшаются на 15.
	TRAIT_GOOD_NATURED: function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				pr.add("skills","orderly",15,1);
				pr.add("skills","doctor",25,1);
				pr.add("skills","oratory",35,1);
				pr.add("skills","trade",25,1);
				pr.add("skills","light",-15,1);
				pr.add("skills","heavy",-15,1);
				pr.add("skills","energy",-15,1);
				pr.add("skills","steel",-10,1);
				pr.add("skills","melee",-10,1);
				pr.add("skills","thrown",-10,1);
				mychar.traits[str] = 1; 	
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				pr.add("skills","orderly",-15,1);
				pr.add("skills","doctor",-25,1);
				pr.add("skills","oratory",-35,1);
				pr.add("skills","trade",-25,1);
				pr.add("skills","light",15,1);
				pr.add("skills","heavy",15,1);
				pr.add("skills","energy",15,1);
				pr.add("skills","steel",10,1);
				pr.add("skills","melee",10,1);
				pr.add("skills","thrown",10,1);
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},
	// Химик
	// Плюсы: Наркотики держатся в три раза дольше. Откаты почти мнгновенные. Но если есть привыкание, оно держится долго.
	// Минусы: Привыкание в два раза чаще.
	TRAIT_CHEM_RELIANT: function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},
	// Стабильный
	// Плюсы: Вы критически не промахиваетесь, +25 к точности, +1 Восприятия
	// Минусы: Вы критически не попадаете.
	TRAIT_CHEM_RESISTANT: function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				mychar.traits[str] = 1; 
				mychar.stats.PER[0]+=1;
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				delete mychar.traits[str]; 
				mychar.stats.PER[0]-=1;
				charp.tagt++;	
			}
			},
	// Жидкое тело
	// Плюсы: -10 к конечному урону по вам. +50 к Переносимому грузу.
	// Минусы: -20 к лечению Санитаром. -20 к лечению суперстимуляторами..
	TRAIT_SEX_APPEAL: function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				pr.add("feats","maxl",50);
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				pr.add("feats","maxl",-50);
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},
	// Умелец
	// Плюсы: +1 к Силе, Восприятию, Выносливости, Харизме, Интеллекту, Ловкости и Удаче. +60 антикрита
	// Минусы: Перк дается через 4 уровня, а не через 3. 
	TRAIT_SKILLED: function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				mychar.stats.ENU[1]+=2;
				mychar.stats.CHA[1]+=2;
				mychar.stats.INT[1]+=2;
				mychar.stats.AGI[1]+=2;
				pr.add("feats","crit",15);			
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				mychar.stats.ENU[1]-=2;
				mychar.stats.CHA[1]-=2;
				mychar.stats.INT[1]-=2;
				mychar.stats.AGI[1]-=2;
				pr.add("feats","crit",-15);
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			},
	// Импульсивный
	// Плюсы: +2 ОД, +20 к навыку Метания.
	// Минусы: -3 Очков Умений за каждый уровень.
	TRAIT_NIGHT_PERSON: function(str){	
			if(!mychar.traits[str] && charp.tagt>0){
				pr.add("feats","apoi",2);
				pr.add("skills","thrown",20,1);
				mychar.traits[str] = 1; 
				charp.tagt--;	} 
			else if(mychar.traits[str] && charp.tagt<2){
				pr.add("feats","apoi",-2);
				pr.add("skills","thrown",-20,1);
				delete mychar.traits[str]; 
				charp.tagt++;	
			}
			}
}