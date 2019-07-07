import axios from 'axios'

var config = {
    "headers": {"Authorization": "Bearer WHV6DWZNOEEXC2ICZD5GEHZZXT44Z4OB"}
};

var makeRequest = function(message){
   
   return axios.get('https://api.wit.ai/message?v=20190522&q='+message, config).then((response) => {
       return response.data
    }).catch((error) => {
        alert(error);
    });
}

export default makeRequest