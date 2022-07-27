import s from "./NavItem.module.scss";


const NavItem = (props) => {
  return (
    <li className={s.item}>
      <a className={s.link} href={props.link}>
        {props.icon}
        <span className={s.text}>{props.text}</span>
      </a>
    </li>
  )
}

export default NavItem;
