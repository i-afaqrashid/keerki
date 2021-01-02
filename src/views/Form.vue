<template>
    <div class="form">  
        <FormHeader/>
        <router-view></router-view>
    </div>
</template>
<script>
import FormHeader from '../components/formHeader'
export default {
    name:"Form",
    components:{
        FormHeader
    }
}
</script>