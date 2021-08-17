<template>
    <div class="calculatorForm">
        <div class="row-form">
            <label for="DryBulbTemp" class="column-form-left">DryBulbTemp in °F (Values between -20° F to 100° F)</label>
            <input v-model="inputValues.DryBulbTemp" id="DryBulbTemp" class="column-form-right">
        </div>
        <div class="row-form">
            <label for="WetBulbTemp" class="column-form-left">WetBulbTemp in °F</label>
            <input v-model="inputValues.WetBulbTemp" id="WetBulbTemp" class="column-form-right">
        </div>
        <div class="row-form">
            <label for="altitude" class="column-form-left">Altitude / Sea-level in ft</label>
            <input v-model="inputValues.altitude" id="altitude" class="column-form-right">
        </div>
        <div class="row-form">
            <label for="airFlowRate" class="column-form-left">Air flow rate in cfm</label>
            <input v-model="inputValues.airFlowRate" id="airFlowRate" class="column-form-right">
        </div>
        <div class="row-form">
            <label for="sensibleHeatFactor" class="column-form-left">Effective Room Sensible Heat Factor (ERSHF)</label>
            <input v-model="inputValues.sensibleHeatFactor" id="sensibleHeatFactor" class="column-form-right" type="number">
        </div>
        <div class="row-form">
            <p class="column-form-left">Saturated Pressure @ WBT in psia (P<sub>wbt</sub>)</p>  <button class="form-result">{{ saturatedPressureWetBulbTemp.toFixed(2) }} </button>
            <p class="column-form-left">humidity Ratio @ Saturation (W<sub>wbt</sub>)</p>  <button class="form-result">{{ humidityRatioAtSaturation.toFixed(4) }} </button>
            <p class="column-form-left">humidity Ratio AH / HR in lb/lb (W)</p>  <button class="form-result">{{ HumidityRatio.toFixed(4) }} </button>
            <div lass="column-form-left"> 
                <button class="button-submit" @click="AdpCalculation">Click here to Iterate and get ADP</button> 
            </div>
            <button v-if="inputValues.errorMessage==0" class="form-result">{{inputValues.adpTemperature}}</button>
            <button v-else class="form-result">enter ERSHF>{{inputValues.minSHF}} < 1</button>
            <!-- <button class="form-result" @click="AdpCalculation" :adpTemperature="inputValues.adpTemperature">Iterate for ADP</button> <button class="form-result">{{adpTemperature}}</button> -->
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            inputValues:{
                DryBulbTemp: 75,
                WetBulbTemp: 68,
                altitude: 0,
                airFlowRate: 3000,
                sensibleHeatFactor: 0.517,
                adpTemperature: 53.7,
                errorMessage: 0,
                minSHF:1,
                maxSHF:0
            },
            constants: {
                c1: -10214.165, c2: -4.8932428, c3: -0.005376579, c4: 1.92024E-07, c5: 3.55758E-10, c6: -9.03447E-14, c7: 4.1635019,
                c8: -10440.397, c9: -11.29465, c10: -0.027022355, c11: 1.28904E-05, c12: -2.47807E-09, c13: 6.5459673,
                c14: 100.45, c15: 33.193, c16: 2.319, c17: 0.17074, c18: 1.2063
            }
        }
    },
    computed: {
        standardPressure () {
            return 14.696 * Math.pow((1 - (6.8754 * Math.pow(10, -6) * this.inputValues.altitude)), 5.2559)         
        },
        WetBulbTempRankine () {
            const rankineConst = 459.67
            return this.inputValues.WetBulbTemp * 1 + rankineConst
        },
        saturatedPressureWetBulbTemp () {
            const tempRature = this.WetBulbTempRankine
            if(tempRature < 491.67)
                return Math.exp(this.constants.c1 / tempRature + this.constants.c2 + this.constants.c3 * tempRature + this.constants.c4 * Math.pow(tempRature, 2) + this.constants.c5 * Math.pow(tempRature, 3) + this.constants.c6 * Math.pow(tempRature, 4) + this.constants.c7 * Math.log(tempRature))
            else 
                return Math.exp(this.constants.c8 / tempRature + this.constants.c9 + this.constants.c10 * tempRature + this.constants.c11 * Math.pow(tempRature, 2) + this.constants.c12 * Math.pow(tempRature, 3) + this.constants.c13 * Math.log(tempRature))
        },
        humidityRatioAtSaturation () {
            return 0.621945 * this.saturatedPressureWetBulbTemp / (this.standardPressure - this.saturatedPressureWetBulbTemp)
        },
        HumidityRatio () {
            if(this.inputValues.DryBulbTemp > 32)
                return ((1093 - 0.556 * this.inputValues.WetBulbTemp) * this.humidityRatioAtSaturation - 0.240 * (this.inputValues.DryBulbTemp - this.inputValues.WetBulbTemp)) / (1093 + 0.444 * this.inputValues.DryBulbTemp - this.inputValues.WetBulbTemp)
            else
                return ((1220 - 0.04 * this.inputValues.WetBulbTemp) * this.humidityRatioAtSaturation - 0.240 * (this.inputValues.DryBulbTemp - this.inputValues.WetBulbTemp)) / (1220 + 0.444 * this.inputValues.DryBulbTemp - 0.48 * this.inputValues.WetBulbTemp)        
        }
    },
    methods: {
        AdpCalculation () {
            this.inputValues.minSHF = 1
            this.inputValues.maxSHF = 0
            //this.inputValues.adpTemperature = this.inputValues.adpTemperature + 1
            for(let i=(this.inputValues.WetBulbTemp-2); i>-20; i=i-0.1)
            {
                var adpFaren = i
                var tempRature = adpFaren + 459.67
                if(tempRature < 491.67)
                    var saturatedPressureAdp = Math.exp(this.constants.c1 / tempRature + this.constants.c2 + this.constants.c3 * tempRature + this.constants.c4 * Math.pow(tempRature, 2) + this.constants.c5 * Math.pow(tempRature, 3) + this.constants.c6 * Math.pow(tempRature, 4) + this.constants.c7 * Math.log(tempRature))
                else 
                    var saturatedPressureAdp = Math.exp(this.constants.c8 / tempRature + this.constants.c9 + this.constants.c10 * tempRature + this.constants.c11 * Math.pow(tempRature, 2) + this.constants.c12 * Math.pow(tempRature, 3) + this.constants.c13 * Math.log(tempRature))
                var humidityRatioAtAdp = 0.621945 * saturatedPressureAdp / (this.standardPressure - saturatedPressureAdp)
                var sensibleHeatFactorAssumed = (1.08 * this.inputValues.airFlowRate * (this.inputValues.DryBulbTemp - adpFaren)) / ((1.08*this.inputValues.airFlowRate*(this.inputValues.DryBulbTemp - adpFaren))+(4842*this.inputValues.airFlowRate*(this.HumidityRatio - humidityRatioAtAdp)))
                var sensibleHeatFactorInput = Math.round((this.inputValues.sensibleHeatFactor) * 100) / 100
                if (sensibleHeatFactorInput == sensibleHeatFactorAssumed.toFixed(2))
                {
                    this.inputValues.adpTemperature = adpFaren.toFixed(2)
                    this.inputValues.errorMessage = 0
                    break
                }
                else 
                {
                    this.inputValues.errorMessage = 1
                }
                if(this.inputValues.minSHF > sensibleHeatFactorAssumed.toFixed(2))
                    this.inputValues.minSHF = sensibleHeatFactorAssumed.toFixed(2)
                if(this.inputValues.maxSHF < sensibleHeatFactorAssumed.toFixed(2))
                    this.inputValues.maxSHF = sensibleHeatFactorAssumed.toFixed(2)
                // console.log(adpFaren, saturatedPressureAdp, humidityRatioAtAdp, sensibleHeatFactorInput, sensibleHeatFactorAssumed.toFixed(2))
                
            }
            // console.log(this.inputValues.errorMessage)
        }
    }
    
}
</script>