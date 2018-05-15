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
    
    // ************************************
    //CASE DETAILS 1 - TRANSPORT FOR LONDON
    req.session.data['case-reference-number'] = "9012466"
    req.session.data['case-status'] = "No plea received"
    req.session.data['prosecutor'] = "Transport for London"
    req.session.data['notice-served'] = "28 February 2018"
    req.session.data['notice-served-short'] = "28 Feb 2018"

    req.session.data['defendant-title'] = ""
    req.session.data['defendant-first-name'] = "Billy"
    req.session.data['defendant-last-name'] = "Smith"
    req.session.data['defendant-dob-day'] = "4"
    req.session.data['defendant-dob-month'] = "4"
    req.session.data['defendant-dob-year'] = "1970"    
    req.session.data['defendant-age'] = 2018-req.session.data['defendant-dob-year']   
    req.session.data['defendant-address-line-1'] = "7 Rock Road"    
    req.session.data['defendant-address-line-2'] = ""    
    req.session.data['defendant-address-line-3'] = ""    
    req.session.data['defendant-address-city'] = "London"    
    req.session.data['defendant-address-postcode'] = "SE3 8YH"  
    req.session.data['defendant-email'] = "billy_s765@gmail.com"  
    req.session.data['defendant-telephone'] = ""  
    req.session.data['defendant-mobile'] = "07975337198"  
    req.session.data['defendant-nin'] = "VO 12 3445 56 D"  
    
    req.session.data['offence-title'] = "Passenger used ticket issued for another person"
    req.session.data['offence-description'] = "On 10/06/2014 At grosvenor place SW1 Being a passenger on a Public Service Vehicle operated on behalf of London Bus Services Limited being used for the carriage of passengers at separate fares where the vehicle was being operated by a Driver without a Conductor did not immediately on boarding pay the fare to the Driver for the journey you intended to take."
    
    req.session.data['statement-of-facts'] = "I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied “I don’t have one as I am not really on this train, you’re seeing an illusion”. I had no choice but to issue him with a ticket."

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
    
    req.session.data['defendant-title'] = req.session.data['new-title']
    req.session.data['defendant-first-name'] = req.session.data['new-first-name']
    req.session.data['defendant-last-name'] = req.session.data['new-last-name']
    req.session.data['defendant-dob-day'] = req.session.data['new-dob-day']
    req.session.data['defendant-dob-month'] = req.session.data['new-dob-month']
    req.session.data['defendant-dob-year'] = req.session.data['new-dob-year']
    req.session.data['defendant-age'] = 2018-req.session.data['defendant-dob-year']   
    
    req.session.data['defendant-address-line-1'] = req.session.data['new-address-line-1']
    req.session.data['defendant-address-line-2'] = req.session.data['new-address-line-2']
    req.session.data['defendant-address-line-3'] = req.session.data['new-address-line-3']
    req.session.data['defendant-address-city'] = req.session.data['new-address-city']
    req.session.data['defendant-address-postcode'] = req.session.data['new-address-postcode']

    req.session.data['defendant-email'] = req.session.data['new-email']
    req.session.data['defendant-telephone'] = req.session.data['new-telephone']
    req.session.data['defendant-mobile'] = req.session.data['new-mobile']
    req.session.data['defendant-nin'] = req.session.data['new-nin']

    res.redirect('/courtadmin/add-or-change-income')
    
})

// ********************************
// ADD OR CHANGE PERSONAL DETAILS 2
router.post('/courtadmin/add-or-change-personal-details-2', function (req, res) {
    
    req.session.data['defendant-title'] = req.session.data['new-title']
    req.session.data['defendant-first-name'] = req.session.data['new-first-name']
    req.session.data['defendant-last-name'] = req.session.data['new-last-name']
    req.session.data['defendant-dob-day'] = req.session.data['new-dob-day']
    req.session.data['defendant-dob-month'] = req.session.data['new-dob-month']
    req.session.data['defendant-dob-year'] = req.session.data['new-dob-year']
    req.session.data['defendant-age'] = 2018-req.session.data['defendant-dob-year']   
    
    req.session.data['defendant-address-line-1'] = req.session.data['new-address-line-1']
    req.session.data['defendant-address-line-2'] = req.session.data['new-address-line-2']
    req.session.data['defendant-address-line-3'] = req.session.data['new-address-line-3']
    req.session.data['defendant-address-city'] = req.session.data['new-address-city']
    req.session.data['defendant-address-postcode'] = req.session.data['new-address-postcode']

    req.session.data['defendant-email'] = req.session.data['new-email']
    req.session.data['defendant-telephone'] = req.session.data['new-telephone']
    req.session.data['defendant-mobile'] = req.session.data['new-mobile']
    req.session.data['defendant-nin'] = req.session.data['new-nin']

    res.redirect('/courtadmin/billy-smith')
    
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