function mudaTamanho(id, scala) {
    return () => {
        const div = document.getElementById(id);
        div.style.fontSize = `${scala}px`;
    };
}

const pequeno = mudaTamanho("pe", 10);

const peElement = document.getElementById("pe");
peElement.addEventListener("click", pequeno);

const medio = mudaTamanho("me", 20);

const meElement = document.getElementById("me");
meElement.addEventListener("click", medio);

const grande = mudaTamanho("gr", 30);

const grElement = document.getElementById("gr");
grElement.addEventListener("click", grande);
