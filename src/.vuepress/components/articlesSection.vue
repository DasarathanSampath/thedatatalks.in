<template>
  <main class="theme-container">
    <article>
      <div class="row">
        <div class="leftcolumn">
          <div class="card__first" v-for="post in blogsSplit.firstBlog" :key="post.key">    
            <img class="card-img__first" :src="imgPath(post.frontmatter['id'])" />
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
          <call-ad-sense addType="inline"/>
          <div class="card" v-for="post in blogsSplit.leftBlogs" :key="post.key">          
              <img class="card-img" :src="imgPath(post.frontmatter['id'])" />
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
            <call-ad-sense addType="inline"/>
            <div class="card__first" v-for="post in blogsSplit.rightTopBlogs" :key="post.key">
              <img class="card-img__first" :src="imgPath(post.frontmatter['id'])" />
              <h1 class="card-txt__title"> {{post.title}} </h1>
              <div>                    
                <span class="card-txt__dateTime">{{post.frontmatter['author']}}</span> • 
                <span class="card-txt__dateTime">{{post.frontmatter['date']}}</span> •            
              </div>
              <p class="card-txt__imgDesc">{{post.frontmatter['imgDesc']}}</p>
              <a class="card-txt__lnk" :href="post.path"> Read → </a>
            </div>
            <call-ad-sense addType="inline"/>
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
import CallAdSense from './callAdSense'
export default {
  components:{
    CallAdSense
  },
  computed: {
    blogPosts () {
      const blogs = this.$site.pages.filter(page => page.path.includes(`/${this.$frontmatter.topic}/`))
      var i = blogs.length
      while (i--) {
          if (blogs[i].frontmatter.isHome || blogs[i].frontmatter.articleLang !== this.$lang) { 
              blogs.splice(i, 1)
          } 
      }
      return blogs
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
    imgPath (blog) {
      return require(`@assets/thumbnails/${this.$frontmatter.topic}/${blog}/_thumbnail.png`)
    }
  }
}
</script>

<style lang="stylus">


</style>



