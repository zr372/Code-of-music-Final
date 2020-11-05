let harmonicmajor = ['P1','M2','M3','P4','P5','m6','M7']
let hh = ['P1','m2','m3','M3','d5','P5','M6','m7']
let majorblues = ['P1','M2','m3','M3','P5','M6']

let raw_scales1 = [,
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

  //Am| Bm7b5 E7b9| Am| Am
  ,,,,
  //Em7b5| A7b9| Dm||
  'd harmonicminor',,,,
  //Dm7| Bm7b5 E7b9| Am Am7/G| FM7
  'd dorian','a harmonicminor','f lydian',,
  //Bm7| E7b9| Am| Am
  'a harmonicminor',,,,

  //Dm7 Am7| Dm7 Am7| Dm7 Am7| Am
  'd dorian','a minor','d dorian','a minor',




];

let raw_scales2 = [,,
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
];

let raw_scales3 = [,,
  ['c',majorblues], , , ,
  'c blues', , , ,
  'c minorpentatonic', ,'c blues',,

  ['c',majorblues], , , ,
  'c blues', , , ,
  'c minorpentatonic', ,'c blues',,

  ['c',majorblues], , , ,
  'c blues', , , ,
  'c minorpentatonic', ,'c blues',,
];

let raw_scales = {
  'song1': raw_scales1,
  'song2': raw_scales2,
  'song3': raw_scales3,
  }
