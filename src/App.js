import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="bg-[linear-gradient(117deg,_#141417_0%,_#141417_0.01%,_#090808_100%)]">
        <div
          style={{ backgroundImage: `url( '/Background_Hero_Section.svg' )` }}
        >
          <header class=" inset-x-0 top-0 z-50">
            <nav
              class="flex items-center justify-between px-[100px] h-[79px]"
              aria-label="Global"
            >
              <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                  <img src="/PresaleWier_Logo_Orange.svg" />
                </a>
              </div>

              <div class=" flex items-center gap-x-[30px]">
                <a href="#" class="text-sm/[13px] font-normal text-white">
                  Home
                </a>
                <a href="#" class="text-sm/[13px] font-normal text-white">
                  How it works
                </a>
                <a href="#" class="text-sm/[13px] font-normal text-white">
                  Pricing
                </a>
                <a href="#" class="text-sm/[13px] font-normal text-white">
                  Documentation
                </a>
                <a
                  href="#"
                  class="flex items-center justify-center gap-2.5 p-[12px_20px] text-sm/[13px] font-normal rounded bg-[#FF922E] shadow-[0_0_10px_0_rgba(255, 146, 46, 0.15)] "
                >
                  Learn more
                </a>
              </div>
            </nav>
          </header>

          <div class="mx-auto max-w-2xl py-32 flex flex-col gap-10">
            <div class="flex flex-col gap-5 items-center">
              <h1 class="text-6xl font-semibold tracking-[-0.6px] text-white leading-normal">
                Seamless Blockchain Integration
              </h1>
              <img src="/Orange_Line.svg" class=" w-[209px]  mx-auto" />
              <h4 class="text-lg leading-7 text-[#f8f8f8cc] w-[497px]  font-normal">
                Elevate your site with PresaleWire: seamless blockchain
                integration, enhanced security, and scalable solutions for
                superior digital engagement.
              </h4>
            </div>
            <div class="flex items-center justify-center gap-x-5">
              <a
                href="#"
                class="rounded-sm bg-[#FF922E] text-[#141417] text-lg font-medium leading-normal px-6 py-[18px]"
              >
                Integrate now
              </a>
              <a
                href="#"
                class="text-lg font-medium leading-normal text-[#FF922E]  px-6 py-[18px] border-solid border-2 border-[#FF922E] "
              >
                Learn more
              </a>
            </div>
          </div>
          <div
            class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
