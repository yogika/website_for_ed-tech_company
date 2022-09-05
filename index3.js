document.querySelector('.sign-btn').addEventListener('click',(e)=>{

    e.preventDefault()
    console.log("Hello World");
    let email=document.getElementById('useremail').value;
    let name=document.getElementById('username').value;
    let phone_number=document.getElementById('usernumber').value;
  let password=document.getElementById('password').value;
  
  
  if(!email || !name || !phone_number || !password) {
    console.log("Make sure you fill all the details")
    return
  }
  
  let obj={name,phone_number,password,email}
  
  
  
  let postRequest=new XMLHttpRequest()
  
  
  postRequest.open("POST","http://127.0.0.1:8000/api/v1/user/signUp")
  
  
  postRequest.addEventListener('load',function(){
    console.log(JSON.parse(postRequest.response).status)
  })
  
  
  postRequest.setRequestHeader('Content-type','application/json')
  
  postRequest.send(JSON.stringify(obj))
  
  })
  