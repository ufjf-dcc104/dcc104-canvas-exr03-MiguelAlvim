function Barrier(){
	this.h =0;
	this.w =0;
	this.color ="green";
	this.x=0;
	this.y=0;
	this.velx=0;	
	this.vely=0;	
	this.accx=0;	
	this.accy=0;	
}

Barrier.prototype.draw = function (ctx){//HAS TRANSLATE; WE CAN ROTATE AND STUFF
	ctx.save();
		ctx.fillStyle = this.color;
		ctx.strokeStyle = "black";
		ctx.translate(this.x,this.y);
		ctx.fillRect(-this.w/2,0,this.w,this.h);
		//ctx.fillRect(this.w/2,this.h,this.w/2,this.h);//use the height and width to create, just like in OPENGL
		//ctx.rotate(this.angle*Math.PI*2/180)//How to rotate, like in OPENGL
	ctx.restore()
};

Barrier.prototype.move = function (dt){//COMPUTES THE ACCELERATION AND MOVES THE SHIP
	this.velx += this.accx*dt;
	this.vely += this.accy*dt;
	
	if(Math.abs(this.velx) > 0 && Math.abs(this.velx) > 0.001)
		this.x += this.velx;
	else
		this.velx =0;

	if(Math.abs(this.vely) > 0 && Math.abs(this.vely) > 0.001)	
		this.y += this.vely;	
	else
		this.vely =0;
};