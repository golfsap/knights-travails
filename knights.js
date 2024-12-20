function knightMoves(start, end) {
  const boardSize = 8;
  const directions = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  function isValidMove(x, y) {
    return 0 <= x && x < boardSize && 0 <= y && y < boardSize;
  }

  // Check if start and end are the same
  if (start[0] === end[0] && start[1] === end[1]) {
    console.log(start);
    return [start];
  }

  // BFS Queue
  const queue = [{ square: start, path: [start] }];
  // 8x8 matrix to store visited squares
  const visited = Array.from({ length: boardSize }, () =>
    Array(boardSize).fill(false)
  );
  visited[start[0]][start[1]] = true;

  while (queue.length > 0) {
    const { square, path } = queue.shift();
    const [x, y] = square;
    if (square[0] === end[0] && square[1] === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      for (let square of path) {
        console.log(square);
      }
      // console.log(path);
      return path;
    }

    // Explore all valid moves
    for (let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (isValidMove(nx, ny) && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push({ square: [nx, ny], path: [...path, [nx, ny]] });
      }
    }
  }
  console.log("no path found.");
  return null;
}

let startPoint = [0, 0];
let endPoint = [7, 0];

knightMoves(startPoint, endPoint);

// const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
// console.log(visited);
