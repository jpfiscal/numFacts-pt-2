const submitBtn = document.querySelector('#getFacts');
const factList = document.querySelector('#FactList');

async function getFacts(){
    const baseURL = "http://numbersapi.com";
    let factNums = [
        document.querySelector('#input1').value,
        document.querySelector('#input2').value,
        document.querySelector('#input3').value,
        document.querySelector('#input4').value
    ]
    let factArray = []
    for (let fact in factNums){
        console.log(factNums[fact]);
        let factRes = await axios.get(`${baseURL}/${factNums[fact]}`);
        factArray.push(factRes.data);
    }
    showFacts(factArray);

    // axios.get(`${baseURL}/${factNums[0]}?json`)
    //     .then(res => {
    //         factArray.push(res.data.text)
    //         return axios.get(`${baseURL}/${factNums[1]}?json`);
    //     })
    //     .then(res1 =>{
    //         factArray.push(res1.data.text)
    //         return axios.get(`${baseURL}/${factNums[2]}?json`);
    //     })
    //     .then(res2 =>{
    //         factArray.push(res2.data.text)
    //         return axios.get(`${baseURL}/${factNums[3]}?json`);
    //     })
    //     .then(res3 =>{
    //         factArray.push(res3.data.text)
    //         showFacts(factArray);
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     });
}

function showFacts(results){
    document.getElementById("FactList").innerHTML="";
    results.forEach(function(val){
        let factItem = document.createElement("li");
        factItem.innerText = val;
        factList.appendChild(factItem);
    })
}

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    getFacts()});