import { useState } from "react";
import SignInPage from "../../components/SignInPage";
const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
 
  const handleSignIn = () => {
    setShowSignIn(true);
  };


  return (
    <div>
      {showSignIn ? (
        <SignInPage />
      ) : (
        <header className="mt-4">
          <nav className="flex flex-col md:flex-row md:justify-between md:items-center justify-start items-start mx-auto ml-8 lg:ml-16 mr-8">
            {/* logo section */}
            <div className="self-stretch flex flex-row items-center justify-start gap-[75px] mq825:gap-[37px] mq450:gap-[19px]">
              <div className="w-40 flex flex-row items-center justify-start  px-0 box-border relative cursor-pointer">
                <div class="flex flex-col items-start justify-end py-0 pr-5 pl-0">
                  <h3 class="m-0 relative text-inherit leading-[28.8px] font-bold font-inherit whitespace-nowrap">
                    <span class="text-black ml-20">3ync</span>
                    <span class="text-darkorchid">.io</span>
                  </h3>
                </div>
              </div>
              <nav className="m-0 flex-1 flex flex-row items-start justify-start py-0 pr-1 pl-0 gap-[21px] text-left text-mid-6 text-black font-inter mq450:hidden">
                <div className=" relative leading-[26.4px] font-medium flex items-center h-[21px] ">
                  Features
                </div>{" "}
                <div className="relative leading-[26.4px] font-medium flex items-center h-[21px] ">
                  About us
                </div>
                <div className="relative leading-[26.4px] font-medium flex items-center h-[21px]">
                  Pricing
                </div>
                <div className="relative leading-[26.4px] font-medium flex items-center h-[21px]">
                  Blog
                </div>
                <div className="flex-1 relative leading-[26.4px] font-medium flex items-center h-[21px]">
                  Contact
                </div>
              </nav>
              <div className="flex">
                <button
                  onClick={handleSignIn}
                  className="text-white border border-black bg-black px-10 py-3 rounded-full whitespace-nowrap"
                >
                  Sign in
                </button>
              </div>
            </div>
          </nav>
        </header>
      )}
    </div>
  );
};

export default Header;
