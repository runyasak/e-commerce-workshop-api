import fetch from 'node-fetch'

export default function (request, response) {
  const { id } = request.query;

  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(response.status(200).json)
}
