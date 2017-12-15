a = 5;
b = 10;
c = a + b;
console.log(c);
//		alert(c);
function butClick() {
	//							document.write(Date());
	//	document.getElementById('testp').innerHTML = "修改段落";
	//	var str = "Visit w3cschool";
	////	var n = str.search("w3cschool");
	//var res = str.replace("w3cschool","annabellia");
	//	alert(res);
	//	try {
	//		alert("welcome guest");
	//	} catch(e) {
	//		alert(e.message);
	//	}
}

function validateForm() {
	//	var x = document.forms["myForm"]["fname"].value;
	//	if(x == null || x == "") {
	//		alert("姓必须填写");
	//		return false;
	//	}
	//	var stVar = document.forms["myForm"]["fname"].value;

	//	if(stVar == null || stVar == "") {
	//		alert("请输入姓名");
	//		return false;
	//	}
	//	var sAge = document.forms["myForm"]["fage"].value;
	//	if(sAge == null || sAge == "") {
	//		alert("请输入年龄");
	//		return false;
	//	}
	//
	//	var x = document.forms["myForm"]["email"].value;
	//	var atpos = x.indexOf("@");
	//	var dotpos = x.lastIndexOf(".");
	//	if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
	//		alert("请输入正确的邮箱地址");
	//		return false;
	//	}
	var text = '{"employees":[' +
		'{"firstName":"John","lastName":"Doe" },' +
		'{"firstName":"Anna","lastName":"Smith" },' +
		'{"firstName":"Peter","lastName":"Jones" }]}';
	obj = JSON.parse(text);
		document.getElementById("demo").innerHTML = 
		obj.employees[1].firstName + " " + obj.employees[1].lastName;
		return false;

}