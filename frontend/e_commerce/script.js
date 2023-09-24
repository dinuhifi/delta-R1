var grandTotal = [];
var grandTot = 0;

function calculateTotal() {
    const existingGrandTot = document.getElementById("grandtotal");
    if (existingGrandTot) {
        existingGrandTot.remove();
        grandTot = 0;
    }

    const grandtotText = document.createElement('p');
    grandtotText.id = "grandtotal";
    for (let i = 0; i < grandTotal.length; i++) {
        grandTot += grandTotal[i];
    }
    grandtotText.textContent = "Grand Total: " + grandTot.toString();
    document.body.appendChild(grandtotText);
}

calculateTotal();

document.getElementById('button1').onclick = function(){

    try{
        const ram = document.querySelector('input[type="radio"][name="ram1"]:checked');
        const storage = document.querySelector('input[type="radio"][name="storage1"]:checked');

        ram.checked = false;
        storage.checked = false;

        const total = 1000+parseInt(ram.value)+parseInt(storage.value);

        grandTotal.push(total);
        calculateTotal();

        const output = document.getElementById("cart");
        const outputContent = document.createElement("li");
        const removeBtn = document.createElement("button");

        removeBtn.textContent = "remove from cart";
        outputContent.textContent = "Model: Standard" + ram.title + ram.value + storage.title + storage.value + " - TOTAL: " + total.toString();

        removeBtn.addEventListener("click" ,() => {
            outputContent.remove();
            grandTotal.splice(grandTotal.indexOf(total),1);
            calculateTotal();
        });
        outputContent.appendChild(removeBtn);
        output.appendChild(outputContent);

    }
    catch(Error) {
        alert("Error! Please check your inputs!");
    }
}

document.getElementById('button2').onclick = function(){

    try{
        const ram = document.querySelector('input[type="radio"][name="ram2"]:checked');
        const storage = document.querySelector('input[type="radio"][name="storage2"]:checked');

        ram.checked = false;
        storage.checked = false;

        const total = 1500+parseInt(ram.value)+parseInt(storage.value);

        grandTotal.push(total);
        calculateTotal();

        const output = document.getElementById("cart");
        const outputContent = document.createElement("li");
        const removeBtn = document.createElement("button");

        removeBtn.textContent = "remove from cart";
        outputContent.textContent = "Model: Pro" + ram.title + ram.value + storage.title + storage.value + " - TOTAL: " + total.toString();

        removeBtn.addEventListener("click" ,() => {
            outputContent.remove();
            grandTotal.splice(grandTotal.indexOf(total),1);
            calculateTotal();
        });
        outputContent.appendChild(removeBtn);
        output.appendChild(outputContent);

    }
    catch(Error) {
        alert("Error! Please check your inputs!");
    }
}

document.getElementById('button3').onclick = function(){

    try{
        const ram = document.querySelector('input[type="radio"][name="ram3"]:checked');
        const storage = document.querySelector('input[type="radio"][name="storage3"]:checked');

        ram.checked = false;
        storage.checked = false;

        const total = 2000+parseInt(ram.value)+parseInt(storage.value);

        grandTotal.push(total);
        calculateTotal();

        const output = document.getElementById("cart");
        const outputContent = document.createElement("li");
        const removeBtn = document.createElement("button");

        removeBtn.textContent = "remove from cart";
        outputContent.textContent = "Model: Ultra" + ram.title + ram.value + storage.title + storage.value + " - TOTAL: " + total.toString();

        removeBtn.addEventListener("click" ,() => {
            outputContent.remove();
            grandTotal.splice(grandTotal.indexOf(total),1);
            calculateTotal();
        });
        outputContent.appendChild(removeBtn);
        output.appendChild(outputContent);

    }
    catch(Error) {
        alert("Error! Please check your inputs!");
    }
}