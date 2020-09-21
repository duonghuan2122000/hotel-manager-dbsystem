function openSidebar() {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closeSidebar() {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function showSubItem(){
    var x = document.getElementById('sub-item');
    if(!x.classList.contains('w3-show')){
        x.classList.add('w3-show');
    } else {
        x.classList.remove('w3-show');
    }
}