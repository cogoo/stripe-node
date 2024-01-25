// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface CustomerSessionCreateParams {
      /**
       * Configuration for each component. Exactly 1 component must be enabled.
       */
      components: CustomerSessionCreateParams.Components;

      /**
       * The ID of an existing customer for which to create the customer session.
       */
      customer: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace CustomerSessionCreateParams {
      interface Components {
        /**
         * Configuration for buy button.
         */
        buy_button?: Components.BuyButton;

        /**
         * Configuration for the payment element.
         */
        payment_element?: Components.PaymentElement;

        /**
         * Configuration for the pricing table.
         */
        pricing_table?: Components.PricingTable;
      }

      namespace Components {
        interface BuyButton {
          /**
           * Whether the buy button is enabled.
           */
          enabled: boolean;
        }

        interface PaymentElement {
          /**
           * Whether the payment element is enabled.
           */
          enabled: boolean;

          /**
           * This hash defines whether the payment element supports certain features.
           */
          features?: PaymentElement.Features;
        }

        namespace PaymentElement {
          interface Features {
            /**
             * Controls whether the Payment Element allows the removal of a saved payment method.
             */
            payment_method_remove?: Features.PaymentMethodRemove;

            /**
             * Controls whether the Payment Element offers to save a new payment method.
             */
            payment_method_save?: Features.PaymentMethodSave;

            /**
             * Controls whether the Payment Element offers to set a payment method as the default.
             */
            payment_method_set_as_default?: Features.PaymentMethodSetAsDefault;

            /**
             * Controls whether the Payment Element allows the updating of a saved payment method.
             */
            payment_method_update?: Features.PaymentMethodUpdate;
          }

          namespace Features {
            type PaymentMethodRemove = 'disabled' | 'enabled';

            type PaymentMethodSave = 'disabled' | 'enabled';

            type PaymentMethodSetAsDefault = 'disabled' | 'enabled';

            type PaymentMethodUpdate = 'disabled' | 'enabled';
          }
        }

        interface PricingTable {
          /**
           * Whether the pricing table is enabled.
           */
          enabled: boolean;
        }
      }
    }

    class CustomerSessionsResource {
      /**
       * Creates a customer session object that includes a single-use client secret that you can use on your front-end to grant client-side API access for certain customer resources.
       */
      create(
        params: CustomerSessionCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.CustomerSession>>;
    }
  }
}
