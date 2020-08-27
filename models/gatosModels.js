const axios = require('axios');




  function getHecho() {
      let respuesta = axios.get('https://cat-fact.herokuapp.com/facts/random')
    .then(response => {
      return response.data.text;
    
    })
    .catch(error => {
      return error;
    });
    return respuesta;
}

function getCatPic() {

    let respuesta = axios.get('https://aws.random.cat/meow')
    .then(response => {
      return response.data.file;
    
    })
    .catch(error => {
      return error;
    });
    return respuesta;

}


module.exports = {getHecho, getCatPic}

