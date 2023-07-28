function printInf(){
    var txtname = document.querySelector('input#txtname').value
    var txtnumber = document.querySelector('input#txtnumber')
    var number = Number(txtnumber.value)
    var run = true
   try{
        while(run == true){
            if(number>1998 && number<2023){
                document.write(number + "<br/>")
                document.write(txtname)
                run = false
            }else{ 
                throw new Error("idade invalida")
            }
        }
   
    }catch(erro){
        window.alert(erro)
        window.alert('valor invalido tente novamente')
    }
}