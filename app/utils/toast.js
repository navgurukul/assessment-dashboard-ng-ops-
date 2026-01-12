import { toast as sonnerToast } from 'sonner';
 

export const toast = { 
  success: (message, options = {}) => {
    return sonnerToast.success(message, {
      duration: 4000,
      ...options,
    });
  },
 
  error: (message, options = {}) => {
    return sonnerToast.error(message, {
      duration: 4000,
      ...options,
    });
  },
 
  info: (message, options = {}) => {
    return sonnerToast.info(message, {
      duration: 4000,
      ...options,
    });
  },
 
  warning: (message, options = {}) => {
    return sonnerToast.warning(message, {
      duration: 4000,
      ...options,
    });
  },
 
  loading: (message, options = {}) => {
    return sonnerToast.loading(message, options);
  },
 
  promise: (promise, messages) => {
    return sonnerToast.promise(promise, {
      loading: messages.loading || 'Loading...',
      success: messages.success || 'Success!',
      error: messages.error || 'Something went wrong',
    });
  },
 
  dismiss: (toastId) => {
    return sonnerToast.dismiss(toastId);
  },
 
  custom: (message, options = {}) => {
    return sonnerToast(message, options);
  },
};
 
export const handleApiError = (error, fallbackMessage = 'An error occurred') => {
  const errorMessage = error?.response?.data?.message || error?.message || fallbackMessage;
  toast.error(errorMessage);
};
 
export const handleApiSuccess = (message) => {
  toast.success(message);
};
