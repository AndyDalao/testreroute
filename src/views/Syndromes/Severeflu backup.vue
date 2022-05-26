<template>
  <div class="background"></div>
  <main class="mainclass">
    <!-- The Modal -->
    <div id="myModal" class="modal hide">
      <!-- Modal content -->
      <div class="modal-content">
        <p v-if="LanEng">Please Choose an Option</p>
        <p v-if="LanCh">请选择一个选项</p>
        <span class="close">&times;</span>
      </div>
    </div>

    <!-- Loading modal -->
    <div id="loadingModal" class="modal hide">
      <div class="button--loading"></div>
    </div>

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
        <p v-if="LanCh">填写邮寄信息（*必填）</p>
        <p v-if="LanEng">
          We will confirm the order with you via email or phone, or you can
          call（416)-968-7755 for more information
        </p>

        <form ref="form" @submit.prevent="sendEmail">
          <label v-if="LanCh">*姓名: </label>
          <input
            v-if="LanCh"
            id="name"
            v-model="name"
            class="border"
            required
          />
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

          <input
            v-if="LanCh"
            id="city"
            class="border"
            v-model="city"
            required
          />
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
          <input
            v-if="LanEng"
            id="name"
            class="border"
            v-model="name"
            required
          />
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

          <input
            v-if="LanEng"
            id="city"
            class="border"
            v-model="city"
            required
          />
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
        <span class="close1">&times;</span>
      </div>
    </div>

    <!-- end of quiz overlay -->
    <div v-if="endofQuiz" class="endquiz w-screen h-screen">
      <div class="symptom_container">
        <div v-if="LanEng" style="font-size: 50px">
          The herb(s) you need are:
        </div>
        <div v-if="LanCh" style="font-size: 50px">你需要的中药方剂是:</div>
        <br />
        <div>
          <ul class="bulletlist">
            {{
              finalMedList
            }}
          </ul>
        </div>
        <br />
        <button v-if="LanEng" class="hover symp_btn" @click="showChoice()">
          Email us to purchase herbs!
        </button>

        <button v-if="LanCh" class="hover symp_btn" @click="showChoice()">
          通过邮件购买
        </button>
        <br />

        <button v-if="LanCh" class="hover symp_btn" @click="Pay()">
          使用paypal或银行卡购买
        </button>
        <br />
        <button v-if="LanEng" class="hover symp_btn" @click="Pay()">
          Purchase with paypal/credit card!
        </button>
        <br />

        <button v-if="LanEng" class="hover symp_btn" @click="reload()">
          Restart Quiz
        </button>
        <button v-if="LanCh" class="hover symp_btn" @click="reload()">
          重新开始
        </button>
      </div>
    </div>

    <!-- quiz container -->
    <div v-if="is_in_quiz" class="quiz_container">
      <!-- progress bar -->
      <div class="progressbarcontainer bg-white shadow mt-2 text-center">
        <div class="progress" :style="`width:${numerator.id * 6.244}%`">
          {{ numerator.id }}
        </div>
      </div>
      <br />

      <!-- question container -->
      <div class="question_container">
        <div
          v-if="LanEng"
          id="questionbody"
          class="p-5"
          v-html="questionList.questionbody"
        ></div>
        <div
          v-if="LanCh"
          id="questionbody"
          class="p-5"
          v-html="questionList.questionbody_chinese"
        ></div>
      </div>
      <!-- option containr -->
      <div class="mt-8 items-center">
        <!-- option container -->
        <div v-for="(option, item) in questionList.optionsList" :key="item">
          <div
            class="option-default p-1 rounded-lg mb-5 hover border-2"
            :ref="optionChosen"
            @click="onOptionClicked(option, item)"
          >
            <div class="rounded-lg font-bold text-yellow-400 flex p-2">
              <!-- option name -->
              <button class="flex items-center font-bold pl-6 text-center">
                {{ option }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- option containr -->

      <!--  button -->
      <button
        id="back_btn"
        v-if="LanEng"
        class="p-4 functionbutton rounded-lg hover center float-left"
        @click="back_btn()"
      >
        Back
      </button>
      <button
        v-if="LanCh"
        id="back_btn"
        class="p-4 functionbutton rounded-lg hover center float-left"
        @click="back_btn()"
      >
        返回
      </button>
      <button
        v-if="LanEng"
        class="functionbutton rounded-lg hover float-right m-auto p-4"
        @click="next_btn()"
      >
        Next
      </button>
      <button
        v-if="LanCh"
        class="functionbutton rounded-lg hover float-right m-auto p-4"
        @click="next_btn()"
      >
        继续</button
      ><br /><br />
    </div>
  </main>
</template>

<style scoped>
.button {
  position: relative;
  padding: 8px 16px;
  background: #009579;
  border: none;
  outline: none;
  border-radius: 2px;
  cursor: pointer;
}

.button:active {
  background: #007a63;
}

.button__text {
  font: bold 20px "Quicksand", san-serif;
  color: #ffffff;
  transition: all 0.2s;
}

.button--loading .button__text {
  visibility: hidden;
  opacity: 0;
}

.button--loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
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
  text-align: left;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 50px;
  border: 1px solid #888;
  width: 600px; /* Could be more or less, depending on screen size */
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

.bulletlist {
  list-style-type: disc;
  margin-left: 35px;
}

.mainclass {
  align-items: center;
  display: flex;
  justify-content: center;
}

.endquiz {
  align-items: center;
  display: flex;
}

.functionbutton {
  font-weight: 700;
  margin-bottom: 0.25rem;
  position: relative;
  border-width: 2px;
  color: white;
  border-color: white;
  text-align: center;
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

.progressbarcontainer {
  max-width: 600px;
  border-radius: 40px;
}

.hover:hover {
  background-color: rgb(28, 255, 130);
  border-color: white;
  color: white;
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
  border-radius: 8px;
  overflow: auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
  line-height: 1.9rem;
  color: rgb(255, 255, 255);
  padding: 2rem;
  text-align: left;
  background: rgba(0, 0, 0, 0.26);
}

.question_container::-webkit-scrollbar {
  display: block;
  width: 10px;
}

.question_container::-webkit-scrollbar-thumb {
  background: rgb(97, 97, 97);

  border-radius: 8px;
}
.question_container::-webkit-scrollbar-thumb:hover {
  background: rgb(172, 172, 172);
}
.question_container::-webkit-scrollbar-track {
  background: rgb(20, 20, 20);
  border-radius: 8px;
}

.quiz_container {
  min-width: 600px;
  max-width: 600px;
  height: inline-block;
  opacity: 0.7;
  background-color: #383838;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 2.5rem;
  padding-top: 2rem;
}

.symp_btn {
  margin-bottom: 0.75rem;
  padding: 1rem;
  border-radius: 25px;
  position: relative;
  font-weight: bold;
  color: white;
  border: solid white;
  text-align: center;
  display: block;
  margin: 0 auto;
}
</style>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import axios from "axios";

export default {
  setup() {
    let LanEng = ref(false);
    let LanCh = ref(false);
    let questionIndex = 1;
    let optionScoreList = [];
    let answerList = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
    let back_btn_records = {
      id: [],
      score: [],
    };
    let optionJSONData = [];
    let itemsRef = [];
    let finalChoice;

    let chooseOption = false;

    let endofQuiz = ref(false);

    let is_in_quiz = ref(false);

    let numerator = ref({ id: 1 });
    let denominator = ref({ id: 1 });
    let questionList = ref({
      questionbody: "",
      optionsList: [],
    });
    let allMedinSet = [];
    let tempMedicineList = [];
    let finalMedList = [];

    let dampnessScore = 0;

    const Pay = () => {
      let verticalMedListpaypal = [];
      for (let i = 0; i < finalMedList.length; i++) {
        verticalMedListpaypal.push(finalMedList[i]);
        verticalMedListpaypal.push("<br>");
      }
      axios(
        "http://nodejs-env.eba-m8uggs3z.us-east-2.elasticbeanstalk.com/pay?medicine=" +
          finalMedList +
          "&userchoice=[" +
          answerList +
          "]",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          window.location.replace(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    const fetch_data = () => {
      if (questionIndex <= 16) {
        fetch(
          "http://nodejs-env.eba-m8uggs3z.us-east-2.elasticbeanstalk.com/sf_getQuestion?questionId=" + questionIndex,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((resp) => resp.json())
          .then(function (resp) {
            questionIndex = resp.id;
            numerator.value.id = questionIndex;
            outputQuestion(resp);
          })
          .catch(function (error) {
            console.log(error);
            alert("You have sent too many requests, please try again later");
          });
      } else {
        checkForMed();
      }
    };

    const checkForMed = () => {
      fetch(
        "http://nodejs-env.eba-m8uggs3z.us-east-2.elasticbeanstalk.com/sf_getList?dampnessScore=" +
          dampnessScore +
          "&userchoice=[" +
          answerList +
          "]",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((length) => length.json())
        .then(function (why) {
          finalMedList.push(why[0]);
          if (why[1]) {
            finalMedList.push(why[1]);
          }
          isEndOfQuiz();
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    const next_btn = () => {
      if (chooseOption == true) {
        clearSelected();
        questionIndex = questionIndex + 1;
        //add medicine to finalmedlist
        if (!tempMedicineList[finalChoice]) {
          finalMedList.push("null");
        } else {
          JSON.parse(tempMedicineList[finalChoice]).forEach((element) => {
            finalMedList.push(element);
          });
        }
        //add score to dampness
        if (optionScoreList[finalChoice] != 0) {
          dampnessScore = dampnessScore + optionScoreList[finalChoice];
        }
        //add history to score
        back_btn_records.id.push(questionIndex - 1);
        back_btn_records.score.push(dampnessScore);

        tempMedicineList.length = 0;
        optionScoreList.length = 0;
        chooseOption = false;
        answerList[questionIndex - 2] = finalChoice;
        itemsRef.length = 0;
        fetch_data();
      } else {
        var modal = document.getElementById("myModal");
        modal.classList.add("show");
        modal.classList.remove("hide");
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
          modal.classList.add("hide");
          modal.classList.remove("show");
        };
      }
    };

    const back_btn = () => {
      clearSelected();
      if (questionIndex != 1) {
        answerList[questionIndex - 1] = 6;
        questionIndex = questionIndex - 1;
        //remove score from history
        if (questionIndex >= 2) {
          dampnessScore =
            back_btn_records.score[back_btn_records.score.length - 2];
          back_btn_records.score.length = back_btn_records.score.length - 1;
        }
        //remove med from history
        if (questionIndex < 16) {
          finalMedList.length = finalMedList.length - 1;
        }
        optionScoreList.length = 0;
        chooseOption = false;
        itemsRef.length = 0;
        fetch_data();
      }
    };

    const outputQuestion = (data) => {
      let tempoptionlist = [];
      questionList.value = data;

      optionJSONData = questionList.value.options_list;
      optionJSONData.forEach((element) => {
        if (LanCh.value === true) {
          tempoptionlist.push(JSON.parse(element).body_chinese);
        } else {
          tempoptionlist.push(JSON.parse(element).body);
        }
        optionScoreList.push(JSON.parse(JSON.parse(element).score));

        tempMedicineList.push(JSON.parse(element).medicine);
      });

      questionList.value.optionsList = tempoptionlist;
    };

    const onOptionClicked = (choice, item) => {
      const divContainer = itemsRef[item];
      clearSelected();
      divContainer.classList.add("bg-green-300");
      finalChoice = item;
      chooseOption = true;
    };

    const optionChosen = (element) => {
      if (element) {
        itemsRef.push(element);
      }
    };

    const clearSelected = () => {
      for (let i = 0; i < optionJSONData.length; i++) {
        itemsRef[i].classList.remove("bg-green-300");
      }
    };

    const isEndOfQuiz = () => {
      allMedinSet = new Set(finalMedList);
      finalMedList.length = 0;
      allMedinSet.forEach((element) => {
        if (element != "null") {
          finalMedList.push(element);
        }
      });
      is_in_quiz.value = false;
      endofQuiz.value = true;
    };

    const sendEmail = () => {
      var modal1 = document.getElementById("loadingModal");
      modal1.classList.add("show");
      modal1.classList.remove("hide");
      var modal2 = document.getElementById("choicePage");
      modal2.classList.add("hide");
      modal2.classList.remove("show");
      loadingModal();
    };

    const loadingModal = () => {
      let verticalMedList = [];
      for (let i = 0; i < finalMedList.length; i++) {
        verticalMedList.push(finalMedList[i]);
        verticalMedList.push("<br>");
      }
      fetch(
        "http://nodejs-env.eba-m8uggs3z.us-east-2.elasticbeanstalk.com/sendemail?usermail=" +
          document.getElementById("email").value +
          "&medlist=" +
          verticalMedList +
          "&phonenumber=" +
          document.getElementById("phone").value +
          "&username=" +
          document.getElementById("name").value +
          "&userChoice=[" +
          answerList +
          "]&address=" +
          document.getElementById("address").value +
          "&city=" +
          document.getElementById("city").value +
          "&province=" +
          document.getElementById("province").value +
          "&postalcode=" +
          document.getElementById("postalcode").value,
        {
          method: "GET",
        }
      )
        .then((why) => why.json())
        .then(function () {
          alert("Email Sent!");
          reload();
        })
        .catch(function (error) {
          console.log(error);
          alert("You have sent too many emails, please try again later");
        });
    };

    const showChoice = () => {
      var modal1 = document.getElementById("choicePage");
      modal1.classList.add("show");
      modal1.classList.remove("hide");
      var span1 = document.getElementsByClassName("close1")[0];
      span1.onclick = function () {
        modal1.classList.add("hide");
        modal1.classList.remove("show");
      };
    };

    const reload = () => {
      window.location.href = "/";
    };

    window.addEventListener("keydown", (event) => {
      if (event.key === "1" && endofQuiz.value == false) {
        event.preventDefault();
        onOptionClicked("Yes", 0);
        next_btn();
      }
      if (event.key === "2" && endofQuiz.value == false) {
        event.preventDefault();
        onOptionClicked("No", 1);
        next_btn();
      }
      if (event.key === "3" && endofQuiz.value == false) {
        event.preventDefault();
        onOptionClicked("Not Sure", 2);
        next_btn();
      }
      if (event.key === "b" && endofQuiz.value == false) {
        event.preventDefault();
        back_btn();
      }
    });
    onMounted(() => {
      is_in_quiz.value = true;

      const route = useRoute();

      if (route.params.Language == "ch") {
        LanCh.value = true;
        //version = chinese
      }
      if (route.params.Language == "en") {
        LanEng.value = true;
        //version = english
      }

      fetch_data();
    });

    return {
      Pay,
      back_btn,
      next_btn,
      denominator,
      numerator,
      finalMedList,
      finalChoice,
      questionList,
      optionChosen,
      optionJSONData,
      onOptionClicked,
      clearSelected,
      endofQuiz,
      is_in_quiz,
      reload,
      showChoice,
      sendEmail,
      answerList,
      tempMedicineList,
      dampnessScore,
      allMedinSet,
      LanEng,
      LanCh,
      questionIndex,
      loadingModal,
    };
  },
};
</script>
