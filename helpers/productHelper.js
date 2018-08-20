const axios = require('axios');

function getSingleProduct(req, res) {
  axios.get(`https://api.shop.com/stores/v1/products/${req.params.id}?siteId=260&apiKey=l7xx98822f77bdd045e1a07135f73c6613de`)
  .then(prod => {
    res.send({ data: prod.data })
  })
  .catch(err => console.log(err));
} 

module.exports = {
  getSingleProduct
}