#!/usr/bin/env node

function knightMoves(start = [0, 0], end = [0,0]) {
    if (start[0] === end[0] && start[1] === end[1]) {
        return [start]
    };
    class Move {
        constructor(current, path) {
            this.current = current;
            this.path = path;
        }
    };
    const pair = new Move(start, [start]);
    let queue = [pair];
    const noRepeatvertex = [start];
    while (true) {
        let newQueue = [];
        for (const i of queue) {
            const eachMoveArr = eachMove(i.current);
            for (const j of eachMoveArr) {
                
                const exists = noRepeatvertex.some(item =>
                    JSON.stringify(item.current) === JSON.stringify(j)
                );
                if (exists === false) {
                    const updatePath = [...i.path];
                    const pair = new Move(j, updatePath);
                    pair.path.push(j);
                    noRepeatvertex.push(pair);
                    newQueue.push(pair)
                    if (j[0] === end[0] && j[1] === end[1]) {
                        return pair
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