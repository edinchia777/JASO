function  color() {
	document.body.style.backgroundColor="red";
	alert("El fondo es Rojo");
}

function blue() {
	document.body.style.backgroundColor="blue";
	alert("El fondo es Azul");
}

function hora() {
	var fecha = new Date();
	alert("La Hora del sistema es: "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds());
}

function url() {
	location.href;
	alert(location.href);
}

function fecha() {
	var fecha = new Date();
	document.write("Dia "+fecha.getDate()+" del mes "+(fecha.getMonth()+1)+" del año "+fecha.getFullYear());
}