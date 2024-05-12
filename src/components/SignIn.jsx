import { useState } from "react"
import { auth ,googleProvider} from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup , signOut} from "firebase/auth"

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const phoneNumber = 123456

    const signup =  async()=>{
        try{
          const createdUser =   await createUserWithEmailAndPassword(auth , email, password, phoneNumber)
            console.log(createdUser)
        }catch(error){
            console.log(error)
        }
    }
    const signinwithgoogle = async ()=>{
           try {
            await signInWithPopup(auth, googleProvider)
           } catch (error) {
            console.log(error)
           }
    }

    const signout = async ()=>{
        try{
          await  signOut(auth)
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div className="login">
        <h1>Sign Up</h1>
        <input type="text" placeholder="Email..." onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={signup}>Sign up</button>
        <h1><button onClick={signinwithgoogle}>signin with google</button></h1>
        <button onClick={signout}>signout</button>
    </div>
  )
}
export default SignIn