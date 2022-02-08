<template>
  <div v-if="paidFor" class="modal">
    <div class="modal-content">
      <h1>You have paid for herbs, You will get email confirmation soon.</h1>
      <br />
    </div>
  </div>

  <div v-if="!paidFor" class="modal">
    <div class="modal-content">
      <h1>Pay With Paypal</h1>
      <br />
      <div ref="paypal"></div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "HelloWorld",

  data: function () {
    const route = useRoute();
    return {
      orderId: route.params.orderId,
      loaded: false,
      paidFor: false,
      product: {
        price: 0.01,
        description:
          "You have paid for herbs, You will get email confirmation soon.",
      },
    };
  },
  mounted: function () {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=ATKwZmRkE2-pzB4MqSZvfrE-tRolr3AR2HPZw--jyeGThU5guAkCERifN_A12G4Uin-eSah3VzYf3D8g&currency=CAD";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function () {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    value: this.product.price,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.data;
            this.paidFor = true;

            console.log(order);
            console.log(this.orderId);

          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modal-content {
  text-align: centerv;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 50px;
  border: 1px solid #888;
  width: 600px; /* Could be more or less, depending on screen size */
}
</style>
