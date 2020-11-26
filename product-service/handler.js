'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        productName: "Game",
        price: 999
      },
      null,
      2
    ),
  };
};
