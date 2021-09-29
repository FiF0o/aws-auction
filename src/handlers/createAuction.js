async function createAuction(event, context) {
  console.log({event})
  console.log({context})
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello' }),
  };
}

export const handler = createAuction;


