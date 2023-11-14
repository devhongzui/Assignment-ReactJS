import Typewriter from "typewriter-effect/dist/core";

let type = $(".type-write");

let typewriter = new Typewriter(type[0], {
    loop: true,
    delay: 75,
});

let word = JSON.parse(type.attr("data-word"));

typewriter.pauseFor(500).typeString(word[0]);

if (word.length > 1) {
    typewriter.pauseFor(300);

    for (let i = 1; i < word.length; i++) typewriter.typeString(word[i]);
}

typewriter.pauseFor(1000).start();
