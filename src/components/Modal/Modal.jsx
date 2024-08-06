import React from "react";
import ConfirmModal from "./ConfirmModal";
import CongratsModal from "./CongratsModal";

function Modal({ setActiveModal, activeModal }) {
  const modals = ["confirm-modal", "congrats-modal"];

  return (
    <>
      {modals.map((modal, index) => (
        <div
          key={index}
          className={`modal ${activeModal === modal ? "active-modal" : ""}`}
          onClick={() => setActiveModal("")}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="modal__container"
          >
            {activeModal === "confirm-modal" ? (
              <ConfirmModal setActiveModal={setActiveModal} />
            ) : activeModal === "congrats-modal" ? (
              <CongratsModal setActiveModal={setActiveModal} />
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default Modal;
