var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../libs/core/enums.d.ts"/>
var pxsim;
(function (pxsim) {
    var sensors;
    (function (sensors) {
        //% weight = 90
        //% blockId=tempF block="Temperature %sampleRate"
        function tempF() {
            pxsim.board().tempF.y += 1;
            pxsim.board().updateView();
        }
        sensors.tempF = tempF;
        //% weight = 85
        //% blockId=humid block="Humidity %sampleRate"
        function humidity() {
        }
        sensors.humidity = humidity;
        //% weight = 80
        //% blockId=pressure block="Pressure %sampleRate"
        function pressure() {
        }
        sensors.pressure = pressure;
        //% weight = 75
        //% blockId=tvoc block="TVOC %sampleRate"
        function tvoc() {
        }
        sensors.tvoc = tvoc;
        //% weight = 70
        //% blockId=co2 block="CO2 %sampleRate"
        function co2() {
        }
        sensors.co2 = co2;
    })(sensors = pxsim.sensors || (pxsim.sensors = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var SensorSystem;
    (function (SensorSystem) {
        //% weight = 90
        //% blockId=connect block="Sensor System %Name"
        function connect(name) {
        }
        SensorSystem.connect = connect;
        //% weight = 85
        //% blockId=sample_rate block="Sample Rate %Rate"
        function sample_rate(rate) {
        }
        SensorSystem.sample_rate = sample_rate;
        //% weight = 85
        //% blockId=upload block="Upload %filename"
        function upload(filename) {
        }
        SensorSystem.upload = upload;
    })(SensorSystem = pxsim.SensorSystem || (pxsim.SensorSystem = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var Data;
    (function (Data) {
        //%blockId="led" block="light LED %rgb=colorNumberPicker"
        //% hop.fieldEditor="gridPicker"
        function LightLED(rgb) {
        }
        Data.LightLED = LightLED;
        //%blockId="sound" block="Make Noise %howloud"
        function makeNoise(howLoud) {
        }
        Data.makeNoise = makeNoise;
    })(Data = pxsim.Data || (pxsim.Data = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var hare;
    (function (hare) {
        /**
         * This is hop
         */
        //% blockId="sampleHop" block="hop %hop on color %color=colorNumberPicker"
        //% hop.fieldEditor="gridPicker"
        function hop(hop, color) {
        }
        hare.hop = hop;
        //% blockId=sampleOnLand block="on land"
        //% optionalVariableArgs
        function onLand(handler) {
        }
        hare.onLand = onLand;
    })(hare = pxsim.hare || (pxsim.hare = {}));
})(pxsim || (pxsim = {}));
//namespace pxsim.turtle {
/**
 * Moves the sprite forward
 * @param steps number of steps to move, eg: 1
 */
//% weight=90
//% blockId=sampleForward block="forward %steps"
/*export function forwardAsync(steps: number) {
    return board().sprite.forwardAsync(steps)
}*/
/**
 * Moves the sprite forward
 * @param direction the direction to turn, eg: Direction.Left
 * @param angle degrees to turn, eg:90
 */
//% weight=85
//% blockId=sampleTurn block="turn %direction|by %angle degrees"
//% angle.min=-180 angle.max=180
/* export function turnAsync(direction: Direction, angle: number) {
     let b = board();

     if (direction == Direction.Left)
         b.sprite.angle -= angle;
     else
         b.sprite.angle += angle;
     return Promise.delay(400)
 }*/
/**
 * Triggers when the turtle bumps a wall
 * @param handler
 */
//% blockId=onBump block="on bump"
/*export function onBump(handler: RefAction) {
    let b = board();

    b.bus.listen("Turtle", "Bump", handler);
}*/
//}
(function (pxsim) {
    var loops;
    (function (loops) {
        /**
         * Repeats the code forever in the background. On each iteration, allows other code to run.
         * @param body the code to repeat
         */
        //% help=functions/forever weight=55 blockGap=8
        //% blockId=device_forever block="forever" 
        function forever(body) {
            pxsim.thread.forever(body);
        }
        loops.forever = forever;
        /**
         * Pause for the specified time in milliseconds
         * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
         */
        //% help=functions/pause weight=54
        //% block="pause (ms) %pause" blockId=device_pause
        function pauseAsync(ms) {
            return Promise.delay(ms);
        }
        loops.pauseAsync = pauseAsync;
    })(loops = pxsim.loops || (pxsim.loops = {}));
})(pxsim || (pxsim = {}));
function logMsg(m) { console.log(m); }
(function (pxsim) {
    var console;
    (function (console) {
        /**
         * Print out message
         */
        //% 
        function log(msg) {
            logMsg("CONSOLE: " + msg);
            // why doesn't that work?
            pxsim.board().writeSerial(msg + "\n");
        }
        console.log = log;
    })(console = pxsim.console || (pxsim.console = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
    /**
     * A ghost on the screen.
     */
    //%
    var Sprite = /** @class */ (function () {
        /*constructor() {
        }*/
        function Sprite(new_x, new_y) {
            /**
             * The X-coordiante
             */
            //%
            this.x = 100;
            /**
            * The Y-coordiante
            */
            //%
            this.y = 100;
            this.angle = 90;
            this.x = new_x;
            this.y = new_y;
            this.angle = 90;
        }
        Sprite.prototype.foobar = function () { };
        /*public gettemp(){

            import request = require('request');

            request.get('http://10.255.255.1', {timeout: 1500}, (err:any) => {
                console.log(err.code === 'ETIMEDOUT');
                // Set to `true` if the timeout was a connection timeout, `false` or
                // `undefined` otherwise.
                console.log(err.connect === true);
                process.exit(0);
            });
                

 

        
        }*/
        /**
         * Move the thing forward
         */
        //%
        Sprite.prototype.forwardAsync = function (steps) {
            var deg = this.angle / 180 * Math.PI;
            this.x += Math.cos(deg) * steps * 10;
            this.y += Math.sin(deg) * steps * 10;
            pxsim.board().updateView();
            if (this.x < 0 || this.y < 0)
                pxsim.board().bus.queue("TURTLE", "BUMP");
            return Promise.delay(400);
        };
        return Sprite;
    }());
    pxsim.Sprite = Sprite;
})(pxsim || (pxsim = {}));
(function (pxsim) {
    var sprites;
    (function (sprites) {
        /**
         * Creates a new sprite
         */
        //% blockId="sampleCreate" block="createSprite"
        function createSprite(pos_x, pos_y) {
            return new pxsim.Sprite(pos_x, pos_y);
        }
        sprites.createSprite = createSprite;
    })(sprites = pxsim.sprites || (pxsim.sprites = {}));
})(pxsim || (pxsim = {}));
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
var pxsim;
(function (pxsim) {
    /**
     * This function gets called each time the program restarts
     */
    pxsim.initCurrentRuntime = function () {
        pxsim.runtime.board = new Board();
    };
    /**
     * Gets the current 'board', eg. program state.
     */
    function board() {
        return pxsim.runtime.board;
    }
    pxsim.board = board;
    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    var Board = /** @class */ (function (_super) {
        __extends(Board, _super);
        function Board() {
            var _this = _super.call(this) || this;
            _this.bus = new pxsim.EventBus(pxsim.runtime);
            _this.element = document.getElementById('svgcanvas');
            _this.spriteTempF = _this.element.getElementById('svgsprite');
            _this.spriteHumidity = _this.element.getElementById('svgsprite2');
            _this.tempF = new pxsim.Sprite(_this.spriteTempF.cx.baseVal.value, _this.spriteTempF.cy.baseVal.value);
            _this.humidity = new pxsim.Sprite(_this.spriteHumidity.cx.baseVal.value, _this.spriteHumidity.cy.baseVal.value);
            return _this;
        }
        Board.prototype.initAsync = function (msg) {
            document.body.innerHTML = ''; // clear children
            document.body.appendChild(this.element);
            return Promise.resolve();
        };
        Board.prototype.updateView = function () {
            this.spriteTempF.cx.baseVal.value = this.tempF.x;
            this.spriteTempF.cy.baseVal.value = this.tempF.y;
            this.spriteHumidity.cx.baseVal.value = this.humidity.x;
            this.spriteHumidity.cy.baseVal.value = this.humidity.y;
        };
        return Board;
    }(pxsim.BaseBoard));
    pxsim.Board = Board;
})(pxsim || (pxsim = {}));
