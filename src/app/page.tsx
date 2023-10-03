import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import Timeline from '@/components/Timeline';

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black text-white">
      <div className="max-w-[100vw] flex relative">
        <LeftSidebar />
        <Timeline />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
