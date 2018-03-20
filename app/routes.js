var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router

// *********
// DASHBOARD
router.post('/courtadmin/upload-documents', function (req, res) {

    res.redirect('/courtadmin/uploading-documents')
    
})
// ***********
// BILLY SMITH
router.post('/courtadmin/billy-smith', function (req, res) {

    res.redirect('/courtadmin/add-or-change-personal-details')
    
})
router.post('/courtadmin/billy-smith-2', function (req, res) {

    res.redirect('/courtadmin/add-or-change-personal-details')
    
})
// ******************************
// ADD OR CHANGE PERSONAL DETAILS
router.post('/courtadmin/add-or-change-personal-details', function (req, res) {

    res.redirect('/courtadmin/add-or-change-income')
    
})
// ********************
// ADD OR CHANGE INCOME
router.post('/courtadmin/add-or-change-income', function (req, res) {

    res.redirect('/courtadmin/upload-documents')
    
})
