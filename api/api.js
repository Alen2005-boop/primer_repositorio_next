const login = async (username , password) => {
    const response = await fetch(`${URL}/api/auth/login`, {
        method : "POST",
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify({username, password})
    })
    const date = await response.json();

    console.log("Login", date);
}