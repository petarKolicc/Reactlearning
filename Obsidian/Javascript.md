 ------- RAZNO ---------------

<script type="text/javascript"
    src="moja_scripta.js" defer></script>
// defer funkcionise tako sto posto ucita DOM (HTML) tek
// onda izvrsava javascript(ako nema src ovo se ignorise),
// a ucitava biblioteku u paraleli sa ucitavanjem DOM-a

<script type="text/javascript"
    src="moja_scripta.js" type="module"></script>
// uz module flag onda u mom javascriptu smem da radim import i export drugih
// javascript fajlova jel gleda sve kao modul

<meta charset="utf-8"/>
// hocu sve

<script>
	console.log("turcine");
</script>
// ispisuje na logou ne na html stranici javascript

Komentarisanje
// jedna linija

/*
vise
linija
komentarisanja
*/



undefined - void
null
boolean
string
number
object - dictionary






const pi = 3.14
// nikada se ne menja


var a;
var b = 2;

console

a++;

a+=12; // <==> a = a + 12;

string moze biti i sa '' i sa ""

// zamena vrednosti
var a = 5;
var b = 6;
/
[a, b] = [b, a];


----------- HTML ----------------------------

-- SLIKA PICTURE IMAGE
<img id="id1" src="slika1" onclick="fun1('param1')" />


// isto kao <p></p> samo sto zauzima onoliko prostora koliko mu je potrebno ne radi na nivou bloka
<span></span>

// to je kada ima nabrajanja ali umesto - ide kruzic 1) 2) 3) itd. red za redom 
<ul>
	<li> prvi elem</li>
	<li> drugi elem</li>
	<li> treci elem</li>
</ul>


----------- HTML IZ JAVASCRIPTA -------------

// ovo je za razne stvari textfield, span, paragraph, 
document.getElementById("date_label").innerHTML = 'text1';


-- VISIBLE/ENVISABLE ELEMENTA SAKRIVANJE ELEMENTA

 document.getElementById("element1").style.visibility = "hidden";


------------- STRINGOVI STRING --------------


// Ubacivanje u string

var myStr = "Ja sam" 

// vraca duzinu niza
str1.length;

// ovde se ne koristi '' vec `(na tastaturi gornji levi ugao)
var a = 66;
console.log(`Zdravo, ${a} `);



// da je == pokusao bi da konvertuje i to bi islo glat
// ovako === ne radi implicitnu konverziju nikakvu
3 === 3
3 === '3'

---------- NULL I UNDEFINED ----------------

undefined je tip varijabla je deklarisana ali joj nije dodeljen tip
null je objekat dodele koji ne postoji


--------- OBJECTS OBJEKTI ----------------

var objekat1 = {
	
	"ime" : "Perica",
	"prezime" : "Kolic",
	"godiste" : "2001" ,
	"deca"	  : ["Dobrica", "Jerusalima", "Marija"]
};
// moze i ovako
var objekat1 = {ime : "petar", prezime : "kolic"};

objekat1["deca"][1] // <==> Jerusalima
objekat1.deca[1]) 	// <==> Jerusalima 

objekat1["adresa"] = "lion";
// dodavanje novog polja objektu 

delete objekat1.deca;
// brisanje polja objekta

objekat1.hasOwnProperty(deca);
// vraca true ili false zavisno da li objekat ima to svojstvo

ugnjezdavanje kombinacije objekata - nizova 
var objekat1 = [{
	
	"ime" : "Perica",
	"prezime" : "Kolic",
	"godiste" : "2001" ,
	"deca"	  : ["Dobrica", "Jerusalima", "Marija"]
}, 
	"novo" : "nesto novo"
				];

var objekat1 = {x : "petar", y : "kolic"};
/
var {x : perica, y : krki} = objekat1;
/
// napravili smo 2 nove promenjive i dodelili im vrednosti x i y

// ugnjezdavanje objekata
const KONSTANTA1 =
{
	danas : { min : 50, max : 80},
	sutra : { min : 20, max : 60}
};
KONSTANTA1.sutra.max // <==> 60


------- RANDOM -----------------------

Math.floor(Math.random()*10)
// random broj izmedju 0-9

Math.random();
// vraca realan broj izmedju [0-1)




------- VAR LET CONST PROMENJIVE-----------

