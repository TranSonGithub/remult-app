import { TypeModal } from '../utils/type';

export interface IModalBooking {
  show: boolean;
  item: any;
}

export interface IModalAddMenu {
  show: boolean;
}

export interface IModal {
  modalBooking: IModalBooking;
  modalAddMenu: IModalAddMenu;
  type: TypeModal;
}

export interface IPopup {
  show: boolean;
  content: string;
  numberButton: number;
  phoneNumber?: string;
  type: string;
}
