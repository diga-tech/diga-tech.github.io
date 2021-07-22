
function myFunction() {
    document.getElementById("dropDown").classList.toggle("show");
  }
  
  window.onclick = function(e) {
    if (!e.target.matches('.btn')) {
    let myDropdown = document.getElementById("dropDown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }