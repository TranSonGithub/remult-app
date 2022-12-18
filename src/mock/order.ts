export const orderList = [
  {
    id: '#22-34233',
    customer: {
      name: 'Anh A',
      address: 'Hà Nội',
      phoneNumber: '0987 876 989',
    },
    total: '200.000',
    itemList: [
      {
        avatar: null,
        name: 'Detroit pizza',
        description: 'Xúc xích Salami, hành tây, sốt cà chua, pho mai.',
        type: 'MAIN',
        size: {
          name: 'Size S',
          price: '20.000',
          size: 10,
        },
        option: 'Thêm phô mai: 10.000',
        number: 2,
      },
      {
        avatar: null,
        name: 'Coca cola',
        description: '',
        type: 'DRINK',
        size: {
          name: 'Size S',
          price: '20.000',
          size: 10,
        },
        option: 'Thêm phô mai: 10.000',
        number: 2,
      },
    ],
  },
];
