const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl)=>{
    counterEl.innerText = "0";
    increamentCounter();

    function increamentCounter() {
        let crntNmbr = +counterEl.innerText;
        const dataCeil = counterEl.getAttribute("data-ceil");
        // console.log(dataCeil);
        const increament = dataCeil / 15;
        crntNmbr = Math.ceil(crntNmbr+increament);
        // console.log(crntNmbr);

        if (crntNmbr < dataCeil){
            counterEl.innerText = crntNmbr;
            setTimeout(increamentCounter, 50);
        }
        else{
            counterEl.innerText = dataCeil;
        }
    }
});