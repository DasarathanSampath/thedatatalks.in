<template>
  <div class="compoundForm">
    <h3>
        {{ $frontmatter.headA1 }}
        <h4>
          {{ $frontmatter.headA2 }}
        </h4>
    </h3>
    <div class="form-group">
      <label for="oneTimeDeposit">{{$frontmatter.headA3}}</label>
      <input v-model="inputValues.oneTimeDeposit" id="name" class="form-input">
    </div>
    <div class="form-group">
      <label for="period">{{$frontmatter.headA4}}</label>
      <input v-model="inputValues.period" id="period" class="form-input">
    </div>
    <div class="form-group">
      <label for="rateOfInterest">{{$frontmatter.headA5}}</label>
      <input v-model="inputValues.rateOfInterest" id="rateOfInterest" class="form-input">
    </div>
    <div class="form-group">      
      <label >{{$frontmatter.headA6}} </label>
      <select v-model="inputValues.compoundingPeriod" class="form-input">
        <option disabled value="">Select Period</option>
        <option>Monthly</option>
        <option>Quarterly</option>
        <option>HalfYearly</option>
        <option>Yearly</option>
      </select>
      <span> Selected: {{ inputValues.compoundingPeriod }} </span>
    </div>
    <div class="result">
      {{ $frontmatter.headA7 }}:  {{ inputValues.oneTimeDeposit }}<br>
      {{ $frontmatter.headA8 }}: {{ comopoundInterest }} <br>
      {{ $frontmatter.headA9 }}: {{ (+comopoundInterest + +inputValues.oneTimeDeposit) }}
    </div>
  </div>
</template>

<script>
export default {
  data(){
        return {
            inputValues:{
                oneTimeDeposit: null,
                period: null,
                rateOfInterest: null,
                compoundingPeriod: null
            }

        }
    },
  computed: {
    cmCompoundingTimes () {
            let calculatedTimes
              if (this.inputValues.compoundingPeriod === 'HalfYearly') {
                calculatedTimes = 2
              }
              if (this.inputValues.compoundingPeriod === 'Yearly') {
                calculatedTimes = 1
              }
              if (this.inputValues.compoundingPeriod === 'Quarterly') {
                calculatedTimes = 4
              }
              if (this.inputValues.compoundingPeriod === 'Monthly') {
                calculatedTimes = 12
              }
              return calculatedTimes
          },
          comopoundInterest () {
              const interestReceivable = Math.round((((1 + (this.inputValues.rateOfInterest / 100) / this.cmCompoundingTimes) ** (this.inputValues.period * this.cmCompoundingTimes)) - 1) * this.inputValues.oneTimeDeposit)
              return interestReceivable
          }
  }  
}
</script>

<style lang="stylus">
.compoundForm
  width 50%

@media screen and (max-width 640px) {
    .compoundForm {
      width 100%
    }
}

.result
{
  display: block;
  width: 80%;
  box-sizing: border-box;
  font: inherit;
  font-weight: bold;
  background-color: lightgray;
  border: 1px solid #ccc;
  padding: 5px;
  text-align: left;
  margin: 10px 40px 10px 10px;
}
</style>