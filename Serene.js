//"Serene" @by Pink Chaos
// La Serenissima - Rondo Veneziano

samples('https://raw.githubusercontent.com/ChrisZDK/chaos/main/strudel.json?version=2')

setcps(88/60/4)

$: s("serenissima_drums/2").fit()
  .compressor(.85)
  .room(0.4).roomsize(1) 
  .orbit(2)
  .gain(slider(0.66,0,1))
  .color("yellow")._scope()

// --- Set chords

let chords = chord(`<[
F Am Dm 
F Am Dm 
Bb C Dm C
]/10>`) 

// --- BASS ---

$: n("0@2.5 1  0@2 0 ")
  .set(chords)
  .mode("root:g2")
  .voicing()
  .gain(slider(0.9,0,2,0.1))
  .color("magenta")._pianoroll()

// --- CHORDS  ---

$: chords   
  .s("gm_pad_sweep")        
  .voicing()
  .room(0.9)
  .size(0.99)
  .orbit(2)
  .gain(slider(0.4,0,1,0.1))
  .color("cyan")._pianoroll()

$: chords   
  .mode("above:c2")
  .voicing()
  .s("gm_synth_bass_2")
  .room(0.5)
  .orbit(4)
  .gain(slider(0.2,0,1,0.1))
  .color("cyan")._pianoroll()

// --- MELODY  ---

$: n(`< 
[
[f3@10 - e3@1 f g a3] [e3@10  - - e3@1 f g a3] [d3@10  - e3@1 f g a3] 
[f3@10  - e3@1 f g a3] [e3@10  - - e3@1 f g a3] [d3@10  - e3@1 f g a3] 
[a#3@10  - g3@1 A3 A#3 D4] [c4@10  - d4@1 c4 a#3 a3] [f3@10  - a#3@1 a3 g3 f3] [e3@16] 
]>/10`)
  .s("gm_flute")
  .scale("F:major")
  .trans(12)
  .delay(slider(0.197))
  .room(2)
  .orbit(3)
  .gain(slider(0.9,0,2,0.1))
  .color("red")._pianoroll()

$: n(`< 
[
[f3@10 - - e3@1 f g a3] [e3@10  - - e3@1 f g a3] [d3@10  - - e3@1 f g a3] 
[f3@10  - - e3@1 f g a3] [e3@10  - - e3@1 f g a3] [d3@10  - - e3@1 f g a3] 
[a#3@10  - - g3@1 A3 A#3 D4] [c4@10  - - d4@1 c4 a#3 a3] [f3@10  - - a#3@1 a3 g3 f3] [e3@16] 
]>/10`)
  .s("gm_choir_aahs")
  .scale("F:major")
  .trans(24)
  .delay(slider(0.197))
  .attack(.3)
  .room(2)
  .orbit(3)
  .gain(slider(0.5,0,1,0.1))
  .color("red")._pianoroll()

// --- HARMONY  ---

$: n("< [0 8 0@2 ]>")
  .velocity("[1 0.7]")
  .set(chords)
  .s("gm_string_ensemble_1")
  .voicing()
  .delay(slider(0.324))
  .orbit(3)
  .attack(.1)
  .room(1.5)
  .gain(slider(0.5,0,1,0.1))
  .color("orange")._pianoroll()
 
// --- ARP  ---

$: n("4 5 [7 9] 7")
  .set(chords)
  .voicing()
  .dec(.2)
  .delay(slider(0.769))
  .gain(slider(0.7,0,1,0.1))
  .color("green")._pianoroll()

