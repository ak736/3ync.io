import { useState } from "react";
import menu from '../icons/menu.svg'
import close from '../icons/close.svg'
export const Header = () => {
    const Links =[
        {name:"Home",link:"/"},
        {name:"Why 3ync.io",link:"/"},
        {name:"3ync.io pro",link:"/"},
        {name:"AI chat",link:"/"},
        {name:"Play and earn",link:"/"},
        {name:"Connect your wallet",link:"/"},
      ];
    
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='mt-4'>
            <nav className='flex flex-col md:flex-row md:justify-between md:items-center justify-start items-start mx-auto ml-8 lg:ml-16 mr-8'>
                {/* logo section */}
                <div className="flex w-full md:w-auto items-center justify-between flex-shrink-0 mb-3">
                    <a href="/" className="font-bold text-2xl mt-2 mr-0 lg:mr-8">3ync<span className="text-violet-700">.io</span></a>
                    <img onClick={(e) => handleMenuClick(e)} src={menuOpen ? `${close}` : `${menu}`} className="text-3xl cursor-pointer md:hidden w-8 h-8 mt-2" alt="menu"/>
                </div>
                {/* link items */}
                <div 
                    className={`md:static md:min-h-fit min-h[60vh] left-0 top-[9%] w-full md:bg-transparent
                    flex items-start justify-end md:justify-center lg:justify-start px-5 ${menuOpen ? 'block' : 'hidden'} md:flex`}
                >
                    <ul className='flex backdrop-blur-2xl p-5 rounded-lg md:backdrop-blur-none md:p-0 md:rounded-none 
                    absolute md:static md:flex-row flex-col items-start md:gap-[3vw] gap-8 whitespace-nowrap
                    md:transition-all md:duration-500 md:ease-in'>
                        {
                            Links.map((link) => (
                            <li  className='text-black hover:text-slate-600 duration-500'>
                                <a href={link.link}>{link.name}</a>
                            </li>))
                        }
                    </ul>
                </div>
                <div className="flex">
                    <button
                        className="bg-black hidden lg:block text-white px-8 py-3 mr-8 rounded-full hover:bg-slate-800 transition ease-out duration-500 whitespace-nowrap"
                    >
                        Sign up
                    </button>
                </div>
            </nav>
            
        </header>
    );
};
