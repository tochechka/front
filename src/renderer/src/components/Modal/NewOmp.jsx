import React from 'react';
import '../../assets/styles/Modal.css'
import login from "../../bg.png";
import apiClient from "../../api";

const NewOmp = ({active, setActive, id}) => {

  function singleToServer(e) {
    e.preventDefault();

    apiClient
      .post('/transactions/send', [id])
      .then((response) => {
        setActive(false);
        console.log(response)
        console.log("Отправилось на сервер?")
      });
  }

  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div style={{backgroundImage: `url(${login})`, alignItems: "center"}} className='modal-content' onClick={e => e.stopPropagation()}>
        Отправить запись на глобальный сервер?
        <button className='confirm-button' onClick={singleToServer}>Да</button>
        <button className='deny-button' onClick={() => setActive(false)}>Нет</button>
      </div>
    </div>
  );
};

export default NewOmp;
