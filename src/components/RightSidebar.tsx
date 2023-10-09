import { BsSearch } from 'react-icons/bs';

const RightSidebar = () => {
  return (
    <section className="sticky top-2 w-[30%] h-screen flex flex-col items-stretch px-6 mt-2">
      <div>
        <div className="relative w-full h-full group">
          <input
            id="searchBox"
            type="text"
            placeholder="Search Twitter"
            className="outline-none peer w-full h-full rounded-xl py-4 pl-14 pr-4 bg-neutral-900/90 focus:border-primary focus:border"
          />
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 peer-focus:text-primary"
          >
            <BsSearch className="w-5 h-5" />
          </label>
        </div>
      </div>
      <div className="flex flex-col w-full bg-neutral-900 my-4 rounded-xl">
        <h3 className="font-bold text-xl px-4 my-4">Trends for you</h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="p-4 last:rounded-b-xl transition duration-200 hover:bg-white/10"
            >
              <div className="font-bold text-lg">#trending {i + 1}</div>
              <div className="text-xs text-neutral-400">35.4k</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full bg-neutral-900 my-4 rounded-xl">
        <h3 className="font-bold text-xl px-4 my-4">Who to follow</h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-4 last:rounded-b-xl transition duration-200 hover:bg-white/10"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 flex-none bg-neutral-600 rounded-full"></div>
                <div className="flex flex-col">
                  <div className="font-bold text-white">User User</div>
                  <div className="text-xs text-gray-500">@useruser1111</div>
                </div>
              </div>
              <button className="px-6 py-2 bg-white text-neutral-950 rounded-full">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
