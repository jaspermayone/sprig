
/* 
@title: Mom,_have_you_seen_Coco?
@author: Lillian Curi
@tags: []
@img: ""
@addedOn: 2024-05-10
*/
    const select = ")"
    const character = "1"
    const character2 = "2"
    const character3 = "3"
    const character18 = "4"
    const character5 = "5"
    const character6 = "6"
    const character7 = "7"
    const character8 = "8"
    const character9 = "9"
    const character10 = "a"
    const character11 = "b"
    const character12 = "c"
    const character13 = "d"
    const character15 = "f"
    const character16 = "g"
    const character17 = "^"
    const sand = "!"
    const water = "@"
     
    const coco = "w"
    const hiddenCoco = "*"

    const blackBlock = "h"
    const greyBlock  = "i"
    const lightGreyBlock = "j"
    const whiteBlock = "k"
    const redBlock = "l"
    const brownBlock = "m"
    const darkBlueBlock = "("
    const cantName = "o"
    const yellowBlock = "p"
    const grayYellowBlock = "q"
    const lightGreenBlock = "r"
    const greenBlock = "s"
    const pinkBlock = "t"
    const purpleBlock = "u"
    const orangeBlock = "v"

    const background = "#"
  
    const korokPoop = "$"
    const korok = "%"
    
