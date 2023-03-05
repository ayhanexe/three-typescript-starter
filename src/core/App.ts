import Camera, { ICamera } from "@core/utils/Camera";
import Scene, { IScene } from "@core/utils/Scene";
import Renderer, { IRenderer } from "@core/utils/Renderer";
import Sizes, { ISizes } from "@core/utils/Sizes";
import Time, { ITime } from "@core/utils/Time";

let instance: App = null;

export interface IApp {
    scene: IScene
    camera: ICamera,
    renderer: IRenderer,
    sizes: ISizes
    time: ITime;
}

export default class App implements IApp {
    scene: IScene;
    camera: ICamera;
    renderer: IRenderer;
    sizes: ISizes;
    time: ITime;

    constructor() {
        if (instance) return instance;

        instance = this;

        this.camera = new Camera();
        this.scene = new Scene();
        this.sizes = new Sizes();
        this.time = new Time();
        this.renderer = new Renderer();
    }
}