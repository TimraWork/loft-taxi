import React from 'react';

const PageLogin = ({handleFormSubmit}) => {
  return (
    <div className="center_block">
      <div className="white_container w--580">
        <form className="form w--350" onSubmit={handleFormSubmit}>
          <h1 className="title title--h1 text--center">Войти</h1>
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            id="email"
            type="email"
            placeholder="mail@mail.ru"
          />
          <label className="form__label" htmlFor="password">
            Пароль
          </label>
          <input
            className="form__input"
            id="password"
            type="password"
            placeholder="*************"
          />
          <div className="form__text text--right mb--40">
            <a href="/" className="form__link">
              Забыли пароль?
            </a>
          </div>
          <input className="form__submit mb--30" type="submit" value="Войти" />
          <div className="text--center form__text form__text--last">
            Новый пользователь?&nbsp;
            <a href="/" className="form__link">
              Регистрация
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageLogin;
