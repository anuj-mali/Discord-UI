import PropTypes from "prop-types";

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
          classes="relative sidebar-item discord-icon group"
        />
        <hr className="sidebar-divider" />
        <SidebarItem
          type="image"
          src={animeImg}
          alt="Anime Girl"
          text="Anime Server"
          isActive={true}
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

const SidebarItem = ({ type, icon, src, alt, text, classes, isActive }) => {
  return (
    <>
      <div className={classes}>
        {type === "icon" ? (
          <>{icon}</>
        ) : (
          <>
            {isActive ? (
              <span className="active-server"></span>
            ) : (
              <span className="server-unread-messages"></span>
            )}
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
  classes: "relative sidebar-item group",
  isActive: false,
};

SidebarItem.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.element,
  src: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
  classes: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Sidebar;
