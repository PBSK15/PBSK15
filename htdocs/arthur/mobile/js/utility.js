var openHeader = false;

	function clickNav(){
		if(openHeader === false){
			document.getElementById("expanded").style.visibility = "visible"; 
			document.getElementById("header").style.height = "225px";
			openHeader = true;
		}else{
			document.getElementById("expanded").style.visibility = "hidden"; 
			document.getElementById("header").style.height = "34px";
			openHeader = false;
		} 
	}

