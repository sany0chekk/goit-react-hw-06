import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import clsx from "clsx";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.item}>
      <div className={css.content}>
        <p className={clsx(css.text, css.name)}>
          <FaUser /> {name}
        </p>
        <p className={clsx(css.text, css.number)}>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
