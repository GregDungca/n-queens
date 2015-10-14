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


var testFn = function(n) {
  if (n === 1) {
    return 10;
  } else {
    return 20;
  }
};


window.findNRooksSolution = function(n) {
  var solution;

  var getNRooksSolutions = function(board, positions, row) {
    
    // recursive case
    if (row < board.length) {
      if (positions.length === 0) return;
      //var string = JSON.stringify(board);
      for (var i = 0; i < positions.length; i++) {
        var b = new Board(board);
        console.log('test');
        var temp = positions.slice();
        var r = row+1;

        b.togglePiece(row, positions[i]);
        temp.splice(i, 1);
        
        return getNRooksSolutions(b.rows(), temp, r);
      }
    } else { // base case
      return board;
    }
  };


  solution = getNRooksSolutions((new Board({'n': n})).rows(), _.range(n), 0);


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = [];
  var solutionCount;

  var getNRooksSolutions = function(board, positions, row) {
    
    // recursive case
    if (row < board.length) {
      if (positions.length === 0) return;
      var string = JSON.stringify(board);
      for (var i = 0; i < positions.length; i++) {
        var b = new Board(JSON.parse(string));
        var temp = positions.slice();
        var r = row+1;

        b.togglePiece(row, positions[i]);
        temp.splice(i, 1);
        
        getNRooksSolutions(b.rows(), temp, r);
      }
    } else { // base case
      solution.push(board);
    }
  };

  getNRooksSolutions((new Board({'n': n})).rows(), _.range(n), 0);

  // look for duplicates
  solutionCount = solution.length;
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var getNQueensSolutions = function(board, positions, row) {
    
    // recursive case
    if (row < board.length) {
      if (positions.length === 0) return;
      var string = JSON.stringify(board);
      for (var i = 0; i < positions.length; i++) {
        var b = new Board(JSON.parse(string));
        var temp = positions.slice();
        var r = row+1;

        b.togglePiece(row, positions[i]);
        temp.splice(i, 1);
        
        var validboard = getNQueensSolutions(b.rows(), temp, r);
        if (validboard) return validboard;
      }
    } else if ( !(new Board(board)).hasAnyQueensConflicts() ) { // base case
      return board;
    }
  };

  var solution = getNQueensSolutions((new Board({'n': n})).rows(), _.range(n), 0);

  if (!solution) {
    solution = (new Board({'n': n})).rows();
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = []; //fixme
  var solutionCount;

  var getNQueensSolutions = function(board, positions, row) {
    
    // recursive case
    if (row < board.length) {
      if (positions.length === 0) return;
      var string = JSON.stringify(board);
      for (var i = 0; i < positions.length; i++) {
        var b = new Board(JSON.parse(string));
        var temp = positions.slice();
        var r = row+1;

        b.togglePiece(row, positions[i]);
        temp.splice(i, 1);
        
        getNQueensSolutions(b.rows(), temp, r);
      }
    } else if ( !(new Board(board)).hasAnyQueensConflicts() ) { // base case
      solution.push(board);
    }
  };

  getNQueensSolutions((new Board({'n': n})).rows(), _.range(n), 0);

  // look for duplicates
  solutionCount = solution.length;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
