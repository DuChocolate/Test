//�жϴ���͹�ʵ�ľ���
function momFruitsCollision(){
    if(!data.gameOver){
        for(var i=0;i<fruit.num;i++){
            if(fruit.alive[i]){
                var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
                if(l<900){
                    //��ʵ���Ե�
                    fruit.dead(i);
                    data.fruitNum++;
                    mom.momBodyCount++;
                    if(mom.momBodyCount>7)
                        mom.momBodyCount=7;
                    if(fruit.fruitType[i]=="blue"){//��ɫ��ʵ�ӱ�
                        data.double=2;
                    }else{
                        data.double=1;
                    }
                    wave.born(fruit.x[i],fruit.y[i]);
                }
            }
        }
    }

}

//����ιС��
function momBabyCollision(){
    if(data.fruitNum>0 && !data.gameOver){
        var l=calLength2(mom.x,mom.y,baby.x,baby.y);
        if(l<900){
            //С��ָ�����
            baby.babyBodyCount=0;
            mom.momBodyCount=0;
            //��������
            data.addScore();
            //��ԲȦ
            halo.born(baby.x,baby.y);
        }
    }
}