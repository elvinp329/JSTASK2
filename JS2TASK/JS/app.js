var date = new Date();


var P329 = 'Axşam qrupu'

var P330 = 'Günorta qrupu'

var P331 = 'Səhər qrupu'

function Axtar() {
    var input = document.getElementById('academy').value
    console.log(input)

    if (input === '') {
        alert('Qrupu qeyd edin')
        return
    }


    switch (input) {
        case 'P329':

            document.getElementById("qrup").innerHTML = P329
            document.body.style.backgroundColor = 'black'

            break;

        case 'P330':

            document.getElementById("qrup").innerHTML = P330
            document.body.style.backgroundColor = 'orange'

            break;


        case 'P331':

            document.getElementById("qrup").innerHTML = P331
            document.body.style.backgroundColor = 'blue'

            break;

        default:
            break;
    }
}




