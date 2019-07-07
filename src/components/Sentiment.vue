<template>
    <div>
        <span>{{message}}-{{sentiment}}</span>
        
        <PieChart :plotData = "getPlotData"></PieChart>
    </div>
</template>

<script>

var config = {
    "headers": {"Authorization": "Bearer WHV6DWZNOEEXC2ICZD5GEHZZXT44Z4OB"}
};

import axios from 'axios'
import makeRequest from '@/request_handler.js'
import PieChart from '@/components/PieChart.vue'

export default {
    name:'Sentiment',
    components:{
        PieChart
    },
    props:{
        message:String
    },
    data(){
        return {
            sentiment:null,
            positive:0,
            negative:0,
            neutral:0
        }
    },
    computed:{
        getPlotData(){
            return [this.neutral, this.negative, this.positive]
        }
    },
    watch:{
        message: function(){
        makeRequest(this.message).then((response) => {
            this.sentiment = response.entities.sentiment[0].value || "no sentiment"
            if(this.sentiment == "positive") this.positive ++
            if(this.sentiment == "negative") this.negative ++
            if(this.sentiment == "neutral") this.neutral ++

        })
        }
    }
}
</script>
