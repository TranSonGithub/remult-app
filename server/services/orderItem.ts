import OrderItem from '../models/orderItem';

export const createOrderItem = async (orderItem: any) => {
  const newOrderItem = new OrderItem(orderItem);
  return await newOrderItem.save();
};

export const updateOrderItemById = async (id: any, update: any) => {
  await OrderItem.findByIdAndUpdate(id, update).exec();
  return await OrderItem.findById(id).exec();
};

export const getOrderItemById = async (id: any) => {
  return await OrderItem.findById(id).exec();
};

export const getOrderItem = async (filter: any) => {
  return await OrderItem.findOne(filter).exec();
};

export const createManyOrderItem = async (listOrderItem: any) => {
  return await OrderItem.insertMany(listOrderItem);
};
