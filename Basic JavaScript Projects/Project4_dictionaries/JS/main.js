//Create function describing my newest pet
function my_Dictionary() {
    var NewPet = {
        Species:"Cat",
        Color:"Black&Brown",
        Breed:"American Shorthair",
        Age:8,
        Name: "Monkeh",
        Sound: "Meow"
    };
    //Delete the sound before it's displayed
    delete NewPet.Sound;
    //Display the now deleted Sound
    document.getElementById("Dictionary").innerHTML = NewPet.Sound;
}