import { useState,useEffect } from 'react'
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home"
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourClasses";
import ContactUs from "@/scenes/contactUs"
import Footer from "@/scenes/footer"
import { SelectedPage } from '@/shared/types';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage , setIsTopOfPage] = useState<boolean>(true)
 
  useEffect(()=>{
    const handleScrol = () =>{
      if(window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } else{
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll",handleScrol)
    return () => window.removeEventListener("scroll",handleScrol)
  },[])

  return (
   <div className="app bg-grey-20">
      <Navbar
       isTopOfPage={isTopOfPage}
       selectedPage={selectedPage}
       setSelectedPage={(value)=>setSelectedPage(value)}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
