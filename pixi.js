const app = new PIXI.Application();
await app.init({
    resizeTo: window,
    backgroundColor: "royalBlue"
})
app.view.style.position = "absolute"
document.body.appendChild(app.view);

let data = await PIXI.Assets.load('https://pixijs.com/assets/bunny.png');
let img = PIXI.Sprite.from(data);
img.x = 100;
img.y = 100;
// img.anchor = 0.5
img.pivot.set(img.width / 2, img.height / 2);
// img.rotation = 0.1;
app.ticker.add(() => {
    img.rotation += 0.1;
})
app.stage.addChild(img)


const top = new PIXI.Graphics().rect(0, 0, 100, 100).fill({ color: 0x0 });
top.x = 500;
top.y = 200
top.pivot.set(top.width / 2, top.height / 2);
app.ticker.add(() => {
    top.rotation += 0.01;
})
app.stage.addChild(top);


const atlasData = {
    frames: {
        talk1: {
            frame: { x: 0, y: 0, w: 350, h: 350 },
            sourceSize: { w: 350, h: 350 },
            spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 }
        },
        talk2: {
            frame: { x: 350, y: 0, w: 350, h: 350 },
            sourceSize: { w: 350, h: 350 },
            spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 }
        },
        talk3: {
            frame: { x: 700, y: 0, w: 350, h: 350 },
            sourceSize: { w: 350, h: 350 },
            spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 }
        },
        talk4: {
            frame: { x: 1050, y: 0, w: 350, h: 350 },
            sourceSize: { w: 350, h: 350 },
            spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 }
        },
        talk5: {
            frame: { x: 1400, y: 0, w: 350, h: 350 },
            sourceSize: { w: 350, h: 350 },
            spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 }
        },
        walk1: {
            frame: { x: 0, y: 350, w: 350, h: 350 },
            sourceSize: { w: 350, h: 350 },
            spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 }
        },
        walk2: {
            frame: { x: 350, y: 350, w: 350, h: 350 },
            sourceSize: { w: 350, h: 350 },
            spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 }
        },
        walk3: {
            frame: { x: 700, y: 350, w: 350, h: 350 },
            sourceSize: { w: 350, h: 350 },
            spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 }
        },
        walk4: {
            frame: { x: 1050, y: 350, w: 350, h: 350 },
            sourceSize: { w: 350, h: 350 },
            spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 }
        }
    },
    meta: {
        image: '/public/frog.avif',
        size: { w: 1750, h: 700 }
    },
    animations: {
        // Array of frames by name
        talk: ['talk1', 'talk2', 'talk3', 'talk4', 'talk5'],
        walk: ['walk1', 'walk2', 'walk3', 'walk4']
    }
}

// const t1 = await PIXI.Assets.load(atlasData.meta.image);
// let sp = new PIXI.Spritesheet(t1, atlasData);
// await sp.parse();

// const asp = new PIXI.AnimatedSprite(sp.animations.talk);

// app.stage.addChild(asp);




const texture = await PIXI.Assets.load('https://pixijs.com/assets/spritesheet/mc.json');

const explosionTextures = [];
let i;

for (i = 0; i < 26; i++) {
    const texture = PIXI.Texture.from(`Explosion_Sequence_A ${i + 1}.png`);

    explosionTextures.push(texture);
}

for (i = 0; i < 50; i++) {
    // Create an explosion AnimatedSprite
    const explosion = new PIXI.AnimatedSprite(explosionTextures);

    explosion.x = Math.random() * app.screen.width;
    explosion.y = Math.random() * app.screen.height;
    explosion.anchor.set(0.5);
    explosion.rotation = Math.random() * Math.PI;
    explosion.scale.set(0.75 + Math.random() * 0.5);
    explosion.gotoAndPlay((Math.random() * 26) | 0);
    app.stage.addChild(explosion);
}

// Start animating
app.start();