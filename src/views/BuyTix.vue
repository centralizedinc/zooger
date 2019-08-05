<template>
  <a-card title="Zoobic Safari" :bodyStyle="{ 'text-align': 'left'}">
    <img
      alt="Zoobic Safari"
      src="https://www.zoomanity.com.ph/wp-content/uploads/2016/11/01INSIDEBANNER_PARKS-e1503026907330.jpg"
      slot="cover"
    />

    <p>
      <b>Date of Visit</b>
      <span style="color: red">*</span>
      <a-date-picker v-model="details.date_visit" style="margin-left: 25px;" />
    </p>

    <a-card title="Tickets" style="margin-bottom: 10px">
      <p>
        <span>
          <b>Adult Rate : PHP 486.5</b>
        </span>
        <br />
        <span>
          <b>Child Rate : PHP 416.5</b>
        </span>
        <br />
      </p>
      <a-row>
        <a-col :span="8">
          <span>Zoobic Safari Adult</span>
        </a-col>
        <a-col :span="8">
          <span>
            <a-input-number v-model="details.ticket.adult_qty"></a-input-number>
          </span>
        </a-col>
        <a-col :span="8">
          <span>PHP {{total_adult}}</span>
        </a-col>
        <a-col :span="24">
          <a-divider style="margin: 10px 0"></a-divider>
        </a-col>
        <a-col :span="8">
          <span>Zoobic Safari Child</span>
        </a-col>
        <a-col :span="8">
          <span>
            <a-input-number v-model="details.ticket.child_qty"></a-input-number>
          </span>
        </a-col>
        <a-col :span="8">
          <span>PHP {{total_child}}</span>
        </a-col>
      </a-row>
      <br />
      <p>
        <span>▪️ Note: Children below 3ft is FREE</span>
        <br />
        <span>▪️ Zoobic Safari Child (3ft-4ft)</span>
        <br />
        <span>▪️ 4ft above is adult rate</span>
      </p>
    </a-card>

    <a-card title="Amenities" style="margin-bottom: 10px">
      <p>
        <span>
          <b>Animal Food Basket (Zoobic Park) : PHP 100</b>
        </span>
        <br />
        <span>
          <b>Chicken (Tiger Safari Ride) : PHP 200</b>
        </span>
        <br />
        <span>
          <b>Aeta's Inazal : PHP 449</b>
        </span>
      </p>

      <a-row>
        <a-col :span="8">
          <span>Animal Food Basket</span>
        </a-col>
        <a-col :span="8">
          <span>
            <a-input-number v-model="details.amenities.food_basket_qty"></a-input-number>
          </span>
        </a-col>
        <a-col :span="8">
          <span>PHP {{total_food}}</span>
        </a-col>
        <a-col :span="24">
          <a-divider style="margin: 10px 0"></a-divider>
        </a-col>
        <a-col :span="8">
          <span>Chicken (Tiger Safari Ride)</span>
        </a-col>
        <a-col :span="8">
          <span>
            <a-input-number v-model="details.amenities.chicken_qty"></a-input-number>
          </span>
        </a-col>
        <a-col :span="8">
          <span>PHP {{total_chicken}}</span>
        </a-col>
        <a-col :span="24">
          <a-divider style="margin: 10px 0"></a-divider>
        </a-col>
        <a-col :span="8">
          <span>Aeta's Inazal</span>
        </a-col>
        <a-col :span="8">
          <span>
            <a-input-number v-model="details.amenities.inazal_qty"></a-input-number>
          </span>
        </a-col>
        <a-col :span="8">
          <span>PHP {{total_inazal}}</span>
        </a-col>
      </a-row>
    </a-card>
    <p>
      <b>Total : PHP {{total}}</b>
    </p>
    <a-button type="primary" block @click="submit">Proceed to Payment</a-button>
  </a-card>
</template>

<script>
export default {
  data() {
    return {
      details: {
        date_visit: null,
        ticket: {
          adult_qty: 0,
          child_qty: 0
        },
        amenities: {
          food_basket_qty: 0,
          chicken_qty: 0,
          inazal_qty: 0
        }
      }
    };
  },
  computed: {
    total_adult() {
      return parseInt(this.details.ticket.adult_qty) * 486.5;
    },
    total_child() {
      return parseInt(this.details.ticket.child_qty) * 416.5;
    },
    total_food() {
      return parseInt(this.details.amenities.food_basket_qty) * 100;
    },
    total_chicken() {
      return parseInt(this.details.amenities.chicken_qty) * 200;
    },
    total_inazal() {
      return parseInt(this.details.amenities.inazal_qty) * 449;
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
      this.$store.commit("SET_DETAILS", this.details);
      this.$store.commit("SET_SENDER", this.$route.query.sender);
      this.$router.push("/payment/summary");
    }
  }
};
</script>

<style>
</style>
