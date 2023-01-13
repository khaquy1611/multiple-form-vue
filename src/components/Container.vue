<template>
  <div class="container">
    <h1>Đơn Ứng Tuyển</h1>
    <StepProgress :data="dataSteps" />
    <MultipleForm >
      <template #step1 v-if="this.dataSteps.currentStep === 0">
          <StepOne />
      </template>
      <template #step2 v-if="this.dataSteps.currentStep === 1">
          <StepTwo />
      </template>
      <template #step3 v-if="this.dataSteps.currentStep >= 2">
        <StepThree />
      </template>
    </MultipleForm>
    <div class="button">
      <el-button v-if="this.dataSteps.currentStep > 0" type="info" @click="previousStep">Quay Lại</el-button>
      <el-button v-if="this.dataSteps.currentStep >= 3" type="info">Hoàn Thành</el-button>
      <el-button v-else type="info" class="button-next" @click="nextStep">Tiếp</el-button>
    </div>
  </div>
</template>

<script>
import StepProgress from "./StepProgress.vue";
import MultipleForm from "./MultipleForm.vue";
import StepOne from "./StepOne.vue";
import StepTwo from "./StepTwo.vue";
import StepThree from "./StepThree.vue";
export default {
  name: "ContainerComponent",
  components: {
    StepProgress,
    MultipleForm,
    StepOne,
    StepTwo,
    StepThree
  },
  data() {
    return {
      dataSteps: {
        steps: [
          "Thông tin cá nhân",
          "Kinh nghiệm làm việc",
          "Xác Nhận Thông Tin",
        ],
        currentStep: 0,
        activeColor: "#65a30d",
        passiveColor: "#617D98",
        stepProgress: null,
      },
    };
  },

  mounted() {},

  methods: {
    nextStep() {
      if (this.dataSteps.currentStep < this.dataSteps.steps.length) {
        this.dataSteps.currentStep++;
      }
    },
    previousStep() {
      if (this.dataSteps.currentStep > 0) {
        this.dataSteps.currentStep--;
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}

h1 {
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */

  color: #333333;
}
.button {
  display: flex;
  align-items: center;
}
.button > button {
  margin: 0 20px;
}
.button-next {
  background: #a6a9ad;
  color: #fff;
}
.button-next:hover {
  background: #627D98;
  color: #fff;
}
</style>
