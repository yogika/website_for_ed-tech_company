console.log("Hello World");
document.querySelector('.cls-submit').addEventListener('click',function(e){
    e.preventDefault()


    let name=document.getElementById('username').value
    let phone_number=document.getElementById('usernumber').value
    let email=document.getElementById('useremail').value
    let _class = document.getElementById('userclass').value
    let state=document.getElementById('userstate').value
    let school=document.getElementById('userschool').value

    if(!name || !phone_number || !email || !_class || !state || !school) alert("Make sure you fill all the blanks")


    let obj={name,phone_number,email,_class,state,school}





    let postRequest=new XMLHttpRequest()


postRequest.open("POST","http://127.0.0.1:8000/api/v1/user/class")


postRequest.addEventListener('load',function(){
  let status=JSON.parse(postRequest.response).status
  

  
  
  console.log(status)

  if(status==="success") alert("Successfully Data stored")
  else alert("Some problem occured")
  
})


postRequest.setRequestHeader('Content-type','application/json')

postRequest.send(JSON.stringify(obj))


})