//music
    const up = tune`
500: A4^500,
15500`
    const down = tune`
500: A4^500,
15500`
    const left = tune`
500: A4^500,
15500`
    const right = tune`
500: A4^500,
15500`
    const winMusic = tune`
192.30769230769232,
192.30769230769232: G4~192.30769230769232 + C4~192.30769230769232 + C5^192.30769230769232,
192.30769230769232: D5^192.30769230769232,
192.30769230769232: G4~192.30769230769232 + C4~192.30769230769232 + C5^192.30769230769232,
192.30769230769232: C4~192.30769230769232 + C5^192.30769230769232 + G4^192.30769230769232,
192.30769230769232: E4~192.30769230769232 + C5^192.30769230769232 + D4^192.30769230769232,
192.30769230769232: C5^192.30769230769232,
192.30769230769232: E4~192.30769230769232 + C4~192.30769230769232 + D4^192.30769230769232,
192.30769230769232: C5^192.30769230769232,
192.30769230769232: F4~192.30769230769232 + C4~192.30769230769232 + D5^192.30769230769232,
192.30769230769232: G4~192.30769230769232 + C4~192.30769230769232 + E5^192.30769230769232,
192.30769230769232: G4^192.30769230769232,
192.30769230769232: A4~192.30769230769232 + D5^192.30769230769232,
192.30769230769232: B4~192.30769230769232 + C4~192.30769230769232 + D5^192.30769230769232,
192.30769230769232: E4^192.30769230769232,
192.30769230769232: C4~192.30769230769232 + D4^192.30769230769232,
192.30769230769232: C4~192.30769230769232 + D5^192.30769230769232,
192.30769230769232: B4~192.30769230769232 + C4^192.30769230769232,
192.30769230769232: A4~192.30769230769232 + D5^192.30769230769232,
192.30769230769232: G4~192.30769230769232 + C4~192.30769230769232 + C5^192.30769230769232,
192.30769230769232: F4~192.30769230769232 + B4^192.30769230769232,
192.30769230769232: E4~192.30769230769232 + C4~192.30769230769232,
192.30769230769232: C4~192.30769230769232 + D4^192.30769230769232,
192.30769230769232: E4~192.30769230769232 + B4^192.30769230769232,
192.30769230769232,
192.30769230769232: B4^192.30769230769232 + C4~192.30769230769232,
192.30769230769232: C4~192.30769230769232,
192.30769230769232: C4~192.30769230769232,
192.30769230769232: C4~192.30769230769232 + D5^192.30769230769232,
192.30769230769232: C4~192.30769230769232 + C5^192.30769230769232,
384.61538461538464`
    const unlocked = tune`
51.36986301369863,
51.36986301369863: F5-51.36986301369863,
51.36986301369863,
51.36986301369863: D5-51.36986301369863,
51.36986301369863,
51.36986301369863: G5-51.36986301369863,
51.36986301369863,
51.36986301369863: B5-51.36986301369863,
1232.876712328767`
    const failed = tune`
51.90311418685121,
51.90311418685121: C4-51.90311418685121,
51.90311418685121: C4-51.90311418685121,
51.90311418685121: C4-51.90311418685121,
51.90311418685121: C4/51.90311418685121,
51.90311418685121: C4-51.90311418685121,
51.90311418685121: C4-51.90311418685121,
51.90311418685121: C4-51.90311418685121,
1245.674740484429`
    /*const complete = tune`
500,
500: B4~500 + A4~500,
500: A4~500 + G4~500,
500: G4~500 + F4~500 + G5~500 + F5~500 + E5~500,
500: F4~500 + B5~500 + A5~500 + G5~500 + B4~500,
500: F4~500,
500: F4~500 + E4~500,
500: E4~500,
500: E4~500,
500: E4~500 + G5~500 + F5~500 + E5~500 + D5~500,
500: E4~500 + G5~500 + A4~500 + G4~500,
500: E4~500 + A5~500 + G4~500 + F4~500,
500: E4~500 + A5~500 + F4~500,
500: E4~500 + A5~500 + F4~500,
500: E4~500 + A5~500 + D4~500,
500: E4~500 + F4~500 + A5~500 + D4~500,
500: F4~500 + A5~500 + D4~500,
500: F4~500 + G4~500 + G5~500 + A5~500 + D4~500,
500: A4~500 + B4~500 + C5~500 + D5~500 + E5~500,
500: C4~500,
500: C4~500,
500: D4~500,
500: D4~500,
500: E4~500 + E5~500 + D5~500 + C5~500 + B4~500,
500: E4~500 + F4~500 + F5~500 + A4~500 + G4~500,
500: F4~500 + G4~500 + A4~500 + E5~500 + F5~500,
500: A4~500 + B4~500 + C5~500 + D5~500 + E5~500,
500: E4~500,
500: E4~500,
500: E4~500,
500: E4~500 + F4~500,
500: F4~500 + G4~500 + A4~500 + B4~500 + C5~500`*/
    const melody = tune`
179.64071856287424,
179.64071856287424: A4~179.64071856287424 + F4~179.64071856287424 + D5~179.64071856287424 + F5~179.64071856287424 + D4^179.64071856287424,
179.64071856287424: C4~179.64071856287424,
179.64071856287424: F4~179.64071856287424 + C4~179.64071856287424 + D5~179.64071856287424,
179.64071856287424: E4~179.64071856287424 + C5~179.64071856287424 + C4^179.64071856287424,
179.64071856287424,
179.64071856287424: F4~179.64071856287424 + D5~179.64071856287424 + C4~179.64071856287424,
179.64071856287424: A4~179.64071856287424 + F4~179.64071856287424 + D5~179.64071856287424 + F5~179.64071856287424 + D4^179.64071856287424,
179.64071856287424: C4~179.64071856287424,
179.64071856287424: F4~179.64071856287424 + D5~179.64071856287424,
179.64071856287424: A4~179.64071856287424 + F5~179.64071856287424 + C4^179.64071856287424,
179.64071856287424: G4~179.64071856287424 + C4~179.64071856287424 + E5~179.64071856287424,
179.64071856287424: F4~179.64071856287424 + D5~179.64071856287424 + C4~179.64071856287424,
179.64071856287424: G4~179.64071856287424 + E4~179.64071856287424 + E5~179.64071856287424 + C5~179.64071856287424 + D4^179.64071856287424,
179.64071856287424: C4~179.64071856287424,
179.64071856287424: E4~179.64071856287424 + C5~179.64071856287424,
179.64071856287424: E4~179.64071856287424 + C5~179.64071856287424 + C4^179.64071856287424,
179.64071856287424,
179.64071856287424: E4~179.64071856287424 + C5~179.64071856287424 + C4~179.64071856287424,
179.64071856287424: G4~179.64071856287424 + E4~179.64071856287424 + E5~179.64071856287424 + C5~179.64071856287424 + D4^179.64071856287424,
179.64071856287424: C4~179.64071856287424,
179.64071856287424: E4~179.64071856287424 + C5~179.64071856287424,
179.64071856287424: G4~179.64071856287424 + E5~179.64071856287424 + C4^179.64071856287424,
179.64071856287424: F4~179.64071856287424 + D5~179.64071856287424 + C4~179.64071856287424,
179.64071856287424: E4~179.64071856287424 + C5~179.64071856287424 + C4~179.64071856287424,
179.64071856287424: D5~179.64071856287424 + B4~179.64071856287424 + F4~179.64071856287424 + D4~179.64071856287424,
179.64071856287424,
179.64071856287424: B4~179.64071856287424 + C4~179.64071856287424,
179.64071856287424: B4~179.64071856287424 + C4~179.64071856287424,
538.9221556886228`
    const melody2 = tune`
122.95081967213115: C4~122.95081967213115 + G4^122.95081967213115 + B4^122.95081967213115 + G5^122.95081967213115,
122.95081967213115: F5^122.95081967213115 + B5~122.95081967213115,
122.95081967213115: G4^122.95081967213115 + E5^122.95081967213115 + B5~122.95081967213115,
122.95081967213115: C4~122.95081967213115 + B5~122.95081967213115,
122.95081967213115: B4^122.95081967213115 + D5^122.95081967213115 + C4~122.95081967213115,
122.95081967213115: B5~122.95081967213115,
122.95081967213115: B4^122.95081967213115 + E5^122.95081967213115 + B5~122.95081967213115 + F4~122.95081967213115,
122.95081967213115: C4~122.95081967213115 + F5^122.95081967213115 + B5~122.95081967213115 + E4~122.95081967213115,
122.95081967213115: G4^122.95081967213115 + B4^122.95081967213115 + C4~122.95081967213115 + D4~122.95081967213115,
122.95081967213115: G5^122.95081967213115,
122.95081967213115: G4^122.95081967213115 + B5~122.95081967213115,
122.95081967213115: C4~122.95081967213115 + D5^122.95081967213115 + B5~122.95081967213115,
122.95081967213115: C4~122.95081967213115,
122.95081967213115: A4^122.95081967213115 + C5^122.95081967213115 + B5~122.95081967213115,
122.95081967213115: G4^122.95081967213115 + D5^122.95081967213115 + B5~122.95081967213115,
122.95081967213115: F4^122.95081967213115 + C4~122.95081967213115 + B5~122.95081967213115,
122.95081967213115: E4^122.95081967213115 + C4~122.95081967213115 + B4^122.95081967213115,
122.95081967213115: C5^122.95081967213115,
122.95081967213115: D5^122.95081967213115 + B5~122.95081967213115,
122.95081967213115: C4~122.95081967213115 + E4^122.95081967213115 + G4^122.95081967213115 + E5^122.95081967213115 + B5~122.95081967213115,
122.95081967213115: B4~122.95081967213115,
122.95081967213115: B4~122.95081967213115 + B5~122.95081967213115 + E4~122.95081967213115,
122.95081967213115: B5~122.95081967213115 + D4~122.95081967213115,
122.95081967213115: B5~122.95081967213115 + C4~122.95081967213115,
122.95081967213115: C4~122.95081967213115 + E4^122.95081967213115 + G4^122.95081967213115 + B4^122.95081967213115,
122.95081967213115: C4~122.95081967213115 + C5^122.95081967213115 + B5~122.95081967213115,
122.95081967213115: D5^122.95081967213115 + B5~122.95081967213115,
122.95081967213115: C4~122.95081967213115 + G4^122.95081967213115 + E4^122.95081967213115 + E5^122.95081967213115 + B5~122.95081967213115,
122.95081967213115: C4~122.95081967213115 + B4~122.95081967213115,
122.95081967213115: C4~122.95081967213115 + B4~122.95081967213115,
122.95081967213115: B5~122.95081967213115,
122.95081967213115: E4^122.95081967213115 + C4~122.95081967213115 + B5~122.95081967213115`
    const originalMusic = tune`
142.85714285714286: C4~142.85714285714286 + B4~142.85714285714286,
142.85714285714286: D4^142.85714285714286 + B4^142.85714285714286,
142.85714285714286: D4^142.85714285714286 + E5^142.85714285714286 + C5^142.85714285714286,
142.85714285714286: C4~142.85714285714286 + D5^142.85714285714286,
142.85714285714286: C4~142.85714285714286 + E5^142.85714285714286 + A5^142.85714285714286,
142.85714285714286: D4^142.85714285714286 + C5~142.85714285714286 + A4~142.85714285714286 + A5~142.85714285714286,
142.85714285714286: D4^142.85714285714286 + E5^142.85714285714286,
142.85714285714286: C4~142.85714285714286 + C5~142.85714285714286 + A4~142.85714285714286 + A5~142.85714285714286,
142.85714285714286: E5^142.85714285714286 + A5^142.85714285714286,
142.85714285714286: D4^142.85714285714286 + C5~142.85714285714286 + A4~142.85714285714286 + A5~142.85714285714286,
142.85714285714286: D4^142.85714285714286 + E5^142.85714285714286,
142.85714285714286: C4~142.85714285714286 + C5~142.85714285714286 + A4~142.85714285714286 + A5~142.85714285714286,
142.85714285714286: E5^142.85714285714286 + A5^142.85714285714286,
142.85714285714286: D4^142.85714285714286 + D5^142.85714285714286,
142.85714285714286: D4^142.85714285714286 + C5^142.85714285714286 + G4~142.85714285714286 + A5~142.85714285714286,
142.85714285714286: B4^142.85714285714286 + G4~142.85714285714286 + E5~142.85714285714286,
142.85714285714286: C4~142.85714285714286 + F5~142.85714285714286 + B5^142.85714285714286,
142.85714285714286: D4^142.85714285714286 + B4^142.85714285714286 + G5~142.85714285714286,
142.85714285714286: D4^142.85714285714286 + B4^142.85714285714286 + G4~142.85714285714286 + F5~142.85714285714286,
142.85714285714286: B5^142.85714285714286,
142.85714285714286: A4^142.85714285714286 + E5~142.85714285714286 + A5^142.85714285714286,
142.85714285714286: D4^142.85714285714286,
142.85714285714286: D4^142.85714285714286 + A4^142.85714285714286 + D5~142.85714285714286,
142.85714285714286: C5~142.85714285714286,
142.85714285714286: C4~142.85714285714286,
142.85714285714286: C4~142.85714285714286 + D4^142.85714285714286 + E5^142.85714285714286,
142.85714285714286: D4^142.85714285714286 + A4^142.85714285714286,
142.85714285714286: F4~142.85714285714286,
142.85714285714286: C4~142.85714285714286,
142.85714285714286: D4^142.85714285714286,
142.85714285714286: D4^142.85714285714286 + A4^142.85714285714286,
142.85714285714286: C4~142.85714285714286 + F4~142.85714285714286`
    const MOREMUSIC = tune`
100.33444816053512,
100.33444816053512: C4~100.33444816053512,
100.33444816053512: A5~100.33444816053512 + D5^100.33444816053512 + C4~100.33444816053512,
100.33444816053512: G5~100.33444816053512 + C5^100.33444816053512,
100.33444816053512: F5~100.33444816053512 + B4^100.33444816053512,
100.33444816053512: E5~100.33444816053512 + A4^100.33444816053512 + C4~100.33444816053512,
100.33444816053512: D5~100.33444816053512 + C4~100.33444816053512 + G4^100.33444816053512,
100.33444816053512: C5~100.33444816053512 + F4^100.33444816053512,
100.33444816053512: F4^100.33444816053512,
100.33444816053512: C4~100.33444816053512,
100.33444816053512: C4~100.33444816053512 + E4^100.33444816053512 + B4~100.33444816053512,
100.33444816053512: E4^100.33444816053512,
100.33444816053512,
100.33444816053512: C4~100.33444816053512 + B4~100.33444816053512,
100.33444816053512: C4~100.33444816053512,
100.33444816053512,
100.33444816053512: G4~100.33444816053512,
100.33444816053512: C4~100.33444816053512 + A4~100.33444816053512 + F4~100.33444816053512 + E4^100.33444816053512,
100.33444816053512: C4~100.33444816053512 + B4~100.33444816053512 + E4^100.33444816053512,
100.33444816053512,
100.33444816053512: G4~100.33444816053512,
100.33444816053512: C4~100.33444816053512 + A4~100.33444816053512,
100.33444816053512: C4~100.33444816053512 + B4~100.33444816053512,
200.66889632107024,
100.33444816053512: C4~100.33444816053512,
100.33444816053512: C4~100.33444816053512,
200.66889632107024,
100.33444816053512: C4~100.33444816053512,
100.33444816053512: C4~100.33444816053512,
100.33444816053512`

