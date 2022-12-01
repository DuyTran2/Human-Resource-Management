class Personel{
    constructor(id,name, avatar, phonenumber , address, dob,taxcode, jobposition, timeworking, salary){
        this.id = id;
        this.name = name;
        this. avatar = avatar;
        this.phonenumber = phonenumber;
        this.address = address;
        this.dob = dob;
        this.taxcode = taxcode;
        this.jobposition = jobposition;
        this.timeworking = timeworking;
        this.salary = salary;
    }
}
const avatar_url = 'https://i.pravatar.cc/150?img='
var personels = [
];
function renderPersonel(){
    let htmls = personels.map(function(personel){
        return `
                <tr>
                    <td>${personel.id}</td>
                    <td>${personel.name}</td>
                    <td>
                        <img src="${personel.avatar}">
                    </td>
                    <td>${personel.phonenumber}</td>
                    <td>${personel.address}</td>
                    <td>${personel.dob}</td>
                    <td>${personel.taxcode}</td>
                    <td>${personel.jobposition}</td>
                    <td>${personel.timeworking}</td>
                    <td>${personel.salary}</td>
                    <td>
                        <i class="fa-solid fa-user-pen" class="btn-edit"  onclick='editPersonel(${personel.id})'></i>
                        <button class="btn-save d-none" id="btn-save-${personel.id}" onclick='save(${personel.id})'>Save</button>
                        <button class="btn-cancel d-none" id="btn-cancel-${personel.id}" onclick='cancel(${personel.id})'>Cancel</button>
                        <i class="fa fa-trash" onclick='removePersonel(${personel.id})'></i>
                    </td>
                </tr>
                `
    });
    document.querySelector('.table').innerHTML = htmls.join("");
}

function changeAvatar(){
    document.querySelector('#reviewAvatar').src = document.querySelector('#avatar').value || `https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg`;
}
function addPersonel(){
    let id = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;
    let avatar= document.querySelector('#avatar').value;
    let phonenumber = document.querySelector('#phonenumber').value;
    let address = document.querySelector('#address').value;
    let dob = document.querySelector('#dob').value;
    let taxcode = document.querySelector('#taxcode').value;
    let jobposition = document.querySelector('#jobposition').value;
    let timeworking = document.querySelector('#timeworking').value;
    let salary = document.querySelector('#salary').value;
    let personel = new Personel(name, avatar, phonenumber, address, dob, taxcode, jobposition, timeworking, salary);
    personels.push(personel);
    localStorage.setItem(personel_key,JSON.stringify(personels));
    renderPersonel();
    resetForm()
}
function resetForm(){
    document.querySelector('#id').value="";
    document.querySelector('#name').value ="";
    document.querySelector('#avatar').value ="";
    document.querySelector('#phonenumber').value ="";
    document.querySelector('#address').value ="";
    document.querySelector('#dob').value ="";
    document.querySelector('#taxcode').value ="";
    document.querySelector('#jobposition').value ="";
    document.querySelector('#timeworking').value ="";
    document.querySelector('#salary').value ="";
    document.querySelector('#reviewAvatar').src ="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
}
const personel_key ="data";
function init(){
    if(localStorage.getItem(personel_key) == null){
        personels = [
            new Personel (1,'Nguyễn Văn A',`${avatar_url}3`, '0901234567', '123A', '12/2/2022', '12345','HR Manager','4','350$'),
            new Personel (2,'Nguyễn Văn B',`${avatar_url}4`, '0901234568', '123B', '12/2/2022', '45356','Chief Human Resources Officer','4','3000$'),
            new Personel (3,'Nguyễn Văn C',`${avatar_url}2`, '0901234569', '123C', '12/2/2022', '23567','HR admin','4','450$'),
            new Personel (4,'Nguyễn Văn D',`${avatar_url}7`, '0901234565', '123D', '12/2/2022', '24576','Recruitment Specialist','4','750$'),
            new Personel (5,'Nguyễn Văn E',`${avatar_url}10`, '0901234566', '123E', '12/2/2022', '24565','Training and Development Specialist','4','650$'),
        ];
        localStorage.setItem(personel_key, JSON.stringify(personels));
    }else{
        personels = JSON.parse(localStorage.getItem(personel_key));
    }
}


function removePersonel(personelID){
    let confirm = window.confirm('Are you sure to remove this personel?');
    if(confirm){
        // personels.splice(0,id);
        // localStorage.setItem(personel_key,JSON.stringify(personels));
        // renderPersonel();
        for (var k in personels){
            if(personels[k]["id"] == personelID){
                personels.splice(k, 1);
                localStorage.setItem(personel_key,JSON.stringify(personels));
                renderPersonel()
            }
        }
        
    }
}
function editPersonel(personelID){
    let person = personels.find(function(person){
        return person.id == personelID
    })
    document.querySelector('#id').value= person.id;
    document.querySelector('#name').value = person.name;
    document.querySelector('#avatar').value = person.avatar;
    document.querySelector('#phonenumber').value = person.phonenumber;
    document.querySelector('#address').value = person.address;
    document.querySelector('#dob').value = person.dob;
    document.querySelector('#taxcode').value = person.taxcode;
    document.querySelector('#jobposition').value = person.jobposition;
    document.querySelector('#timeworking').value = person.timeworking;
    document.querySelector('#salary').value = person.salary;
    var element_btn_save = document.getElementById("btn-save-"+personelID);
        element_btn_save.classList.remove("d-none");
    var element_btn_cancel = document.getElementById("btn-cancel-"+personelID);
        element_btn_cancel.classList.remove("d-none");
        
}
function save(personelID){
    let person = personels.find(function(person){
        return person.id == personelID
    })
    person.name = document.querySelector('#name').value;
    person.avatar = document.querySelector('#avatar').value;
    person.phonenumber = document.querySelector('#phonenumber').value;
    person.address = document.querySelector('#address').value;
    person.dob = document.querySelector('#dob').value;
    person.taxcode = document.querySelector('#taxcode').value;
    person.jobposition = document.querySelector('#jobposition').value;
    person.timeworking = document.querySelector('#timeworking').value;
    person.salary = document.querySelector('#salary').value;
    var element_btn_save= document.getElementById("btn-save-"+personelID);
        element_btn_save.classList.add("d-none");
    var element_btn_cancel = document.getElementById("btn-cancel-"+personelID);
        element_btn_cancel.classList.add("d-none");
    localStorage.setItem(personel_key, JSON.stringify(personels));
    renderPersonel();
    resetForm()
    
}
function cancel(personelID){
    var element_btn_save= document.getElementById("btn-save-"+personelID);
        element_btn_save.classList.add("d-none");
    var element_btn_cancel = document.getElementById("btn-cancel-"+personelID);
        element_btn_cancel.classList.add("d-none");
    resetForm()
}


init();
renderPersonel();

