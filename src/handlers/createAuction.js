import * as Constants from '../../constant'

async function createAuction(event, context) {
  console.log({event})
  console.log({context})

  const {title} = JSON.parse(event.body)
  const auction = {
    title,
    status: Constants.AUCTION_STATUS.OPEN,
    createdAt: new Date().toISOString()
  }

  return {
    statusCode: 201,
    body: JSON.stringify(auction),
  };
}

export const handler = createAuction;

