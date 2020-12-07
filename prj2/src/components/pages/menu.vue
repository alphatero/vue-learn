<template>
  <div class="hello my-3">
      
      
      
<ul class="nav">
  <li class="nav-item">
    <router-link class="nav-link" to="/page/">Card1</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/page/child2">Card2</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/page/child3">Card３</router-link>
    
  </li>  
  <li class="nav-item">
   
    <a href="#" class="nav-link" @click.prevent="updatePath">switch</a>
  </li>  
  <li class="nav-item">
   
    <a href="#" class="nav-link" @click.prevent="beforePath">before</a>
  </li>
  
</ul>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    updatePath() {
      this.$router.push('/page/child2');
    },
    beforePath() {
      this.$router.back();
    },
  },
}
</script>