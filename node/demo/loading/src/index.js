var first = document.getElementsByClassName('first')[0]
function done () {
    setTimeout(function(){
        first.style.display = "none"
    },4000)
}
done()