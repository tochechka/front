import React from 'react';
import OmpItem from "./OmpItem";

const OmpList = ({omps}) => {

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
        <OmpItem key={omp.id} omp={omp}/>
      )}
    </div>
  );
};

export default OmpList;
