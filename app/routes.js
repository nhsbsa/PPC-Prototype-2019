var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router

// ** v1 exclusive routes **


//Contact handler (shows email or mobile pages if these have been selected)
router.get('/contact-handler', function (req, res) {
  if (req.query.contact_by_email === 'true') {
    res.redirect('ppc/v1/email-address');
  } else if (req.query.contact_by_mobile === 'true') {
    res.redirect('ppc/v1/mobile-address');
  } else {
    res.redirect('ppc/v1/check');
  }

  });


//Check your answers handler (sends down either dd or card payment route) ! doesn't work currently !
router.get('/v1-check-handler', function (req, res) {
  if (req.query.payment_type === '10 installments of £10.40 by Direct Debit') {
    res.redirect('ppc/v1/ddpay');
  } else {
    res.redirect('ppc/v1/card-details');
  }
});


// ** exclusive v2 routes **

// Duration handler (shows page to select payment type if 12 months selected) <-- works
router.get('/v2-duration-handler', function (req, res) {
  if (req.query.duration === '12'){
  res.redirect('ppc/v2/payment-method');
} else{
  res.redirect('ppc/v2/start-date');
}
});

router.get('/v2-check-handler', function (req, res) {
  if (req.query.payment_type === '10 installments of £10.40 by Direct Debit'){
  res.redirect('ppc/v2/ddpay');
} else{
  res.redirect('ppc/v2/card-details');
}
});
