// Auto-generated from simulator. Do not edit.
declare namespace sensors {
    //import axios from '../node_modules/axios';
    //var request = require('web-request')
    //% weight = 90
    //% blockId=tempF block="Temperature"
    //% shim=sensors::tempF
    function tempF(): void;

    //% weight = 85
    //% blockId=humid block="Humidity"
    //% shim=sensors::humidityAsync promise
    function humidity(): void;

    /* fetch('http://www.google.com/').then(function(response) {
    console.log(stringify(response)})*/
    /*var result = await request.get('http://www.google.com/');
    console.log(result.content);*/
    //% weight = 80
    //% blockId=pressure block="Pressure %sampleRate"
    //% shim=sensors::pressure
    function pressure(): void;

    //% weight = 75
    //% blockId=tvoc block="TVOC %sampleRate"
    //% shim=sensors::tvoc
    function tvoc(): void;

    //% weight = 70
    //% blockId=co2 block="CO2 %sampleRate"
    //% shim=sensors::co2
    function co2(): void;

}
declare namespace SensorSystem {
    //% weight = 90
    //% blockId=connect block="Sensor System %Name"
    //% shim=SensorSystem::connect
    function connect(name: string): void;

    //% weight = 85
    //% blockId=sample_rate block="Sample Rate %Rate"
    //% shim=SensorSystem::sample_rate
    function sample_rate(rate: number): void;

    //% weight = 85
    //% blockId=upload block="Upload %filename"
    //% shim=SensorSystem::upload
    function upload(filename: string): void;

}
declare namespace Data {
    //%blockId="led" block="light LED %rgb=colorNumberPicker"
    //% hop.fieldEditor="gridPicker"
    //% shim=Data::LightLED
    function LightLED(rgb: number): void;

    //%blockId="sound" block="Make Noise %howloud"
    //% shim=Data::makeNoise
    function makeNoise(howLoud: number): void;

}
declare namespace hare {
    /**
     * This is hop
     */
    //% blockId="sampleHop" block="hop %hop on color %color=colorNumberPicker"
    //% hop.fieldEditor="gridPicker"
    //% shim=hare::hop
    function hop(hop: Hop, color: number): void;

    //% blockId=sampleOnLand block="on land"
    //% optionalVariableArgs
    //% shim=hare::onLand
    function onLand(handler: (height: number, more: number, most: number) => void): void;

}
declare namespace loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever"
    //% shim=loops::forever
    function forever(body: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    //% shim=loops::pauseAsync promise
    function pause(ms: number): void;

}
declare namespace console {
    /**
     * Print out message
     */
    //%
    //% shim=console::log
    function log(msg: string): void;

}
    /**
     * A ghost on the screen.
     */
    //%
    declare class Sprite {
        //import * as WebRequest from '../node_modules/web-request';
        /**
         * The X-coordiante
         */
        //%
        //% shim=.x
        public x: number;

        /**
         * The Y-coordiante
         */
        //%
        //% shim=.y
        public y: number;

        /**
         * Move the thing forward
         */
        //%
        //% shim=.forwardAsync promise
        public forward(steps: number): void;

    }
declare namespace sprites {
    /**
     * Creates a new sprite
     */
    //% blockId="sampleCreate" block="createSprite"
    //% shim=sprites::createSprite
    function createSprite(pos_x: number, pos_y: number): Sprite;

}

// Auto-generated. Do not edit. Really.
