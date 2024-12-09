

const btn1 = document.getElementById("addpara");
btn1.addEventListener("click",()=>{
    const para = document.createElement("p");
para.id = "para-1";
para.style.color="Red";
para.style.backgroundColor="Yellow";
para.innerHTML="<h4>jkkhhhhhhhhhhhhhh</h4>"
document.body.appendChild(para);
})

const btn2 = document.getElementById("additem");
btn2.addEventListener("click",()=>{
    item.innerText="item-1";
    const list = document.getElementById("list1");
    list.appendChild(item);
})
// we can create react app 
// 1. using cdn
// 2. using CRA:
//    npm
//    npx
// 3. using vite framework

                                                        