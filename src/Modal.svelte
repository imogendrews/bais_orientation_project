<script>
  import { P, Button, Modal, A, Heading } from "flowbite-svelte";
  import { ArrowRightOutline, ArrowLeftOutline } from "flowbite-svelte-icons";
  import biasImg from "./assets/implicit_bias_test.jpeg";
  import imageCollection from "./assets/collection_images.jpg";
  import explanation from "./assets/explanation.gif";

  let openModal = true;
  let currentModal = 0;

  function startModals() {
    currentModal = 0;
    openModal = true;
  }

  function nextModal() {
    if (currentModal < 3) currentModal++;
    else openModal = false;
  }

  function prevModal() {
    if (currentModal > 0) currentModal--;
  }
</script>

<div class="block space-y-4 md:space-y-0 md:space-x-4 rtl:space-x-reverse">
  <A size="xl" on:click={startModals}>About</A>
</div>

{#if openModal && currentModal === 0}
  <Modal
    autoclose={false}
    class="relative bg-cover bg-center bg-[#fff6df]"
    bind:open={openModal}
    size="md"
  >
    <div class="flex flex-col items-center justify-center text-center w-full">
      <div>
        <Heading
          class="
 bg-opacity-70 rounded-lg text-center"
          tag="h4">'A man walks down the street’</Heading
        >

        <img
          class="mt-4 block mx-auto"
          src="https://res.cloudinary.com/dpp2rx2hd/image/upload/v1741962303/Walking_Person_00098__dn2yka.png"
          width="400px"
        />
        <div class="pt-5 pr-2">
          <P class="text-base leading-relaxed text-black font-bold dark:text-gray-400">
            When reading that sentence, what does this man look like?
          </P>
        </div>
      </div>
    </div>
    <div class="mt-4 flex justify-end">
      <Button class="text-black" on:click={nextModal}>
        Next <ArrowRightOutline class="w-5 h-5 ml-2" />
      </Button>
    </div>
  </Modal>
{/if}

{#if openModal && currentModal === 1}
  <Modal
    autoclose={false}
    class="relative bg-cover bg-center bg-[#fff6df]"
    bind:open={openModal}
    size="md"
  >
    <Heading tag="h4"></Heading>
    <div class=" bg-opacity-70 p-4 rounded-lg text-center">
      <P class="text-base leading-relaxed text-blackdark:text-gray-400 font-bold ">
        I am sure you have heard about this thought experiment that aims to see what implicit race
        bias a person has. This project aims to find out what implicit bias image generation models
        have.
      </P>
      <img src={biasImg} width="500px" class="block mx-auto" />
      <P class="text-base leading-relaxed text-blackdark:text-gray-400 font-bold ">
        It was inspired by the Implicit Association Test (IAT) which was developed by psychologists
        Anthony Greenwald, Mahzarin Banaji, and Brian Nosek in 1998 and is designed to see what
        biases humans.
      </P>
    </div>

    <div class="mt-4 flex justify-between">
      <Button class="text-black" on:click={prevModal}>
        <ArrowLeftOutline class="w-5 h-5 mr-2" /> Previous
      </Button>

      <Button class="text-black" on:click={nextModal}>
        Next <ArrowRightOutline class="w-5 h-5 ml-2" />
      </Button>
    </div>
  </Modal>
{/if}

{#if openModal && currentModal === 2}
  <Modal class="bg-[#fff6df]" bind:open={openModal} size="md" autoclose={false}>
    <Heading tag="h4"></Heading>
    <P class=" font-bold text-base leading-relaxed  dark:text-gray-400">
      This test relies on speed which would not work with machine learning models. Therefore, to
      test this on an Image Generation model, I decided to generate 100 images for 20 prompts using
      Stable Diffusion 3.5 which is one of the latest image generation tools at the moment.
    </P>
    <img src={imageCollection} width="500px" class="block mx-auto" />
    <P class=" font-bold text-base leading-relaxed  dark:text-gray-400"
      >I then generated captions for each image using the BLIP model to generate captions for each
      image which I then got some statistics from.</P
    >
    <div class="mt-4 flex justify-between">
      <Button class="text-black" on:click={prevModal}>
        <ArrowLeftOutline class="w-5 h-5 mr-2" /> Previous
      </Button>

      <Button class="text-black" on:click={nextModal}>
        Next <ArrowRightOutline class="w-5 h-5 ml-2" />
      </Button>
    </div>
  </Modal>
{/if}

{#if openModal && currentModal === 3}
  <Modal class="bg-[#fff6df]" bind:open={openModal} size="md" autoclose={false}>
    <Heading tag="h4"></Heading>
    <P class="text-base leading-relaxed  font-bold pb-3">
      I tried to add as little as possible to these prompts in order to not steer the tool in an
      specific direction and to get the 'default' output. You can select each prompt in the select
      bar at the top and then see the gender statistics found for each prompt by selecting 'gender'
      under 'Select a filter' with blue being 'Male', pink being 'Female' and green being 'Neutral'.
    </P>
    <img src={explanation} width="500px" class="block mx-auto" />
    <P class="text-base leading-relaxed  font-bold pt-5">
      You can then hover over each image and see which caption was generated for each image and,
      lastly, click on the dot to see the image a bit larger. Go ahead and see for yourself what I
      found after testing this out...</P
    >
    <div class="mt-4 flex justify-between">
      <Button class="text-black" on:click={prevModal}>
        <ArrowLeftOutline class="w-5 h-5 mr-2" /> Previous
      </Button>
      <Button class="text-black" on:click={() => (openModal = false)}>Close</Button>
    </div>
  </Modal>
{/if}
