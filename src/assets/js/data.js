function data(){
	let curent_data = new Date();
	let year = curent_data.getFullYear();
	return year;


}
document.getElementById('data').innerHTML = data();
