import React,{useState,useEffect} from 'react'
import {Bars3Icon,XMarkIcon} from "@heroicons/react/24/solid"
import Link from "./Link"
import Logo from "@/assets/Logo.png"
import { SelectedPage } from '@/shared/types';
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
type Props = {
    selectedPage:SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
    isTopOfPage:boolean;
}

const Navbar = ({isTopOfPage,selectedPage,setSelectedPage}: Props) => {
    const flexBetwen = 'flex items-center justify-between'
    const isAboveMediumScreeen = useMediaQuery("(min-width: 1060px)")
    const [menuToggled,setMenuToggled] = useState<boolean>(false)
    const navBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
  return (
    <nav>
        <div className={`${flexBetwen} ${navBackground} fixed top-0 w-full py-6 z-30`}>
            <div className={`${flexBetwen} mx-auto w-5/6`}>
                <div className={`${flexBetwen} w-full gap-16`}>
                    <img src={Logo} alt="logo" />
                    {isAboveMediumScreeen ? <div className={`${flexBetwen} w-full`}>
                        <div className={`${flexBetwen} gap-8 text-sm`}>
                            <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
                        <div className={`${flexBetwen} gap-8`}>
                            <p>Sign In</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                        </div>
                    </div> : <button className='rounded-full bg-secondary-400 p-2'
                    onClick={()=> setMenuToggled(!menuToggled)}
                    >
                        <Bars3Icon className='h-6 w-6 text-white'/>
                        </button>}
                </div>
            </div>
        </div>
        {!isAboveMediumScreeen && menuToggled && <div className='fixed right-0 h-full z-40 w-[300px] bg-primary-100 drop-shadow-xl'>
            <div className='flex justify-end p-12'>
                <button className='rounded-full p-2' onClick={()=> setMenuToggled(!menuToggled)}>
                     <XMarkIcon className='h-6 w-6 text-gray-400'/>
                </button>
            </div>
             <div className='ml-[30%] flex flex-col gap-10 text-2xl'>
                            <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
            </div>}
    </nav>
  )
}

export default Navbar