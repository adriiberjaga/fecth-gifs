import "./style.css";

const apiKey = "0ehrAbe1Xqtj3bjFUiRV6NUJBPnfDZCT";
const $form = document.querySelector("#form");
const $input = document.querySelector("#searchInput");
const $results = document.querySelector('#results')
const $numberOfGifs = document.querySelector('#numberOfGifs')
$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = $input.value.trim();
  let queryNumber = $numberOfGifs.value;
  if (!query) return;
  if(!queryNumber) queryNumber = 1
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${queryNumber}&lang=es`
  )
    .then((response) => response.json())
    .then((data) => {
      $results.innerHTML = ''
      data.data.forEach((gif) => {
        console.log(gif.images.original.url); 
        createGift(gif)
      });
    })
    .catch((err) => console.error(err));
});
function createGift (gif) {
  const img = document.createElement('img')
  img.src = gif.images.original.url
  img.style.width = '200px'
  $results.appendChild(img)
}