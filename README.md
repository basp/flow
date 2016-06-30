# flow
Experimental. And I need this. Maybe.

# how to run?
1. Clone the repo using your favorite git client.
2. run `npm install` to install the depencies.
3. run `npm start` to start the **BrowserSync** server. 
4. run `npm tsc` to compile the TypeScript.

# why?
We wanna create a flow of something. One of the goals is to 
be really precise with vertical positioning and have responsive 
flexibility for horizontal positioning. Also sizing. And learning.

# re-inventing the wheel eh?
Probably yes. Gimme a break, just trying to learn stuff here!

# will it work?
Probably... Maybe, depends on my code and the way you're trying to use it.

Flow calculates positioning using the proportions of the view. This 
means old browsers will probably will not understand the CSS (or probably 
totally interpret in some strange fashion and do something totally
random).

If you care about legacy browsers, don't use this. If you're trying to 
make a forward facing site that adapts to all kinds of weird screen
sizes this actually might be useful.

# what is/are the use case(s)?
Do you care more about vertical positioning relating to screen size 
versus pixel perfect horizontal placement? 

Are you <rem>lazy</reM> daring enough to make your design function 
well on all kinds of screensizes and orientations without 
<rem>all</rem> most of those complicated `media` queries? 

Do you value being **explict** over being implicit? Are you comfortable
typing class names using whatever device you're using? then yes,
this *might* be useful.

# how do I use it?
In `flow` we calculate everything relative to the viewport and always 
in *tenths* because even numbers are better and `10` is just so awesome.

In practice, this means that the area of the viewport is divided into
ten rows and ten columns. The first row is `row-0` and the first column is
`column-0` so remember, the count starts from `0`.

## containers
You want a container of a certain height.
```
<div class="l-height--1x" />
```

This will create a container that is the height of one viewport. There's 
a lot of sizes you can choose from but when you're dealing with the stuff
taht this stuff is meant for you might wanna consider dealing with.

We could make its height two screens:
```
<div class="l-height--2x" />
```

Or half a screen:
```
<div class="l-height--1/2x" />
```

Or even *one and a half* (there are more sizes, check the source) of the screen:
```
<div class="l-height--1-1/2x" />
```


## positioning vertically
If you have a container can start to position elements within:
```
<div class="l-height--1x>
    <div class="l-row l-row--0">At the top!</div>
    <div class="l-row l-row--9">At the bottom!</div>
</div>
```

A `l-height--1x` container is one viewport width. Each viewport
is divided into ten columns and ten rows. So first `div` should
appear at the top and the second one should appear at the bottom.

## positioning horizontally
We can always position things horizontally. Notice that *half* columns
are supported as well. The viewport is divided into ten columns but you 
can specify twenty steps. Everything from `0`, `1/2`, `1` all the way
to `9` is supported. 

By default we align from the left:
```
<div class="l-height--1/2x>
    <div class="l-column--4" />
</div>
```

But we can also align from the right using the `rl` variants of the `l-column`
classes:
```
<div class="l-height--1/2x>
    <div class="l-rl-column--2" />
</div>
```

# disclaimer
The horizontal positioning works pretty well but I'm sure CSS gurus
will declare it insane. Let's just say it's on the todo list. For now
it seems to do the job for the thing I intend to use it for so there's
that.