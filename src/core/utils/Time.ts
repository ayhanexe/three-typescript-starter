import App, { IApp } from "@core/App";
import EventEmitter from "@core/utils/EventEmitter";
import { Clock } from "three";

export interface ITime extends EventEmitter {
    base: IApp,
    startTime:number;
    currentTime:number;
    elapsedTime:number;
    deltaTime:number;
    instance: Clock;
    tick: () => void;
}

export default class Time extends EventEmitter implements ITime {
    instance: Clock;
    startTime:number;
    currentTime:number;
    elapsedTime:number;
    deltaTime:number;
    base:IApp;

    constructor() {
        super();

        this.instance = new Clock();
        this.startTime = Date.now();
        this.currentTime = this.startTime;
        this.base = new App();
        
        window.requestAnimationFrame(this.tick.bind(this));
    }

    tick() {
        this.elapsedTime = Date.now() - this.startTime;
        this.deltaTime = this.elapsedTime - this.currentTime;
        this.currentTime = this.elapsedTime;

        this.trigger("tick");

        window.requestAnimationFrame(this.tick.bind(this));
    }
}