import React from 'react';
import { typeMenu } from '../../../utils/constants';

const SizeItem = (props: any) => {
  const { size, index, type, handleChangeSize } = props;
  return (
    <div className='sizeBox__item'>
      {type === typeMenu.main && (
        <input
          className='sizeBox__itemInput sizeBox__itemName'
          placeholder='Size S'
          name={`${index}_name`}
          value={size.name}
          onChange={handleChangeSize}
        />
      )}
      {type === typeMenu.main && (
        <select
          id='underline_select'
          className='sizeBox__itemSize block py-2.5 px-0 w-full text-xl text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-black-400 dark:border-black-700 focus:outline-none focus:ring-0 focus:border-black-200 peer'
          name={`${index}_size`}
          onChange={handleChangeSize}
        >
          <option defaultValue='14'>14 cm</option>
          <option value='15'>15 cm</option>
          <option value='16'>16 cm</option>
          <option value='17'>17 cm</option>
          <option value='18'>18 cm</option>
          <option value='19'>19 cm</option>
          <option value='20'>20 cm</option>
          <option value='21'>21 cm</option>
          <option value='22'>22 cm</option>
          <option value='23'>23 cm</option>
          <option value='24'>24 cm</option>
          <option value='25'>25 cm</option>
          <option value='26'>26 cm</option>
          <option value='27'>27 cm</option>
          <option value='28'>28 cm</option>
          <option value='29'>29 cm</option>
          <option value='30'>30 cm</option>
          <option value='31'>31 cm</option>
          <option value='32'>32 cm</option>
          <option value='33'>33 cm</option>
          <option value='34'>34 cm</option>
          <option value='35'>35 cm</option>
        </select>
      )}
      <div className='sizeBox__itemPrice'>
        <input
          type='number'
          className='sizeBox__itemPrice--input'
          placeholder='Giá tiền'
          name={`${index}_price`}
          value={size.price}
          onChange={handleChangeSize}
        />
        <p className='sizeBox__itemPrice--deno'>VND</p>
      </div>
    </div>
  );
};

export default SizeItem;
