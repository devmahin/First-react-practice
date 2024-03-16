import Hero from './component/hero/Hero'
import Main from './component/main/main'
import Navbar from './component/navbar/Navbar'
function App() {
  return (
    <>
    <div className='fira-sans-medium-italic container mx-auto'>
     <Navbar></Navbar>
     <Hero></Hero>
    <Main></Main>
    </div>
    </>
  )
}

export default App
