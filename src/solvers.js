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
  let solution = []; 
  //input: number of pieces
  //output: a matrix representing a single chessboard
  
  let board = new Board({ 'n': n});
  for (let i = 0; i < n; i ++) {
    for (let j = 0; j < n; j++) {
      if (!board.hasAnyRooksConflicts()) {
        board.togglePiece(i, j);
        if (board.hasAnyRooksConflicts()) {
          board.togglePiece(i, j);
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    solution.push(board.get(i));
  }

  
  // 'i' for loop to repeat n times
  //create an array
    // 'j' for loop to iterate over index
      // if i = j insert 1 
      // else insert 0
  // for (let i = 0; i < n; i++) {
  //   let array = [];
  //   for (let j = 0; j < n; j++) {
  //     if (j === i) {
  //       array.push(1);
  //     } else {
  //       array.push(0);
  //     }
  //   }
  //   solution.push(array);
  // }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));


  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  let solutionCount = 0;
  let board = new Board({ 'n': n});
  

  let recursion = function(row) {
    if (row === n) {
      solutionCount++;
    } else {
      for (let i = 0; i < n; i++) {
        board.togglePiece(row, i);
        if (!board.hasAnyRooksConflicts()) {
          recursion(row + 1);
        }
        board.togglePiece(row, i);
      }
    }
  };
  recursion(0);
  // create recursive function - parameter row
    // loop through columns
      //toggle position
      // if board has no conflicts
        // recurse - incrementing row
      // toggle position back
      // increment solutionCount if rows equal to n 

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  let solution = []; //fixme
  let toggle = false;

  
  //create new board
  //select starting point with for loop
    //togglePiece(rowIndex, columnIndex)
    //change rowIndex +1 and columnIndex +2 (row version)
      //if conflict 
        //coulmnIndex +3
  // if #ofpiece < n, new starting point 
  // if answer found, push this.get(0 to n)
    //push into solution array;
  


  //create new board - n-sized
    //if n is even - start on row 0 col 1
    //if n is odd - start on row 0 col 0
  // create recursive function taking in row starting at 1
    //create loop from 0 to n
      // togglePiece(row, i)
    //if board has a conflict
      // togglePiece(row, i);
    //


  let board = new Board({'n': n});

  let recursion = function(row) {
    if (row === n) {
      toggle = true;
    } else {
      for (let i = 0; i < n; i++) {
        board.togglePiece(row, i);
        if (!board.hasAnyQueensConflicts()) {
          recursion(row + 1);
        }
        if (toggle) {
          return;
        }
        board.togglePiece(row, i);
      }
    }
  };
  recursion(0);
  
  for (let i = 0; i < n; i++) {
    solution.push(board.get(i));
  }


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  let solutionCount = 0;
  let board = new Board({ 'n': n});

  let recursion = function(row) {
    if (row === n) {
      solutionCount++;
    } else {
      for (let i = 0; i < n; i++) {
        board.togglePiece(row, i);
        if (!board.hasAnyQueensConflicts()) {
          recursion(row + 1);
        }
        board.togglePiece(row, i);
      }
    }
  };
  recursion(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
