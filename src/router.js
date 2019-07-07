import Vue from 'vue'
import Router from 'vue-router'
import Sentiment from '@/components/Sentiment.vue'
import Chat from '@/components/Chat.vue'

Vue.use(Router)

const router = new Router({
    
    routes : [{
        path : '/sentiment',
        component : Sentiment
    },
    {
        path : '/chat',
        component : Chat
    },
    {
        path:'*',
        component: Chat
    }
    ]
})

export default router