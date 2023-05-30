import { extend, Text, BlockStack } from "@shopify/checkout-ui-extensions";

extend('Checkout::Dynamic::Render', (root) => {
	const text = root.createComponent(BlockStack, undefined, [
	  root.createComponent(Text, {size: 'base', appearance: 'critical', emphasis: "bold"}, '* Please confirm your shipping address is correct'),
	]);
  
	root.appendChild(text);
  });