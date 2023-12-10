
Routing - simulira novi html stranicu na osnovu url-a
u sustini sve vreme je jedna stranica samo server salje promene
javascripta i time se dobija na vremenu problem je sto je to sve vreme jedna stranica ali mi cemo menjati url

### install 

npm install react-router-dom


### osnovna opcija

```
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/Home";
import AnotherPage from "./Components/AnotherPage";


const router = createBrowserRouter([
    {path: '/', element: <HomePage/> },
    {path: '/', element: <AnotherPage/> },
]);

function App() {
  return <RouterProvider router={router} />
}
```