
let mPiano;
let mUIKeyGrid;

// let mChromaticScale = ["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"];
let mRootMapToKeyid = {'c':1, 'c#':1,'db':2,'d':2,'d#':2,'eb':3,'e':3,'f':4,'f#':4,'gb':5,'g':5,'g#':5,'ab':6,'a':6,'a#':6,'bb':7,'b':7}
let keyMapToKeyGrid = {'`':'key-1','1':'key-2','2':'key-3','3':'key-4','4':'key-5','5':'key-6','6':'key-7','7':'key-8','8':'key-9','9':'key-10','0':'key-11','-':'key-12','=':'key-13','Backspace':'key-14',
                       'q':'key-1','w':'key-2','e':'key-3','r':'key-4','t':'key-5','y':'key-6','u':'key-7','i':'key-8','o':'key-9','p':'key-10','[':'key-11',']':'key-12','=':'key-13','Backspace':'key-14',
                       '':'key-1','s':'key-2','':'key-3','d':'key-4','':'key-5','f':'key-6','':'key-7','g':'key-8','':'key-9','h':'key-10','':'key-11','j':'key-12','':'key-13','k':'key-14',
                       'z':'key-1','':'key-2','x':'key-3','':'key-4','c':'key-5','':'key-6','v':'key-7','':'key-8','b':'key-9','':'key-10','n':'key-11','':'key-12','m':'key-13','':'key-14',}
let mMasterKeyScale = [];

let song = 3


let cM  = ['c','d','e','f','g','a','b'];
let aHm = ['a','b','c','d','e','f','g#'];
let dHm = ['d','e','f','g','a','bb','c#']
let bM = ['b','c#','d#','e','f#','g#','a#']

// find index of root note
// assign the grid to that eq scale


let mPlayer1 = new Tone.Player("sound/Manha De Carnaval (Black Orpheus) Rhodes.wav").toMaster()
let mPlayer2 = new Tone.Player("sound/Corcovado (Quiet Nights Of Quiet Stars).wav").toMaster()
let mPlayer3 = new Tone.Player("sound/C-Jam Blues.wav").toMaster()

let mScaleSequence;
let mChordSequence;








$(document).ready(function(){


    mPiano = new Tone.Sampler({
        "C3":"C3.wav",
        "C#3":"Csharp3.wav",
        "D3":"D3.wav",
        "D#3":"Dsharp3.wav",
        "E3":"E3.wav",
        "F3":"F3.wav",
        "F#3":"Fsharp3.wav",
        "G3":"G3.wav",
        "G#3":"Gsharp3.wav",
        "A3":"A3.wav",
        "A#3":"Asharp3.wav",
        "B3":"B3.wav",
        "C4":"C4.wav",
        "C#4":"Csharp4.wav",
        "D4":"D4.wav",
        "D#4":"Dsharp4.wav",
        "E4":"E4.wav",
        "F4":"F4.wav",
        "F#4":"Fsharp4.wav",
        "G4":"G4.wav",
        "G#4":"Gsharp4.wav",
        "A4":"A4.wav",
        "A#4":"Asharp4.wav",
        "B4":"B4.wav",
    },null,"sound/").toMaster();

    mPiano.volume.value = -13;



    mUIKeyGrid = $("#key-grid");


    mMasterKeyScale = getGridMapFromScale(aHm);
    // mMasterKeyScale = getGridMapFromScale(aHm);
    // getGridMapFromScale(dHm);
    // getGridMapFromScale(bM);
    initializeSequences(song);
    initializeEventHandler();
    // console.log('new root mapping test: '+ 'c#'+', ' +mRootMapToKeyid['c#'])
    console.log(teoria.note('a').scale(['P1','M2','M3','P4','P5','m6','M7']))

});

function initializeEventHandler(){
  $("#key-grid").children().on({
    'touchstart':function(){notePressed(this.id);$(this).addClass('key-pressed')},
    'touchend':function(){$(this).removeClass('key-pressed')},
    'mouseenter':function(){notePressed(this.id);$(this).addClass('key-pressed')},
    'mouseleave':function(){$(this).removeClass('key-pressed')},
  })

let keyIsDown = {}
  $(document).on({
    'keypress':function(){
      if(keyIsDown[event.key] === false) return;
      keyIsDown[event.key] = false;
      // $(keyMapToKeyGrid[event.key]).animate();
      // console.log(event.key,keyMapToKeyGrid[event.key]);
      notePressed(keyMapToKeyGrid[event.key]);$('#'+keyMapToKeyGrid[event.key]).addClass('key-pressed')
    },

    'keyup':function(){
      $(keyMapToKeyGrid[event.key]).animate();

      $('#'+keyMapToKeyGrid[event.key]).removeClass('key-pressed');
      keyIsDown[event.key] = true;
      // console.log(event.key,keyMapToKeyGrid[event.key],keyIsDown);
    }
});


}

