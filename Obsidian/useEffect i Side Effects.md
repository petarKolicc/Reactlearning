
Sideeffect - stvari koje ne uticu diretno na komponente koje se trenutno prikaziju
ali su neophodne za dalje koriscenje aplikacije
Zabranjeno koristiti unutar nested funkcija if ili for ili bilo sta tome slicno

KORISTITI SAMO ZA INFINITE LOOP ILI KADA IMAS NESTO STO TREBA DA SE IZVRSI POSLE JSX KOMPONENTE ISTO TAKO ASINHRONI POZIVI U TO ULAZE

Dobar je za kombinaciju sa useRef, jer useRef prvo mora saceka da se return jsx
izvrsi pa onda sa useEffect sacekas da se poveze useRef i odma ga koristis

```
useEffect(() => {}, [])
// prvi parametar je funkcija koja wrappuje bocne efekte(side effect) dela koda
// drugi parametar je lista zavisnosti te funkcije
// useEffect se izvrsava posto se funkcija komponenta izvrsi

[] - ako se u useEffect nalazi funkcija stanja, po pravilu ce se cela komponenta ponovo izvrsava
ali ako se definise u nizu izvrsice se pono useEffect jedino ako su se neke od vrednosti promenile
[] - ako je prazno nece ponovo reexecute effect funkciju jer nijedna promenjiva unutra nije promenila svoju vrednost i ova useEffect funkcija se nece vise nikad izvrsiti
ako se izostavi [] useEffect ce se izvrsiti ponovo posle svakog re-renderovanja komponente u kojoj se nalazi i moze se desiti beskonacna petlja u ovom slucaju samo jednom se izvrsava

[ala] - su state ili prop dependency to je bilo koja vrednost kojoj je potrebno da se useEffect deo ponovo izvrsi promenom njene vrednosti ide u dependency deo. Znaci posto se komponenta ponovo izvrsi gleda se jer se promenila vrednost "ala", ako jeste izvrsi deo pod useEffect u suprotnom nemoj

funkcija kao dependecy postoji mogucnost infinite loop-a
re-xecute
funkcije u javi su objekti koji se ponovo prave po potrebi ako su naprimer ugnjedzedni unutar komponente

```



Use effect dozvoljava i cleanup funkciju (funkciju koja se izvrsava pre nego sto se useEffect PONOVO izvrsi i kada se komponenta ukloni iz DOM-a)

useEffect(() => {
	return cleanupFunkcija()
}

)