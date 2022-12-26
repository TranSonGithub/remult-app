import mongoose from 'mongoose';
import { Size, TypeMenu } from '../utils/constants';

const OrderItemSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'orders',
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'items',
    },
    number: Number,
    sizeName: String,
    options: {
      name: String,
      price: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model('orderItems', OrderItemSchema);
