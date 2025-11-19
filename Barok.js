// "Barok" @by Pink Chaos

samples('https://raw.githubusercontent.com/ChrisZDK/chaos/main/strudel.json?version=2')

setcps(170/60/4) 

// --- drums ----

$: s ("<bd sd [~ bd] sd>*4")
  .bank("rolandtr505")
  .compressor(.85)
  .color("yellow")._scope()

// --- breaks ----

$: n(5) .s("break") .clip(1) 
  .scrub(irand(16).div(16).seg(8))
  .rib("<300, 5>",1)
  .room(.4)
  .orbit(1)
  .lpf(slider(3250, 200, 5000, 1))
  ._scope()
  
$: n(1) .s("break/2") .clip(0.2) 
  .scrub(irand(8).div(4).seg(2))
  .rib("<200, 20>",1)
  .almostNever(ply("2 | 4"))
  .orbit(2)
  .lpf(slider(2850, 200, 5000, 1))
  ._scope()
// --- ad-libs --- 

$: n(1) .s("barok").clip("<0.2 0.5 0.1 0.4>/2") //drop
  .gain(slider(0.6, 0, 1, .1))
  .orbit(3)
  .pan("0 3 .4 1")
  .sometimes(x => x.chop(8).delay(.2))
  .sometimes(x => x.speed((0.2, 2))) 
  .lpf(perlin.range(100,1000).slow(8))
  .lpenv(-3).lpa(.1).room(.5).fast(2)
  .color("red")._scope()

$: n(3).s("barok/4").clip(0.7)
  .rib("<44 33 20>",1)
  .room(0.4).roomsize(6) .orbit(2)
  .pan("0 0.5 .6 1")
  .sometimes(x => x.chop(8).delay(.5))
  .sometimes(x => x.rev()) 
  .sometimes(x => x.speed((0.2, 1.3)))
  .gain(slider(1,0,1.5,0.1))
  .color("red")._scope()