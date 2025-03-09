<script>
  import { Card, Img } from "flowbite-svelte";
  import image0 from "../images/generated_image.jpeg";
  import image1 from "../images/generated_image_1.jpeg";
  import image2 from "../images/generated_image_2.jpeg";
  import image3 from "../images/generated_image_3.jpeg";
  import image4 from "../images/generated_image_4.jpeg";
  import image5 from "../images/generated_image_5.jpeg";
  import image6 from "../images/generated_image_6.jpeg";
  import image7 from "../images/generated_image_7.jpeg";
  import image8 from "../images/generated_image_8.jpeg";
  import image9 from "../images/generated_image_9.jpeg";
  import image10 from "../images/generated_image_10.jpeg";
  import image11 from "../images/generated_image_11.jpeg";
  import image12 from "../images/generated_image_12.jpeg";

  let vCard = false;

  let showModal = false;
</script>

<div class="w-70 pt-16 px-8">
  <!-- Added pt-16 for top padding -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
    <!-- Grid layout -->
    <Card class="relative !p-0">
      <Img class="w-full h-full object-cover rounded-t-lg" src={image0} alt="sample 1" />
    </Card>

    <Card class="relative !p-0">
      <Img class="w-full h-full object-cover rounded-t-lg" src={image1} alt="sample 1" />
    </Card>

    <Card class="relative !p-0">
      <Img class="w-full h-full object-cover rounded-t-lg" src={image2} alt="sample 1" />
    </Card>

    <Card class="relative !p-0">
      <Img class="w-full h-full object-cover rounded-t-lg" src={image3} alt="sample 1" />
    </Card>

    <Card class="relative !p-0">
      <Img class="w-full h-full object-cover rounded-t-lg" src={image4} alt="sample 1" />
    </Card>
    <Card class="relative !p-0">
      <Img class="w-full h-full object-cover rounded-t-lg" src={image5} alt="sample 1" />
    </Card>

    <Card class="relative !p-0">
      <Img class="w-full h-full object-cover rounded-t-lg" src={image6} alt="sample 1" />
    </Card>

    <Card class="relative !p-0">
      <Img class="w-full h-full object-cover rounded-t-lg" src={image7} alt="sample 1" />
    </Card>

    <Card class="relative !p-0">
      <Img class="w-full h-full object-cover rounded-t-lg" src={image8} alt="sample 1" />
    </Card>
    <Card class="relative !p-0">
      <Img class="w-full h-full object-cover rounded-t-lg" src={image9} alt="sample 1" />
    </Card>
    <Card class="relative !p-0">
      <Img class="w-full h-full object-cover rounded-t-lg" src={image10} alt="sample 1" />
    </Card>
    <Card class="relative !p-0">
      <Img class="w-full h-full object-cover rounded-t-lg" src={image11} alt="sample 1" />
    </Card>
    <Card class="relative !p-0">
      <Img class="w-full h-full object-cover rounded-t-lg" src={image12} alt="sample 1" />
    </Card>
  </div>
</div>
