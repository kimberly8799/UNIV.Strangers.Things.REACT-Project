const BASE_URL = "https://strangers-things.herokuapp.com/api/2301-FTB-PT-WEB-PT/posts";

// const getURL = (path) => {
//     const url = BASE_URL + path;
//     console.log(url);
//     return url;
// }

const getOptions = (method, body, token) => ({
    method: method ? method.toUpperCase() : "GET",
    headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
    },
    ...(body && {
        body: JSON.stringify({
            user: {
                username: "this",
                password: "that"
            }
        })
    })
    //...(body && { body: JSON.stringify(body)})

});


export const getAPI = async ({ method, body, token }) => {
    console.log(token);
    try {
        const result = await fetch(
            //getURL(path),
            BASE_URL,
            getOptions(method, body, token)
        );
        const response = await result.json();
        console.log(response);
        // if result.json comes back error, want to see error first so that catch can 'catch it' later
        if (response.error) throw response.error;

        return response?.data;
    } catch (e) {
        console.error(e);
    }
}




//  async () => {
//     try {
//         const url = `${BASE_URL}/posts`;
//         const response = await fetch(url, {
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         });
//         const result = await response.json();
//         console.log(result);
//         if (result.error) throw new Error("SERVER ERROR" + result.error.message);
//         return result;
//     } catch (err) {
//         console.error(err)
//     }
// }

// export { fetchPosts };
