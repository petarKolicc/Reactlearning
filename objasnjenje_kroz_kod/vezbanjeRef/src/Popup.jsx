export default function Popup({referenca}) {
    return(
    <dialog ref={referenca} >
        <p>Ovo je tuturutu dijalog</p>

        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    )
}