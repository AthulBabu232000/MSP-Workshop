function buttonclick(val)
{
 document.getElementById("scr-txt").value=document.getElementById("scr-txt").value+val
}
function cleardisplay(val)
{
  document.getElementById("scr-txt").value=""
}
function equalclick(val)
{
    var txt=document.getElementById("scr-txt").value
    var result=eval(txt)
    document.getElementById("scr-txt").value= result
}