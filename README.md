<h1 align="center">OPEN LYRICS</h1>

<p align="center">Search for song lyrics</p>

## Technologies used

* HTML 5
* CSS 3
* Javascript

## The website preview can be viewed here
[https://open-lyrics.herokuapp.com/](https://open-lyrics.herokuapp.com/)


## Embed the api in your apps

```js

const API = "https://open-lyrics.herokuapp.com/api/lyrics"
const query = "Never Gonna Give You Up"

const { data } = await axios.get(API, {
    params: {
      query,
    },
  });

console.log(data.lyrics)

```

## Screenshots


![website screenshot](https://gdurl.com/1Jii)