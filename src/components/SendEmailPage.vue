<template>
    <!-- choice page -->
    <div id="choicePage" class="modal hide">
      <div class="modal-content">
        <br />
        <p v-if="LanCh">
          填写基本信息，我们的医生会用邮件的方式与您联系购买以上中药方剂的详细信息
        </p>
        <p v-if="LanEng">
          Fill in the basic information and our doctors will contact you via
          email
        </p>
        <p v-if="LanCh">
          我们将会通过邮件或者手机号向您确认订单，或者您可以拨打（416)-968-7755
          致电我们的诊所
        </p>
        <p v-if="LanEng">
          We will confirm the order with you via email or phone, or you can
          call（416)-968-7755 for more information
        </p>
        <form ref="form" @submit.prevent="sendEmail">
          <label v-if="LanCh">姓名: </label>
          <input
            v-if="LanCh"
            id="name"
            v-model="name"
            class="border"
            required
          />
          <br />
          <label v-if="LanCh">邮箱：</label>

          <input
            v-if="LanCh"
            id="email"
            class="border"
            v-model="email"
            required
          />
          <br />

          <label v-if="LanCh">手机号（如果希望手机确认订单）：</label>

          <input
            v-if="LanCh"
            id="phone"
            class="border"
            v-model="phone"
            required
          />

          <label v-if="LanEng">Preferred Name: </label>
          <input
            v-if="LanEng"
            id="name"
            class="border"
            v-model="name"
            required
          />

          <label v-if="LanEng">Email: </label>
          <input
            v-if="LanEng"
            id="email"
            class="border"
            v-model="email"
            required
          />
          <label v-if="LanEng"
            >Phone Number (if prefer confirm order via phone)</label
          >
          <input
            v-if="LanEng"
            id="phone"
            class="border"
            v-model="phone"
            required
          />

          <button
            v-if="LanEng"
            type="submit"
            class="
              p-4
              rounded-xl
              font-bold
              mb-3
              relative
              next_hover
              border-2
              text-black
              border-black
              text-center
            "
          >
            Sent Email
          </button>
          <button
            v-if="LanCh"
            type="submit"
            class="
              p-4
              rounded-xl
              font-bold
              mb-3
              relative
              next_hover
              border-2
              text-black
              border-black
              text-center
            "
          >
            发送邮件
          </button>
        </form>
</template>