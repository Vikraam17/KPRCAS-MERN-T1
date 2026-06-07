import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Parent from './components/Parent'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Service from './pages/Service'

const App = ()=>{
  return (
    //Fragment Tag
     <> 
      <Navbar/>
      <h1>Hello World!!</h1>
      <h1>Hello World!!</h1>
      <Parent/>
      <Home />
      <About/>
      <Contact/>
      <Service/>
      <Counter/>
    </>

  )
}

export default App