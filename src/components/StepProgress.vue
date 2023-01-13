<template>
    <div class="step-container" :style="cssStyle">
        <ul class="steps-list">
            <li class="step" 
            v-for="(step, index) in dataObject.steps" 
            :class="[
            (index === dataObject.currentStep) ? 'step-active' : '', 
            (index < dataObject.currentStep) ? 'step-done' : ''
            , (index === 1 && index === dataObject.currentStep) ? 'step-done-in-advance' : '']" 
            :key="index">
                <div class="step-bubble">
                    <div class="step-count">{{ index + 1 }}</div>
                    <StepDoneIcon />
                </div>
                <div class="step-label">{{ step }}</div>
                <div class="step-line">
                    <div class="line-fill"></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {  parse } from '../ultils/parseData';
import StepDoneIcon from './Icons/IconDone.vue';
export default {
    name: 'RequestFormVueStepProgress',
    components: {
        StepDoneIcon
    },
    props: {
        data: {
            type: Object,
        },
    },
    data() {
        return {
            dataObject : this.data,
        };
    },
    computed: {
        cssStyle() {
            return {
                '--active-color--': this.data.activeColor,
                '--passive-color' : this.data.passiveColor
            }
        }
    },
    mounted() {
        console.log(parse(this.dataObject));
    },

    methods: {},
};
</script>

<style scoped>
.step-container {
    width: 95%;
    margin: 0 auto;
}
.steps-list {
    display: flex;
    list-style: none;
}
.step {
    display: flex;
    align-items: center;
    flex-grow: 1;
    max-width: 100%;
    position: relative;
}
.step-bubble {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: var(--passive-color);
    transition: all .3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}
.step-line {
    width: 100%;
    height: 5px;
    position: absolute;
    background-color: var(--passive-color);
    top: 50%;
    left: 0;
    transform:  translateY(-50%);
    z-index: -10;
}
.step:last-child {
    max-width: 60px;
}
.step:last-child .step-line {
    display: none;
}
.step-active .step-bubble {
    width: 60px;
    height: 60px;
}
.step-done .step-bubble {
    width: 60px;
    height: 60px;
}
.line-fill {
    width: 0;
    height: 5px;
    background-color: #34566d;
    transition: all .3s ease;
}
.step-done  .line-fill {
    width: 100%;
}
.step-done-in-advance .line-fill{
    width: 10%;
}
.step-count {
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    display: none;
}
.step-active .step-count {
    display : block;
}
.step-done-icon {
    fill: #fff;
    width: 30px;
    height: 30px;
    display: none;
}
.step-done .step-done-icon {
    display: block;
}
.step-label {
    font-weight: 500;
    font-size: 18px;
    padding: 10px;
    width: 200px;
    position: absolute;
    bottom: -40px;
    opacity: .3;
    color: var(--passive-color);
}
.step-active .step-label , .step-done .step-label {
    opacity: 1;
    color: var(---active-color);
}
</style>