import { useState, useRef } from "react"
import ResultModal from "./ResultModal";

export default function Tajmer({ title, targetTime }) {

    const [timerExpired, setTimerExpired] = useState(false)
    const [timerRunning, setTimerRunning] = useState(false)
    const [currentTime, updateCurrentTime] = useState(targetTime)
    const dialog = useRef();
    const timer = useRef()

    function startTimer()
    {
        timer.current = setTimeout(() => {
            setTimerExpired(true) 
            console.log(dialog)
         }, targetTime * targetTime);

         setInterval(() => {
            updateCurrentTime((currentTime)=> currentTime > 0 ? currentTime - 0.1 : currentTime)
         }, 100)

        setTimerRunning(true)

    }

    function stopTimer()
    {
        clearTimeout(timer.current)
        setTimerRunning(false)
    }

    return (
        <>
        {timerRunning && <ResultModal ref={dialog} targetTime={targetTime} remainingTime={currentTime} result="lost"></ResultModal>}
        <section className="challenge">
            <h2>
                {title}
            </h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                {timerExpired ? "time expired" : ""}
            </p>
            <button onClick={!timerRunning ? startTimer : stopTimer}>{!timerRunning ? "start" : "stop"}</button>
        </section>
        </>
    )
}