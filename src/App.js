import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="bg-[linear-gradient(117deg,_#141417_0%,_#141417_0.01%,_#090808_100%)]">
        <header class="absolute inset-x-0 top-0 z-50">
          <nav
            class="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div class="flex lg:flex-1">
              <a href="#" class="-m-1.5 p-1.5">
                <img src="/PresaleWier_Logo_Orange.svg" />
              </a>
            </div>

            <div class="hidden lg:flex lg:gap-x-12">
              <a
                href="#"
                class="text-sm/[13px] font-normal leading-6 text-white"
              >
                Home
              </a>
              <a
                href="#"
                class="text-sm/[13px] font-normal leading-6 text-white"
              >
                How it works
              </a>
              <a
                href="#"
                class="text-sm/[13px] font-normal leading-6 text-white"
              >
                Pricing
              </a>
              <a
                href="#"
                class="text-sm/[13px] font-normal leading-6 text-white"
              >
                Documentation
              </a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                class="rounded-md bg-[#FF922E] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Learn more
              </a>
            </div>
          </nav>
        </header>
        <div
          class="relative isolate px-6 pt-14 lg:px-8"
          style={{ backgroundImage: `url( '/Background_Hero_Section.svg' )` }}
        >
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div class="text-center">
              <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Seamless Blockchain Integration
              </h1>
              <p class="mt-6 text-lg leading-8 text-[#f8f8f8]">
                Elevate your site with PresaleWire: seamless blockchain
                integration, enhanced security, and scalable solutions for
                superior digital engagement.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  class="rounded-md bg-[#FF922E] px-3.5 py-2.5 text-sm font-semibold text-[#141417] shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Integrate now
                </a>
                <a
                  href="#"
                  class="text-sm font-semibold leading-6 text-[#FF922E] border-solid border-2 border-[#FF922E] px-3.5 py-2.5 rounded-md"
                >
                  Learn more
                </a>
              </div>
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
