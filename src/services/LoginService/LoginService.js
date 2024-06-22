const URL = 'http://127.0.0.1:8080';

const setLocalStorage = (token) => {
  localStorage.setItem('token', token);
  console.log('login service local storage', localStorage.getItem('token'));
};

const loginService = (login) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(login),
  };

  return fetch(`${URL}/api/user/login`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        return response.text().then((text) => {
          throw new Error(text || 'La solicitud no fue exitosa, login');
        });
      }
      return response.json();
    })
    .then((newData) => {
      if (newData.success && newData.data) {
        setLocalStorage(newData.data);
      } else {
        throw new Error(
          newData.message || 'Error en la respuesta del servidor'
        );
      }
      return newData;
    })
    .catch((error) => {
      console.error('Error en loginService:', error);
      throw error; // Re-lanzar el error para que pueda ser manejado en el frontend
    });
};

export default loginService;
