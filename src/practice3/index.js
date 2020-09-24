export const getPoetry = () => {
    // TODO feedback：fetch默认的method就是get，第二个参数可以不用传
    return fetch("https://v1.jinrishici.com/all.json", {
        method: 'GET',
    })
    .then(response => response.json())
    .then((result) => {
        return [result.origin, result.author, result.content];
    })
    .catch((err) =>{
        // TODO feedback:放了个表达式在这里，可以简单得console.log就行
        err.massage;
    });
}

