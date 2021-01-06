<template>
    <div class="calculatorForm">
        <div class="row-form">
            <label for="inletAirDbt" class="column-form-left">Inlet/Entering Coil Air DBT in °F</label>
            <input v-model="inputValues.inletAirDbt" id="inletAirDbt" class="column-form-right">
        </div>
        <div class="row-form">
            <label for="outletAirDbt" class="column-form-left">Outlet/Leaving Coil Air DBT in °F</label>
            <input v-model="inputValues.outletAirDbt" id="outletAirDbt" class="column-form-right">
        </div>
        <div class="row-form">
            <label for="adpTemp" class="column-form-left">ADP in °F</label>
            <input v-model="inputValues.adpTemp" id="adpTemp" class="column-form-right">
        </div>        
        <div class="row-form">
            <p class="column-form-left">By-pass Factor</p>  <button class="form-result">{{ byPassFactor.toFixed(2) }} </button>
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
                adpTemp: 53.7                
            }

        }
    },
    computed: {
        byPassFactor () {
            return (this.inputValues.outletAirDbt - this.inputValues.adpTemp) / (this.inputValues.inletAirDbt - this.inputValues.adpTemp)
        }
    }
    
}
</script>