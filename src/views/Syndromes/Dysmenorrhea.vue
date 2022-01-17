<template>
  <head> </head>
  <div class="background"></div>
  <main class="mainclass">
    <!-- The Modal -->
    <div id="myModal" class="modal hide">
      <!-- Modal content -->
      <div class="modal-content">
        <p>Please Choose an Option</p>
        <span class="close">&times;</span>
      </div>
    </div>

    <!-- choice page -->
    <div id="choicePage" class="modal hide">
      <!-- Modal content -->
      <div class="modal-content">
        <br />
        <p>your choices are: {{ answerList }}</p>
        <br />
        <span class="close1">&times;</span>
      </div>
    </div>

    <!-- end of quiz overlay -->
    <div v-if="endofQuiz" class="endquiz w-screen h-screen">
      <div class="symptom_container">
        <div style="font-size: 50px">The herb(s) you need are:</div>
        <br />
        <div>
          <ul class="bulletlist">
            <li>{{ finalMedList[0][0] }}</li>
          </ul>
        </div>
        <br />
        <button class="hover symp_btn" @click="showChoice()">
          Review Report
        </button>
        <br />

        <button class="hover symp_btn" @click="reload()">Restart Quiz</button>
      </div>
    </div>

    <!-- quiz container -->
    <div v-if="is_in_quiz" class="quiz_container">
      <!-- progress bar -->
      <div class="progressbarcontainer">
        <div class="progress" :style="`width:${numerator.id * 12}%`">
          {{ numerator.id }}
        </div>
      </div>
      <br />

      <!-- question container -->
      <div class="question_container">
        <div
          id="questionbody"
          class="p-5"
          v-html="questionList.questionbody"
        ></div>
      </div>
      <!-- option containr -->
      <div v-if="ismc" class="mt-8 items-center">
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

      <div v-if="isrting" class="mt-8">
        <span
          class="items-center font-bold"
          type="radio"
          v-for="(option, item) in questionList.optionsList"
          :key="item"
        >
          <span :ref="optionChosen" @click="onOptionClicked(option, item)">
            <button
              class="
                hover
                border-2
                rounded-lg
                font-bold
                text-yellow-400
                p-2
                text-center
              "
            >
              {{ option }}
            </button>
          </span>
        </span>
      </div>
      <br />

      <!--  button -->
      <button
        id="back_btn"
        class="p-4 functionbutton rounded-lg hover center float-left"
        @click="back_btn()"
      >
        Back
      </button>
      <button
        class="functionbutton rounded-lg hover float-right m-auto p-4"
        @click="next_btn()"
      >
        Next</button
      ><br /><br />
    </div>
  </main>
</template>

<style scoped>
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

