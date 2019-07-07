<template>

  <div v-if = "type == 'received'" class="row  justify-content-start">
    <div class="col-4 received_msg">
      {{text}}
    </div>
  </div>
  <div v-else class="row  justify-content-end">
    <div class="col-4 sent_msg">
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    type: String,
    status: String,
    text: String
  }
};
</script>

<style scoped>
.received_msg {
  display: inline-block;
  background-color:white;
  padding: 15px 15px 15px 25px;
  margin: 10px 10px 10px;
  border-radius: 10px;
  width: 35%;
  height: 30%;
 }
 .sent_msg {
  display: inline-block;
  background-color:rgb(134, 218, 134);
  padding: 15px 15px 15px 15px;
  margin: 10px 10px 10px;
  border-radius: 10px;
  width: 35%;
  height: 30%;
 }
</style>

