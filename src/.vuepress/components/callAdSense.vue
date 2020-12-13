<template>
    <div>
        <ins v-if="addType=='inline'" class="adsbygoogle"
            style="display:block"
            data-ad-format="fluid"
            data-ad-layout-key="-5h+c4-1q-6w+t7"
            data-ad-client="ca-pub-3042269102042405"
            data-ad-slot="1900291914">
        </ins>
        <ins v-if="addType=='horizontal'" class="adsbygoogle"
            style="display:inline-block;width:100%;height:90px; padding-top: 4em;"
            data-ad-client="ca-pub-3042269102042405"
            data-ad-slot="8888635421">
      </ins>
    </div>
</template>

<script>
export default {

props: {
    addType: {
        required: true,
        type: String
    }
},

mounted() {
    (adsbygoogle = window.adsbygoogle || []).push({})
}

}    
</script>