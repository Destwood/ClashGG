import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "shared/hooks";
import logo from "../../../assets/logo.webp";
import { setAuthType } from "../../../store/slices";
import { togglePopup } from "../../../store/slices/ModalSlice";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import style from "./Header.module.scss";

const Header = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (newValue: string) => {
    setSearchValue(newValue);
  };

  const handleLoginClick = () => {
    dispatch(setAuthType({ typeOfModal: "logIn" }));
    openPopup()
  };
  const handleSignUpClick = () => {
    dispatch(setAuthType({ typeOfModal: "signUp" }));
    openPopup()
  };

  const openPopup = () => {
    dispatch(togglePopup({ isOpen: true }));
  }

  return (
    <div className={style.header}>
      <div className="">
        <Link to="/">
          <img className={style.logo} src={logo} alt="logo" />
        </Link>
      </div>
      <div className="">
        <Input
          value={searchValue}
          onChange={handleChange}
          placeholder="Search..."
          type="outlined"
        />
      </div>
      <div className="">
        <Button type="contained" onClick={() => handleLoginClick()}>
          Log In
        </Button>
        <Button type="filled" onClick={() => handleSignUpClick()}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default Header;
