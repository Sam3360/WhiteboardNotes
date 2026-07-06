const colors=["#FDE68A","#BFDBFE","#FBCFE8","#BBF7D0","#FED7AA"];const board=document.getElementById("board");const ta=document.getElementById("note");
let notes=JSON.parse(localStorage.notes||"[]");function save(){localStorage.notes=JSON.stringify(notes)}
function render(){board.innerHTML="";notes.forEach((n,i)=>{let d=document.createElement("div");d.className="note";d.style.background=n.c;d.innerHTML=`<span class=del>🗑️</span><div>${n.t.replace(/</g,"&lt;")}</div><small>${n.time}</small>`;d.querySelector(".del").onclick=()=>{notes.splice(i,1);save();render()};board.appendChild(d);});}
document.getElementById("add").onclick=add;ta.onkeydown=e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();add();}}
function add(){let t=ta.value.trim();if(!t)return;notes.unshift({t,c:colors[Math.random()*colors.length|0],time:new Date().toLocaleString()});ta.value="";save();render();}
const sw=document.getElementById("switch-sun-moon");if(localStorage.theme==="dark"){document.body.classList.add("dark");sw.checked=true}
sw.onchange=()=>{document.body.classList.toggle("dark",sw.checked);localStorage.theme=sw.checked?"dark":"light";}
render();