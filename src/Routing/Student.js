import React from 'react'
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { del } from '../Reducer/Reducer';
import { useDispatch } from 'react-redux';

const tableCellS = {
    color: "white",
    border: "1px solid #61dafb",
    fontSize:"19px"
  }
  const tableHead = {
    fontWeight: "Bold",
    color: "white",
    border: "1px solid #61dafb",
    fontSize:"21px"
  }

const Student = () => {
  const student = useSelector((state)=> state.studentReducer.stdState)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const goToUpdatePage = (index) =>{
    navigate(`/student/update/${index}`)
  }

  const dispatchDelAction = (index) =>{
    dispatch(del(index))
    toast.success("Deleted Successfully!",{
      conid: 'd1',
      position:"top-center",
      autoClose:1500,
      closeButton:false
    })
  }

  return (
        <>
        <ToastContainer conid='s1' theme="colored"/>
        <ToastContainer conid='d1' theme="colored"/>
        <ToastContainer conid='u1' theme="colored"/>
          <div className='container top-div'>
            <div className='div1'>
              Student Details
            </div>
            <div className='div1 div2'>
            <button onClick={()=>navigate('/student/addStudent')} className='btn btn-primary add'><img src = "https://cdn-icons-png.flaticon.com/512/265/265674.png" alt="" className='i1'/> Add Student</button>
            </div>
          </div>

       <div className='container'> <br/>
       <div className='tab'>
      <TableContainer style={{ backgroundColor: "black",  borderRadius:"5px"}}>
      <Table>
        <TableHead>
          <TableRow >
             <TableCell style={tableHead} align="center">Name</TableCell>
            <TableCell style={tableHead} align="center">Age</TableCell>
            <TableCell style={tableHead} align="center">Course</TableCell>
            <TableCell style={tableHead} align="center">Batch</TableCell>
            <TableCell style={tableHead} align="center">Change</TableCell>
            <TableCell style={tableHead} align="center">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
                student.map((current,index)=>{
                    return(
                        <TableRow key={index}>
                        <TableCell style={tableCellS} align="center">{current.name}</TableCell>
                        <TableCell style={tableCellS} align="center">{current.age}</TableCell>
                        <TableCell style={tableCellS} align="center">{current.course}</TableCell>
                        <TableCell style={tableCellS} align="center">{current.batch}</TableCell>
                        <TableCell style={tableCellS} align="center"><button className='edit' onClick={()=>{goToUpdatePage(index)}} ><img src="https://findicons.com/files/icons/2166/oxygen/48/edit.png" alt="" className='i2'/> Edit</button></TableCell>
                        <TableCell style={tableCellS} align="center"><button className='del'  onClick={()=>dispatchDelAction(index)}><img src="https://img.icons8.com/glyph-neue/344/ffffff/trash.png" alt="" className='i3'/> Delete</button></TableCell>
                        </TableRow>
                    )
                })
            }
              </TableBody>
            </Table>
        </TableContainer>
        </div>
        </div></>
  )
}

export default Student
