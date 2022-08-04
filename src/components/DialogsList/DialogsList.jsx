import styles from './DialogsList.module.scss'
import {NavLink} from "react-router-dom";

const DialogsList = ({dialogs}) => {
  return (
    <div className={styles.dialogsList}>
      {dialogs.map((dialog) => (
        <NavLink key={dialog.id} to={`/dialogs/${dialog.id}`} className={styles.dialog}>{dialog.userName}</NavLink>
      ))}
    </div>
  )
}

export default DialogsList