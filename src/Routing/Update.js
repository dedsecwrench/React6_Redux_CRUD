import React,{useState} from 'react'
import { useNavigate,useParams} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { edit } from '../Reducer/Reducer';

const Update = () => {
  
  const {id} = useParams()
  const navigate = useNavigate()
  const selectedIndex = Number(id)
  const dispatch = useDispatch()
  const student = useSelector((state)=>state.studentReducer.stdState)
  //  const selectedIndex = stdData.findIndex(cur=>cur.id === ID)
   const [name,setName] = useState(student[selectedIndex].name)
   const [age,setAge] = useState(student[selectedIndex].age)
   const [course,setCourse] = useState(student[selectedIndex].course)
   const [batch,setBatch] = useState(student[selectedIndex].batch)

    const dispatchEditDetails = (e) =>{
      e.preventDefault()
      const obj = {name,age,course,batch,id:selectedIndex}
      dispatch(edit(obj))
      navigate('/student')
      toast.success("Updated Succesfully!",{
        conid: 'u1',
        position:"top-center",
        autoClose:1500,
        closeButton:false
      })
    }

  return (
    <> 
      <div className='form'>
        <br/>
        <h1>Edit</h1>
        <br/>
        <form>
        <label htmlFor="name">Name</label>&nbsp; 
        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} autoComplete="off" className='text-field' spellCheck="false"/>  <br/>  <br/>
        <label htmlFor="age">Age</label>&nbsp; 
        <input type="number" name="age" value={age} onChange={(e)=>setAge(e.target.value)} autoComplete="off" className='text-field' spellCheck="false"/>  <br/>  <br/>
        <label htmlFor="course">Course</label>&nbsp; 
        <input type="text" name="course" value={course} onChange={(e)=>setCourse(e.target.value)} autoComplete="off" className='text-field' spellCheck="false"/>  <br/>  <br/>
        <label htmlFor="batch">Batch</label>&nbsp; 
        <input type="text" name="batch" value={batch} onChange={(e)=>setBatch(e.target.value)} autoComplete="off" className='text-field' spellCheck="false"/><br/>  <br/>
        <button className='btn btn-success addBtn btnz' onClick={dispatchEditDetails}>Update</button> 
        </form>
        <br/>
        <button className='btn btn-danger backBtn btnz' onClick={()=>navigate('/student')} >Back</button> 
      </div>   </>    
  )
}

export default Update
