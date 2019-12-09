var vm = new Vue({
    el: '#math-resources',
    data: {
       title: 'Triangle',
       nImages: 2,
       tileWidth: 30,
       tileHeight: 30,
       gridSize: 16
    },
    computed: {
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
