# Class 11

## Feedback Review

- Challenges
  - Moving to remote classes:
    - Very difficult to collaborate.
    - Staying focused is now more challenging.

- Suggestions
  - More time spent on HTML and CSS.
  - More time reviewing other peoples code.
  - Join Discord channel to help collaborate with other classmates.

## Review

```html
<ul id="list"></ul>
```

```js

var list = document.getElementById('list');
var itemEl = document.createElement('li');

itemEl.classname = "list-element"
list.appendChild(itemEl);
```

```css
.list-element {
  width: 50px;
}
```

## Audio and Video Elements

- HTML can natively decode and display audio and video.
- There are built in element tags that make this really really easy.
- simialar functionality to the <img> tag

- Copyright Concerns
  - Youtube, if you streaming a video from youtube onto your site. The funcitonality will mimic that of the youtube.
  - If you try and get around, youtube will smack you down.
  - Getting access to the physical file, will be more difficult and probably require a conversation with the content.

```html

<body>

<video src="../path/to/video/file.mp4" controls>

<audio src="../path/to/audio/file.mp3" >

<video src="http(s)://url/to/video.mov">

</body>
```

## Vote Tracking using User Interaction.

- We are more focues on user driven application design
- The end goal is to have more of our code run, when specific "interactions" take place.
- We are building a system that allows us to track how many times and element was clicked.
  - Using constructors, buttons to allow a connection between content and functionality.


