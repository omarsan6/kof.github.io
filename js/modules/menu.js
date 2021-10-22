export default function menu(){
    const d = document
    const $btn = d.querySelector(".btn")
    const $nav = d.querySelector(".header__nav")

    d.addEventListener("click",e =>{
        if(e.target === $btn){
            $nav.classList.toggle("header__nav-d")
        }

        if(e.target.matches(".header__nav a")){
            $nav.classList.remove("header__nav-d")
        }
    })
}