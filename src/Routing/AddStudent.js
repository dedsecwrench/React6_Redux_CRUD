import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { add } from '../Reducer/Reducer';
import { useDispatch } from 'react-redux';

const AddStudent = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [std,setStd] = useState({
        name:"",
        age:"",
        course:"",
        batch:""
    }) 

  const dispatchDetails = (e) =>{
    e.preventDefault()
    if(!(std.name && std.age && std.course&& std.batch)){
      NotificationManager.warning('', 'All fields are mandatory', 3000);
      console.log(std.name);
    }
    else{
    const obj = {
      stdName : std.name,
      stdAge : std.age,
      stdCourse : std.course,
      stdBatch : std.batch
    } 
    setStd({...obj})
    dispatch(add(std))
    navigate('/student')
    toast.success("Added Successfully!", {
      conid: 's1',
      position:"top-center",
      autoClose:1500,
      closeButton:false
     })
    }
  }
  
  return (
    <>   
      <NotificationContainer />
      <div className='form'>
        <br/>
        <h1>Add Student</h1>
        <br/>
        <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={std.name} onChange={(e)=>setStd({...std,name:e.target.value})} autoComplete="off" className='text-field' spellCheck="false"/>  <br/>  <br/>
        <label htmlFor="age">Age</label>
        <input type="number" name="age" value={std.age} onChange={(e)=>setStd({...std,age:e.target.value})} autoComplete="off" className='text-field' spellCheck="false"/>  <br/>  <br/>
        <label htmlFor="course">Course</label>
        <input type="text" name="course" value={std.course} onChange={(e)=>setStd({...std,course:e.target.value})} autoComplete="off" className='text-field' spellCheck="false"/>  <br/>  <br/>
        <label htmlFor="batch">Batch</label>
        <input type="text" name="batch" value={std.batch} onChange={(e)=>setStd({...std,batch:e.target.value})} autoComplete="off" className='text-field' spellCheck="false"/><br/>  <br/>
        <button className='btn btn-success addBtn btnz' onClick={dispatchDetails} >Add</button> 
        </form>
        <br/>
        <button className='btn btn-danger backBtn btnz' onClick={()=>navigate('/student')}>Back</button> 
      </div></>
  )
}

export default AddStudent