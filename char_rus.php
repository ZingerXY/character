<?php
include 'ver.php';
$banned = false;
include_once 'checkBanned.php';
?>
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>Создание персонажа - калькулятор билдов Fallout Online: Requiem</title>
	<meta name="description" content="Калькулятор билдов Fallout Online для сервера Requiem">
	<meta name="title" content="Калькулятор билдов Fallout Online для сервера Requiem">
	<meta itemprop="name" content="Калькулятор билдов Fallout Online для сервера Requiem">
	<meta property="og:title" content="Калькулятор билдов Fallout Online для сервера Requiem">
	<meta name=viewport content="width=device-width, initial-scale=1">
	<link rel="alternate" hreflang="en" href="http://fonlinew.ru/?en&char" />
	<link rel="alternate" hreflang="ru" href="http://fonlinew.ru/?char" />
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="style.css?ver=<?= $ver ?>">
	<script type="text/javascript" src="js/jquery-3.1.0.min.js?ver=<?= $ver ?>"></script>
	<script async src="js/js.cookie.js?ver=<?= $ver ?>"></script>
	<script type="text/javascript" async src="js/text_rus.js?ver=<?= $ver ?>"></script>
	<script type="text/javascript" async src="js/app.min.js?ver=<?= $ver ?>"></script>
	<script>
		var cookiehash = <? if (isset($_GET["hash"])) echo "'" . $_GET["hash"] . "'";
							else if (isset($_COOKIE["hash"])) {
								echo "'" . $_COOKIE["hash"] . "'";
								setcookie("hash", $_COOKIE["hash"], time() + 60 * 60 * 24 * 7);
							} else echo "false"; ?>;
		var online = true;
	</script>
</head>

