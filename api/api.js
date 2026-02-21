<<<<<<< HEAD
const login = async (username , password) => {
    const response = await fetch(`${URL}/api/auth/login`, {
        method : "POST",
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify({username, password})
    })
    const date = await response.json();

    console.log("Login", date);
=======
const URL ="https://api-react-taller-production.up.railway.app/" 


const register = async (username, name, password) => {

    const response = await fetch('${URL}/api/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, name, password })
    });

    const data = await response.json();
    console.log("informacion del registro", data)
}


const login = async (username, password) => {

    const response = await fetch('${URL}/api/auth/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    console.log("informacion del login", data)
>>>>>>> 9d4ff2072f0a23bf3bae80f4c324979e26db159e
}