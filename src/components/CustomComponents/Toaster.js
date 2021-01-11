import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

const Toaster = ({ toasts }) => {
  return (
    <div className="float-right">
      {toasts.map((toast) => (
        <Toast>
          <ToastHeader icon="info"> Track Helper </ToastHeader>
          <ToastBody>
            <div className="text-center" type={toast.type}>
              {toast.text}
            </div>
          </ToastBody>
        </Toast>
      ))}
    </div>
  );
};

export default Toaster;
