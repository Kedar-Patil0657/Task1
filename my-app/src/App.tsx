import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './components/Crud/Home';
import Add from './components/Crud/Add';
import Edit from './components/Crud/Edit';
import {PostProvider} from './components/Crud/Postlistcontext';
type Props = {}

const App = (props: Props) => {
  return (
    <>
    <PostProvider>
    <Router>  
      <Routes>
      <Route path='/add' element={ <Add/>} />
      <Route path='/edit/:id' element={<Add/>} />
      <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
    </PostProvider>
    </>
  )
}

export default App;


