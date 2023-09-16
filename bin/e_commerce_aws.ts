#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ProductdAppStack } from '../lib/productsApp-stack';
import { ECommerceApiStack } from '../lib/ecommerceApi-stack';

const app = new cdk.App();

const env: cdk.Environment = {
  account: "361629960122",
  region: "us-east-1"
}

const tags = {
  cost: "ECommerce",
  team: "Mauricio"
}

const productsAppStack = new ProductdAppStack(app, 'ProductsApp', { env, tags });

const ecommerceApiStack = new ECommerceApiStack(app, 'ECommerceApi', { productsFetchHandler: productsAppStack.productsFetchHandler, env, tags });

ecommerceApiStack.addDependency(productsAppStack);