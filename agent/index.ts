import "frida-il2cpp-bridge";

console.log("Injecting...");

Il2Cpp.perform(() => {

    const AssemblyCSharp = Il2Cpp.Domain.assembly('Assembly-CSharp').image;
    const TapInteraction = AssemblyCSharp.class('BeatStar.RhythmGame.TapInteraction');
    const SwitchHoldInteraction = AssemblyCSharp.class('BeatStar.RhythmGame.SwitchHoldInteraction');
    const HoldInteraction = AssemblyCSharp.class('BeatStar.RhythmGame.HoldInteraction');

    // Il2Cpp.trace() method was used to understand what's going on when user interacts with the game
    // 
    // Il2Cpp.trace()
    //     .classes(TapInteraction)
    //     .filterMethods(method => !method.name.toLowerCase().includes("ticklogic"))
    //     // .methods(TapInteraction.method("get_TimeForPerfect"))
    //     .and().attach("detailed");

    TapInteraction.method("OnTouchStart").implementation = function (touchInput: Il2Cpp.Object, songTime: number, songTimeOfTouchPoint: number) {
        return this.method("OnTouchStart").invoke(touchInput, this.field<number>("timeForPerfect").value, this.field<number>("timeForPerfect").value);
    }

    SwitchHoldInteraction.method("OnTouchStart").implementation = function (touchInput: Il2Cpp.Object, songTime: number, songTimeOfTouchPoint: number) {
        return this.method("OnTouchStart").invoke(touchInput, this.field<number>("timeForStartPerfect").value, this.field<number>("timeForStartPerfect").value);
    }
    HoldInteraction.method("OnTouchStart").implementation = function (touchInput: Il2Cpp.Object, songTime: number, songTimeOfTouchPoint: number) {
        return this.method("OnTouchStart").invoke(touchInput, this.field<number>("timeForStartPerfect").value, this.field<number>("timeForStartPerfect").value);
    }

});
