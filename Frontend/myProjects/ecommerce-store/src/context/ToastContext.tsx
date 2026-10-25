import {createContext, useCallback, useContext, useState, type ReactNode } from "react";

export interface Toast {
  id: number;
  message: string;
  type: "success" | "error" | "info";
}
interface ToastContextType {
  showToast: (message: string, type?: Toast["type"]) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({children}: {children:ReactNode}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const showToast = useCallback(
    (message: string, type: Toast["type"] = "success") => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev, { id, message, type }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, 3000);
    },
    [],
  );
  return (
    <ToastContext.Provider value={{showToast}}>
        {children}
        <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
            {toasts.map((toast) => (
                <div key={toast.id}>
                    {toast.message}
                </div>
            ))}
        </div>
    </ToastContext.Provider>
  )
};

export const useToast = () => {
    const context = useContext(ToastContext)
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider")
    }
    return context
}
