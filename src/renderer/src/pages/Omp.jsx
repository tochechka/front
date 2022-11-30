import React, {useEffect, useState, useMemo} from 'react';
import apiClient from "../api";
import OmpList from "../components/OMP/OmpList";
import OmpFilter from "../components/Filter/OmpFilter";

const Omp = () => {
  const [omps, setOmps] = useState([]);
  const [filter, setFilter] = useState({sort: '', search: ''});
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [arr, setArr] = useState('');
  const [dep, setDep] = useState('');
  const [number, setNumber] = useState('');
  const [omvd, setOmvd] = useState('');

  const sortedOmps = useMemo(() => {
    if(filter.sort) {
      return [...omps].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return omps;
  }, [filter.sort, omps]);

  const sortedAndSearchedOmps = useMemo(() => {
    return sortedOmps.filter(omp => omp.omvd.toLowerCase().includes(filter.search.toLowerCase()))
  }, [filter.search, sortedOmps]);

  const getRequest = async () => {
    apiClient
      .get('/omps')
      .then((response) => {
        setOmps(response.data.content)
      })
  }

  useEffect(() => {
    getRequest();
  }, [])

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
      .then(() => {
        setOmps([...omps, {omvd: info.omvd, date: info.date, arrivalTime: info.arrivalTime, departureTime: info.departureTime, criminalCaseNumber: info.criminalCaseNumber}])
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

  const removeOmp = (omp) => {
    apiClient
      .delete(`omps/${omp.id}`)
      .then(() => {
        console.log(Удалилось)
        setOmps(omps.filter(p => p.id !== omp.id))
      })
  }

  return (
    <div>
      <OmpFilter filter={filter} setFilter={setFilter} />
      <form>
        <input
          value={date}
          onChange={e => setDate(e.target.value)}
          type="date"
        />
        <input
          value={arr}
          onChange={e => setArr(e.target.value)}
          type="text"
          placeholder="Время прибытия"
        />
        <input
          value={dep}
          onChange={e => setDep(e.target.value)}
          type="text"
          placeholder="Время отправки"
        />
        <input
          value={omvd}
          onChange={e => setOmvd(e.target.value)}
          type="text"
          placeholder="Название омвд"
        />
        <input
          value={number}
          onChange={e => setNumber(e.target.value)}
          type="text"
          placeholder="Номер дела"
        />
        <button onClick={addNewOmp}>Сохранить</button>
      </form>
      <div className="mb-3 mt-2 mes">{text}</div>
      <OmpList remove={removeOmp} omps={sortedAndSearchedOmps}/>
    </div>
  );
};

export default Omp;
