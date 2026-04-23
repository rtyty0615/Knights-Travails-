#!/usr/bin/env node

function knightMoves(start = [0, 0], end = [7, 7]) {
    let queue = [start]; 
    const noRepeatvertex = [start];
    let count = 0;
    while (true) {
        count += 1;
        let newQueue = [];
        for (const i of queue) {
            const eachMoveArr = eachMove(i, end);
            if (eachMoveArr[0] === end[0] && eachMoveArr[1] === end[1]) {
                return console.log(`Succeed! count: ${count}`)
            };
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

    function eachMove(vertex, end) {
        const move = [[1, 2], [2, 1], [-1, 2], [2, -1], [1, -2], [-2, 1], [-1, -2], [-2, -1]];
        const newVertex = [];
        for (const i of move) {
            const x = vertex[0] + i[0];
            const y = vertex[1] + i[1];
            if (0 <= x && x <= 7 && 0 <= y && y <= 7) {
                if (x === end[0] && y === end[1]) {
                    return [x,y]
                };
                newVertex.push([x, y])
            }
        }
        return newVertex
    }

}

knightMoves()