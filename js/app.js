$(function () {
  new VenoBox({
    selector: ".open-image",
    share: `true`,
    spinner: "wave",
  });

  AOS.init();

  new TypeIt("#ani-h1", {
    speed: 200,
  })
    .delete(8)
    .type(`vict`)
    .pause(500)
    .type(`ory`)
    .pause(400)
    .delete(7)
    .type(`riumph`)
    .move(-7)
    .type(`t`)
    .move(6)
    .go();

  new TypeIt("#ani-services", {
    speed: 400,
  })
    .move(-7)
    .delete(1)
    .type(`S`)
    .move(8)
    .go();

  new TypeIt("#ani-portfolio", {
    speed: 200,
  })
    .delete(9)
    .type(`and Arts`)
    .go();
});
