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
    req.session.data['plea-group'] = "No plea received"
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
    req.session.data['defendant-address-line-2'] = "Hammersmith"    
    req.session.data['defendant-address-line-3'] = ""    
    req.session.data['defendant-address-city'] = "London"    
    req.session.data['defendant-address-postcode'] = "SE3 8YH"  
    req.session.data['defendant-email'] = ""  
    req.session.data['defendant-telephone'] = ""  
    req.session.data['defendant-mobile'] = ""
    
    req.session.data['defendant-nin'] = ""
    req.session.data['defendant-net-income'] = ""
    req.session.data['defendant-income-frequency-group'] = ""
    req.session.data['defendant-employment-status-group'] = ""
    req.session.data['defendant-claiming-benefits-group'] = ""
    
    req.session.data['defendant-plea'] = "Not plea received"
    req.session.data['defendant-mitigation'] = ""
    
    req.session.data['offence-title'] = "Passenger used ticket issued for another person"
    req.session.data['offence-description'] = "On 10/11/2017 At grosvenor place SW1 Being a passenger on a Public Service Vehicle operated on behalf of London Bus Services Limited being used for the carriage of passengers at separate fares where the vehicle was being operated by a Driver without a Conductor did not immediately on boarding pay the fare to the Driver for the journey you intended to take."
    
    req.session.data['statement-of-facts'] = "On Thursday 10th November 2017 you were on board a route 178 bus, garage code 552 with the intention of travelling from LEWISHAM to BLACKHEATH, a normal adult fare of £2.40. During the course of this journey at about 4:15 PM you offered for the inspection of London Bus Inspector LB004512 a £3.60 Discount SINGLE Pay as you go pass in oystercard format, serial number 02871229561, which had been issued to another person on terms that it was not transferable and was therefore not valid for travel by you. When questioned, you said “It’s my wife’s”. When informed that you were being reported you said “It’s not fair, nobody told me I couldn’t use someone else’s oystercard.."
        
    req.session.data['case-notes'] = "No case notes have been added."
    
    req.session.data['plea-document'] = ""
    req.session.data['income-document'] = ""
    req.session.data['other-document'] = ""
    
    req.session.data['pleaDocumentStatus'] = "off"
    req.session.data['incomeDocumentStatus'] = "off"
    req.session.data['otherDocumentStatus'] = "off"

    // ************************************
    //CASE DETAILS 2 - TRANSPORT FOR LONDON
    req.session.data['case-reference-number-2'] = "9016435"
    req.session.data['case-status-2'] = "Completed"
    req.session.data['prosecutor'] = "Transport for London"
    req.session.data['notice-served-2'] = "12 February 2018"
    req.session.data['notice-served-short-2'] = "12 Feb 2018"

    req.session.data['defendant-title-2'] = ""
    req.session.data['defendant-first-name-2'] = "Jerry"
    req.session.data['defendant-last-name-2'] = "Smith"
    req.session.data['defendant-dob-day-2'] = "17"
    req.session.data['defendant-dob-month-2'] = "6"
    req.session.data['defendant-dob-year-2'] = "1983"    
    req.session.data['defendant-age-2'] = 2018-req.session.data['defendant-dob-year-2']   
    req.session.data['defendant-address-line-1-2'] = "38 Brookside Close"    
    req.session.data['defendant-address-line-2-2'] = ""    
    req.session.data['defendant-address-line-3-2'] = ""    
    req.session.data['defendant-address-city-2'] = "London"    
    req.session.data['defendant-address-postcode-2'] = "NW19 7SA"  
    req.session.data['defendant-email-2'] = "jennyanydots@hotmail.com"  
    req.session.data['defendant-telephone-2'] = "0203 543 8928"  
    req.session.data['defendant-mobile-2'] = ""
    
    req.session.data['defendant-nin-2'] = "BA 76 54 32 C"
    req.session.data['defendant-net-income-2'] = "375"
    req.session.data['defendant-income-frequency-group-2'] = "Weekly"
    req.session.data['defendant-employment-status-group-2'] = "Employed (full or part-time)"
    req.session.data['defendant-claiming-benefits-group-2'] = "No"
    
    req.session.data['defendant-plea-2'] = "Not guilty"
    req.session.data['defendant-mitigation-2'] = "Lorem ipsum dolor sit amet"
    
    req.session.data['offence-title-2'] = "Passenger used ticket issued for another person"
    req.session.data['offence-description-2'] = "On 10/06/2014 At grosvenor place SW1 Being a passenger on a Public Service Vehicle operated on behalf of London Bus Services Limited being used for the carriage of passengers at separate fares where the vehicle was being operated by a Driver without a Conductor did not immediately on boarding pay the fare to the Driver for the journey you intended to take."
    
    req.session.data['statement-of-facts-2'] = "I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied “I don’t have one as I am not really on this train, you’re seeing an illusion”. I had no choice but to issue him with a ticket."
    
    req.session.data['case-notes-2'] = "No case notes have been added."

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

