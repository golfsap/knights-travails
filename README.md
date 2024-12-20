# knights-travails

Using a graph data structure to output the shortest path a knight can take to go from one position on a chessboard to another.

Using BFS to traverse each square and a queue to store the next squares to visit. Each element in the queue contains an object consisting of the actual square property: [x,y] and a path property which consists of an array containing the sequence of squares that lead to that node.

A visited 8x8 matrix array marks the squares which have been visited so they are not added to the queue again.
