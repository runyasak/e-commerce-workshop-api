const bodyKeys = ['firstname', 'lastname', 'productId', 'quantity', 'address']

export default function (request, response) {
  console.log(request.body)

  if (!request.body) {
    return response.status(400).json({ error: 'Bad Request' });
  }

  const validResults = Object.keys(request.body).reduce(
    (acc, cur) => !!request.body[cur] ? [...acc, cur] : acc, []
  )

  return validResults.length === bodyKeys
    ? response.status(200).json({ status: 'Success !!' })
    : response.status(400).json({ error: 'Bad Request' });
}
