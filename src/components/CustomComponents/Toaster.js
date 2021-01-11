import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

const Toaster = ({ toasts }) => {
  return (
    <div className="float-right">
      {toasts.map((toast, i) => (
        <Toast className="toast" key={i} type={toast.type}>
          <ToastHeader icon="info"> Track Helper </ToastHeader>
          <ToastBody>
            <div className="text-center">{toast.text}</div>
          </ToastBody>
        </Toast>
      ))}
    </div>
  );
};

export default Toaster;
