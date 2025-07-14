    // Get navbar element
    const navbar = document.getElementById('navbar');
    const heartIcon = document.getElementById('heartIcon');
    
    // Add event listener for scrolling
    window.addEventListener('scroll', () => {
      // Show navbar as soon as any scroll is detected
      if (window.scrollY > 10) {
        navbar.classList.add('visible');
      } else {
        navbar.classList.remove('visible');
      }
    });
    
    // Get the love message element
    const loveMessage = document.getElementById('loveMessage');
    
    // Create heart particles container
    const heartParticles = document.createElement('div');
    heartParticles.className = 'heart-particles';
    document.body.appendChild(heartParticles);
    
    // Toggle heart fill and show love message on click
    heartIcon.addEventListener('click', () => {
      // Toggle heart fill
      heartIcon.classList.toggle('filled');
      
      // Play click sound
      const clickSound = new Audio('data:audio/mp3;base64,SUQzAwAAAAAAJlRQRTEAAAAcAAAAU291bmRKYXkuY29tIFNvdW5kIEVmZmVjdHMA//uSwAAAAAABLBQAAAL6QWlvJMAAFIEYCAhkQA9//8siQ///L5fIEYgahoGgaBgQMC4UJeD8P3/8Mo4OAhwMM/y+X//wwMDBDnGtAgYP/5fL/L//ygIEDBBQgaBoRKEDQNC4UMNY13///oEF9kOQ//+hxNjA9C+XyBIN//+5RAHYGoPHAQMMjJ4PjD4wIMUjKIvDGI6wQJjEguMRDBQwOCr6xDDowKMHjAgwcMCDCY3aEQlIZWGJxggY9GRRisZPGExlEVbNDN1ZZDcQwuMRDYBtGYZDAQwqgVUwxMahcKrXEUSwLKsFZbgGFpg8CGmIpgSYEmw0LGsPJlSYIiItAMgTAkDXMJUmDYsgAaBAVUwDMBzBIGTMHDBcwJMBzAYCdMDjBkEKi0wBAJjA8wXMA5AxBQYYj6VjQYBh0YFhQFAEwFAAwmDSYGSQYNoVAlQYQoU/9MCQdMAgMCAFMAxHCG5gkDBqowxP/LUEzA8CTAoB0MBQxMB0OFRApCBEgYLARMDAKYRMAgAjA5AMBQJkADBiJgwBjoGhYAmAQAGAwBGAICGAgAJQMAkwXAUwIAFeRgCABgUAG5gwAIBRAFgxgE9R//5hmiIVH//yKmOxgcKmO66WdqjutGJi8xaFjFgkYoIRiQWCY2MCChi0SGKQyYlBpiAON+CxfAz/////////5i4GN+Cxf//8xcDjEQOMTggIgIxIJDEYIMRBMxcAP//zDYz//+YbI5iMOGJgoYlCxigHGJwsLgHzCQD///fJ////////+Z2CjK8Z//8jMSgogAa0ADf/7ksBnAB0JBV31jgAL5KLrvrKABoAmAwMmHQnGHQgGDYJmEQTBIpGNATmEgWnGfDnEISmGIRGGwJGIAMmFADF4FzAwHTAgBQRNkHKmAQNGAoNGBwLGCYLgkXDBICzB0CDAsBjAgEzKwVzBcBgYYRIDBIGTnK+TF0XSw2DIwOBEBmqjKYljOYFB8iGJYdhAYIAOYPA+EiGYjAOYAgMYPiQYxjQZOieZ7D0ZFgSYEAYYJAaFAuYFgwYHhOZkKIGVLjGIwNMEwKMAQHCQCmA4BGBYDqg0RDkV5i4YLAaYDACORDQdBKMBWYKAMYMgYY0skJAGYFASZdkWcJkOHwMIgyMAQFMAgEbmGAAMGCoPGAYCGCoGDgDmAACmAIDmAQBGBoAmAABlwYEgCYFAMYFgOBDAwCD5YQJtHzAEATAYADAMARikJF1ZMMTAcATAYATAMAxUAjAIAzAUAxUEpiCjJiMAJgGAIWF8wHAAwCAAKi//N0UDZfXl////////+YhhSYMgOapJyYfiiYQjGnRhMJTlwx5MUy9MxcQ3MOS3M5lrPlDbNSRYNXikMRlcN0AxMCywOCwTGBP//mbqYGVZ3GY6Gf4mlp2mFwGmDIJGC4CG4H///+buggZim2YTnYbXmGaxmQJnGFr//7YcKZNMQDMMgLMggC//M1LX///5j+//+ZhXYY4GgYQBQYJgMYMgYYRhWaTCuYWg4YHACTgIBIMBQVMDwHQ5MCABMAgBDIKwxBOYBAOYAAO/YYBASJQSMBQBMCQGMCQMBQuRDBIBzA8BjAYA/9hYBRgIBoqNhgEBJgSAoGGJgGABgMAwNGUwGAAwEAMwHABAAYDgIYBgEYDAAYCAEXAeYBAEERtMBADVZkBwGGCYAmAwAmAQBGAYBGAoAmAIBGAYAitGGAQAmAQAGAIBDoHmAQBmAoAhQdzAkATAABAsAwDL//+8wDAMEwQRyv///MAgDD4JmAoIL0ZhDH/+5LAoQAhMQ1Z/YQACwEg7L+nq1FVQwAAYwCAEwCAZOJf/5MNTAMAjAMBzAAAjAMAVqXzBABTAQBTAQBGgdMAwDFwJMAQDBkjP//+YDgGYJgIYAACXEUwBP/////////zAIAjAAAzAcAR0//9TEFNRTMuOTkuNaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
      
      // Show love message
      loveMessage.classList.add('active');
      loveMessage.classList.add('pulse');
      
      // Create sparkles around message
      createSparkles();
      
      // Create floating hearts
      createHeartParticles();
      
      // Hide message after 5 seconds (extended time)
      setTimeout(() => {
        loveMessage.classList.remove('active');
        setTimeout(() => {
          loveMessage.classList.remove('pulse');
        }, 500);
      }, 5000);
    });
    
    // Function to create sparkles
    function createSparkles() {
      // Clear any existing sparkles
      const existingSparkles = loveMessage.querySelectorAll('.sparkle');
      existingSparkles.forEach(sparkle => sparkle.remove());
      
      for (let i = 0; i < 25; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random position around message - wider distribution
        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 150;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        sparkle.style.left = `calc(50% + ${x}px)`;
        sparkle.style.top = `calc(50% + ${y}px)`;
        
        // Random size for varied effect
        const size = 5 + Math.random() * 7;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        // Random colors
        const colors = ['#fff', '#fffacd', '#ffb6c1', '#ffd700'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.backgroundColor = randomColor;
        
        // Random delay for staggered effect
        const delay = Math.random() * 1500;
        setTimeout(() => {
          sparkle.classList.add('sparkle-animation');
        }, delay);
        
        loveMessage.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
          sparkle.remove();
        }, delay + 2000);
      }
    }



            $(document).ready(function() {
            // Initialize all carousels
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                dots: true,
                items: 1,
                center: true,
                autoplay: true,
                autoplayTimeout: 6000,
                autoplayHoverPause: true,
                navText: ['‹', '›'],
                stagePadding: 0,
                responsive: {
                    0: {
                        items: 1,
                        nav: true,
                        dots: true
                    },
                    768: {
                        items: 1,
                        nav: true,
                        dots: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        dots: true
                    }
                }
            });

            // Handle category clicks
            $('.poem-category').click(function() {
                const category = $(this).data('category');
                const carouselId = category + '-carousel';
                
                // Show the corresponding carousel
                $('#' + carouselId).fadeIn(400);
                $('body').css('overflow', 'hidden');
                
                // Refresh the carousel
                setTimeout(() => {
                    $('#' + carouselId + ' .owl-carousel').trigger('refresh.owl.carousel');
                }, 100);
            });

            // Handle close carousel
            $('.close-carousel').click(function() {
                $(this).closest('.carousel-container').fadeOut(400);
                $('body').css('overflow', 'auto');
            });

            // Close carousel when clicking outside
            $('.carousel-container').click(function(e) {
                if (e.target === this) {
                    $(this).fadeOut(400);
                    $('body').css('overflow', 'auto');
                }
            });

            // Handle escape key
            $(document).keyup(function(e) {
                if (e.keyCode === 27) { // ESC key
                    $('.carousel-container').fadeOut(400);
                    $('body').css('overflow', 'auto');
                }
            });

            // Add entrance animations
            $('.poem-category').each(function(index) {
                $(this).css({
                    'opacity': '0',
                    'transform': 'translateY(30px) scale(0.95)'
                });
                
                setTimeout(() => {
                    $(this).animate({
                        'opacity': '1'
                    }, 600).css({
                        'transform': 'translateY(0) scale(1)',
                        'transition': 'transform 0.6s ease'
                    });
                }, index * 150);
            });

            // Add title animation
            $('.title').css({
                'opacity': '0',
                'transform': 'translateY(-20px)'
            }).animate({
                'opacity': '1'
            }, 1000).css({
                'transform': 'translateY(0)',
                'transition': 'transform 0.8s ease'
            });

            // Handle window resize
            $(window).resize(function() {
                $('.owl-carousel').trigger('refresh.owl.carousel');
            });
        });

    
    // Function to create floating heart particles
    function createHeartParticles() {
      // Clear existing heart particles
      heartParticles.innerHTML = '';
      
      // Create new heart particles
      for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        
        // Position hearts to emanate from the center
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const radius = 100;
        const angle = Math.random() * Math.PI * 2;
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        
        // Random size - make them larger
        const size = 20 + Math.random() * 25;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        
        // Random colors for variety
        const colors = ['#ff3366', '#ff0033', '#ff6699', '#ff0066'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        heart.style.backgroundColor = randomColor;
        
        // Random rotation
        const rotation = Math.random() * 360;
        heart.style.transform = `rotate(${rotation}deg)`;
        
        // Random delay for staggered effect
        const delay = Math.random() * 2000;
        setTimeout(() => {
          heartParticles.appendChild(heart);
        }, delay);
        
        // Remove heart after animation
        setTimeout(() => {
          heart.remove();
        }, delay + 4000);
      }
    }




    

  document.addEventListener('DOMContentLoaded', function() {
    // Sample poem data with actual word counts calculated
    const poems = [
       
        {
            id: 1,
            title: "The Love You Wish To Feel",
            description: "poet’s gentle plea to Siddhi: not to be loved on his terms, but on hers.",
            text: `Maya,
            Tell me Siddhi- How so you wish to be adored?
            With whishpered words or silence poured?
            Shall I hold your hand or touch your soul?
            Teach me to make your wishes whole.

            "They say : To love is to learn,
                        and to learn is to listen."
            
            What is the thrill of fingers entwined,
            The rush of hearts, the butterflies refined?
            How does it feel when the moon glows,
            or the sun dips low and the evening slows?

            If love's a prayer, I'll learn each line,
            To praise you in a way divine,
            Your laughter, your tears, I'll hold them all,
            Teach me to catch you if you ever fall.

            Guide me Siddhi, I will follow through,
            Each moment a lesson in loving you,
            With sunsets, stars & skies above,
            Show me how you wished to be loved.

                        - I love for eternity & more.`
        },
        {
            id: 2,
            title: "If You Only Knew",
            description: "Don't ask me how much I Love you !",
            text: ` If You Only Knew 
            Siddhi—
if you could feel
even a flicker
of the fire I carry for you,

your knees would forget the ground.
Your breath—
a bird caught mid-sky—
would falter
beneath the weight
of everything I’ve never said aloud.

If you could truly know
how I love you,
your heart would shatter,
not from pain,
but from awe.

You’d collapse
into the truth
like rain into the ocean—
no longer knowing
where you end
and where I begin.

The world would halt.
Clocks would forget how to tick.
Every song ever written
would fall silent
in reverence.

The moon,
so proud, so distant,
would scatter its bones across the black
just to make room
for your name in the stars.

The sun—
once a tyrant of light—
would dim in shame,
realizing
it had never truly warmed
anything the way you warm me
by simply existing.

Siddhi,
I do not love you like mortals do.
I do not love you with skin, or lips, or hands.
I love you
with the ache of galaxies,
with the silence between lightning and thunder,
with the breath God took
before saying, “Let there be light.”

If infinity had a heartbeat,
it would echo mine
whispering your name.
Again.
And again.
And again.

So don’t ask me
how deep this love runs—
ask the stars that died
so you could be born.
Ask the rivers
why they still move
without ever reaching you.
Ask the night
why it weeps
when it remembers
you are not mine.

And if you cry—
know this:
your tears are prayers
my soul has already spoken.`
        },
        {
            id: 3,
            title: "Before The Sky Folds",
            description: "Even if it is last night before the world ends, I still love you.",
            text: `Siddhi—
don’t say a word tonight.
The stars are listening,
and they know
this is the last time
I’ll ever say your name
with breath in my lungs.

The world ends at dawn.
They didn’t tell us,
but I know.
I can feel it—
in the way the moon is holding back tears,
in how the wind sounds like a goodbye
no one’s ready to say.

So let me confess
before the sky folds in on itself—
I have loved you
in silence,
in shadow,
in every heartbeat that dared not speak.

I have loved you
while laughing in crowds,
while pretending you were only
a passing thought,
when you were the whole damn storm
and I stood
drenched in your name.

I have loved you
in the spaces between your words,
in the way you look at the world
like it never hurt you—
even when it did.

And if I could choose
any ending,
any apocalypse,
any final breath—
I would still choose
this moment,
this you,
this truth.

If I could give you anything
before the sky crumbles,
it would be this:
the raw, unfiltered truth
that you were my everything,
even when I was nothing to you.

So hold my hand,
just this once,
as the stars burn out,
as time exhales
and the earth goes still—
let me die knowing
you finally knew.`
        },
        {
            id:4 ,
            title: "Tomorrow With You",
            description: "The symphony of dreams, how I imagine us.",
            text: `Let’s finish what we started— Siddhi
not just our studies,
not just these quiet days of becoming someone.
Let’s become us.
Let’s get the jobs,
earn enough not for riches,
but for a life we built with our own hands.
A small home,
big enough for dreams,
small enough to keep us close.

Siddhi- I want to see your parents
smiling beside mine,
our families clinking glasses,
laughing over stories we once only imagined sharing.
Your hand in mine—
not just in love,
but in life.

Let’s wake up together.
Let the light slip in
through half-closed curtains
as we lie tangled in sheets,
your breath on my chest,
time paused in the quiet glow of morning.

Let’s cook together—
your hips brushing mine,
music in the kitchen,
laughing over chopped onions
and burned toast,
dancing barefoot with sauce-stained spoons.

Let’s sit outside,
watch sunsets melt into each other,
every orange sky
a promise that we stayed.
That we chose this,
again and again.

At night,
we’ll watch the moon rise slow—
you wrapped in my arms,
stars scattered like secrets.
I want every night
to end with your skin
pressed against mine,
your breath heavy and close.
Let me bury myself in you—
bite your neck,
sweat into you,
lose and find myself
a hundred times
until sleep steals us both.

I want your name to echo through our home—
not just from my lips,
but from little ones we made.
I want babies with your eyes,
your laugh,
your fire.
Let’s raise them messy,
honest,
free.
Let’s teach them love
by the way I’ll never stop looking at you.

Let’s make a life,
not just a living.
Let’s carve a way out of this chaos—
just you and me,
building something
the world can’t touch.

And when the last light comes—
when our hands are older,
our breaths slower—
let’s sit together,
one final sunset,
your fingers in mine,
our whole story behind us,
and nothing left to say
but I Love You, today, tomorrow & forever.

`
        },
        {
            id: 5,
            title: "In This One Life",
            description: "Siddhi- even if I had hundreds of Life's , I would always choose this one for YOOU !",
            text: `A hundred lifetimes
wouldn’t be enough—
but I would still choose this one,
the one where I found you
in a world that almost convinced me
I never would.

I wasn’t waiting for perfect.
I was waiting for real.
For the kind of love
that doesn’t knock loud—
just opens the door
and says, “I’m home.”

You are not a chapter—
you are the book.
You are not a spark—
you are the fire that stayed lit
when every candle I held
burned out too soon.

Before you,
I knew the shape of loneliness
better than my own skin.
I knew silence that echoed,
nights that stretched empty,
hands that reached
but never landed.

But then—
you.
Not loud, not lightning.
You, like rain after drought.
You, like breath after drowning.

They say you only find
a love like this once—
and they’re right.
This is it.
The kind of love
that doesn’t ask to be written about,
but still ends up in every line.

If I only get one life,
let it be this one.
Let it be the one
where I found you
and finally stopped searching.`
        },
         {
            id: 6,
            title: "I Love You Raw",
            description: "Siddhi- I confession of love that embraces every imperfection without hesitation. I love you as - you are.",
            text: `Siddhi-
            Give me your anger, your shame—
the heat in your chest when the world doesn't listen,
the words you swallow just to keep peace,
the tears you hide in a smile that fools everyone but me.

Give me the version of you
that stares too long at the mirror,
counting flaws like sins.
Let me kiss each one like a blessing.

Bring me the cracked voice at midnight,
the silence when words feel false.
I want the trembling hands, the half-healed scars,
the edge of your voice when you say you’re fine—
but you’re not.

Bring me your sleepless nights,
your aching back from carrying too much,
the story of the scar on your body,
the one you got when you ran too fast trying to be free.
Let me hear how it hurt.
Let me stay when it still does.

Let me into the room where you hide your chaos,
where your journals are messier than your thoughts,
where old dreams collect dust,
and fears live in drawers you never open.
I'll sit with you there.

Show me the texts you never sent,
the apologies you whispered to no one,
the love you gave that was never returned.
I’ll hold your shaking voice,
and I won’t ask it to sing.

I don’t need the filtered version—
the rehearsed smiles, the flawless days.
I want the you that curses in traffic,
wears socks that don’t match,
laughs like thunder when you forget how to care.

Give me the mornings when you don’t feel like rising,
the nights when you're more shadow than skin.
I’ll love the you that doubts,
the you that fights back tears with silence,
the you that believes you are too much or not enough.

Siddhi- I Love You !
Not for the shine,
not for the mask you wear for the world—
but for the raw,
the honest,
the storm that you are.

You don’t need to be soft to be worthy.
You don’t need to be easy to be held.
Just come undone,
and I’ll still say:
I'll love you:
this,
all of this,
is beautiful.
I will love you with every scar,
ever imperfection, all that you are-
all you have, all I see is:
just magic & beauty.

You are neither.
You are exactly as I want you:
unfiltered,
unmended,
real.

Let your edges stay sharp,
your wounds stay healing.
Don’t cover them up.
I’ll trace every line like a map
leading to the truth of you.

I won’t love you despite your cracks—
I’ll love you through them,
within them,
because of them.

So break,
bleed,
breathe.
You don’t have to become anything else.
I love you, not when you’re perfect—
but precisely when you’re not.`
        },

        {
            id:7,
            title: "You, the Religion I Chose",
            description: "Siddhi— I am what remains when obsession loses shame, consuming madness and devotion turns to beautiful disease.",
            text: `Siddhi,
like barren earth opens their veins for rain,
I open myself for you—
not in body,
but in the aching parts words cannot touch.

You —
you are not a girl to me,
you are a God.
I do not love you,
I worship you.
Every breath I take is a prayer
where your name is the only verse.

Let your soul drip into mine,
slow,
like honey over open wounds.
Let us blur,
dissolve,
fold into each other
until even God cannot tell
where I end
and you begin.

Color me with your storms.
Paint your sorrow into my silence,
your fire into my cold.
Stain me with your every shade —
I want no skin of my own.
I want yours.

Don’t let me touch you.
Let me become you.
Let my bones carry the map of your breath,
let my blood echo your heartbeat
like thunder missing lightning.

Let me live beneath your skin,
beneath your fears,
in the hollow of your nights
where no one else dares to look.

I want to kiss your scars,
not as pity,
but as proof—
that even your wounds
are divine.

Give me your pain.
Give me the broken.
I want it all.
All your chaos.
All your quiet.
The angry red in your voice
when no one listens.
The soft you hide
because it trembles too loud.

Mark me, Siddhi.
Not with ink,
but with your teeth,
your whispers,
your presence heavy
on my neck,
like chains I beg to wear.

I want to rot inside your forever.
Decay into your memory
like forgotten flowers
in pages of old love letters.

You are not mine.
I am yours.
I am what happens
when obsession forgets shame,
and devotion becomes disease.

So hold me—
not with hands,
but with your absence.
Haunt me.
Haunt every breath I steal
in your name.

And when this life fades,
when time gives up on us,
let our dust
still cling together
in wind,
in shadow,
in everything
that aches beautifully.

Let me whisper inside you: "You are mine , You are all mine."

And when death comes,
let it not find us two,
but one — soaked, merged, holy.`


        },
         {
            id: 8,
            title: "No Rehab for This",
            description: "I confess of a love so consuming, it replaces every vice and becomes the sweetest, most devastating addiction.",
            text: `I never needed needles, never kissed a glassy flame—
But God, when she looked at me, I never was the same.
Her pupils pull like gravity, black holes dressed in light,
Each glance a hit that wrecks me more than any sleepless night.

Her scent—it's not perfume, it’s prophecy and prayer,
A whisper of her passing haunts the very air.
No rose, no smoke, no rain-soaked earth compares,
To how her skin smells like sin, wrapped in silent stares.

I used to chase escape in things I can't recall—
Cheap highs, loud nights, the nothingness of it all.
Now I chase the hush of her breath in the dawn,
A sigh, a laugh, and suddenly the world is gone.

The tilt of her smile is a shot to the vein,
The kind that sings and stings and numbs the pain.
Her voice—each word she speaks—a hymn, a drug, a chain,
It frees me just enough to crave the cage again.

I fold her name into my day like some old creed—
Brush teeth, say prayers, pretend I don’t need.
But I do. I need. God, I do.
I’d trade every vice I’ve ever known just to drown in her truth.

And yet I see it now—this isn't love, it's thirst.
A beautiful undoing in its softest, sweetest curse.
I don’t know if she’s heaven or hell in disguise—
Only that I’m gone, and she’s the reason why.

So let them keep their poisons, their bottles, their blades—
I’ll take the slow decay of the way her gaze invades.
I’m addicted, yes, and I make no disguise—
Not to smoke or pills—
But to her.
To her scent.
To her presence.
To the ruin in her eyes.`
        },
         {
            id: 9,
            title: "Not the Love I Hoped For",
            description: "I might say that this isn't the love that I dreamed of but still you are the one I love Siddhi.",
            text: `This isn’t the love I wished to find,
not the kind that frees the heart and mind.
I dreamed of love that feels like flight,
not one that hides from morning light.

You care too much what people say,
while I just want to feel okay.
I crave a love that’s bold and true,
not one that fears each point of view.

You once changed for someone before,
gave effort, time, and so much more.
But now with me, you hold it back—
and I’m the one picking up the slack.

How long will it take for you to see,
this love I give is pure and free?
It’s meant to last, not fade away—
but I can’t keep giving every day.

I stayed when you pushed me aside,
held on through every tear I cried.
I tried to be the best I can,
stood by you like no other man.

When you showed red flags, I stayed,
through all the storms your silence made.
From poems written to art I gave,
I loved you loud, I loved you brave.

But you won’t try to meet me there,
won’t show me that you really care.
And now I’m tired, worn, and low—
of proving love you should already know.

I don’t want to mirror your cold retreat,
don’t want to match your incomplete.
But love should feel like flight, not fall,
and I am fading, through it all.

And I fear—yes, I fear most of all,
that one day, I’ll stop answering love’s call.
That my heart will sleep, and my mind will say,
"Let go. It’s time. Walk away."

Still, deep inside, I leave a place,
for all your love I hope to face.
And though I bend, I won’t break fast—
my love was built to truly last.

"I will love you till you, or the things you do,
finally make me give up on you."`
        },
         {
            id: 10,
            title: "In the Forest of Farewell",
            description: "My bruised soul clings to love that both binds and heals, as fleeting hope blooms in the ruins of sorrow.",
            text: `
My life, a map of bruises blue,
Where silence sings, and sorrow grew.
Each bone remembers ache and fall,
Yet something stirs beneath it all—
Where grief once bloomed in marrow’s dome,
Now love begins to build a home.

I walk through forests dim and bare,
Where farewells float in cold, stale air.
But there—brief moments, bright and wild,
Like flowers giggling, soft and mild.
They grow in cracks, in loss, in pain,
In sunlight spilled from sorrow’s rain.

I'm tired—tired of love’s old tune,
Of nights that pass without a moon.
Of wounds that whisper, “Here again,”
Of freedom caged in gold and chain.
I’m tired of dreams that turn to rust,
Of hearts that break, because they must.

Yet still—your name, my tender balm,
My reckless storm, my aching calm.
Siddhi—my soul still bends for you,
Through thin and thick, through gray and blue.
Through highways wide and byways small,
I’ve loved you through the rise, the fall.

You are my ache, my breath, my plea,
The home I hold but cannot see.
In dreams, I build a world so wide,
With you asleep there by my side.
A home with warmth, with walls that speak,
Of quiet laughs, and kisses cheek.

I know this love may never be
The love I dreamed that set me free.
But even caged, my heart still sings,
Still clings to you with breaking wings.
You are the pain I’d choose again,
My constant sun, my sweetest rain.

So let them call this love unwise,
I’ll hold your name till my demise.
In broken bones, in bruised refrain,
You bloom like spring inside my pain.
`
        },
         {
            id: 11,
            title: "I Knew You Before I Knew Myself",
            description: "A soul-stirring confession of timeless love, where silence speaks, seasons embrace, and two hearts find home in each other.",
            text: `
They say some souls are places—
not people.
And I think yours is where I go
every time the world turns too loud.
It’s not a room or a memory,
it’s a feeling:
a kind of quiet
that hums like home.

I didn’t just meet you.
I recognized you.
Like a face from a dream
I could never quite describe,
but always knew I’d see again.
Maybe we loved each other in another life—
or maybe
this is the first time the universe
got it right.

We don’t always talk much.
But it’s in the stillness,
when neither of us speaks,
that I hear you best.
Our silences aren't empty.
They’re filled with the kind of trust
that only grows
when love stops trying to prove itself.

Miracles used to sound dramatic—
until I watched you laugh over coffee,
or cry over something you couldn’t explain.
Now I know:
a miracle isn’t a storm in the sky.
It’s a human being
who lets you see all their weather
and stays
when yours begins to rain.

If I were a season,
I’d be late autumn—
quiet, slow,
always shedding something.
And you—
you’d be the sky that turns gold for me,
without asking why I’m always falling.

There’s a version of me
that only exists when I’m with you.
He’s not perfect—
but he’s real.
And he loves better,
softer,
truer.
He doesn’t need to pretend
he’s not afraid—
because you never loved him less
for his fear.

I write letters to you in my head
all day.
I mail them through actions—
a hand on your back,
a joke you needed before you even asked.
And if love had coordinates,
mine would always point to wherever you are.
Even if we argued.
Even if we fell silent.
You’re still the destination.

You’ve always been the unfinished melody
I’ve hummed when I couldn’t sleep.
Now, your voice fills in the missing notes—
and somehow,
everything I feared I’d never understand
starts to make sense in your company.

You don’t calm me with logic.
You calm me by existing.
Each word you say
is like thread
pulling my scattered pieces together
into something whole,
something warm,
something almost sacred.

So no—
this isn’t just love.
It’s recognition.
It’s return.
It’s the quiet truth
that after all the noise,
I’ve finally arrived
where I was always meant to be:

in you.


`
         }
        
    ];

    // Calculate word counts for each poem
    poems.forEach(poem => {
        poem.wordCount = countWords(poem.text);
    });

    // DOM Elements
    const viewAllButton = document.getElementById('view-all-button');
    const morePoems = document.querySelector('.more-poems');
    const poemDetails = document.getElementById('poem-details');
    const closeButton = document.querySelector('.close-button');
    const detailTitle = document.getElementById('detail-title');
    const detailPoem = document.getElementById('detail-poem');
    const detailWordcount = document.getElementById('detail-wordcount');

    // Event Listeners
    viewAllButton.addEventListener('click', toggleMorePoems);
    closeButton.addEventListener('click', closePoem);

    // Initialize poem items with click listeners
    initializePoemItems();
    
    // Function to count words in a text
    function countWords(text) {
        // Remove extra whitespace and split by spaces
        return text.trim().split(/\s+/).length;
    }
    
    function initializePoemItems() {
        // Select all poem items
        const allPoemItems = document.querySelectorAll('.poem-item');
        
        allPoemItems.forEach(item => {
            // Get the poem number from the item's text content
            const poemNumberText = item.querySelector('.poem-number').textContent;
            // Extract the number from "(01)" format
            const poemId = parseInt(poemNumberText.replace(/[()]/g, ''));
            
            // Update word count with calculated values
            const wordCountElement = item.querySelector('.poem-wordcount');
            const poem = poems.find(p => p.id === poemId);
            if (poem) {
                wordCountElement.textContent = `${poem.wordCount} words`;
            }
            
            // Add click event listener
            item.addEventListener('click', () => {
                showPoemDetails(poemId);
            });
        });
    }

    // Toggle more poems visibility
    function toggleMorePoems() {
        if (morePoems.style.display === 'none' || !morePoems.style.display) {
            morePoems.style.display = 'block';
            viewAllButton.textContent = 'Hide Additional Poems';
        } else {
            morePoems.style.display = 'none';
            viewAllButton.textContent = 'View More Poems';
        }
    }

    // Show poem details
    function showPoemDetails(poemId) {
        const poem = poems.find(p => p.id === poemId);
        
        if (poem) {
            detailTitle.textContent = poem.title;
            detailPoem.textContent = poem.text;
            detailWordcount.textContent = `Word count: ${poem.wordCount}`;
            
            // Add active class to show the overlay
            poemDetails.classList.add('active');
            
            // Prevent body scrolling when modal is open
            document.body.style.overflow = 'hidden';
        }
    }

    // Close poem details
    function closePoem() {
        poemDetails.classList.remove('active');
        
        // Allow body scrolling again
        document.body.style.overflow = '';
    }

    // Close modal if clicking outside the content
    poemDetails.addEventListener('click', function(e) {
        if (e.target === poemDetails) {
            closePoem();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && poemDetails.classList.contains('active')) {
            closePoem();
        }
    });
});








