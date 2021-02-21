<template>
    <div class="page">
        <UserLogin />                
    </div>
</template>

<script>
import UserLogin from '@theme/components/UserLogin.vue'

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBYY72CVKNDVgaEAEqibxCOHP8LDTSoH1I",
authDomain: "thedatatalks-in.firebaseapp.com",
databaseURL: "https://thedatatalks-in.firebaseio.com",
projectId: "thedatatalks-in",
storageBucket: "thedatatalks-in.appspot.com",
messagingSenderId: "92831253381",
appId: "1:92831253381:web:735bf765b9ea3b21ecfaec",
measurementId: "G-NH1N38E537"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default {
    components: {
        UserLogin
    }
}
</script>