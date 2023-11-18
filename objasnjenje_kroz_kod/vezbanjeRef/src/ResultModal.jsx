import { forwardRef } from "react"
import { useImperativeHandle } from "react"
import { useRef } from "react"

const ResultModal = forwardRef( function ResultModal({result, targetTime, remainingTime}, ref) 
{
    const dialog = useRef();
    // mora forwardRef mora ref kao prvi parametar
    // drugi parametar
    

    return (
        <dialog ref={dialog} open>
            <p>
                The target time was {targetTime} 
            </p>
            <p>
                You stopped the time with {remainingTime.toFixed(2)} seconds left
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})


export default ResultModal