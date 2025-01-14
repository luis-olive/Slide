export default class Slide { 
  constructor(slide, wrapper){ 
    this.slide = document.querySelector(slide)
    this.wrapper = document.querySelector(wrapper)
  }
  onStart(event){ 
    event.preventDefault();
  }

  onMove(event){ 

  }

  onEnd(event){ 
    this.wrapper.addEventListener('mousemove', this.onMove)
  }

  addSlideEvent(){ 
    this.wrapper.addEventListener('mousedown', this.onStart)
    this.wrapper.addEventListener('mouseup', this.onEnd)
  }

  bindEvents(){
    this.onStart = this.onStart.bind(this)
    this.onMove = this.onMove.bind(this)
    this.onMove = this.onEnd.bind(this)
  }

  init(){ 
    this.addSlideEvent();
    this.bindEvents();
    return this
  }

}