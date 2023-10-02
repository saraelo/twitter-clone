import { BsChat, BsDot, BsThreeDots } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai';
import { IoShareOutline, IoStatsChart } from 'react-icons/io5';

import LeftSidebar from '@/components/LeftSidebar';

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black text-white">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Timeline */}
        {/* TODO: Refactor code into a component */}
        <main className="text-white ml-[275px] w-full max-w-[600px] flex flex-col min-h-screen h-full border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="sticky top-0 text-xl font-bold p-6 backdrop-blur bg-black/10">
            Home
          </h1>
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
          <div className="flex flex-col">
            {Array.from({ length: 10 })
              .fill(undefined)
              .map((_, i) => (
                <div
                  key={i}
                  className="border-b-[0.5px] border-gray-600 py-4 px-3 flex space-x-4"
                >
                  <div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center w-full justify-between">
                      <div className="flex items-center space-x-1 w-full">
                        <div className="font-bold">Saraelo</div>
                        <div className="text-gray-500"> @saraelo</div>
                        <div className="text-gray-500">
                          <BsDot />
                        </div>
                        <div className="text-gray-500">2 hour ago</div>
                      </div>
                      <div>
                        <BsThreeDots />
                      </div>
                    </div>
                    <div className="text-white text-base my-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deleniti explicabo illo quisquam omnis, qui hic culpa
                      magni nihil at incidunt!
                    </div>
                    <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2" />
                    <div className="w-full flex items-center justify-start space-x-20 mt-2">
                      {/* TODO: Refactor code into a component */}
                      <div className="cursor-pointer rounded-full hover:bg-white/20 transition duration-200 p-3">
                        <BsChat />
                      </div>
                      <div className="cursor-pointer rounded-full hover:bg-white/20 transition duration-200 p-3">
                        <AiOutlineRetweet />
                      </div>
                      <div className="cursor-pointer rounded-full hover:bg-white/20 transition duration-200 p-3">
                        <AiOutlineHeart />
                      </div>
                      <div className="cursor-pointer rounded-full hover:bg-white/20 transition duration-200 p-3">
                        <IoStatsChart />
                      </div>
                      <div className="cursor-pointer rounded-full hover:bg-white/20 transition duration-200 p-3">
                        <IoShareOutline />
                      </div>
                    </div>
                  </div>
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
