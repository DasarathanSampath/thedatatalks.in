<template>
    <div class="calculatorForm">
        <div class="row-form">
            <label for="inletAirDbt" class="column-form-left">Inlet Air DBT in °F</label>
            <input v-model="inputValues.inletAirDbt" id="inletAirDbt" class="column-form-right">
        </div>
        <div class="row-form">
            <label for="outletAirDbt" class="column-form-left">Outlet Air DBT in °F</label>
            <input v-model="inputValues.outletAirDbt" id="outletAirDbt" class="column-form-right">
        </div>
        <div class="row-form">
            <label for="airFlowRate" class="column-form-left">Air flow rate in cfm</label>
            <input v-model="inputValues.airFlowRate" id="airFlowRate" class="column-form-right">
        </div>
        <div class="row-form">
            <label for="inletHumidityRatio" class="column-form-left">Inlet Humidity Ratio in lb/lb</label>
            <input v-model="inputValues.inletHumidityRatio" id="inletHumidityRatio" class="column-form-right">
        </div>
        <div class="row-form">
            <label for="outletHumidityRatio" class="column-form-left">Outlet Humidity Ratio in lb/lb</label>
            <input v-model="inputValues.outletHumidityRatio" id="outletHumidityRatio" class="column-form-right">
        </div>
        <div class="row-form">
            <p class="column-form-left">Sensible Load in Tons</p>  <button class="form-result">{{ sensibleLoad.toFixed(2) }} </button>
            <p class="column-form-left">Latent Load in Tons</p>  <button class="form-result">{{ latentLoad.toFixed(2) }} </button>
            <p class="column-form-left">Total Load in Tons</p>  <button class="form-result">{{ totalLoad.toFixed(2) }} </button>
            <p class="column-form-left">Sensible Heat Ratio</p>  <button class="form-result">{{ sensibleHeatRatio.toFixed(2) }} </button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            inputValues:{
                inletAirDbt: 75,
                outletAirDbt: 57,
                airFlowRate: 3000,
                inletHumidityRatio: 0.013,
                outletHumidityRatio: 0.0093
            }

        }
    },
    computed: {
        sensibleLoad () {
            return 1.08 * this.inputValues.airFlowRate * (this.inputValues.inletAirDbt - this.inputValues.outletAirDbt) / 12000
        },
        latentLoad () {
            return 4842 * this.inputValues.airFlowRate * (this.inputValues.inletHumidityRatio - this.inputValues.outletHumidityRatio) / 12000
        },
        totalLoad () {
            return this.sensibleLoad + this.latentLoad
        },
        sensibleHeatRatio () {
            return this.sensibleLoad / (this.totalLoad)
        }
    }
    
}
</script>