export const getPoetry = () => {
    return fetch("https://v1.jinrishici.com/all.json", {
        method: 'GET',
    })
    .then(response => response.json())
    .then((result) => {
        return [result.origin, result.author, result.content];
    })
    .catch((err) =>{
        err.massage;
    }); 
}

