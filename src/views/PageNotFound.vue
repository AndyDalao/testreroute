<template>
  <div class="modal">
    <h1 class="modal-content">
      <button class="float-right" @click="reload()">X</button>
      <h1>Page Not Found!</h1>
    </h1>
  </div>
</template>

<style scoped>
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modal-content {
  text-align: left;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 50px;
  border: 1px solid #888;
  width: 300px; /* Could be more or less, depending on screen size */
}
</style>

<script>
export default {
  name: "PageNotFound",
  setup() {
    const reload = () => {
      window.location.href = "/";
    };
    return {
      reload,
    };
  },
};
</script>
