<template>
    <el-form
          label-position="top"
          label-width="100px"
          size="large "
          ref="ruleForm"
          class="form"
    >
        <slot name="step1"></slot>
        <slot name="step2"></slot>
        <slot name="step3"></slot>
    </el-form>
</template>

<script>
export default {
    name: 'MultipleFormComponent',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style  scoped>
.form {
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px 32px 24px;
gap: 10px;

width: 926px;
margin: 50px auto;
background: #FFFFFF;
border: 1px solid #DCDCDC;
border-radius: 4px;

}
</style>