declare namespace ScrollMagic {
    interface SceneOptions {
        tweenChanges?: boolean;
    }

    type TweenObject = string | Object;
    type Duration = number | string;

    interface Scene {
        removeTween(reset?: boolean): Scene;
        setTween(tweenObject: TweenObject, duration?: Duration, params?: Object): Scene;
        tweenChanges(newTweenChanges?: boolean): boolean;
    }
}