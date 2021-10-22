export default function preguntas(){

    const d = document
    const $form = d.forms["quizForm"]
    const $submit= d.querySelector(".submit")
    const $span = d.getElementById("encuesta")

    let total = 8
    let puntos = 0
    let respuestas = ["a","c","c","c","b","d","b"]

    $submit.addEventListener("click",e=> {
        e.preventDefault()
        
        for(let i = 1; i<total;i++){
            if($form[`p${i}`].value === null || $form[`p${i}`].value === ""){
                alert("Responde la pregunta "+i)
                return false
            } else{
                if($form[`p${i}`].value === respuestas[i-1]){
                    puntos++
                } else{
                    console.log($form[`p${i}`].value)
                }
            }
        }

        $span.classList.add("encuesta__span")
        $span.innerHTML = `Obtuviste ${puntos} de ${total-1}`

        setTimeout(()=>{
            $span.classList.remove("encuesta__span")
            $span.innerHTML = ""
        },3000)


        puntos = 0
    })
    

}