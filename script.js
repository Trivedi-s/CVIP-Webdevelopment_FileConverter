let upload= document.getElementById('upload');
// let data = document.querySelector("textarea");
let show= document.getElementById('show');
let name = document.getElementById("fileName");
let type = document.getElementById("saveAs");
let btn = document.getElementById("btn");

upload.addEventListener("change",()=>
{
    let fr = new FileReader();

    fr.readAsText(upload.files[0]);

    fr.onload= ()=>
    {
        show.innerHTML= fr.result;
    }
})

btn.addEventListener("click", () =>{

    if(show.value==="")
    {
        alert("please choose OR enter text!")
    }
    else{
        let blob = new Blob([show.value], {type:type.value});
        let url = URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.download = name.value;
        link.href = url;
        link.click()
    }
});