// Valida que alguno de los elementos del mismo "groupname" haya sido elegido
function validateRadioButtonList() {
    var groupname = 'data[Prereserva][type]';
    var message = '';
    // Recogemos todos los elementos "input" de nuestra página
    var inputs = document.getElementsByTagName("input");
    var hasItems = false;

    // Recorremos cada uno de los elementos,
    for (var i = 0; i < inputs.length; i++) {

        // y seleccionamos si hay alguno de tipo "radio"
        if (inputs[i].type == 'radio') {

            // Verificamos que ese RadioButton pertenece al groupname especificado
            var name = inputs[i].name;
            var isFromGroup = (name.lastIndexOf(groupname) + groupname.length) == name.length;

            // En de encontrar un RadioButton con el groupname...
            if (isFromGroup) {
                // Marcamos que lo hemos encontrado
                hasItems = true;

                // Si hay alguno checkeado, devolver true
                if (inputs[i].checked) {
                    return true;
                }
            }
        }
    }


    if (hasItems) {
        // Si llegamos aquí es que hemos encontrado
        // RadioButton's con el groupname, pero ninguno checkeado
        if (!message)
            message = 'Por favor primero elige entre <Asociado>, <Ahorrador> o <Invitado>.';
        alert(message);
        return false;
    } else {
        // Si llegamos aquí es que no hemos encontrado
        // ningún RadioButton con el groupname buscado
        return true;
    }
}

function validateSelect() {

    var destino = document.getElementById('PrereservaPlan').value;
    if (destino == null || destino == 0) {

        alert('Por favor, seleccione el plan');
        return false;
    }
    return true;
}

function validateInputs() {
    var fecha_llegada = document.getElementById('data_llegada-s');
    var fecha_salida = document.getElementById('data_salida-s');
    var adultos = document.getElementById('PrereservaAdults');
    var ninos = document.getElementById('PrereservaChildren');

    if (fecha_llegada.value === null || fecha_llegada.value === "") {
        alert('Por favor, ingrese la fecha de llegada en formato Año-mes-día.');
        return false;
    } else if (fecha_salida.value === null || fecha_salida.value === "") {
        alert('Por favor, ingrese la fecha de salida en formato Año-mes-día.');
        return false;
    } else if (adultos.value === null || adultos.value === "" || adultos.value == 0) {
        alert('Por favor, ingrese la cantidad de adultos que viajan.');
        return false;
    } else if (ninos.value === null || ninos.value === "") {
        alert('Por favor, ingrese la cantidad de niños que viajan.');
        return false;
    }
    return true;
}

function compararFechas() {

    var fecha1 = document.getElementById('data_llegada-s').value;
    var fecha2 = document.getElementById('data_salida-s').value;

    if ((Date.parse(fecha1)) > (Date.parse(fecha2))) {

        alert('La fecha de llegada no puede ser superior a la fecha de salida.');
        return false;
    } else if ((Date.parse(fecha1) == Date.parse(fecha2))) {

        alert('La cotización debe ser mínimo por 1 día, por favor revise las fechas.');
        return false;
    }
    return true;
}

function validate() {

    if (!validateRadioButtonList()) {
        return false;
    }
    if (!validateSelect()) {
        return false;
    }
    if (!validateInputs()) {
        return false;
    }
    if (!compararFechas()) {
        return false;
    }
}

function solo_numeros(e) {

    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros
    patron = /[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function solo_numeros_guion(e) {

    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8 || tecla == 45) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros
    patron = /[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function sumar_uno(id) {
    var cant = document.getElementById(id).value;
    if (isNaN(cant) || cant == null || cant == '') {
        if (id == 'PrereservaAdults') {
            cant = 2;
        } else {
            cant = 0;
        }
        document.getElementById(id).value = cant;
        return true;
    }
    document.getElementById(id).value = parseInt(cant) + 1;
}

function restar_uno(id) {
    var cant = document.getElementById(id).value;
    if (isNaN(cant) || cant == null || cant == '' || cant < 1) {
        if (id == 'PrereservaAdults') {
            cant = 1;
        } else {
            cant = 0;
        }
    }
    if (cant != 0) {
        if (id == 'PrereservaAdults') {
            if (cant > 1) {
                document.getElementById(id).value = parseInt(cant) - 1;
            }
        } else {
            document.getElementById(id).value = parseInt(cant) - 1;
        }
    }
}

function format(input) {
    var num = input.value.replace(/\,/g, '');
    if (!isNaN(num)) {
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
        num = num.split('').reverse().join('').replace(/^[\,]/, '');
        input.value = num;
    } else {
        alert('Solo se permiten números');
        input.value = input.value.replace(/[^\d\,]*/g, '');
    }

}

function format2(num) {

    if (!isNaN(num)) {
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g, '$1,');
        num = num.split('').reverse().join('').replace(/^[\,]/, '');
        return num;
    }

}