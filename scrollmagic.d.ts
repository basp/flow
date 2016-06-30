declare namespace ScrollMagic {
    type ScrollDirection = "PAUSED" | "FORWARD" | "REVERSE";

    export interface SceneOptions {
        duration?: number | string | (() => number | string);
        offset?: number;
        triggerElement?: string | Object;
        triggerHook?: number | string;
        reverse?: boolean;
        loglevel?: number;
    }

    export interface PinSettings {
        pushFollowers?: boolean;
        spacerClass?: string;
    }

    interface AddEvent {
        type: string;
        target: Scene;
        // TODO: Check if this boolean is correct (would expect Controller)
        controller: boolean;
    }

    interface ChangeEvent {
        type: string;
        target: Scene;
        what: string;
        newval: any;
    }

    interface DestroyEvent {
        type: string;
        target: Scene;
        reset: boolean;
    }

    interface EndEvent {
        type: string;
        target: Scene;
        progress: number;
        state: "DURING" | "AFTER";
        scrollDirection: ScrollDirection;
    }

    interface EnterEvent {
        type: string;
        target: Scene;
        progress: number;
        state: "DURING";
        scrollDirection: ScrollDirection;
    }

    interface LeaveEvent {
        type: string;
        target: Scene;
        progress: number;
        state: "BEFORE" | "AFTER";
        scrollDirection: ScrollDirection;
    }

    interface ProgressEvent {
        type: string;
        target: Scene;
        progress: number;
        state: "BEFORE" | "DURING" | "AFTER";
        scrollDirection: ScrollDirection;
    }

    interface RemoveEvent {
        type: string;
        target: Scene;
    }

    interface ShiftEvent {
        type: string;
        target: Scene;
        reason: string;
    }

    interface StartEvent {
        type: string;
        target: Scene;
        progress: number;
        state: "BEFORE" | "DURING";
        scrollDirection: ScrollDirection;
    }

    interface UpdateEvent {
        type: string;
        target: Scene;
        startPos: number;
        endPost: number;
        scrollPos: number;
    }

    export class Scene {
        constructor(opts?: SceneOptions);

        addTo(controller: Controller): Scene;
        controller(): Controller;
        destroy(reset?: boolean): void;
        progress(progress?: number): number;
        refresh(): Scene;
        remove(): Scene;
        removeClassToggle(reset?: boolean): Scene;
        removePin(reset?: boolean): Scene;
        setClassToggle(element: string | Object, classes: string): Scene;
        setPin(element: string | Object, settings?: PinSettings): Scene;
        update(immediately?: boolean): Scene;

        duration(newDuration?: number | (() => number)): number;
        enabled(newState?: boolean): boolean;
        loglevel(newLoglevel?: number): number;
        offset(newOffset?: number): number;
        reverse(newReverse?: boolean): boolean;
        triggerElement(newTriggerElement?: string | Object): string | Object;
        triggerHook(newTriggerHook?: number | string): number;

        scrollOffset(): number;
        state(): string;
        triggerPosition(): number;

        on(name: "add", callback: (AddEvent) => void);
        on(name: "change", callback: (ChangeEvent) => void);
        on(name: "destroy", callback: (DestroyEvent) => void);
        on(name: "end", callback: (EndEvent) => void);
        on(name: "enter", callback: (EnterEvent) => void);
        on(name: "leave", callback: (LeaveEvent) => void);
        on(name: "progress", callback: (ProgressEvent) => void);
        on(name: "remove", callback: (RemoveEvent) => void);
        on(name: "shift", callback: (ShiftEvent) => void);
        on(name: "start", callback: (StartEvent) => void);
        on(name: "update", callback: (UpdateEvent) => void);
        on(names: string, callback: Function): Scene;
        off(names: string, callback?: Function): Scene;
        trigger(name: string, vars?: Object): Scene;
    }

    export interface ControllerOptions {
        container?: string | Object;
        vertical?: boolean;
        globalSceneOptions?: SceneOptions;
        loglevel?: number;
        refreshInterval?: boolean;
    }

    type ScrollTargetFunc = (pos, msg?: any) => void;
    type ScrollTarget = number | string | Object | Scene | ScrollTargetFunc;

    type ScrollPosMethod = () => number;

    export class Controller {
        constructor(opts?: ControllerOptions);

        addScene(newScene: Scene): Controller;
        destroy(resetScenes?: boolean): void;
        removeScene(scene: Scene | Scene[]): Controller;
        scrollTo(scrollTarget: ScrollTarget, additionalParameter?: any): Controller;
        update(immediately?: boolean): Controller;
        updateScene(scene: Scene | Scene[], immediately?: boolean): Controller;

        enabled(newState?: boolean): boolean | Controller;
        loglevel(newLogLevel?: number): number | Controller;
        scrollPos(scrollPosMethod?: ScrollPosMethod): number | Controller;
        
        info(about?: string): any;
        info(about: "size"): any;
        info(about: "vertical"): boolean;
        info(about: "scrollPos"): number;
        info(about: "scrollDirection"): string;
        info(about: "container"): Object;
        info(about: "isDocument"): boolean;
    }
}