// *******************
// UPLOADING DOCUMENTS
router.post('/courtadmin/uploadING-documents', function (req, res) {

    res.redirect('/courtadmin/case-details')
    
})

// *******************************
// DOCUMENTS SUCCESSFULLY UPLOADED
router.post('/courtadmin/documents-successfully-uploaded', function (req, res) {

    res.redirect('/courtadmin/case-details')
    
})

// ***********
// BILLY SMITH
router.post('/courtadmin/case-details', function (req, res) {

    var pleaGroup = req.session.data['plea-group']
    
    if (pleaGroup == "No plea received") {
        req.session.data['case-status'] = "No plea received"
    } else if (pleaGroup == "Guilty - I don't want to come to court") {
        req.session.data['case-status'] = "Pleaded guilty SJP"
    } else if (pleaGroup == "Guilty - I want to come to court") {
        req.session.data['case-status'] = "Pleaded guilty - Court hearing requested"
    } else if (pleaGroup == "Not guilty - send me the date of my trial") {
        req.session.data['case-status'] = "Pleaded not guilty"
    } 
    
    //req.session.data['case-status'] = req.session.data['plea-group']
    
    //res.redirect('/courtadmin/add-or-change-personal-details')
    res.redirect('/courtadmin/case-details')
    
})
router.post('/courtadmin/billy-smith-2', function (req, res) {

    res.redirect('/courtadmin/add-or-change-personal-details')
    
})

// ******************************
// ADD OR CHANGE PERSONAL DETAILS
router.post('/courtadmin/add-or-change-personal-details', function (req, res) {
    
    res.redirect('/courtadmin/add-or-change-income')
    
})

// ********************************
// ADD OR CHANGE PERSONAL DETAILS 2
router.post('/courtadmin/add-or-change-personal-details-2', function (req, res) {
    
    res.redirect('/courtadmin/case-details')
    
})

// ********************
// ADD OR CHANGE INCOME
router.post('/courtadmin/add-or-change-income', function (req, res) {

    res.redirect('/courtadmin/upload-documents')
    
})

// **********************
// ADD OR CHANGE INCOME 2
router.post('/courtadmin/add-or-change-income-2', function (req, res) {

    res.redirect('/courtadmin/case-details')
    
})

// **********************
// DEFENDANTS ONLINE PLEA
router.post('/courtadmin/defendants-online-plea', function (req, res) {

    res.redirect('/courtadmin/case-details')
    
})

// ****************************
// FIND AND PRINT ORDERS SEARCH
router.post('/courtadmin/find-and-print-orders-search', function (req, res) {

    res.redirect('/courtadmin/find-and-print-orders')
    
})

// *********************
// FIND AND PRINT ORDERS
router.post('/courtadmin/find-and-print-orders', function (req, res) {

    res.redirect('/courtadmin/find-and-print-orders-search')
    
})

// *****************************
// Create register for the media
router.post('/courtadmin/create-register-for-the-media', function (req, res) {

    //res.redirect('/courtadmin/dashboard')
    
})

// **************************************
// Print list of cases for public display
router.post('/courtadmin/print-list-of-cases-for-public-display', function (req, res) {

    res.redirect('/courtadmin/dashboard')
    
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
    
    res.redirect('/courtadmin/sign-in')
    
})
