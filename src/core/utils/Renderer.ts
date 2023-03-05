import { WebGLRenderer, Renderer as ThreeRenderer } from "three";
import EventEmitter from "@core/utils/EventEmitter";
import { IBaseComponent } from "@core/utils/BaseTypes";
import App, { IApp } from "@core/App";

export interface IRenderer {
    base: IApp,
    instance: ThreeRenderer,
    configureRenderer: () => void,
    appendToDOM: () => void
}

export default class Renderer extends EventEmitter implements IBaseComponent, IRenderer {
    base: App;
    instance: ThreeRenderer;

    constructor() {
        super();

        this.base = new App();

        this.setInstance();
        this.configureRenderer();
        this.appendToDOM();

        this.base.time.on("tick", this.render.bind(this));
    }

    appendToDOM(): void {
        document.body.append(this.instance.domElement)
    }

    configureRenderer(): void {
        this.instance.setSize(
            this.base.sizes.width,
            this.base.sizes.height
        );
    }

    setInstance(): void {
        this.instance = new WebGLRenderer();
    }

    render() {
        this.instance.render(
            this.base.scene.instance,
            this.base.camera.instance
        )
    }
}