function convertWhale(){
    const inputValue = document.getElementById('inputarea').value;
    const arr = ['a','e','i','o','u'];
    let str = [];
    for(let i = 0;i<inputValue.length;i++){
        if(inputValue[i]===' '){
            str.push(' ');
        }
        for(let j=0;j<arr.length;j++){
            if(inputValue[i]===arr[j]){
                str.push(inputValue[i]);
            }
        }
        if(inputValue[i]==='e' || inputValue[i]==='u'){
            str.push(inputValue[i]);
        }
    }
    document.getElementById('result').innerHTML = str.join('').toUpperCase();
}