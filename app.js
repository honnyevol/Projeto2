const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburguer = document.querySelector(".hamburguer");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();
tl.fromTo(hero,4,{height:"0%"},{height:"80%",ease:Power2.easeInOut})
.fromTo(hero,4.8,{width:"100%"},{width:"80%",ease:Power2.easeInOut})
.fromTo(slider,4.8,{x:"-100%"},{x:"0%",ease:Power2.easeInOut},"-=1.2")
.fromTo(headline,2,{opacity:0,x:30},{opacity:1,x:0},"-=0.5");    

let imagens =document.querySelectorAll('.small_img');
        let modal=document.querySelector('.modal');
        let modalImg=document.querySelector('#modal_img');
        let btClose=document.querySelector('#bt_close');
        
        for(let i=0;i<imagens.length;i++)
        {
            imagens[i].addEventListener('click',function(){
                srcVal=imagens[i].getAttribute('src');
                modalImg.setAttribute('src',srcVal);
                modal.classList.toggle('modal_active');

            });
        }
        btClose.addEventListener('click',function(){
            modal.classList.toggle('modal_active');
        });

        window.onload = function() {
            lax.setup() // init
        
            const updateLax = () => {
                lax.update(window.scrollY)
                window.requestAnimationFrame(updateLax)
            }
        
            window.requestAnimationFrame(updateLax)
        }

        

        var selectedRow=null

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow==null)
    insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}
function readFormData(){
    var formData = {};
    formData["fullName"]=document.getElementById("fullName").value;
    formData["empCode"]=document.getElementById("empCode").value;
    formData["salary"]=document.getElementById("salary").value;
    formData["city"]=document.getElementById("city").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm(){
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.fullName;
    selectedRow.cells[1].innerHTML=formData.empCode;
    selectedRow.cells[2].innerHTML=formData.salary;
    selectedRow.cells[3].innerHTML=formData.city;
}
function onDelete(td){

    if(confirm('Are u sure to delete this record?')){

        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate(){
    isValid = true;
    if(document.getElementById("fullName").value == ""){
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    }else{
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}