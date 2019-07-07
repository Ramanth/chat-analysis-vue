<template>
    <div class="container">
      <div class="margin-top input-group">
        <input v-model="messageToSend" type="text" class="form-control">
        <span class="input-group-btn">
          <button @click="sendMessage()" class="btn btn-default margin-left" type="button">
            <img src="@/assets/send.png" alt="send" width="35" height="25">
          </button>
        </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SendMessage',
    methods: {
        sendMessage(){
            this.$emit('send-message', this.messageToSend)
            this.messageToSend = null
        }
    },
    data(){
        return {
            messageToSend:null
        }
    }
}
</script>
