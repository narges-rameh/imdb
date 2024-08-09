import MenuItem from './MenuItem';

// import {AiFilHome} from 'react-icons/ai';
import {AiFillInfoCircle} from 'react-icons/ai';

import { AiFillHome } from "react-icons/ai";


function Header() {
  const navigations = [{
    title:"Home",
    href:"/"
  },
{
  title:"About",
  href:"/about"
}]
  return (
    <>
    <div className="">
      <MenuItem navigations={navigations}/>
        {/* <MenuItem title='home' address='/' Icon={AiFillHome} /> //TODO Check Later
        <MenuItem title='about' address='/about' Icon={AiFillInfoCircle} /> */}
    </div>
    </>
  )
}

export default Header