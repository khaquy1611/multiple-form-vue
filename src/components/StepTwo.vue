<template>
  <div>
    <el-form-item class="form-item">
      <div class="d-flex">
        <el-select v-model="value" placeholder="-- Chọn Công Ty --">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <i class="el-icon-delete"></i>
      </div>
    </el-form-item>

    <el-form-item class="form-item">
      <div class="text-input">
        <span class="note">Must</span>
        <label>Vị trí từng làm:</label>
      </div>
      <el-input
        class="input-name"
        v-model="position"
        name="position"
        id="position"
        type="text"
        placeholder="Nhập vị trí từng làm..."
      ></el-input>
    </el-form-item>
    <el-form-item class="form-item">
      <div class="text-input">
        <span class="note">Must</span>
        <label>Thời gian làm việc:</label>
      </div>
      <el-date-picker class="date" v-model="startDate" type="date" placeholder="0000 / 00 / 00">
      </el-date-picker>
      <span class="line"></span>
      <el-date-picker class="date" v-model="endDate" type="date" placeholder="0000 / 00 / 00">
      </el-date-picker>
    </el-form-item>

    <el-form-item class="form-item form-select">
      <div class="text-input">
        <label>Mô tả về công việc:</label>
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
    <el-form-item class="form-item form-select">
        <el-button type="text" @click="open">
            <el-button icon="el-icon-plus" >Thêm Công Ty</el-button>
        </el-button>
    </el-form-item>

  </div>
</template>

<script>
export default {
  name: "StepTwo",

  data() {
    return {
      options: [
        {
          value: "MOR SOFTWARE",
          label: "MOR SOFTWARE",
        },
        {
          value: "RIKKEI",
          label: "RIKKEI",
        },
      ],
      value: "",
      position: "",
      startDate: "",
      endDate: "",
      textarea: ""
    };
  },

  mounted() {},

  methods: {
    open() {
        this.$prompt('Vui lòng nhập tên công ty', 'Thêm Mới Công Ty', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: 'Invalid Email'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: 'Your email is:' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Input canceled'
          });       
        });
      }
  },
};
</script>

<style scoped>
div {
  width: 100%;
}
.el-date-editor {
    width: 30%!important;
}
.form-item:first-child {
  width: 80%!important;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 4px;
}
.line {
    display: inline-block;
    width: 20px;
    height: 2px;
    margin: 0 20px;
    border: 1px solid #BFBFBF;
    background: #BFBFBF;
}
.el-date-editor {
    cursor: pointer;
}
.form-item {
    width: 50%;
}
.form-item > input {
width: 100%;
}
.form-item:first-child .el-select.el-select--large {
  width: 90%!important;
}
.d-flex {
  display: flex;
  align-items: center;
}
.el-icon-delete {
  margin-left: 20px;
  font-size: 40px;
  cursor: pointer;
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
