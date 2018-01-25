/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []; 
  //input: number of pieces
  //output: a matrix representing a single chessboard
  
  //create a new board by nxn
  //loop n number of times
    //place a toggle a piece randomly
      //check conflicts
      //if conflict toggle piece again and revert loop one time
      //randomly toggle another piece
        //rinse and repeat (recursion?)
  
  // let board = new Board({ 'n': 3});
  // let i = 0;
  // while (i < 3) {
  // let randomRow = () => {Math.floor(Math.random() * 3);
  // let randomColumn = () => Math.floor(Math.random() * 3);
  // let row = randomRow();
  // let column = randomColumn();    
  //   board.togglePiece(row, column);
  //   if (board.hasAnyRookConflicts) {
  //     board.togglePiece(row, column);
  //     i--;
  //   } 
  //   i++;
  // }


  // 'i' for loop to repeat n times
  //create an array
    // 'j' for loop to iterate over index
      // if i = j insert 1 
      // else insert 0
  for (let i = 0; i < n; i++) {
    let array = [];
    for (let j = 0; j < n; j++) {
      if (j === i) {
        array.push(1);
      } else {
        array.push(0);
      }
    }
    solution.push(array);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //fixme
  
  //create new board
  //select starting point with for loop
    //togglePiece(rowIndex, columnIndex)
    //change rowIndex +1 and columnIndex +2 (row version)
      //if conflict 
        //coulmnIndex +3
  // if #ofpiece < n, new starting point 
  // if answer found, push this.get(0 to n)
    //push into solution array;
    

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
