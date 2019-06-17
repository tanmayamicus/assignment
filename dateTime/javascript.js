 x=new Date();
function calc(){
    var in_dt=in_dt=document.getElementById("input_dt");
    
    var dt=new Date(in_dt.value);
    var dt_milli=dt.getTime();
    var offset_tz=dt.getTimezoneOffset();
    var utc= dt_milli+(offset_tz*60000);
    
    
    var tz=document.getElementById("tz").value;
    
    var out_dt=new Date(utc+ (3600000*tz));
    
    var zone= ["ANAT","SBT","AEST","JST","CST(China)","WIB","IST","UZT","GST","MSK","CEST","BST(UK)","GMT","CVT","WGST","ART","EDT","CDT","CST","PDT","AKDT","HDT","HST","NUT","AoE"];
    var cl=[12,11,10,9,8,7,6,5,4,3,2,1,0,"-1","-2","-3","-4","-5","-6","-7","-8","-9","-10","-11","-12"];
    var time_zone=0;
    for(let j=0;j<zone.length;j++){
        if(tz==cl[j]){
            time_zone=zone[j];
                }
    }
    
    document.getElementById("out").innerHTML=
    "Time Zone : "+time_zone+
    " : "+out_dt.toLocaleString();

    var tz_c=x.getTimezoneOffset();
    var tz_z=tz_c/60;
 
}

function browser_info(){
    var tz_c=x.getTimezoneOffset();
    var tz_z=tz_c/60;
    var zone= ["SBT","AEST","JST","CST(China)","WIB","IST","UZT","GST","MSK","CEST","BST(UK)","GMT","CVT","WGST","ART","EDT","CDT","CST","PDT","AKDT","HDT","HST","NUT","AoE"];
    var i=Math.abs(parseInt(tz_z));

    var time_zone=zone[i];
   document.getElementById("b_info").innerHTML=
   
   "Current Time Zone : "+time_zone+"<br>"+
   "Browser App Name : "+navigator.appName+"<br>"+
   "Browser App Code Name : "+navigator.appCodeName+"<br>"+
   "Browser Engine : "+navigator.product+"<br>"+
   "Browser Vesrion : "+navigator.appVersion+"<br>"+
   "Browser Agent : "+navigator.userAgent+
   "Screen Resolution : "+window.screen.width+"X"+window.screen.height+"<br>"+
   "Device Pixel Ratio : "+window.devicePixelRatio+"<br>"+
   "Device/OS : "+navigator.platform;
   
}