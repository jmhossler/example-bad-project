import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as pythonLambda from '@aws-cdk/aws-lambda-python';

export class Example extends cdk.Construct {
    public handler: lambda.Function;

    constructor(scope: cdk.Construct, id: string) {
        super(scope, id);

        this.handler = new pythonLambda.PythonFunction(this, `${id}`, {
            functionName: `${id}`,
            timeout: cdk.Duration.seconds(10),
            entry: "resources/",
            index: "example.py",
            handler: "hello_world",
            runtime: lambda.Runtime.PYTHON_3_8
        });
    }
}
