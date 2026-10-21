const KEY="todo-tasks";
let tasks=[],editing=null,filter="all";
try{tasks=JSON.parse(localStorage.getItem(KEY))||[]}catch(e){tasks=[]}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(tasks))}catch(e){}};
const $=id=>document.getElementById(id);
function render(){
  const open=tasks.filter(t=>!t.done).length;
  $("count").textContent=tasks.length?open+" of "+tasks.length+" tasks left":"Nothing to do yet";
  const box=$("list");box.innerHTML="";
  if(!tasks.length){box.innerHTML='<div class="empty">No tasks yet. Type one above and press Add task.</div>';return}
  const visible=tasks.filter(t=>filter==="all"||(filter==="active"?!t.done:t.done));
  if(!visible.length){box.innerHTML='<div class="empty">No tasks in this view.</div>';return}
  const ul=document.createElement("ul");
  visible.forEach(t=>{
    const li=document.createElement("li");if(t.done)li.className="done";
    const cb=document.createElement("input");cb.type="checkbox";cb.checked=t.done;cb.setAttribute("aria-label","Mark done");
    cb.onchange=()=>{t.done=cb.checked;save();render()};
    li.appendChild(cb);
    if(editing===t.id){
      const inp=document.createElement("input");inp.type="text";inp.value=t.text;inp.maxLength=200;
      const commit=()=>{const v=inp.value.trim();if(v)t.text=v;editing=null;save();render()};
      inp.onkeydown=e=>{if(e.key==="Enter")commit();if(e.key==="Escape"){editing=null;render()}};
      const ok=document.createElement("button");ok.textContent="Save";ok.onclick=commit;
      li.append(inp,ok);
      setTimeout(()=>inp.focus(),0);
    }else{
      const s=document.createElement("span");s.textContent=t.text;
      const ed=document.createElement("button");ed.textContent="Edit";ed.onclick=()=>{editing=t.id;render()};
      const dl=document.createElement("button");dl.textContent="Delete";dl.className="del";
      dl.onclick=()=>{tasks=tasks.filter(x=>x.id!==t.id);save();render()};
      li.append(s,ed,dl);
    }
    ul.appendChild(li);
  });
  box.appendChild(ul);
}
function add(){
  const v=$("new").value.trim();if(!v)return;
  tasks.unshift({id:Date.now()+Math.random(),text:v,done:false});
  $("new").value="";save();render();$("new").focus();
}
$("addBtn").onclick=add;
$("new").onkeydown=e=>{if(e.key==="Enter")add()};
$("clear").onclick=()=>{tasks=tasks.filter(t=>!t.done);save();render()};
document.querySelectorAll("#filters button").forEach(b=>b.onclick=()=>{
  filter=b.dataset.f;
  document.querySelectorAll("#filters button").forEach(x=>{const on=x===b;x.classList.toggle("on",on);x.setAttribute("aria-pressed",on)});
  render();
});
render();