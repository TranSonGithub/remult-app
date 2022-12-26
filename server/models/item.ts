import mongoose from 'mongoose';
import { Size, TypeMenu } from '../utils/constants';

const ItemSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      index: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    sizes: [
      {
        name: String,
        price: String,
        size: Number,
      },
    ],
    type: {
      type: String,
      enum: TypeMenu,
      default: TypeMenu.MAIN,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('items', ItemSchema);
