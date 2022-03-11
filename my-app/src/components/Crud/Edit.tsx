import React,{useContext}from 'react'
import {Link, useLocation} from 'react-router-dom';
import { useState} from "react";
import {PostContext} from "./Postlistcontext";


type Props = {

}

const Edit = (props: Props) => {

  const [data,setData] = useContext(PostContext);
  const location =  useLocation();
  const id = location.state;
  
//input values 
const [title,setTitle] = useState<string>();
const [body,setBody] = useState<string>();

  const  handleEdit = () =>{
    
    fetch(`http://localhost:3333/Posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: title,
        body: body,
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
  return (
    <>
    <div className='addpost-main-wrapper pb-4'>
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
        <button className="btn btn-success" type="submit" onClick={()=>{
         handleEdit();
        }}>
          Edit Post
        </button>
        <Link to="/" className='btn btn-danger ml-2'>Cancel</Link> 
      </div>
      </div>
    </div>
    </>
  )
}

export default Edit;