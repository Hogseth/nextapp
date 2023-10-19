import changeSlug from "./Product"

export default function Navigation({changeSlug}){

    const btn1 = document.getElementById("btn1")
    if (btn1) {
        btn1.addEventListener("click", changeSlug("pizza"))
    }
    

    return(
        <>
        <nav>
            <button onClick="changeSlug('pizza')">Pizza</button>
            <button id="btn2">Pasta</button>
            <button id="btn3">Steak</button>
            <button id="btn4">Chicken</button>
        </nav>
        </>
    )
}