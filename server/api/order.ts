import { TypeMenu } from './../utils/constants';
import e, { Router, Request, Response } from 'express';
import * as orderService from '../services/order';
import * as orderItemService from '../services/orderItem';
import * as menuService from '../services/menu';

const orderRoute = Router();

orderRoute.post('/', async (req: Request, res: Response) => {
  try {
    const { total, guestInfo, items } = req.body;
    console.log(`[createOrder] body -> ${JSON.stringify(req.body)}`);

    var orderId = '';
    while (orderId.length < 8) {
      if (orderId.length === 2) {
        orderId += '-' + Math.floor(Math.random() * 10);
      } else {
        orderId += Math.floor(Math.random() * 10);
      }
    }
    const order = await orderService.createOrder({ orderId, total, guestInfo });
    const newOrderItems = items.map((e: any) => {
      return { ...e, order: order._id };
    });
    await orderItemService.createManyOrderItem(newOrderItems);

    return res.status(201).json({
      success: true,
      message: 'Create order success',
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: `${err.message}` });
  }
});

orderRoute.get('/?', async (req: Request, res: Response) => {
  try {
    const { phoneNumber } = req.query;
    console.log(`[getMenu] body -> ${JSON.stringify(req.body)}`);

    const orders = await orderService.getListOrder({ 'guestInfo.phoneNumber': phoneNumber });

    return res.status(200).json({
      success: true,
      message: 'Get menu success',
      data: {
        orders,
      },
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: `${err.message}` });
  }
});

export default orderRoute;
