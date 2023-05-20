import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Banner/>
    <RowPost/>
    </div>
  )
}

export default App