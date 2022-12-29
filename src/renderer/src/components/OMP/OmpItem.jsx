import React, {useState} from 'react';
import '../../assets/styles/Omp.css'
import ChangeOmp from "../Modal/ChangeOmp";
import DeleteOmp from "../Modal/DeleteOmp";

const OmpItem = (props) => {
  const [modalActive, setModalActive] = useState(false);
  const [deleteActive, setDeleteActive] = useState(false);

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
      <div>
        <button onClick={() => setModalActive(true)} style={{marginRight: 10}}>Изменить</button>
        <button onClick={() => setDeleteActive(true)}>Удалить</button>
      </div>
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
      <DeleteOmp
        active={deleteActive}
        setActive={setDeleteActive}
        remove={props.remove}
        omp={props.omp}
      />
    </div>
  );
};

export default OmpItem;
