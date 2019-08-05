<template>
  <a-form>
    <!-- ticket pic -->
    <a-card hoverable>
      <img
        alt="Zoobic Safari"
        src="https://www.zoomanity.com.ph/wp-content/uploads/2016/11/01INSIDEBANNER_PARKS-e1503026907330.jpg"
        slot="cover"
      />
      <a-card-meta title></a-card-meta>

      <!-- picker -->
      <a-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        style="margin-bottom:0;"
        label="Date of Visit"
      >
        <a-form-item help="Select a date to begin">
          <a-date-picker style="width: 100%" />
        </a-form-item>
      </a-form-item>

      <div>
        <a-input-number
          :min="1"
          :max="10"
          v-model="value1"
          @change="onChange"
          label="Adult Ticket"
        />
        Adult Ticket：{{value1}}
      </div>
      <br />
      <div>
        <a-input-number :min="1" :max="10" v-model="value2" @change="onChange" />
        Kids Ticket：{{value2}}
      </div>
      <div>
        <span>Note: Children below 3ft is FREE</span>
      </div>

      <br />
      <div>
        <span>Additional Options</span>
      </div>

      <div style="background-color: #ececec; padding: 20px;">
        <a-row :gutter="16">
          <a-col :span="8">
            <a-card title="Card title" :bordered="false">
              <p>card content</p>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card title="Card title" :bordered="false">
              <p>card content</p>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card title="Card title" :bordered="false">
              <p>card content</p>
            </a-card>
          </a-col>
        </a-row>
      </div>
      <br />

      <a-button type="primary" block>Proceed to Payment</a-button>
    </a-card>
  </a-form>
</template>
<script>
export default {
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      },
      value1: 0,
      value2: 0
    };
  }
};
</script>

<style>
</style>
