import LeftSidebar from '@/components/LeftSidebar';
const Home = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative bg-black text-white">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Timeline */}
        <main className="text-white ml-[275px] w-[600px] flex flex-col min-h-screen h-full border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold my-4 p-6">Home</h1>
          <div className="relative flex items-stretch py-4 px-4 space-x-2 border-b-[0.5px] border-t-[0.5px] border-gray-600">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            <div className="w-full h-full flex flex-col">
              <input
                type="text"
                className="p-4 border-b-[0.5px] border-gray-600 w-full h-full bg-transparent outline-none border-none text-2xl placeholder:text-gray-600"
                placeholder="What's happening?"
              />

              <div className="w-full flex justify-between items-center">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className="rounded-full w-full px-4 py-4 bg-primary font-bold text-lg text-center hover:bg-opacity-70 transition duration-200">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-color">
            {Array.from({ length: 5 })
              .fill(undefined)
              .map((_, i) => (
                <div
                  key={i}
                  className="border-t-[0.5px] border-b-[0.5px] px-4 flex space-x-4"
                >
                  <div>Avatar</div>
                  <div></div>
                </div>
              ))}
          </div>
        </main>

        {/* Right Sidebar */}
        {/* <section className="text-white">Right sidebar</section> */}
      </div>
    </div>
  );
};

export default Home;
