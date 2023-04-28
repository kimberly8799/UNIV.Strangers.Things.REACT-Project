Run npm install --save react react-router react-router-dom@5
Run npm install --save-dev react-scripts

npm start

Enjoy!




 




         const requestBody = {
            user: {
                username,
                password
            }
        }

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(requestBody)
        };

        const result = await fetch (BASE_URL, options);
        console.log(BASE_URL);
        const response = await result.json();
        console.log(response);
        