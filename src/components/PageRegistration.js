import React from 'react';

const PageRegistration = ({handleFormSubmit}) => (
  <div className="center_block">
    <div className="white_container w--580">
      <form className="form w--350" onSubmit={handleFormSubmit}>
        <h1 className="title title--h1 text--center">Регистрация</h1>
        <label className="form__label" htmlFor="email">
          Email*
        </label>
        <input className="form__input" id="email" type="email" placeholder="mail@mail.ru" />
        <label className="form__label" htmlFor="name">
          Как вас зовут?*
        </label>
        <input className="form__input" id="name" type="text" placeholder="Петр Александрович" />
        <label className="form__label" htmlFor="password">
          Придумайте пароль*
        </label>
        <input className="form__input mb--50" id="password" type="password" placeholder="*************" />
        <input className="form__submit mb--50" type="submit" value="Зарегистрироваться" />
        <div className="text--center form__text form__text--last mb--0">
          Уже зарегистрированы? &nbsp;
          <a href="/" className="form__link">
            Войти
          </a>
        </div>
      </form>
    </div>
  </div>
);

export default PageRegistration;
