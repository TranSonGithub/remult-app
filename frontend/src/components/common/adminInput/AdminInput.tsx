import React from 'react';
import './style.css';

const AdminInput = (props: any) => {
  const { title, content, readonly } = props;

  return (
    <div className='adminInput__container'>
      <div className='adminInput__label'>{title}</div>
      <input type='text' className='adminInput__input' value={content} readOnly={readonly || true} />
    </div>
  );
};

export default AdminInput;
