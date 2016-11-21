<template>
  <div class="card">
    <div class="header">
      <h3>A<small>utomated</small> P<small>ersonalization</small> E<small>ngine</small></h3>
      <h6>Login</h6>
    </div>
    <hr>

    <login-controls/>

    <hr>
    <div class="link">
      <button class="mdl-button mdl-js-button mdl-js-ripple-effect">
        <small>forgotten passwords & new registrations</small>
        <i class="material-icons md-18">chevron_right</i>
      </button>
    </div>

  </div>
</template>

<style scoped lang="scss">
  $panelBackgroundColor: lighten(lightsteelblue, 15);
  $panelColor: black;
  $borderColor: gray;

  .card {
    margin: 20px auto;
    width: 380px;
    border: 1px solid $borderColor;
    box-shadow: 2px 2px 2px lighten($borderColor, 20);

    HR {
      margin: 0 0 -1px 0;
    }

    .header {
      text-align: center;
      background: $panelBackgroundColor;
      padding: 1px;
      H6 {
        margin-bottom: 20px;
      }
    }

    .link {
      background: $panelBackgroundColor;

      BUTTON {
        width: 100%;
        text-align: right;
      }
    }
  }
</style>

<script>
import LoginControls from './login-controls';

export default{
  name: 'login-card',
  data() {
    return {
    }
  },
  components: {
    LoginControls
  }
}
</script>
