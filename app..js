var radnomValues = "Ap1o5-Z7!y@#9Sjm)5*6^X8+&3(CmkFeR2T$cG1%B"
var password = ""

for (var i = 0; i < 10; i++){
    var radnomNumber = Math.floor(Math.random() * radnomValues.length)
    password += radnomValues[radnomNumber]
}

console.log(password)
swal({
                    title: "Yours Password is " + password,
                    text: "You clicked the button!",
                    icon: "success",
                    button: "Aww yiss!",
                  });



                  
