import {useState} from 'react'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'

function Register(){
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()
    const handleSubmit=async (e)=> {
        e.preventDefault()
        try{
            await api.post('/auth/register',{email,password})
            navigate( '/' )
        }catch(error){
            alert('registration failed')
        }
    }
    return(
        <div>
            <h2>Register</h2>
            <input
            type='email'
            value={email}
            placeholder='email'
            onChange={(e)=>setEmail(e.target.value)}></input>
            <input
            type='password'
            value={password}
            placeholder='password'
            onChange={(e)=>setPassword(e.target.value)}>
            </input>
            <button onClick={handleSubmit}>
            Submit</button>
        </div>
    )
}
export default Register