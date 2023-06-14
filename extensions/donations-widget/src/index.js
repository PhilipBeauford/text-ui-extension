import {
	extend,
	BlockStack,
	View,
	InlineLayout,
	InlineStack,
	Image,
	Pressable,
	Icon,
	Text,
	TextField,
	Form,
	Button,
	Disclosure,
	Divider,
	Checkbox,
	Select,
	Banner,
  } from '@shopify/checkout-ui-extensions';
  

  extend('Checkout::Dynamic::Render', (root, { lines, applyCartLinesChange, query, i18n }) => {
	const openIds = ['one'];
  


	const checkDrop = root.createComponent(
		  InlineLayout,
		  {
			blockAlignment: 'center',
			spacing: 'base',
			columns: ['auto', 'fill'],
			padding: 'loose',
			border: ['none', 'none', 'none', 'none'],
		  },
		  [
			root.createComponent(Checkbox, {
			  toggles: "one",
			  checked: "",
			  onChange: () => {
				if( checkDrop.children[0].props.checked == "") {
					checkDrop.updateProps({ border: ['none', 'none', 'base', 'none']});

                    checkDrop.children[0].updateProps( {checked: "false"})

					console.log('checkdrop true?', checkDrop);

				} else if(checkDrop.children[0].props.checked == 'false') {
					checkDrop.updateProps({ border: ['none', 'none', 'none', 'none']});

					checkDrop.children[0].updateProps( {checked: ""})

					console.log('checkdrop false?', checkDrop);

				}

			  }
			}),
			'Show your support for the Carry On Foundation.',
		  ],
	);
  

	console.log('checkbox checkDrop', checkDrop);
	


	const selector = 	root.createComponent(Select, {
		label: 'Custom Donation',
		value: 1,
		id: 'donate-select',
		options: 
		[
			{
				value: 1,
				label: '$1',
			},
			{
				value: 2,
				label: '$2',
			},
			{
				value: 3,
				label: '$3',
			},
			{
				value: 4,
				label: '$4',
			},
			{
				value: 5,
				label: '$5',
			},
			{
				value: 6,
				label: '$6',
			},
			{
				value: 7,
				label: '$7',
			},
			{
				value: 8,
				label: '$8',
			},
			{
				value: 9,
				label: '$9',
			},
			{
				value: 10,
				label: '$10',
			},
		],
		onChange: (value) => {
			selector.updateProps({value: parseInt(value)});
		}
	  })

console.log('selector', selector);




	const disclosureView = root.createComponent(
	  View,
	  {
		id: "one",
		padding: ['base', 'base', 'base', 'base'],
	  },
	  [
		root.createComponent(
		  Form,
		  {
			onSubmit: () =>
			  console.log('onSubmit event'),
		  },
		  [

			root.createComponent(BlockStack, {}, [
			  root.createComponent(
				InlineLayout,
				{
				  columns: ['fill', 'fill'],
				  spacing: 'none',
				},
				[

				  root.createComponent(Button, {
					type: 'secondary',
					id: 'Button2',
					onPress: () => {
						selector.updateProps({ value: 2 });
					}
				  }, '$2'),

				  root.createComponent(Button, {
					type: 'secondary',
					id: 'Button5',
					onPress: () => {
						selector.updateProps({ value: 5 });
					}
				  }, '$5'),

				  root.createComponent(Button, {
					type: 'secondary',
					id: 'Button10',
					onPress: () => {
						selector.updateProps({ value: 10 });
					}
				  }, '$10'),

				],
			  ),

			  root.createComponent(
				InlineLayout,
				{
				  columns: ['fill', 'auto'],
				  spacing: 'base',
				},
				[


					selector,

					  root.createComponent(View, {}, [
						root.createComponent(
						  Button,
						  {
							accessibilityRole: 'submit',
							kind: 'secondary',
							onPress: async () => {;
					  
								// Apply the cart lines change
								const result = await applyCartLinesChange({
								  type: "addCartLine",
								  merchandiseId: 'gid://shopify/ProductVariant/45393245176115',
								  quantity: parseInt(selector.props.value),
								});
					  					  
								if (result.type === "error") {
								  // An error occurred adding the cart line
								  // Verify that you're using a valid product variant ID
								  // For example, 'gid://shopify/ProductVariant/123'
								  console.error('error', result.message);
								  const errorComponent = root.createComponent(
									Banner,
									{ status: "critical" },
									["There was an issue adding this product. Please try again."]
								  );
								  // Render an error Banner as a child of the top-level app component for three seconds, then remove it
								  const topLevelComponent = root.children[0];
								  topLevelComponent.appendChild(errorComponent);
								  setTimeout(
									() => topLevelComponent.removeChild(errorComponent),
									3000
								  );
								}
							  },
						  },
						  'Update Donation',
						),
					  ]),
				],
			  ),

			  root.createComponent(
				Text,
				{
					size: 'base'
				},
				'Thank you for your donation!'
			  )

			]),
		  ],
		),
	  ],
	);
  


	// disclosure is a drop-down container
	// both checkbox 'div' & entire disclosureView are rendered by this one disclosure/dropdown
	const donationWidget = root.createComponent(
	  Disclosure,
	  {
		open: 'false',
		onToggle: (open) => {
			if (donationWidget.props.open == "false") {
				donationWidget.updateProps({open: 'one'})
				console.log('opened?', donationWidget.props.open);
			} else {
				donationWidget.updateProps({open: 'false'})
				console.log('closed?', donationWidget.props.open);

			}


		}
	  },
	  [checkDrop, disclosureView],
	);

console.log('donate widget', donationWidget);




	// Main app that contains the donation widget.. which contains all fields, wrapped as one 'box' using border
	const donationsContainer = root.createComponent(
	  View,
	  {
		maxInlineSize: 'fill',
		cornerRadius: 'large',
		border: 'base',
	  },
	  [
		root.createComponent(
		  BlockStack,
		  {
			spacing: 'none',
		  },
		  [
			donationWidget,
		  ],
		),
	  ],
	);
  
	root.appendChild(donationsContainer);
  });
  