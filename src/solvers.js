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
  var solution = undefined; //fixme


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = []; //fixme
  var solutionCount;

  var getNRooksSolutions = function(board, positions, row) {
    // always copy over existing board
    var board = new Board(/* copy over grid from previous board */);

    // recursive case
    if (row < board.get('n')) {
      // recursion
      // getNRooksSolutions with every possible position in positions array
      // if positions array empty
        // then break -> return;
      // otherwise
      _.each(positions, function(pos) {
        // copy positions array
        // insert rook at position pos for current row
        // take out position from array
        // recursion getNRooksSolutions(board, new positions array, row+1)
      });
      
    } else { // base case
      // push board into solutions
    }
  };

  getNRooksSolutions(new Board({'n': n}, _.range(n), 0);

  // look for duplicates
  solutionCount = solutions.length;
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
