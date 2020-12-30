<template>
  <div class="home">
    <Intro/>
    <Services/>
    <Gallery/>
    <Partners/>
    <Clients/>
    <Banner/>
    <Footer/>
  </div>

</template>

<script>
import Intro from '../components/intro'
import Services from '../components/services/services'
import Gallery from '../components/gallery/gallery'
import Partners from '../components/partners/partners'
import Clients from '../components/clients/clients'
import Banner from '../components/banner'
import Footer from '../components/footer'
export default {
  name: "Home",
  components:{
    Intro,
    Services,
    Gallery,
    Partners,
    Clients,
    Banner,
    Footer
  }
};
</script>
