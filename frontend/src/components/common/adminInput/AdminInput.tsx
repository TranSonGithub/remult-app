import React from 'react';
import './style.css';
import { StatusOrder } from '../../../utils/constants';

const AdminInput = (props: any) => {
  const { title, content, readonly, classStatus, isEdit, status, handleChangeStatus, startStatus } = props;
  const indexStatus = Object.keys(StatusOrder).findIndex((e: any) => e === content);
  const statusList = ['READY', 'PENDING', 'CANCEL', 'TRANSFERRING', 'SUCCESS'];

  return isEdit && startStatus !== 'SUCCESS' ? (
    <div className='adminInput__container'>
      <div className='adminInput__label'>{title}</div>
      {/* <input type='text' className={`adminInput__input ${classStatus}`} value={content} readOnly={readonly || true} /> */}
      <select
        id='underline_select'
        className={`adminOption__input ${classStatus}`}
        name='type'
        onChange={handleChangeStatus}
        value={status}
        // defaultValue={content}
      >
        {statusList.map((status: any, idx: any) => {
          const idxStatus = Object.keys(StatusOrder).findIndex((e: any) => e === status);
          if (status !== 'READY') {
            return (
              <option className={Object.values(StatusOrder)[idxStatus]?.color} value={status}>
                {Object.values(StatusOrder)[idxStatus]?.option}
              </option>
            );
          } else {
            return (
              <option className={Object.values(StatusOrder)[idxStatus]?.color} value={status} hidden>
                {Object.values(StatusOrder)[idxStatus]?.text}
              </option>
            );
          }
        })}
      </select>
    </div>
  ) : (
    <div className='adminInput__container'>
      <div className='adminInput__label'>{title}</div>
      <input type='text' className={`adminInput__input ${classStatus}`} value={content} readOnly={readonly || true} />
    </div>
  );
};

export default AdminInput;
