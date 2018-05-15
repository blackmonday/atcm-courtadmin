var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

module.exports = router

// *****
// INDEX
router.post('/', function (req, res) {
    
    res.redirect('/courtadmin/sign-in')
    
})

// **************
// DASHBOARD PAGE
router.post('/courtadmin/dashboard', function (req, res) {
                    
    res.redirect('/courtadmin/search-for-a-case')
    
})
    
// ****************
// UPLOAD DOCUMENTS
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

// *******
// SIGN IN
router.post('/courtadmin/sign-in', function (req, res) {
    
    res.redirect('/courtadmin/sign-in-authentication')
    
})

// ************************
// SIGN IN - AUTHENTICATION
router.post('/courtadmin/sign-in-authentication', function (req, res) {
    
    res.redirect('/courtadmin/dashboard')
    
})

// ********
// SIGN OUT
router.post('/courtadmin/sign-out', function (req, res) {
    
    res.redirect('http://gov.uk')
    
})