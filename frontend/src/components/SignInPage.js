import divwlayout from "../content/images/div.w-layout-grid.png";
import image5 from "../content/images/image_5-removebg-preview.png";
import { useState } from "react";
import Home from "../components/suryafiles/Home";
import SignUpPageLanding from "../components/SignUpPageLanding";
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
    <div className="flex flex-col h-screen bg-gradient-to-t from-slate-900 from-10% via-violet-600 via-55% to-purple-50 to-90%">
      <div className="flex flex-col items-center justify-center min-h-fit w-full sm:mt-4 mt-0">
        {showLanding ? (
          <Home />
        ) : (
          <div>
            {showSignUp ? (
              <SignUpPageLanding />
            ) : (
              <div class="w-full h-screen relative bg-gray-100 overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[89px] box-border gap-[81px] tracking-[normal] text-center text-[24px] text-white font-inter lg:flex-wrap lg:pl-5 lg:pr-5 lg:pb-5 lg:box-border mq750:gap-[40px] mq450:gap-[20px]">
                <div class="w-[541px] flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border min-w-[541px] max-w-full lg:flex-1 mq750:pt-9 mq750:box-border mq750:min-w-full">
                  <div class="self-stretch flex flex-col items-center justify-start gap-[120px] max-w-full mq750:gap-[60px] mq450:gap-[30px]">
                    <div class="self-stretch flex flex-row items-center justify-start gap-[75px] mq750:gap-[37px] mq450:gap-[19px]">
                      <div
                        class="w-40 flex flex-row items-center justify-start py-[5px] px-0 box-border relative cursor-pointer"
                        onClick={handleMainPage}
                      >
                        <div class="flex flex-col items-start justify-end py-0 pr-5 pl-0">
                          <h3 class="m-0 relative text-inherit leading-[28.8px] font-bold font-inherit whitespace-nowrap">
                            <span>3ync</span>
                            <span class="text-darkorchid">.io</span>
                          </h3>
                        </div>
                        <div class="absolute my-0 mx-[!important] top-[8px] right-[-53.7px] text-mid-6 leading-[26.4px] font-medium text-left flex items-center h-[21px] z-[1]">
                          Features
                        </div>
                      </div>
                      <nav class="m-0 flex-1 flex flex-row items-start justify-start py-0 pr-1 pl-0 gap-[21px] text-left text-mid-6 text-white font-inter mq450:hidden">
                        <div class="flex-1 relative leading-[26.4px] font-medium flex items-center h-[21px] whitespace-nowrap">
                          About us
                        </div>
                        <div class="relative leading-[26.4px] font-medium flex items-center h-[21px]">
                          Pricing
                        </div>
                        <div class="relative leading-[26.4px] font-medium flex items-center h-[21px]">
                          Blog
                        </div>
                        <div class="flex-1 relative leading-[26.4px] font-medium flex items-center h-[21px]">
                          Contact
                        </div>
                      </nav>
                    </div>
                    <div class="w-[527px] flex flex-row items-start justify-start py-0 pr-5 pl-[27px] box-border max-w-full text-[43.2px]">
                      <div class="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-0.5 box-border gap-[36px] opacity-[0.93] max-w-full mq750:gap-[18px]">
                        <div class="flex flex-col items-center justify-start py-0 px-[19px] box-border gap-[25px] max-w-full shrink-0">
                          <b class="relative tracking-[-2px] leading-[51.84px] text-transparent !bg-clip-text [background:linear-gradient(103.11deg,_#fff_32%,_#af92ff_71%,_#426dd8)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq750:text-[35px] mq750:leading-[41px] mq450:text-[26px] mq450:leading-[31px]">
                            Sign in to your account
                          </b>
                          <div class="relative text-lgi-2 leading-[28.8px] inline-block max-w-full">
                            Enter your credentials to view all insights
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
                <div class="w-full h-screen flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[521px] max-w-full text-[62.4px] mq750:min-w-full">
                  <div class="w-full h-screen self-stretch flex flex-col items-start justify-start pt-[174px] px-0 pb-1.5 box-border relative gap-[1px] max-w-full shrink-0 mq450:pt-[73px] mq450:box-border mq1050:pt-[113px] mq1050:pb-5 mq1050:box-border">
                    <div class="w-full h-screen">
                      <img
                        class="w-full h-screen absolute my-0 mx-[!important]  top-[0px] right-[0px] bottom-[0px] rounded-[30px] max-h-full overflow-hidden object-cover"
                        alt=""
                        src={divwlayout}
                      />
                      <div class="h-screen self-stretch flex flex-row items-start justify-start py-0 pr-px pl-[33px] box-border max-w-full">
                        <img
                          class="h-screen flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                          loading="eager"
                          alt=""
                          src={image5}
                        />
                      </div>
                    </div>
                    <b class="w-[777px] h-[173px] relative tracking-[-2px] leading-[68.64px] flex text-transparent !bg-clip-text [background:linear-gradient(131.11deg,_#fff_29%,_#af92ff_69%,_#6a42d8)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] items-center justify-center shrink-0 max-w-full pr-5 z-[1] mq750:text-[50px] mq750:leading-[55px] mq450:text-[37px] mq450:leading-[41px]">{`Secure, Safe & Fast`}</b>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInPage;
