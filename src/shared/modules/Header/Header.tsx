import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.webp";
import { togglePopup } from "../../../store/slices/AuthModalSlice";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useAppDispatch } from "../../hooks/redux";
import style from "./Header.module.scss";

const Header = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (newValue: string) => {
    setSearchValue(newValue);
  };

  const handleLoginClick = () => {
    dispatch(togglePopup({ isOpen: true, typeOfModal: "LogIn" }));
  };
  const handleSignUpClick = () => {
    dispatch(togglePopup({ isOpen: true, typeOfModal: "SignUp" }));
  };

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
