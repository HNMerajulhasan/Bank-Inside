//step-1:add click handler with the submit button.
document.getElementById('btn-submit').addEventListener('click',function(){
    //console.log('submit button click');
    //step-2:get the email address inside the input field.
    //always rmember to use  .value to get text from an input field
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    //console.log(email);
    //step-3:get password
    //3.a:set id on the htmel element
    //3.b:get the element
    //3.c:get the value from the elment
    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;
   // console.log(email,password);
   //step-4: verify email and password and check whether valid user not
   if(email=='baperhotel@gmail.com' && password=='secret'){
       window.location.href='bank.html'
   }
   else{
       alert('you have entered a wrong password')
   }
})