export const serverLogin = async (email, password) => {
  console.log('serverLogin', email, password);
  return fetch(`https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`)
    .then((res) => res.json())
    .then((data) => data.success)
    .catch((err) => {
      console.error('Could not fetch', err);
    });
};
