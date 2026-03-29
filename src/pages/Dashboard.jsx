import {useState,useEffect} from 'react'
import api from '../api/axios'
function Dashboard(){
    const[bookmarks,setBookmarks]=useState([])
    const[url,setUrl]=useState('')
    const[title,setTitle]=useState('')
    const[loading,setLoading]=useState(false)

    const fetchBookmarks = async () => {
    setLoading(true)  
    const response = await api.get('/bookmarks')
    setBookmarks(response.data)
    setLoading(false)
}
      
       useEffect(()=>{
        fetchBookmarks()
       },[])


    const addBookmark=async(e)=>{
        e.preventDefault()
        if(url===''||title==='')
            return alert("error")
        await api.post('/bookmarks',{url,title})
        setUrl('')
        setTitle('')
        fetchBookmarks()
    }
    const deleteBookmark=async(id)=>{
        await api.delete(`/bookmarks/${id}`)
        fetchBookmarks()
    }
    const logout=()=>{
        localStorage.clear()
        window.location.href='/'
    }

return(
    <div>
        <h2>
            My BookMarks
        </h2>
        <form onSubmit={addBookmark}>
            <input
            value={url}
            placeholder='URL'
            onChange={(e)=>setUrl(e.target.value)}
            />
            <input
            value={title}
            placeholder='title'
            onChange={(e)=>setTitle(e.target.value)}>
            </input>
            <button type="submit">Add</button>
           
           </form>

           <button onClick={logout}>Log Out</button>
           {loading ? <p>Loading...</p> :bookmarks.map(b=>(
            <div key={b.id}>
                <a href={b.url}>{b.title}</a>
                <button onClick={()=>deleteBookmark(b.id)}>Delete</button>
            </div>
           ))}
           
  
    </div>
)
}
export default Dashboard
