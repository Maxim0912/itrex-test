'use strict';

let maze = [
    [ '#', '#', '#', '#', '#', '#', '#', '#', '#' ],
    [ '#', '+', '+', '+', '#', '+', '+', '+', '#' ],
    [ '#', '+', '#', '+', '#', '+', '#', '+', '#' ],
    [ '+', '+', '#', '+', '0', '+', '#', '+', '#' ],
    [ '#', '#', '#', '+', '#', '#', '#', '#', '#' ],
    [ '#', '#', '+', '+', '#', '#', '#', '#', '#' ],
    [ '#', '#', '+', '#', '#', '#', '#', '#', '#' ],
    [ '#', '#', '#', '#', '#', '#', '#', '#', '#' ],
];

function findWayFromMaze(start, end) {
    let way = [];

    function checkPath(start, end) {// left a maze when start.coordinates are equal to end.coordinates
        maze[start.y][start.x] = 'v'; // visited
        let siblings = getValidSiblings(start);
        
        if (siblings.length > 0) {
            for (let i=0; i < siblings.length; i++) {
                const isSolved = siblings[i].x === end.x && siblings[i].y === end.y;
                const notVisited = maze[siblings[i].y][siblings[i].x] !== 'v';                
                if (isSolved || (notVisited && checkPath(siblings[i], end))) {
                    way.unshift(siblings[i].direction);
                    return way;
                }
            }
        }
    }
    return checkPath(start, end); 
    }

function getValidSiblings(cord) {// check where you can go from this point
    const {x, y} = cord;

    let cords =[];
    if (maze[y - 1] !== undefined) {
        cords.push({x: x, y: y - 1, val: maze[y - 1][x], direction: "top"});
    }
    if (maze[y + 1] !== undefined) {
        cords.push({x: x, y: y + 1, val: maze[y + 1][x], direction: "bottom"});
    }
    if (maze[y][x - 1] !== undefined) {
        cords.push({x: x - 1, y: y, val: maze[y][x - 1], direction: "left"});
    }
    if (maze[y][x + 1] !== undefined) {
        cords.push({x: x + 1, y: y, val: maze[y][x + 1], direction: "right"});
    }
    return cords.filter((crd) => crd.val === '+');  
}

console.log(findWayFromMaze({x: 4, y: 3}, {x: 0, y: 3}));




