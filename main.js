const annieTheCat = {
    name: "Annie",
    species: "Siamese",
    nicknames: ["Annie-bug", "Monkey", "Sweet Kitty"],
    age: 9,
    meow: function () {
        window.alert("MEOW");
    },
    purr: function () {
        window.alert("prrrrrrrrrrrrrrrrrrrrrrrrr");
    },
    escape: function () {
        window.alert("Annie is outside! How did that happen?");
    },
    favoriteToys: [],
    play: function (toy) {
        if (toy.length % 2 === 0) {
            this.favoriteToys.push(toy);
            window.alert(toy + " is one of Annie's favorite toys!");
        } else {
            console.log("Annie doesn't seem very interested in " + toy);
        }

    }
};

annieTheCat.meow();
annieTheCat.purr();
annieTheCat.escape();
annieTheCat.play("string");
annieTheCat.play("mouse");
annieTheCat.play("Pox");
annieTheCat.play("bathroom rug");
console.log(annieTheCat.favoriteToys)