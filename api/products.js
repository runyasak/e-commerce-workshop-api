export default function handler(request, response) {
  fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(response.status(200).json)
}
