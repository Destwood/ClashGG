import React from "react";
import { useAppDispatch, useAppSelector } from "shared/hooks/reduxHook";
import { togglePopup } from "store/slices/ModalSlice";
import style from "./Modal.module.scss";


const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isOpen);

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

          <div className={style.content}>{children}</div>
      </div>
    </div>
  );
}
export default Modal;
