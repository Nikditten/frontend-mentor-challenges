import { FC, PropsWithChildren } from "react";

const InfoContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" h-[33vh] lg:h-40 w-10/12 md:w-3/4 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 z-50 bg-white rounded-2xl flex flex-col lg:flex-row justify-evenely items-center gap-0 p-2 lg:gap-8 lg:p-8">
      {children}
    </div>
  );
};

export default InfoContainer;
