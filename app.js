let filterInput = document.querySelector("#filterInput");

filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  //   console.log(1);

  // get value of input
  let filterValue = document.querySelector("#filterInput").value.toUpperCase();
  //   console.log(filterValue);

  // Get name Or state values
  let nameOrState = document.querySelectorAll("div.collection-item");
  //   console.log(li);

  for (let i = 0; i < nameOrState.length; i++) {
    let a = nameOrState[i].querySelectorAll(".a")[0];
    console.log(a);
    // if matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      nameOrState[i].style.display = "";
    } else {
      //if not matched
      nameOrState[i].style.display = "none";
    }
  }
}
