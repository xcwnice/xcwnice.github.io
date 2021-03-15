//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  "url(/img/xcw/34.jpg)",
  "url(/img/xcw/56.jpg)",
  "url(/img/xcw/bg1.jpg)",
  "url(/img/xcw/bg2.jpg)",
  "url(/img/xcw/bg4.jpg)",
  "url(/img/xcw/bg6.jpg)",
  "url(/img/xcw/bg7.jpg)",
  "url(/img/xcw/bg8.jpg)",
  "url(/img/xcw/bg9.jpg)",
  "url(/img/xcw/bg10.jpg)",
  "url(/img/xcw/bg11.jpg)",
  "url(/img/xcw/bg12.jpg)",
  "url(/img/xcw/bg13.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.ceil(Math.random() * (backimg.length-1));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
