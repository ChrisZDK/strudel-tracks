// "Radical" @by Pink Chaos

samples('https://raw.githubusercontent.com/ChrisZDK/chaos/main/strudel.json?version=2') 

setcpm(114/4)

$:sound(`
[-  -  -  - ] [-  -  -  - ] [-  oh -  - ] [-  -  -  - ],
[hh hh -  - ] [hh - hh*3 - ] [hh -  hh - ] [hh -  hh - ],
[-  -  -  - ] [-  -  -  - ] [-  -  -  - ] [-  cp*4 - - ]
`)
  .bank("rolandmc303")
  .delay(".2")
  .gain("[.2 .45]*4")
  .room(0.3).roomsize(2).orbit(1)
  .pan("0.3 0 .3 0")
  .orbit(1)
  .color("yellow")

$:sound("[bd*4]")
  .bank("sequentialcircuitsdrumtracks")
  .lpf(("500 1000 750 1000").delay(".3"))
  .gain("1")
  .orbit(2)
  .compressor(.85)
  .color("yellow")

$:n("1*0.2").s("vox")
  .room(0.4).roomsize(6) .orbit(2)
  .pan("0 0.5 .6 1")
  .sometimes(x => x.chop(8).delay(.5))
  .sometimes(x => x.rev()) 
  .sometimes(x => x.speed((0.2, 0.7))) 
  .orbit(3)
  .color("magenta")

$: s("vox:1/2").fit()
  .gain(.4)
  .scrub(irand(8).div(8).seg(16))
  .lpf(tri.range(100, 5000).slow(2))
  .pan(rand)
  .orbit(4)
  .color("magenta")

$: s("triangle*6")
  .gain(0.9)
  .decay(0.2)
  .sometimes(x => x.delay(.3))
  .n(irand(6))
  .scale('D minor')
  .room(0.5).roomsize(8).orbit(3)
  .lpf(sine.range(100, 1500).slow(16))
  .orbit(5)
  ._punchcard()
  .color("cyan")

 
$: n("<d1 e1 f2 d1>*2").scale('D minor') .layer(
  x=>x
    .s("harmonica") 
    .vib(4)
    .dec(.3)
    .lpf(1000, 3000)
    .slow(2) 
    .adsr(".2:.2:.5:0.5")  
    .gain(slider(0.2, 0, 1, 0.1))
    .color("cyan"),
  x=>x
    .s("xylophone_medium_pp")
    .add(n(12) 
    .dec(.3)
    .delay("2")
    .delaytime(".1")  
    .color("green")) 
    .gain(slider(0.3, 0, 1, 0.1))
)
    ._punchcard()