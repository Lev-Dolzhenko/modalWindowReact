import Modal from "./components/Modal";

import { useState } from "react";

function App() {
  const [isModal, setIsModal] = useState(false);

  const onClickModal = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <>
      <div className={`overlay ${isModal ? '' : 'none'}`}></div>
      <div className="container container__wrapper">
        {isModal ? <Modal isModal={isModal} onClickModal={onClickModal}/> : null}

        <button onClick={onClickModal} className="openModal">
          Open modal window
        </button>
      </div>
    </>
  );
}

export default App;
