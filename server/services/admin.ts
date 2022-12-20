import Admin from '../models/admin';

export const createAdmin = async (admin: any) => {
  const newAdmin = new Admin(admin);
  return await newAdmin.save();
};

export const updateAdminById = async (id: any, update: any) => {
  await Admin.findByIdAndUpdate(id, update).exec();
  return await Admin.findById(id).exec();
};

export const getAdminById = async (id: any) => {
  return await Admin.findById(id).exec();
};

export const getAdmin = async (filter: any) => {
  return await Admin.findOne(filter).exec();
};
