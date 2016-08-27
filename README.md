# Zip Code API

## Usage

- Make a get request to `https://db-zip-api.herokuapp.com/api/zip-code/:zipCode` where 
  `:zipCode` is replaced by the code you wish to obtain city and state data from.

- Results will be returned in the following JSON format:

```
  {
    "code": "94133",
    "city": "San Francisco",
    "state": "CA"
  }
```

- If you want the latitude and longitude to be included in the results, modify the query above to be
  `https://db-zip-api.herokuapp.com/api/zip-code/:zipCode?precise=true`.

- Results will then be returned in the following JSON format:

```
  {
    "code": "94133",
    "city": "San Francisco",
    "state": "CA",
    "latitude": 37.8,
    "longitude": -122.41
  }
```