.bulletlist {
  list-style-type: disc;
  margin-left: 35px;
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
  text-align: center;
  background-color: white;
  margin-top: 0.5rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
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

export default {
  setup() {
    let backbtnVariables = {
      back_btn_questionId: [0],
      back_btn_allSyndromeScoreList: [0],
    };

    let questionIndex = 1;
    let optionScoreList = [];
    let answerList = [];
    let lengthofAllSyndromes = [];

    let optionJSONData = [];
    let itemsRef = [];
    let finalChoice;

    let isrting = ref(false);
    let ismc = ref(false);

    let chooseOption = false;

    let endofQuiz = ref(false);

    let English_symptom = ref(false);
    let is_in_quiz = ref(false);

    let lvl1questionLength;

    let SyndromeList = [];

    let numerator = ref({ id: 1 });
    let denominator = ref({ id: 1 });
    let questionList = ref({
      questionbody: "",
      optionsList: [],
    });

    let questionAddToSyndromeScoreList = [];

    let finalMedList = [];
    let uniqueMedList = [];

    const init_fetch = async () => {
      fetch(
        "http://nodejs-env.eba-m8uggs3z.us-east-2.elasticbeanstalk.com/dys_getSyndromeList",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((length) => length.json())
        .then(function (syndromeList) {
          SyndromeList = syndromeList;
          for (let i = 0; i < syndromeList.length; i++) {
            lengthofAllSyndromes.push(0);
          }
        });
      fetch_data();
    };

    const fetch_data = () => {
      if (questionIndex <= 8) {
        fetch(
          "http://nodejs-env.eba-m8uggs3z.us-east-2.elasticbeanstalk.com/dys_getQuestion?questionId=" +
            questionIndex,
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
            backbtnVariables.back_btn_questionId.push(questionIndex);
            backbtnVariables.back_btn_allSyndromeScoreList.push(
              JSON.stringify(lengthofAllSyndromes)
            );
            outputQuestion(resp);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        checkForMed();
      }
    };

    const checkForMed = () => {
      fetch(
        "http://nodejs-env.eba-m8uggs3z.us-east-2.elasticbeanstalk.com/dys_getList?scorelist=[" +
          lengthofAllSyndromes +
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
          finalMedList.push(why);
          isEndOfQuiz();
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    const next_btn = () => {
      if (chooseOption == true) {
        ismc.value = true;
        isrting.value = false;
        clearSelected();
        questionIndex = questionIndex + 1;
        let tempQuestionAddToSyndromeScoreList = JSON.parse(
          questionAddToSyndromeScoreList[finalChoice]
        );

        for (let i = 0; i < tempQuestionAddToSyndromeScoreList.length; i++) {
          lengthofAllSyndromes[tempQuestionAddToSyndromeScoreList[i]] =
            lengthofAllSyndromes[tempQuestionAddToSyndromeScoreList[i]] +
            optionScoreList[finalChoice][0];

          if (
            i + 1 ==
            lengthofAllSyndromes[tempQuestionAddToSyndromeScoreList[i] - 1]
          ) {
            lengthofAllSyndromes[tempQuestionAddToSyndromeScoreList[i] - 1] =
              lengthofAllSyndromes[tempQuestionAddToSyndromeScoreList[i] - 1] +
              JSON.parse(optionScoreList[finalChoice]);
          }
        }
        optionScoreList.length = 0;
        questionAddToSyndromeScoreList.length = 0;
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
        answerList[
          backbtnVariables.back_btn_questionId[
            backbtnVariables.back_btn_questionId.length - 2
          ] - 1
        ] = 6;
        questionIndex =
          backbtnVariables.back_btn_questionId[
            backbtnVariables.back_btn_questionId.length - 2
          ];
        backbtnVariables.back_btn_questionId.length =
          backbtnVariables.back_btn_questionId.length - 2;
        lengthofAllSyndromes = JSON.parse(
          backbtnVariables.back_btn_allSyndromeScoreList[
            backbtnVariables.back_btn_questionId.length
          ]
        );
        backbtnVariables.back_btn_allSyndromeScoreList.length =
          backbtnVariables.back_btn_allSyndromeScoreList.length - 2;
        optionScoreList.length = 0;
        questionAddToSyndromeScoreList.length = 0;
        chooseOption = false;
        itemsRef.length = 0;
        fetch_data();
      }
    };

    const outputQuestion = (data) => {
      let tempoptionlist = [];
      questionList.value = data;
      optionJSONData = questionList.value.options_list;
      if (optionJSONData.length >= 10) {
        isrting.value = true;
        ismc.value = false;
      } else {
        ismc.value = true;
        isrting.value = false;
      }

      optionJSONData.forEach((element) => {
        tempoptionlist.push(JSON.parse(element).body);
        optionScoreList.push(JSON.parse(JSON.parse(element).score));

        questionAddToSyndromeScoreList.push(JSON.parse(element).syndrome);
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
      is_in_quiz.value = false;
      endofQuiz.value = true;
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

    onMounted(() => {
      is_in_quiz.value = true;
      init_fetch();
    });

    return {
      back_btn,
      next_btn,
      denominator,
      numerator,

      uniqueMedList,
      finalMedList,
      finalChoice,
      lvl1questionLength,
      questionList,
      optionChosen,
      optionJSONData,
      onOptionClicked,
      clearSelected,
      endofQuiz,
      is_in_quiz,
      reload,
      showChoice,
      isrting,
      ismc,
      SyndromeList,
      English_symptom,
      answerList,
    };
  },
};
</script>
