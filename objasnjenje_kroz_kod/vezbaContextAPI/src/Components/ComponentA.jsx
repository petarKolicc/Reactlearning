import ComponentB from './ComponentB.jsx';


export default function ComponentA() {
    return (
        <>
            <h1>Komponenta A</h1>
            <p>A</p>
            <ComponentB value="111" />
        </>
    )
}