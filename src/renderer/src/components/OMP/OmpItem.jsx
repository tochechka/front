import React from 'react';
import '../../assets/styles/Omp.css'

const OmpItem = (props) => {

  function dep() {
    const depTime = props.omp.departureTime.split(':');
    return `${depTime[0]}:${depTime[1]}`;
  }

  function arr() {
    const arrTime = props.omp.arrivalTime.split(':');
    return `${arrTime[0]}:${arrTime[1]}`;
  }

  function date() {
    const localDate = new Date(props.omp.date);
    const localTimeString = localDate.toLocaleDateString();
    return localTimeString;
  }

  return (
    <div className="Omp">
      <div className="Omp-content">
        <strong>Дело номер {props.omp.criminalCaseNumber}. | {props.omp.omvd} | Время оправки: {dep()} | Время прибытия: {arr()} | {date()}</strong>
      </div>
      <button>Кнопка</button>
    </div>
  );
};

export default OmpItem;
