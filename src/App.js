import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg-[linear-gradient(117deg,_#141417_0%,_#141417_0.01%,_#090808_100%)]">
        <div
          className=" bg-no-repeat bg-cover"
          style={{ backgroundImage: `url( '/Background_Hero_Section.svg' )` }}
        >
          <nav
            className="flex items-center justify-between px-[100px] h-[79px]"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <img src="/PresaleWier_Logo_Orange.svg" />
              </a>
            </div>

            <div className=" flex items-center gap-x-[30px]">
              <a href="#" className="text-sm/[13px] font-normal text-white">
                Home
              </a>
              <a href="#" className="text-sm/[13px] font-normal text-white">
                How it works
              </a>
              <a href="#" className="text-sm/[13px] font-normal text-white">
                Pricing
              </a>
              <a href="#" className="text-sm/[13px] font-normal text-white">
                Documentation
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2.5 p-[12px_20px] text-sm/[13px] font-normal rounded bg-[#FF922E] shadow-[0_0_10px_0_rgba(255, 146, 46, 0.15)] "
              >
                Learn more
              </a>
            </div>
          </nav>
          <div className="mx-auto  pt-32 flex flex-col gap-10">
            <div className="flex flex-col gap-5 items-center ">
              <h1 className="text-6xl font-semibold tracking-[-0.6px] text-white leading-normal w-[615px]">
                Seamless Blockchain Integration
              </h1>
              <img src="/Orange_Line.svg" className=" w-[209px]  mx-auto" />
              <h4 className="text-lg leading-7 text-[#f8f8f8cc] w-[497px]  font-normal">
                Elevate your site with PresaleWire: seamless blockchain
                integration, enhanced security, and scalable solutions for
                superior digital engagement.
              </h4>
            </div>
            <div className="flex items-center justify-center gap-x-5">
              <a
                href="#"
                className="rounded-sm bg-[#FF922E] text-[#141417] text-lg font-medium leading-normal px-6 py-[18px]"
              >
                Integrate now
              </a>
              <a
                href="#"
                className="text-lg font-medium leading-normal text-[#FF922E]  px-6 py-[18px] border-solid border-2 border-[#FF922E] "
              >
                Learn more
              </a>
            </div>
            <div className="flex justify-center">
              <img src="/WirePresale_HeroSection.svg" />
            </div>
          </div>
          <div className="mx-auto p-[100px] flex flex-col gap-10">
            <div className="flex flex-col gap-5 items-center ">
              <h1 className="text-6xl font-semibold tracking-[-0.6px] text-white leading-normal w-[615px]">
                How it works
              </h1>
              <img src="/Orange_Line.svg" className=" w-[209px]  mx-auto" />
              <h4 className="text-lg leading-7 text-[#f8f8f8cc] w-[526px]  font-normal">
                Seamlessly integrate blockchain into your platform with
                PresaleWire. Follow these easy steps to boost your site’s
                capabilities and security for a superior user experience.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
