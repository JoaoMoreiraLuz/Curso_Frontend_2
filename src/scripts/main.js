document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('RNG').addEventListener('submit', function(e) {
        e.preventDefault();
        let numeroMax = document.getElementById('numero-max').value;
        numeroMax = parseInt(numeroMax);

        let RNGnumber = Math.random() * numeroMax;
        RNGnumber = Math.floor(RNGnumber + 1);

        document.getElementById('valorResultado').innerText = RNGnumber;
        document.querySelector('.resultado').style.display = 'block';
    })
})
