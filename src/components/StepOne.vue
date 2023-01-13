<template>
  <div>
    <el-form-item class="form-item">
      <div class="text-input">
        <span class="note">Must</span>
        <label>Họ và tên:</label>
      </div>
      <el-input
        v-model="ruleForm.name"
        class="input-name"
        :class="isValid ? '' : 'warning'"
        name="name"
        id="name"
        type="text"
        placeholder="Nhập Họ Và Tên...."
      ></el-input>
    </el-form-item>
    <el-form-item class="form-item">
      <div class="text-input">
        <span class="note">Must</span>
        <label>Ngày Sinh:</label>
      </div>
      <el-date-picker v-model="ruleForm.date" type="date" placeholder="0000 / 00 / 00">
      </el-date-picker>
    </el-form-item>
    <el-form-item class="form-item form-select">
      <div class="text-input">
        <label>Thành Phố:</label>
      </div>
      <el-select
        class="select"
        v-model="ruleForm.selectValues"
        placeholder="-- Chọn Thành Phố --"
      >
        <el-option
          v-for="item in ruleForm.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item class="form-item">
      <div class="text-input">
        <label>Vị trí làm việc:</label>
      </div>
      <el-autocomplete
        v-model="ruleForm.state"
        popper-class="my-autocomplete"
        class="input-autocomplete"
        name="city"
        id="name"
        prefix-icon="el-icon-search"
        type="text"
        :fetch-suggestions="querySearchAsync"
        @select="handleSelect"
        placeholder="Chọn các vị trí mà bạn muốn"
        :trigger-on-focus="false"
      ></el-autocomplete>
      <br />
      <div>{{ ruleForm.label }}</div>
    </el-form-item>

    <el-form-item class="form-item form-select">
      <div class="text-input">
        <label>Mô tả:</label>
      </div>
      <el-input
        type="textarea"
        :rows="2"
        :colums="4"
        placeholder="Please input"
        v-model="ruleForm.textarea"
      >
      </el-input>
    </el-form-item>
    <el-form-item class="form-item form-upload">
      <div class="text-input">
        <label>Ảnh cá nhân:</label>
      </div>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        :file-list="ruleForm.fileList"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        list-type="picture"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          Hãy kéo hoặc thả ảnh vào đây <em> hoặc nhấp vào đây</em>
        </div>
        <div class="el-upload__tip" slot="tip">
          jpg/png files with a size less than 500kb
        </div>
      </el-upload>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "StepOne",
  data() {
    return {
      ruleForm: {
        name: "",
        date: "",
        state: "",
        fileList: [],
        textarea: "",
        cities: [],
        label: "",
        options: [
          {
            value: "Hà Nội",
            label: "Hà Nội",
          },
          {
            value: "Hải Dương",
            label: "Hải Dương",
          },
          {
            value: "Hòa Bình",
            label: "Hòa Bình",
          },
          {
            value: "Hải Phòng",
            label: "Hải Phòng",
          },
          {
            value: "Thái Bình",
            label: "Thái Bình",
          },
        ],
        selectValues: [],
      },
      isValid: false,
    };
  },

  mounted() {
    let targetUrl = "https://provinces.open-api.vn/api/?depth=1";
    fetch(targetUrl)
      .then((response) => response.json())
      .then((data) => {
        this.ruleForm.cities = [...this.ruleForm.cities, ...data];
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  },

  methods: {
    querySearchAsync(query, cb) {
      let cities = this.ruleForm.cities;
      let results = query ? this.ruleForm.cities.filter(this.createFilter(query)) : cities;
      let top5 = results.slice(0, 5);

      clearTimeout(timeout);
      let timeout = setTimeout(() => {
        cb(top5);
      }, 3000 * Math.random());
      // number of things returned
    },
    createFilter(query) {
      return (cities) => {
        return cities.name.toLowerCase().includes(query.toLowerCase());
      };
    },
    handleSelect(item) {
      this.ruleForm.label = item.name;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
  },
};
</script>

<style scoped>
.text-input {
  display: flex;
  margin: 10px 0;
  align-content: center;
}
.upload-demo,
.form-upload {
  width: 100%;
}
.input-name,
.select,
.input-autocomplete {
  width: 100%;
}
.input-name > .el-input__inner {
  width: 100%;
  padding: 20px 0 !important;
}
.form-item,
.form-select {
  width: 50%;
}
div {
  width: 100%;
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
