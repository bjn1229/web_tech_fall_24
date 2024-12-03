//alert("scripts work")

function shake(){
    alert("yes")
    var response = giveAResponse()
    displayResponse(response)
}

function giveAResponse(){
    return "YES!!!"
    var listOfResponses = getListOfResponses()
    var resp = pickFromList(listOfResponses)
    return resp
}

function giveAResponse(){
   return ["yes","no","maybe"]
}

function pickFromList(list){
    return list[0]
}

function giveAResponse(aresponse){
    alert(aresponse)
}