const playback = playTune(melody2, Infinity)

setLegend(
    [ select, bitmap`
3333333333333333
3333333333333333
33............33
33............33
33............33
33............33
33............33
33............33
33............33
33............33
33............33
33............33
33............33
33............33
3333333333333333
3333333333333333`],
  
    [ coco, bitmap`
................
................
................
.....C....C.....
....CC....CC....
....88C..C88....
....CCCCCCCC....
..1.C0CCCC0C.1..
...11CCCCCC11...
...1CCC88CCC1...
..1..CCCCCC..1..
......CCCC......
....CCCCCCCC....
...CCCCCCCCCC...
...CCCCCCCCCC...
..CCCCCCCCCCCC..`],
    [ hiddenCoco, bitmap`
CCCCCCCCCCCCCCCC
CCCC0CCCCCCC0CCC
CCCCCCCCCCCCCCCC
CCCCCCC00CCCCCCC
CCCCCCCCCCCCCCCC
CCCC88CCCC88CCCC
CCCCCCCCCCCCCCCC
CC1CC0CCCC0CC1CC
CCC11CCCCCC11CCC
CCC1CCC88CCC1CCC
CC1CCCCCCCCCC1CC
CCCCCCCCCCCCCCCC
CCCCCCC00CCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`],
  
	[ character, bitmap`
................
................
............999.
..CC...CCC..9C9.
.CC9999C9C9..99.
C999999999C9999.
C999999999C999..
C02999029CC999..
.02L99029C9999..
.9909999999999..
.9030909999999..
..93309999999...
...9999999.99...
...99..99.......
.......99.......
................` ],
    [ character2, bitmap`
................
......9999......
.....966669.....
....96696669....
...9666996669...
...9969296969...
...9929292996...
...9020220299...
....02222220....
.....022220.....
......0220......
....LLL22LLL....
...LL1L11L1LL...
...L11L22L11L...
...L11L22L11L...
...L11L22L11L...` ],
    [ character3, bitmap`
................
................
....DDDDDDDD....
...D44444444D...
..D4466666644D..
..D46444444644..
..464D4444D46D..
.D64D2D44D2D464.
.46D202DD202D64.
.66220222202266.
.66088222288066.
.66022222222066.
..D0022222200D..
..D4002222004D..
..D4400000044D..
.D444444444444D.` ],
    [ character5, bitmap`
................
................
................
.....00..00.....
....00000000....
....00066000....
....06266260....
....66766766....
....60666606....
....66222266....
.....666666.....
......L..L......
....LL....LL....
...L.L....L.L...
...6LL....LL6...
..66.L....L.66..`],
    [ character6, bitmap`
................
....FFFFFFFF....
...F66666666F...
...F666666666F..
..F666FFF6666F..
..F66FF6FF666FF.
..F6FF666FF666F.
..F6F66666F666F.
..F6FF6F66F666F.
..F66FFF66F666F.
.FF6666666F666F.
.F6666666FF666F.
.F666666FF6666F.
FF666FFFF666FFF.
FFFFFFFFFFFFF...
................`],
    [ character7, bitmap`
................
................
.08885555558880.
508.57777775.805
7085777777775807
7757757777577577
7757725775277577
7577525775257757
7577202552027757
7752202222022577
77L8822222288L77
775L22222222L577
775L22222222L577
775.LL2222LL.577
775..LLLLLL..577
775..........577`],
    [ character8, bitmap`
................
................
.......FFF......
......F666FF....
....FF66F666F...
...F666666666F..
..F6666666F66F..
.F66666F66F66F..
.F6F666F66666F..
.F6F666666666F..
.F666666666F6F..
.FFFF66666666F..
.....FFFFFFFFF..
................
................
................`],
    [ character9, bitmap`
................
....D......D....
...DD......DD...
...DDD....DDD...
..DDDDD..DDDDD..
..DD22DDDD22DD..
..D2202DD2022D..
..D22202222D2D..
...D20222202D...
...D22L22L22D...
....D22LL22D....
....DD2222D.....
.....DDDDD......
....D22222D.....
...DDDD2DDDD....
..DDDDDDDDDDD...`],
    [ character10, bitmap`
HHHH....H...H...
HHHHHH.HH..HH...
HHHHHHHHHH000...
HHHHHH00HH220...
.HHHH022HHH20...
.HH0H2222HH220..
..0022222HH220..
.0222222222220..
00222222222220..
22022222222220..
2002222222220...
20.0222222220...
200000222200....
2220..0000......
000.............
................`],
    [ character11, bitmap`
........8.......
.......88.......
......3888......
......3888......
.8...388888.....
.8888888888888..
.8888888888888..
..8888888888888.
....88888888..8.
....88888888....
....88888888....
...8888.33888...
...8888...388...
..8883....888...
................
................`],
    [ character12, bitmap`
................
..9.3.3.........
.....333........
.....333333..9..
...933933333....
...3399333933...
.9.33999399939..
..339969399933..
..399669996993..
..399666666993..
..399666666993..
...3996776933...
..CC3333333C....
CCCCCC.CCCCCC...
CCCC..CCC.CCCC..
.C....CCC.CCCC..`],
    [ character13, bitmap`
................
................
......7777......
....77722777....
...7722277577...
...7667777757...
..772777775557..
..777777775557..
..757777775557..
..775777775557..
..775555555577..
...7755555H57...
....775HHHH7....
.....777777.....
................
................`],
    [ character15, bitmap`
................
......CCCC......
....CCCCCCCC....
...CCCCCCCCCC...
...CCCC6CCCCC...
..CCCCC66CCCCC..
..CC60666606CC..
..CC66666666CC..
..CC66600666CC..
..CC06666660CC..
..CC00000000CC..
..CC00000000CC..
...6600000066...
....00000000....
.....777777.....
....00000000....`],
    [ character16, bitmap`
................
.....CCCCCC.....
....CCCCCCCC....
...CCCCCCCCCC...
...C00000000C...
...066206620C...
...0606060600...
...C00060000C...
...CC860068CC...
...CCFFFFFFCC...
...CC222222CC...
...88C222288C...
...C82222281....
....11111111....
.....777777.....
....00000000....`],
    [ character17, bitmap`
................
....CCCCCCCC....
...CCCCCCCCCC...
..CCCCCCCCCCCC..
..CCCCCCCCCCCC..
.CCC66266662CCC.
.CCC60666606CCC.
.CCC66666666CCC.
..CCF660066FCC..
...CCFFFFFFCC...
....HHHHHHHH....
...HHHHHHHHHH...
...66HHHHHH66...
....HHHHHHHH....
.....555555.....
....00000000....`],
    [ character18, bitmap`
................
....CCCCCCC.....
..CCCCCCCCCC....
...CCC666CCCC...
...F66666666F...
...F60666606F...
...F66666666F...
...F66666666F...
....F660066F....
.....FFFFFF.....
....77777777....
...5777777775...
...5577777755...
....77777777....
.....111111.....
....00000000....`],
   
    [ background, bitmap`
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
    [ blackBlock, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`], 
    [ greyBlock, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
    [ lightGreyBlock, bitmap`
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111`],
    [ whiteBlock, bitmap`
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
    [ redBlock, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333`],
    [ brownBlock, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`],
    [ cantName, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`],
    [ darkBlueBlock, bitmap`
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555`],
    [ yellowBlock, bitmap`
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666`],
    [ grayYellowBlock, bitmap`
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF`],
    [ lightGreenBlock, bitmap`
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444`],
    [ greenBlock, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD`],
    [ pinkBlock, bitmap`
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888`],
    [ purpleBlock, bitmap`
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH`],
    [ orangeBlock, bitmap`
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999`],
    
    [ sand, bitmap`
6666666666666666
6FF6666666666666
666666666666FFF6
66666666666FF666
6666666666FF6666
666666F6FF666666
6666666FF6666666
6666666666666666
6666666666666666
6666666666666666
66666666666666FF
6FF6666666666666
66FFFF6666666666
666666FFF6666666
6666666666666666
6666666666666666`],
    [ water, bitmap`
7557777777777777
7777777777777777
7777777555557777
7777755777757777
7775557777777777
7557777777777777
7777777777777777
7777777777777757
7777777777777557
7775557777777777
7777755555777777
7777777777555757
7777777777775557
7577777777777777
7777777777777777
7777777777777777`],
    
    

    [ korokPoop, bitmap`
................
................
................
.......0........
......020.......
.....0620.......
....CC22C.......
....06620C......
...CC6626CCC....
...C6662266CC...
...C6F6666F6C...
...C6FFF6FF6C...
...CC66FFF60C...
....CC06600C....
.......C00......
................`],
    [ korok, bitmap`
................
...........F....
..........FF....
.....F....F6....
....66FFFF66....
....CCCCCCCC....
...CCCCCC0CCC...
.00CC0CCCCCCC...
...CCCC0C0CCFF..
....FCC0006FF...
...FF666666F....
..FFF666666F....
....FF6666FF....
.....F6FF6F.....
.....FF..FF.....
................`]
 )

/*setSolids([ player, player2, wall, lock, box ])*/

let level = 0;
const levels = [
    map`
)..............
...............
...............
...............
...............
.......w.......
...............
...............
...............
...............
...............
...............`, // title screen
    map`
)2ad5639da3
6d92bc7$26b
a3c6d2c8$7d
5b85ab$da52
c2$3d68bc9c
8$9.7a2a928
d6cb2d6c6d9
7$a598$5d3$
b28d$26b$8a
3$93bwd72c6`, // character search
    map`
)89b27a9aa19
aa9a6aa3da5a
51d9ada$aa9a
96ab98a19dab
ab57aabaa6aa
22992ad9199a
a8ba97693873
3ada59a2ba2a
792$a19a95da
a1aa99wa19a6
ad35ba9ada9a
$a2a972aa3a$`, // character search 2
    map`
)$..aa....6...55..c.
.2a1..6.a..5.c.$.6c.
cc..$98.c9.211.2aa..
6..a..$...9..122.a..
.a6.85.9269.$.6.....
5.11.......15.cc6c5.
...2.85$8.5.22.....9
.8a5..2....5..6a2...
6.a..8.199$5...a..a.
..9.6..1...a.33.$.2.
55.$.3..a.3.$c9....5
..3.13.c...c....1.6.
5..2....a.6.a.551c..
...2.a2$2.5..$.6..a.
.1....5.c..13.......
w.6.39.$.2...5c.2..6
...c...5...6.c...c..`, // bigger chracter search
  	map`
)p!!ppp!!!!11!p!3!!!!8!!!!!!
9pap!aa!pp!pp!pp!!!!!8pp!!!!
!p!!!!!!!!p!!8pp!1pp!!!p1p8p
!pp1pp2!!!!!pp!pp!!!!!p!p!%!
!p!!!!!ppp1p!3!!!2a!!7p!!!w!
!!!8p!!c!pp3!!p!pp!!ppp!!pp!
a!p!$pp2p!ppp!82pp!!p!!p!3!!
!pp!!!!p7!!!ppp!p!!pq$!pqq!!
!!p!pppppp!p!!p!q!pp!!c!pc!!
!1ppp1!%p!ap$!pap2!!pqqp!!qq
!p8!!!pp!pp!!!!pp!2ppq!!7qqq
!!!ppppp1!pp1pp8!!!p!!ppqqkq
pppp2!!!!!!!qq!!!qqqpp!%kk2q
!a8ppp!!p!qq!!qqq$qqqqqqqk2o
qqqq!!1qq!ppqqqqakkkq1qqk@@@
!!!!pqqqp!qqcqkkk@kkkkkk@9@@
p!pqq$kp!qqckk@k@@@@@@@@oo@@
qkkkp!.kkkqkk@kk9o@oo@ooookk
qqqaqqkkq7k@kko@@2oooooo7ko@
kkqqqqqqkkkk%@kk@2@@@@@@$oo@
@k@@kkkk@kkk3ooook@@a@@o$oo@
@okk@ook@o@k@@@@@@o@o@o@aoo@
2oooo@@@oo@oooo2@@@@@o2@@o@@
@oo@@@2@@@7@@9@@@@@o7o@@@a@@
@@ooooooo@@o@oo@9oo@@@@o@@@@
@@@@@7@@22@@@@a@o@o@@@2ooo@@
@ooo@ooo@o@@@@@@@ooo@ooo@@@@`, // beach character search
    map`
)ooooooooooooooooooooooooo
oooooooooooooooooooooooooo
oooooooooooooooooooooookk#
ooooooooooooooooooooookkkk
oooookkkooooooooooookkkssk
oookkkkkkkooooooooosssssks
osskkksskssooooooossssssss
ssssssssssssooooosssssssss
sssrsssskssssooosssskssssk
ssrkssskrsssssssssssrksssr
skrrrsrrrrsssssssssrrrssrr
srrssssmmspsssssssssmss#rm
rrrr......m4g^f.......rrr.
.m*...................rrr.
.......................m..
.................jjjj.....
.jj........jjjjjj.........
...jj....................j
....jjjjj.................
..........................
....................jj....
...............jjjjj......
...........jjjjj..........
..........j...............
..........................`, // south park scene search
  	map`
)oooooooooooooooooooooooooooooooooooooooooooooooooooorrrrrrrrrrrrrrrrrrrrrrr
o.....ooooooooooooooooooooooooooooooooooooooooooooooorrrrrrrrrrrrrssrsrsrrrr
......ooooooooooooooooooooooooooooooo.ooooooooooooorrrrrrrrsrsrrrrrsrrrssrrr
k........oooooooooooookoooooooooooo....oooooooooooorrrrrrrrrrtrrrrrrrrssrsrr
.kk.k.....ooooooooooooooooooooooooo......ooooooooorrrrtrrrrrrrrrrrrrrrrssssr
.k...kkk..oooooooooooooooooooooooo.......oooooooorrrrrrrrrrrrrrrrrrrrrrsssss
.......kk.oooooooooooooooooooooooo......koooooooorrrrrrrrrrsrsrrssrrrrssssss
..........kooooooooooooooooooooooo......k......oosrrrrrrrssrsrssrsssrsssstss
..........kkkkooooooooooooooooo.......kk.......oosrrrrrrrrrrrrrsssssssssrrrs
....k........kooooooooooooooo.........kkk.........srrrrssrrrrrrrsrrssssssssr
.......kk..k.kkoooooooooooooo........kkkk.........ssssrssrrrrrrsssssssssssss
k.............k....oooooooooo........k.k...........srsrsssrrrrrsssssssssssss
kkk..........kkk......ooooo.k.......k..k.....k.....ssrssssrrrrssssssssssssss
kk...........kk......oooo.....k....k...k.......kkk..srsrsssssstsssssssrrssrs
oooooooooooooooooooooo..k.......k.kk...k......kkk..sssssssssssssssssssssrsrs
ooooooooooooooooooooooooooooooooooooooooooooooooooosssssssssssssssssssssstrs
ooooooooooooooooooooooooooooooooooooooooooooooooooosssssssssssssssssssssssss
ooooooooookoooooooooooooooooooooooooooooooooooooooooosssssssssssssssssssssss
ooooooooooooooooooooooooooooooooooooooooooooooooooooooosooioosssssoossssssss
ooooooooooooooooooooooooooooooooooooooooooookkooooooooooooioooooioooosssssss
ooooooooooooooooooooooooooooooooooooooookkk.k..oooooooooooioooooioooossmmmms
oooooooooooooooooooooooooooooooooooooookk.kk...oooooooooooioooooioooooommmms
ooooooooooooooooooooooooooooo.k...oookokkk.....oooooooooooioooooioooooommmmm
oooooooooooooooooooookooooookkk...ookkkkk......oooooooooooioooooioooooommmmm
ooooooooooooooooooooooooooo...kk..kk.k.k........o.....ooooioooooioooooommmmm
oooooooooooooooooooooooooookk.kk..k....kk.............ooooioooooioookoommmmm
ooooooooooooooooooooooooooo.k..k.kk..k.k...............oooioooooioooooommmmm
oooooooooooooooooooooooo..kkk...k......k.k.............oooioooooioooooommmmm
oooooookoooooooooooooooo..k.k..k........k........k.....oooioooooiooooooommmm
oooooooooooooooooooooo....kkkkkk.......kk.......k.......koioooooiooooooommmm
ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooioooooiooooooommmm
ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooioooooiooooooommmm
ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooioooooiooooooommmm
ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooimmmmmioooooommmmm
oooooooooooooooooooooooooooooooooooooooooooooooooooooooooommmmmmmoooooommmmm
ooommmmmmmmmmmmmmmmmmmmmmmmoooooooooooooooooooooooooooooooooooooooooooommmmm
sssmmqmmqmmqmmqmmqmmqmmqmqmsssqqqqqqqqqqqssssssssssssssssssssssssssssssmmmmm
sssmmqmmqmmqmmqmmqmmqmmqmqmqqqqqqqqssssssssssssssssssssssssssssssssssssmmmmm
sssmmmmmmmmqmmqmmqmmqmmmmqmqqqqqssssssssrssssssssssssssssssssssssssssssmmmmm
sssmmmmmqmmqmmqmmqmmqmmqmqmqqqqqqssssssssrssssssssssssrsssssrsssrsssssmmmmmm
sssmmqmmqmmmmqmmmqmmqmmqmqmqqqqqqqqssssssssssrssrsssssrsssssssssssssmsmmmmmm
sssqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqsssssssssssssssssssssssssssssssmmmmmssm
ssmmmmmmmmmmmmmmmmmmmmmmmmmqqqqqqqqqqqsssssssssssssssssssssssssssssssmssssss
smmmmmmmmmmmmmmmmmmmmmmmmmmqqqqqqqqqqqqqsssssssrssssssssssrsssssssrssmssssss
qqqqmmmmmmmmmmmmmmmmmmqqq*mqqqqqqqqqqqqqsssssssrsssssssssssssssssssssrssssss
mmsmmssssssssssssssssssmmmmqqqqqqqqqqqqqsssssssssssrsrssssssssssssssssssssss
mmsmmssssssssssssssssssmmmmqqqqqqqqqqqqqssssrsssssssssssssssssssssssssssssss
mmsssssssssssssssssssssmmsqqqqqqqqqqqqqqsssssssssssssssssssssssssssssmssssss
mmsssssssssssssssssssssmmsqqqqqqqqqqqqqqssssssssssssssssssssssssssssssssssss
mmqqqssssssssssssssssssmmqqqqqqqqqqqqqqqsssssqqqqqqqqqqqqqqqqqqqqqqqqsssssqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqssqqqqqqqqqqqqqqqqqqqqqqqqqqmqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqooqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqoooqqqqqqqqqqqqqqqqqqqquuuuqqq
qqqqqqqqpppppqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqroooqqqqqqqqqqqqqqqqqqqquuuuuq
ssssssqqqpmppsssssssssssssssssssssssssqqqqqqsrsooossssssssssssssssssssquuqqs
ssssssspsppprssskksssssssssssssssstsssssssssrssssssssttsssssssssssssssrrssss
skksssssspsssrskksssssssstssssssttsssssssrsssssssssssttttssssssrrsssssrsssss
sssssssssssssrsrkkssssssstssssssssssssssssrrsrrsssssssstssssssssrrssssrsksss
sssssssssssssrrssssssstttttsssssssssksssssrrrsssssssssssssssssssssrrsrrskkks
sssssssssssssrrsssssssstttttssllllssskksssssssssssssssssssssssssstrsrsrsssss
sssstttsssssssssssssssssstrrssslllsssssssssssssssssskssssssssssssttsssrsssss
sssssssssssssssssssssssssssrrssrsssssssssssssssssskskskkssssssssssssssrsssss
sssssssssssssskkssssssssssssssrsssssssssssssssssssssssssssssssssssssssssssss
sssssssssssssssssssssssssssssrrsssssssssssssssssssssssssssssssssssssssssssss`, //big nature scene
];
 /*map`
)1c5a36c2a3
76271921c61
25c5a61935c
191a2538182
269281a7269
535a6c35a71
c17171913c3
263c392962c
95129285391
13956c57185
72w13926136`,*/
setBackground(background);

setMap(levels[level]);

setPushables({
	
});

addText("my cat ran away!", {
  y: 0, x : 3, color: color`0`
});

addText("help!", {
  y: 2, x: 8, color: color`L`
});

addText("find her amongst", {
  y: 11, x: 2, color: color`0`
});

addText("the chaos!", {
  y: 12, x: 5, color: color`0`
});

addText("Find Coco!!",{
      y: 5, x: 5, color: color`H`
});

addText("-----------",{
  y: 6, x: 5, color: color`H`
});

 addText("press 'k'",{
    y: 14,
    x: 5,
    color: color`H` 
});

onInput("k", () => {
  clearText();
  addText("w - up a - left", {
    y: 5,
    x: 3,
    color: color`H`
  });
   addText("s - down d - right", {
    y: 11,
    x: 1,
    color: color`H`
  });
  addText("press 'i'",{
    y: 14,
    x: 5,
    color: color`H` 
  });
  addText(" - select",{
    y: 0,
    x: 2,
    color: color`H` 
  });
});

onInput("i", () => {
  clearText();
});

//allow player to move
//player 1
onInput("w", () => {
	getFirst(select).y -= 1 //up
    playTune(up);
  
})

onInput("s", () => {
	getFirst(select).y += 1 //down
    playTune(down);
})

onInput("d", () => {
	getFirst(select).x += 1 //right 
    playTune(right);
})

onInput("a", () => {
	getFirst(select).x -= 1 //left   
    playTune(left);
})


// levels advance
afterInput(() => {
  
  const goalsCovered = tilesWith(select, coco).concat(tilesWith(select, coco));

  if(goalsCovered.length >= 2){
    addText("She escaped!", {y: 4, x: 4, color: color`0`
     });
    playTune(unlocked);
    level = level + 1;

    if(level < levels.length){
      setMap(levels[level]);
    } else{
      addText("You Caught Her!",{
      y: 4, x: 4, color: color`3`});
    } 
  }
})

afterInput(() => {  // find hidden coco
  
  const goalsCovered = tilesWith(select, hiddenCoco).concat(tilesWith(select, hiddenCoco));

  if(goalsCovered.length >= 2){
    playTune(unlocked);
    level = level + 1;

    if(level < levels.length){
      setMap(levels[level]);
    } else{ 
      addText("You Caught Her!",{
      y: 4, x: 4, color: color`3`});
      addText("Thank you!", { y: 7, x: 4, color: color`3`
      });
    } 
  }
});

const currentLevel = levels[level];

 if (currentLevel !== undefined) {
      setMap(currentLevel);
    } else {
      addText("You finally found Coco!", { y: 4, color: color`3` });
      playTune();
    }




