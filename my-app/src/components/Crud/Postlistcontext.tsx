import { type } from '@testing-library/user-event/dist/type';
import React, { useState,createContext, useEffect } from 'react';

type postProps = {
    children: React.ReactNode
}
type Data = {
    id:number,
    title:string,
    body:string
}

type IpostContext = [Data[], React.Dispatch<React.SetStateAction<Data[]>>];

export const PostContext = createContext<IpostContext>([[],()=>null]);



export const PostProvider = (props :postProps) => {

 const [post,setPost] = useState<Data[]>([]);

 useEffect(()=>{
    fetch('http://localhost:3333/Posts')
    .then(res=>res.json())
    .then(data =>setPost(data))
 },[])

 return(
  <PostContext.Provider value={[post,setPost]}>
   {props.children}
  </PostContext.Provider>     
 )
}