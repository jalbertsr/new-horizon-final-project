const Bike = require(__base + '/models/Bike')

function showSearchResults (req, res) {
  console.log(req.body)
  if (req.body.type) {
    Bike.find({'available': true, 'category': req.body.type })
        .then(bikes => {
          res.render('pages/search-results', { idPage: 'search-results', bikes })
          // res.json(bikes)
        })
  } else {
    Bike.find({'available': true})
        .then(bikes => {
          res.render('pages/search-results', { idPage: 'search-results', bikes })
          // res.json(bikes)
        })
  }
}

module.exports = showSearchResults