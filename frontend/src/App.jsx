import Counter from './components/Counter'
import Effect from './components/Effect'
import Navbar from './components/Navbar'
import Parent from './components/Parent'
import Todo from './components/Todo'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Service from './pages/Service'
import {Routes, Route} from 'react-router-dom'
const App = ()=>{
  return (
    <> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/parent' element={<Parent/>}/>
        <Route path='/useState' element={<Counter/>}/>
        <Route path='/useEffect' element={<Effect/>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
    </>

  )
}

export default App