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

 # Getting Started (Installation)

```javascript
yarn add utileo

or

npm i utileo --save-dev
```

--------------------------------------------------------------------------------
## Currency Formatter Methods

  Method                          |     Params       |        Description
----------------------------------|------------------|----------------------------
  format                          | amount, isFloat  |  To display any and all amount-values
  parse                           |      amount      |  To parse amount-value back to number-only
  beforeAPIRequest                |      amount      |  Before-submitting on any API-requests

## Common Util Methods

  Method                          |     Params       |        Description
----------------------------------|------------------|----------------------------
  titleCase                       |      value       |  Convert a string to title case
  camelize                        |      value       |  Convert hello-world style strings to helloWorld style strings 
  toNumber                        |      value       |  Convert a string to number
  partition                       |   arr, criteria  |  Partition array into two arrays based on criteria

## Storage Util Methods

  Method                          |     Params       |        Description
----------------------------------|------------------|----------------------------
  get                             |      key         |  Get value from localstorage by key name
  set                             |    key, value    |  Set value to localstorage
  has                             |      key         |  Check key available in localstorage
  remove                          |      key         |  Remove key from localstorage
  removeAll                       |       -          |  Remove all items from localstorage

## Common String Util Method

  Method                          |     Params       |        Description
----------------------------------|------------------|----------------------------
  getLatLong                      |     timeout      |  get lat and long

## URL Parameter Method

  Method                          |     Params           |        Description
----------------------------------|----------------------|----------------------------
  getURLParameter                 |  qrString, paramName |  get parameter value

--------------------------------------------------------------------------------------------------

## Usage
```javascript
import { formatCurrency, CommonUtils, StorageUtils, geoLocation, getUrlParameter, history } from 'valiy';

// Format Currency
formatCurrency.format('10000') // 10,000
formatCurrency.parse('10000') 

// Common Utils
CommonUtils.titleCase('main menu')// Main Menu
CommonUtils.camelize('main-menu')// mainMenu
CommonUtils.toNumber('1234')// 1234

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

```

## Contributors
Here [Contributors](https://github.com/bharatpe/utileo/graphs/contributors)


## License
MIT @[bharatpe](https://bharatpe.in)
