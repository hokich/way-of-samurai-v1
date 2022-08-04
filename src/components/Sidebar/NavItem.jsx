import s from "./NavItem.module.scss";
import {NavLink} from "react-router-dom";


const NavItem = (props) => {
  return (
    <li className={s.item}>
      <NavLink className={s.link} to={props.link}>
        {props.icon}
        <span className={s.text}>{props.text}</span>
      </NavLink>
    </li>
  )
}

export default NavItem;
