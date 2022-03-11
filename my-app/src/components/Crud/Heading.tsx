import React from "react";
import { Link } from "react-router-dom";
import './Heading.css';

type Props = {};

const Heading = (props: Props) => {
  return (
    <div className="container d-flex justify-content-between">
      <div className="my-post-wrap d-flex justify-content-between align-items-center text-white container m-3">
       <h2 className="Post text-white p-2">Posts</h2>
       <Link className=" btn btn-primary" to="/add">Add Post</Link>
      </div>
    </div>
  );
};

export default Heading;
