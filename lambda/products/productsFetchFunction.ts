import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent,
    context: Context): Promise<APIGatewayProxyResult> {

        const lamdaRequestId = context.awsRequestId
        const apiRequestId = event.requestContext.requestId

        console.log(`API Gateway RequestId: ${apiRequestId}, LambdaRequestId: ${lamdaRequestId}`)


        const method = event.httpMethod
        if(event.resource === "/products") {
            if(method === "GET") {
                console.log("GET")
                return  {
                    statusCode: 200,
                    body: JSON.stringify({
                        success: true
                    })
                }
            }
        }


        return {
            statusCode: 400,
            body: JSON.stringify({
                success: false
            })
        }

    }