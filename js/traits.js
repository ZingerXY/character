var traits = {
	// Быстрый метаболизм 34season
	// За любое изменение ОЖ дается +1 ОЖ. +15нр при исцелении Суперстимпаком. +25 Уровень Лечения. 
	// Яд выводится из организма в два раза быстрее. Устойчивость к яду и Устойчивость к радиации уменьшается в три раза.
	TRAIT_FAST_METABOLISM: function(str){
			if(!mychar.traits[str] && charp.tagt>0) {
				//pr.add("feats","levh",15);
				// pre 33:
				pr.add("feats","levh",25);
				mychar.traits[str] = 1;
				charp.kostyltrait +=1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2) {
				pr.add("feats","levh",-25);
				delete mychar.traits[str];
				charp.kostyltrait-=1;
				charp.tagt++;	}
			},
	// Крушила
	// 34season
	// +5 подавы за каждый удар, не снижает -1 од, не дает тагнуть метлу легкое тяж энерго ремонт 
	TRAIT_BRUISER: function(str){
			if(!mychar.traits[str] && charp.tagt>0) {
				mychar.stats.STR[0]+=3;
				//pr.add("feats","apoi",-1);
				pr.add("feats","mdmg",25);
				//pr.add("feats","critr",-30);
				mychar.traits[str] = 1;
				charp.kostylbruiser34 += 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2) {
				mychar.stats.STR[0]-=3;
				//pr.add("feats","apoi",1);
				pr.add("feats","mdmg",-25);
				//pr.add("feats","critr",30);
				delete mychar.traits[str];
				charp.kostylbruiser34 -= 1;
				charp.tagt++;	}
			},
	// Хилое тело
	// + 1 ловкость + 5 уворота + ловкость к АС +25 хп за уворот
	// чутка багуется когда после взятия хилого тела берешь еще ловкости и потом убираешь.
	TRAIT_SMALL_FRAME: function(str){
			if(!mychar.traits[str] && charp.tagt>0) {
				mychar.stats.AGI[0]+=1;
				pr.add("feats","dodge",5)
				pr.add("feats","armc",mychar.stats.AGI[0])
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2) {
				pr.add("feats","armc",-mychar.stats.AGI[0])
				mychar.stats.AGI[0]-=1;
				pr.add("feats","dodge",-5)
				delete mychar.traits[str];
				charp.tagt++;	}
			},
	//	Однорукий 34 season -60 навыка
	TRAIT_ONE_HANDER: function(str){
			if(!mychar.traits[str] && charp.tagt>0) {
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2) {
				delete mychar.traits[str];
				charp.tagt++;
			}
			},
	// Точность 34 season не дает 10 крита а +15% к мин макс урону
	TRAIT_FINESSE: function(str){
			if(!mychar.traits[str] && charp.tagt>0){
				// pr.add("feats","crit",10);
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2){
				//pr.add("feats","crit",-10);
				delete mychar.traits[str];
				charp.tagt++;
			}
			},
	// Камикадзе
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
	// Вор (вместо Громилы) 34 season
	// Холодное одноручное оружие и метательные ножи наносят +10 конечного урона, но точность другого оружия равна 5%. Бонусы для вора кулдаун=(навык/15), срезает 3 ОД у жертвы, кладет в нокдаун.
	//	Вы не можете наносить критические удары. Исключает атакующие перки (кроме доп рукопашных повреждений), Взрывотехника и Боевого инженера.  Добавляет +15 к Уровню лечения
	TRAIT_HEAVY_HANDED: function(str){
			if(!mychar.traits[str] && charp.tagt>0){
				pr.add("feats","levh",15);
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2){
				pr.add("feats","levh",-15);
				delete mychar.traits[str];
				charp.tagt++;
			}
			},
			// pre 33: нерф вора 15 регена вместо 25
	// Быстрый стрелок 34season описание поменять
	TRAIT_FAST_SHOT: function(str){
			if(!mychar.traits[str] && charp.tagt>0){
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2){
				delete mychar.traits[str];
				charp.tagt++;
			}
			},
	// Маньяк 34season +150 отлета +5 сек бег в бою
	TRAIT_BLOODY_MESS: function(str){
			if(!mychar.traits[str] && charp.tagt>0){
				pr.add("skills","speed",150,1);
				//pr.add("feats","live",-25);
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2){
				pr.add("skills","speed",-150,1);
				//pr.add("feats","live",25);
				delete mychar.traits[str];
				charp.tagt++;
			}
			},
	// Дурной глаз
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
	TRAIT_GOOD_NATURED: function(str){
			if(!mychar.traits[str] && charp.tagt>0){
				pr.add("skills","orderly",25,1);
				pr.add("skills","doctor",25,1);
				pr.add("skills","oratory",25,1);
				pr.add("skills","trade",25,1);
				pr.add("skills","light",-15,1);
				pr.add("skills","heavy",-15,1);
				pr.add("skills","energy",-15,1);
				pr.add("skills","steel",-15,1);
				pr.add("skills","melee",-15,1);
				pr.add("skills","thrown",-15,1);
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2){
				pr.add("skills","orderly",-25,1);
				pr.add("skills","doctor",-25,1);
				pr.add("skills","oratory",-25,1);
				pr.add("skills","trade",-25,1);
				pr.add("skills","light",15,1);
				pr.add("skills","heavy",15,1);
				pr.add("skills","energy",15,1);
				pr.add("skills","steel",15,1);
				pr.add("skills","melee",15,1);
				pr.add("skills","thrown",15,1);
				delete mychar.traits[str];
				charp.tagt++;
			}
			},
	// Химик 34 session
	TRAIT_CHEM_RELIANT: function(str){
			if(!mychar.traits[str] && charp.tagt>0){
				//pr.add("feats", "live", 30);
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2){
				//pr.add("feats", "live", -30);
				delete mychar.traits[str];
				charp.tagt++;
			}
			},
	// Стабильный
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
	TRAIT_SEX_APPEAL: function(str){
			if(!mychar.traits[str] && charp.tagt>0){
				pr.add("feats","maxl",50);
				mychar.traits[str] = 1;
				charp.kostyltrait+=1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2){
				pr.add("feats","maxl",-50);
				delete mychar.traits[str];
				charp.kostyltrait-=1;
				charp.tagt++;		
			}
			},
	// Умелец
	TRAIT_SKILLED: function(str){
			if(!mychar.traits[str] && charp.tagt>0){
				mychar.stats.CHA[0] += 1;
				mychar.stats.ENU[0] += 1;
				mychar.stats.INT[0] += 1;
				mychar.stats.AGI[0] += 1;
				mychar.traits[str] = 1;
				charp.tags++;
				numbers($("#point2"),charp.tags);
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2){
				mychar.stats.CHA[0] -= 1;
				mychar.stats.ENU[0] -= 1;
				mychar.stats.INT[0] -= 1;
				mychar.stats.AGI[0] -= 1;
				delete mychar.traits[str];
				charp.tags--;
				numbers($("#point2"),charp.tags);
				charp.tagt++;
			}
			},
	// Импульсивный
	TRAIT_NIGHT_PERSON: function(str){
			if(!mychar.traits[str] && charp.tagt>0){
				pr.add("feats","apoi",2);
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2){
				pr.add("feats","apoi",-2);
				delete mychar.traits[str];
				charp.tagt++;
			}
			}
}