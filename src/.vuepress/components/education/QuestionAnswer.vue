<template>
    <div>
        <div>
            <button v-if="!startTest || isJumped" class="button-blue" v-on:click="nextQuestion(topic, 0)">Start the Test</button>
            <button v-if="startTest && !isJumped" class="button-blue" v-on:click="endTheTest">End the Test</button>            
            <div v-if="asyncDataStatus_fetched && startTest && questions && !isJumped">
                <div style="background-color: rgb(230, 234, 236); border-radius: 0.5rem; padding-left: 1rem; font-weight: 400; font-size: 1.2rem;">            
                    <div id="oneLine"> 
                        <h4 >Question:</h4>
                        <p > {{questions.id}}.) {{questions.question}} </p> 
                    </div>
                    <div style="margin-left: 2rem;">
                        <div id="oneLine">
                            <h4>A. </h4>
                            <input type="radio" id="one" value="A" v-model="picked" :disabled="questions.isAnswered">
                            <label for="one">{{questions.A}}</label>
                        </div>
                        <div id="oneLine">
                            <h4>B. </h4>
                            <input type="radio" id="two" value="B" v-model="picked" :disabled="questions.isAnswered">
                            <label for="two">{{questions.B}}</label>
                        </div>
                        <div id="oneLine">
                            <h4>C. </h4>
                            <input type="radio" id="three" value="C" v-model="picked" :disabled="questions.isAnswered">
                            <label for="three">{{questions.C}}</label>
                        </div>
                        <div id="oneLine">
                            <h4>D. </h4>
                            <input type="radio" id="four" value="D" v-model="picked" :disabled="questions.isAnswered">
                            <label for="four">{{questions.D}}</label>
                        </div>
                    </div>
                    <p>Selected Answer: <b style="color:crimson;">{{ picked }}</b></p>      
                </div>
                <p style="margin:0em;"><b>Result: </b><slot v-bind:result="result"> <b style="color:crimson;">{{ result }} </b></slot></p>
                <div>
                    <button v-if="disabledNext" class="button-blue" v-on:click="checkAnswer(picked)">Check</button>
                    <div>
                        <button v-if="isQuestionsAnsweredOne && disabledCheck" class="button-blue" v-on:click="preQuestion">Previous Question</button>
                        <button v-if="disabledCheck && lastQuestion" class="button-blue" style="right:0;" v-on:click="nextQuestion(topic, 1)">Next</button>
                        <button v-if="!lastQuestion" class="button-blue" style="right: 0;">No More Questions</button>
                    </div>
                </div>
                <div>                    
                    <p style="margin:0em;" v-if="correctAnswer"><b>Correct Answer is : </b><slot v-bind:correctAnswer="correctAnswer">{{ correctAnswer }}</slot></p>
                    <p style="margin:0em;" ><b>Explanation: </b><slot v-bind:detail="detail">{{ detail }}</slot></p>
                    <p style="margin:0em;"> <b>Your Score: </b> {{totalScore}} / {{totalQuestionsAnswered}} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import asyncDataStatus from '../../mixins/asyncDataStatus'
import {mapGetters} from 'vuex'

export default {
    props:{
        topic:{
            required: true,
            type: String
        },
        totalQuestions:{
            required: true,
            type: Number
        },
        startingQuestion:{
            required: true,
            type: Number
        }
    },
    data() {
        return {
            picked: "A",
            totalScore: 0,
            totalQuestionsAnswered: 0,
            detail: "",
            result: "",
            correctAnswer: "",
            disabledCheck: false,
            disabledNext: true,
            startTest: false,
            isAnswered: false,
            isJumped: false
        }
    },
    computed: {
        ...mapGetters({
            questions: 'questions',
            currentQuestion: 'currentQuestion'
        }),
        lastQuestion(){
            if(this.totalQuestionsAnswered == this.totalQuestions && (this.currentQuestion-this.startingQuestion+1) ==  this.totalQuestionsAnswered)
                return false
            else
                return true
        },
        isQuestionsAnsweredOne(){            
            if (this.totalQuestionsAnswered < 2 || (this.currentQuestion + 0) < (this.startingQuestion+1)){                
                return false
            }                
            else{
                return true
            }                
        },
        setIsAnswered() {
            if(this.questions.isAnswered == true){
                this.isAnswered = true
            }                
            else{
                this.isAnswered = false
            }                
        }        
    },
    mixins: [asyncDataStatus],
    methods: {
        checkAnswer(picked) {            
            this.disabledCheck = true
            this.disabledNext = false            
            if(picked == this.questions.ans){                
                this.totalScore = this.totalScore + 1
                this.totalQuestionsAnswered =  this.totalQuestionsAnswered + 1
                this.detail = this.questions.detail
                this.result = "You are Right"
            }
            else{                
                this.totalQuestionsAnswered =  this.totalQuestionsAnswered + 1
                this.detail = this.questions.detail
                this.result = "You are Wrong. The correct answer is " + this.questions.ans
                this.correctAnswer = this.questions.ans                
            }
            this.$store.dispatch('updateCurrentQuestion', {currentQuestion: this.currentQuestion, picked: picked, result: this.result})
        },
        nextQuestion(topic, start){
            if(start == 0) {
                this.$emit('selectedTestSet', this.startingQuestion)
                this.startTest = false
            }
            if(this.totalQuestionsAnswered == 0 || this.totalQuestionsAnswered == (this.currentQuestion - this.startingQuestion + 1)){
                this.disabledNext = true
                this.disabledCheck = false
                this.correctAnswer = null
                this.startTest = true
                const topic2 = topic.toString()
                const qstNumber = (this.startingQuestion + this.totalQuestionsAnswered).toString()
                this.$store.dispatch('fetchQuestion', {topic: topic2, qstNumber: qstNumber})
                    .then(() => {                 
                        this.$store.dispatch('setCurrentQuestion', qstNumber)
                            .then(() => {
                                this.asyncDataStatus_fetched()
                            }) 
                    })
                this.detail = ""
                this.result = ""
                this.picked = "A"
            }
            else{
                const qstNumber = this.currentQuestion + 1
                this.$store.dispatch('setCurrentQuestion', qstNumber)
                    .then(() => {
                        this.picked = this.questions.selectedAnswer
                    })
                this.detail = this.questions.detail
                this.result = this.questions.result
                this.picked = this.questions.selectedAnswer
            }       
        },
        endTheTest(){
            this.picked = "A",
            this.totalQuestionsAnswered = 0,
            this.totalScore = 0,
            this.detail = "",
            this.result = "",
            this.correctAnswer = "",
            this.disabledCheck = false,
            this.disabledNext = true,
            this.startTest = false
            this.$store.dispatch('setQuestionsNull')
            this.$emit('selectedTestSet', null)
        },
        preQuestion(){
            const qstNumber = this.currentQuestion - 1
            this.$store.dispatch('setCurrentQuestion', qstNumber)
                .then(() => {
                        this.picked = this.questions.selectedAnswer
                    })
            this.detail = this.questions.detail
            this.result = this.questions.result
            this.picked = this.questions.selectedAnswer
        }
    },
    watch: {
        currentQuestion: function(newVal, oldVal) {
            if(Number(this.currentQuestion) >= this.startingQuestion && Number(this.currentQuestion) <= (this.startingQuestion + this.totalQuestions - 1))
                this.isJumped = false
            else
                this.isJumped = true
        }
    },
    created() {

    }
}

</script>

<style>

#oneLine h1, 
#oneLine h4,
#oneLine p {
    display: inline;
}

</style>