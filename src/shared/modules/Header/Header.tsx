import React, { useState } from "react";
import style from "./Header.module.scss";
import Button from "../../components/Button";
import logo from "../../../assets/logo.webp";
import { Link } from "react-router-dom";
import Input from "../../components/Input";

function Header() {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (newValue: string) => {
    setSearchValue(newValue);
  };

  return (
    <div className={style.header}>
      <div className="">
        <Link to={"/"}>
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
        <Button type="contained">Log In</Button>
        <Button type="filled">Sign Up</Button>
      </div>
    </div>
  );
}

export default Header;
