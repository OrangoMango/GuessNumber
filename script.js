var correct = Math.ceil(Math.random() * 100)
var attemps = 0
//alert(correct)

function validate(){
    var t = parseInt(document.getElementById("textinput").value, 10)
    if (t == correct){
      alert("Correct number in "+attemps+" attemps!")
      return true
    } else if (t < correct){
      alert("Try higher")
    } else if (t > correct){
      alert("Try lower")
    } else {
        alert("Invalid input")
    }
    attemps++
    return false
}
