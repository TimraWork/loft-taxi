import React, {useState} from 'react';
import PaymentCard from '../components/PaymentCard';

const Profile = ({handleFormSubmit}) => {
  const [number, setNumber] = useState('5545  2300  3432  4521');
  const [expiration, setExpiration] = useState('05/08');

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <div className="text--center">
        <h1 className="title title--h1 mb--15">Профиль</h1>
        <div className="form__text">Введите платежные данные</div>
      </div>
      <div className="row">
        <div className="row--col">
          <label className="form__label" htmlFor="name">
            Имя владельца
          </label>
          <input className="form__input" id="name" type="text" placeholder="Loft" />
          <label className="form__label" htmlFor="number">
            Номер карты
          </label>
          <input className="form__input mb--50" id="number" type="text" placeholder={number} onChange={(e) => setNumber(e.target.value)} />
          <div className="row mb--30">
            <div className="row--col">
              <label className="form__label" htmlFor="expiration">
                MM/YY
              </label>
              <input className="form__input" id="expiration" type="text" placeholder={expiration} onChange={(e) => setExpiration(e.target.value)} />
            </div>
            <div className="row--col">
              <label className="form__label" htmlFor="cvc">
                CVC
              </label>
              <input className="form__input" id="name" type="text" placeholder="667" />
            </div>
          </div>
        </div>
        <div className="row--col">
          <PaymentCard number={number} expiration={expiration} />
        </div>
      </div>
      <div className="text--center">
        <input className="form__submit w--350 mr--auto" type="submit" value="Сохранить" />
      </div>
    </form>
  );
};

export default Profile;
