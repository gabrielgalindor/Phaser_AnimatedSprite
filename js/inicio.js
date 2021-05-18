const config ={
	width:800,
	height:600,
	parent:"container",
	type: Phaser.AUTO,
	physics: {
        default: 'arcade',
        arcade: { debug: true }
    },
	scene:{
		preload:preload,
		create:create,
		update: update,
		debug:true
	}
}

console.log("mierda");
var game = new Phaser.Game(config);

function preload(){
	//this.load.image("samus","./assets/runsamus.png");
	//this.load.spritesheet('samus', './assets/runsamus.png', { frameWidth: 23, frameHeight: 36 });
	this.load.atlas('samus', './assets/runsamus.png','./assets/samus-walkatlas.json');
	//this.load.image('logo','./assets/bombillo.png');
}
function create(){
	// const samusAnim = this.anims.create({
 //            key: 'walk',
 //            frames: this.anims.generateFrameNumbers('samus'),
 //            frameRate: 4,
 //            duration:10,
 //            x:24
 //        });

 	
	const samus = this.add.sprite(50,120,"samus","s0.png").setScale(5);
	// this.anims.create ({
	// 	key:'walk',
	// 	frames: this.anims.generateFrameNames('samus',{start:1,end:3}),
	// 	frameRate:5,
	// 	x:24
	// })
	
	// samus.play({ key: 'walk', repeat: 99 });


	this.anims.create({
		key:'walk',
		repeat:-1,
		frameRate:24,
		frames:this.anims.generateFrameNames('samus',{
			prefix:'s',
			suffix:'.png',
			start:0,
			end:7
		})
	})
	samus.play({ key: 'walk', repeat: 99 });

	
}
function update(time,delta){
	
}