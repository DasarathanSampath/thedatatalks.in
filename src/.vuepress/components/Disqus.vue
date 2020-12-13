<template>
  <div id="disqus_thread"></div>
</template>
<script>
  export default {
    mounted() {
      var disqus_config = function () {
        this.page.url = window.location.origin;  
        this.page.identifier = window.location.pathname; 
      };
      (function() {
        var d = window.document, s = d.createElement('script');
        s.src = 'https://https-thedatatalks-in.disqus.com/embed.js';                
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();
      var reset = function (newIdentifier, newUrl, newTitle, newLanguage) {
        DISQUS.reset({
            reload: true,
            config: function () {
                this.page.identifier = newIdentifier;
                this.page.url = newUrl;
                this.page.title = newTitle;
                this.language = newLanguage;
            }
        });
      };
    }
  }
</script>