import React from 'react';
import Sort from "./Sort";

const OmpFilter = ({filter, setFilter}) => {
  return (
    <div>
      <input
        style={{marginRight: 5}}
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
    </div>
  );
};

export default OmpFilter;
