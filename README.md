# Utileo [![NPM version](https://img.shields.io/npm/v/utileo.svg)](https://www.npmjs.com/package/utileo) [![Downloads](http://img.shields.io/npm/dm/utileo.svg)](https://npmjs.org/package/utileo)

A JS library for most commonly used utils

![Utileo](/assets/utileo.png)

## Utils
 - Currency Utils
 - URL Utils
 - Common Utils
 - Geo Location Utils
 - History
 - Storage Utils
 - Date Utils

 # Getting Started (Installation)

```javascript
yarn add utileo

or

npm i utileo --save-dev
```

--------------------------------------------------------------------------------
## Currency Formatter Methods

  Method                          |     Params       |        Description
----------------------------------|------------------|------------------------------------------
  format                          | amount, isFloat  |  To display any and all amount-values, if isFloat is true, amount formatted to 2 decimal places
  parse                           |      amount      |  To parse amount-value back to number-only
  beforeAPIRequest                |      amount      |  Before-submitting on any API-requests

## Common Util Methods

  Method                            |     Params       |        Description
------------------------------------|------------------|---------------------------------------------------------------
  validateName                      |      string      |  Check if all characters in the string are alphabets
  validateOnlyNumber                |  string/number   |  Check if it is a number
  titleCase                         |     string       |  Convert a string to title case
  camelize                          |     string       |  Convert hello-world style strings to helloWorld style strings 
  removeSpacesAndLowerCase          |     string       |  Converting to lower case and remove spaces in a string. Ex:My Name - myname
  replaceSpaceWithUnderscore        |     string       |  Converting space to underscore in a string. Ex:My Name - My_Name
  replaceSpecialCharsWithUnderscore |     string       |  Replace special chars like @,$ to _ . Ex:abc@123%a$ - abc_123_a_
  addKeyToObject                    |     object       |  Adds key to objects
  getIndex                          |    arr,object    |  Find index of an Item from Array of objects.
  toNumber                          |      value       |  Convert a string to number
  partition                         |   arr, criteria  |  Partition array into two arrays based on criteria
  isArray                           |      value       |  Check for an Array
  isObject                          |      value       |  Check for an Object
  isFunction                        |      value       |  Check for a function

## Storage Util Methods

  Method                          |     Params       |        Description
----------------------------------|------------------|-----------------------------------------
  get                             |      key         |  Get value from localstorage by key name
  set                             |    key, value    |  Set value to localstorage
  has                             |      key         |  Check key available in localstorage
  remove                          |      key         |  Remove key from localstorage
  removeAll                       |       -          |  Remove all items from localstorage

## Geo Location Util Method

  Method                          |     Params       |        Description
----------------------------------|------------------|----------------------------
  getLatLong                      |     timeout      |  get lat and long

## URL Parameter Method

  Method                          |     Params           |        Description
----------------------------------|----------------------|----------------------------
  getURLParameter                 |  qrString, paramName |  get parameter value

## Date Util Methods

  Method                          |     Params       |        Description
----------------------------------|------------------|---------------------------------------------------------------------
  formatDate                      |      date        |  Returns an object of day, month, year
  getCurrentDate                  |        -         |  Returns current date
  getDateByDashFormat             |      date        |  Returns date with DD-MM-YYYY format
  getDateBySlashFormat            |      date        |  Returns date with DD/MM/YYYY format
  timestampToDate                 |    timestamp     |  Converting timestamp to date Ex : 1560211200000 to Tue Jun 11 2019
  getDateFromString               |     string       |  Converting string to date Ex : '6-11-2019' to Tue Jun 11 2019

----------------------------------------------------------------------------------------------------------------------------

## Usage
```javascript
import { CurrencyUtils, CommonUtils, StorageUtils, GeoLocationUtils, URLUtils, History, DateUtils } from 'utileo';

//---------------------------------- Currency Utils -------------------------//
CurrencyUtils.format('10000') // 10,000
CurrencyUtils.format('10000.1234',true) // 10,000.12
CurrencyUtils.parse('1,00,000') // 100000 

//---------------------------------- Common Utils -------------------------------------//
CommonUtils.validateName('only alphabets')// true
CommonUtils.validateOnlyNumber('1233')// true
CommonUtils.titleCase('main menu')// Main Menu
CommonUtils.camelize('main-menu')// mainMenu
CommonUtils.toNumber('1234')// 1234
CommonUtils.isArray([1,2,3]);// true
CommonUtils.isObject({"name": "abc", "age": 12})// true
CommonUtils.isFunction(CommonUtils.isObject);// true

var users = [
	{'user': 'barney', 'age': 36, 'active': false},
	{'user': 'fred', 'age': 40, 'active': true},
	{'user': 'pebbles', 'age': 1, 'active': false}
];

var groups = CommonUtils.partition(users, function (user) {
	return user.active;
});
// groups[0] has [{'user':'fred', 'age': 40, 'active': true}]
// groups[1] has [{'user':'barney', 'age': 36, 'active': false}, {'user': 'pebbles', 'age': 1, 'active': false}]

CommonUtils.getIndex(users,{'user': 'barney', 'age': 36, 'active': false});// 0

CommonUtils.addKeyToObject(users);// key(type) will be added
// [{type: "0", user: "barney", age: 36, active: false}
// {type: "1", user: "fred", age: 40, active: true}
// {type: "2", user: "pebbles", age: 1, active: false}]

//------------------------ Storage Utils -----------------------------//
StorageUtils.get('phoneNumber')// 9899224433
StorageUtils.set('phoneNumber',9899224433)
StorageUtils.has('phoneNumber')// true
StorageUtils.remove('token')
StorageUtils.removeAll()

//----------------------- Geo Location ----------------------------//
let latLong = GeoLocationUtils.getLatLong()// value of lat long
let latitude = latLong.lat
let longitude = latLong.long

//--------------------------------- URL Parameter ---------------------------------------//
var appVisa = URLUtils.getURLParameter(window.location.href, 'visa')// 12n23be3h3bhbbh34

//--------- History --------//
History.replace("/")
History.goBack()
History.push("/")

//------------------------------------------ Date Utils ------------------------------------------------//
const currDate = DateUtils.getCurrentDate();// Wed Jul 14 2020 13:07:57 GMT+0530 (India Standard Time)
const dateObj = DateUtils.formatDate(currDate);// {day: 14, month: 6, year: 2020}
DateUtils.getDateByDashFormat(currDate);// 14-07-2020
DateUtils.getDateBySlashFormat(currDate);// 14/07/2020
DateUtils.timestampToDate(1560211200000);// Tue Jun 11 2019 05:30:00 GMT+0530 (India Standard Time)
DateUtils.getDateFromString('2/10/2017');// Sat Feb 10 2017 00:00:00 GMT+0530 (India Standard Time)

```

## Contributors
Here [Contributors](https://github.com/bharatpe/utileo/graphs/contributors)


## License
MIT @[bharatpe](https://bharatpe.in)
