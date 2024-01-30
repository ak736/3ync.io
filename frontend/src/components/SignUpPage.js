import { useState } from "react";
import FrameForm from "./FrameForm.js";

import SignInPage from "./SignInPage.js";
import Home from "./suryafiles/Home.js";
import image4 from "../content/images/image 4.png";
import googlelogo from "../content/images/62438070903162192f4aee7d_google.svg.png";

const SignUpPageLanding = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showLanding, setShowLanding] = useState(false);

  const handleSignIn = () => {
    setShowSignIn(true);
  };

  const handleMainPage = () => {
    setShowLanding(true);
  };

  return (
    <div className="">
      {showLanding ? (
        <Home />
      ) : (
        <div>
          {showSignIn ? (
            <SignInPage />
          ) : (
            <div className=" bg-gray-100 ">
              {" "}
              <div className="flex justify-center items-center">
                <div className="flex h-screen w-full max-w-screen-lg">
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
                              Create an account
                            </b>
                            <div className="flex flex-row items-start justify-start pt-0 pb-2 pr-px pl-0 text-lgi-2">
                              <div className="relative leading-[28.8px]">
                                <b className="text-white">
                                  {" "}
                                  Sign up and get 30 days free trial.{" "}
                                </b>
                              </div>
                            </div>

                            <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[17px]">
                              <FrameForm
                                formLogInForm14FullName="Full name*"
                                enterYourFullNamePlacehol="Enter your full name"
                                propWidth="166.5px"
                              />
                              <FrameForm
                                formLogInForm14FullName="Email*"
                                enterYourFullNamePlacehol="Your work email"
                                propWidth="132.2px"
                              />
                              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] min-h-[99px]">
                                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                                  <div className="relative text-base leading-[24px] font-inter text-white text-left">
                                    Password*
                                  </div>
                                  <div className="relative text-base [text-decoration:underline] leading-[24px] font-inter text-white text-left flex items-center h-5">
                                    Forgot your password?
                                  </div>
                                </div>
                                <div className="self-stretch rounded-xl bg-black flex flex-row items-center justify-start pt-5 px-[13px] pb-[19px] border-[1px] border-solid border-gray-200">
                                  <input
                                    className="w-[171.5px] [border:none] [outline:none] font-inter text-mid-6 bg-[transparent] h-[21px] relative text-darkgray text-left flex items-center"
                                    placeholder="Enter your password"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <button className="cursor-pointer [border:none] p-3.5 bg-[transparent] self-stretch rounded-181xl [background:linear-gradient(82.26deg,_#f0f4ff,_#b296ff)] flex flex-row items-center justify-center">
                                <div className="relative text-lgi-2 leading-[28.8px] font-medium font-inter text-black text-center flex items-center justify-center h-6">
                                  Submit
                                </div>
                              </button>
                              <button className="cursor-pointer [border:none] py-[13px] px-5 bg-white self-stretch rounded-181xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro">
                                <img
                                  className="h-6 w-6 relative overflow-hidden shrink-0"
                                  alt=""
                                  src={googlelogo}
                                />
                                <div className="relative text-lgi-2 leading-[28.8px] font-medium font-inter text-black text-center">
                                  Sign In with Google
                                </div>
                              </button>
                            </form>
                            <div
                              className="h-5 relative text-base leading-[24px] flex items-center shrink-0 cursor-pointer"
                              onClick={handleSignIn}
                            >
                              <span className="text-white">
                                {`Already have an account? `}
                                <span className="[text-decoration:underline]">
                                  Sign In
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2   rounded-r-lg shadow-lg">
                    {/* Content for second div */}
                    <div className=" flex flex-row items-start justify-start relative  text-[62.4px] ">
                      <img
                        className="h-screen flex-1 relative  overflow-hidden object-cover mq1425:flex-1"
                        loading="eager"
                        alt=""
                        src={image4}
                      />
                      <b className="absolute my-0 mx-[!important] top-[59px] left-[95px] tracking-[-2px] leading-[68.64px] flex items-center z-[1] mq825:text-[50px] mq825:leading-[55px] mq450:text-[37px] mq450:leading-[41px]">
                        <span className="w-full">
                          <p className="m-0 ml-10 text-transparent bg-gradient-to-br from-white via-af92ff to-6a42d8 bg-clip-text">
                            New ways to boost
                          </p>
                          <p className="m-0 ml-20 text-transparent bg-gradient-to-br from-white via-af92ff to-6a42d8 bg-clip-text">
                            productivity
                          </p>
                        </span>
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

export default SignUpPageLanding;