// Modified JavaScript for your specific HTML structure
document.addEventListener('DOMContentLoaded', function() {
  const playButtons = document.querySelectorAll('.play-button');
  const audioElements = document.querySelectorAll('audio');
  
  playButtons.forEach(button => {
    button.addEventListener('click', function() {
      const audioId = this.getAttribute('data-audio');
      const audioElement = document.getElementById(audioId);
      
      if (!audioElement) {
        console.error('Audio element not found:', audioId);
        return;
      }
      
      // Get start and end times (in seconds) from data attributes
      const startTime = parseFloat(this.getAttribute('data-start-time') || 0);
      const endTime = this.getAttribute('data-end-time') ? 
                      parseFloat(this.getAttribute('data-end-time')) : 
                      audioElement.duration;
      
      console.log(`Playing ${audioId} from ${startTime}s to ${endTime}s`);
      
      // Stop all other audio
      audioElements.forEach(audio => {
        if (audio.id !== audioId) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
      
      // Reset all play buttons
      playButtons.forEach(btn => {
        if (btn !== this) {
          btn.innerHTML = '▶';
          btn.classList.remove('playing');
        }
      });
      
      // Toggle play/pause for this audio
      if (audioElement.paused) {
        // Set the current time to the desired start time
        audioElement.currentTime = startTime;
        
        // Clear any existing timeupdate listeners to prevent duplicates
        audioElement.onended = null;
        audioElement.ontimeupdate = null;
        
        // Add an event listener to stop playback when reaching the end time
        audioElement.ontimeupdate = function() {
          if (audioElement.currentTime >= endTime) {
            audioElement.pause();
            audioElement.ontimeupdate = null;
            button.innerHTML = '▶';
            button.classList.remove('playing');
          }
        };
        
        // Start playback
        audioElement.play().catch(error => {
          console.error('Playback failed:', error);
        });
        
        this.innerHTML = '⏸';
        this.classList.add('playing');
      } else {
        // Pause playback
        audioElement.pause();
        this.innerHTML = '▶';
        this.classList.remove('playing');
        
        // Remove listeners
        audioElement.ontimeupdate = null;
      }
    });
  });
});





//additional music
 document.addEventListener('DOMContentLoaded', function() {
      // Listen More Button Functionality
      const listenMoreBtn = document.querySelector('.listen-more-btn');
      const additionalContent = document.querySelector('.additional-content');
      
      if (listenMoreBtn && additionalContent) {
        listenMoreBtn.addEventListener('click', function() {
          additionalContent.classList.toggle('active');
          this.classList.toggle('active');
          
          // Change button text based on state
          if (this.classList.contains('active')) {
            this.innerHTML = 'Show Less <span class="icon"></span>';
          } else {
            this.innerHTML = 'Listen More <span class="icon"></span>';
          }
        });
      }
      
      // Audio Player Functionality
      const playButtons = document.querySelectorAll('.play-button');
      let currentlyPlaying = null;
      
      playButtons.forEach(button => {
        button.addEventListener('click', function() {
          const audioId = this.getAttribute('data-audio');
          const startTime = parseFloat(this.getAttribute('data-start-time'));
          const endTime = parseFloat(this.getAttribute('data-end-time'));
          const audio = document.getElementById(audioId);
          
          if (!audio) return; // Guard against missing audio elements
          
          // Stop currently playing audio if exists
          if (currentlyPlaying) {
            const currentAudio = document.getElementById(currentlyPlaying.audioId);
            if (currentAudio) {
              currentAudio.pause();
              currentAudio.currentTime = 0;
              currentlyPlaying.button.innerHTML = '▶';
              currentlyPlaying.button.classList.remove('playing');
            }
          }
          
          // Play new audio or stop if same button clicked
          if (currentlyPlaying && currentlyPlaying.button === this) {
            currentlyPlaying = null;
          } else {
            audio.currentTime = startTime;
            audio.play();
            this.innerHTML = '■';
            this.classList.add('playing');
            
            currentlyPlaying = {
              audioId: audioId,
              button: this
            };
            
            // Set end time listener
            const timeUpdateHandler = function() {
              if (audio.currentTime >= endTime) {
                audio.pause();
                audio.currentTime = startTime;
                button.innerHTML = '▶';
                button.classList.remove('playing');
                currentlyPlaying = null;
                audio.removeEventListener('timeupdate', timeUpdateHandler);
              }
            };
            
            audio.addEventListener('timeupdate', timeUpdateHandler);
          }
        });
      });
    });