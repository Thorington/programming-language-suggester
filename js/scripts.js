$(document).ready(function () {
  $("#userInput").on("submit", function (event) {
    event.preventDefault();

    const howManyLet = $('input:radio[name=howManyLet]:checked').val();
    const favLetter = $('input:radio[name=favLetter]:checked').val();
    const favThing = $('input:radio[name=favThing]:checked').val();
    const favMotion = $('input:radio[name=favMotion]:checked').val();
    const likeRed = $('input:radio[name=likeRed]:checked').val();
    const fearWorms = $('input:radio[name=fearWorms]:checked').val();

    let result; 

      if (howManyLet === 'two') {
        result = $('#go').show();
      }
      else if (howManyLet === 'four'){
        result = $('#ruby').show();
      }
      else if (howManyLet === 'six'){
        result = $('#python').show();
      }
      else {
        result = $('#sorry').show();
      }
    });
  });












    // Working on a better scoring system below:

    // let score = 0;
    // let total = 4;
    // let point = 1;
    // let highest = total * point;

    // function init(Go){
    //   userInput.setItem('howManyLet','two');
    //   userInput.setItem('favLetter','g');
    //   userInput.setItem('favThing','monopoly');
    //   userInput.setItem('favMotion','move');
    // }

    // function init(Ruby){
    //   userInput.setItem('howManyLet','four');
    //   userInput.setItem('favLetter','r');
    //   userInput.setItem('favThing','jewelry');
    //   userInput.setItem('likeRed','yes');
    // }

    // function init(Python){
    //   userInput.setItem('howManyLet','six');
    //   userInput.setItem('favLetter','p');
    //   userInput.setItem('favThing','reptiles');
    //   userInput.setItem('fearWorms','no');
    // }

    // $(document).ready(function (event) {
    //   event.preventDefault();

    //   function process(userInput) {
    //     let submitted = $('input:radio[name=howManyLet]:checked').val();
    //       if (submitted == (Go)){
    //         score++;
    //       }
    //       if (submitted == (Ruby)){
    //         score++;
    //       }
    //       if (submitted == (Python)){
    //         score++;
    //       }
    //       }

    //     })
