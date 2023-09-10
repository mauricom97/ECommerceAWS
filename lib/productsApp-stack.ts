import * as lambda from "aws-cdk-lib/aws-lambda";
import * as lambdaNodeJs from "aws-cdk-lib/aws-lambda-nodejs";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export class ProductdAppStack extends cdk.Stack {
    readonly productsFetchHandler: lambdaNodeJs.NodejsFunction;


    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.productsFetchHandler = new lambdaNodeJs.NodejsFunction(this, "ProductsFetchFunction", {
            runtime: lambda.Runtime.NODEJS_16_X, // Set version fo runtime of node for executable in prod
            functionName: "ProductsFetchFunction", // Name function
            entry: "lambda/products/productsFetchFunction.ts", // File of function
            handler: "handler", // Method invocation 
            memorySize: 128, // Memory location
            timeout: cdk.Duration.seconds(5), // Execution time
            bundling: {
                minify: true,
                sourceMap: false
            }
        })
    }

}