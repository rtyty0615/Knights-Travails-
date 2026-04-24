#!/usr/bin/env node

function knightMoves(start = [0, 0], end = [7,7]) {
    if (start[0] === end[0] && start[1] === end[1]) {
        return [start]
    };
    class Move {
        constructor(current, path) {
            this.current = current;
            this.path = path;
        }
    };
    const noRepeatvertex = new Set();
    const pair = new Move(start, [start]);
    let queue = [pair];
    while (true) {
        let newQueue = [];
        for (const i of queue) {
            const eachMoveArr = eachMove(i.current);
            for (const j of eachMoveArr) {
                const str = j[0] + "," + j[1];
                if (!noRepeatvertex.has(str)) {
                    const updatePath = [...i.path];
                    const pair = new Move(j, updatePath);
                    pair.path.push(j);
                    noRepeatvertex.add(str);
                    newQueue.push(pair);
                    if (j[0] === end[0] && j[1] === end[1]) {
                        return pair.path
                    };
                };
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