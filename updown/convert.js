var file_ext,file_name="",text_file,binar,origin,fname="";
document.getElementById("fil").addEventListener('change',function(){
    var fr = new FileReader();
    fr.onload = function(){
        
        document.getElementById("contents").textContent= this.result;
        text_file=document.getElementById("contents").textContent;
        document.getElementById("contents").textContent= "";
        
    }
    fr.readAsText(this.files[0]);
});
     
function oncon(){  
      binar=btoa(text_file);
      document.getElementById("contents").textContent=binar;
}
function valid(file){

    file_ext=file.substr(file.lastIndexOf('.')+1);
    for(let i=12;i<file.length;i++){
        if(file[i]!='.'){
            file_name+=file[i];
        }
        else{
            break;
        }
    }
    console.log("file name : "+file_name);
    var ch=document.getElementsByTagName("option");
    var option=document.createElement("option");
    option.text=file_ext;
    for(let i=0;i<ch.length;i++){
        if(ch[i]!=file_ext){
            document.getElementById("typ").add(option);
        }
    }
    
}
function savefile(){
    var content = atob(binar);
    uriContent = "data:application/octet-stream," + encodeURIComponent(content);
    var selected_edu=document.getElementById("typ").value;
    var ex=selected_edu;
    console.log("val : "+ex);
    /* window.location =""+uriContent+ " download=\"savedfile."+ex+"\"";
    href=""+uriContent+ " download=\"savedfile."+ex+"\"";
    document.getElementById("dlink").innerHTML = "<a href=" + uriContent + " download=\"savedfile."+ex+"\">Here is the download link</a>";
 */}
 document.getElementById("down").addEventListener("click",function(){
    var content = atob(binar);
    var selected_edu=document.getElementById("typ").value;
     if(selected_edu!=file_ext){   
    alert("The uploaded file extention is : "+file_ext+" and you are downloading it with extention : "+selected_edu);
    }
    fname = file_name+"."+selected_edu;
    download(fname,content);

 },false);
 
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:application/octet-stream;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    }
