const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
  addImg(res.data)
})

const addImg = (shows) => {
  for (let result of shows) {
    const newImg = document.createElement('IMG');
    newImg.src = result.show.image.medium;
    document.body.append(newImg);
  }
}