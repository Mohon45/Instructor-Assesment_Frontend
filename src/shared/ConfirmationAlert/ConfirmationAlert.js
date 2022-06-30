import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ConfirmationAlert = (submitHandler) => {
  confirmAlert({
    title: "Confirm to Delete Cadidate?",
    message: "Are you sure to do this.",
    buttons: [
      {
        label: "Yes",
        onClick: () => submitHandler(),
      },
      {
        label: "No",
        onClick: () => {},
      },
    ],
  });
};

export default ConfirmationAlert;
