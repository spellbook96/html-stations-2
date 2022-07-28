function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  console.log(document.getElementById("text"));
  if(e.target.checked){
    document.getElementById("text").style.backgroundColor = "red";
  }
  else{
    document.getElementById("text").style.backgroundColor = "white";
  }
}
