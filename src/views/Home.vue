<template>
  <div class="background"></div>
  <main class="flex items-center justify-center">
    <!-- Welcome Page -->
    <!-- language choice -->
    <div
      v-if="welcomepage"
      id="welcome_page"
      class="flex w-screen h-screen items-center"
    >
      <div class="language_container">
        <h1 class="language_p chooseyourlanguage">
          TherapistYourself by Qi Herbs & Acupuncture
        </h1>
        <p>
          Check Your Symptoms Before Purchasing Our Herbal Supplements Online
        </p>
        <br />
        <button
          class="
            p-4
            rounded-xl
            font-bold
            mb-3
            relative
            next_hover
            border-2
            text-white
            border-white
          "
          @click="WelcompageEnter()"
        >
          Enter
        </button>
      </div>
    </div>

    <!-- language choice -->
    <div
      v-if="languagePage"
      id="language_page"
      class="flex w-screen h-screen items-center"
    >
      <div class="language_container">
        <p class="language_p chooseyourlanguage">
          Choose your language<br />选择语言
        </p>
        <button
          class="
            p-4
            rounded-xl
            font-bold
            mb-3
            relative
            next_hover
            border-2
            text-white
            border-white
          "
          @click="Language_btn_English()"
        >
          English
        </button>
        <br />
        <button
          class="
            p-4
            rounded-xl
            font-bold
            mb-3
            relative
            next_hover
            border-2
            text-white
            border-white
          "
          @click="Language_btn_Chinese()"
        >
          中文版
        </button>
      </div>
    </div>

    <div
      v-if="EnglishVer"
      id="symptom_page"
      class="flex w-screen h-screen items-center"
    >
      <div class="symptom_container">
        <button
          class="
            p-4
            font-bold
            mb-3
            relative
            next_hover
            border-2
            text-white
            border-white
            float-left
            rounded-l-3xl rounded-r-md
          "
          @click="refresh()"
        >
          Back
        </button><br><br><br>
        <h1 class="symptom_p chooseyourlanguage" id="chooseyoursymptom">
          Choose your symptom
        </h1>
        <!--<router-link to="/Depression/en" id="depression_btn" class="p-4 rounded-xl font-bold mb-3 relative next_hover border-2 text-white border-white symp_btn" >Depression</router-link> -->

        <router-link
          to="/Dysmenorrhea/en"
          class="
            p-4
            rounded-xl
            font-bold
            mb-3
            relative
            next_hover
            border-2
            text-white
            border-white
            symp_btn
          "
          >Menstrual Pain</router-link
        >
        <br />
        <router-link
          to="/Severeflu/en"
          class="
            p-4
            rounded-xl
            font-bold
            mb-3
            relative
            next_hover
            border-2
            text-white
            border-white
            symp_btn
          "
          >Severe Flu</router-link
        >
      </div>
    </div>

    <!-- symptom choice Chinese -->
    <div
      v-if="Chinese_symptom"
      id="symptom_page"
      class="flex w-screen h-screen items-center"
    >
      <div class="symptom_container">
        <button
          class="
            p-4
            font-bold
            mb-3
            relative
            next_hover
            border-2
            text-white
            border-white
            float-left
            rounded-l-3xl rounded-r-md
          "
          @click="refresh()"
        >
          返回</button
        ><br /><br /><br />
        <h1 class="symptom_p" id="chooseyoursymptom">选择症状</h1>
        <router-link
          to="/Severeflu/ch"
          id="depression_btn"
          class="
            p-4
            rounded-xl
            font-bold
            mb-3
            relative
            next_hover
            border-2
            text-white
            border-white
            symp_btn
          "
          >重感冒症</router-link
        >
      </div>
    </div>
  </main>
</template>

<style scoped>
.topbar_btn {
  border: none;
  background-color: inherit;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
}

.topbar_btn:hover {
  background: rgb(1, 136, 184);
}

