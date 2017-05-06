var aneObj=function(){
    //开始点  结束点（正弦控制）  控制点
    this.rootx=[];
    this.headx=[];
    this.heady=[];  //头部y坐标
    this.amp=[];
    this.alpha=0;
    //this.x=[];
    //this.len=[];
}
aneObj.prototype.num=50;
aneObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.rootx[i]=i*16+Math.random()*20;  //[0,1)
        this.headx[i]=this.rootx[i];
        this.heady[i]=canHeight-250+Math.random()*50;
        this.amp[i]=Math.random()*50+50;
       //this.len[i]=200+Math.random()*50;
    }
}
aneObj.prototype.draw=function(){
    this.alpha+=deltaTime*0.001;
    var l=Math.sin(this.alpha);
    ctx2.save();
    ctx2.globalAlpha=0.6;
    ctx2.lineWidth=20;
    ctx2.lineCap="round";
    ctx2.strokeStyle="#3b154e";
    for(var i=0;i<this.num;i++){
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i],canHeight);
        this.headx[i]=this.rootx[i]+l*this.amp[i];
        ctx2.quadraticCurveTo(this.rootx[i],canHeight-150,this.headx[i],this.heady[i]);
        ctx2.stroke();
    }
    ctx2.restore();
}