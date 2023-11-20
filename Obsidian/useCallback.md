
wrapuj ga oko funkcije

useCallback(funciton funkcija1(){
	console.log("nesto")
})

// nece praviti novu funkciju svaki put sa ovim wrapperom
const wrapper = useCallback(function funkcija1() {
	//TODO funkcija
}, [])




[] - drugi parametar je lista zavisnosti staviti sve statevove i props
koji se koriste u funkciji i samo ako se oni promene ce da rekreaira funkciju

to dalje prosledi na useEffect kao dependency ako stavljas funkciju