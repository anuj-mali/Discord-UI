import { FaChevronDown, FaCalendarDay } from "react-icons/fa";

const Channels = () => {
  return (
    <div className="fixed bg-gray-800 h-screen w-60 text-white overflow-scroll flex flex-col">
      <section className="topbar hover:bg-gray-700 cursor-pointer">
        <div className="">Project Gang</div>
        <div className="text-gray-400">
          <FaChevronDown size={12} />
        </div>
      </section>
      <section className="mt-4 mx-2 py-1 text-gray-500 font-semibold hover:bg-gray-700 group cursor-pointer rounded-md">
        <div className="flex gap-2 px-2 items-center">
          <FaCalendarDay size={18} />
          <p className="group-hover:text-gray-400">Events</p>
        </div>
        <div></div>
        <div></div>
      </section>
    </div>
  );
};

export default Channels;
