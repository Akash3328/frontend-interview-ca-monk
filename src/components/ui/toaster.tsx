import { useToast } from "./use-toast";
import { useEffect } from "react";

export function Toaster() {
  const { toasts, removeToast, addToast } = useToast();

  useEffect(() => {
    const handler = (e: any) => addToast(e.detail);
    window.addEventListener("add-toast", handler);
    return () => window.removeEventListener("add-toast", handler);
  }, [addToast]);

  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-50">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="bg-black text-white rounded-md px-3 py-2 shadow cursor-pointer"
          onClick={() => removeToast(t.id)}
        >
          {t.title && <div className="font-semibold">{t.title}</div>}
          {t.description && (
            <div className="text-sm opacity-80">{t.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}
