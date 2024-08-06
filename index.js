const section=document.querySelector('section')

const color_arr=["purple",'green','red','blue','orange']
for(let i=0;i<500;i++){
    const div=document.createElement('div')
    section.appendChild(div)
    div.addEventListener('mouseover',()=>{
        div.style.background=color_arr[Math.round(Math.random()*5)]
        div.style.transitionDuration="0s"
    })
    div.addEventListener('mouseleave',()=>{
        div.style.background="gray"
        div.style.transitionDuration="2s"
    })
}