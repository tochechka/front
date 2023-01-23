import React, {useState} from 'react';
import OmpFilter from "../Filter/OmpFilter";
import '../../assets/styles/Top.css'
import apiClient from "../../api";
import NewOmp from "../Modal/NewOmp";

const Top = ({get, filter, setFilter}) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [arr, setArr] = useState('');
  const [dep, setDep] = useState('');
  const [number, setNumber] = useState('');
  const [omvd, setOmvd] = useState('');
  const [newId, setNewId] = useState('');
  const [newActive, setNewActive] = useState(false);

  function addNewOmp(e) {
    e.preventDefault();

    const info = {
      "date": date,
      "arrivalTime": arr + ':00',
      "departureTime": dep + ':00',
      "omvd": omvd,
      "criminalCaseNumber": number
    }

    apiClient
      .post('/omps', info)
      .then((response) => {
        get();
        setNewId(response.data.id);
        setNewActive(true);
        console.log(response.data.id)
        console.log("Получилось")
        console.log(info)
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setText('⛔  Что-то пошло не так');
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          setText('Не удалось получить ответ от сервера');
        } else {
          // Something happened in setting up the request that triggered an Error
          setText(`Error${error.message}`);
        }
      });
  }

  return (
    <div className='header'>
      <OmpFilter filter={filter} setFilter={setFilter} />
      <form>
        <input
          value={date}
          onChange={e => setDate(e.target.value)}
          type="date"
        />
        <input
          style={{marginLeft: 10}}
          value={arr}
          onChange={e => setArr(e.target.value)}
          type="time"
          placeholder="Время прибытия"
        />
        <input
          style={{marginLeft: 10}}
          value={dep}
          onChange={e => setDep(e.target.value)}
          type="time"
          placeholder="Время отправки"
        />
        <input
          value={omvd}
          style={{marginLeft: 10}}
          onChange={e => setOmvd(e.target.value)}
          type="text"
          placeholder="Название омвд"
        />
        <input
          style={{marginLeft: 10}}
          value={number}
          onChange={e => setNumber(e.target.value)}
          type="text"
          placeholder="Номер дела"
        />
        <button className='top-button' onClick={addNewOmp}>Сохранить</button>
        <button className='top-button' onClick={get()}>Обновить</button>
      </form>
      <div className="mb-3 mt-2 mes">{text}</div>
      <NewOmp
        active={newActive}
        setActive={setNewActive}
        id={newId}
      />
    </div>
  );
};

export default Top;
