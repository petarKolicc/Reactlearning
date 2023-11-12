import img1 from './assets/slika1.png';
import { useState } from 'react';

import TestKomponenta from '../../Components/TestKomponenta/TestKompnenta';

function App() {
  
  let htmlPolje = 
  (<>    <div>ima</div>
    <div>nesto</div>
    </>

  )

  return (
    <TestKomponenta polje1={htmlPolje } polje2="menu"></TestKomponenta>  
  );
}

export default App;