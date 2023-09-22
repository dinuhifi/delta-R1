const totalLaptops = [];

document.getElementById('button1').onclick = function(){

    try{
        ram = document.querySelector('input[type="radio"][name="ram1"]:checked');
        storage = document.querySelector('input[type="radio"][name="storage1"]:checked');

        ram.checked = false;
        storage.checked = false;

        total = 1000+parseInt(ram.value)+parseInt(storage.value);

        outputContent = document.createElement("p");
        removeBtn = document.createElement("button");

        removeBtn.textContent = "remove from cart";
        outputContent.textContent = "standard" + ram.title + ram.value + storage.title + storage.value + " - " + total.toString();

        output = document.getElementById('output');
        output.innerHTML += outputContent.outerHTML;
        output.appendChild(removeBtn);

        totalLaptops.push(total);
        console.log(totalLaptops);
    }
    catch(Error) {
        alert("Error! Please check your inputs!");
        window.location.reload();
    }
}