import React, { useEffect, useState } from "react";
import style from "./MarioModal.module.scss";

interface Props {
  children: React.ReactNode;
  showModal: boolean;
  onClose: () => void;
}
const MarioModal: React.FC<Props> = ({
  children,
  showModal,
  onClose = () => {},
}) => {
  const [showContent, setShowContent] = useState(false);

  if (!showModal) {
    return null;
  }

  const handleClose = () => {
    document.getElementById("modal")!.className = [
      style.modal,
      style.scaleDownCenter,
    ].join(" ");
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      id="modal"
      className={[style.modal, style.scaleUpCenter].join(" ")}
      onClick={handleClose}
    >
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={style.header}>
          <button>
            <i
              onClick={handleClose}
              className="nes-icon close is-small negative"
            ></i>
          </button>
        </div>
        <div className={style.body}>{showContent ? children : undefined}</div>
      </div>
    </div>
  );
};

export default MarioModal;
