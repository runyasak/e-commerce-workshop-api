import fetch from 'node-fetch'

export default function (request, response) {
  fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(response.status(200).json)
}
