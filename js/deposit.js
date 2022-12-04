//step-1: Add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2: Get the deposit amount from the deposit input field.
    // For input field use .value to the value inside the input field.
    const depositField=document.getElementById('deposit-field');
    const newdepositAmountString=depositField.value;
    const newdepositAmount=parseFloat(newdepositAmountString)

 
   //step-3: get the current deposit total
   // for non-input(ex:elemnt,textarea) use innerText to get the text
   const depositTotalElement=document.getElementById('deposit-total');
   const previousdepositTotalString=depositTotalElement.innerText;
   const previousdepositTotal=parseFloat(previousdepositTotalString);
   //console.log(typeof previousdepositTotal);

   // step-4: add numbers to set the total element.
   const currentDepositTotal=previousdepositTotal+newdepositAmount;
   depositTotalElement.innerText=currentDepositTotal;
   
   //step-5: get balance current total.
   const balanceTotalElement=document.getElementById('balance-total');
   const previousBalanceTotalString=balanceTotalElement.innerText;
   const previousBalanceTotal=parseFloat(previousBalanceTotalString);

   //step-6:calculate current total balance
   const currentBalanceTotal=previousBalanceTotal+newdepositAmount;
  //set the balance total
  balanceTotalElement.innerText=currentBalanceTotal;
  

   // step-7:clear the deposit field
   depositField.value='';

})