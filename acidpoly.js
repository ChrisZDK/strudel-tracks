//"Acid Poly" @by Pink Chaos

setCpm (132/4)

register('o', (orbit, pat) => pat.orbit(orbit))

setGainCurve(x => Math.pow(x, 2))

register('acidenv', (x, pat) => pat.lpf(200).lpenv(x * 12).lps(.4).lpd(.12))

const KICK_ON = 1
const CLAP_ON = 1
const RIDE_ON = 1

const BASS_ON = 1
const LEAD1_ON = 1
const LEAD2_ON = 1
const PAD_ON = 1
const ARP_ON = 1

$: s("bd:4!4")
  .duck("3:4:5:6:7:8")
  .duckdepth(.4)
  .duckattack(.12)
  .postgain(KICK_ON ? .8 : 0)
  //.color("yellow")._scope()
$: s("[- hh]*4")
  .gain(.65)
  .delay(.4)
  .room(.1)
  //.o(5)
  //._scope()

$: s("[- cp]*2")
  .postgain(CLAP_ON ? .45 : 0)
  .delay(.4)
  .room(.2).rsize(2)
  //.o(8)
  //._scope()

$: s("[- oh]*4")
  .when(RIDE_ON, 
x => x.gain(0.3)
  .room(0.2)
  .delay(0.25))
  //._scope()

$: note("<5 4 0 9 7>*16")
  .late(.01)
  .scale("e:minor")
  .s("sawtooth")
  .acidenv("<.1 .2 .3 .35 .4 .35 .3 .2>/8")
  .room(.6).rsize(.8)
  .o(3)
  .postgain(LEAD1_ON ? .75 : 0)
  //.color("cyan")._punchcard()

$: note("<7 9 11 12>*8")
  .scale("e:minor")
  .s("supersaw")
  .lpf(1200)
  .attack(0.05)
  .release(0.9)
  .room(0.7).rsize(2)
  .postgain(LEAD2_ON ? .4 : 0)
  .o(6)
  //.color("#00FFD6")._punchcard()

$: note("<0>*16").scale("e:minor").trans("<-24 -21>/4")
  .detune(rand)
  .s("supersaw")
  .acidenv("<.2 .3 .4 .5 .5 .4 .3 .2>/8")
  .o(4)
  .postgain(BASS_ON ? .75 : 0)
  //.color("magenta")._punchcard()

$: every(4, x =>
     x.lpf(1400).room(0.9),
   chord("<Em G>/4")
  .mode("above:c4")
  .s("gm_pad_halo")
  .voicing()
  .hpf(500)
  .lpf(900)
  .attack(0.4)
  .release(3.0)
  .room(0.7)
  .rsize(4)
  .postgain(PAD_ON ? 0.35 : 0))
  //.color("orange")._punchcard()

const chaos3Osc = pat =>
  stack(
    pat.s("sawtooth"),
    pat.s("sawtooth").add(7),
    pat.s("triangle").sub(12),
    pat.s("noise").hpf(4000).lpf(9000).gain(0.08)
  )
    .lpf(1200)
    .attack(0.02).decay(0.5).sustain(0.8).release(1.0)
    .shape(0.25)
    .room(0.5)
    .rsize(3)
    .postgain("<.1 .2 .25 .3 .3 .25 .2>/8")

$: chaos3Osc(
    note("<[5 [4@3.5 0@4.5] 9 4]!3 [5 [4@3.5 0@4.5] 9@2]>/4"))
  .scale("e:minor")