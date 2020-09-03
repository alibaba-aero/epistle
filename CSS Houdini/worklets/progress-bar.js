class ProgressBarPaint {
    static get inputProperties() {
        return ['--progress'];
    }

    paint (ctx, geometry, properties) {
        const { width, height } = geometry;
        const progress = properties.get('--progress');
        ctx.beginPath();
        ctx.rect(0, 0, width * progress / 100, height);
        ctx.fillStyle = "#419cd9";
        ctx.fill();

        ctx.beginPath();
        ctx.rect(0, 0, width, height);
        ctx.lineWidth = "4";
        ctx.strokeStyle = "#06578f";
        ctx.stroke();
    }
}

registerPaint('progressPaint', ProgressBarPaint);