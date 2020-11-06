class Piece{
  constructor(dict) {
    this.name = dict['name'];
    this.bpm = dict['bpm'];
    this.chords = dict['chords'];
    this.scales = dict['scales'];
    this.music_dir = dict['music_dir'];
  }
}


let harmonicmajor = ['P1','M2','M3','P4','P5','m6','M7']
let hh = ['P1','m2','m3','M3','d5','P5','M6','m7']
let majorblues = ['P1','M2','m3','M3','P5','M6']

setting1 = {
  'name': 'Manha De Carnaval (Black Orpheus)',
  'bpm':140,
  'chords': [,
    //first round
    "Am",     ["Bm7b5", "E7b9"], "Am",          ["Bm7b5", "E7b9"],
    "Am",     ["Dm7",   "G7"],   "CM7",          "A7b9",
    "Dm7",     "G7",             "CM7",          "FM7",
    "Bm7b5",   "E7b9",           "Am",          ["Bm7b5", "E7b9"],

    "Am",     ["Bm7b5", "E7b9"], "Am",           "Am",
    "Em7b5",   "A7b9",           "Dm",           "Dm",
    "Dm7",    ["Bm7b5", "E7b9"],["Am", "Am7/G"], "FM7",
    "Bm7b5",   "E7b9",           "Am",          ["Bm7b5", "E7b9"],


    //second round

    "Am",     ["Bm7b5", "E7b9"], "Am",          ["Bm7b5", "E7b9"],
    "Am",     ["Dm7",   "G7"],   "CM7",          "A7b9",
    "Dm7",     "G7",             "CM7",          "FM7",
    "Bm7b5",   "E7b9",           "Am",          ["Bm7b5", "E7b9"],

    "Am",     ["Bm7b5", "E7b9"], "Am",           "Am",
    "Em7b5",   "A7b9",           "Dm",           "Dm",
    "Dm7",    ["Bm7b5", "E7b9"],["Am", "Am7/G"], "FM7",
    "Bm7b5",   "E7b9",           "Am",          ["Bm7b5", "E7b9"],


    //third round

    "Am",     ["Bm7b5", "E7b9"], "Am",          ["Bm7b5", "E7b9"],
    "Am",     ["Dm7",   "G7"],   "CM7",          "A7b9",
    "Dm7",     "G7",             "CM7",          "FM7",
    "Bm7b5",   "E7b9",           "Am",          ["Bm7b5", "E7b9"],

    "Am",     ["Bm7b5", "E7b9"], "Am",           "Am",
    "Em7b5",   "A7b9",           "Dm",           "Dm",
    "Dm7",    ["Bm7b5", "E7b9"],["Am", "Am7/G"], "FM7",
    "Bm7b5",   "E7b9",           "Am",           "A-",

   ["Dm7","Am7"],["Dm7","Am7"], ["Dm7","Em7"],   "Am7",
  ],
  'scales': [,
    //first round

    // Am| Bm7b5 E7b9| Am| Bm7b5 E7b9
    'a minor','a harmonicminor','a minor','a harmonicminor',

    // Am| Dm7 G7| CM7| A7b9
    'a harmonicminor','c major',,'a harmonicminor',

    // Dm7| G7| CM7| FM7
    'd dorian',,'c major',,

    // Bm7b5| E7b9| Am| Bm7b5 E7b9
    'a harmonicminor',,,,

    //___

    //Am| Bm7b5 E7b9| Am| Am
    ,,,,
    //Em7b5| A7b9| Dm |
    'd harmonicminor',,,,
    //Dm7| Bm7b5 E7b9| Am Am7/G| FM7
    'd dorian','a harmonicminor','f lydian',,

    //Bm7| E7b9| Am| Bm7b5 E7b9
    'a harmonicminor',,,,



    //second round

    // Am| Bm7b5 E7b9| Am| Bm7b5 E7b9
    'a minor','a harmonicminor','a minor','a harmonicminor',

    // Am| Dm7 G7| CM7| A7b9
    'a harmonicminor','c major',,'a harmonicminor',

    // Dm7| G7| CM7| FM7
    'd dorian',,'c major',,

    // Bm7b5| E7b9| Am| Bm7b5 E7b9
    'a harmonicminor',,,,

    //___

    //Am| Bm7b5 E7b9| Am| Am
    ,,,,
    //Em7b5| A7b9| Dm |
    'd harmonicminor',,,,
    //Dm7| Bm7b5 E7b9| Am Am7/G| FM7
    'd dorian','a harmonicminor','f lydian',,

    //Bm7| E7b9| Am| Bm7b5 E7b9
    'a harmonicminor',,,,

    //third round

    // Am| Bm7b5 E7b9| Am| Bm7b5 E7b9
    'a minor','a harmonicminor','a minor','a harmonicminor',

    // Am| Dm7 G7| CM7| A7b9
    'a harmonicminor','c major',,'a harmonicminor',

    // Dm7| G7| CM7| FM7
    'd dorian',,'c major',,

    // Bm7b5| E7b9| Am| Bm7b5 E7b9
    'a harmonicminor',,,,

    //___

    // Am| Bm7b5 E7b9| Am| Bm7b5 E7b9
    'a minor','a harmonicminor','a minor','a harmonicminor',

    // Am| Dm7 G7| CM7| A7b9
    'a harmonicminor','c major',,'a harmonicminor',

    // Dm7| G7| CM7| FM7
    'd dorian',,'c major',,

    // Bm7b5| E7b9| Am| Bm7b5 E7b9
    'a harmonicminor',,,,

    //___

    //Dm7 Am7| Dm7 Am7| Dm7 Am7| Am
    'd dorian','a minor','d dorian','a minor',
  ],
  'music_dir': 'sound/Manha De Carnaval (Black Orpheus) Rhodes.wav',
}

