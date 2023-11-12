let polje3 = (<><div>covek negde</div>
    <div>ide</div> </>)

export default function TestKomponenta({ polje1, polje2 }) {

    // let Komponenta1 = polje1
    let Komponenta2 = polje2

    return (
        <>
            {/* <Komponenta1></Komponenta1> */}
            {polje1}

            <Komponenta2>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </Komponenta2>
        </>
    )
}