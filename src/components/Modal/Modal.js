import "./Modal.scss";
import CrosIcon from "../../assets/metro-cross.svg";

export const Modal = ({ handleClose, children }) => {
  return (
    <div className="modal-box">
      <div className="box">
        <img
          src={CrosIcon}
          alt="cross-icon"
          className="close-icon"
          onClick={handleClose}
        />
        {children}
      </div>
    </div>
  );
};
