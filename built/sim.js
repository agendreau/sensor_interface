var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
//import * as WebRequest from 'web-request';
var pxsim;
/// <reference path="../libs/core/enums.d.ts"/>
//import * as WebRequest from 'web-request';
(function (pxsim) {
    var sensors;
    (function (sensors) {
        //import axios from '../node_modules/axios';
        //var request = require('web-request')
        //% weight = 90
        //% blockId=tempF block="Temperature"
        function tempF() {
            pxsim.board().tempF.y += 1;
            pxsim.board().updateView();
        }
        sensors.tempF = tempF;
        //% weight = 85
        //% blockId=humid block="Humidity"
        function humidityAsync() {
            return __awaiter(this, void 0, void 0, function () {
                var response, json;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fetch('http://api.wunderground.com/api/8f5846f4c43e4050/conditions/q/CO/Denver.json')];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            json = _a.sent();
                            pxsim.console.log(json.current_observation.temp_f);
                            return [2 /*return*/];
                    }
                });
            });
        }
        sensors.humidityAsync = humidityAsync;
        /* fetch('http://www.google.com/').then(function(response) {
             console.log(stringify(response)})*/
        /*var result = await request.get('http://www.google.com/');
        console.log(result.content);*/
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
            //import * as WebRequest from '../node_modules/web-request';
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
        Sprite.prototype.gettemp = function () {
            //var result = await WebRequest.get('http://www.google.com/')
            //console.log(result.content)
            //import request = require('request');
            /*request.get('http://10.255.255.1', {timeout: 1500}, (err:any) => {
                console.log(err.code === 'ETIMEDOUT');
                // Set to `true` if the timeout was a connection timeout, `false` or
                // `undefined` otherwise.
                console.log(err.connect === true);
                process.exit(0);
            });*/
            //return Promise.delay(400)
        };
        /**
         * Move the thing forward
         */
        //%
        Sprite.prototype.forwardAsync = function (steps) {
            //var result = await WebRequest.get('http://www.google.com/');
            //console.log(result.content);
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
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
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
