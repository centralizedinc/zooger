<template>
  <a-card title="Payment via Credit Card" :bodyStyle="card_body_style">
    <a-card title="Card Details">
      <p>
        Credit Card
        <span style="color: red">*</span>
        <a-input-number
          placeholder="####-####-####-####"
          style="width: 100%"
          v-model="card_details.details.card_number"
          :formatter="value => value.toString().replace(/(?<=\d{4})\d(\d{0})/, '-')"
        />
      </p>
      <p>
        CVC
        <span style="color: red">*</span>
        <a-input-number style="width: 100%" v-model="card_details.details.cvc" />
      </p>
      <p>
        Card holder
        <span style="color: red">*</span>
        <a-input v-model="card_details.details.name" />
      </p>
      <p>
        Date Expiry
        <span style="color: red">*</span>
        <a-month-picker
          placeholder="YYYY-MM"
          v-model="card_details.details.date_expiry"
          style="width: 100%"
        />
      </p>
      <a-row>
        <a-col :span="24">
          <span class="caption">Powered by:</span>
        </a-col>
        <a-col :span="24">
          <a href="https://magpie.im/" target="_blank">
            <img
              position="left left"
              contain
              height="30"
              src="https://magpie.im/assets/images/magpie-logo-outlines.svg"
            />
          </a>
          <a
            href="https://magpie.im/"
            target="_blank"
            class="caption"
            style="font-weight: bold; margin-left: -45px;"
          >Magpie.IM Pte. Ltd.</a>
        </a-col>
      </a-row>
      <br />
      <a-button type="primary" @click="submit" block>Pay</a-button>
    </a-card>
  </a-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      card_details: {
        mode: 0,
        details: {},
        reference_no: "",
        sender: ""
      }
    };
  },
  computed: {
    card_body_style() {
      return { "text-align": "left" };
    }
  },
  created() {
    this.card_details.mode = 0;
    this.card_details.reference_no = 1
    this.card_details.sender = this.$store.state.sender;
  },
  methods: {
    submit() {
      
      axios
        .post("https://zoobic-safari.herokuapp.com/facebook/webhook", {
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
        })
        .then(result => {
          MessengerExtensions.requestCloseBrowser(
            function success() {
              console.log("success");
              // webview closed
            },
            function error(err) {
              console.log(err);
              // an error occurred
            }
          );
        })
        .catch(err => {
          console.log("err :", err);
          window.close();
        });
    }
  }
};
</script>

<style>
.caption {
  font-size: 10px;
}
</style>
