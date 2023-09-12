<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


<style lang="scss">
.ErrorMessage {
  background-color: rgb(20, 53, 114) !important;
  border: 1px solid #ff3f3f !important;
  border-radius: 8px !important;
  .ErrorMessage-icon {
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-image: url("~@/assets/logo.png");
    background-size: 100%;
  }
  .el-message__content {
    margin-left: 20px;
    font-size: 22px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #fe3f3f !important;
  }
}
</style>
