import React from 'react';
import Sort from "./Sort";
import apiClient from "../../api";
import '../../assets/styles/Top.css'

const OmpFilter = ({filter, setFilter}) => {

  function sendToServer(e) {
    e.preventDefault();

    apiClient
      .post('/transactions/send', [])
      .then((response) => {
        console.log(response)
        console.log("Отправилось на сервер?")
      });
  }

  return (
    <div>
      <input
        // className="top-form"
        style={{marginRight: 10}}
        type='text'
        value={filter.search}
        onChange={e => setFilter({...filter, search: e.target.value})}
        placeholder='Поиск'
      />
      <Sort
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue='Сортировка'
        options={[
          {value: '', name: 'По умолчанию'},
          {value: 'criminalCaseNumber', name: 'По номеру дела'},
          {value: 'omvd', name: 'По омвд'},
          {value: 'date', name: 'По дате'},
        ]}
      />
      <button className='top-button' onClick={sendToServer}> Отправить все на сервер </button>
      <hr style={{color:"darkorange", border:"solid"}}/>
    </div>
  );
};

export default OmpFilter;
