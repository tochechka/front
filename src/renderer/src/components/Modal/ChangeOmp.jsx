import React, {useState} from 'react';
import '../../assets/styles/Modal.css'
import {Col} from "react-bootstrap";
import login from "../../bg.png";
import apiClient from "../../api";

const ChangeOmp = ({active, setActive, number, omvd, dep, arr, date, id, get}) => {
  const [modNumber, setModNumber] = useState(number);
  const [modOmvd, setModOmvd] = useState(omvd);
  const [modDep, setModDep] = useState(dep);
  const [modArr, setModArr] = useState(arr);
  const [modDate, setModDate] = useState(date);

  function changeOmp(e) {
    e.preventDefault();

    const info = {
      "date": modDate,
      "arrivalTime": modArr + ':00',
      "departureTime": modDep + ':00',
      "omvd": modOmvd,
      "criminalCaseNumber": modNumber
    }

    apiClient
      .put(`/omps/${id}`, info)
      .then(() => {
        console.log("Изменилось");
        console.log(info);
        setActive(false);
        get();
      })
      .catch(() => {
        console.log(info)
      });
  }

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div style={{backgroundImage: `url(${login})`}} className='modal-content' onClick={e => e.stopPropagation()}>
        <Col>
          <div className='container'>
            Номер дела:
            <input
              value={modNumber}
              onChange={e => setModNumber(e.target.value)}
              type="text"
            />
          </div>
          <div className='container'>
            Название омвд:
            <input
              value={modOmvd}
              onChange={e => setModOmvd(e.target.value)}
              type="text"
            />
          </div>
          <div className='container'>
            Время прибытия:
            <input
              value={modDep}
              onChange={e => setModDep(e.target.value)}
              type="time"
            />
          </div>
          <div className='container'>
            Время прибытия:
            <input
              value={modArr}
              onChange={e => setModArr(e.target.value)}
              type="time"
            />
          </div>
          <div className='container'>
            Дата:
            <input
              value={modDate}
              onChange={e => setModDate(e.target.value)}
              type="date"
            />
          </div>
        </Col>
        <button style={{marginTop: 20}} onClick={changeOmp} className='change-button'> Сохранить </button>
      </div>
    </div>
  );
};

export default ChangeOmp;
