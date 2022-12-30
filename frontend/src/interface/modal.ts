import { TypeModal } from '../utils/type';

export interface IModalBooking {
  show: boolean;
  item: any;
}

export interface IModalAddMenu {
  show: boolean;
  itemUpdate: any;
}

export interface IModal {
  modalBooking: IModalBooking;
  modalAddMenu: IModalAddMenu;
  type: TypeModal;
}

export type CallbackFn = () => void;
export interface IPopup {
  show: boolean;
  content: string;
  numberButton: number;
  phoneNumber?: string;
  type: string;
  action?: CallbackFn;
}
