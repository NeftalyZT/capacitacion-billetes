// Lista de billetes con su estado y pistas
const bills = [
    {img: "billete1.jpg", correct: false, hint: "Falta el hilo de seguridad y el número de serie parece modificado."},
    {img: "billete2.jpg", correct: true, hint: "Marca de agua visible, hilo de seguridad intacto."},
    {img: "billete3.jpg", correct: false, hint: "Color incorrecto y textura rara."},
    {img: "billete4.jpg", correct: true, hint: "Todo correcto: números, color y marcas de seguridad."},
    {img: "billete5.jpg", correct: false, hint: "El billete está descolorido y sin marca de agua."},
    {img: "billete6.jpg", correct: true, hint: "Billete original con todos los elementos de seguridad visibles."}
];

let currentIndex = 0;

function showBill() {
    currentIndex = Math.floor(Math.random() * bills.length);
    const billImg = document.getElementById("bill");
    billImg.src = bills[currentIndex].img;
    document.getElementById("result").textContent = "";
    document.getElementById("hint").textContent = "";
}

function checkAnswer(userAnswer) {
    const result = document.getElementById("result");
    const hint = document.getElementById("hint");
    if (userAnswer === bills[currentIndex].correct) {
        result.textContent = "¡Correcto! Has identificado bien el billete.";
        result.style.color = "green";
    } else {
        result.textContent = "Incorrecto. Observa las pistas:";
        result.style.color = "red";
    }
    hint.textContent = bills[currentIndex].hint;
}

function nextBill() {
    showBill();
}

// Inicializar primer billete
showBill();
