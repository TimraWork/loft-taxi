import React from 'react';

const PageProfile = ({handleFormSubmit}) => {
  return (
    <div className="center_block bg--cover">
      <div className="white_container text--center w--880">
        <form className="form w--600" onSubmit={handleFormSubmit}>
          <h1 className="title title--h1 mb--15">Профиль</h1>
          <div className="form__text">
            Платёжные данные обновлены. Теперь вы можете заказывать такси.
          </div>
          <input
            className="form__submit"
            type="submit"
            value="Перейти на карту"
          />
        </form>
      </div>
    </div>
  );
};

export default PageProfile;
