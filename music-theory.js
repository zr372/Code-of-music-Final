
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
  console.log('song chords',song.chords)
  return completeArray(song.chords)
}

function initialize_scales(song){
  let c =teoria.note('c');
  let d =teoria.note('d');
  let e =teoria.note('e');
  let f =teoria.note('f');
  let g =teoria.note('g');
  let a =teoria.note('a');
  let b =teoria.note('b');

  //let harmonicmajor = ['P1','M2','M3','P4','P5','m6','M7']
  //let hh = ['P1','m2','m3','M3','d5','P5','M6','m7']
  //let majorblues = ['P1','M2','m3','M3','P5','M6']

  raw_scale_selected = song.scales
  usable_scale = rawScalesToTeoriaScales(completeArray(raw_scale_selected))
  return usable_scale
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
  return indexes;
}
