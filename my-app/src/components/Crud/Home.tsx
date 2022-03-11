import React from 'react'
import Heading from './Heading';
import './Home.css';
import Postlist from './Postlist';

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <Heading/>
        <Postlist/>
    </div>
  )
}

export default Home;