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
          <div className="mx-auto  pt-[55px] flex flex-col gap-10">
            <div className="flex flex-col gap-5 items-center ">
              <h1 className="text-6xl font-semibold tracking-[-0.6px] text-[#F9F9F9] leading-normal w-[615px]">
                Seamless Blockchain Integration
              </h1>
              <img src="/Orange_Line.svg" className=" w-[209px]  mx-auto" />
              <h4 className="text-lg leading-7 text-[#f8f8f8cc] w-[497px] font-normal">
                Elevate your site with PresaleWire: seamless blockchain
                integration, enhanced security, and scalable solutions for
                superior digital engagement.
              </h4>
            </div>
            <div className="flex items-center justify-center gap-x-5 ">
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
        </div>
        <div className="mx-auto p-[100px] flex flex-col gap-10 bg-[linear-gradient(117deg,_#141417_0%,_#141417_0.01%,_#090808_100%)]">
          <div className="flex flex-col gap-5 items-center ">
            <h1 className="text-[35px] leading-normal font-semibold tracking-[-0.35px] text-[#F9F9F9] w-[615px]">
              How it works
            </h1>
            <img src="/Orange_Line.svg" className=" w-[209px]  mx-auto" />
            <p className=" text-lg leading-7 text-[#f8f8f8cc] w-[526px] font-normal">
              Seamlessly integrate blockchain into your platform with
              PresaleWire. Follow these easy steps to boost your site’s
              capabilities and security for a superior user experience.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[549px] flex flex-col text-left">
              <h3 className="text-3xl text-transparent bg-clip-text bg-[linear-gradient(90deg,_#A85000_0%,_#FF7A00_100%)]  leading-normal font-medium tracking-[-0.3px]">
                Choose your modules
              </h3>
              <p className="text-lg leading-7 text-[#f8f8f8cc] font-normal">
                Choose from customizable frontend modules that seamlessly match
                your site's style. Perfect for transactions, wallet management,
                or token offerings, we ensure a perfect fit.
              </p>
            </div>
            <img src="/Asset_11_HowitWorks.svg" />
          </div>

          <div className="flex justify-between items-center">
            <img src="/Asset_22_HowitWorks.svg" />
            <div className="w-[564px] flex flex-col text-right">
              <h3 className="text-3xl text-transparent bg-clip-text bg-[linear-gradient(90deg,_#A85000_0%,_#FF7A00_100%)] leading-normal font-medium tracking-[-0.3px]">
                Integrate Blockchain Contracts
              </h3>
              <p className="text-lg leading-7 text-[#f8f8f8cc] font-normal">
                Choose from customizable frontend modules that seamlessly match
                your site's style. Perfect for transactions, wallet management,
                or token offerings, we ensure a perfect fit.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="w-[549px] flex flex-col text-left">
              <h3 className="text-3xl text-transparent bg-clip-text bg-[linear-gradient(90deg,_#A85000_0%,_#FF7A00_100%)]  leading-normal font-medium tracking-[-0.3px]">
                Set up Backend Services
              </h3>
              <p className="text-lg leading-7 text-[#f8f8f8cc] font-normal">
                Connect your platform with our robust backend services for
                aggregation and tracking. Monitor performance, manage
                transactions, and gather insights—all in one place.
              </p>
            </div>
            <img src="/Asset_3_HowitWorks.svg" className="mr-[-100px]" />
          </div>
        </div>

        <div className="mx-auto px-[100px] bg-[linear-gradient(117deg,_#141417_0%,_#141417_0.01%,_#090808_100%)]">
          <div className="flex justify-between items-end">
            <div className="w-[643px] flex flex-col text-left gap-5 py-[100px]">
              <h3 className=" text-[35px] leading-normal font-semibold tracking-[-0.35px] text-[#F9F9F9]">
                Transparent pricing for{" "}
                <span
                  className=" text-transparent bg-clip-text bg-[linear-gradient(90deg,_#A85000_0%,_#FF7A00_100%)]
                   underline decoration-[linear-gradient(90deg,_#A85000_0%,_#FF7A00_100%)] "
                >
                  your success
                </span>
              </h3>
              <img src="/Orange_Line.svg" className=" w-[209px]" />
              <p className="text-lg leading-7 text-[#f8f8f8cc] font-normal">
                At PresaleWire, we align our success with yours. We charge a
                straightforward fee of{" "}
                <span
                  className=" text-transparent bg-clip-text bg-[linear-gradient(90deg,_#A85000_0%,_#FF7A00_100%)]
                   underline decoration-[linear-gradient(90deg,_#A85000_0%,_#FF7A00_100%)] "
                >
                  3%
                </span>{" "}
                on the funds raised through your presale. This means the more
                successful your presale, the better for both of us.
              </p>
            </div>
            <div className="w-[564px] flex flex-col items-end">
              <img src="/Coin.svg" className="w-[214px] h-[214px]" />
              <img src="/Coins.svg" className="mr-[-100px]" />
            </div>
          </div>
        </div>

        <div
          className="mx-auto p-[100px] flex justify-between items-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url( '/FAQ_Section.svg' )`,
          }}
        >
          <div className="flex items-center justify-center gap-x-5 ">
            <a
              href="#"
              className="text-lg font-medium leading-normal px-6 py-[18px]  bg-[#FF922E] text-[#141417] rounded-sm"
            >
              See tutorials
            </a>
            <a
              href="#"
              className="text-lg font-medium leading-normal text-[#FF922E] px-6 py-[18px] border-solid border border-[#FF922E]  bg-[#221A13] rounded-sm"
            >
              See FAQs
            </a>
          </div>
          <div className="w-[666px] flex flex-col items-end gap-5">
            <h3 className="text-[35px] leading-normal font-semibold tracking-[-0.35px] text-[#F9F9F9]">
              Tutorials and FAQs
            </h3>
            <img src="/Orange_Line.svg" className=" w-[209px]" />
            <p className="text-lg leading-7 text-[#f8f8f8cc] font-normal text-right">
              Step-by-step tutorials will walk you through various processes,
              from basic setups to advanced configurations. Got questions? Our
              FAQs address the most common inquiries, providing you with quick
              and clear answers.
            </p>
          </div>
        </div>
        <div className="bg-[#FF922E] py-[70px] px-[100px] flex flex-col items-center gap-[35px]">
          <div className="flex flex-col items-center gap-[25px]">
            <img src="/PresaleWier_Logo_Grey.svg" />
            <div className="flex gap-x-[50px]">
              <a
                href="#"
                className="text-[17px] font-medium tracking-[0.17px] leading-normal  text-[#141417]"
              >
                Home
              </a>
              <a
                href="#"
                className="text-[17px] font-medium tracking-[0.17px] leading-normal  text-[#141417]"
              >
                How it works
              </a>
              <a
                href="#"
                className="text-[17px] font-medium tracking-[0.17px] leading-normal  text-[#141417]"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-[17px] font-medium tracking-[0.17px] leading-normal  text-[#141417]"
              >
                Documentation
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[20px]">
            <p className="text-sm font-normal leading-[22.4px] text-[#141417e6] w-[741px]">
              PresaleWire provides a comprehensive blockchain integration
              solution with customizable modules, contracts for networks like
              Ethereum and Solana, and robust backend services. It charges a 3%
              fee on presale funds, supporting clients with clear pricing and
              extensive documentation. This platform simplifies blockchain
              adoption, enhancing transactions and user engagement digitally.
            </p>
            <div className="flex items-center gap-x-[15px]">
              <img src="/mingcute_social-x-line.svg" />
              <img src="/ic_baseline-discord.svg" />
            </div>
            <p className="text-sm font-normal leading-normal tracking-[0.14px]">
              2023 PresaleWire - All rights reserved
            </p>
          </div>

          <div className="flex gap-x-[35px]">
            <a
              href="#"
              className="underline text-sm font-normal tracking-[0.14px] leading-normal  text-[#141417]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="underline text-sm font-normal tracking-[0.14px] leading-normal  text-[#141417]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
