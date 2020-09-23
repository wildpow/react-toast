import React, { useContext } from "react";

const ToastContext = React.createContext(null);

export const useToast = () => useContext(ToastContext)

export default ToastContext;
