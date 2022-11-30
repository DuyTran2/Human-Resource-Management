class Personel{
    constructor(name, avatar, phonenumber , address, dob,taxcode, jobposition, timeworking, salary){
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
                        <i class="fa-solid fa-user-pen" onclick='editPersonel(${personel.id}')></i>
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
            new Personel ('Nguyễn Văn A',`${avatar_url}3`, 'Phone Number', 'Address', '12/2/2022', 'Tax Code','HR Manager','4','350$'),
            new Personel ('Nguyễn Văn A',`${avatar_url}3`, 'Phone Number', 'Address', '12/2/2022', 'Tax Code','HR Manager','4','350$'),
            new Personel ('Nguyễn Văn A',`${avatar_url}3`, 'Phone Number', 'Address', '12/2/2022', 'Tax Code','HR Manager','4','350$'),
            new Personel ('Nguyễn Văn A',`${avatar_url}3`, 'Phone Number', 'Address', '12/2/2022', 'Tax Code','HR Manager','4','350$'),
            new Personel ('Nguyễn Văn A',`${avatar_url}3`, 'Phone Number', 'Address', '12/2/2022', 'Tax Code','HR Manager','4','350$'),
        ];
        localStorage.setItem(personel_key, JSON.stringify(personels));
    }else{
        personels = JSON.parse(localStorage.getItem(personel_key));
    }
}

init();
renderPersonel();
function removePersonel(personelID){
    let confirm = window.confirm('Are you sure to remove this personel?');
    if(confirm){
        personels.splice(0,id);
        localStorage.setItem(personel_key,JSON.stringify(personels));
        renderPersonel();
    }
}
function editPersonel(personelID){
    let personel = personels.find(function(person){
        return person.id === personelID;
    })
    document.querySelector('#name').value =personel.name;
    document.querySelector('#avatar').value =personel.avatar;
    document.querySelector('#phonenumber').value = personel.phonenumber;
    document.querySelector('#address').value = personel.address;
    document.querySelector('#dob').value = personel.dob;
    document.querySelector('#taxcode').value = personel.taxcode;
    document.querySelector('#jobposition').value = personel.jobposition;
    document.querySelector('#timeworking').value =personel.timeworking;
    document.querySelector('#salary').value = personel.salary;
    document.querySelector('#reviewAvatar').src =personel.avatar;
}
editPersonel()