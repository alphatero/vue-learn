<template>
  <div>
    <Navbar/>
    <Alert/>
    <div class="container-fluid">
      <div class="row">
        <Sidebar/>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-5">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar'
import Navbar from './navbar'
import Alert from './alertMessage'
export default {
  components: {
    Sidebar,
    Navbar,
    Alert,
  },
  created() {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=s*([^;]*).*$)|^.*$/, '$1');
    //console.log('mycookie',myCookie);
    this.$http.defaults.headers.common.Authorization= myCookie;
  },
}
</script>