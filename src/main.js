import './style.css'

const apiKey = '0ehrAbe1Xqtj3bjFUiRV6NUJBPnfDZCT';
const query = 'funny cat';
const $form = document.querySelector('#form')

    $form.addEventListener('submit', (event) => {
        event.preventDefault();

        console.log($form.value) 
    })

fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=5`)
  .then(response => response.json())
  .then(data => {
    data.data.forEach(gif => {
      console.log(gif.images.original.url); // URL del GIF
    });
  })
  .catch(err => console.error(err));
