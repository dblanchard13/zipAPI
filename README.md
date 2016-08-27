# Zip Code API

## Usage

- Make a get request to `https://db-zip-api.herokuapp.com/api/zip-code/:zipCode` where 
  `:zipCode` is replaced by the code you wish to obtain city and state data from.

- Results will be returned in the following JSON format:

```
  {
    "code": "94133",
    "city": "SAN FRANCISCO",
    "state": "CA"
  }
```