setting2 = {
  'name':'Corcovado (Quiet Nights Of Quiet Stars)',
  'bpm':180,
  'chords': [,,
    'D9', ,'Abdim7', ,
    'Gm7','C7sus',['Fdim','FMaj7'],'FMaj7',

    'Fm7','Bb7','Em7','A7b13',
    'D7', ,'Dm7','Abdim7',

    'D9', ,'Abdim7', ,
    'Gm7','C7sus',['Fdim','FMaj7'],'FMaj7',

    'Fm7','Bb7','Em7','Am7',
    'Dm7','G7','Em7','A7',
    'Dm7','G7','C6', ,
    //---
    'D9', ,'Abdim7', ,
    'Gm7','C7sus',['Fdim','FMaj7'],'FMaj7',

    'Fm7','Bb7','Em7','A7b13',
    'D7', ,'Dm7','Abdim7',

    'D9', ,'Abdim7', ,
    'Gm7','C7sus',['Fdim','FMaj7'],'FMaj7',

    'Fm7','Bb7','Em7','Am7',
    'Dm7','G7','Em7','A7',
    'Dm7','G7','C6', ,
    //---
    'D9', ,'Abdim7', ,
    'Gm7','C7sus',['Fdim','FMaj7'],'FMaj7',

    'Fm7','Bb7','Em7','A7b13',
    'D7', ,'Dm7','Abdim7',

    'D9', ,'Abdim7', ,
    'Gm7','C7sus',['Fdim','FMaj7'],'FMaj7',

    'Fm7','Bb7','Em7','Am7',
    'Dm7','G7','Em7','A7',
    'Dm7','G7','C6', ,
  ],
  'scales': [,,
    'd mixolydian', ,['c',harmonicmajor], ,
    'g dorian','c mixolydian','f major', ,

    'f dorian', 'bb mixolydian','c major','bb melodicminor',
    'd mixolydian', ,'d dorian',['c',harmonicmajor],

    'd mixolydian', ,['c',harmonicmajor], ,
    'g dorian','c mixolydian','f major', ,

    'f dorian', 'bb mixolydian','a minor', ,
    'd dorian','g mixolydian','e dorian','bb melodicminor',
    'd dorian','g mixolydian','c major', ,

    //--
    'd mixolydian', ,['c',harmonicmajor], ,
    'g dorian','c mixolydian','f major', ,

    'f dorian', 'bb mixolydian','c major','bb melodicminor',
    'd mixolydian', ,'d dorian',['c',harmonicmajor],

    'd mixolydian', ,['c',harmonicmajor], ,
    'g dorian','c mixolydian','f major', ,

    'f dorian', 'bb mixolydian','a minor', ,
    'd dorian','g mixolydian','e dorian','bb melodicminor',
    'd dorian','g mixolydian','c major', ,

    //--
    'd mixolydian', ,['c',harmonicmajor], ,
    'g dorian','c mixolydian','f major', ,

    'f dorian', 'bb mixolydian','c major','bb melodicminor',
    'd mixolydian', ,'d dorian',['c',harmonicmajor],

    'd mixolydian', ,['c',harmonicmajor], ,
    'g dorian','c mixolydian','f major', ,

    'f dorian', 'bb mixolydian','a minor', ,
    'd dorian','g mixolydian','e dorian','bb melodicminor',
    'd dorian','g mixolydian','c major', ,
  ],
  'music_dir': 'sound/Corcovado (Quiet Nights Of Quiet Stars).wav',
}

setting3 = {
  'name':'C-Jam Blues',
  'bpm':160,
  'chords': [,,
    'C7', , , ,
    'F7', , ,'C7',
    'G7', , ,'C7',

    'C7', , , ,
    'F7', , ,'C7',
    'G7', , ,'C7',

    'C7', , , ,
    'F7', , ,'C7',
    'G7', , ,'C7',
  ],
  'scales': [,,
    ['c',majorblues], , , ,
    'c blues', , , ,
    'c minorpentatonic', ,'c blues',,

    ['c',majorblues], , , ,
    'c blues', , , ,
    'c minorpentatonic', ,'c blues',,

    ['c',majorblues], , , ,
    'c blues', , , ,
    'c minorpentatonic', ,'c blues',,
  ],
  'music_dir': 'sound/C-Jam Blues.wav',
}

let piece1 = new Piece(setting1)
let piece2 = new Piece(setting2)
let piece3 = new Piece(setting3)

all_pieces = [piece1,piece2,piece3]
console.log(piece1.name)
