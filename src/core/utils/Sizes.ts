import EventEmitter from "@core/utils/EventEmitter";

export interface ISizes {
    width: number,
    height: number,
    resizeHandler: () => void
}

export default class Sizes extends EventEmitter implements ISizes {
    width: number;
    height: number;

    constructor() {
        super();

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        window.addEventListener("resize", this.resizeHandler.bind(this));
    }

    resizeHandler(): void {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.trigger("change");
    };
}