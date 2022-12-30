import { TypeMenu } from './../utils/constants';
import { Router, Request, Response } from 'express';
import * as menuService from '../services/menu';

const menuRoute = Router();

menuRoute.post('/', async (req: Request, res: Response) => {
  try {
    console.log(`[createMenu] body -> ${JSON.stringify(req.body)}`);

    await menuService.createItem(req.body);

    return res.status(201).json({
      success: true,
      message: 'Create menu success',
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: `${err.message}` });
  }
});

menuRoute.get('/', async (req: Request, res: Response) => {
  try {
    console.log(`[getMenu] body -> ${JSON.stringify(req.body)}`);

    const menus = await menuService.getItems({});
    const resultMenus = {
      menuDrink: menus.filter((e) => e.type === TypeMenu.DRINK),
      menuMain: menus.filter((e) => e.type === TypeMenu.MAIN),
    };
    console.log(JSON.stringify(resultMenus, null, 2));

    return res.status(200).json({
      success: true,
      message: 'Get menu success',
      data: {
        menus: resultMenus,
      },
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: `${err.message}` });
  }
});

menuRoute.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    console.log(`[updateMenu] params -> ${JSON.stringify(req.params)} body -> ${JSON.stringify(req.body)}`);

    await menuService.updateItemById(id, body);

    return res.status(200).json({
      success: true,
      message: 'Update menu success',
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: `${err.message}` });
  }
});

menuRoute.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(`[updateMenu] params -> ${JSON.stringify(req.params)} body -> ${JSON.stringify(req.body)}`);

    await menuService.deleteItemById(id);

    return res.status(200).json({
      success: true,
      message: 'Update menu success',
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: `${err.message}` });
  }
});

export default menuRoute;
