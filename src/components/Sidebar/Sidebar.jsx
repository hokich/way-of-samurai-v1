import IconProfile from "../icons/IconProfile";
import NavItem from "./NavItem";
import s from "./Sidebar.module.scss";
// import SelectUserContainer from "../SelectUser/SelectUserContainer";

const Sidebar = () => {
  const iconProfile = <IconProfile />
  return (
    <nav className={s.sidebar}>
      <ul className={s.list}>
        <NavItem link="/profile" text="Profile" icon={iconProfile} />
        <NavItem link="/dialogs" text="Messages" icon={iconProfile} />
        <NavItem link="/users" text="Users" icon={iconProfile} />
        <NavItem link="#news" text="News" icon={iconProfile} />
        <NavItem link="#music" text="Music" icon={iconProfile} />
        <NavItem link="#settings" text="Settings" icon={iconProfile} />
      </ul>
      {/*<SelectUserContainer/>*/}
    </nav>
  );
}

export default Sidebar;