function displayList() {
  const list = document.getElementById("fruits").children;
  let res = "<ul>";
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
    res += `<li>${list[i].innerHTML}</li>`;
  }
  res += "</ul>";
  document.getElementById("fruits").innerHTML = res;
}
