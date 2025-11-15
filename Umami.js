//"Umami" @by SYNTHLESS

setcps(155/60/4) 

// --- DRUMS ---

$: s("bd*4")
  .gain(0.8)
  .compressor(.85)
  .color("yellow")._scope()

$: s("~ cp ~ cp")
  .delay("<[.2 .4]/2>")
  .room(.2).roomsize(3)
  .orbit(4)
  .gain(0.6)  
  .color("yellow")._scope()

$: s("<hh*8 [hh*16 ~]>")

  .delay(0.5)
  .room(.2).roomsize(2)
  .orbit(5)
  .gain(0.6)
  .color("yellow")._scope()

$: s("~ oh ~ oh")
  .gain(range(0.5, 1.0, saw))
  .attack(0.01)
  .release(0.2)
  .color("yellow")._scope()

$: s("sd:4/2").fit()
  .color("yellow")._scope()

// --- BASS ---

$: n("<7 _ _ 6 5 _ _ 3>*2")
  .scale("e:minor")
  .trans(-24)
  .detune(rand)
  .s("supersaw")
    // base acid-style filter
  .lpf(slider(2600, 0, 5000, 100))            
  .lpq(5)             
  .lpa(.6)            
  .lpd(.2)             
  .lpenv(slider(0.796))    
  .distort("2:.87")   
  .ftype("ladder") 
  .orbit(3)
  .gain(slider(0.8,0,1.2,0.1))
  .color("magenta")._pianoroll()

// --- SYNTH ---

$: n("<4 5 2 7 8>*16".add("<[7 _ _ 6 5 _ _ 3]!4 [7 _ _ 6 5 _ _ 7]!4>"))
  .scale("e:minor")
  .trans(-12)
  .s("sawtooth")
  .lpf(slider(2200, 0, 5000, 100))            
  .lpq(10)             
  .lpa(.12)             
  .lpd(.2)             
  .lpenv(slider(0.602))    
  .distort("2:.80")   
  .ftype("ladder") 
  .delay(slider(0.269))
  .pan(rand)
  .orbit(1)
  .gain(slider(0.6,0,1.2,0.1))
  .color("cyan")._pianoroll()

$: n("<4 5 2 7 8>*16".add("<[7 _ _ 6 5 _ _ 3]!4 [7 _ _ 6 5 _ _ 7]!4>"))
  .scale("e:minor")
  .trans(12)
  .detune(rand)
  .s("square")
    // base acid-style filter
  .lpf(slider(800, 0, 4000, 100))           
  .lpq(5)             
  .lpa(slider(0.359))             
  .lpenv(slider(0.293))    
  .distort("2.5:.99")   
  .ftype("ladder") 
  .room(1).roomsize(2)
  .delay(slider(0.074))
  .pan(rand)
  .orbit(2)
  .gain(slider(0.3,0,1.2,0.1))
  .color("cyan")._pianoroll()
