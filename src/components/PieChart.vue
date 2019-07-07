<template>
    <div id="myPieChart"></div>
</template>

<script>
import Plotly from 'plotly.js'

export default {
 name:'PieChart',
 props:{
     plotData:Array
 },
 watch:{
     plotData:function(){
        var data = [{
        values: this.plotData,
        labels: ['Neutral', 'Negative','Positive'],
        type: 'pie',
        sort: false,
        }];

        Plotly.newPlot('myPieChart', data, {}, {showSendToCloud:true});
     }
 }

}
</script>



