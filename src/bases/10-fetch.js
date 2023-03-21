const  apikey = 'KOyy55B54NYHiLNNZmTcJ1caQcyfi7Qi';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)

peticion
    .then(resp => resp.json())
    .then(({data}) =>{
        const {url} = data.images.original.url
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    })
    .catch(console.warn);