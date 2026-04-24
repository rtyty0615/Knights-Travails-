# Knights Travails

This project is part of The Odin Project's JavaScript curriculum. The goal was to build a function that finds the shortest possible path for a knight on a standard 8x8 chessboard to move from one square to another.

The Challenge

Finding the shortest path in a graph (the chessboard) where each square is a vertex and every legal knight move is an edge. Because the board is unweighted (every move costs exactly "1"), the most efficient way to find the shortest path is through a Breadth-First Search (BFS).

Key Logic & Optimization

Unlike a basic implementation, this project utilizes several optimizations to ensure high performance:

    Breadth-First Search: Guarantees the shortest path by exploring all possibilities level-by-level.

    Visited Tracking with Sets: Instead of checking an array (O(n)), it uses a Set for O(1) lookup times to prevent the knight from visiting the same square twice and entering an infinite loop.

    Queue Breadcrumbs: Each item in the queue carries its own "history" (path), eliminating the need for expensive recursive backtracking once the goal is reached.

Performance

    Time Complexity: O(V+E) where V is the number of squares (64) and E is the number of legal moves.

    Space Complexity: O(V) to store the visited squares and the search queue.

Usage

To see the knight in action, call the function with a start and end coordinate:
JavaScript

knightMoves([0,0], [3,3]);
// Output:
// => You made it in 2 moves! Here's your path:
// [0,0]
// [2,1]
// [3,3]