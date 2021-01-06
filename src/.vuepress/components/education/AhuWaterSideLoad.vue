<template>
    <div class="calculatorForm">
        <div class="row-form">
            <label for="inletWaterTemp" class="column-form-left">Inlet Water Temperature in °F</label>
            <input v-model="inputValues.inletWaterTemp" id="inletWaterTemp" class="column-form-right">
        </div>
        <div class="row-form">
            <label for="outletWaterTemp" class="column-form-left">Outlet Water Temperature in °F</label>
            <input v-model="inputValues.outletWaterTemp" id="outletWaterTemp" class="column-form-right">
        </div>
        <div class="row-form">
            <label for="flowRateInGpm" class="column-form-left">Water flow rate in gpm</label>
            <input v-model="inputValues.flowRateInGpm" id="flowRateInGpm" class="column-form-right">
        </div>
        <div class="row-form">
            <p class="column-form-left">Chilled water Btu</p>  <button class="form-result">{{ coolingLoadBtu }} </button>
            <p class="column-form-left">Chilled water Tons</p>  <button class="form-result">{{ coolingLoadTons }} </button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            inputValues:{
                inletWaterTemp: 44,
                outletWaterTemp: 54,
                flowRateInGpm: 24
            }

        }
    },
    computed: {
        coolingLoadBtu () {
            return 500*this.inputValues.flowRateInGpm*(this.inputValues.outletWaterTemp-this.inputValues.inletWaterTemp)
        },
        coolingLoadTons () {
            return this.coolingLoadBtu/12000
        }
    }
    
}
</script>