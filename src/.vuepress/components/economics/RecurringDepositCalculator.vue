<template>
<ClientOnly>
  <div class="calculatorForm">
    <h3>
        {{ $frontmatter.headA1 }}
        <h4>
          {{ $frontmatter.headA2 }}
        </h4>
    </h3>
    <div class="row-form">
      <label for="oneTimeDeposit" class="column-form-left">{{$frontmatter.headA3}}</label>
      <input v-model="inputValues.monthlyDeposit" id="oneTimeDeposit" class="column-form-right">
    </div>
    <div class="row-form">
      <label for="period" class="column-form-left">{{$frontmatter.headA4}}</label>
      <input v-model="inputValues.period" id="period" class="column-form-right">
    </div>
    <div class="row-form">
      <label for="rateOfInterest" class="column-form-left">{{$frontmatter.headA5}}</label>
      <input v-model="inputValues.rateOfInterest" id="rateOfInterest" class="column-form-right">
    </div>
    <div class="row-form">      
      <label class="column-form-left">{{$frontmatter.headA6}} </label>
      <select v-model="inputValues.compoundingPeriod" class="column-form-right">
        <option disabled value="">Select Period</option>
        <option>Monthly</option>
        <option>Quarterly</option>
        <option>HalfYearly</option>
        <option>Yearly</option>
      </select>
      <!-- <span> Selected: {{ inputValues.compoundingPeriod }} </span> -->
    </div>
    <div class="row-form">
      <p class="column-form-left">{{ $frontmatter.headA7 }} </p>  <button class="form-result">{{ inputValues.monthlyDeposit*inputValues.period }}</button>
      <p class="column-form-left">{{ $frontmatter.headA8 }} </p> <button class="form-result">{{ recurringDeposit }} </button>
      <p class="column-form-left">{{ $frontmatter.headA9 }} </p> <button class="form-result">{{ (+recurringDeposit + +inputValues.monthlyDeposit*inputValues.period) }} </button>
    </div>
  </div>
  </ClientOnly>
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
    CompoundingTimes () {
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
          recurringDeposit () {
              const cmpPeriod = 12 / this.CompoundingTimes
              let cumulateTime = cmpPeriod + 1
              let cumulateInterest = 0
              let deposit = 0
              let totalInterest = 0
              const interest = this.inputValues.rateOfInterest / 100
              let i
              for (i = 1; i <= this.inputValues.period; i++) {
                if (i === cumulateTime) {
                  deposit = +deposit + +this.inputValues.monthlyDeposit + +cumulateInterest
                  cumulateInterest = 0                  
                  cumulateTime = cumulateTime + cmpPeriod
                } else {
                  deposit = +deposit + +this.inputValues.monthlyDeposit                  
                }
                totalInterest = totalInterest + (deposit * interest / 12)                
                cumulateInterest = cumulateInterest + (deposit * interest / 12)
              }
              return Math.round(totalInterest)
          }
  }  
}
</script>

<style lang="stylus">

</style>