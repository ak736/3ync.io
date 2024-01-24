import { useCallback } from "react";

const LandingPage = () => {
  const onDivnavigationLeftContainerClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  const onDontHaveAnClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-row items-end justify-start pt-14 pb-px pr-[11px] pl-[89px] box-border gap-[114px] tracking-[normal] text-center text-[24px] text-white font-inter lg:flex-wrap mq750:gap-[57px] mq750:pl-11 mq750:box-border mq450:gap-[28px] mq450:pl-5 mq450:box-border">
      <div className="w-[541px] flex flex-col items-start justify-start min-w-[541px] min-h-[964px] max-w-full shrink-0 lg:flex-1 lg:min-h-[auto] mq750:min-w-full">
        <div className="self-stretch flex flex-col items-center justify-start gap-[120px] max-w-full mq750:gap-[60px] mq450:gap-[30px]">
          <div className="self-stretch flex flex-row items-center justify-start gap-[75px] mq750:gap-[37px] mq450:gap-[19px]">
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
          <div className="w-[527px] flex flex-row items-start justify-start py-0 pr-5 pl-[27px] box-border max-w-full text-[43.2px]">
            <div className="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-0.5 box-border gap-[36px] opacity-[0.93] max-w-full mq750:gap-[18px]">
              <div className="flex flex-col items-center justify-start py-0 px-[19px] box-border gap-[25px] max-w-full shrink-0">
                <b className="relative tracking-[-2px] leading-[51.84px] text-transparent !bg-clip-text [background:linear-gradient(103.11deg,_#fff_32%,_#af92ff_71%,_#426dd8)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq750:text-[35px] mq750:leading-[41px] mq450:text-[26px] mq450:leading-[31px]">
                  Sign in to your account
                </b>
                <div className="relative text-lgi-2 leading-[28.8px] inline-block max-w-full">
                  Enter your credentials to view all insights
                </div>
              </div>
              <form className="m-0 self-stretch flex flex-col items-center justify-start gap-[24px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                  <div className="relative text-base leading-[24px] font-inter text-white text-left opacity-[0.99]">
                    Email*
                  </div>
                  <div className="self-stretch rounded-xl bg-black flex flex-row items-center justify-start pt-5 px-[13px] pb-[19px] opacity-[0.99] border-[1px] border-solid border-gray-200">
                    <input
                      className="w-[132.2px] [border:none] [outline:none] font-inter text-mid-6 bg-[transparent] h-[21px] relative text-darkgray text-left flex items-center"
                      placeholder="Your work email"
                      type="text"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                  <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
                    <div className="relative text-base leading-[24px] font-inter text-white text-left opacity-[0.99]">
                      Password*
                    </div>
                    <div className="relative text-base [text-decoration:underline] leading-[24px] font-inter text-white text-left flex items-center h-5 opacity-[0.99]">
                      Forgot your password?
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-black flex flex-row items-center justify-start pt-5 px-[13px] pb-[19px] opacity-[0.99] border-[1px] border-solid border-gray-200">
                    <input
                      className="w-[171.5px] [border:none] [outline:none] font-inter text-mid-6 bg-[transparent] h-[21px] relative text-darkgray text-left flex items-center"
                      placeholder="Enter your password"
                      type="text"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
                  <button className="cursor-pointer [border:none] p-3.5 bg-[transparent] self-stretch rounded-181xl [background:linear-gradient(82.26deg,_#f0f4ff,_#b296ff)] flex flex-row items-center justify-center opacity-[0.99] whitespace-nowrap">
                    <div className="relative text-lgi-2 leading-[28.8px] font-medium font-inter text-black text-center flex items-center justify-center h-6">
                      Log In
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] pt-[13px] px-5 pb-[15px] bg-white self-stretch rounded-181xl flex flex-row items-end justify-center opacity-[0.99] whitespace-nowrap hover:bg-gainsboro">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/62438070903162192f4aee7d-googlesvg.svg"
                    />
                    <div className="relative text-lgi-2 leading-[28.8px] font-medium font-inter text-black text-center">
                      Sign In with Google
                    </div>
                  </button>
                </div>
                <div
                  className="h-5 relative text-base leading-[24px] font-inter text-white text-center flex items-center shrink-0 cursor-pointer"
                  onClick={onDontHaveAnClick}
                >
                  <span>
                    {`Don't have an account? `}
                    <span className="[text-decoration:underline]">Sign Up</span>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center relative min-w-[492px] max-w-full shrink-0 text-[62.4px] mq750:min-w-full">
        <b className="self-stretch h-[173px] relative tracking-[-2px] leading-[68.64px] flex text-transparent !bg-clip-text [background:linear-gradient(131.11deg,_#fff_29%,_#af92ff_69%,_#6a42d8)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] items-center justify-center shrink-0 mq750:text-[50px] mq750:leading-[55px] mq450:text-[37px] mq450:leading-[41px]">{`Secure, Safe & Fast`}</b>
        <div className="w-[801px] my-0 mx-[!important] absolute top-[-845px] left-[-32px] flex flex-row items-center justify-end pt-[174px] pb-[180px] pr-px pl-8 box-border">
          <img
            className="w-full absolute my-0 mx-[!important] h-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[30px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
            alt=""
            src="/div.w-layout-grid.png"
          />

          <img
            className="h-[671px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
            loading="eager"
            alt=""
            src="/image-5@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
