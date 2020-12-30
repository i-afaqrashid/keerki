<template>
  <div class="home">
    <Intro/>
    <Services/>
    <Gallery/>
  </div>

</template>

<script>
import Intro from '../components/intro'
import Services from '../components/services/services'
import Gallery from '../components/gallery/gallery'
export default {
  name: "Home",
  components:{
    Intro,
    Services,
    Gallery
  }
};
</script>
