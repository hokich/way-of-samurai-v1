import IconLogoFull from "./icons/IconLogoFull";
import s from "./Header.module.scss"


const Header = () => {
  return (
    <div className={s.layout}>
      <header className={s.header}>
        <a href="/" className={s.logoLink}>
          <IconLogoFull/>
        </a>
      </header>
    </div>
  );
}

export default Header;