import './App.css';
import ComponentA from './Components/ComponentA'
import ComponentC from './Components/ComponentC';
// import { DummyContext } from './Store/dummy-conext';
import DummyContextProvider from './Store/dummy-conext';

function App() {
 
 

  

  return (
    // stavljamo wrapper oko svih funkcija
    // koristimo provider context ovde
    <DummyContextProvider>
      <ComponentA />
      <ComponentC />
    </DummyContextProvider>
  );
}

export default App;
