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
if (number <= 250000 ){
    tax=0;}
if (number >= 250001 & number <= 500000)
    {tax= 0.05*(number);}
if (number >= 500001 & number <= 750000)
    {tax= 0.1*(number);}
if (number >= 750001 & number <= 1000000)
    {tax= 0.15*(number);}
if (number >= 1000001 & number <= 1250000)
    {tax= 0.2*(number);}
if (number >= 1250001 & number <= 1500000)
    {tax= 0.25*(number)}
if (number >= 1500001)
    {tax= 0.3*(number);}
return tax;    
}
