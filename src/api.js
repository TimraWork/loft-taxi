const commonParams = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const fetchData = (dataUrl, params) =>
  fetch(dataUrl, params)
    .then((res) => res.json())
    .then((data) => data.success)
    .catch((err) => console.error(err));

export const serverLogin = async (email, password) => {
  const params = {
    ...commonParams,
    body: JSON.stringify({
      email: email,
      password: password
    })
  };
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
