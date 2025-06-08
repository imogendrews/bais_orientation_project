<script>
  import { onMount, onDestroy } from "svelte";
  import scrollama from "scrollama";
  import { P, Button, Modal, A, Heading } from "flowbite-svelte";
  import biasImg from "../assets/implicit_bias_test.jpeg";
  import imageCollection from "../assets/collection_images.jpg";
  import explanation from "../assets/explanation.gif";
  import manWalking from "../assets/man_walking.png";

  let oneMan =
    "https://res.cloudinary.com/dpp2rx2hd/image/upload/v1741962303/Walking_Person_00098__dn2yka.png";
  let currentText = "A man walks down the street";
  let steps = [
    "A man walks down the street",
    "After reading that sentence, what does this man look like?",
    "I am sure you have heard about this thought experiment that aims to see what implicit race bias a person has. ",
    "This project aims to find out what implicit bias image generation models have.",
    "It was inspired by the Implicit Association Test (IAT) which was developed by psychologists Anthony Greenwald, Mahzarin Banaji, and Brian Nosek in 1998 and is designed to see what biases humans.",
  ];

  // Make sure this array matches the steps order
  let images = [oneMan, manWalking, manWalking, manWalking, manWalking, biasImg];

  let currentImage = images[0];
  let scroller;

  onMount(() => {
    scroller = scrollama();

    scroller
      .setup({
        step: ".step",
        offset: 0.6,
        debug: false,
      })
      .onStepEnter(({ index }) => {
        currentText = steps[index];
        currentImage = images[index];
      });

    return () => {
      scroller.destroy();
    };
  });
</script>

<div class="scroll-container">
  <div class="sticky-image" style="background-image: url({currentImage});">
    <div class="overlay-text">{currentText}</div>
  </div>

  <!-- Scroll triggers -->
  {#each steps as step, i}
    <div class="step" data-step={i}></div>
  {/each}
</div>

<style>
  .scroll-container {
    position: relative;
    height: calc(100vh * 7); /* more room to scroll */
  }
  .sticky-image {
    position: sticky;
    top: 0;
    height: 100vh;
    background-position: center;

    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overlay-text {
    color: rgba(255, 253, 208); /* translucent cream */
    background-color: rgba(0, 0, 0, 0.6); /* translucent dark grey */
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 0 0 10px black;
    text-align: center;
    padding: 2rem;
    margin: 2rem;
  }

  .step {
    height: 100vh;
  }
</style>
