import React from 'react';
import '../../assets/styles/Modal.css'
import login from "../../bg.png";

const DeleteOmp = ({active, setActive, omp, remove}) => {
  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div style={{backgroundImage: `url(${login})`, alignItems: "center"}} className='modal-content' onClick={e => e.stopPropagation()}>
        Желаете удалить запись?
        <button className='confirm-button' onClick={() => remove(omp)}>Да</button>
        <button className='deny-button' onClick={() => setActive(false)}>Нет</button>
      </div>
    </div>
  );
};

export default DeleteOmp;
