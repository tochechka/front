import React, {useEffect, useState, useMemo} from 'react';
import apiClient from "../api";
import OmpList from "../components/OMP/OmpList";
import OmpFilter from "../components/Filter/OmpFilter";

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

  useEffect(() => {
    apiClient
      .get('/omps')
      .then((response) => {
        setOmps(response.data.content)
      })
  }, [])

  return (
    <div>
      <OmpFilter filter={filter} setFilter={setFilter} />
      <OmpList omps={sortedAndSearchedOmps}/>
    </div>
  );
};

export default Omp;
