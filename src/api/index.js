const BASE_URL = "https://strangers-things.herokuapp.com/api/2301-FTB-PT-WEB-PT";

const getURL = (path) => {
    const url = BASE_URL + path;
    console.log(url);
    return url;
}

const getOptions = (method, body, token) => ({
    method: method ? method.toUpperCase() : "GET",
    headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
    },
    ...(body && {
        body: JSON.stringify(body)
    })
});

export const getAPI = async ({ path, method, body, token }) => {
    try {
        const result = await fetch(
            getURL(path),
            getOptions(method, body, token)
        );
        const response = await result.json();
        console.log(response);
        // if result.json comes back error, want to see error first so that catch can 'catch it' later
        if (response.error) { 
            alert(response.error.message);
        } else if (response.data.message) {
            alert("Thanks for logging into our service.")
        }
        return response?.data;
    } catch (e) {
        console.error(e);
    }
}
