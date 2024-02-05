import { useState } from "react";
import capibara from "./../content/capibara.jpg";

function Modal({ onClickModal, isModal }) {
  return (
    <>
      <div className={`modal ${isModal ? "show" : "hide"}`}>
        <img src={capibara} alt="capibara" />
        <div className="modal_button">
          <button onClick={onClickModal}>Close modal window</button>
        </div>
      </div>
    </>
  );
}

export default Modal;
