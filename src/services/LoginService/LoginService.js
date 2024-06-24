import { jwtDecode } from 'jwt-decode';

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
        return response.json().then((data) => {
          throw new Error(data.message || 'La solicitud no fue exitosa, login');
        });
      }
      return response.json();
    })
    .then((newData) => {
      console.log('Datos de respuesta de loginService:', newData);
      if (newData.success && newData.data) {
        const decodedToken = jwtDecode(newData.data);
        if (decodedToken.role === 'administrador') {
          setLocalStorage(newData.data);
          return { success: true };
        } else {
          throw new Error('No tiene permiso de administrador');
        }
      } else {
        throw new Error('Email o password incorrecta');
      }
    })
    .catch((error) => {
      console.error('Error en loginService:', error);
      throw error; // Re-lanzar el error para que pueda ser manejado en el frontend
    });
};

export default loginService;
