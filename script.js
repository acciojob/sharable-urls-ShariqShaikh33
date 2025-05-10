// your code here
let form = document.getElementById("form");
form.addEventListener("submit",(event)=>{
	event.preventDefault();
	let name=document.getElementById("name");
	let year=document.getElementById("year");
	let nameOnUrl = "";
	let yearOnUrl = "";
	if(name.value!=""){
		nameOnUrl="?name="+name.value;
	}
	if(year.value!="" && name.value==""){
		yearOnUrl="?year="+year.value;
	}
	else if(year.value!="" && name.value!=""){
		yearOnUrl="&year="+year.value;
	}
	let result = nameOnUrl+yearOnUrl

	let url = document.getElementById("url");
	url.innerHTML = "https://localhost:8080/"+result;
})
