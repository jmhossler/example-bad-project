#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ExampleProjectStack } from '../lib/example-project-stack';

const app = new cdk.App();
new ExampleProjectStack(app, 'ExampleProjectStack');
