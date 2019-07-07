<template>

  <div>
      <div class="row">
          <div class="col-md-8">
                <div class="container chat-container">
                    <Message :key="chat.msg" v-for="chat in chatData" :type="chat.type" :text="chat.msg" />
                </div>

                <SendMessage v-on:send-message="addSendMessage($event)"/>
                <SuggestedMessage v-on:send-message="addReceiveMessage($event)"/>
          </div>
          <div class="col-md-4">
              <Sentiment :message =lastMessage></Sentiment>
          </div>
      </div>

  </div>
</template>

<script>
import Message from "@/components/Message.vue";
import SendMessage from "@/components/SendMessage.vue";
import SuggestedMessage from "@/components/SuggestedMessage.vue";
import Sentiment from "@/components/Sentiment.vue";

export default {
  name: "app",
  components: {
    Message,
    SendMessage,
    SuggestedMessage,
    Sentiment
  },
  data() {
    return {
      chatData: [
        { type: "received", msg: "Hello" },
        { type: "sent", msg: "Hi Ramanth" },
        { type: "received", msg: "sent message" }
      ]
    };
  },
  methods: {
    addSendMessage(event) {
      this.chatData.push({ type: "sent", msg: event });
    },
    addReceiveMessage(event) {
      this.chatData.push({ type: "received", msg: event });
    }
  },
  computed: {
      lastMessage() {
        return this.chatData[this.chatData.length - 1].msg;
      }
  }
};

</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.chat-container {
  background-color: rgb(222, 236, 245);
  min-height: 100%;
}
.margin-left {
  margin: 0px 10px 0px;
}
.margin-top {
  margin: 10px 0px 0px;
}
</style>
