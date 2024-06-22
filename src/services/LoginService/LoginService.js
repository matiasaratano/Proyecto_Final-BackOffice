const URL = "PEGA TU URL ACA";

const setLocalStorage = async (token) => {
    await localStorage.setItem("token", token);
    console.log("login service local storage", localStorage.getItem('token'));
};

const loginService = (login) => {
    const requestOptions = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(login)
    };
    // Aquí se retorna la promesa de fetch
    return fetch(`${URL}/api/user/login`, requestOptions)
        .then(response => {
            console.log("RESPUESTA: " + JSON.stringify(response));
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa, login');
            }
            return response.text();
        })
        .then(data => {
            const newData = JSON.parse(data);
            console.log("NewData", newData.data);
            setLocalStorage(newData.data);
            // Asegúrate de que newData.data tenga la propiedad 'success' o ajusta esta parte según la estructura de tus datos
            return newData; // Aquí se retorna newData para que pueda ser usado después de que se resuelva la promesa
        });
};

export default loginService;