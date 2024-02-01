import {Header} from "./Header"
import landing from "../images/landing.svg"
export const Home = () => {
  return (
    <div className="flex flex-col bg-gradient-to-t from-slate-900 from-10% via-violet-600 via-55% to-purple-50 to-90%">
        <Header/>
        <div className="flex flex-col items-center justify-center min-h-screen w-full p-6 sm:mt-4 mt-0">
          <div className="mx-12 mt-10 mb-12">
              <h1 className="text-[2.75rem] leading-tight sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-950 from-10% via-slate-900 via-40% to-violet-800 to-90% inline-block text-transparent bg-clip-text transition-property font-size lg:duration-1000">
                Empowering the Future of <br className="hidden sm:block"/>Blockchain and Web 3.0!
              </h1>
          </div>
          <div className="flex flex-row items-center justify-center sm:gap-8 gap-2">
            <button className='bg-black border border-black text-white px-8 py-3 rounded-full hover:bg-slate-800 whitespace-nowrap transition ease-out duration-400'>Get Started</button>
            <button className='text-white border border-white bg-transparent px-10 py-3 rounded-full hover:bg-slate-800 hover:border-slate-800 whitespace-nowrap transition ease-out duration-400'>Sign in</button>
          </div>
          <div className="mt-12 sm:mx-5">
            <img className="" src={landing} alt="" />
          </div>
        </div>
    </div>
  )
}
