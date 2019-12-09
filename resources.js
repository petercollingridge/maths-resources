var vm = new Vue({
    el: '#math-resources',
    data: {
       title: 'Triangle',
       tileWidth: 30,
       tileHeight: 30,
       gridSize: 16,
       gridSizes: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    },
    computed: {
        nImages: function() {
            var across = Math.floor(970 / (this.gridSize * this.tileWidth));
            var down = Math.floor(610 / (this.gridSize * this.tileHeight));
            return across * down;
        },
        gridWidth: function() {
            return this.gridSize * this.tileWidth + 2;
        },
        gridHeight: function() {
            return this.gridSize * this.tileHeight + 2;
        }
    },
    methods: {
        getX(x, y) {
            return (this.gridWidth - y * this.tileWidth) / 2 + (x - 1) * this.tileWidth;
        },
        getY(y) {
            return this.tileHeight * (y - 1) + 1;
        }
    }
});
