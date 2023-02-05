export const findWay = () => {
    const map = [];
    for (let i = 0; i < 8; i++) {
        map[i] = [null, null, null, null, null, null, null, null];
    }
    map[1][2] = { x: 0, y: 0 };
    map[2][1] = { x: 0, y: 0 };
    map[0][4] = { x: 1, y: 2 };
    map[2][4] = { x: 1, y: 2 };
    map[3][3] = { x: 1, y: 2 };
    map[4][2] = { x: 2, y: 1 };
    map[4][0] = { x: 2, y: 1 };
    map[5][2] = { x: 4, y: 0 };
    console.log(map);
    const deducePath = (start, end) => {
        let path = [];
        let step = map[start.x][start.y];
        path.push(step);
        if (step.x === end.x && step.y === end.y)
            return path;
        let restOfThePath = deducePath(step, end);
        path = [step, ...restOfThePath];
        return path;
    };
    console.log(deducePath({ x: 5, y: 2 }, { x: 0, y: 0 }));
};
//# sourceMappingURL=findWay.js.map