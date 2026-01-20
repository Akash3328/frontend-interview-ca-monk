import * as React from "react";

type ToastProps = {
  id: number;
  title?: string;
  description?: string;
};

type ToastContextType = {
  toasts: ToastProps[];
  addToast: (toast: Omit<ToastProps, "id">) => void;
  removeToast: (id: number) => void;
};

const ToastContext = React.createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastProps[]>([]);

  const addToast = (toast: Omit<ToastProps, "id">) => {
    setToasts((prev) => [...prev, { ...toast, id: Date.now() }]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export const toast = (props: Omit<ToastProps, "id">) => {
  const event = new CustomEvent("add-toast", { detail: props });
  window.dispatchEvent(event);
};
