import React, { useState ,useContext,useEffect} from 'react'
import './Add.css';
import {Link,useParams} from "react-router-dom";
import {PostContext} from "./Postlistcontext";



const Add = () => {
//getting params

//adding data code 
  const {id} = useParams();   
//global state 
  const [data,setData] = useContext(PostContext);

 //input values 
  const [title,setTitle] = useState<string>();
  const [body,setBody] = useState<string>();

  const [status,setStatus] = useState<boolean>();
  // adding values to api 

  const handleAdd = () =>{

   
   
    fetch('http://localhost:3333/Posts', {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    body: body,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => setData([json,...data]));
   
  window.history.back();
  }
// adding data over 



//editing data started 
 //input values 
 const [Etitle,setEtitle] = useState<string>("");
 const [Ebody,setEbody] = useState<string>("");
 
 //getting data from api 
 
 useEffect(()=>{
   if(id){
   fetch(`http://localhost:3333/Posts/${id}`)
   .then(res => res.json())
   .then(data => {setEtitle(data.title)
     setEbody(data.body)
   })  
   }
 },[])
   
 
 
   const  handleEdit = () =>{
     
     fetch(`http://localhost:3333/Posts/${id}`, {
       method: 'PUT',
       body: JSON.stringify({
         title: Etitle,
         body: Ebody,
       }),
       headers: {
         'Content-type': 'application/json; charset=UTF-8',
       },
     })
       .then((response) => response.json())
       .then((json) =>{setData(data.map((ele)=>{
         return ele.id === json.id ? {...json} : ele;
       }))})
 
        
       window.history.back()
   }
//editing data over 

//rendering conditionally
  return(
   <>
   {
     id ? (<div className='addpost-main-wrapper pb-4'>
     <div className='addpost d-flex justify-content-center'>
     <h2 className='m-5'> Edit Post</h2>
     </div>
      <div className="container mb-4 main-wrapper-for-addpost p-5">
     <div className="form-group">
         <label htmlFor="usr" className="user">
           Title :
         </label>
         <input
           type="text"
           className="form-control"
           id="usr"
           placeholder="Enter the title"
           value={Etitle}
           onChange={(e)=>setEtitle(e.target.value)}
         />
       </div>
       <div className="form-group">
         <label htmlFor="comment" className="comment">
           Body :
         </label>
         <textarea
           className="form-control"
           rows={4}
           id="comment"
           placeholder="Enter the body"
           value={Ebody}
           onChange={(e)=>setEbody(e.target.value)}
         ></textarea>
       </div>
       <div className="input-group-append">
         <button className="btn btn-success" type="submit" onClick={()=>{
          handleEdit();
         }}>
           Edit Post
         </button>
         <Link to="/" className='btn btn-danger ml-2'>Cancel</Link> 
       </div>
       </div>
     </div>) : (
       <div className='addpost-main-wrapper pb-4'>
       <div className='addpost d-flex justify-content-center'>
       <h2 className='m-5'> Add Post</h2>
       </div>
        <div className="container mb-4 main-wrapper-for-addpost p-5">
       <div className="form-group">
           <label htmlFor="usr" className="user">
             Title :
           </label>
           <input
             type="text"
             className="form-control"
             id="usr"
             placeholder="Enter the title"
            onChange={(e)=>setTitle(e.target.value)}
           />
         </div>
         <div className="form-group">
           <label htmlFor="comment" className="comment">
             Body :
           </label>
           <textarea
             className="form-control"
             rows={4}
             id="comment"
             placeholder="Enter the body"
             onChange={(e)=>setBody(e.target.value)}
           ></textarea>
         </div>
         <div className="input-group-append">
           <button className="btn btn-success" type="submit" onClick={handleAdd}>
             Add
           </button>
           <Link to="/" className='btn btn-danger ml-2'>Cancel</Link> 
         </div>
         </div>
       </div>
     )
   }
   </>
  )


  // return (
  //   <div className='addpost-main-wrapper pb-4'>
  //   <div className='addpost d-flex justify-content-center'>
  //   <h2 className='m-5'> Add Post</h2>
  //   </div>
  //    <div className="container mb-4 main-wrapper-for-addpost p-5">
  //   <div className="form-group">
  //       <label htmlFor="usr" className="user">
  //         Title :
  //       </label>
  //       <input
  //         type="text"
  //         className="form-control"
  //         id="usr"
  //         placeholder="Enter the title"
  //        onChange={(e)=>setTitle(e.target.value)}
  //       />
  //     </div>
  //     <div className="form-group">
  //       <label htmlFor="comment" className="comment">
  //         Body :
  //       </label>
  //       <textarea
  //         className="form-control"
  //         rows={4}
  //         id="comment"
  //         placeholder="Enter the body"
  //         onChange={(e)=>setBody(e.target.value)}
  //       ></textarea>
  //     </div>
  //     <div className="input-group-append">
  //       <button className="btn btn-success" type="submit" onClick={handleAdd}>
  //         Add
  //       </button>
  //       <Link to="/" className='btn btn-danger ml-2'>Cancel</Link> 
  //     </div>
  //     </div>
  //   </div>
  // )
}

export default Add;