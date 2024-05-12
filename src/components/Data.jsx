import { useEffect, useState } from "react"
import { db } from "../config/firebase"
import { getDocs, collection, addDoc} from "firebase/firestore"

function Data() {
  const [ jobs, setJobs] = useState([])
  const [jobtitle, setJobtitle] = useState('')
  const [age, setAge] = useState('')
  const [expricence, setExpricence] = useState('')

  const jobCollectionRef = collection(db,'jobs' )

  const getAllJobs = async ()=>{
    try {
      const getJobs = await getDocs(jobCollectionRef)
      const filterdata = getJobs.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id
      }))
      setJobs(filterdata)
    } catch (error) {
      console.log(error)
    }
  }
    
  useEffect(()=>{
   getAllJobs()
  },[])
  const submitJob = async ()=>{
    try{
     const retundata = await  addDoc(jobCollectionRef,{
        job:jobtitle,
        expricence,
        age
      })
      console.log(retundata)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <h1>Post job</h1>
      <input type="text" placeholder="job title.." onChange={(e)=>setJobtitle(e.target.value)}/>
      <input type="text" placeholder="age.." onChange={(e)=>setAge(e.target.value)} />
      <input type="text"placeholder="expricence.." onChange={(e)=>setExpricence(e.target.value)}/>
      <button onClick={submitJob}>submit</button>
    </div>
  )
}
export default Data