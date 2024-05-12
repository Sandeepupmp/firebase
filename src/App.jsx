import Data from "./components/Data"
import SignIn from "./components/SignIn"
import { app } from "./config/firebase"



function App() {
  

  return (
    <>
   <h1>firebase working</h1>
   <SignIn/>
   <Data/>
    </>
  )
}

export default App
