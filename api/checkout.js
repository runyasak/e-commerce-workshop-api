const bodyKeys = ['firstname', 'lastname', 'productId', 'quantity', 'address']

export default function (request, response) {
  if (request.method === 'OPTIONS') { return response.status(200).json(({ body: "OK" })) }

  if (!request.body) {
    return response.status(400).json({ error: 'Bad Request' });
  }

  const validResults = Object.keys(request.body).reduce(
    (acc, cur) => !!request.body[cur] ? [...acc, cur] : acc, []
  )

  return validResults.length === bodyKeys.length
    ? response.status(200).json({ status: 'Success !!' })
    : response.status(400).json({ error: 'Bad Request' });
}
