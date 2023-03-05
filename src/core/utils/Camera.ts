import { PerspectiveCamera, Camera as ThreeCamera } from "three";
import EventEmitter from "@core/utils/EventEmitter";
import { IBaseComponent } from "@core/utils/BaseTypes";

export interface ICamera {
    instance: ThreeCamera
}

export default class Camera extends EventEmitter implements IBaseComponent, ICamera {
    instance: ThreeCamera;

    constructor() {
        super();

        this.setInstance();
    }

    setInstance(): void {
        this.instance = new PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.01, 2000);
    }
}