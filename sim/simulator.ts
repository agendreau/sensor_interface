/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

namespace pxsim {
    /**
     * This function gets called each time the program restarts
     */
    initCurrentRuntime = () => {
        runtime.board = new Board();
    };

    /**
     * Gets the current 'board', eg. program state.
     */
    export function board() : Board {
        return runtime.board as Board;
    }

    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    export class Board extends pxsim.BaseBoard {
        public bus: EventBus;
        public element : SVGSVGElement;
        public spriteTempF: SVGCircleElement;
        public spriteHumidity: SVGCircleElement
        public tempF : Sprite;
        public humidity : Sprite;
        
        constructor() {
            super();
            this.bus = new EventBus(runtime);
            this.element = <SVGSVGElement><any>document.getElementById('svgcanvas');
            this.spriteTempF = <SVGCircleElement>this.element.getElementById('svgsprite');
            this.spriteHumidity = <SVGCircleElement>this.element.getElementById('svgsprite2');
            this.tempF = new Sprite(this.spriteTempF.cx.baseVal.value,
                this.spriteTempF.cy.baseVal.value)
            this.humidity = new Sprite(this.spriteHumidity.cx.baseVal.value,
                this.spriteHumidity.cy.baseVal.value)

        }
        
        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
            document.body.innerHTML = ''; // clear children
            document.body.appendChild(this.element);

            return Promise.resolve();
        }       
        
        updateView() {
            this.spriteTempF.cx.baseVal.value = this.tempF.x;
            this.spriteTempF.cy.baseVal.value = this.tempF.y;
            this.spriteHumidity.cx.baseVal.value = this.humidity.x;
            this.spriteHumidity.cy.baseVal.value = this.humidity.y;
        }
    }
}