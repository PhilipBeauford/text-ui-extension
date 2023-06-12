import { extend, Text, InlineStack } from "@shopify/checkout-ui-extensions";


extend('Checkout::Dynamic::Render', (root) => {
	const text = root.createComponent(
		 InlineStack, 
		undefined, 
		[
			root.createComponent(Text, {size: 'base', appearance: 'critical', emphasis: "bold"}, '* Please confirm your shipping address is correct'),
		],
	);

	root.appendChild(text);
  });