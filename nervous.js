// "Nervous" @by Pink Chaos

// Charger ton script externe

samples('https://raw.githubusercontent.com/ChrisZDK/chaos/main/strudel.json?version=2')


setcps(150/60/4)

$: s("htechno_1:7/2") .fit() 
  .room(.3)
  .orbit(1)
  .lpf(slider(4144, 200, 5000, 1))
  .gain(slider(1,0,1.2,0.2))
  ._scope()
$: s("htechno_1:5/2") .fit() 
  .scrub(irand(16).div(16).seg(8))
  .rib("<25 5> <8 2>*2",1)
  .almostNever(ply("2 | 4"))
  .room(.4)
  .delay(.4)
  .pan(rand)
  //.slow(2)
  .orbit(2)
  .lpf(slider(3925, 200, 5000, 1))
  .hpf(slider(3125, 200, 5000, 1))
  .gain(slider(0.8,0,1.2,0.2))
  ._scope()

$: s ("chaosinstr_1:1").fit()
  .n("<g2 d3 g2 f3>").slow(2)
  .scale("F:major")
  .trans(-12)
  .gain(slider(0.3,0,1,0.1))
  .orbit(3)
  ._scope()
  
$: n("- - - - f3 c3 g3 d3")
  .fast(2)
  .scale("F:major")
  .s("chaossynth:8/2").clip(1)
  .trans(-12)
  .room(.2).roomsize(1)
  .delay(.3)
  .orbit(4)
  .gain(slider(0.8,0,1.2,0.1))
  ._scope()
  
$: n("0".add(-12))
  .scale("F:major").trans(-7)
  .s("supersaw")
  .lpenv(1)
  .gain(slider(0.5,0,1.2,0.1))
  ._scope()