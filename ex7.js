let data = {
    name: "NICOLINHA",
    age: 21,
    year: "1",
    course: "Eng de Software"
};

let container = document.getElementById("container");

// Mapeando o objeto
Object.entries(data).forEach(([key, value]) => {
    // Criar label
    let label = document.createElement("label");
    label.textContent = key + ": ";

    // Criar input somente leitura
    let input = document.createElement("input");
    input.type = "text";
    input.value = value;
    input.readOnly = true;

    // Criar wrapper div para label e input
    let wrapper = document.createElement("div");
    wrapper.appendChild(label);
    wrapper.appendChild(input);

    // Adicionar wrapper ao contêiner
    container.appendChild(wrapper);
});
