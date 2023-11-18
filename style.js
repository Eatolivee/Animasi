function validateForm() {
	var a = $("#nama_user").val();
	var b = $("#Quest2").val();
	if (a == "") {
		Swal.fire({
			title: 'Nama Kamu?',
			showClass: {popup: 'animate__animated animate__shakeX'},
			background: 'black',
			backdrop: `black left top no-repeat`,
			width: 300,
			timer: 1500,
			timerProgressBar: false,
			allowOutsideClick: false,
			showCancelButton: false,
			showConfirmButton: false,
		});
		return false;
	}
	if (b == "") {
		Swal.fire({
			title: 'Harus diisi semua!',
			showClass: {popup: 'animate__animated animate__shakeX'},
			background: 'black',
			backdrop: `black left top no-repeat`,
			width: 300,
			timer: 1500,
			timerProgressBar: false,
			allowOutsideClick: false,
			showCancelButton: false,
			showConfirmButton: false,
		});
		return false;
	}
}

function nonTo() {document.getElementById('myModal').style.display = "none";}

function showDiv() {document.getElementById('myModal2').style.display = "block";}

var i=0,text;
text = ""
var u=0,text2;
text2 = ""

function ketik() {
	if(i<text.length){
		document.getElementById("text").innerHTML += text.charAt(i);
		i++;
		setTimeout(ketik,100);
	}
	if(i==text.length){
		ketikk();}
	}
	function ketikk() {
		if(u<text2.length){
			document.getElementById("text2").innerHTML += text2.charAt(u);
			u++;
			setTimeout(ketikk,200);
		}
		
	}

	async function mulai(){
		await Swal.fire({
			icon: 'success',
			title: 'Thank you😊',
			showClass: {popup: 'animate__animated animate__bounce'},
			hideClass: {popup: 'animate__animated animate__zoomOut'},
			background: 'black',
			backdrop: `black left top no-repeat`,
			allowOutsideClick: false,
			showCancelButton: false,
			confirmButtonColor: '#d33',
			confirmButtonText: 'oke',
		});

		var name = document.getElementById("nama_user");
		text = "Gooddddddddddddddddddddddddddddddddd    "+ name.value +"            ddddddddddddddddddd!";
		text2 = "Selamattttttttttttttttttt                 tttttttttttttttttttttt";
		ketik();showDiv();nonTo();
	}