import {NavBar, Home,SocialLinks, About,Portfolio, Experience,Contact } from './components'



function App() {
  return (
    <div>
      <div className='flex flex-col' >
        <NavBar/>
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        

        <SocialLinks/>
      </div>
    </div>
  );
}

export default App;
