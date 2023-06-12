import { extend, Icon, Text, BlockStack, Divider, InlineLayout } from "@shopify/checkout-ui-extensions";

extend('Checkout::Dynamic::Render', (root) => {
	const valueProps = root.createComponent(
		BlockStack, 
		{
			spacing: 'tight',
		}, 
		[
			root.createComponent(Divider, {size: 'small', direction: 'inline', alignment: "center"}),
			root.createComponent(
				InlineLayout,
				{
				  spacing: "extraTight",
				  // Use the `columns` property to set the width of the columns
				  // Image: column should be 64px wide
				  // BlockStack: column, which contains the title and price, should "fill" all available space
				  // Button: column should "auto" size based on the intrinsic width of the elements
				  columns: [18, 250],
				  inlineAlignment: 'start',
				  blockAlignment: 'center',
				  padding: "tight",
				},
				[
					root.createComponent(Icon, {size: 'base', source: 'lock', appearance: "monochrome"}),
					root.createComponent(Text, {size: 'base', appearance: 'monochrome', emphasis: "bold"}, 'Secure and encrypted checkout'),
				]
			),

			root.createComponent(Divider, {size: 'small', direction: 'inline', alignment: "center"}),
			root.createComponent(
				InlineLayout,
				{
				  spacing: "extraTight",
				  // Use the `columns` property to set the width of the columns
				  // Image: column should be 64px wide
				  // BlockStack: column, which contains the title and price, should "fill" all available space
				  // Button: column should "auto" size based on the intrinsic width of the elements
				  columns: [18, 250],
				  inlineAlignment: 'start',
				  blockAlignment: 'center',
				  padding: "tight",
				},
				[
					root.createComponent(Icon, {size: 'base', source: 'success', appearance: "monochrome"}),
					root.createComponent(Text, {size: 'base', appearance: 'monochrome', emphasis: "bold"}, '1-year warranty'),
				]
			),

			root.createComponent(Divider, {size: 'small', direction: 'inline', alignment: "center"}),
			root.createComponent(
				InlineLayout,
				{
				  spacing: "extraTight",
				  // Use the `columns` property to set the width of the columns
				  // Image: column should be 64px wide
				  // BlockStack: column, which contains the title and price, should "fill" all available space
				  // Button: column should "auto" size based on the intrinsic width of the elements
				  columns: [18, 250],
				  inlineAlignment: 'start',
				  blockAlignment: 'center',
				  padding: "tight",
				},
				[
					root.createComponent(Icon, {size: 'base', source: 'store', appearance: "monochrome"}),
					root.createComponent(Text, {size: 'base', appearance: 'monochrome', emphasis: "bold"}, '30-day return policy'),
				]
			)
		],
	);

	root.appendChild(valueProps);
  });