window.onload = function(){
    document.getElementById("fname").focus();
};
/* function validate(){
    var fname=document.getElementById("fname");
    var mname=document.getElementById("mname");
    var lname=document.getElementById("lname");
    var regs=/^(\w+)([^\s]$)/;
    if(regs.test(fname.value)){
        alert(fname.value);
    }
    else{
        alert("Spaces");
    }
} */
function fn_validate(){
    var fname=document.getElementById("fname");
    var regs=/^(\w+)([^\s]$)/;
    if(regs.test(fname.value)){
        fname.style.border="solid 2px lightgrey";

    }
    else{
       
        fname.style.border="solid 2px red";
    }
}
function mn_validate(){
    var mname=document.getElementById("mname");
    var regs=/^(\w+)([^\s]$)/;
    if(regs.test(fname.value)){
        mname.style.border="solid 2px lightgrey";

    }
    else{
       
    }
}
function ln_validate(){
    var lname=document.getElementById("lname");
    var regs=/^(\w+)([^\s]$)/;
    if(regs.test(lname.value)){
        lname.style.border="solid 2px lightgrey";

    }
    else{
       
        lname.style.border="solid 2px red";
    }
}
function email_val(){
    var email=document.getElementById("email");
    var regs=/^(\w+)@(\w{3,25})(.com)$/;
    if(regs.test(email.value)){
        email.style.border="solid 2px lightgrey";

    }
    else{
        email.style.border="solid 2px red"; 
    }
}

function ph_val(){
    var ph=document.getElementById("phone");
    var regs=/^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
    if(regs.test(ph.value)){
        ph.style.border="solid 2px lightgrey";

    }
    else{
        ph.style.border="solid 2px red";
    }
}

function radio_val(){
    var sel=document.getElementById("rad");
    var sel_val=sel.value;
    if(document.getElementById("rr1").checked){
        alert("Male");
    }
    else if(document.getElementById("rr2").checked){
        alert("Female");
    }
    else{
        alert("Gender");
    }
}
function ontextarea(){
    document.getElementById("address").value="";
}
function add_val(){
    var add=document.getElementById("address");
    if(add.value==""){
        add.style.border="solid 2px red";
    }
    else{
        add.style.border="solid 2px lightgrey";
    }
}
function dat(){
    var dob= document.getElementById("dob");
    /* alert(dob.value); */
    var dobb=dob.value;
    dob.style.border="solid 2px lightgrey";
    var y=""+dobb[0]+dobb[1]+dobb[2]+dobb[3];
    var m=""+dobb[5]+dobb[6];
    var d=""+dobb[8]+dobb[9];
    db=d+"-"+m+"-"+y;

}
function selected(){
    var selected_edu=document.getElementById("edu").value;
    console.log(selected_edu);
}
function optionss(){
    var o1=document.getElementById("o1");
    var o2=document.getElementById("o2");
    var o3=document.getElementById("o3");
    var oo1,oo2,oo3;
    if(o1.checked==true){
        oo1=o1.value;
        }
    if(o2.checked==true){
            oo2=o2.value;
    }
    if(o3.checked==true){
                oo3=o3.value;
       }
    console.log(oo1+oo2+oo3);
}

function subs(){
        var fn=document.getElementById("fname");
        var mn=document.getElementById("mname");
        var ln=document.getElementById("lname");
        var e=document.getElementById("email");
        var ph=document.getElementById("phone");
        var sel=document.getElementById("rad");
        var gender="male";
    if(document.getElementById("rr1").checked){
        gender=document.getElementById("rr1").value;
    }
    if(document.getElementById("rr2").checked){
        gender=document.getElementById("rr2").value;
    }

        var add=document.getElementById("address");
        var dob=document.getElementById("dob");
        var dobb=dob.value;
        var y=""+dobb[0]+dobb[1]+dobb[2]+dobb[3];
        var m=""+dobb[5]+dobb[6];
        var d=""+dobb[8]+dobb[9];
        var db=d+"-"+m+"-"+y;
        
        var edu=document.getElementById("edu");

        var o1=document.getElementById("o1");
    var o2=document.getElementById("o2");
    var o3=document.getElementById("o3");
    var hob="",oo1,oo2,oo3;
    if(o1.checked==true){
        oo1=o1.value;
        hob+=oo1+", ";
        }
    if(o2.checked==true){
            oo2=o2.value;
            hob+=oo2+", ";
    }
    if(o3.checked==true){
                oo3=o3.value;
                hob+=oo3+", ";
            
       }

    
        var ffn=fn.value;
        var mmn=mn.value;
        var lln=ln.value;
        var ee=e.value;
        var pph=ph.value;
        var gg=gender;
        var ad=add.value;
        var dobbb=db;
        var ed=edu.value;
        var hobb=hob;
        

        if(ffn==""||lln==""||ee==""||pph==""||gg==""||ad==""||dobb==""||ed==""||hobb==""){
            alert("Please fill all the fields!")
        }
        else{
            t= "<br><br><table align=center border=1>";
            t+="<tr><td>Name</td><td>"+ffn+" "+mmn+" "+lln+"</td></tr>";
            t+="<tr><td>Email</td><td>"+ee+"</td></tr>";
            t+="<tr><td>Phone No.</td><td>"+pph+"</td></tr>";
            t+="<tr><td>Gender</td><td>"+gg+"</td></tr>";
            t+="<tr><td>Date Of Birth</td><td>"+dobbb+"</td></tr>";
            t+="<tr><td>Address</td><td>"+ad+"</td></tr>";
            t+="<tr><td>Education</td><td>"+ed+"</td></tr>";
            t+="<tr><td>Hobbies</td><td>"+hobb+"</td></tr>";
            t+="</table>";
            document.getElementById("tab").innerHTML=t;
        }
}