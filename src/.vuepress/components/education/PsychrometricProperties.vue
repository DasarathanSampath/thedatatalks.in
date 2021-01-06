<template>
    <div class="calculatorForm">
        <div class="row-form">
            <label for="DryBulbTemp" class="column-form-left">DryBulbTemp in °F (Values between -148° F to 392° F)</label>
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
            <p class="column-form-left">Standard atmospheric Pressure in psia (p)</p>  <button class="form-result">{{ standardPressure.toFixed(2) }} </button>
            <p class="column-form-left">Standard temperature in °F (t)</p>  <button class="form-result">{{ standardTemperature.toFixed(2) }} </button>
            <p class="column-form-left">Dry bulb temperature in °R</p>  <button class="form-result">{{ DryBulbTempRankine.toFixed(2) }} </button>
            <p class="column-form-left">Wet bulb temperature in °R</p>  <button class="form-result">{{ WetBulbTempRankine.toFixed(2) }} </button>
            <p class="column-form-left">Saturated Pressure @ DBT in psia (P<sub>dbt</sub>)</p>  <button class="form-result">{{ saturatedPressureDryBulbTemp.toFixed(2) }} </button>
            <p class="column-form-left">Saturated Pressure @ WBT in psia (P<sub>wbt</sub>)</p>  <button class="form-result">{{ saturatedPressureWetBulbTemp.toFixed(2) }} </button>
            <p class="column-form-left">humidity Ratio @ Saturation (W<sub>wbt</sub>)</p>  <button class="form-result">{{ humidityRatioAtSaturation.toFixed(4) }} </button>
            <p class="column-form-left">humidity Ratio AH / HR in lb/lb (W)</p>  <button class="form-result">{{ HumidityRatio.toFixed(4) }} </button>
            <p class="column-form-left">Partial Pressure Of Water Vapour in psia (VP)</p>  <button class="form-result">{{ partialPressureOfWaterVapour.toFixed(4) }} </button>
            <p class="column-form-left">Relative Humidity in % (RH)</p>  <button class="form-result">{{ relativeHumidity.toFixed(2) }}% </button>
            <p class="column-form-left">Dew Point temperature in °F (DP)</p>  <button class="form-result">{{ dewPointTemperature.toFixed(2) }} </button>
            <p class="column-form-left">specific Enthalpy in Btu/lb (SH)</p>  <button class="form-result">{{ specificEnthalpy.toFixed(2) }} </button>
            <p class="column-form-left">specific Volume in ft<sup>3</sup>/lb (SV)</p>  <button class="form-result">{{ specificVolume.toFixed(2) }} </button>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            inputValues: {
                DryBulbTemp: 75,
                WetBulbTemp: 68,
                altitude: 0
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
        standardTemperature () {
            return 59 - 0.00356620 * this.inputValues.altitude
        },
        WetBulbTempRankine () {
            const rankineConst = 459.67
            return this.inputValues.WetBulbTemp * 1 + rankineConst
        },
        DryBulbTempRankine () {
            const rankineConst = 459.67
            return this.inputValues.DryBulbTemp * 1 + rankineConst
        },
        saturatedPressureDryBulbTemp () {
            const tempRature = this.DryBulbTempRankine
            if(tempRature < 491.67)
                return Math.exp(this.constants.c1 / tempRature + this.constants.c2 + this.constants.c3 * tempRature + this.constants.c4 * Math.pow(tempRature, 2) + this.constants.c5 * Math.pow(tempRature, 3) + this.constants.c6 * Math.pow(tempRature, 4) + this.constants.c7 * Math.log(tempRature))
            else 
                return Math.exp(this.constants.c8 / tempRature + this.constants.c9 + this.constants.c10 * tempRature + this.constants.c11 * Math.pow(tempRature, 2) + this.constants.c12 * Math.pow(tempRature, 3) + this.constants.c13 * Math.log(tempRature))
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

        },
        partialPressureOfWaterVapour () {
            return (this.standardPressure * this.HumidityRatio) / (0.621945 + this.HumidityRatio)
        },
        relativeHumidity () {
            return (this.partialPressureOfWaterVapour / this.saturatedPressureDryBulbTemp) * 100
        },
        dewPointTemperature () {
            const alphaConstant = Math.log(this.partialPressureOfWaterVapour)
            if(this.inputValues.DryBulbTemp > 32)
                return this.constants.c14 + this.constants.c15 * alphaConstant + this.constants.c16 * Math.pow(alphaConstant, 2) + this.constants.c17 * Math.pow(alphaConstant, 3) + this.constants.c18 * Math.pow(this.partialPressureOfWaterVapour, 0.1984)                
            else
                return 90.12 + 26.142 * alphaConstant + 0.8927 * Math.pow(alphaConstant, 2)
        },
        specificVolume () {
            return (0.370486 * this.DryBulbTempRankine * (1 + 1.607858 * this.HumidityRatio)) / this.standardPressure
        },
        specificEnthalpy () {
            return 0.240 * this.inputValues.DryBulbTemp + this.HumidityRatio * (1061 + 0.444 * this.inputValues.DryBulbTemp)
        }
    }

}

</script>

<style lang="stylus" scoped>
p
 line-height 1rem

</style>