#!/usr/bin/env node

function knightMoves(start = [7,0], end = [1,2]) {
    let queue = [start]; 
    const noRepeatvertex = [start];
    while (true) {
        let newQueue = [];
        for (const i of queue) {
            const eachMoveArr = eachMove(i);
            for (const i of eachMoveArr) {
                const exists = noRepeatvertex.some(arr => arr[0] === i[0] && arr[1] === i[1]);
                if (exists === false) {
                    noRepeatvertex.push(i);
                    newQueue.push(i)
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

knightMoves()