Hi, I was playing around with regex using the Beer Song problem found here: https://launchschool.com/exercises/87b886ff

I wrote down a regex to match a verse of my choice. My logic for matching any verses except one of the verses is as follows:

```javascript
let fullSong = wholeSong();

let verseNumber = 98;
let regex = new RegExp("^" + verseNumber + ".+\n.+\n\n");
let matchObject4 = fullSong.match(regex);
```

An example regex would be:

`/^99.+\n.+\n\n/`

The above regex works as expected and I get the verse that starts with 99. But if I try using any other verse number except 99, I don't get a match. So for example, `fullSong.match(/^98.+\n.+\n\n/)` does not work but `fullSong.match(/^99.+\n.+\n\n/)` does. But if I try the same regex in `rubular` then it seems to work. For testing in `rubular`, I printed the entire song returned by the function `wholeSong` and copied it into `rubular`. 

But if I remove the start of lineanchor, I get a match using the regex. I don't know why.

Here is my code in JS for testing

```javascript
let fullSong = wholeSong();
let matchObject = fullSong.match(/^99.+\n.+\n\n/); //works with 99 only
let matchObject2 = fullSong.match(/^98.+\n.+\n\n/); //does not work since using 88
let matchObject3 = fullSong.match(/98.+\n.+\n\n/); //works if I take out pattern at start of line anchor
```


