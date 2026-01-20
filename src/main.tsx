import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from './components/ui/toaster.tsx';
import { ToastProvider } from './components/ui/use-toast';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     <ToastProvider>
      <App />
      <Toaster />
      </ToastProvider>
       
    </QueryClientProvider>
  </React.StrictMode>,
)
