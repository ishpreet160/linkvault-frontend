import{useState} from 'react';
import api from '../api/axios'
import{useNavigate,Link} from 'react-router-dom';

function Login(){
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()
    const[loading,setLoading]=useState(false)
    const handleSubmit=async(e)=>{
         e.preventDefault()
        if(email===''||password==='')
            return alert("empty")
            setLoading(true)
            try{
                const response=await api.post('/auth/login',{email,password})
                localStorage.setItem('token',response.data.access_token)
                navigate('/dashboard')
            }catch(error){
                alert('Invalid credentails')
            }finally{
                setLoading(false)
            }
    }
    return(<div>
        <h2>Login page</h2>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
        <input
        type='email'
        value={email}
        placeholder="email"
        onChange={(e)=>setEmail(e.target.value)}
        ></input>
        <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e)=>setPassword(e.target.value)}></input>
        <button onClick={handleSubmit}>{loading?"loading...":"Submit"}</button>
    </div>
    )
    }
export default Login
       

