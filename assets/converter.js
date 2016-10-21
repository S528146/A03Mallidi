function milesConvert()
{
var form = document.forms[0];

var miles = form.miles1.value;
var km = miles * 1.609;

form.km1.value = km;
}    

function kmConvert()
{
var form = document.forms[0];

var km = form.km2.value;
var miles = km * .6214

form.miles2.value=miles;
}

function yardsConvert()
{
var form = document.forms[0];

var yards = form.yards1.value;
var meters = yards * .9144;

form.meters1.value = meters;
}

function metersConvert()
{
var form = document.forms[0];

var meters = form.meters2.value;
var yards = meters * 1.0936;

form.yards2.value=yards;
}