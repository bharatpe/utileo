# Utileo [![NPM version](https://img.shields.io/npm/v/utileo.svg)](https://www.npmjs.com/package/utileo) [![Downloads](http://img.shields.io/npm/dm/utileo.svg)](https://npmjs.org/package/utileo)

A JS library for most commonly used utils

![Utileo](/assets/utileo.png)

## Regex
 - Currency Formatter
 - URL Parameter
 - Common Utils
 - Geo Location
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
  format                          | amount, isFloat  |  To display any and all amount-values
  parse                           |      amount      |  To parse amount-value back to number-only
  beforeAPIRequest                |      amount      |  Before-submitting on any API-requests

## Common Util Methods

  Method                          |     Params       |        Description
----------------------------------|------------------|---------------------------------------------------------------
  titleCase                       |      value       |  Convert a string to title case
  camelize                        |      value       |  Convert hello-world style strings to helloWorld style strings 
  toNumber                        |      value       |  Convert a string to number
  partition                       |   arr, criteria  |  Partition array into two arrays based on criteria
  isArray                         |      value       |  Check for an Array
  isObject                        |      value       |  Check for an Object
  isFunction                      |      value       |  Check for a function

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

----------------------------------------------------------------------------------------------------------------------------

## Usage
```javascript
import { CurrencyUtils, CommonUtils, StorageUtils, geoLocation, getUrlParameter, history, DateUtils } from 'utileo';

// Currency Utils
CurrencyUtils.format('10000') // 10,000
CurrencyUtils.parse('10000') 

// Common Utils
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

// Storage Utils
StorageUtils.get('phoneNumber')// 9899224433
StorageUtils.set('phoneNumber',9899224433)
StorageUtils.has('phoneNumber')// true
StorageUtils.remove('token')
StorageUtils.removeAll()

// geo Location
let latLong = geoLocation.getLatLong()// value of lat long
let latitude = latLong.lat
let longitude = latLong.long

// URL Parameter
var appVisa = getURLParameter(window.location.href, 'visa')// 12n23be3h3bhbbh34

// History
history.replace("/")
history.goBack()
history.push("/")

// Date Utils
const currDate = DateUtils.getCurrentDate();// Wed Jul 14 2020 13:07:57 GMT+0530 (India Standard Time)
const dateObj = DateUtils.formatDate(currDate);// {day: 14, month: 6, year: 2020}
DateUtils.getDateByDashFormat(currDate);// 14-07-2020
DateUtils.getDateBySlashFormat(currDate);// 14/07/2020
DateUtils.timestampToDate(1560211200000);// Tue Jun 11 2019 05:30:00 GMT+0530 (India Standard Time)

```

## Contributors
Here [Contributors](https://github.com/bharatpe/utileo/graphs/contributors)


## License
MIT @[bharatpe](https://bharatpe.in)