let i const su unutar opsega i samo se tu koriste i primenjivi su tu
ne mogu se dva puta deklarisati

let a = "perica";
a = "nikola";
/
// ovo je ok jer mi promennjivu ne deklarisemo vec je samo definisemo

let a = "nidza";
/
// ovo vec ne bi proslo jer smo 2 puta deklarisali promenjivu a

// ovo moze

let a = 5;
if(true)
{
	let a = 7;
}
// ovo je OK


var je za globalne promenjive

const - je klasika samo jednom se deklarise i definise



var bicycle = {
	gear : 2,
	setGear : function(param1)
	{
		this.gear = param1;
	}
}
/
bicycle.setGear("ide maca");
// ovo get i set zaboravi to je samo ovde tako 
// napisano
/
var bicycle = {
	gear : 2,
	setGear(param1)
	{
		this.gear = param1;
	}
}
// moze i ovako


var Klasa1 = function(param1)
{
	this.covek = param1;
}
var zevs = new Klasa1("covek");
/
console.log(zevs.covek);
// pravljenje novog objekta


----------- TIMEOUT TIMER ---------

const timer1 = setTimeout(() => {console.log("kasnim 40s")}, 4000);
// posle 40s izvrsi funkciju

clearTimeout(timer1);
// zasutavlja tajmer

---------- KLASA ----------------

// normalna klasa sa getterima i setterima
class Klasa1 
{
	constructor(param1)
	{
		this.polje1 = param1;
	}

		get prvoPolje()
	{
		return this.polje1;
	}

	set writer(param1)
	{
		this.polje1 = param1;
	}
}
// nisu potrebne otvorene i zatvorene zagrade
klasa1.writer;
klasa1.prvoPolje;



--------- DATE -------------------------------

// funkcija koja formatira timestamp u zeljeni datum
	function format_to_timestamp(date_ob)
    {

        // adjust 0 before single digit date
        let date = ("0" + date_ob.getDate()).slice(-2);

        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

        // current year
        let year = date_ob.getFullYear();

        // current hours
        let hours = date_ob.getHours();

        // current minutes
        let minutes = date_ob.getMinutes();

        // current seconds
        let seconds = date_ob.getSeconds();

        // prints date & time in YYYY-MM-DD HH:MM:SS format
        // return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

        return year + "-" + month + "-" + date + "T";
        // ovaj red se menja zavisno od potreba
    }

date1.getMonth();
// vraca mesec od 0-11

date1.getFullYear();
// vraca godinu kao cetvorocifreni broj

date1.getDate();
// vraca dan u mesecu


date1 = new Date("02/21/2007");
// pravi objekat datum tako sto mu se dostavljamo mesec, dan, godina

date2 = new Date();
// vraca trenutni datum


---------- OUT OUTPUT PRINTF LOG LOGGER

console.log('ispis na logger');


---------- ISKACUCI PROZOR WINDOW ALERT -------------

alert("poruka");


--------- IMPORT I REQUIRE -------------------





---------- TRY CATCH EXCEPTION GRESKE ------------



------------ IF ------------------

if(2 + 3 == 5)
{
	
} 
else if(true == false))
{
	
}
else
	console.log("Ide maca oko tebe");

--------- TERNARNI OPERATOR ---------

ISTO


------- STRING -----------------------


string1.substring(11, 16);
// substring [11, 16)



---------- KONVERZIJA INT STRING ---

parseInt("288"); // pretvara slova u broj

--------- WHILE i FOR---------------

ISTO

for(const hobi of hobiji)
{
	
}



-------------- FUNKCIJA FUNCTION -------------

// Funkcija
//
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb = "perica")
{
	var result = myNoun + " " + myAdjective;

	console.log(wordBlanks("pas", "stolica", "racunar", "brzo"));
}

// funkcija sa objektom kao parametrom
function funkcija1(ada)
{
	console.log(`Gospodi pomiluj ${ada.name}`);
}

-- CALLBACK funkcija

function wrapperFunction(callback) {
  // Call the provided callback function with the value "abba"
  callback("abba");
}
// Call wrapperFunction with exampleFunction as the callback
wrapperFunction(exampleFunction);


function printUser(user, fun1)
{
	fun1(user);
}

printUser(promenjiva1, funkcija1);

