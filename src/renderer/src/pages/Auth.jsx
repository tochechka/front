import '../assets/styles/Auth.css'
import { useNavigate } from 'react-router-dom';
import login from '../bg.png';
import axios from 'axios';
import {useState} from 'react';
import OmpList from '../components/OMP/OmpList';
import {Col, Image} from 'react-bootstrap';
import human from '../assets/human.svg'
import key from '../assets/key.svg'

const Auth = () => {
  const history = useNavigate();

  function change() {
    // const response =  await axios.get('https://api.forensicais.xxcf.cf/omps')
    // console.log(response.data.content)
    return history('/omp')
  };

  function myFunction() {
    const x = document.getElementById('inp-password');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url(${login})`
      }}
    >
      <div className="random d-flex align-items-center flex-column">
        <div className="auth-form-container">
          <Col className="log-col">
            <h5 style={{ color: 'white' }} className="item">
              email
            </h5>
            <div className="cont">
              <input
                className="email-form d-flex"
                type="email"
                placeholder="email"
              />
              <Image src={human} className="email-image" />
            </div>
            <h5 className="item" style={{ color: 'white' }}>
              пароль
            </h5>
            <div className="cont">
              <input
                id="inp-password"
                className="password-form d-flex"
                type="password"
                placeholder="пароль"
              />
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <Image src={key} className="email-image" />
                <button className="fa-solid fa-eye btn-show-hide-pwd" onClick={myFunction}> </button>
              </div>
            </div>
            <button className="log-button" onClick={change}>
              Входная кнопка
            </button>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Auth;
