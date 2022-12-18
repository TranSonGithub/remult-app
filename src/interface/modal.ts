export interface IModalBooking {
  show: boolean;
}

export interface IModal {
  modalBooking: IModalBooking;
}

export interface IPopup {
  show: boolean;
  content: string;
  numberButton: number;
}