---- ARROW FUNKCIJA FUNKCIJA STRELICA

var magija = function(a, b)
{
	a += 3;
	return a + b;
}

sluze za pisanje krace sintaxe

var magija = (a, b) =>
{
	a += 3;
	return a + b
}
// isto ovo radi

(a, b) => a + b
// ne stavljam zagrade i implicitno znaci
// da je return vrednost a+b

console.log(`${magija(666, 5997)}`);



------------ ANNOYMOUS FUNCTION ANONIMNA FUNKCIJA 


var x = function() {
	console.log('Ovo je anonimna funkcija');	
};

x();

// Ako odmah hocu izvrsenje te funkcije
// Bitne su i zagrade na pocetku inace nece raditi
(function() {
							console.log('Odma izvrsi funkciju')
					   })();



// anonimna funkcija pokretanje odma sa argumentima
(function() {
							console.log(polje1 + polje2);
					   })(polje1, polje2);






-- Prenosenje vise argumenata ka funkciji a ne znamo unapred koliko prenosimo

const magija = (function() {
	return function suma(...args)
	{
		return args[0] + args[1]
	};
})();

// Ako ne zelimo da prenosimo sv parametre funkcije vec samo neke
const stats = {

	max : 56,
	devijacija : 4.34,
	medijana : 34.5,
	cvor : 7
};
/
const half = ({max, cvor}) => {

		return (max + cvor) / 2.0;
};


------- POZIV FUNKCIJE NA TAJMER CALL FUNCTION EVERY X SECONDS ------

function startTimer() {
    timer = setInterval(function() {
        alert("5 seconds are up");
    }, 5000);
}


------- NIZOVI ARRAY ----------------

radi se sa referencama 

var niz = [1, 2 , 5];

var matrica = [1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 6666, 12], 13, 14];

matrica[3][0][1] = 6666;

printanje na logger

// ubacuje ga kao novi element u nizu
niz.push("decko", "milisav");

var elementX = niz.pop();

niz.shift();
// brise sa pocetka niza

niz.unshift("ubacuje na pocetak niza");
// ubacuje na pocetak niza


var niz = ["pon", "uto", "sre", "cet"];
var niz2 = ["ned"]
var niz2 = [...niz];
// duboko kopiranje i appendovanje


const [a,  b, c, d] = niz;
// dodeljujemo vrednosti novim promenjivama
// krecemo od indexa 0 ako ostavimo prazno onda nista
// destruktuiranje

// premapiranje nizova

let niz1 = niz1.map((sta_god) => sta_god + "!")

### map, dozvoljava i index koji oznacava index u nizu
```
niz.map((object, index)) => <li key={index}> {object.text} </li>
```



------ DIZANJE SERVERA ------

npm install http-server -g

http-server -p 3000 --cors
// iskljuci cors


----- CHROME -------------


ctrl + s = cuvanje u chrome ponovo pokrece

// ako imas problem sa azuriranjem samo uradi ctrl + s

---- EXPORT IMPORT -----------

export let kljuc = "sta_god"
// export varijable

import {kljuc} from './skripta1.js'
// ako je cist javascript

key={`${promenjiva1}${promenjiva2}`}
//injekcija dve promenjive
# Import Export


export default "sta_god";
// ovo je defaultna stvar koja se exportuje iz fajla
// sme samo jedna stvar da se exportuje

import jaZovemVarijabluAustvariDefault from './skripta.js'
// importuje default sto je export i dajem mu naziv


export let kljuc = "sta_god"
// export varijable

import {kljuc} from './skripta1.js'
// ako je cist javascript

import * as klasa1 from "./skripta1.js"
// importuje sve i stavlja u klasu1 da kasnije bude korisceno

==
// ako su isti posle neohodne konverzije npr iz string u int\=
=== ako su isti i tipovi i njihove vrednost

100 == "100"
// ako su dva onda je ovo tacno

Precice

menjanje jezika tastature
alt + shift

Otvaranje console javascripta chroma
ctrl + shift + j


formatiranje koda visual code

// selektovan text
ctrl + shift + F

// ceo fajl
ctrl + shift + I =


// 2 stranice na jednoj
ctrl + \

ctrl + K + C
// komentarisanje\


-- Google Chrome

F12 - za otvaranje inspect-a 

NAJBITNIJE

javascript je case sensitive