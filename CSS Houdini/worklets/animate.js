registerAnimator('scrollanimate', class {
    animate (currentTime, effect) {
        effect.localTime = currentTime;
    }
});