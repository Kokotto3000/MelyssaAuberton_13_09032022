// A mock function to mimic making an async request for data
export default async function fetchByCredentials(email, password) {
    return await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
    .then(response=> response.json())
};