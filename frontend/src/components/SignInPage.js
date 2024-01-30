import divwlayout from "../content/images/div.w-layout-grid.png";
import image5 from "../content/images/image_5-removebg-preview.png";
import { useState } from "react";
import Home from "../components/suryafiles/Home";
import SignUpPageLanding from "./SignUpPage";
import googlelogo from "../content/images/62438070903162192f4aee7d_google.svg.png";

const SignInPage = () => {
  const [showLanding, setShowLanding] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleMainPage = () => {
    setShowLanding(true);
  };

  const handleSignUp = () => {
    setShowSignUp(true);
  };

  return (
    <div>
      {showLanding ? (
        <Home />
      ) : (
        <div>
          {showSignUp ? (
            <SignUpPageLanding />
          ) : (
            <div className="flex justify-center items-center  bg-gray-100">
              <div className="flex h-screen w-full ">
                <div className="w-1/2  rounded-l-lg shadow-lg">
                  <div className=" flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-[541px] max-w-full lg:pt-[29px] lg:box-border mq825:min-w-full mq450:pt-5 mq450:box-border mq1425:flex-1">
                    <div className="self-stretch flex flex-col items-center justify-start gap-[125px] max-w-full mq825:gap-[62px] mq450:gap-[31px]">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[75px] mq825:gap-[37px] mq450:gap-[19px]">
                        <div
                          className="w-40 flex flex-row items-center justify-start  px-0 box-border relative cursor-pointer"
                          onClick={handleMainPage}
                        >
                          <div class="flex flex-col items-start justify-end py-0 pr-5 pl-0">
                            <h3 class="m-0 relative text-inherit leading-[28.8px] font-bold font-inherit whitespace-nowrap">
                              <span class="text-white ml-20">3ync</span>
                              <span class="text-darkorchid">.io</span>
                            </h3>
                          </div>
                        </div>
                        <nav className="m-0 flex-1 flex flex-row items-start justify-start py-0 pr-1 pl-0 gap-[21px] text-left text-mid-6 text-white font-inter mq450:hidden">
                          <div className="flex-1 relative leading-[26.4px] font-medium flex items-center h-[21px] whitespace-nowrap">
                            Features
                          </div>{" "}
                          <div className="flex-1 relative leading-[26.4px] font-medium flex items-center h-[21px] whitespace-nowrap">
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
                      </div>

                      <div className="w-[527px] flex flex-row items-start relative mt-[-50px]  justify-start py-0 pr-[27px] pl-5 box-border max-w-full text-[43.2px]">
                        <div className="flex-1 flex flex-col -top-[1px] items-center justify-start gap-[25px] max-w-full">
                          <b className="relative tracking-[-2px] leading-[51.84px] inline-block text-transparent !bg-clip-text [background:linear-gradient(106.13deg,_#fff_32%,_#af92ff_71%,_#426dd8)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-w-full mq825:text-[35px] mq825:leading-[41px] mq450:text-[26px] mq450:leading-[31px]">
                            Sign in to your account
                          </b>
                          <div className="flex flex-row items-start justify-start pt-0 pb-2 pr-px pl-0 text-lgi-2">
                            <div className="relative leading-[28.8px]">
                              <b className="text-white">
                                {" "}
                                Enter your credentials to view all insights
                              </b>
                            </div>
                          </div>

                          <form class="m-0 self-stretch flex flex-col items-center justify-start gap-[24px]">
                            <div class="self-stretch flex flex-col items-start justify-start gap-[10px]">
                              <div class="relative text-base leading-[24px] font-inter text-white text-left opacity-[0.99]">
                                Email*
                              </div>
                              <div class="self-stretch rounded-xl bg-black flex flex-row items-center justify-start pt-5 px-[13px] pb-[19px] opacity-[0.99] border-[1px] border-solid border-gray-200">
                                <input
                                  class="w-[132.2px] [border:none] [outline:none] font-inter text-mid-6 bg-[transparent] h-[21px] relative text-darkgray text-left flex items-center"
                                  placeholder="Your work email"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div class="self-stretch flex flex-col items-start justify-start gap-[9px]">
                              <div class="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
                                <div class="relative text-base leading-[24px] font-inter text-white text-left opacity-[0.99]">
                                  Password*
                                </div>
                                <div class="relative text-base [text-decoration:underline] leading-[24px] font-inter text-white text-left flex items-center h-5 opacity-[0.99]">
                                  Forgot your password?
                                </div>
                              </div>
                              <div class="self-stretch rounded-xl bg-black flex flex-row items-center justify-start pt-5 px-[13px] pb-[19px] opacity-[0.99] border-[1px] border-solid border-gray-200">
                                <input
                                  class="w-[171.5px] [border:none] [outline:none] font-inter text-mid-6 bg-[transparent] h-[21px] relative text-darkgray text-left flex items-center"
                                  placeholder="Enter your password"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div class="self-stretch flex flex-col items-start justify-start gap-[17px]">
                              <button class="cursor-pointer [border:none] p-3.5 bg-[transparent] self-stretch rounded-181xl [background:linear-gradient(82.26deg,_#f0f4ff,_#b296ff)] flex flex-row items-center justify-center opacity-[0.99] whitespace-nowrap">
                                <div class="relative text-lgi-2 leading-[28.8px] font-medium font-inter text-black text-center flex items-center justify-center h-6">
                                  Log In
                                </div>
                              </button>
                              <button class="cursor-pointer [border:none] pt-[13px] px-5 pb-[15px] bg-white self-stretch rounded-181xl flex flex-row items-end justify-center opacity-[0.99] whitespace-nowrap hover:bg-gainsboro">
                                <img
                                  class="h-6 w-6 relative overflow-hidden shrink-0"
                                  alt=""
                                  src={googlelogo}
                                />
                                <div class="relative text-lgi-2 leading-[28.8px] font-medium font-inter text-black text-center">
                                  Sign In with Google
                                </div>
                              </button>
                            </div>
                            <div
                              class="h-5 relative text-base leading-[24px] font-inter text-white text-center flex items-center shrink-0 cursor-pointer"
                              onClick={handleSignUp}
                            >
                              <span>
                                {`Don't have an account? `}
                                <span class="[text-decoration:underline]">
                                  Sign Up
                                </span>
                              </span>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 bg-gray-100  flex flex-row">
                  <div class="relative">
                    <div class="">
                      <img
                        class=" absolute top-0 left-0 w-fit h-screen z-10 "
                        alt=""
                        src={divwlayout}
                      />
                    </div>
                    <div class="">
                      <img
                        class="relative top-40 left-20 w-fit h-fit  z-20"
                        loading="eager"
                        alt=""
                        src={image5}
                      />
                    </div>
                    <div class=" bg-red-900">
                      <b class="w-fit h-[173px] relative top-[120px] ml-44 flex text-transparent text-9xl !bg-clip-text [background:linear-gradient(131.11deg,_#fff_29%,_#af92ff_69%,_#6a42d8)]   items-center justify-center max-w-full  z-[21] ">
                        <h1 class="ml-15"> Secure, Safe & Fast</h1>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignInPage;
