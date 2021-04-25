function velocity(arr) {

  if (arr.length < 3) {
    console.log('error');
  } else {
    let pointSequence = [];
    let sequence = [];
    let result = 0;
    for (let i = 0; i < arr.length - 2; i++) {
      if (i === 0) {
        sequence.push(arr[i], arr[1], arr[2]);
        pointSequence = sequence.slice();
        result = sequence.reduce((a, b) => a + b);
      } else {
        sequence.shift();
        sequence.push(arr[i + 2]);
        if (result <= sequence.reduce((a, b) => a + b)) {
          result = sequence.reduce((a, b) => a + b);
          pointSequence = sequence.slice();
        }
      }
    }
    console.log(pointSequence);
  }
}


velocity([76, 80, 81, 77, 83, 78, 80]);