<body>
	<!--div id="fon" class="fon"></div-->
	<div id="main" class="main">
		<div id="wrap"></div>
		<div id="name" class="text shadow"></div>
		<div id="entername" class="text">
			<div id="nametext" class="text shadow">ИМЯ</div>
			<div id="namenter" class="text2" contenteditable></div>
			<div id="passtext" class="text shadow">ПАРОЛЬ</div>
			<div id="pasenter" class="text2" contenteditable></div>
		</div>
		<div id="age" class="text shadow">25</div>
		<div id="enterage" class="text">
			<div id="plusage"></div>
			<div id="numberage" class="npoint"></div>
			<div id="minusage"></div>
		</div>
		<div id="sex" class="text shadow">МУЖ.</div>
		<div id="entersex" class="text">
			<div id="men"></div>
			<div id="women"></div>
		</div>
		<div id="special">
			<div id="STRn" class="STR text special shadow">СЛ</div>
			<div id="STR" class="STR numspec npoint"></div>
			<div id="STRt" class="STR znach">Средн.</div>
			<div id="plusSTR" class="STR key reg spec plus"></div>
			<div id="minusSTR" class="STR key reg spec minus"></div>
			<div id="PERn" class="PER text special shadow">ВС</div>
			<div id="PER" class="PER numspec npoint"></div>
			<div id="PERt" class="PER znach">Средн.</div>
			<div id="plusPER" class="PER key reg spec plus"></div>
			<div id="minusPER" class="PER key reg spec minus"></div>
			<div id="ENUn" class="ENU text special shadow">ВН</div>
			<div id="ENU" class="ENU numspec npoint"></div>
			<div id="ENUt" class="ENU znach">Средн.</div>
			<div id="plusENU" class="ENU key reg spec plus"></div>
			<div id="minusENU" class="ENU key reg spec minus"></div>
			<div id="CHAn" class="CHA text special shadow">ХР</div>
			<div id="CHA" class="CHA numspec npoint"></div>
			<div id="CHAt" class="CHA znach">Средн.</div>
			<div id="plusCHA" class="CHA key reg spec plus"></div>
			<div id="minusCHA" class="CHA key reg spec minus"></div>
			<div id="INTn" class="INT text special shadow">ИН</div>
			<div id="INT" class="INT numspec npoint"></div>
			<div id="INTt" class="INT znach">Средн.</div>
			<div id="plusINT" class="INT key reg spec plus"></div>
			<div id="minusINT" class="INT key reg spec minus"></div>
			<div id="AGIn" class="AGI text special shadow">ЛВ</div>
			<div id="AGI" class="AGI numspec npoint"></div>
			<div id="AGIt" class="AGI znach">Средн.</div>
			<div id="plusAGI" class="AGI key reg spec plus"></div>
			<div id="minusAGI" class="AGI key reg spec minus"></div>
			<div id="LUCn" class="LUC text special shadow">УД</div>
			<div id="LUC" class="LUC numspec npoint"></div>
			<div id="LUCt" class="LUC znach">Средн.</div>
			<div id="plusLUC" class="LUC key reg spec plus"></div>
			<div id="minusLUC" class="LUC key reg spec minus"></div>
		</div>
		<div id="specialpointext" class="text reg shadow">ОЧКИ РАСП.</div>
		<div id="specialpoint" class="text reg npoint"></div>
		<div id="experience" class="leveling text2">
			<div id="textlevel">Уровень:</div>
			<div id="level"></div>
			<div id="textexp">Опыт:</div>
			<div id="exp"></div>
			<div id="textnextexp">След.ур.:</div>
			<div id="nextexp"></div>
			<div id="levelup"></div>
			<div id="leveldown"></div>
		</div>
		<div id="feat1" class="text2">
			<div id="life" class="resist res-2">Жизни</div>
			<div id="live" class="resist resnum0 res-2"></div>
			<div id="dadge" class="resist res-1">Уворот</div>
			<div id="dodge" class="resist resnum0 res-1"></div>
			<div id="anticrit" class="resist res0">Антикрит</div>
			<div id="acrit" class="resist resnum0 res0">0%</div>
			<div id="textnormal" class="resist res1">Норма</div>
			<div id="normal" class="resist resnum0 res1"></div>
			<div id="textlaser" class="resist res2">Лазер</div>
			<div id="laser" class="resist resnum0 res2"></div>
			<div id="textfire" class="resist res3">Огонь</div>
			<div id="fire" class="resist resnum0 res3"></div>
			<div id="textplasma" class="resist res4">Плазма</div>
			<div id="plasma" class="resist resnum0 res4"></div>
			<div id="textexplode" class="resist res5">Взрыв</div>
			<div id="explode" class="resist resnum0 res5"></div>
			<div id="textelectro" class="resist res6">Электро</div>
			<div id="electro" class="resist resnum0 res6"></div>
			<!--div id="toxic" class="effect">Отравление</div>
			<div id="radiation" class="effect">Облучение</div>
			<div id="woundeye" class="effect">Ранение в глаз</div>
			<div id="brokerighthand" class="effect">Сломана прав. рука</div>
			<div id="brokelefthand" class="effect">Сломана левая рука</div>
			<div id="brokerightleg" class="effect">Сломана прав. нога</div>
			<div id="brokeleftleg" class="effect">Сломана левая нога</div-->
		</div>
		<div id="feat2" class="text2">
			<div id="armorclass" class="text2 featop0">Класс брони</div>
			<div id="armc" class="text2 featnum featop0"></div>
			<div id="actionpoint" class="text2 featop1">Очки действий</div>
			<div id="apoi" class="text2 featnum featop1"></div>
			<div id="maxload" class="text2 featop2">Макс. груз</div>
			<div id="maxl" class="text2 featnum featop2"></div>
			<div id="meledmg" class="text2 featop3">Рукоп. повр.</div>
			<div id="mdmg" class="text2 featnum featop3"></div>
			<div id="overview" class="text2 featop4">Радиус обзора</div>
			<div id="oview" class="text2 featnum featop4"></div>
			<div id="stabiltoxic" class="text2 featop5">Уст. к яду</div>
			<div id="stox" class="text2 featnum featop5"></div>
			<div id="stabilradi" class="text2 featop6">Уст. к рад</div>
			<div id="srad" class="text2 featnum featop6"></div>
			<div id="procedure" class="text2 featop7">Порядок</div>
			<div id="proc" class="text2 featnum featop7"></div>
			<div id="levelhil" class="text2 featop8">Уров. лечен.</div>
			<div id="levh" class="text2 featnum featop8"></div>
			<div id="critrate" class="text2 featop9">Шанс на крит.</div>
			<div id="crit" class="text2 featnum featop9"></div>
		</div>
		<div id="skill" class="text2">
			<div id="lights" class="light skill"></div>
			<div id="slight" class="light spoint"></div>
			<div id="light" class="light point"></div>
			<div id="heavys" class="heavy skill"></div>
			<div id="sheavy" class="heavy spoint"></div>
			<div id="heavy" class="heavy point"></div>
			<div id="energys" class="energy skill"></div>
			<div id="senergy" class="energy spoint"></div>
			<div id="energy" class="energy point"></div>
			<div id="melees" class="melee skill"></div>
			<div id="smelee" class="melee spoint"></div>
			<div id="melee" class="melee point"></div>
			<div id="steels" class="steel skill"></div>
			<div id="ssteel" class="steel spoint"></div>
			<div id="steel" class="steel point"></div>
			<div id="throwns" class="thrown skill"></div>
			<div id="sthrown" class="thrown spoint"></div>
			<div id="thrown" class="thrown point"></div>
			<div id="orderlys" class="orderly skill"></div>
			<div id="sorderly" class="orderly spoint"></div>
			<div id="orderly" class="orderly point"></div>
			<div id="doctors" class="doctor skill"></div>
			<div id="sdoctor" class="doctor spoint"></div>
			<div id="doctor" class="doctor point"></div>
			<div id="sneaks" class="sneak skill"></div>
			<div id="ssneak" class="sneak spoint"></div>
			<div id="sneak" class="sneak point"></div>
			<div id="hacks" class="hack skill"></div>
			<div id="shack" class="hack spoint"></div>
			<div id="hack" class="hack point"></div>
			<div id="steals" class="steal skill"></div>
			<div id="ssteal" class="steal spoint"></div>
			<div id="steal" class="steal point"></div>
			<div id="trapss" class="traps skill"></div>
			<div id="straps" class="traps spoint"></div>
			<div id="traps" class="traps point"></div>
			<div id="sciences" class="science skill"></div>
			<div id="sscience" class="science spoint"></div>
			<div id="science" class="science point"></div>
			<div id="repairs" class="repair skill"></div>
			<div id="srepair" class="repair spoint"></div>
			<div id="repair" class="repair point"></div>
			<div id="oratorys" class="oratory skill"></div>
			<div id="soratory" class="oratory spoint"></div>
			<div id="oratory" class="oratory point"></div>
			<div id="trades" class="trade skill"></div>
			<div id="strade" class="trade spoint"></div>
			<div id="trade" class="trade point"></div>
			<div id="speeds" class="speed skill"></div>
			<div id="sspeed" class="speed spoint"></div>
			<div id="speed" class="speed point"></div>
			<div id="rangers" class="ranger skill"></div>
			<div id="sranger" class="ranger spoint"></div>
			<div id="ranger" class="ranger point"></div>
		</div>
		<div id="skillbutt" class="leveling">
			<div id="buttlight" class="light skillbutt"></div>
			<div id="buttheavy" class="heavy skillbutt"></div>
			<div id="buttenergy" class="energy skillbutt"></div>
			<div id="buttmelee" class="melee skillbutt"></div>
			<div id="buttsteel" class="steel skillbutt"></div>
			<div id="buttthrown" class="thrown skillbutt"></div>
			<div id="buttorderly" class="orderly skillbutt"></div>
			<div id="buttdoctor" class="doctor skillbutt"></div>
			<div id="buttsneak" class="sneak skillbutt"></div>
			<div id="butthack" class="hack skillbutt"></div>
			<div id="buttsteal" class="steal skillbutt"></div>
			<div id="butttraps" class="traps skillbutt"></div>
			<div id="buttscience" class="science skillbutt"></div>
			<div id="buttrepair" class="repair skillbutt"></div>
			<div id="buttoratory" class="oratory skillbutt"></div>
			<div id="butttrade" class="trade skillbutt"></div>
			<div id="buttspeed" class="speed skillbutt"></div>
			<div id="buttranger" class="ranger skillbutt"></div>
		</div>
		<div id="keyskill" class="text2 reg">
			<div id="lkeylight" class="slkey0 keys"></div>
			<div id="lkeyheavy" class="slkey1 keys"></div>
			<div id="lkeyenergy" class="slkey2 keys"></div>
			<div id="lkeymelee" class="slkey3 keys"></div>
			<div id="lkeysteel" class="slkey4 keys"></div>
			<div id="lkeythrown" class="slkey5 keys"></div>
			<div id="lkeyorderly" class="slkey6 keys"></div>
			<div id="lkeydoctor" class="slkey7 keys"></div>
			<div id="lkeysneak" class="slkey8 keys"></div>
			<div id="lkeyhack" class="slkey9 keys"></div>
			<div id="lkeysteal" class="slkey10 keys"></div>
			<div id="lkeytraps" class="slkey11 keys"></div>
			<div id="lkeyscience" class="slkey12 keys"></div>
			<div id="lkeyrepair" class="slkey13 keys"></div>
			<div id="lkeyoratory" class="slkey14 keys"></div>
			<div id="lkeytrade" class="slkey15 keys"></div>
			<div id="lkeyspeed" class="slkey16 keys"></div>
			<div id="lkeyranger" class="slkey17 keys"></div>
			<div id="keylight" class="light minikey2"></div>
			<div id="keyheavy" class="heavy minikey2"></div>
			<div id="keyenergy" class="energy minikey2"></div>
			<div id="keymelee" class="melee minikey2"></div>
			<div id="keysteel" class="steel minikey2"></div>
			<div id="keythrown" class="thrown minikey2"></div>
			<div id="keyorderly" class="orderly minikey2"></div>
			<div id="keydoctor" class="doctor minikey2"></div>
			<div id="keysneak" class="sneak minikey2"></div>
			<div id="keyhack" class="hack minikey2"></div>
			<div id="keysteal" class="steal minikey2"></div>
			<div id="keytraps" class="traps minikey2"></div>
			<div id="keyscience" class="science minikey2"></div>
			<div id="keyrepair" class="repair minikey2"></div>
			<div id="keyoratory" class="oratory minikey2"></div>
			<div id="keytrade" class="trade minikey2"></div>
			<div id="keyspeed" class="speed minikey2"></div>
			<div id="keyranger" class="ranger minikey2"></div>
		</div>
		<div id="skillpoint1" class="text leveling shadow">ОЧКИ УМЕНИЙ</div>
		<div id="point1" class="leveling npoint"></div>
		<div id="skillpoint2" class="text reg shadow">ОСОБЫЕ НАВ</div>
		<div id="point2" class="reg npoint"></div>
		<div id="infoparm">
			<div id="nameparm"></div>
			<div id="textparm" class="text2"></div>
			<div id="textparmreq" class="text2"></div>
			<div id="imgparm"></div>
			<div id="buttreq"></div>
		</div>
		<div id="switch" class="leveling">
			<div id="switch1"></div>
			<div id="textswitch1" class="text shadow">БОНУСЫ</div>
			<div id="switch2"></div>
			<div id="textswitch2" class="text shadow">КНИГИ</div>
			<div id="switch3"></div>
			<div id="textswitch3" class="text shadow">КВЕСТЫ</div>
		</div>
		<div id="traits" class="text2 reg">
			<div id="TRAIT_FAST_METABOLISM" class="text2 left1">Быстрый метабол</div>
			<div id="TRAIT_BRUISER" class="text2 left2">Крушила</div>
			<div id="TRAIT_SMALL_FRAME" class="text2 left3">Хилое тело</div>
			<div id="TRAIT_ONE_HANDER" class="text2 left4">Однорукий</div>
			<div id="TRAIT_FINESSE" class="text2 left5">Точность</div>
			<div id="TRAIT_KAMIKAZE" class="text2 left6">Камикадзе</div>
			<div id="TRAIT_HEAVY_HANDED" class="text2 left7">Вор</div>
			<div id="TRAIT_FAST_SHOT" class="text2 left8">Быстрый стрелок</div>
			<div id="TRAIT_BLOODY_MESS" class="text2 right left1">Маньяк</div>
			<div id="TRAIT_JINXED" class="text2 right left2">Дурной глаз</div>
			<div id="TRAIT_GOOD_NATURED" class="text2 right left3">Добродушие</div>
			<div id="TRAIT_CHEM_RELIANT" class="text2 right left4">Химик</div>
			<div id="TRAIT_CHEM_RESISTANT" class="text2 right left5">Стабильный</div>
			<div id="TRAIT_SEX_APPEAL" class="text2 right left6">Жидкое тело</div>
			<div id="TRAIT_SKILLED" class="text2 right left7">Умелец</div>
			<div id="TRAIT_NIGHT_PERSON" class="text2 right left8">Импульсивный</div>
		</div>
		<div id="keytraits01" class="text2 reg">
			<div id="lkeyTRAIT_FAST_METABOLISM" class="lkey1 keys"></div>
			<div id="lkeyTRAIT_BRUISER" class="lkey2 keys"></div>
			<div id="lkeyTRAIT_SMALL_FRAME" class="lkey3 keys"></div>
			<div id="lkeyTRAIT_ONE_HANDER" class="lkey4 keys"></div>
			<div id="lkeyTRAIT_FINESSE" class="lkey5 keys"></div>
			<div id="lkeyTRAIT_KAMIKAZE" class="lkey6 keys"></div>
			<div id="lkeyTRAIT_HEAVY_HANDED" class="lkey7 keys"></div>
			<div id="lkeyTRAIT_FAST_SHOT" class="lkey8 keys"></div>
			<div id="keyTRAIT_FAST_METABOLISM" class="TRAIT_FAST_METABOLISM minikey"></div>
			<div id="keyTRAIT_BRUISER" class="TRAIT_BRUISER minikey"></div>
			<div id="keyTRAIT_SMALL_FRAME" class="TRAIT_SMALL_FRAME minikey"></div>
			<div id="keyTRAIT_ONE_HANDER" class="TRAIT_ONE_HANDER minikey"></div>
			<div id="keyTRAIT_FINESSE" class="TRAIT_FINESSE minikey"></div>
			<div id="keyTRAIT_KAMIKAZE" class="TRAIT_KAMIKAZE minikey"></div>
			<div id="keyTRAIT_HEAVY_HANDED" class="TRAIT_HEAVY_HANDED minikey"></div>
			<div id="keyTRAIT_FAST_SHOT" class="TRAIT_FAST_SHOT minikey"></div>
		</div>
		<div id="keytraits02" class="text2 reg">
			<div id="lkeyTRAIT_BLOODY_MESS" class="lkey1 keys"></div>
			<div id="lkeyTRAIT_JINXED" class="lkey2 keys"></div>
			<div id="lkeyTRAIT_GOOD_NATURED" class="lkey3 keys"></div>
			<div id="lkeyTRAIT_CHEM_RELIANT" class="lkey4 keys"></div>
			<div id="lkeyTRAIT_CHEM_RESISTANT" class="lkey5 keys"></div>
			<div id="lkeyTRAIT_SEX_APPEAL" class="lkey6 keys"></div>
			<div id="lkeyTRAIT_SKILLED" class="lkey7 keys"></div>
			<div id="lkeyTRAIT_NIGHT_PERSON" class="lkey8 keys"></div>
			<div id="keyTRAIT_BLOODY_MESS" class="TRAIT_BLOODY_MESS minikey"></div>
			<div id="keyTRAIT_JINXED" class="TRAIT_JINXED minikey"></div>
			<div id="keyTRAIT_GOOD_NATURED" class="TRAIT_GOOD_NATURED minikey"></div>
			<div id="keyTRAIT_CHEM_RELIANT" class="TRAIT_CHEM_RELIANT minikey"></div>
			<div id="keyTRAIT_CHEM_RESISTANT" class="TRAIT_CHEM_RESISTANT minikey"></div>
			<div id="keyTRAIT_SEX_APPEAL" class="TRAIT_SEX_APPEAL minikey"></div>
			<div id="keyTRAIT_SKILLED" class="TRAIT_SKILLED minikey"></div>
			<div id="keyTRAIT_NIGHT_PERSON" class="TRAIT_NIGHT_PERSON minikey"></div>
		</div>
		<div id="textlist1" class="leveling text2"></div>
		<div id="textlist2" class="text2">
			<div id="booklight" class="book">x10</div>
			<div id="bookenergy" class="book">x10</div>
			<div id="bookorderly" class="book">x10</div>
			<div id="bookscience" class="book">x10</div>
			<div id="bookrepair" class="book">x10</div>
			<div id="bookranger" class="book">x10</div>
			<div id="bookprewar" class="book">x10</div>
		</div>
		<div id="textlist3" class="text2"></div>
		<div id="done"></div>
		<div id="cancel"></div>
		<div id="perk">
			<div id="selectperk" class="text2"></div>
			<div id="doneperk"></div>
			<div id="cancelperk"></div>
			<div id="infoparms">
				<div id="nameparms"></div>
				<div id="textparms" class="text2"></div>
				<div id="imgparms"></div>
			</div>
			<div id="upscroll"></div>
			<div id="downscroll"></div>
		</div>
		<div id="quest">
			<div id="selectquest" class="text2"></div>
			<div id="donequest"></div>
			<div id="cancelquest"></div>
			<div id="infoparmq">
				<div id="nameparmq"></div>
				<div id="textparmq" class="text2"></div>
				<div id="imgparmq"></div>
			</div>
		</div>
		<div id="talk">
			<div id="dialog" class="text2"></div>
			<div id="answ" class="text2"></div>
		</div>
		<div id="createlistperk" class="text2">
			<div id="titlelistperk" class="text2">
				<div id="titlelist" class="listhead"></div>
				<hr>
			</div>
			<div id="crlistperk" class="text2"></div>
			<div id="fotterperk" class="text2">
				<center>
					<hr>
					<input id="search" name="perk" type="text" placeholder="Поиск перков">
					<!--a href="../message.php">Написать автору</a-->
				</center>
			</div>
			<div id="scrollupdown">
				<div id="upscrollist"></div>
				<div id="downscrollist"></div>
			</div>
		</div>
		<div id="total" class="text2">
			<textarea id="totaltext" name="text"></textarea>
			<div id="loadtotal" class="shadow">ЗАГРУЗИТЬ</div>
			<div id="canceltotal"></div>
		</div>
		<div id="loadkey" class="text reg shadow">ЗАГРУЗИТЬ</div>
		<div id="totalkey" class="text leveling shadow">ИТОГ</div>
		<div id="by" class="text2">by <a href="http://forum.fallout2online.ru/memberlist.php?mode=viewprofile&u=6419">ZingerY</a> supported by <a href="http://bountyhunters.ixbb.ru/">BountyHunters</a></div>
		<?
		include_once  'config.php';
		if (isset($_COOKIE["id"])) {
			$uid = mysqli_real_escape_string($mysqli, $_COOKIE["id"]);
			$query = "SELECT name,hash FROM build WHERE uniqueid='$uid'";
			$result = mysqli_query($mysqli, $query);
			if ($result) {
				$count = mysqli_num_rows($result);
				if ($count > 0) {
					echo "<div id='selectop'><select id='selectbuild'>";
					while ($myrow = mysqli_fetch_assoc($result)) {
						$name = $myrow["name"];
						$thishash = $myrow["hash"];
						echo "<option value='$thishash'" . ($thishash == $hash ? " selected='selected'" : "") . ">$name</option>";
					}
					echo "</select></div>";
				}
			}
		}
		mysqli_close($mysqli);
		?>
	</div>
	<script type="text/javascript">
		function Matrix() {
			function l(a, b) {
				return Math.floor(Math.random() * (b - a + 1)) + a
			}

			function m(a, b, c) {
				return a >= c ? c : a < b ? b : a
			}

			function n(a, b) {
				var c = l(a, b);
				return c < 20 ? i[l(0, i.length - 1)] : c >= 20 && c <= 30 ? i[l(0, i.length - 1)] : c > 30 ? " " : void 0
			}

			function o() {
				k.clearRect(0, 0, window.innerWidth, window.innerHeight), j.width = window.innerWidth, j.height = window.innerHeight, k.font = "18px Consolas, Lucida Console, monospace";
				var g = Math.floor(window.innerWidth / k.measureText(i[0]).width);
				c = [];
				for (var h = [], o = 0; o < g; o++) " " != d[o] ? c[o] = n(0, b) : c[o] = n(a, 100), d[o] = c[o], h[o] = 0;
				e[0] = c;
				for (var p = Math.floor(window.innerHeight / 18), o = p + 12; 0 != o; o--) e[o] = e[o - 1] ? e[o - 1] : [];
				for (var o = p + 12; 0 != o; o--)
					for (var q in e[o]) {
						" " != e[o][q] ? (e[o][q] = i[l(0, i.length - 1)], h[q]++) : h[q] = 0;
						var s, r = [50, 200, 50];
						s = f ? "rgba(" + m(r[0] - 10 * h[q], 7, 255) + ", " + m(r[1] - 10 * h[q], 7, 255) + ", " + m(r[2] - 10 * h[q], 7, 255) + ", 1)" : "rgba(50, 200, 50, " + m(1 - .05 * h[q], 0, 1) + ")", 1 == h[q] && (s = "rgba(85, 255, 85, 1)"), k.fillStyle = s, k.shadowColor = s, k.shadowBlur = 5, o <= p && k.fillText(e[o][q], q * k.measureText(i[0]).width, 18 * o)
					}
			}
			var a = 29,
				b = 35,
				c = [],
				d = [],
				e = [],
				f = !1,
				g = 0,
				h = 0,
				i = "0123456789ƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɯɰɱɲɳɴɵɶʙʚʛʜʞαβγδεζηθικλμνξοπρςστυφχψωϧϨϩϪϫϬϭϮϯϰϱϲ",
				j = document.createElement("canvas");
			j.style.position = "fixed", j.style.top = "0px", j.style.left = "0px", j.style.zIndex = h, j.width = window.innerWidth, j.height = window.innerHeight, document.body.insertBefore(j, document.body.firstChild);
			var k = j.getContext("2d");
			document.onkeydown = function(a) {
				90 === a.keyCode && (f = !f), 88 === a.keyCode && (h = h ? 0 : 9999), j.style.zIndex = h
			}, this.Stop = function() {
				clearInterval(g), g = 0
			}, this.Start = function() {
				g || (g = setInterval(o, 100))
			}, this.Start()
		}
		var matrix;
	</script>
	<? //include "miner.php";
	?>
	<?
	if ($banned) {
		echo "<script type='text/javascript' src='js/crash.js'></script>";
	}
	?>
</body>

</html>