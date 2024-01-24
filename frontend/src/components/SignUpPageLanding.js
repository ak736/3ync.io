import { useCallback } from "react";
import Fullnameinputform from "./Fullnameinputform.js";

const SignUpPageLanding = () => {
  const onDivnavigationLeftContainerClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  const onAlreadyHaveAnClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[89px] box-border gap-[69px] tracking-[normal] text-center text-[24px] text-white font-inter mq825:gap-[34px] mq450:gap-[17px] mq1425:flex-wrap mq1425:pl-5 mq1425:pr-5 mq1425:pb-5 mq1425:box-border">
      <div className="w-[541px] flex flex-col items-start justify-start pt-11 px-0 pb-0 box-border min-w-[541px] max-w-full lg:pt-[29px] lg:box-border mq825:min-w-full mq450:pt-5 mq450:box-border mq1425:flex-1">
        <div className="self-stretch flex flex-col items-center justify-start gap-[125px] max-w-full mq825:gap-[62px] mq450:gap-[31px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[75px] mq825:gap-[37px] mq450:gap-[19px]">
            <div
              className="w-40 flex flex-row items-center justify-start py-[5px] px-0 box-border relative cursor-pointer"
              onClick={onDivnavigationLeftContainerClick}
            >
              <div className="flex flex-col items-start justify-end py-0 pr-5 pl-0">
                <h3 className="m-0 relative text-inherit leading-[28.8px] font-bold font-inherit whitespace-nowrap">
                  <span>3ync</span>
                  <span className="text-darkorchid">.io</span>
                </h3>
              </div>
              <div className="absolute my-0 mx-[!important] top-[8px] right-[-53.7px] text-mid-6 leading-[26.4px] font-medium text-left flex items-center h-[21px] z-[1]">
                Features
              </div>
            </div>
            <nav className="m-0 flex-1 flex flex-row items-start justify-start py-0 pr-1 pl-0 gap-[21px] text-left text-mid-6 text-white font-inter mq450:hidden">
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
          <div className="w-[527px] flex flex-row items-start justify-start py-0 pr-[27px] pl-5 box-border max-w-full text-[43.2px]">
            <div className="flex-1 flex flex-col items-center justify-start gap-[25px] max-w-full">
              <b className="relative tracking-[-2px] leading-[51.84px] inline-block text-transparent !bg-clip-text [background:linear-gradient(106.13deg,_#fff_32%,_#af92ff_71%,_#426dd8)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-w-full mq825:text-[35px] mq825:leading-[41px] mq450:text-[26px] mq450:leading-[31px]">
                Create an account
              </b>
              <div className="flex flex-row items-start justify-start pt-0 pb-2 pr-px pl-0 text-lgi-2">
                <div className="relative leading-[28.8px]">
                  Sign up and get 30 days free trial.
                </div>
              </div>
              <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[17px]">
                <Fullnameinputform
                  formLogInForm14FullName="Full name*"
                  enterYourFullNamePlacehol="Enter your full name"
                  propWidth="166.5px"
                />
                <Fullnameinputform
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
                    src="/62438070903162192f4aee7d-googlesvg.svg"
                  />
                  <div className="relative text-lgi-2 leading-[28.8px] font-medium font-inter text-black text-center">
                    Sign In with Google
                  </div>
                </button>
              </form>
              <div
                className="h-5 relative text-base leading-[24px] flex items-center shrink-0 cursor-pointer"
                onClick={onAlreadyHaveAnClick}
              >
                <span>
                  {`Already have an account? `}
                  <span className="[text-decoration:underline]">Sign In</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[857px] flex flex-row items-start justify-start relative min-w-[857px] max-w-full text-[62.4px] lg:min-w-full mq1425:flex-1">
        <img
          className="h-[1019px] flex-1 relative max-w-full overflow-hidden object-cover mq1425:flex-1"
          loading="eager"
          alt=""
          src="/image-4@2x.png"
        />
        <b className="h-[172px] w-[653px] absolute my-0 mx-[!important] top-[59px] left-[95px] tracking-[-2px] leading-[68.64px] flex items-center z-[1] mq825:text-[50px] mq825:leading-[55px] mq450:text-[37px] mq450:leading-[41px]">
          <span className="w-full">
            <p className="m-0 [background:linear-gradient(131.11deg,_#fff_29%,_#af92ff_69%,_#6a42d8)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              New ways to boost
            </p>
            <p className="m-0 [background:linear-gradient(143.67deg,_#fff_29%,_#af92ff_69%,_#6a42d8)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              productivity
            </p>
          </span>
        </b>
      </div>
    </div>
  );
};

export default SignUpPageLanding;
