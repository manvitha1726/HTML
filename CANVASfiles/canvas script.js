function anim()
{
  var canvas=document.getElementById("id");
  var ctxt=canvas.getContext("2d");
  ctxt.font="50px Algerian";
  ctxt.fillStyle="red";
  ctxt.fillText("Manvitha",10,50);
}
window.addEventListener("load",anim,false);
