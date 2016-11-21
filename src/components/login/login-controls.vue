<template>
  <form class="login" @submit.prevent="onSubmit">

    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input id="email" class="mdl-textfield__input" type="email" required>
      <label for="email" class="mdl-textfield__label">Email</label>
    </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input id="password" class="mdl-textfield__input" type="password" required>
      <label for="password" class="mdl-textfield__label">Password</label>
    </div>

    <div class="row">
      <div>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
          <div v-show="!isConnecting">Login</div>
          <div v-show="isConnecting" class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
        </button>
      </div>

      <div>
        <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="autologin">
          <input type="checkbox" id="autologin" class="mdl-checkbox__input" v-model="isAutologin">
          <span class="mdl-checkbox__label">automatic login</span>
        </label>
      </div>
    </div>

  </form>
</template>

<style scoped lang="scss">
  .login {
    margin: 20px;

    .mdl-textfield {
      width: 100%;
    }

    .row {
      height: 50px;

      .mdl-button {
        width: 80px;
      }

      .mdl-spinner {
        vertical-align: middle;
      }

      & > div:nth-child(1) {
        float: left;
      }

      & > div:nth-child(2) {
        float: right;
      }
    }
  }
</style>

<script>
  export default{
    name: 'login-controls',
    data() {
      return {
        isAutologin: true,
        isConnecting: false
      }
    },
    methods: {
      onSubmit: function() {
        console.log();
        this.isConnecting = !this.isConnecting;
      }
    }
  }
</script>
