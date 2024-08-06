import React from "react";
import { DefaultBtn } from "../../assets/components.styles";

function ConfirmModal({ setActiveModal }) {
  return (
    <div className="modal-confirm">
      <div className="modal__container-header">
        <h1>Are these correct?</h1>
        <p>
          Make sure that the information you entered is correct for the job
          application. You have a chance to change inputs for “UX/UI Designer”
          job vacancy.
        </p>
      </div>
      <div className="modal__container-rows">
        <div className="modal__container-row">
          Full name : <p>Ilaha Maharramova</p>
        </div>
        <div className="modal__container-row">
          Email : <p>ilaha.maharramova123@gmail.com</p>
        </div>
        <div className="modal__container-row">
          Salary Expectation : <p>$1200-1800</p>
        </div>
      </div>
      <div className="modal__container-buttons">
        <DefaultBtn onClick={() => setActiveModal("")}>Go back</DefaultBtn>
        <DefaultBtn
          onClick={(e) => {
            e.stopPropagation();
            setActiveModal("congrats-modal");
          }}
          color="#6875D1"
        >
          Confirm and Send
        </DefaultBtn>
      </div>
    </div>
  );
}

export default ConfirmModal;
