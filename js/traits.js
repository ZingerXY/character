var traits = {
	// Быстрый метаболизм
	TRAIT_FAST_METABOLISM: function(str){
			if(!mychar.traits[str] && charp.tagt>0) {
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2) {
				delete mychar.traits[str];
				charp.tagt++;	}
			},
	// Крушила
	TRAIT_BRUISER: function(str){
			if(!mychar.traits[str] && charp.tagt>0) {
				mychar.stats.STR[0]+=2;
				pr.add("feats","apoi",-1);
				pr.add("feats","mdmg",25);
				//pr.add("feats","critr",-30);
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2) {
				mychar.stats.STR[0]-=2;
				pr.add("feats","apoi",1);
				pr.add("feats","mdmg",-25);
				//pr.add("feats","critr",30);
				delete mychar.traits[str];
				charp.tagt++;	}
			},
	// Хилое тело
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
	TRAIT_FINESSE: function(str){
			if(!mychar.traits[str] && charp.tagt>0){
				pr.add("feats","crit",10);
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2){
				pr.add("feats","crit",-10);
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
	// Вор (вместо Громилы)
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
	TRAIT_BLOODY_MESS: function(str){
			if(!mychar.traits[str] && charp.tagt>0){
				pr.add("skills","speed",125,1);
				//pr.add("feats","live",-25);
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2){
				pr.add("skills","speed",-125,1);
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
	// Химик
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
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2){
				pr.add("feats","maxl",-50);
				delete mychar.traits[str];
				charp.tagt++;
			}
			},
	// Умелец
	TRAIT_SKILLED: function(str){
			if(!mychar.traits[str] && charp.tagt>0){
				mychar.stats.CHA[0] += 2;
				mychar.stats.ENU[0] += 2;
				mychar.stats.INT[0] += 2;
				mychar.stats.AGI[0] += 2;
				mychar.traits[str] = 1;
				charp.tags++;
				numbers($("#point2"),charp.tags);
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2){
				mychar.stats.CHA[0] -= 2;
				mychar.stats.ENU[0] -= 2;
				mychar.stats.INT[0] -= 2;
				mychar.stats.AGI[0] -= 2;
				delete mychar.traits[str];
				charp.tags--;
				numbers($("#point2"),charp.tags);
				charp.tagt++;
			}
			},
	// Импульсивный
	TRAIT_NIGHT_PERSON: function(str){
			if(!mychar.traits[str] && charp.tagt>0){
				pr.add("feats","apoi",1);
				pr.add("skills","thrown",20,1);
				mychar.traits[str] = 1;
				charp.tagt--;	}
			else if(mychar.traits[str] && charp.tagt<2){
				pr.add("feats","apoi",-1);
				pr.add("skills","thrown",-20,1);
				delete mychar.traits[str];
				charp.tagt++;
			}
			}
}