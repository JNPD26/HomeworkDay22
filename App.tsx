import Home from './pages/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Aboutoppofindn2flip from './contents/Aboutoppofindn2flip'
import Aboutopporeno105g from './contents/Aboutopporeno105g'
import Abouthuaweimate50pro from './contents/Abouthuaweimate50pro'
import Abouthuaweip60pro from './contents/Abouthuaweip60pro'
import Aboutredminote12pro5g from './contents/Aboutredminote12pro5g'
import Aboutsamsunggalaxyzflip4 from './contents/Aboutsamsunggalaxyzflip4'
import Aboutsamsunggalaxyzfold4 from './contents/Aboutsamsunggalaxyzfold4'
import Aboutvivox90pro from './contents/Aboutvivox90pro'
import Aboutxiaomi13pro from './contents/Aboutxiaomi13pro'
import Checkout from './pages/Checkout'


function App() {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutoppofindn2flip' element={<Aboutoppofindn2flip/>}/>
      <Route path='/aboutopporeno105g' element={<Aboutopporeno105g/>}/>
      <Route path='/abouthuaweimate50pro' element={<Abouthuaweimate50pro/>}/>
      <Route path='/abouthuaweip60pro' element={<Abouthuaweip60pro/>}/>
      <Route path='/aboutredminote12pro5g' element={<Aboutredminote12pro5g/>}/>
      <Route path='/aboutsamsunggalaxyzflip4' element={<Aboutsamsunggalaxyzflip4/>}/>
      <Route path='/aboutsamsunggalaxyzfold4' element={<Aboutsamsunggalaxyzfold4/>}/>
      <Route path='/aboutvivox90pro' element={<Aboutvivox90pro/>}/>
      <Route path='/aboutxiaomi13pro' element={<Aboutxiaomi13pro/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
  )
}

function WrappedApp(){
  return(
  <BrowserRouter><App /></BrowserRouter>
  )
}

export default WrappedApp
