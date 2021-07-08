<template>
    <div>
    <div class="artGalleryRow">
        <div class="artGalleryColumn" v-for="imageName in imageNames" :key="imageName.key">  
            <expandable-image
            class="artGalleryImage"
            :src="imgPath(imageName)"
            alt="dog"
            title="dog"
            />
            <h1 class="card-txt__title"> {{ListofFiles[imageName].createdBy}} </h1>
            <p class="card-txt__imgDesc">{{ListofFiles[imageName].imageDescription}}</p>  
            <div>
                  <span class="card-txt__dateTime">{{ListofFiles[imageName].qualification}}</span> • 
                  <span class="card-txt__dateTime">{{ListofFiles[imageName].date}}</span> •   
            </div>
        </div>
    </div>
    <div style="clear: both;"></div>
    </div>
</template>

<script>
import ExpandableImage from './ExpandableImage'
import ArtGalleryFiles from '@assets/jsons/ArtGallery.json'

export default {
    components: { ExpandableImage },
    data () {
        return {
            ListofFiles: ArtGalleryFiles
        }
    },
    computed: {
        post () {
            return this.$frontmatter
        },
        imageNames () {
            return Object.keys(this.ListofFiles)
        }
    },
    methods: {
        imgPath (id) {
            return require(`@assets/images/others/art-gallery/${id}.jpeg`)
        }
    }
}
</script>
<style>
#artgallery {  
  width: 600px;
  max-width: 100%;
  margin: 50px auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.artGalleryImage {
  width: 100%;
}

/* Clear floats after the columns */
.artGalleryRow:after {
  content: "";
  display: table;
  clear: both;
}

/* Create three equal columns that floats next to each other */
.artGalleryColumn {
  float: left;
  width: 30%;
  padding: 1%;
}

</style>