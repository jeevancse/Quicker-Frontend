import { ToastContainer, toast } from "react-toastify";
import { ErrorContent, InfoComponent, SuccessContent } from "./globalCSS";

export const notifyError = (message) => {
  toast.error(
    <InfoComponent>
      <ErrorContent>{message}</ErrorContent>
    </InfoComponent>
  );
};

export const notifySuccess = (message) => {
  toast.success(
    <InfoComponent>
      <SuccessContent>{message}</SuccessContent>
    </InfoComponent>
  );
};

const Toaster = () => <ToastContainer />;

export default Toaster;
