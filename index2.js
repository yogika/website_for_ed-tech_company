document.querySelector('.login-sub').addEventListener('click',(e)=>{
e.preventDefault()
let email=document.getElementById('useremail').value;
let password=document.getElementById('password').value;

if(!email  || !password) {
  console.log("Make sure you fill all the details")
  return
}

let obj={password,email}

let postRequest=new XMLHttpRequest()


postRequest.open("POST","http://127.0.0.1:8000/api/v1/user/logIn")


postRequest.addEventListener('load',function(){
  let status=JSON.parse(postRequest.response).status
  console.log(postRequest.response);
  

  
  
  console.log(status)

  if(status==="success") alert("Successfully Logged In")
  else alert("Invalid Credentials")
  
})


postRequest.setRequestHeader('Content-type','application/json')

postRequest.send(JSON.stringify(obj))




})
