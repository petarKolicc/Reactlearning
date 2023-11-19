import { useState, useRef, forwardRef, createContext } from "react"
import { DummyContext } from "../Store/dummy-conext";
import { useContext } from "react";





export default function ComponentD() {
    const { value, newValue } = useContext(DummyContext)

    function saveNumber() {
        console.log(value)
        newValue(valueRef.current.value)
    }
    // const [value, newValue] = useState("")
    const valueRef = useRef()
    return (
        <>
            <h1>Komponenta D</h1>
            <p>some textD</p>
            <input ref={valueRef} type="text" />
            <button onClick={saveNumber}>Dugme</button>
            <p>{value}</p>
        </>
    )
}