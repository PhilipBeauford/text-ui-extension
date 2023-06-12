import { extend, Banner } from "@shopify/checkout-ui-extensions";

extend("Checkout::Dynamic::Render", (root, { extensionPoint, i18n }) => {
  root.appendChild(
    root.createComponent(
      Banner,
      { title: "donations-widget" },
      i18n.translate('welcome', {extensionPoint})
    )
  );
  root.mount();
});