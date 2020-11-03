
let mAlphabet;

function completeArray(array){
  for (i=2;i<array.length;i++){
    if (array[i] == undefined){
      array[i] = array[i-1]
    }
  }
  return array
}
function rawScalesToTeoriaScales(raw_scales){
  for (i=2;i<raw_scales.length;i++){
    if (typeof(raw_scales[i]) == 'string'){
      let root = teoria.note(raw_scales[i].split(' ')[0])
      let chordtype = raw_scales[i].split(' ')[1]
      raw_scales[i]=root.scale(chordtype)
    }
    else{
      let root = teoria.note(raw_scales[i][0])
      raw_scales[i]=root.scale(raw_scales[i][1])
    }
  }
  return raw_scales
}



function initialize_chords(song){
  let chords1 = [,
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
  ]
  let chords2 = [,,
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
  ]
  let chords3 = [,,
    'C7', , , ,
    'F7', , ,'C7',
    'G7', , ,'C7',

    'C7', , , ,
    'F7', , ,'C7',
    'G7', , ,'C7',

    'C7', , , ,
    'F7', , ,'C7',
    'G7', , ,'C7',
  ]

  if (song == 1) {
    return completeArray(chords1);
  }
  else if (song == 2) {
    return completeArray(chords2)
  }
  else if (song == 3){
    return completeArray(chords3)
  }
}


function initialize_scales(song){
  let c =teoria.note('c');
  let d =teoria.note('d');
  let e =teoria.note('e');
  let f =teoria.note('f');
  let g =teoria.note('g');
  let a =teoria.note('a');
  let b =teoria.note('b');

  let harmonicmajor = ['P1','M2','M3','P4','P5','m6','M7']
  let hh = ['P1','m2','m3','M3','d5','P5','M6','m7']
  let majorblues = ['P1','M2','m3','M3','P5','M6']
  import {raw_scales1,raw_scales2,raw_scales3} from 'piece_scales.js'
  //let raw_scales1 = [,
    //first round

    // Am| Bm7b5 E7b9| Am| Bm7b5 E7b9
    a.scale('minor'),
    a.scale('harmonicminor'),
    a.scale('minor'),
    a.scale('harmonicminor'),
    // Am| Dm7 G7| CM7| A7b9
    a.scale('harmonicminor'),
    c.scale('major'),
    c.scale('major'),
    d.scale('harmonicminor'),
    // Dm7| G7| CM7| FM7
    d.scale('dorian'),
    d.scale('dorian'),
    c.scale('major'),
    c.scale('major'),
    // Bm7b5| E7b9| Am| Bm7b5 E7b9
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),

    //___

    //Am| Bm7b5 E7b9| Am| Am
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    //Em7b5| A7b9| Dm
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    //Dm7| Bm7b5 E7b9| Am Am7/G| FM7
    d.scale('dorian'),
    a.scale('harmonicminor'),
    f.scale('lydian'),
    f.scale('lydian'),
    //Bm7| E7b9| Am| Bm7b5 E7b9
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),


    //second round

    // Am| Bm7b5 E7b9| Am| Bm7b5 E7b9
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    // Am| Dm7 G7| CM7| A7b9
    a.scale('harmonicminor'),
    c.scale('major'),
    c.scale('major'),
    d.scale('harmonicminor'),
    // Dm7| G7| CM7| FM7
    d.scale('dorian'),
    d.scale('dorian'),
    c.scale('major'),
    c.scale('major'),
    // Bm7b5| E7b9| Am| Bm7b5 E7b9
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),

    //___

    //Am| Bm7b5 E7b9| Am| Am
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    //Em7b5| A7b9| Dm
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    //Dm7| Bm7b5 E7b9| Am Am7/G| FM7
    d.scale('dorian'),
    a.scale('harmonicminor'),
    f.scale('lydian'),
    f.scale('lydian'),
    //Bm7| E7b9| Am| Bm7b5 E7b9
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),

    //third round

    // Am| Bm7b5 E7b9| Am| Bm7b5 E7b9
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    // Am| Dm7 G7| CM7| A7b9
    a.scale('harmonicminor'),
    c.scale('major'),
    c.scale('major'),
    d.scale('harmonicminor'),
    // Dm7| G7| CM7| FM7
    d.scale('dorian'),
    d.scale('dorian'),
    c.scale('major'),
    c.scale('major'),
    // Bm7b5| E7b9| Am| Bm7b5 E7b9
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),

    //___

    //Am| Bm7b5 E7b9| Am| Am
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    //Em7b5| A7b9| Dm
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    d.scale('harmonicminor'),
    //Dm7| Bm7b5 E7b9| Am Am7/G| FM7
    d.scale('dorian'),
    a.scale('harmonicminor'),
    f.scale('lydian'),
    f.scale('lydian'),
    //Bm7| E7b9| Am| Am
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    a.scale('harmonicminor'),
    //Dm7 Am7| Dm7 Am7| Dm7 Am7| Am
    a.scale('dorian'),
    a.scale('minor'),
    a.scale('dorian'),
    a.scale('minor'),



  ];
  //let raw_scales2 = [,,
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
  //let raw_scales3 = [,,
    ['c',majorblues], , , ,
    'c blues', , , ,
    'c minorpentatonic', ,'c blues',,

    ['c',majorblues], , , ,
    'c blues', , , ,
    'c minorpentatonic', ,'c blues',,

    ['c',majorblues], , , ,
    'c blues', , , ,
    'c minorpentatonic', ,'c blues',,
  ]

  let scales2 = rawScalesToTeoriaScales(completeArray(raw_scales2))
  let scales3 = rawScalesToTeoriaScales(completeArray(raw_scales3))
  if (song == 1){
    return raw_scales1;
  }
  else if (song == 2){
    return scales2
  }
  else if (song == 3){
    return scales3
  }
}




function getGridMapFromScale(scale){

    let scaleSize = scale.length;
    // let chromaticIndex = mChromaticScale.indexOf(scale[0]);
    let NEWROOTINDEX = mRootMapToKeyid[scale[0]]
    let newScale = [];


    // for(let i = 0; i < 14; i++){
    //     newScale[(chromaticIndex+i)%14]  = scale[(i)%7];
    // }

    for(let i = 0; i < 14; i++){
        let n = scale.length
        newScale[(NEWROOTINDEX+i)%14]  = scale[(i)%n];
    }

    mAlphabet = [];

    newScale.forEach(note=>{
        mAlphabet.push(note.charAt(0));
    })
    // console.log(newScale)
    // console.log("Alpha: "+mAlphabet);


    let octave = 3;
    let order = ['c','d','e','f','g','a','b']
    newScale[0] = newScale[0]+octave;
    for(let i = 1; i<newScale.length; i++){

        let currentindex = order.indexOf(mAlphabet[i])
        let previousindex = order.indexOf(mAlphabet[i-1])


        if(currentindex<previousindex){
            // console.log(newScale[i]+" reached next octave")
            octave++;
        }
        newScale[i] = newScale[i]+octave;


    }

    // console.log("New Scale "+newScale);
    return newScale;
}



function getChordNoteIndexFromAlphabet(chordNotes){

  // console.log("Chord NOtes from Alphabet");
  // console.log("Alphabet: "+mAlphabet);
  // console.log("Chord Names: "+chordNotes);

  let indexes = [];


  for (let i=0; i<mAlphabet.length; i++){
    for(j=0; j<chordNotes.length; j++){


        if(chordNotes[j].charAt(0)===mAlphabet[i]){
          indexes.push(i);
        }

    }



  }


    // console.log("Chord Note Indexes::    "+indexes);

    return indexes;





}
