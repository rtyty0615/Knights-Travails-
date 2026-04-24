#!/usr/bin/env node

function knightMoves(start = [0, 0], end = [7,7]) {
    if (start[0] === end[0] && start[1] === end[1]) {
        return [start]
    };
    let queue = [start];
    const noRepeatvertex = [start];
    while (true) {
        let newQueue = [];
        for (const i of queue) {
            const eachMoveArr = eachMove(i);
            for (const j of eachMoveArr) {
                if (j[0] === end[0] && j[1] === end[1]) {
                    const previousMove = knightMoves(start, i);
                    let printPath = [];
                    for (const k of previousMove) {
                        printPath.push(k);
                    };
                    printPath.push(end);
                    return printPath

                };
                const exists = noRepeatvertex.some(arr => arr[0] === j[0] && arr[1] === j[1]);
                if (exists === false) {
                    noRepeatvertex.push(j);
                    newQueue.push(j)
                }
            }
        }
        queue = newQueue
    };

    function eachMove(vertex) {
        const move = [[1, 2], [2, 1], [-1, 2], [2, -1], [1, -2], [-2, 1], [-1, -2], [-2, -1]];
        const newVertex = [];
        for (const i of move) {
            const x = vertex[0] + i[0];
            const y = vertex[1] + i[1];
            if (0 <= x && x <= 7 && 0 <= y && y <= 7) {
                newVertex.push([x, y])
            }
        }
        return newVertex
    }
}

const printMoves = knightMoves();
console.log(printMoves)