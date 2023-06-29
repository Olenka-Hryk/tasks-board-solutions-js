function showFormElements(arrayOfElements, block) {
    arrayOfElements.forEach((elem) => {
        if (elem.element === "label") {
            addLabel(elem, block);
        } else if (elem.element === "input") {
            addInput(elem, block);
        } else if (elem.element === "p") {
            addP(elem, block);
        } else if (elem.element === "button") {
            addButton(elem, block);
        } else if (elem.element === "select") {
            addSelect(elem, block);
        } else if (elem.element === "option") {
            addOption(elem, block);
        }
    });
}

function addLabel(elem, container) {
    const label = document.createElement("label");
    label.setAttribute("for", elem.for);
    label.classList.add("main-text", "form__label");
    if (elem.classList) label.classList.add(elem.classList);
    label.innerHTML = elem.text;
    container.appendChild(label);
}

function addInput(elem, container) {
    let input = document.createElement("input");
    input.id = elem.id;
    input.setAttribute("placeholder", elem.placeholder);
    input.classList.add("accent-text", "form__input");
    if (elem.classList) input.classList.add(elem.classList);
    input.type = elem.type;
    container.appendChild(input);
}

function addP(elem, container) {
    if (elem.classList.includes("form__result--task")) {
        let p = document.createElement("p");
        p.id = elem.id;
        p.classList.add("accent-text", "form__result");
        if (elem.classList) p.classList.add(elem.classList);
        p.innerHTML = elem.text;
        container.appendChild(p);
    } else if (elem.classList.includes("form__result--task-part")) {
        let p = document.createElement("p");
        p.id = elem.id;
        p.classList.add("accent-text", "form__result");
        if (elem.classList) p.classList.add(elem.classList);
        p.innerHTML = elem.text;
        container.appendChild(p);
    } else {
        let p = document.createElement("p");
        p.id = elem.id;
        p.classList.add("accent-text", "form__result", "form__result--total");
        if (elem.classList) p.classList.add(elem.classList);
        p.innerHTML = elem.text;
        container.appendChild(p);
    }
}

function addButton(elem, container) {
    let button = document.createElement("button");
    button.id = elem.id;
    button.type = "button";
    button.classList.add("button");
    if (elem.classList) button.classList.add(elem.classList);
    button.innerHTML = elem.text;
    button.addEventListener("click", elem.onclick);
    container.appendChild(button);
}

function addSelect(elem, container) {
    let select = document.createElement("select");
    select.id = elem.id;
    select.classList.add("form__select");
    if (elem.classList) select.classList.add(elem.classList);
    container.appendChild(select);
}

function addOption(elem, container) {
    let option = document.createElement("option");
    option.id = elem.id;
    if (elem.classList) option.classList.add(elem.classList);
    option.value = elem.value;
    option.innerHTML = elem.text;
    container.appendChild(option);
}