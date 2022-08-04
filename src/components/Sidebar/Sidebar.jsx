import IconProfile from "../icons/IconProfile";
import NavItem from "./NavItem";
import s from "./Sidebar.module.scss";

const Sidebar = () => {
  const iconProfile = <IconProfile />
  return (
    <nav className={s.sidebar}>
      <ul className={s.list}>
        <NavItem link="/profile" text="Profile" icon={iconProfile} />
        <NavItem link="/dialogs" text="Messages" icon={iconProfile} />
        <NavItem link="#news" text="News" icon={iconProfile} />
        <NavItem link="#music" text="Music" icon={iconProfile} />
        <NavItem link="#settings" text="Settings" icon={iconProfile} />
      </ul>
    </nav>
  );
}

export default Sidebar;