function initializeSequences(song){

  console.log("INIT SEQ");
  if (song == 1)
    Tone.Transport.bpm.value = 140;
  else if (song == 2)
    Tone.Transport.bpm.value = 180;
  else if (song == 3)
    Tone.Transport.bpm.value = 160;

  let chords = initialize_chords(song);
  let scales = initialize_scales(song);
  let chordsForHint = chords.slice(1,chords.length)
  // console.log(chordsForHint)
  mScaleSequence = new Tone.Sequence(handleScaleChange, scales,"1n");
  mChordSequence = new Tone.Sequence(handleChordChange, chords,"1n");
  mChordForHintSequence = new Tone.Sequence(handleHintedNotesChange, chordsForHint,"1n");

}

function handleScaleChange(time,scale){
  if(scale === null)return;
  console.log(scale)
  console.log("Scale Change. Scale:  "+ scale.simple());

  mMasterKeyScale = getGridMapFromScale(scale.simple());


}

function handleChordChange(time,chordName){
  if(chordName === null)return;
  console.log("Chord change. Chords:  " +chordName);

  let chordNotes = teoria.chord(chordName).simple();
  console.log("CHORD NOTES: "+chordNotes)

  let highlightedNotes = [];
  for(let i = 0; i<1; i++){
    if(i === 2) continue;
    highlightedNotes.push(chordNotes[i]);

  }
  let indexes = getChordNoteIndexFromAlphabet(highlightedNotes);

  // mUIKeyGrid.children().each(function(index){
  //   console.log("REMOVING CLASS");
  //     $(this).removeClass("key-hinted");
  // });

  updateKeysToMatchChordInScaleHinted(indexes)

  $("#chord-name-tag").html(chordName);



}

function handleHintedNotesChange(time,chordName){
  if(chordName === null)return;
  // console.log("Chord change. Chords:  " +chordName);

  let chordNotes = teoria.chord(chordName).simple();
  // console.log("CHORD NOTES: "+chordNotes)

  let highlightedNotes = [];
  for(let i = 0; i<1; i++){
    if(i === 2) continue;
    highlightedNotes.push(chordNotes[i]);

  }
  let indexes = getChordNoteIndexFromAlphabet(highlightedNotes);

  // mUIKeyGrid.children().each(function(index){
  //   console.log("REMOVING CLASS");
  //     $(this).removeClass("key-hinted");
  // });
  //
  // indexes.forEach(index=>{
  //
  //     let id = "#key-"+(index+1);
  //     console.log("ID in update: "+id);
  //     $(id).addClass('key-hinted');
  //   });
}

function updateKeysToMatchChordInScaleHinted(indexes){
  // mUIKeyGrid.children().each(function(index){
  //   console.log("REMOVING CLASS");
  //     $(this).removeClass("key-hinted");
  // });



  //
  // mUIKeyGrid.children().each(function(index){
  //   console.log("REMOVING CLASS");
  //     $(this).removeClass("key-hinted-now");
  // });
  //
  // indexes.forEach(index=>{
  //
  //     let id = "#key-"+(index+1);
  //     console.log("ID in update: "+id);
  //     $(id).addClass('key-hinted-now');
  //   });




}

function notePressed(id){
    // console.log(`ID: ${id}`);

    let keyNumber  = id.split("-")[1];
    let note = mMasterKeyScale[keyNumber-1];
    // console.log(`note to be played ${note}`);
    mPiano.triggerAttackRelease(note,"2n");


}

function play(song){
  console.log('look here '+song)
  if (song == 1){
    mPlayer1.start()
  }
  else if (song == 2){
    mPlayer2.start()
  }
  else if (song == 3){
    mPlayer3.start()
  }
  console.log("Play");

  Tone.Transport.start();
  mScaleSequence.start();
  mChordSequence.start();
  mChordForHintSequence.start();


}

function stop(song){

  mUIKeyGrid.children().each(function(index){
    console.log("REMOVING CLASS");
      $(this).removeClass("key-hinted");
  });

  if (song == 1){
    mPlayer1.stop()
  }
  else if (song == 2){
    mPlayer2.stop()
  }
  else if (song == 3){
    mPlayer3.stop()
  }
  console.log("Stop");
  Tone.Transport.stop();
  mScaleSequence.stop();
  mChordSequence.stop();
  mChordForHintSequence.stop();
}
