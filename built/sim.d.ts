/// <reference path="../libs/core/enums.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts" />
declare namespace pxsim.sensors {
    function tempF(): void;
    function humidityAsync(): Promise<void>;
    function pressure(): void;
    function tvoc(): void;
    function co2(): void;
}
declare namespace pxsim.SensorSystem {
    function connect(name: string): void;
    function sample_rate(rate: number): void;
    function upload(filename: string): void;
}
declare namespace pxsim.Data {
    function LightLED(rgb: number): void;
    function makeNoise(howLoud: number): void;
}
declare namespace pxsim.hare {
    /**
     * This is hop
     */
    function hop(hop: Hop, color: number): void;
    function onLand(handler: (height: number, more: number, most: number) => void): void;
}
/**
 * Moves the sprite forward
 * @param steps number of steps to move, eg: 1
 */
/**
 * Moves the sprite forward
 * @param direction the direction to turn, eg: Direction.Left
 * @param angle degrees to turn, eg:90
 */
/**
 * Triggers when the turtle bumps a wall
 * @param handler
 */
declare namespace pxsim.loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    function forever(body: RefAction): void;
    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    function pauseAsync(ms: number): Promise<void>;
}
declare function logMsg(m: string): void;
declare namespace pxsim.console {
    /**
     * Print out message
     */
    function log(msg: string): void;
}
declare namespace pxsim {
    /**
     * A ghost on the screen.
     */
    class Sprite {
        /**
         * The X-coordiante
         */
        x: number;
        /**
        * The Y-coordiante
        */
        y: number;
        angle: number;
        constructor(new_x: number, new_y: number);
        private foobar();
        gettemp(): void;
        /**
         * Move the thing forward
         */
        forwardAsync(steps: number): Promise<void>;
    }
}
declare namespace pxsim.sprites {
    /**
     * Creates a new sprite
     */
    function createSprite(pos_x: number, pos_y: number): Sprite;
}
declare namespace pxsim {
    /**
     * Gets the current 'board', eg. program state.
     */
    function board(): Board;
    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    class Board extends pxsim.BaseBoard {
        bus: EventBus;
        element: SVGSVGElement;
        spriteTempF: SVGCircleElement;
        spriteHumidity: SVGCircleElement;
        tempF: Sprite;
        humidity: Sprite;
        constructor();
        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void>;
        updateView(): void;
    }
}
