export default function FooterBanner() {
    return (
      <div className="w-full bg-[#2f2f2f] text-white">
        <div className="flex flex-col space-y-2 sm:space-y-0 [@media(min-width:500px)]:flex-row [@media(min-width:500px)]:items-center [@media(min-width:500px)]:justify-between w-full max-w-[1340px] px-10 py-3 mx-auto">
          <div className="flex items-center space-x-4">
            <a href="#">
              <div id="logo" className="text-xl font-bold hover:cursor-pointer">
                LOGO
              </div>
            </a>
            <div className="flex flex-col">
              <span className="text-xs">
                RERA No.: UPRERAAGT10202
              </span>
              <span className="text-xs">
                https://up-rera.in/Agents
              </span>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold">
              @ANUBHAV SHARMA
            </span>
          </div>
        </div>
      </div>
    );
  }
  