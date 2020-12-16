const BASE_API_URL = `https://loft-taxi.glitch.me`;

const commonParams = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const fetchData = (dataUrl, params) =>
  fetch(dataUrl, params)
    .then((res) => res.json())
    .catch((err) => {
      console.log('Could not fetch', err);
    });

export const serverLogin = async (payload) => {
  const params = {
    ...commonParams,
    body: JSON.stringify(payload)
  };
  return await fetchData(`${BASE_API_URL}/auth`, params); //return [{},{}]
};

export const serverRegister = async ({email, password, name, surname}) => {
  const params = {
    ...commonParams,
    body: JSON.stringify({
      name: name,
      surname: surname,
      email: email,
      password: password
    })
  };
  return fetchData(`${BASE_API_URL}/register`, params);
};

export const serverCard = async ({token, cardNumber, expiryDate, cardName, cvc}) => {
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
  return await fetchData(`${BASE_API_URL}/card`, params);
};

export const getServerCard = async (token) => {
  return await fetchData(`${BASE_API_URL}/card?token=${token}`, {});
};

export const getServerAddressList = () => {
  return fetchData(`${BASE_API_URL}/addressList`, {});
};

export const getServerRoute = (payload) => {
  return fetchData(`${BASE_API_URL}/route?address1=${payload.address1}&address2=${payload.address2}`, {});
};
