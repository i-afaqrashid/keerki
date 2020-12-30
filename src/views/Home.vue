<template>
  <div class="home">
    <Intro/>
    <Services/>
    <Gallery/>
    <Partners/>
  </div>

</template>

<script>
import Intro from '../components/intro'
import Services from '../components/services/services'
import Gallery from '../components/gallery/gallery'
import Partners from '../components/partners/partners'
export default {
  name: "Home",
  components:{
    Intro,
    Services,
    Gallery,
    Partners
  }
};
</script>
