
var select = document.getElementById('select');
var pri = document.getElementById('pri');

var getData = () =>{

    var output = fetch("https://dog.ceo/api/breeds/list/all").then((res) =>{
        return res.json();
    }).catch((err) =>{
        console.log(err);
    });

    return output;
}


var drop = () =>{
    var k = getData();

    k.then((resn)=>{
        for (const key in resn.message){
            select.innerHTML += `
            <option value="${key}">${key}</option>
            `
        }
    }).catch((err) =>{
        console.log(err);
    })

}

drop();

var dataFetchall = () =>{
    pri.innerHTML = ``;
    event.preventDefault();
    var sele = select.value;

    
    fetch(`https://dog.ceo/api/breed/${sele}/images`).then((resp)=>{
        return resp.json();
    }).then((respn)=>{
        respn.message.forEach(element => {
                                                                                                     
            pri.innerHTML += `<div class="col-4"><img src="${element}" class="img-fluid"></div>`
        });
    }).catch((err)=>{
        console.log(err);
    });
    

}
var dataFetch = () =>{
    pri.innerHTML = ``;
    event.preventDefault();
    var sele = select.value;

    
    fetch(`https://dog.ceo/api/breed/${sele}/images/random`).then((resp)=>{
        return resp.json();
    }).then((respn)=>{
            
            pri.innerHTML += `<div class="col-4"><img src="${respn.message}" class="img-fluid"></div>`
    }).catch((err)=>{
        console.log(err);
    });
    
}
