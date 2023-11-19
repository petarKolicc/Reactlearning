import { DummyContext } from "../Store/dummy-conext"
import { useContext } from "react"

export default function ComponentB() {

    let {value} = useContext(DummyContext)

    return (<>
    <h1>Komponenta B</h1>
    <p>{value}</p>
    </>)
}