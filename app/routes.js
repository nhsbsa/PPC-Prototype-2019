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
router.get('/v1-contact-handler', function (req, res) {
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
  if (req.query.payment_type === '10 installments of £10.40 by Direct Debit'){
  res.redirect('ppc/v1/ddpay');
} else{
  res.redirect('ppc/v1/card-details');
}
});


// ** exclusive v2 routes ** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Duration handler (shows page to select payment type if 12 months selected) <-- works
router.get('/v2-duration-handler', function (req, res) {
  if (req.query.duration === '12'){
  res.redirect('ppc/v2/payment-method');
} else{
  res.redirect('ppc/v2/start-date');
}
});


// Check handler (sends down either dd or card payment route)

router.get('/v2-check-handler', function (req, res) {
  if (req.query.payment_type === '10 installments of £10.40 by Direct Debit'){
  res.redirect('ppc/v2/ddpay');
} else{
  res.redirect('ppc/v2/card-details');
}
});

// V3 EXCLUSIVE ROUTES - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Duration handler (shows page to select payment type if 12 months selected) <-- works
router.get('/v3-duration-handler', function (req, res) {
  if (req.query.duration === '12'){
  res.redirect('ppc/v3/payment-method');
} else{
  res.redirect('ppc/v3/start-date-test');
}
});

router.get('/v3-check-handler', function (req, res) {
  if (req.query.payment_type === '10 installments of £10.40 by Direct Debit'){
  res.redirect('ppc/v3/ddpay');
} else{
  res.redirect('ppc/v3/card-details');
}
});

// REMINDERS ROUTES - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

router.get('/reminder-2-1-handler', function (req, res) {
  if (req.query.contact==='email'){
    res.redirect('ppc/v3/reminder-c-2');
  }else{
    res.redirect('ppc/v3/reminder-c-1')
  }
});


// V4 ROUTES - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

router.get('/email-handler', function (req, res){
  if(req.query.email==='Yes'){
    res.redirect('ppc/v4/email-address');
  }else{
    res.redirect('ppc/v4/check')
  }
})

router.get('/v4-check-handler', function (req, res) {
  if (req.query.paymenttype === '10 instalments of £10.40 by Direct Debit'){
  res.redirect('ppc/v4/ddpay');
} else{
  res.redirect('ppc/v4/card-details');
}
});

router.get('v4-cardpayment-handler', function (req, res) {
  if (req.query.paymenttype === '10 instalments of £10.40 by Direct Debit'){
  res.redirect('ppc/v4/ddpay');
} else if (req.query.paymenttype === 'Card Payment 12') {
  res.redirect('https://products.payments.service.gov.uk/pay/c99b65dbad0d4534ba85195185c88ba4');
} else if (req.query.paymenttype === 'Card Payment 3') {
  res.redirect('https://products.payments.service.gov.uk/pay/c7e306307fd142ae90c856b0302cb4e2');
} else {
  res.redirect('check');
}
});

// V4 ROUTES - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

router.get('/v5-email-handler', function (req, res){
  if(req.query.email==='Yes'){
    res.redirect('ppc/v5/email-address');
  }else{
    res.redirect('ppc/v5/check')
  }
})

router.get('/v5-check-handler', function (req, res) {
  if (req.query.paymenttype === '10 instalments of £10.40 by Direct Debit'){
  res.redirect('ppc/v5/ddpay');
} else{
  res.redirect('ppc/v5/card-details');
}
});

router.get('v5-cardpayment-handler', function (req, res) {
  if (req.query.paymenttype === '10 instalments of £10.40 by Direct Debit'){
  res.redirect('ppc/v5/ddpay');
} else if (req.query.paymenttype === 'Card Payment 12') {
  res.redirect('https://products.payments.service.gov.uk/pay/c99b65dbad0d4534ba85195185c88ba4');
} else if (req.query.paymenttype === 'Card Payment 3') {
  res.redirect('https://products.payments.service.gov.uk/pay/c7e306307fd142ae90c856b0302cb4e2');
} else {
  res.redirect('check');
}
});