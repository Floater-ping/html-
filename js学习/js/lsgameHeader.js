// 获取content标签
window.onload = function() {
	// 初始化页面	
	function configView() {
		var dataArr = [{
				"icon": "haha1.jpg",
				"name": "我要购卡"
			},
			{
				"icon": "haha2.jpg",
				"name": "排行榜"
			},
			{
				"icon": "haha2.jpg",
				"name": "我的参赛卡"
			},
			{
				"icon": "haha4.jpg",
				"name": "我的成绩"
			}
		];
		var lsContentD = document.getElementById('lscontent');
		var arrLength = dataArr.length;
		for(var i = 0; i < arrLength; i++) {
			var tempModel = dataArr[i];
			//创建元素
			var figureT = document.createElement('figure');
			var imgT = document.createElement('img');
			imgT.src = "../images/" + tempModel.icon;
			figureT.appendChild(imgT);
			var pT = document.createElement('p');
			pT.innerHTML = tempModel.name;
			figureT.appendChild(pT);
			if(i == 1) {
				var emT = document.createElement('em');
				emT.innerHTML = "NEW";
				figureT.appendChild(emT);
			}
			lsContentD.appendChild(figureT);

		}

	}
	configView();
	//加载网络数据
	var xmlhttp;
	if(window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var tempMode = JSON.parse(xmlhttp.responseText);
			if(tempMode.code == 200) {
				//头像
				var iconI = document.getElementById('lsIcon');
				iconI.src = tempMode.content.avatar;
				var nameT = document.getElementById('lsName');
				nameT.innerHTML = tempMode.content.realname;
				var busT = document.getElementById('lsBus');
				busT.innerHTML = tempMode.content.busName;
				var lsMessT = document.getElementById('lsMess');
				lsMessT.href = lsMessT + "?playerid=" + tempMode.content.playerid;
				
			}

		}
	}

	xmlhttp.open("GET", "http://192.168.2.199:8080/LSGameApi/getPlayerSampleMess?gameid=1&accessToken=AOkAfJh0b1hj9clzBuvkPvMwfr3Vzt5e", true);
	xmlhttp.send();

}