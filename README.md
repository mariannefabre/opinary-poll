# Opinary Poll

A simple poll widget using only JS, easily configurable and embeddable in HTML files. It does not require registration. Users can vote and see the number of votes previously made. Each vote is saved in localStorage and users need to reload the page to be able to vote again.

## Installation

```
$ git clone git@github.com:mariannefabre/opinary-poll.git
$ cd opinary-poll

$ npm install opinary-poll
```

## Usage

To embed the widget in your own html file:

In your `<header>` add:

```html
<link rel="stylesheet" href="poll.css" type="text/css" />
```

Place the following HTML element where you want the poll to appear:

```html
<div id="poll"></div>
```

Above the `</body>` tag add:

```html
<script src="./poll.js"></script>
<script>
  initPoll(document.getElementById("poll"), {
    id: "[Place a unique id]",
    question: "[Place your question]",
    answers: [
      "[Place first answer]",
      "[Place seconf answer]",
      "[Place third answer]",
    ],
  });
</script>
```

## Configuration

You can easily configure the poll by replacing the values in [] from the section above:

1. Open index.html
2. In the second (and last) `<script>`, `initPoll` is called with two arguments. The second argument is an object containing:
   - an id,
   - a question,
   - an array of answers.

Change those values to create your own poll.
Make sure to use different ids if you have multiple polls in one page.

## Test

```node
npm test
```

## Possible ameliorations

- Inline styling to avoid CSS conflicts.
- Unit testing with jsdom or the browser.
- Display results with a different visual (animated bar chart or pie chart).
