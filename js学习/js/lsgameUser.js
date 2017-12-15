window.onload = function() {
	var resultModel;
	var contentDataArr = [{
			"name": "头像",
			"idName": "lsIcon",
			"modelName": "avatar",
			"placeholder": "../images/haha1.jpg"
		},
		{
			"name": "昵称",
			"idName": "lsNickName",
			"modelName": "nickname",
			"placeholder": "请输入昵称"
		},
		{
			"name": "真实姓名",
			"idName": "lsName",
			"modelName": "realname",
			"placeholder": "请输入姓名"
		},
		{
			"name": "性别",
			"idName": "lsSex",
			"modelName": "sex",
			"placeholder": "请选择性别"
		},
		{
			"name": "出生日期",
			"idName": "lsBirthday",
			"modelName": "birthday",
			"placeholder": "请选择出生日期"
		},
		{
			"name": "身份证号",
			"idName": "lsCard",
			"modelName": "idcard",
			"placeholder": "请输入身份号"
		},
		{
			"name": "联系方式",
			"idName": "lsMobile",
			"modelName": "mobile",
			"placeholder": "请输入联系方式"
		},
		{
			"name": "所属俱乐部",
			"idName": "lsBus",
			"modelName": "bus_name",
			"placeholder": "请选择所属俱乐部"
		},
	];
	var dataArrLenght = contentDataArr.length;

	function configBaseView() {
		var lsContent = document.getElementById('content');
		for(var i = 0; i < dataArrLenght; i++) {
			var model = contentDataArr[i];
			var divT = document.createElement('div');
			divT.className = "userBGD";
			var pT1 = document.createElement('p');
			pT1.innerHTML = model.name;
			divT.appendChild(pT1);
			if(i == 0) {
				pT1.style.lineHeight = "8rem";
				var iconImg = document.createElement('img');
				iconImg.id = model.idName;
				iconImg.src = model.placeholder;
				divT.appendChild(iconImg);
				divT.style.height = "8rem";
			} else {
				var pT2 = document.createElement('p');
				pT2.innerHTML = model.placeholder;
				pT2.style.color = "darkgray";
				pT2.id = model.idName;
				divT.appendChild(pT2);
			}

			var imgT = document.createElement('img');
			imgT.src = "../images/icon-jiantou.png";
			divT.appendChild(imgT);
			lsContent.appendChild(divT);
			if(i == 0) {
				imgT.style.top = "3rem";
			}
			if(i == 1) {
				createShowMessView(lsContent);
			}

		}
	}

	function createShowMessView(needobj) {
		var divT = document.createElement('div');
		divT.id = "showMessD";
		needobj.appendChild(divT);
		var pT1 = document.createElement('p');
		pT1.innerHTML = "赛事个人信息完善";
		divT.appendChild(pT1);
		var pT2 = document.createElement('p');
		pT2.innerHTML = "(个人信息仅限修改一次)";
		divT.appendChild(pT2);
	}

	//网络请求
	var xmlhttp;
	if(window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var playerid = getParams("playerid");

	if(playerid != null) {
		xmlhttp.open("GET", "http://192.168.2.199:8080/LSGameApi/getPlayerDetailMess?gameid=1&playerid=" + playerid, true);
		xmlhttp.send();
		xmlhttp.onreadystatechange = function() {
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				configBaseView();
				var tempMode = JSON.parse(xmlhttp.responseText);
				resultModel = tempMode.content;
				for(var i = 0; i < dataArrLenght; i++) {
					var model = contentDataArr[i];
					var modelT = document.getElementById(model.idName);
					if(i == 0) {
						modelT.src = resultModel[model.modelName];
					} else {
						modelT.innerHTML = resultModel[model.modelName];
					}
					modelT.style.color = "black";
				}
			}
		}
	}

	// 获取链接参数
	function getParams(key) {
		var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) {
			return unescape(r[2]);
		}
		return null;
	};
	msgAlert("success", "登录成功！");

	function msgAlert(type, msg) {
		$('.msg_' + type).html(msg);
		$('.msg_' + type).animate({
			'top': 0
		}, 500);
		setTimeout(function() {
			$('.msg_' + type).animate({
				'top': '-3rem'
			}, 500)
		}, 2000);
	}

	$(document).ready(function() {
		var htmlstyle = "<style>body{padding:0;margin:0;}.msg{color:#FFF;width:100%;height:3rem;text-align:center;font-size:1.2rem;line-height:3rem;position:fixed;top:-3rem;z-index:20;}" +
			".msg_success{background-color:#1fcc6c;}" +
			".msg_warning{background-color:#e94b35;}" +
			".msg_primary{background-color:#337ab7;}" +
			".msg_info{background-color:#5bc0de;}</style>";
		$('head').append(htmlstyle);
		$('body').prepend('<div class="msg msg_success"></div>' +
			'<div class="msg msg_warning"></div>' +
			'<div class="msg msg_primary"></div>' +
			'<div class="msg msg_info"></div>');
	})

}