import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const hello = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
                input: event,
            }, null, 2),
        };

        return response;
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Internal Server Error",
            }),
        };
    }
};