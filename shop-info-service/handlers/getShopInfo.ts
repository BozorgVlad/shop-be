import { APIGatewayProxyHandler } from 'aws-lambda';

export const getShopInfo: APIGatewayProxyHandler = async (_event, _context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'ShopInfo',
            shopName: 'Amazon',
        }, null, 2),
    };
}
