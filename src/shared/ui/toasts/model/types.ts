export enum ToastsStatus {
  warning = 'warning',
  error = 'error',
  success = 'success',
  info = 'info'
}

export interface Toast {
  id: number;
  status: ToastsStatus;
  message: string;
  timeout: number;
}

type TShow = (message: string, timeout?: number) => void;

export interface ToastsStore {
  toasts: Toast[] | never;
  showError: TShow;
  showSuccess: TShow;
  showWarning: TShow;
  showInfo: TShow;
}
