const getImagen = async () => {
  try {
    const apikey = "KOyy55B54NYHiLNNZmTcJ1caQcyfi7Qi";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apikey}`
    );
    const { data } = resp.json();
    const { url } = data.images.original.url;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    //manejo del error
    console.error(error)
  }
};

getImagen();
