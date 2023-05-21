import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import RowPost from './components/RowPost/RowPost';
import {action,originals} from '../src/components/urls'

function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Banner/>
    <RowPost url={originals} title="Netflix Originals"/>
    <RowPost url={action} title="Action" isSmall/>
    </div>
  )
}

export default App