
document.getElementById('processButton').addEventListener('click', function() {
    const inputNumber = parseFloat(document.getElementById('inputNumber').value);
    if (!isNaN(inputNumber)) {
        const outputElement = document.getElementById('output');
        const result = processNumber(inputNumber);
        outputElement.textContent = `Processed result: ${result}`;
    }
});

function processNumber(number) 
{
if (number <= 300000 ){
    tax=0;}
if (number >= 300001 & number <= 600000)
    {tax= 0.05*(number-300000);}
if (number >= 600001 & number <= 900000)
    {tax= 15000+0.1*(number-600000);}
if (number >= 900001 & number <= 1200000)
    {tax= 45000+0.15*(number-900000);}
if (number >= 1200001 & number <= 1500000)
    {tax= 90000+0.2*(number-1200000);}
if (number >= 1500001)
    {tax=150000+ 0.3*(number-1500000);}
return tax;    
}
