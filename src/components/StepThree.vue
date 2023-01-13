<template>
    <div>
        <el-form-item class="form-item form-select">
      <div class="text-input">
        <div class="text-input">
        <span class="note">Must</span>
        <label>Lí do muốn ứng tuyển vào công ty:</label>
      </div>
      </div>
      <el-input
        type="textarea"
        :rows="2"
        :colums="4"
        placeholder="Please input"
        v-model="textarea"
      >
      </el-input>
    </el-form-item>
    <el-form-item class="form-item">
      <div class="text-input">
        <span class="note">Must</span>
        <label>Mức lương mong muốn:</label>
      </div>
      <el-input
        class="input-name"
        v-model="salary"
        name="salary"
        id="salary"
        type="text"
        placeholder="Nhập mức lương"
      ></el-input>
    </el-form-item>
    </div>
</template>

<script>
export default {
    name: 'StepThree',

    data() {
        return {
            textarea: "",
            salary: ""
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style  scoped>
div {
  width: 100%;
}
.form-item {
    width: 50%;
}
.form-item > input {
width: 100%;
}
.text-input {
  display: flex;
  margin: 10px 0;
  align-content: center;
}
.text-input label {
  margin-left: 10px;
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;

  /* Text/Black */

  color: #333333;
}
.note {
  width: 45px;
  height: 20px;
  padding: 4px;
  background: #627d98;
  border-radius: 3px;

  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height, or 167% */

  display: flex;
  align-items: center;
  text-align: center;

  /* White */

  color: #ffffff;
}
</style>