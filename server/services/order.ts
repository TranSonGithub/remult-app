import Order from '../models/order';
import orderItem from '../models/orderItem';

export const createOrder = async (order: any) => {
  const newOrder = new Order(order);
  return await newOrder.save();
};

export const updateOrderById = async (id: any, update: any) => {
  await Order.findByIdAndUpdate(id, update).exec();
  return await Order.findById(id).exec();
};

export const getOrderById = async (id: any) => {
  return await Order.findById(id).exec();
};

export const getOrder = async (filter: any) => {
  return await Order.findOne(filter).exec();
};

export const getPopulateOrder = async (filter: any) => {
  return await orderItem.find(filter).populate(['order', 'item']);
};

export const getListOrder = async (filter: any) => {
  return await Order.aggregate([
    {
      $match: filter,
    },
    {
      $lookup: {
        from: 'orderitems',
        localField: '_id',
        foreignField: 'order',
        as: 'orderItems',
      },
    },
    {
      $unwind: '$orderItems',
    },
    {
      $lookup: {
        from: 'items',
        localField: 'orderItems.item',
        foreignField: '_id',
        as: 'items',
      },
    },
    {
      $unwind: '$items',
    },
    {
      $group: {
        _id: {
          _id: '$_id',
          orderId: '$orderId',
          guestInfo: '$guestInfo',
          total: '$total',
          status: '$status',
          notes: '$notes',
          createdAt: '$createdAt',
        },
        items: {
          $push: {
            _id: '$items._id',
            img: '$items.img',
            name: '$items.name',
            description: '$items.description',
            sizes: '$items.sizes',
            type: '$items.type',
            price: '$items.price',
            option: '$orderItems.option',
            number: '$orderItems.number',
            sizeName: '$orderItems.sizeName',
            total: '$orderItems.total',
          },
        },
      },
    },
    {
      $project: {
        _id: '$_id._id',
        orderId: '$_id.orderId',
        guestInfo: '$_id.guestInfo',
        total: '$_id.total',
        status: '$_id.status',
        notes: '$_id.notes',
        createdAt: '$_id.createdAt',
        items: '$items',
      },
    },
    {
      $sort: {
        createdAt: -1,
      },
    },
  ]);
};
