import mongoose from 'mongoose';
import { StatusOrder } from '../utils/constants';

const OrderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
    },
    guestInfo: {
      name: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      notes: String,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: StatusOrder,
      default: StatusOrder.READY,
    },
  },
  { timestamps: true }
);

export default mongoose.model('orders', OrderSchema);
