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
    }

};

annieTheCat.meow();
annieTheCat.purr();
annieTheCat.escape();