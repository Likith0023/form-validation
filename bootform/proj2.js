var getid = (id)=>{
    return document.getElementById(id);
}
 
var getclasses=(classes)=>{
    return document.getElementsByClassName(classes)
}


var firstname=getid('firstname'),
lastname =getid('lastname'),
email = getid('em'),
password =getid('pd'),
form =getid('myform'),
button =getid('btn'),
sts =getid('status'),
errmsg=getclasses('error');


form.addEventListener('submit',(event)=>{
    event.preventDefault();
     var fname =validator(firstname,0,'THIKA MUCHKONDU FIRST NAME FILL MADU')
     var lname = validator(lastname,1,'THO EDNU FILL MADO')
     var eml =validator(email,2,'HU EMAIL AKU EGA')
     var pwd= validator(password,3,'STRONG PASSWORD PLEASE')
    //  console.log(fname+" "+lname+" "+eml+" "+pwd)
     if(fname == true && lname == true && eml == true && pwd == true){
        var finalobj={}
        finalobj['firstName']=firstname.value
        finalobj['lastName']=lastname.value
        finalobj['eMail']=email.value
        finalobj['passWord']=password.value
        localStorage.setItem('userinfo',JSON.stringify(finalobj));
        sts.textContent="SUBMIT AGTHA EDE..... WAIT MADU..... ";
        setTimeout(()=>{
            sts.textContent="ASTE FORM SUBMIT AYTHU # ";

        },3000)

    }
})

function validator(documentId,classId,errormessage)
{
if(documentId.value.trim() == '')
{
documentId.style.border='2px solid red';
errmsg[classId].textContent=errormessage;
return false;
}
else
{
    documentId.style.border='2px solid green';
    errmsg[classId].textContent='';
    return true;
}
}

