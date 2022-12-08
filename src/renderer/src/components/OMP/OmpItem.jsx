import React, {useState} from 'react';
import '../../assets/styles/Omp.css'
import ChangeOmp from "../Modal/ChangeOmp";

const OmpItem = (props) => {
  const [modalActive, setModalActive] = useState(false);

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
      <button onClick={() => setModalActive(true)}>Изменить</button>
      <button onClick={() => props.remove(props.omp)}>Удалить</button>
      <ChangeOmp
        active={modalActive}
        setActive={setModalActive}
        id={props.omp.id}
        number={props.omp.criminalCaseNumber}
        omvd={props.omp.omvd}
        dep={dep()}
        arr={arr()}
        date={props.omp.date}
        get={props.get}
      />
    </div>
  );
};

export default OmpItem;
