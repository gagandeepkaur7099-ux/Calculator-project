const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const expression = display.value;

    if (expression.trim() === "") {
        return;
    }

    // Allow only numbers and calculator operators
    if (!/^[0-9+\-*/%.()\s]+$/.test(expression)) {
        display.value = "Error";
        return;
    }

    try {
        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (typeof result !== "number" || !Number.isFinite(result)) {
            display.value = "Error";
            return;
        }

        display.value = Number(result.toPrecision(12)).toString();
    } catch {
        display.value = "Error";
    }
}