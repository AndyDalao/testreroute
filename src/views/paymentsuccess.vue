<template>
  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <p>您已经成功付款，订单信息会很快发送至您的邮箱</p>
      <p>Your payment was successful, please check email for order details.</p>
    </div>
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

/* Modal Content/Box */
.modal-content {
  text-align: left;
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 50px;
  border: 1px solid #888;
  width: 600px; /* Could be more or less, depending on screen size */
}
</style>
