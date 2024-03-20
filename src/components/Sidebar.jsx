import { FaDiscord, FaCompass } from "react-icons/fa";
import { BsPlus, BsDownload } from "react-icons/bs";

import animeImg from "../assets/server-icons/anime.jpg";
import houseImg from "../assets/server-icons/house.png";
import pumpkinImg from "../assets/server-icons/pumpkin.png";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <SidebarItem
          icon={<FaDiscord size={30} />}
          text="Direct Messages"
          classes="sidebar-item discord-icon group"
        />
        <hr className="sidebar-divider" />
        <SidebarItem
          type="image"
          src={animeImg}
          alt="Anime Girl"
          text="Anime Server"
        />
        <SidebarItem
          type="image"
          src={houseImg}
          alt="House"
          text="Dungeon & Dragons"
        />
        <SidebarItem
          type="image"
          src={pumpkinImg}
          alt="Pumpkin Cat"
          text="Pixel Arts"
        />
        <SidebarItem icon={<BsPlus size={32} />} text="Add a server" />
        <SidebarItem
          icon={<FaCompass size={24} />}
          text="Explore Discoverable Servers"
        />
        <hr className="sidebar-divider" />
        <SidebarItem icon={<BsDownload size={24} />} text="Download Apps" />
      </div>
    </>
  );
};

const SidebarItem = ({ type, icon, src, alt, text, classes }) => {
  return (
    <>
      <div className={classes}>
        {type === "icon" ? (
          <>{icon}</>
        ) : (
          <>
            <img src={src} alt={alt} className="sidebar-item m-0" />
          </>
        )}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </div>
    </>
  );
};

SidebarItem.defaultProps = {
  type: "icon",
  text: "tooltip 💡",
  classes: "sidebar-item group",
};

export default Sidebar;
