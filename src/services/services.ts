
export function login(url: string, userData: object){
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })
    .then(response => {
    if (!response.ok) {
    throw new Error('Error en la solicitud de autenticación');
    }
    return response.json(); // Convertimos la respuesta a JSON
    })
    .then(data => {
    // Aquí puedes trabajar con la respuesta del servidor
    console.log(data);
    })
    .catch(error => {
    console.error('Error:', error);
    });
}