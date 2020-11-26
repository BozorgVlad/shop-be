import { APIGatewayProxyHandler } from 'aws-lambda';

export const getShopAdminInfo: APIGatewayProxyHandler = async (_event, _context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'ShopInfo',
            shopAdminName: 'Andrew',
        }, null, 2),
    };
}
