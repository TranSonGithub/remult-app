import Item from '../models/item';

export const createItem = async (item: any) => {
  const newItem = new Item(item);
  return await newItem.save();
};

export const updateItemById = async (id: any, update: any) => {
  await Item.findByIdAndUpdate(id, update).exec();
  return await Item.findById(id).exec();
};
export const deleteItemById = async (id: any) => {
  return await Item.findByIdAndDelete(id).exec();
};

export const getItemById = async (id: any) => {
  return await Item.findById(id).exec();
};

export const getItem = async (filter: any) => {
  return await Item.findOne(filter).exec();
};

export const getItems = async (filter: any) => {
  return await Item.find(filter);
};
