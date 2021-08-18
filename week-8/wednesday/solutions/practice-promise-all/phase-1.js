function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("done stretching");
      resolve("done stretching");
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("done running on treadmill");
      resolve("done running on treadmill");
    }, 500);
  });
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("done lifting weights");
      resolve("done lifting weights");
    }, 2000);
  });
}

function workout() {
  //!!ADD
  // // refactor this code to use Promise.all
  // stretch()
    // .then(runOnTreadmill)
    // .then(liftWeights)
    // .then(() => console.log("done working out"))
    // .catch((err) => console.log(err));
  //!!END_ADD
  //!!START SILENT
  // previous code:
  // stretch()
  //   .then(runOnTreadmill)
  //   .then(liftWeights)
  //   .then(() => console.log("done working out"))
  //   .catch((err) => console.log(err));

  // refactored code:
  const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("done running on treadmill");
      resolve("done running on treadmill");
    }, 500);
  });

  Promise.race([
    stretch(),
    runOnTreadmill(),
    liftWeights(),
    newPromise
  ])
    .then(result => console.log(result))
    .catch((err) => console.log(err));
  //!!END
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done running on treadmill
    // done stretching
    // done lifting weights
    // done working out