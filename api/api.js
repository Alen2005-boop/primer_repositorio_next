const URL ="https://api-react-taller-production.up.railway.app" 

const register = async (username, name, password) => {

    const response = await fetch(`${URL}/api/auth/register`, {
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
    const response = await fetch(`${URL}/api/auth/login`, {
        method : "POST",
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify({username , password})
    } )

    const data = await response.json();

    localStorage.setItem("token" , data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    console.log("Login" , data);
}

export const locals = async (search = "", type = "", price = "", zone = "") => {
    const token = localStorage.getItem("token");

    const response = await fetch(
        `${URL}/api/locals?search=${search}&type=${type}&price=${price}&zone=${zone}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
    );

    const data = await response.json();

    console.log("Locales", data);

    return data;
};


export { register, login , locals}