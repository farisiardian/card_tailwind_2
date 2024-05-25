import "@src/App.css";

function App() {
  return (
    <>
      <div className="flex min-h-screen relative items-center justify-center w-full">
        <div className="absolute top-8">hover over the card😁</div>
        <div className="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
          <div className="text-gray-500 group-hover:scale-105 transition-all">
            <svg
              className="w-16 h-16"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            </svg>
          </div>
          <div className="group-hover:pb-10 transition-all duration-500 delay-200">
            <h1 className="font-semibold text-gray-700">Tamani Phiri</h1>
            <p className="text-gray-500 text-sm">@senior_developer</p>
          </div>
          <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
            <div className="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
              <a className="hover:scale-110 transition-all duration-500 delay-200">
                <svg
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 1024 1024"
                >
                </svg>
              </a>
              <a className="hover:scale-110 transition-all duration-500 delay-200">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <path d="M22 6l-10 7L2 6"></path>
                </svg>
              </a>
              <a className="hover:scale-110 transition-all duration-500 delay-200">
                <svg
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 960 1000"
                >
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
