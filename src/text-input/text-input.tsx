import {ChangeEvent, FC, useState} from "react";
import styles from './text-input.module.scss'

type PropsType = {
  label?: string
}

export const TextInput: FC<PropsType> = ({label }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.textBox}>
      <input
        onChange={handleChange}
        className={`${value ? styles.has_value : ""}`}
        id="textbox"
        type="text"
      />
      <span className="material-symbols-outlined">account_circle</span>
      <label htmlFor="textbox">{label}</label>
    </div>
  );
};
