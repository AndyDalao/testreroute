<template>
  <div id="choicePage" class="modal">
    <div class="modal-content">
      <br />

      <p v-if="LanCh">
        填写基本信息，我们的医生会用邮件的方式与您联系购买以上中药方剂的详细信息
      </p>
      <p v-if="LanEng">
        Fill in the basic information and our doctors will contact you via email
      </p>
      <p v-if="LanCh">填写邮寄信息（*必填）</p>
      <p v-if="LanEng">
        We will confirm the order with you via email or phone, or you can
        call（416)-968-7755 for more information
      </p>

      <form ref="form" @submit.prevent="sendEmail">
        <label v-if="LanCh">*姓名: </label>
        <input v-if="LanCh" id="name" v-model="name" class="border" required />
        <br />
        <label v-if="LanCh">*邮箱:</label>

        <input
          v-if="LanCh"
          id="email"
          class="border"
          v-model="email"
          required
        />
        <br />

        <label v-if="LanCh">*手机号码:</label>

        <input
          v-if="LanCh"
          id="phone"
          class="border"
          v-model="phone"
          required
        />
        <br />
        <label v-if="LanCh">*单元或街道名称:</label>

        <input
          v-if="LanCh"
          id="address"
          class="border"
          v-model="address"
          required
        />
        <br />
        <label v-if="LanCh">*城市:</label>

        <input v-if="LanCh" id="city" class="border" v-model="city" required />
        <br />
        <label v-if="LanCh">*省:</label>

        <input
          v-if="LanCh"
          id="province"
          class="border"
          v-model="province"
          required
        />
        <br />
        <label v-if="LanCh">*邮编:</label>

        <input
          v-if="LanCh"
          id="postalcode"
          class="border"
          v-model="postalcode"
          required
        />

        <label v-if="LanEng">*Name: </label>
        <input v-if="LanEng" id="name" class="border" v-model="name" required />
        <br />
        <label v-if="LanEng">*Email: </label>
        <input
          v-if="LanEng"
          id="email"
          class="border"
          v-model="email"
          required
        />
        <br />
        <label v-if="LanEng">*Cellphone:</label>
        <input
          v-if="LanEng"
          id="phone"
          class="border"
          v-model="phone"
          required
        />
        <br />
        <label v-if="LanEng">*Unit and Street:</label>

        <input
          v-if="LanEng"
          id="address"
          class="border"
          v-model="address"
          required
        />
        <br />
        <label v-if="LanEng">*City:</label>

        <input v-if="LanEng" id="city" class="border" v-model="city" required />
        <br />
        <label v-if="LanEng">*Province:</label>

        <input
          v-if="LanEng"
          id="province"
          class="border"
          v-model="province"
          required
        />
        <br />
        <label v-if="LanEng">*Postal Code:</label>

        <input
          v-if="LanEng"
          id="postalcode"
          class="border"
          v-model="postalcode"
          required
        />

        <p v-if="LanCh">
          中医师收到订单后会联系您再次确认订单，您也可以致电:416-968-7755
          或发送邮件至: therapistyourself@gmail.com
        </p>
        <p v-if="LanEng">
          We will confirm the order with you via email or phone, you can also
          call（416)-968-7755 or email to therapistyourself@gmail.com
        </p>
        <br />
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

      <br />
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { ref } from "@vue/reactivity";
export default {
  setup() {
    let LanEng = ref(false);
    let LanCh = ref(false);

    onMounted(() => {
      const route = useRoute();

      if (route.params.Language == "ch") {
        LanCh.value = true;
        //version = chinese
      }
      if (route.params.Language == "en") {
        LanEng.value = true;
        //version = english
      }
    });

    return {
      LanEng,
      LanCh,
    };
  },
};
</script>

<style scoped>
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
  text-align: left;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 50px;
  border: 1px solid #888;
  width: 300px; /* Could be more or less, depending on screen size */
}
</style>
