// import firebase from 'firebase'
import { helpers as vuelidateHelpers} from 'vuelidate/dist/validators.min.js'

export const uniqueUsername = (value) => {
    if(!vuelidateHelpers.req(value)){
        return true
    }
    return new Promise((resolve, reject) => {
        firebase.database().ref('users').orderByChild('username').equalTo(value.toLowerCase())
            .once('value', snapshot => {
                resolve(!snapshot.exists())
            })
    }) 
}

export const uniqueEmail = (value) => {
    if(!vuelidateHelpers.req(value)){
        return true
    }
    return new Promise((resolve, reject) => {
        firebase.database().ref('users').orderByChild('email').equalTo(value.toLowerCase())
            .once('value', snapshot => {                                
                resolve(!snapshot.exists())
            })
    })
}

export const supportedImageFile = (value) => {
    if(!vuelidateHelpers.req(value)){
        return true
    }
    const supported = ['jpg', 'jpeg', 'png', 'svg']
    const suffix = value.split('.').pop()
    return supported.includes(suffix)
}

export const responseOk = (value) => {
    if(!vuelidateHelpers.req(value)){
        return true
    }
    return new Promise((resolve, reject) => {
        fetch(value)
            .then(response => resolve(response.ok))
            .catch(() => resolve(false))
    })
}