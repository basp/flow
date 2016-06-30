# flow
Experimental.

# why?
We wanna create a flow of something. One of the goals is to 
be really precise with vertical positioning and have responsive 
flexibility for horizontal positioning. Also sizing. And learning.

# re-inventing the wheel eh?
Probably yes. Gimme a break, just trying to learn stuff here!

Flow calculates positioning using the proportions of the view. This 
means old browsers will probably will not understand the CSS (or probably 
totally interpret in some strange fashion and do something totally
random).

If you care about legacy browsers, don't use this. If you're trying to 
make a forward facing site that adapts to all kinds of weird screen
sizes this actually might be useful.

# will it work?
Probably... Maybe, depends on my code and the way you're trying to use it.

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
You want a container of a certain height.
```
<div class="l-height-1x" />
```
This will create a container that is the height of one viewport. There's 
a lot of sizes you can choose from but when you're dealing with the stuff
taht this stuff is meant for you might wanna consider dealing with 

# disclaimer
The horizontal positioning works pretty well but I'm sure CSS gurus
will declare it insane. Let's just say it's on the todo list. For now
it seems to do the job for the thing I intend to use it for so there's
that.