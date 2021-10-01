import * as cdk from '@aws-cdk/core';
import { Example } from "./lambda";

export class ExampleProjectStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda = new Example(this, `${id}-lambda`);
  }
}
