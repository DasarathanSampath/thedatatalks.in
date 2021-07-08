<template>
    <div class="calculatorForm">
        <div class="row-form">
            <label for="ductLength" class="column-form-left">Duct Length [l] (Inches)</label>
            <input v-model="inputValues.ductLength" id="ductLength" class="column-form-right">
        </div>
        <div class="row-form">
            <label for="ductWidth" class="column-form-left">Duct Width [W] (Inches)</label>
            <input v-model="inputValues.ductWidth" id="ductWidth" class="column-form-right">
        </div>
        <div class="row-form">
            <label for="ductHeight" class="column-form-left">Duct Height [H] (Inches)</label>
            <input v-model="inputValues.ductHeight" id="ductHeight" class="column-form-right">
        </div>
        <div class="row-form">
            <label for="airFlow" class="column-form-left">Air Flow [q] (cfm)</label>
            <input v-model="inputValues.airFlow" id="airFlow" class="column-form-right">
        </div>       
        <div class="row-form">
            <label for="absViscosity" class="column-form-left">Absolute Viscoity of air @ 80° F [µ] (lb/ft-hr)</label>
            <input v-model="inputValues.absViscosity" id="absViscosity" class="column-form-right" style="background-color: aquamarine;">
        </div> 
        <div class="row-form">
            <label for="airDensity1" class="column-form-left">Density of air [ρ] (slug/ft3)</label>
            <input v-model="inputValues.airDensity1" id="airDensity1" class="column-form-right" style="background-color: aquamarine;">
        </div> 
        <div class="row-form">
            <label for="airDensity2" class="column-form-left">Density of air [ρ] (lb/ft3)</label>
            <input v-model="inputValues.airDensity2" id="airDensity2" class="column-form-right" style="background-color: aquamarine;">
        </div> 
        <div class="row-form">
            <label for="absRoughness" class="column-form-left">Absolute roughness for Galvanized steel [ε] (in)</label>
            <input v-model="inputValues.absRoughness" id="absRoughness" class="column-form-right" style="background-color: aquamarine;">
        </div> 
        <div class="row-form">
            <p class="column-form-left">Cross Section Area [a] (in2)</p>  <button class="form-result">{{ crossSectionArea.toFixed(2) }} </button>
            <p class="column-form-left">Perimeter [p] (in)</p>  <button class="form-result">{{ ductPerimeter.toFixed(2) }} </button>        
            <p class="column-form-left">Air Velocity [v] (fpm)</p>  <button class="form-result">{{ airVelocity.toFixed(2) }} </button>
            <p class="column-form-left">Wetted Perimeter [p​w​​] (in)</p>  <button class="form-result">{{ wettedPerimeter.toFixed(2) }} </button>
            <p class="column-form-left">Hydraulic Diameter [dh] (in)</p>  <button class="form-result">{{ hydDiameter.toFixed(2) }} </button>
            <p class="column-form-left">Reynold Number [Re]</p>  <button class="form-result">{{ reynoldNumber.toFixed(2) }} </button>
            <p class="column-form-left">Friction loss co-efficient [λ]</p>  <button class="form-result">{{ lambda.toFixed(4) }} </button>
            <p class="column-form-left">Pressure Loss [ΔP] (in of H2O)</p>  <button class="form-result">{{ pressureLoss.toFixed(4) }} </button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            inputValues:{
                ductLength: 100.00,
                ductWidth: 18.00,
                ductHeight: 12.00,
                airFlow: 2000,                
                absViscosity: 0.04462,
                airDensity1: 0.00237,
                airDensity2: 0.0751,
                absRoughness: 0.0036          
            }

        }
    },
    computed: {
        ductWidth(){
            return this.inputValues.ductWidth
        },
        ductHeight(){
            return this.inputValues.ductHeight
        },
        ductLength(){
            return this.inputValues.ductLength
        },
        airFlow(){
            return this.inputValues.airFlow
        },
        crossSectionArea () {
            return this.ductWidth * this.ductHeight
        },
        ductPerimeter () {
            return (this.ductWidth * 2 + this.ductHeight * 2)
        },
        airVelocity() {
            return (this.airFlow / (this.crossSectionArea/144))
        },
        wettedPerimeter() {
            return (this.ductPerimeter/1)
        },
        hydDiameter(){
            return (4 * this.crossSectionArea /this.wettedPerimeter)
        },
        reynoldNumber(){
            return ((this.hydDiameter/12)*(this.airVelocity*60) * this.inputValues.airDensity2 / this.inputValues.absViscosity)
        },
        lambda(){            
            const assumedLambda = 0.0001
            //const eqLeft = 1 / Math.sqrt(assumedLambda)
            //const eqRight = -2 * Math.log10((2.51 / (this.inputValues.reynoldNumber * Math.sqrt(assumedLambda))) + (this.inputValues.absRoughness / (this.inputValues.hydDiameter * 3.72)))
            let j=0
            let z=10
            let lambda = 0          
            if((1*this.reynoldNumber) < 2300) {
                return (64 / this.reynoldNumber)
            }  
            else {
                for(let i=0.0001; i<=0.25; i=i+0.0001){
                    j = -2 * Math.log10((2.51 / (1 * this.reynoldNumber * Math.sqrt(i))) + ((this.inputValues.absRoughness * 1) / (this.hydDiameter * 3.72)))
                    z = 1 / Math.sqrt(i)   
                    //console.log(i, j, z, j-z)                                        
                    if(Math.abs(j-z) < 0.01)
                    {
                        lambda = i
                        break
                    }
                }    
                 
                return lambda
            }            
        },
        pressureLoss () {
            return (((1* this.lambda) * ((1* this.ductLength) / (1* this.hydDiameter))) * (((1*this.inputValues.airDensity1) * Math.pow((this.airVelocity/60), 2)) / 2) * 0.1922)
        }
    }
    
}
</script>