const cohort = "2301-FTB-PT-WEB-PT";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${cohort}`;

const fetchPosts = async () => {
    try {
        const url = `${BASE_URL}/posts`;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const result = await response.json();
        console.log(result);
        if (result.error) throw new Error("SERVER ERROR" + result.error.message);
        return result;
    } catch (err) {
        console.error(err)
    }
}

export { fetchPosts };
