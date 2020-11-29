<template>
  <main class="theme-container">
    <article>
      <div class="row">
        <div class="leftcolumn">
          <div class="card__first" v-for="post in blogsSplit.firstBlog" :key="post.key">    
            <img class="card-img__first" :src="imgPath(post.frontmatter['id'], post.frontmatter['topic'])" />
            <div class="card-txt">            
              <h1 class="card-txt__title"> {{post.title}} </h1> 
              <div>             
                <span class="card-txt__dateTime"> {{post.frontmatter['author']}}</span> • 
                <span class="card-txt__dateTime">{{post.frontmatter['date']}}</span> •             
              </div>
              <p class="card-txt__imgDesc"> {{post.frontmatter['imgDesc']}}</p>
              <p class="card-txt__desc"> {{post.frontmatter['desc']}} </p>            
              <a class="card-txt__lnk" :href="post.path"> Read → </a>
            </div>
          </div>
          <div class="card" v-for="post in blogsSplit.leftBlogs" :key="post.key">          
              <img class="card-img" :src="imgPath(post.frontmatter['id'], post.frontmatter['topic'])" />
              <div class="card-txt">
                <h1 class="card-txt__title"> {{post.title}} </h1>      
                <p class="card-txt__imgDesc">{{post.frontmatter['imgDesc']}}</p>  
                <div>
                  <span class="card-txt__dateTime">{{post.frontmatter['author']}}</span> • 
                  <span class="card-txt__dateTime">{{post.frontmatter['date']}}</span> •   
                </div>                
                <p class="card-txt__desc"> {{post.frontmatter['desc']}} </p>
                <a class="card-txt__lnk" :href="post.path"> Read → </a>            
            </div>            
          </div>        
        </div>
        <div class="rightcolumn">          
            <div class="card__first" v-for="post in blogsSplit.rightTopBlogs" :key="post.key">
              <img class="card-img__first" :src="imgPath(post.frontmatter['id'], post.frontmatter['topic'])" />
              <h1 class="card-txt__title"> {{post.title}} </h1>
              <div>                    
                <span class="card-txt__dateTime">{{post.frontmatter['author']}}</span> • 
                <span class="card-txt__dateTime">{{post.frontmatter['date']}}</span> •            
              </div>
              <p class="card-txt__imgDesc">{{post.frontmatter['imgDesc']}}</p>
              <a class="card-txt__lnk" :href="post.path"> Read → </a>
            </div>
            <div class="card__right" v-for="post in blogsSplit.rightMiddleBlogs" :key="post.key">
              <h1 class="card-txt__title"> {{post.title}} </h1>                 
              <p class="card-txt__desc"> {{post.frontmatter['desc']}} </p>
              <a class="card-txt__lnk" :href="post.path"> Read → </a>
            </div>
            <div class="card__right" v-for="post in blogsSplit.rightBottomBlogs" :key="post.key">
              <h1 class="card-txt__title"> {{post.title}} </h1>
              <p class="card-txt__desc"> {{post.frontmatter['desc']}} </p>
              <a class="card-txt__lnk" :href="post.path"> Read → </a>
            </div>
          </div>        
      </div>      
    </article>
  </main>
</template>

<script>

export default {
  computed: {
    blogPosts () {
      const blogsPolitics = this.$site.pages.filter(page => page.path.includes('/politics/'))
      const blogsEconomics = this.$site.pages.filter(page => page.path.includes('/economics/'))
      const blogsEducation = this.$site.pages.filter(page => page.path.includes('/education/'))
      const blogsOthers = this.$site.pages.filter(page => page.path.includes('/others/'))
      const blogsTotalSorted = blogsPolitics.concat(blogsEconomics, blogsEducation, blogsOthers)
      const blogsTotal = blogsTotalSorted
      var iP = blogsTotal.length
      while (iP--) {
          if (blogsTotal[iP].frontmatter.isHome || blogsTotal[iP].frontmatter.articleLang !== this.$lang) { 
              blogsTotal.splice(iP, 1)
          } 
      }
      return blogsTotal
    },
    blogsSplit () {
      const blogsLength = this.blogPosts.length
      const leftBlogsLength = Math.floor(blogsLength*40/100)
      const rigthTopBlogsLength = Math.floor(blogsLength*50/100)
      const rigthMiddleBlogsLength = Math.floor(blogsLength*80/100)
      const firstBlog = this.blogPosts.slice(0,1)
      const leftBlogs = this.blogPosts.slice(1,leftBlogsLength)
      const rightTopBlogs = this.blogPosts.slice(leftBlogsLength, rigthTopBlogsLength)
      const rightMiddleBlogs = this.blogPosts.slice(rigthTopBlogsLength, rigthMiddleBlogsLength)
      const rightBottomBlogs = this.blogPosts.slice(rigthMiddleBlogsLength, blogsLength)
      return { firstBlog, leftBlogs, rightTopBlogs, rightMiddleBlogs, rightBottomBlogs }
    }
  },

  methods: {
    imgPath (id, topic) {
      return require(`@assets/thumbnails/${topic}/${id}/_thumbnail.png`)
    },
    /* shuffle(array) {
      var currentIndex = array.length
      var randomIndex, temporaryValue
     // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }
    return array
    } */
  }
}
</script>

<style lang="stylus">

</style>



