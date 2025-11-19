//"Havana" @by Pink Chaos

setcps(80/60/4)

samples('https://raw.githubusercontent.com/ChrisZDK/chaos/main/strudel.json?version=2')

// --- DRUMS ---

$: s("hh*4 perc")
  .segment(32)
  .degradeBy(.4)
  .ribbon(44,1)
  .almostNever(ply("2 | 4"))
  .bank("compurhythm8000")
  .someCycles(x => x.pan ("<2 .2>"))
  .someCycles(x => x.delay("<.4 .2 2>"))
  .room(1).roomsize(2) 
  .lpf(slider(993, 0, 2000, 1))
  .orbit(1)
  .color("yellow")._scope()
// --- SAMPLES ---

$: n(7).s("break").clip(1)
  .scrub(irand(16).div(16).seg(8))
  .rib("<80 8>",1)
  .almostNever(ply("2 | 4"))
  .room(0.4).roomsize(1) 
  .orbit(2)
  .gain(slider(0.364,0,1))
  ._scope()

$: n(5).s("break/2").clip(1)
  .scrub(irand(16).div(16).seg(8))
  .rib("<10 5> <8 2>*2",1)
  .almostNever(ply("2 | 3"))
  .room(0.4).roomsize(2) 
  .orbit(3)
  .gain(slider(0.551,0,1))
  ._scope()
// --- CHORDS ---

$: chord("<Abm Db Fm Ebm Abm Db Fm7 Ebm7>")
  .s('gm_fx_atmosphere')
  .voicing()
  .room(3)
  .velocity(0.75).often(n => n.ply(2))
  .cutoff("<1500 2000 4000>")
  .orbit(5)
  .gain(slider(0.563,0,1))
  .color("cyan")._pianoroll()

// --- SYNTH ---

$: s('triangle')
  .chord("<Abm Db Fm Ebm Abm Db Fm7 Ebm7>")
  .note("<[ab4, cb4, eb4] [db4, f3, ab4] [f4, ab3, c4] [eb4, gb3, bb4]>")
  .arp ("<[0 1 2 0]>*4")
  .gain(slider(0.794,0,2))
  .color("cyan")._pianoroll() 

// --- BASS ---

$: note("<[ab1 - eb2 cb2 ab1 - bb1 ab1] [db1 ab1 f2 db2 - eb1 - eb1] [f1 - c2 b1 bb1 - ab1 f1 ] [eb1 bb1 ab1 gb1 - eb1 - db1]>")
  .arp ("<[0 2 1 2]*4!2 [0 1 2 1]*4 [0 2 1 2]*4>")
  .s("gm_electric_bass_finger")
  .gain(slider(1.182,0,2))
  .color("magenta")
  ._pianoroll()