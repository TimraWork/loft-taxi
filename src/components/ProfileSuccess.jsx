import React from 'react';

const ProfileSuccess = () => (
  <div className="center_block bg--cover">
    <div className="white_container text--center w--880">
      <h1 className="title title--h1 mb--15">Профиль</h1>
      <div className="form__text mb--40">Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
      <a href="/map/" className="form__submit">
        Перейти на карту
      </a>
    </div>
  </div>
);

export default ProfileSuccess;
