import { useMemo } from "react";

const Fullnameinputform = ({
  formLogInForm14FullName,
  enterYourFullNamePlacehol,
  propWidth,
}) => {
  const enterYourFullStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch h-[99px] flex flex-col items-start justify-start gap-[8px] text-left text-base text-white font-inter">
      <div className="relative leading-[24px]">{formLogInForm14FullName}</div>
      <div className="self-stretch rounded-xl bg-black flex flex-row items-center justify-start pt-5 px-[13px] pb-[19px] border-[1px] border-solid border-gray-200">
        <input
          className="w-[166.5px] [border:none] [outline:none] font-inter text-mid-6 bg-[transparent] h-[21px] relative text-darkgray text-left flex items-center"
          placeholder={enterYourFullNamePlacehol}
          type="text"
          style={enterYourFullStyle}
        />
      </div>
    </div>
  );
};

export default Fullnameinputform;
