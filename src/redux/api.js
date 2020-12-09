const commonParams = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const fetchData = (dataUrl, params) => fetch(dataUrl, params).then((res) => res.json());

export const serverLogin = async (email, password) => {
  const params = {
    ...commonParams,
    body: JSON.stringify({
      email: email,
      password: password
    })
  };
  console.log('serverLogin = email, password = ', email, password);
  return fetchData(`https://loft-taxi.glitch.me/auth`, params);
};

export const serverRegister = async (name, surname, email, password) => {
  const params = {
    ...commonParams,
    body: JSON.stringify({
      name: name,
      surname: surname,
      email: email,
      password: password
    })
  };
  return fetchData(`https://loft-taxi.glitch.me/register`, params);
};

export const serverCard = async (token, cardNumber, expiryDate, cardName, cvc) => {
  const params = {
    ...commonParams,
    body: JSON.stringify({
      token: token,
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cardName: cardName,
      cvc: cvc
    })
  };
  return fetchData(`https://loft-taxi.glitch.me/card`, params);
};
