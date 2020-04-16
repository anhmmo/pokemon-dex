import React from "react";
import "./Modal.css";

function Modal({
  modalLoaded,
  openModal,
  closeModalInfo,
  pokemonName,
  modalRef,
}) {
  if (openModal) {
    return (
      <div className="modal-box" ref={modalRef}>
        <button onClick={closeModalInfo} className="close-modal">
          <i className="fas fa-times"></i>
        </button>

        <div className="modal-title">
          Created with &#10084; by <span>Anhmmo</span>
        </div>

        {modalLoaded ? (
          <div>
            <h2>{pokemonName.name}</h2>
            <div className="modal-icons">
              <a href="http://">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="http://">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="http://">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="http://">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        ) : (
          <div className="modal-loading">
            <i className="fas fa-spinner"></i>
          </div>
        )}
      </div>
    );
  }

  return <div></div>;
}

export default Modal;
