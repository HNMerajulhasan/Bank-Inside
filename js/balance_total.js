
 const depositField=document.getElementById('deposit-field');
 const newdepositAmountString=depositField.value;
 const newdepositAmount=parseFloat(newdepositAmountString)


const balanceTotalElement=document.getElementById('balance-total');
const previousBalanceTotalString=balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);
console.log(typeof previousBalanceTotal);



const currentBalanceTotal=previousBalanceTotal+newdepositAmount;
balanceTotalElement.innerText=currentBalanceTotal;