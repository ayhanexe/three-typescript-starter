import { Scene as ThreeScene } from "three";
import EventEmitter from "@core/utils/EventEmitter";
import { IBaseComponent } from "@core/utils/BaseTypes";

export interface IScene {
    instance: ThreeScene
}

export default class Scene extends EventEmitter implements IBaseComponent, IScene {
    instance: ThreeScene;

    constructor() {
        super();

        this.setInstance();
    }

    setInstance(): void {
        this.instance = new ThreeScene();
    }
}