function evaluateFormula(formula) {  
    try {  
        
        const receivedAmount = parseFloat(document.getElementById("receivedAmount").value) || 0; 
        const karmozd = parseFloat(document.getElementById("karmozd").value) || 0; 
        const numberOfInstallments = parseInt(document.getElementById("numberOfInstallments").value) || 0;  

        if (receivedAmount < 0 || karmozd < 0 || numberOfInstallments < 1) {  
            return "لطفاً مقادیر معتبر وارد کنید.";  
        }  

   
        const result = eval(formula.replace('receivedAmount', receivedAmount).replace('karmozd', karmozd).replace('numberOfInstallments', numberOfInstallments));  
        return isNaN(result) ? "Formula Invalid" : result.toFixed(1);   
    } catch (error) {  
        return "Formula Invalid";  
    }  
}  

const inputs = document.querySelectorAll('input[type="number"]'); 
const resultOutput = document.getElementById('result');  

inputs.forEach(input => {  
    input.addEventListener('input', () => {  
        const formula = "(((karmozd / 100) * numberOfInstallments + 1) * receivedAmount) / numberOfInstallments"; 
        resultOutput.value = evaluateFormula(formula);  
    });  
});  