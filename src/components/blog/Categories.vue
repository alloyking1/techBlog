<template>
  <div class="container pt-5 pb-5">
    <div class="container-custom">
      <div class="row">
        <div class="col-md-6 p-3">
          <div class="card">
            <h1>heading</h1>
            <hr />
            <p>this is the body of the card</p>
          </div>
          <br />
        </div>
        <div class="col-md-6 p-3">
          <div class="card">
            <h1>heading</h1>
            <hr />
            <p>this is the body of the card</p>
          </div>
          <br />
        </div>
        <div class="col-md-6 p-3">
          <div class="card">
            <h1>heading</h1>
            <hr />
            <p>this is the body of the card</p>
          </div>
          <br />
        </div>
        <div class="col-md-6 p-3">
          <div class="card">
            <h1>heading</h1>
            <hr />
            <p>this is the body of the card</p>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log("fetch categories");
  },
};
</script>

<style scoped>
.container-custom {
  padding-top: 9rem !important;
  padding-bottom: 9rem !important;
}
</style>