import Link from 'next/link';
import { BiHomeCircle, BiUser } from 'react-icons/bi';
import {
  BsBell,
  BsBookmark,
  BsTwitter,
  BsEnvelope,
  BsThreeDots,
} from 'react-icons/bs';
import { HiOutlineHashtag } from 'react-icons/hi';
import { HiEnvelope } from 'react-icons/hi2';

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter,
  },
  {
    title: 'Home',
    icon: BiHomeCircle,
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag,
  },
  {
    title: 'Notifications',
    icon: BsBell,
  },
  {
    title: 'Messages',
    icon: BsEnvelope,
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark,
  },
  {
    title: 'Profile',
    icon: BiUser,
  },
];

const LeftSidebar = () => {
  return (
    <section className="fixed w-[275px] flex flex-col items-stretch h-screen px-6">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className="hover:bg-white/10 transition duration-200 rounded-3xl flex items-center justify-start w-fit space-x-4 text-2xl px-6 py-2"
            href="{`/${item.title.toLowercase()}`}"
            key={item.title}
          >
            <div>
              <item.icon />
            </div>
            <div>{item.title !== 'Twitter' && <div>{item.title}</div>}</div>
          </Link>
        ))}
        <button className="rounded-full m-4 p-4 bg-primary text-2xl text-center hover:bg-opacity-70 transition duration-200">
          Tweet
        </button>
      </div>
      <div>
        <button className="w-full rounded-full flex items-center justify-between space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-slate-400 w-12 h-12"></div>
            <div className="text-left text-sm">
              <div className="font-semibold">Saraelo</div>
              <div>@saraelo</div>
            </div>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </button>
      </div>
    </section>
  );
};

export default LeftSidebar;
