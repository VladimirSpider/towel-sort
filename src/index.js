
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!!matrix) {
        const newMatrix = matrix.map((item, index) => {
            if (index === 1 || index % 2 === 1) {
                return item.reverse();
            }
            return item;
        });

        return newMatrix.flat();
    }

    return [];
}
