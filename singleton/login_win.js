"use strict"
class LoginWinSingleton{
  constructor (){
    this.instance = null;
    this.appendWin();
    this.attachEvent();
  }
  static getInstance(){
    if(!this.instance){
      this.instance = new LoginWinSingleton();

    }
    return this.instance;
  }
  // getName(){
  //   console.log(this.name);
  // }
  appendWin(){
    this.containerElement = document.createElement('div');
    document.body.appendChild(this.containerElement);
    this.containerElement.className = 'layer';
    this.containerElement.innerHTML = "我是登录窗口";
    this.containerElement.style.display = "none";
  }
  attachEvent(){
    var that = this;
    this.containerElement.addEventListener('click',function(){
      that.hide();
    },false);

  }
  hide(){
    this.containerElement.style.display = "none";
  }
  show(){
    this.containerElement.style.display = "block";
  }
}
