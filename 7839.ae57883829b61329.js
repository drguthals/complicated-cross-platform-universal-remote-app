"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7839],{7839:(l,i,o)=>{o.r(i),o.d(i,{pwa_camera_modal:()=>c});var r=o(5861),a=o(4334);const c=class{constructor(e){(0,a.r)(this,e),this.facingMode="user",this.onPhoto=(0,a.c)(this,"onPhoto",7),this.noDeviceError=(0,a.c)(this,"noDeviceError",7)}present(){var e=this;return(0,r.Z)(function*(){const t=document.createElement("pwa-camera-modal-instance");t.facingMode=e.facingMode,t.addEventListener("onPhoto",function(){var s=(0,r.Z)(function*(n){e._modal&&e.onPhoto.emit(n.detail)});return function(n){return s.apply(this,arguments)}}()),t.addEventListener("noDeviceError",function(){var s=(0,r.Z)(function*(n){e.noDeviceError.emit(n)});return function(n){return s.apply(this,arguments)}}()),document.body.append(t),e._modal=t})()}dismiss(){var e=this;return(0,r.Z)(function*(){!e._modal||(e._modal&&e._modal.parentNode.removeChild(e._modal),e._modal=null)})()}render(){return(0,a.h)("div",null)}static get style(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:600px;height:600px}"}}}}]);