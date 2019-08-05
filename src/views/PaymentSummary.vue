<template>
  <a-card title="Payment SUmmary">
    <table>
      <tr>
        <th>Item</th>
        <th>Rate</th>
        <th>Qty</th>
        <th>Total</th>
      </tr>
      <tr v-for="(item, index) in details" :key="index">
        <template v-if="item.subtotal">
          <td colspan="3">
            <b>{{item.description}}</b>
          </td>
          <td style="width: 80px">₱ {{item.subtotal}}</td>
        </template>
        <template v-else>
          <td>{{item.description}}</td>
          <td style="width: 80px">₱ {{item.rate}}</td>
          <td>{{item.qty}}</td>
          <td style="width: 80px">₱ {{item.total}}</td>
        </template>
      </tr>
    </table>
    <a-button type="primary" block @click="submit">Submit</a-button>
  </a-card>
</template>

<script>
import axios from "axios";
export default {
  created() {
    console.log(this.$store.state.details.ticket);
  },
  computed: {
    details() {
      var datas = [];
      datas.push(
        {
          description: "Zoobic Safari - Adult",
          rate: 486.5,
          qty: this.$store.state.details.ticket.adult_qty,
          total: this.total_adult
        },
        {
          description: "Zoobic Safari - Child",
          rate: 416.5,
          qty: this.$store.state.details.ticket.child_qty,
          total: this.total_child
        },
        {
          description: "Sub Total",
          subtotal: this.total_adult + this.total_child
        },
        {
          description: "Animal Food Basket (Zoobic Park)",
          rate: 100,
          qty: this.$store.state.details.amenities.food_basket_qty,
          total: this.total_food
        },
        {
          description: "Chicken (Tiger Safari Ride)",
          rate: 200,
          qty: this.$store.state.details.amenities.chicken_qty,
          total: this.total_chicken
        },
        {
          description: "Aeta's Inazal",
          rate: 449,
          qty: this.$store.state.details.amenities.inazal_qty,
          total: this.total_inazal
        },
        {
          description: "Sub Total",
          subtotal: this.total_food + this.total_chicken + this.total_inazal
        },
        {
          description: "Total",
          subtotal: this.total
        }
      );
      console.log("datas :", datas);
      return datas;
    },
    total_adult() {
      return parseInt(this.$store.state.details.ticket.adult_qty) * 486.5;
    },
    total_child() {
      return parseInt(this.$store.state.details.ticket.child_qty) * 416.5;
    },
    total_food() {
      return (
        parseInt(this.$store.state.details.amenities.food_basket_qty) * 100
      );
    },
    total_chicken() {
      return parseInt(this.$store.state.details.amenities.chicken_qty) * 200;
    },
    total_inazal() {
      return parseInt(this.$store.state.details.amenities.inazal_qty) * 449;
    },
    total() {
      return (
        this.total_adult +
        this.total_child +
        this.total_food +
        this.total_chicken +
        this.total_inazal
      );
    }
  },
  methods: {
    submit() {
      axios.post("https://zoobic-safari.herokuapp.com/facebook/webhook", {
        entry: [
          {
            messaging: [
              {
                sender: {
                  id: this.$store.state.sender
                },
                postback: {
                  payload: "CALLBACK_BUYTIX"
                }
              }
            ]
          }
        ]
      }).then((result) => {
          MessengerExtensions.requestCloseBrowser(
                        function success() {
                            resolve()
                            // webview closed
                        },
                        function error(err) {
                            reject(err)
                            // an error occurred
                        }
                    );
      }).catch((err) => {
          console.log('err :', err);
      });
    }
  }
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
