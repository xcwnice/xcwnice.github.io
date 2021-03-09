//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  "url(https://i.loli.net/2021/03/09/I5o3NDn4V7f6cwJ.jpg)",
  "url(https://i.loli.net/2021/03/09/LtEoKTdSDku1v8Q.jpg)",
  "url(https://i.loli.net/2021/03/09/gGfYkOB15EPKjv8.jpg)",
  "url(https://i.loli.net/2021/03/09/5Y91PX6oLznCjr7.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.ceil(Math.random() * (backimg.length-1));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
