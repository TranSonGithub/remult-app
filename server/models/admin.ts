import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      index: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    restaurantInfo: {
      name: String,
      address: String,
      email: String,
      dkkd: Number,
      phoneNumber: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('admins', AdminSchema);
