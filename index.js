document.querySelector(".indi-btn").addEventListener("click", function (e) {

  e.preventDefault()
  let name = document.getElementById("username").value;
  let phone_number = document.getElementById("usernumber").value;
  let email_id = document.getElementById("useremail").value;
  let occupation = document.getElementById("useroccupation").value;
  let state = document.getElementById("userstate").value;
  let organization = document.getElementById("userorganization").value;

  if (!name) console.log("Name not entered");
  if (!phone_number) console.log("Phone number not enetered");
  if (!email_id) console.log("Email ID not entered");
  if (!occupation) console.log("Occupation not entered");
  if (!state) console.log("state not entered");
  if (!organization) console.log("organization not entered");

  let obj = { name, phone_number, email_id, occupation, state, organization };

  console.log(obj);

  let postRequest = new XMLHttpRequest();
  postRequest.open("POST", "http://127.0.0.1:8000/api/v1/user");

  postRequest.setRequestHeader("Content-type", "application/json");
  postRequest.addEventListener("load", function () {
    let response = JSON.parse(postRequest.response);

    console.log(response.status)
  });

  postRequest.send(JSON.stringify(obj));
});





