import React from 'react';
import OmpItem from "./OmpItem";

const OmpList = ({omps, remove}) => {

  if (!omps.length) {
    return (
      <h1 style={{textAlign:"center"}}>
        Заявления отсутствуют
      </h1>
    )
  }

    return (
    <div>
      {omps.map(omp =>
        <OmpItem remove={remove} key={omp.id} omp={omp}/>
      )}
    </div>
  );
};

export default OmpList;
