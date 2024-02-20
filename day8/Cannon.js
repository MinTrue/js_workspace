
/*
  클래스 정의 시 반드시 클래스명은 대문자로 시작해야한다.
  혹시, 합성어 인 경우 뒷단어의 첫 철자도 대문자로 시작해야한다.
  ex) My+Server = MyServer
*/ 

//대포 자체가 아니라, 장차 미래에 대포르 생산 할 수 있는 거푸집이다.
//모든 클래스는 언어를 구분하지 않고, 클래스내에 단 두가지 종류의
//코드만 넣을 수 있는데, 즉 변수와 함수만 넣을 수 있다.
class Cannon{
  //생성자 메서드란? 이 객체를 탄생시키는 시점에, 관여되는 초기화 코드를
  //작성할 수 있는 함수를 말한다 주로 객체가 어떠 스타일로 태어날지를 결정
  //ex) 공장에서 자동차를 생산할때, 색상, 어떤 옵셩을 장착할지 결정
  constructor(src,x,y,width,height,velX,velY){
    
    this.img = document.createElement("img");
    this.src=src; //태어날때의 이미지
    this.x=x; //태어날때의 x축 위치
    this.y=y; //태어날때의 y축 위치
    this.velX=velX //X축 속도
    this.velY=velY //Y축 속도

    this.width=width; //태어날떄의 너비
    this.height=height; // 태어날떄의 높이

    //멤버변수들을 이용해, 스타일을 지정
    this.img.src=this.src;
    this.img.style.position="absolute"
    this.img.style.top=this.y+"px";
    this.img.style.left=this.x+"px";
    this.img.style.width=this.width+"px";
    this.img.style.height=this.height+"px";

    //화면에 부착
    document.body.appendChild(this.img); //이미지를 body 태그인 부모에 부착
  }

  //대포알에 움직임을 정의
  //객체지향에서는 움직임을 정의하는 코드가 바로 함수이며, 이 함수는 객체에 소속이 되므로
  //메서드라 불린다.
  move(){
    this.x+= this.velX;
    this.x+= this.velY;

    //위의 증가분을 이용하여 화면에 보여주기(랜더링)
    this.img.style.top=this.y+"px";
    this.img.style.left=this.x+"px";
  }
}