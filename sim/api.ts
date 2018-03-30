/// <reference path="../libs/core/enums.d.ts"/>

//import * as WebRequest from 'web-request';


namespace pxsim.sensors {
    //import axios from '../node_modules/axios';
    //var request = require('web-request')
    

    //% weight = 90
    //% blockId=tempF block="Temperature"
    export function tempF(){
        //board().tempF.y+=
        board().updateView();

    }
     //% weight = 85
    //% blockId=humid block="Humidity"
    export async function humidityAsync(){

        
            const response = await fetch('http://api.wunderground.com/api/8f5846f4c43e4050/conditions/q/CO/Denver.json')
        
            const json = await response.json();
        
            console.log(json.current_observation.temp_f);
            //board().updateView();
            var h =  parseFloat(json.current_observation.temp_f);
            console.log("in update function");
            //var svg = d3.select("humid").transform.attr("cy",50);
            d3.select("#humid_text").text(h);
            d3.select("#humid_text").attr("y",200-h);
            d3.select("#humid").attr("cy",200-h);
            console.log("past update");
           
            
        }
       
       /* fetch('http://www.google.com/').then(function(response) {
            console.log(stringify(response)})*/
        /*var result = await request.get('http://www.google.com/');
        console.log(result.content);*/

    

     //% weight = 80
    //% blockId=pressure block="Pressure"
    export function pressure(){

    }

     //% weight = 75
    //% blockId=tvoc block="TVOC"
    export function tvoc(){

    }

     //% weight = 70
    //% blockId=co2 block="CO2"
    export function co2(){

    }
}

namespace pxsim.SensorSystem {
    //% weight = 90
    //% blockId=connect block="Sensor System %Name"
    export function connect(name: string){

    }

    //% weight = 85
    //% blockId=sample_rate block="Sample Rate %Rate"
    export function sample_rate(rate: number){

    }

    //% weight = 85
    //% blockId=upload block="Upload %filename"
    export function upload(filename: string){

    }
} 

namespace pxsim.Data {
    
    //%blockId="led" block="light LED %rgb=colorNumberPicker"
    //% hop.fieldEditor="gridPicker"
    export function LightLED(rgb: number){

    }

     //%blockId="sound" block="Make Noise %howloud"
     export function makeNoise(howLoud: number){

    }
}


namespace pxsim.hare {
    /**
     * This is hop
     */
    //% blockId="sampleHop" block="hop %hop on color %color=colorNumberPicker"
    //% hop.fieldEditor="gridPicker"
    export function hop(hop: Hop, color: number) {

    }

    //% blockId=sampleOnLand block="on land"
    //% optionalVariableArgs
    export function onLand(handler: (height: number, more: number, most: number) => void) {

    }
}

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

namespace pxsim.loops {

    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=55 blockGap=8
    //% blockId=device_forever block="forever" 
    export function forever(body: RefAction): void {
        thread.forever(body)
    }

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=functions/pause weight=54
    //% block="pause (ms) %pause" blockId=device_pause
    export function pauseAsync(ms: number) {
        return Promise.delay(ms)
    }
}

function logMsg(m:string) { console.log(m) }

namespace pxsim.console {
    /**
     * Print out message
     */
    //% 
    export function log(msg:string) {
        logMsg("CONSOLE: " + msg)
        // why doesn't that work?
        board().writeSerial(msg + "\n")
    }
}




namespace pxsim {
    /**
     * A ghost on the screen.
     */
    //%
    


    
    
    



    export class Sprite {

        //import * as WebRequest from '../node_modules/web-request';

        

        /**
         * The X-coordiante
         */
        //%
        public x = 100;
         /**
         * The Y-coordiante
         */
        //%
        public y = 100;
        public angle = 90;
        
        /*constructor() {
        }*/

        constructor(new_x:number,new_y:number){
            this.x=new_x
            this.y=new_y
            this.angle=90
        }
        
        private foobar() {}

        public gettemp(){
            
            
            


      
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
        
        }

        /**
         * Move the thing forward
         */
        //%
        public forwardAsync(steps: number) {

            //var result = await WebRequest.get('http://www.google.com/');
            //console.log(result.content);
            let deg = this.angle / 180 * Math.PI;
            this.x += Math.cos(deg) * steps * 10;
            this.y += Math.sin(deg) * steps * 10;
            board().updateView();

            if (this.x < 0 || this.y < 0)
                board().bus.queue("TURTLE", "BUMP");

            return Promise.delay(400)
        }
    }
}

namespace pxsim.sprites {
    /**
     * Creates a new sprite
     */
    //% blockId="sampleCreate" block="createSprite"
    export function createSprite(pos_x:number,pos_y:number): Sprite {
        return new Sprite(pos_x,pos_y);
    }
}