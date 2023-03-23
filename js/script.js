function init(){
    
    var alertButton = document.getElementById('entrybutton');
    alertButton.addEventListener('click', function() {
        var input = document.getElementById('entryinput');
        document.getElementById('textoutput').innerHTML = input.value;
        alert("David Galicia: " + input.value);
    });
        
    }
    window.addEventListener('load', init);