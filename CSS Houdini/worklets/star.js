class StarPaint {
    static get inputProperties () {
        return ['--star-n', '--star-rotation'];
    }

    paint (ctx, geometry, properties) {
        const n = properties.get('--star-n');
        let rotation = properties.get('--star-rotation');
        rotation = rotation * (Math.PI / 180);
        const { width, height } = geometry;

        ctx.beginPath();
        ctx.moveTo(Math.sin(rotation)*(width / 2) + (width / 2), -Math.cos(rotation)*(height / 2) + (height / 2));

        for (let i = 0; i < 2*n; i+= 2) {
            const angle = i * (2*Math.PI / n);
            const x = Math.sin(angle + rotation)*(width / 2) + (width / 2);
            const y = -Math.cos(angle + rotation)*(height / 2) + (height / 2);

            ctx.lineTo(x, y);
        }

        ctx.strokeStyle = 'black';
        ctx.lineWidth = '4';

        ctx.closePath()

        ctx.stroke();
    }
}

registerPaint('starPaint', StarPaint);
