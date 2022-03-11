import React ,{useContext,useEffect}from 'react';
import { Link } from 'react-router-dom';
import './Postlist.css';
 import {PostContext} from "./Postlistcontext";
type Props = {}

type Data = {
  id:number,
  title:string,
  body:string
}

const Postlist = (props: Props) => {
 
const [data,setData] = useContext(PostContext);
// console.log(value[0]);

const deleteData = (props:number) =>{
 
  fetch(`http://localhost:3333/Posts/${props}`, {
  method: 'DELETE',
}) .then((response) => response.json())
.then((data) =>console.log(data));

const newData = data.filter((ele)=>{
  return ele.id !== props
})
setData(newData);

}
  return (
    <>
    {data.map((ele,index)=>{
      return(<>
      <div className='container container-fluid' key={ele.id}>
    <div className="main-wrapper pt-5 pb-5 pl-5 mb-4">
        <div className="row">
          <div className="col-md-8">
            <div className="content-wrap-for-head">
              <h2 className="head-title">Title</h2>
              <p className="title-data">{ele.title}</p>
            </div>
            <div className="hr"></div>
            <div className="wrapper-for-body">
              <h5 className="body-title">Body</h5>
              <p className="body-data">{ele.body}</p>
            </div>
            <div className="wrap-for-id-uid mt-5">
              <div className="id-data">Id : {ele.id}</div>
              <Link to={`/edit/${ele.id}`} state={ele.id} className='btn btn-warning edit'>Edit</Link>
              <button
                className="delete-button btn btn-danger" 
                onClick={()=>deleteData(ele.id)}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://i.picsum.photos/id/1072/500/501.jpg?hmac=lsKiXivddRbbmxPc_sDfl7_uzEgBywYAR91TFn2106E"
              className="img"
            ></img>
          </div>
        </div>
      </div>
    </div>
      </>)
    })}
    
    </>
  )
}

export default Postlist;