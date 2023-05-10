import React, {ChangeEvent, FC, useRef} from 'react';

type PropsType = {
  showPassword: boolean;
  toggleShowPassword: VoidFunction;
  value: string
  onChange: (value: string) => void
}

export const Password: FC<PropsType> = ({showPassword, toggleShowPassword, value, onChange}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleShowPasswordHandler = () => {
    inputRef.current?.focus();
    toggleShowPassword();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value)

  return (
    <div className="textBox password">
      <input
        ref={inputRef}
        type={showPassword ? "text" : "password"}
        required
        onChange={onChangeHandler}
      />
      <label>Password</label>
      <span className="material-symbols-outlined"> lock </span>
      <button type="button" onClick={toggleShowPasswordHandler}>
        <span className="material-symbols-outlined">
          {showPassword ? "visibility_off" : "visibility"}
        </span>
      </button>
    </div>
  );
};

export default Password;