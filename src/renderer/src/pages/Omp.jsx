import React, {useEffect, useState, useMemo} from 'react';
import apiClient from "../api";
import OmpList from "../components/OMP/OmpList";
import OmpFilter from "../components/Filter/OmpFilter";
import login from "../bg.png";
import Top from "../components/Top/Top";

const Omp = () => {
  const [omps, setOmps] = useState([]);
  const [filter, setFilter] = useState({sort: '', search: ''});

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
        console.log('Загетили')
      })
  }

  useEffect(() => {
    getRequest();
  }, [])

  const removeOmp = (omp) => {
    apiClient
      .delete(`omps/${omp.id}`)
      .then(() => {
        console.log('Удалилось')
        setOmps(omps.filter(p => p.id !== omp.id))
      })
  }

  return (
    <div
      style={{
        backgroundImage: `url(${login})`
      }}
    >
      <Top get={getRequest} filter={filter} setFilter={setFilter}/>
      <OmpList remove={removeOmp} get={getRequest} omps={sortedAndSearchedOmps}/>
    </div>
  );
};

export default Omp;
