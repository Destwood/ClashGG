import React from "react";
import { togglePopup } from "../../../store/slices/AuthModalSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import style from "./Modal.module.scss";

// import discord from "../../../assets/discord.svg";
// import twitch from "../../../assets/twitch.svg";
// import facebook from "../../../assets/facebook.svg";



 const AuthModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.authModal.isOpen);

  const handleClose = () => {
    dispatch(togglePopup({ isOpen: false }));
  };

  return (
    <div
      className={`${style.wrapper} ${isOpen ? "" : style.hidden}`}
      onClick={handleClose}
    >
      <div
        className={style.container}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <button onClick={handleClose} className={style.close}>
          &#10006;
        </button>
        {/* <p className={style.title}>Log In</p>
        <p className={style.subTitle}>
          Don't have an account? <span>Sign up</span>
        </p>
        <button className={`${style.linkButton} ${style.discordButton}`}>
          <img className={style.icon} src={discord} alt="discordLogo" />
          Log in with discord
        </button>
        <button className={`${style.linkButton} ${style.twitchButton}`}>
          <img className={style.icon} src={twitch} alt="twitchLogo" />
          Log in with discord
        </button>
        <button className={`${style.linkButton} ${style.facebookButton}`}>
          <img className={style.icon} src={facebook} alt="twitchLogo" />
          Log in with discord
        </button> */}
      </div>
    </div>
  );
}
export default AuthModal;
