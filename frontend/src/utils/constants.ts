export const typeModal = {
  modalBooking: 'modalBooking',
  modalAddMenu: 'modalAddMenu',
};

export const typeMenu = {
  main: 'MAIN',
  drink: 'DRINK',
};

export const typeOption = {
  '10.000': 'Thêm phô mai',
  '20.000': 'Gấp đôi phô mai',
  '30.000': 'Gấp ba phô mai',
};

export const StatusOrder = {
  PENDING: {
    text: 'Nhà hàng đang chuẩn bị',
    class: 'orderItem__button--green',
    color: 'text-green',
  },
  CANCEL: {
    text: 'Đơn hàng đã bị huỷ',
    class: 'orderItem__text--red',
    color: 'text-[#ff0303]',
  },
  TRANSFERRING: {
    text: 'Đơn hàng đang được giao',
    class: 'orderItem__text--blue',
    color: 'text-[#2b60c8]',
  },
  SUCCESS: {
    text: 'Hoàn thành!',
    class: 'orderItem__text--green',
    color: 'text-[#27ae60]',
  },
};

// export enum StatusOrder {
//   PENDING = 'PENDING',
//   CANCEL = 'CANCEL',
//   TRANSFERRING = 'TRANSFERRING',
//   READY = 'READY',
//   SUCCESS = 'SUCCESS',
// }
