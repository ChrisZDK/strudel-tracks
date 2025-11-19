// "Humilis" @by Pink Chaos

register('o', (orbit, pat) => pat.orbit(orbit))

setGainCurve(x => Math.pow(x, 2))

samples({
lofi_1 : ['lofi1_102-Am.wav', 'lofifi2-102-Am.wav', 'lofi_124_Am.wav', 'lofi_60-Em.wav', 'lofi_87-F.wav', 'lofi_91_Bm.wav', 'lofi_93-C.wav', 'lofi_94_Am.wav'],
}, 'https://raw.githubusercontent.com/ChrisZDK/chaos/main/');



setcps(65/60/4)

$: s("lofi_1:6/2") .fit() 
  .room(.4)
  //.o(1)
  .lpf(slider(3366, 200, 5000, 1))
  .gain(slider(0.8,0,1.2,0.1))
  ._scope()
 
let chords = chord(`<[Abm Bbm Abm7 Bbm7]/4>`) 

let notes = note(`
  [b4@4 b4 [eb5 b4] bb4 ab4]
  [bb4@4 db5 [f5 db5] bb4 ab4]
  [b4@4 b4 [eb5 gb5] eb5 b4]
  [ab4@4 db5 [f5 ab5] gb5 f5]
`)

  $: chords
  .s('gm_fx_atmosphere')
  .mode("above:c4")
  .voicing()
  .room(3)
  .velocity(0.75).often(n => n.ply(2))
  .cutoff("<1500 2000 2500 3000>")
  //.o(4)
  .gain(slider(0.7,0,2,0.1))
  //.color("cyan")._pianoroll()

$: notes
  .slow(4)  
  .s("piano") 
  .clip(2)
  .room(1).roomsize(1)
  .delay(2)
  //.o(5)
  .gain(slider(0.8,0,2,0.1))
  //.color("yellow")._pianoroll()

$: notes
  .arp("0 - 3 5 - 5 4 7") 
  .trans(-5)
  .fast(2)                 
  .s("gm_synth_strings_1:3")
  .clip(0.7)
  .delay(.8)
  .room(.8).roomsize(4)
  //.o(6)
  .gain(slider(0.7,0,2,0.1))
  //.color("orange")._pianoroll()

$: notes 
    .off(1/8, add(n(7))).slow(2)
    .almostNever(x => x.add(n("<12 5>").fast(2)))
    .s("gm_marimba")
    .lpf(320)
    .lpenv(slider(2.3,0,4))
    .lpq(5)
    .distort("1.2:.5")
    .ftype('ladder')
    .someCycles(x => x.pan ("<2 .2>"))
    .sometimes(x => x.delay("<.2 .1 .4>"))
    .room(1).roomsize(2) 
    //.o(7)
    .gain(slider(0.5,0,2,0.1))
