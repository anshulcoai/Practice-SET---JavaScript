function fixing()
{
    alert("Welcome to my Website!")
}

function hello()
{
    a=document.getElementById("txt1").value
    b=document.getElementById("pass1").value
    if (a=="")
    {
        document.getElementById("para2").innerHTML="Please Submit ur username"
    }
    else if(b=="")
    {
        document.getElementById("para2").innerHTML="Please Submit your password"
    }
    else{
        alert("Form Submitted Successfully")
    }
}

function king()
{
    document.getElementById("list1").style.color="blue"
}

function check()
{
    text=document.getElementById("haalo").value
    pattern=/@/ && /.com/
    result=pattern.test(text)

    document.getElementById("para3").innerHTML=result
}

function buying()
{
    alert("button CLicked!!")
}
