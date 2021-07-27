'use strict';

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d'); //렌더링 콘텍스트 2d

        //브라우저 조건에 따라 해상도 조절
        this.pixelRatio = window.devicePixelRatio > 1 ? 2: 1;
        // bind 함수에 대한 내용 : https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=writer0713&logNo=220487461542

        window.addEventListener('resize', this.resize.bind(this), false);
        //resize함수를 이 객체에 묶음
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
        //다음 애니메이션으로 전환할때 animate함수 호출, 그런데 animate함수를 이 객체에 바인딩
    }   

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this. pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio); //브라우저별 픽셀값에 따라 단위 조절
        /*
        .scale()
        객체의 정보들(x,y좌표, 가로세로 길이등)을 가로는 x만큼, 세로는 y 만큼 곱해줍니다.
        ctx.scale( 10,3 );   //가로10, 세로3만큼 확대

        */
    }

    animate(){
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight); //캔버스 전체 영역 지우기
        this.ctx.fillStyle = 'yellow'; //도형을 채우는 색 설정
        // this.ctx.strokeStyle = '#cddb49'; //도형의 윤곽선 색 설정
        this.ctx.beginPath();
        this.ctx.arc(
            this.stageWidth/2,
            this.stageHeight/2,
            400,
            0,
            2*Math.PI 
        );
        this.ctx.fill();
    }

}

window.onload = () =>{
    new App();

}