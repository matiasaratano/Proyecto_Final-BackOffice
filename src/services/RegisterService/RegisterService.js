const URL = 'http://127.0.0.1:8080';

const registerService = (register) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(register),
  };
  // Se retorna la promesa de fetch
  return fetch(`${URL}/api/user/`, requestOptions)
    .then((response) => {
      console.log('RESPUESTA: ' + JSON.stringify(response));
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa, registro');
      }
      return response.text();
    })
    .then((data) => {
      const newData = JSON.parse(data);
      return newData;
    });
};

export default registerService;
