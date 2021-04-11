# Opinary Poll

A simple poll widget using only JS, easily configurable and embeddable in HTML files. It does not require registration. Users can vote and see the number of votes previously made. Each vote is saved in localStorage and users need to reload the page to be able to vote again.

## Usage

To embed the widget in your own html file:

1. In your file´s `<head>` add:

```html
<link
  rel="stylesheet"
  href="https://rawcdn.githack.com/mariannefabre/opinary-poll/61040fdff60f4222f989844bd80dc0aab6c3c087/poll.css"
  type="text/css"
/>
```

2. Place the following HTML element where you want the poll to appear:

```html
<div id="poll"></div>
```

3. Above the `</body>` tag add (don't forget to replace the values in []):

```html
<script src="https://rawcdn.githack.com/mariannefabre/opinary-poll/a92ac0c908819aaa0594fafdc95b470df9859d39/poll.js"></script>
<script>
  initPoll(document.getElementById("poll"), {
    id: "[Place a unique id]",
    question: "[Place your question]",
    answers: [
      "[Place first answer]",
      "[Place second answer]",
      "[Place third answer]",
    ],
  });
</script>
```

4. You're good to go!

## Configuration

You can configure the poll by replacing the values in [] from the section above.
If you are using the provided index.html file:

1. Open index.html
2. In the second (and last) `<script>`, `initPoll` is called with two arguments. The second argument is an object containing:
   - an id
   - a question
   - an array of answers.

Change those values to create your own poll.
Make sure to use different ids if you have multiple polls in one page.

## Developers

### Installation

```
$ cd opinary-poll
$ npm install

```

### Test

```node
npm test
```

In the 'test' folder, you can find 2 files:

- poll_test.js is executed with the `npm test` command above.
- testcase.html is testing if an error is thrown when two identical polls are added to the same page.

## Ameliorations

- Inline styling to avoid CSS conflicts.
- Unit testing with jsdom or the browser.
- Display results with a different visual (animated bar chart or pie chart).
- Publish files on corporate CDN (for non-developers users)
- Limit to one vote per user
- Minify files using bundlers or online tools
