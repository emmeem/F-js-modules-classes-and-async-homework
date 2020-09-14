export const getPoetry = async () => {
    const URL = 'https://v1.jinrishici.com/all.json';

    const res = await fetch(URL)
    const resJson = await res.json();

    const result = [];
    result.push(resJson.origin)
    result.push(resJson.author)
    result.push(resJson.content)
    return result;
}