/* The Modal (background) */
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

/* Modal Content/Box */
.modal-content {
  text-align: center;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 20%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;

  font-size: 48px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.close1 {
  color: #aaa;

  font-size: 48px;
  font-weight: bold;
}

.close1:hover,
.close1:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.img {
  width: 300px;
}
.img-wrapper {
  justify-content: center;
  align-items: center;
}
.symptom_container {
  width: 600px;
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 6rem;
  padding-right: 6rem;
  background-color: black;
  opacity: 0.7;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin: 50px auto;
  font-size: 1.5rem;
  height: relative;
  width: relative;
  border-radius: 2.5rem;
}
.symptom_p {
  margin-bottom: 3rem;
  font-size: 2.5rem;
}
.language_container {
  width: 600px;
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-left: 6rem;
  padding-right: 6rem;
  background-color: black;
  opacity: 0.7;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin: 50px auto;
  font-size: 1.5rem;
  height: relative;
  width: relative;
  border-radius: 2.5rem;
}
.language_p {
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: bold;
}
.Chinese_btn {
  margin: auto;
  display: block;
}
.English_btn {
  margin: auto;
  display: block;
}
.container {
  max-width: 600px;
  border-radius: 40px;
}
.btn {
  border: none;
  outline: none;
  background: #888;
  padding: 10px 30px;
  font-size: 20px;
  color: #ddd;
  cursor: pointer;
  margin: 10px auto;
}
.btn:hover {
  background: #111;
}
.option_container {
  margin-top: 2rem;
}
.next_hover:hover {
  background-color: rgb(28, 255, 130);
  border-color: white;
  color: white;
  transition: 0.3s;
}
.option_hover:hover {
  border-color: rgb(28, 255, 130);
  transition: 0.3s;
}
.hide {
  display: none;
}
.show {
  display: block;
}
.progress {
  color: rgb(28, 255, 130);
  border-radius: 30px 30px;
  background: rgb(28, 255, 130);
}

.question_container {
  overflow: scroll;
  height: 200px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
  line-height: 1.9rem;
  color: white;
  padding: 2rem;
  text-align: left;
}
::-webkit-scrollbar {
  display: none;
}
.quiz_container {
  width: 600px;
  height: 100vh;
  opacity: 0.7;
  background-color: #383838;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 2.5rem;
  padding-top: 2rem;
}

.logo {
  padding-right: 6rem;
  padding-left: 6rem;
  position: relative;
}

.end_container {
  width: 600px;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background-color: black;
  opacity: 0.7;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin: 50px auto;
  font-size: 1.5rem;
  height: relative;
  width: relative;
  border-radius: 2.5rem;
}
.back_btn {
  align-items: center;
}
.next_btn {
  float: right;
  margin: 0 auto;
}
.symp_btn {
  display: block;
  margin: 0 auto;
}
.chooseyourlanguage {
  text-align: center;
}
</style>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Home",
  setup() {
    let languagePage = ref(false);
    let welcomepage = ref(true);
    let is_in_quiz = ref(false);
    let Chinese_symptom = ref(false);
    let English_symptom = ref(false);
    let EnglishVer = ref(false);

    const WelcompageEnter = () => {
      welcomepage.value = false;
      languagePage.value = true;
    };

    const refresh = () => {
      window.location.href = "/";
    };

    const Language_btn_English = () => {
      EnglishVer.value = true;
      languagePage.value = false;
    };

    const Language_btn_Chinese = () => {
      Chinese_symptom.value = true;
      languagePage.value = false;
    };

    const message = ref("You are not logged in!");

    onMounted(async () => {});

    return {
      welcomepage,
      WelcompageEnter,
      message,
      languagePage,
      is_in_quiz,
      Language_btn_English,
      Language_btn_Chinese,
      English_symptom,
      Chinese_symptom,
      EnglishVer,
      refresh,
    };
  },
};
</script>
