<script>
  import { P, Button, Modal, A, Heading } from "flowbite-svelte";
  import { ArrowRightOutline, ArrowLeftOutline } from "flowbite-svelte-icons";
  import biasImg from "./assets/implicit_bias_test.jpeg";

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

<!-- Modal 1 -->
{#if openModal && currentModal === 0}
  <Modal
    autoclose={false}
    class="relative bg-cover bg-center bg-[#fff6df]"
    bind:open={openModal}
    size="md"
  >
    <div class="flex flex-col items-center justify-center text-center w-full">
      <!-- <div class="bg-[#fff6df] bg-opacity-70 p-4 rounded-lg text-center"> -->
      <div>
        <Heading class="bg-white bg-opacity-70 rounded-lg text-center" tag="h4"
          >'A man walks down the street’</Heading
        >
        <!-- </div> -->
        <img
          class="mt-4"
          src="https://res.cloudinary.com/dpp2rx2hd/image/upload/v1741962303/Walking_Person_00098__dn2yka.png"
        />
        <div class="bg-white bg-opacity-70 p-4 rounded-lg text-center">
          <P class="text-base leading-relaxed text-black dark:text-gray-400">
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

<!-- Modal 2 -->
{#if openModal && currentModal === 1}
  <Modal
    autoclose={false}
    class="relative bg-cover bg-center bg-[#fff6df]"
    bind:open={openModal}
    size="md"
  >
    <Heading tag="h4"></Heading>
    <div class="bg-white bg-opacity-70 p-4 rounded-lg text-center">
      <P class="text-base leading-relaxed text-blackdark:text-gray-400 ">
        I am sure you have heard about this thought experiment that aims to see what implicit race
        bias a person has. This project aims to find out what implicit bias image generation models
        have and was inspired by the Implicit Association Test (IAT) which was developed by
        psychologists Anthony Greenwald, Mahzarin Banaji, and Brian Nosek in 1998 and is designed to
        see what biases humans.
      </P>
    </div>
    <img src={biasImg} width="500px" />

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

<!-- Modal 3 -->
{#if openModal && currentModal === 2}
  <Modal class="bg-[#fff6df]" bind:open={openModal} size="md" autoclose={false}>
    <Heading tag="h4"></Heading>
    <P class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      This test relies on speed which would not work with machine learning models. Therefore, to
      test this on an Image Generation model, I decided to generate 100 images for 20 prompts using
      Stable Diffusion 3.5 which is one of the latest image generation tools at the moment. I then
      generated captions for each image using the BLIP model to generate captions for each image
      which I then got some statistics from.
    </P>

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

<!-- Modal 4 (Last Slide) -->
{#if openModal && currentModal === 3}
  <Modal class="bg-[#fff6df]" bind:open={openModal} size="md" autoclose={false}>
    <Heading tag="h4"></Heading>
    <P class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      I tried to add as little as possible to these prompts in order to not steer the tool in an
      specific direction and to get the 'default' output. You can select each prompt in the select
      bar at the top and then see some statistical findings by selecting on the select bar next to
      it. Finally, you can hover over each image and see which caption was generated for each image
      and lastly, click on the dot to see the image a bit larger. Go ahead and see for yourself what
      I found after testing this out...
    </P>

    <div class="mt-4 flex justify-between">
      <Button class="text-black" on:click={prevModal}>
        <ArrowLeftOutline class="w-5 h-5 mr-2" /> Previous
      </Button>
    </div>
  </Modal>
{/if}
