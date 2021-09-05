<template> 
    <div>
        <h2>Questions from {{test1StartingQuestion}} to {{test1StartingQuestion + test1TotalQuestions - 1}}</h2>
        <div v-if="startedQuestion != test1StartingQuestion || startedQuestion == null">
            <img style="filter: blur(1px); -webkit-filter: blur(1px);" src="@assets/images/education/maths-number-system/number-system.png">
        </div>
        <div>
            <QuestionAnswer
                :topic=NumberSystem
                :totalQuestions=test1TotalQuestions
                :startingQuestion=test1StartingQuestion
                v-on:selectedTestSet="selectedQuestionFromChild"
            />
        </div>
        <h2>Questions from {{test2StartingQuestion}} to {{test2StartingQuestion + test2TotalQuestions - 1}}</h2>
        <div v-if="startedQuestion != test2StartingQuestion || startedQuestion == null">
            <img style="filter: blur(1px); -webkit-filter: blur(1px);" src="@assets/images/education/maths-number-system/number-system.png">
        </div>
        <div>
            <QuestionAnswer
                :topic=NumberSystem
                :totalQuestions=test2TotalQuestions
                :startingQuestion=test2StartingQuestion
                v-on:selectedTestSet="selectedQuestionFromChild"
            />
        </div>
        <h2>Questions from {{test3StartingQuestion}} to {{test3StartingQuestion + test3TotalQuestions - 1}}</h2>
        <div v-if="startedQuestion != test3StartingQuestion || startedQuestion == null">
            <img style="filter: blur(1px); -webkit-filter: blur(1px);" src="@assets/images/education/maths-number-system/number-system.png">
        </div>
        <div>
            <QuestionAnswer
                :topic=NumberSystem
                :totalQuestions=test3TotalQuestions
                :startingQuestion=test3StartingQuestion
                v-on:selectedTestSet="selectedQuestionFromChild"
            />
        </div>
        <h2>Questions from {{test4StartingQuestion}} to {{test4StartingQuestion + test4TotalQuestions - 1}}</h2>
        <div v-if="startedQuestion != test4StartingQuestion || startedQuestion == null">
            <img style="filter: blur(1px); -webkit-filter: blur(1px);" src="@assets/images/education/maths-number-system/number-system.png">
        </div>
        <div>
            <QuestionAnswer
                :topic=NumberSystem
                :totalQuestions=test4TotalQuestions
                :startingQuestion=test4StartingQuestion
                v-on:selectedTestSet="selectedQuestionFromChild"
            />
        </div>
        <h2>Questions from {{test5StartingQuestion}} to {{test5StartingQuestion + test5TotalQuestions - 1}}</h2>
        <div v-if="startedQuestion != test5StartingQuestion || startedQuestion == null">
            <img style="filter: blur(1px); -webkit-filter: blur(1px);" src="@assets/images/education/maths-number-system/number-system.png">
        </div>
        <div>
            <QuestionAnswer
                :topic=NumberSystem
                :totalQuestions=test5TotalQuestions
                :startingQuestion=test5StartingQuestion
                v-on:selectedTestSet="selectedQuestionFromChild"
            />
        </div>
    </div>
</template>

<script>
import QuestionAnswer from './QuestionAnswer.vue'

export default {
    
    components: {
        QuestionAnswer
    },
    data() {
        return {
            test1TotalQuestions: 25,
            test2TotalQuestions: 25,
            test3TotalQuestions: 25,
            test4TotalQuestions: 25,
            test5TotalQuestions: 18,
            NumberSystem: "NumberSystem",
            test1StartingQuestion: 1,
            test2StartingQuestion: 26,
            test3StartingQuestion: 51,
            test4StartingQuestion: 76,
            test5StartingQuestion: 101,
            startTest: true,
            startedQuestion: null
        }
    },
    methods: {
        selectedQuestionFromChild (startedQuestion){
            this.startedQuestion = startedQuestion
        }
    }
}
</script>
