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
       // public tempF : Sprite;
        //public humidity : Sprite;
        
        constructor() {
            super();
            this.bus = new EventBus(runtime);
            /*this.element = <SVGSVGElement><any>document.getElementById('svgcanvas');
            this.spriteTempF = <SVGCircleElement>this.element.getElementById('svgsprite');
            this.spriteHumidity = <SVGCircleElement>this.element.getElementById('svgsprite2');*/
            /*this.tempF = new Sprite(this.spriteTempF.cx.baseVal.value,
                this.spriteTempF.cy.baseVal.value)
            this.humidity = new Sprite(this.spriteHumidity.cx.baseVal.value,
                this.spriteHumidity.cy.baseVal.value)*/

        

  
                         
  }        
        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {

           
            document.body.innerHTML = ''; // clear children
            //document.body.appendChild(this.element);
                  //Circle Data Set
  /*var circleData = [
    { "cx": 75, "cy": 150, "radius": 50, "color" : "green" , "id":"humid"},
    { "cx": 200, "cy": 150, "radius": 50, "color" : "purple", "id":"temp" },
    //{ "cx": 120, "cy": 100, "radius": 20, "color" : "blue","id":"pressure" },
    //{ "cx": 170, "cy": 100, "radius": 20, "color" : "red","id":"altitude" }
];*/
  
  //Create the SVG Viewport
  /*var svgContainer = d3.select("body").append("svg")
                                       .attr("width",300)
                                       .attr("height",300);*/
 
 //Add circles to the svgContainer
 //var circles = svgContainer.selectAll("circle").data(circleData).enter().append("circle");
 
 //Add the circle attributes
 /*var circleAttributes = circles
                      .attr("cx", function (d) { return d.cx; })
                        .attr("cy", function (d) { return d.cy; })
                      .attr("r", function (d) { return d.radius; })
                       .style("fill", function (d) { return d.color; })
                       .attr("id",function (d) {return d.id;});*/

//Add the SVG Text Element to the svgContainer
//var text = svgContainer.selectAll("text").data(circleData).enter().append("text");

//Add SVG Text Element Attributes
/*var textLabels = text
                 .attr("x", function(d) { return d.cx; })
                 .attr("y", function(d) { return d.cy; })
                 .text( function (d) { return ""; })
                 .attr( "id", function(d) {return d.id+"_text";})
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("fill", "black")
                 .style("text-anchor", "middle");
*/
            return Promise.resolve();
       // }       
        
       /* updateView() {
            console.log("in update function");
            //var svg = d3.select("humid").transform.attr("cy",50);
            d3.select("#humid_text").attr('fill', "white");
            console.log("past update");*/
           
           /* var circleData = [
                { "cx": 20, "cy": 50, "radius": 20, "color" : "green" },
                { "cx": 70, "cy": 50, "radius": 20, "color" : "purple" },
                { "cx": 120, "cy": 50, "radius": 20, "color" : "blue" },
                { "cx": 170, "cy": 50, "radius": 20, "color" : "red" }];
            svg.selectAll("circle")
                .data(circleData)
                .enter().append("circle")
                  .attr("cx", function(d) { return d.cx; })
                  .attr("cy", function(d) { return d.cy; })
                  .attr("r", 20);*/



            //d3.select("circle").transition().text(function (d) {return "13"});
            /*var textLabels = text
                 .attr("x", function(d) { return d.cx; })
                 .attr("y", function(d) { return d.cy; })
                 .text( function (d) { return d.cx; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("fill", "black")
                 .style("text-anchor", "middle");*/

            
           
            /*this.spriteTempF.cx.baseVal.value = this.tempF.x;
            this.spriteTempF.cy.baseVal.value = this.tempF.y;
            this.spriteHumidity.cx.baseVal.value = this.humidity.x;
            this.spriteHumidity.cy.baseVal.value = this.humidity.y;*/
        }
    }
}