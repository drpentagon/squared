let instance = null;
let key = {};

class LevelData {
    constructor(key_) {
        if(key !== key_) throw 'Illegal call to singleton';
        this.setupLevels();
    }

    static get instance() {
        if(instance)
            return instance;
              
        return (instance = new LevelData(key));
    }

    setupLevels() {
        this.levels = {};

        this.levels["frame"] = {
            "name":"text frame",
            "walls": [
                {"line":[[0,0],[12,0]]},
                {"line":[[0,12],[12,12]]},
                {"line":[[0,1],[0,11]]},
                {"line":[[12,1],[12,11]]},
            ],
        };        

        this.levels["0"] = {
            "name":"Demo",
            background:"rgb(0,0,0)",
            "length":45,
            "bounce-limit":100,
            "goal": {
                "rotates":true,
                "x":6,
                "y":6,
            },
            "walls": [
                {"line":[[0,0],[12,0]]},
                {"line":[[0,12],[12,12]]},
                {"line":[[0,1],[0,5]]},
                {"line":[[12,1],[12,5]]},
                {"line":[[0,7],[0,11]]},
                {"line":[[12,7],[12,11]]},
                {"points":[[1,4], [3,4], [5,4], [7,4], [9,4], [11,4],
                    [5,5], [7,5], [5, 7], [7,7],
                    [4,1], [4,3], [4,4], [4,5], [4,7], [4,8], [4,9], [4,11],
                    [8,1], [8,3], [8,4], [8,5], [8,7], [8,8], [8,9], [8,11],
                    [1,8], [3,8], [5,8], [7,8], [9,8], [11,8]]},
            ],
            "balls": [
                {"x":3, "y":3, "dx":3, "dy":0},
                {"x":11, "y":11, "dx":0, "dy":3},
                {"x":1, "y":11, "dx":10, "dy":0},
                {"x":2, "y":2, "dx":0, "dy":4},
                {"x":8, "y":6, "dx":-3, "dy":0},
                ],
        };
    }

    getLevel(id_) {
        return this.levels[id_];
    }
}

export default LevelData;