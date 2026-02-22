const URL ="https://api-react-taller-production.up.railway.app" 
// const TOKEN_KEY = "token"

// export const saveToken = (token) => {
//   localStorage.setItem(TOKEN_KEY, token)
// }

// export const getToken = () => {
//   return localStorage.getItem(TOKEN_KEY)
// }

// export const logout = () => {
//   localStorage.removeItem(TOKEN_KEY)
// }

const register = async (username, name, password) => {

    const response = await fetch('${URL}/api/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(username, name, password )
    });

    const data = await response.json();
    localStorage.setItem("token" , data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    console.log("informacion del registro", data)
}

const login = async (username, password) => {
    const response = await fetch(`${URL}/api/api/login`, {
        method : "POST",
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify({username , password})
    } )

    const data = await response.json();

    localStorage.setItem("token" , data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    console.log("Login" , data);
}

// const login = async (username, password) => {
//     const response = await fetch(`${URL}/api/auth/login`, {
//         method : "POST",
//         headers:{"Content-Type" : "application/json"},
//         body: JSON.stringify(username, password)
//     })

//     const date = await response.json();
//     console.log("Login", date);
// }



export { register, login }