import { expect as expectCDK, matchTemplate, MatchStyle, SynthUtils } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as ExampleProject from '../lib/example-project-stack';

describe('Example Stack', () => {
    const app = new cdk.App();
    const stack = new ExampleProject.ExampleProjectStack(app, 'MyTestStack');

    test("Snapshot", () => {
        expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
    });
});
