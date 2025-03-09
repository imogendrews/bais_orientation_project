<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { writable } from "svelte/store";
  import image1 from "./images/generated_image.jpeg";
  import image2 from "./images/generated_image_1.jpeg";
  import image3 from "./images/generated_image_2.jpeg";
  import image4 from "./images/generated_image_3.jpeg";
  import image5 from "./images/generated_image_4.jpeg";
  import image6 from "./images/generated_image_5.jpeg";
  import image7 from "./images/generated_image_6.jpeg";
  import image8 from "./images/generated_image_7.jpeg";
  import image9 from "./images/generated_image_8.jpeg";
  import image10 from "./images/generated_image_9.jpeg";
  import image11 from "./images/generated_image_10.jpeg";
  import image12 from "./images/generated_image_11.jpeg";
  import image13 from "./images/generated_image_12.jpeg";
  import image14 from "./images/generated_image_13.jpeg";
  import image15 from "./images/generated_image_14.jpeg";
  import image16 from "./images/generated_image_15.jpeg";
  import image17 from "./images/generated_image_16.jpeg";
  import image18 from "./images/generated_image_17.jpeg";
  import image19 from "./images/generated_image_18.jpeg";
  import image20 from "./images/generated_image_19.jpeg";
  import image21 from "./images/generated_image_20.jpeg";
  import image22 from "./images/generated_image_21.jpeg";
  import image23 from "./images/generated_image_22.jpeg";
  import image24 from "./images/generated_image_23.jpeg";
  import image25 from "./images/generated_image_24.jpeg";
  import image26 from "./images/generated_image_25.jpeg";
  import image27 from "./images/generated_image_26.jpeg";
  import image28 from "./images/generated_image_27.jpeg";
  import image29 from "./images/generated_image_28.jpeg";
  import image30 from "./images/generated_image_29.jpeg";
  import image31 from "./images/generated_image_30.jpeg";
  import image32 from "./images/generated_image_31.jpeg";
  import image33 from "./images/generated_image_32.jpeg";
  import image34 from "./images/generated_image_33.jpeg";
  import image35 from "./images/generated_image_34.jpeg";
  import image36 from "./images/generated_image_35.jpeg";
  import image37 from "./images/generated_image_36.jpeg";

  let svg;
  let tooltip;

  // Sample Data
  let data = [
    {
      id: 1,
      image: image1,
      caption: "A smiling doctor with glasses",
      link: "https://example.com/1",
    },
    {
      id: 2,
      image: image2,
      caption: "A smiling doctor with glasses",
      link: "https://example.com/2",
    },
    {
      id: 3,
      image: image3,
      caption: "A smiling doctor with glasses",
      link: "https://example.com/3",
    },
    { id: 4, image: image4, caption: "Caption 1", link: "https://example.com/1" },
    { id: 5, image: image5, caption: "Caption 2", link: "https://example.com/2" },
    { id: 6, image: image6, caption: "Caption 3", link: "https://example.com/3" },
    { id: 7, image: image7, caption: "Caption 1", link: "https://example.com/1" },
    { id: 8, image: image8, caption: "Caption 2", link: "https://example.com/2" },
    { id: 9, image: image9, caption: "Caption 3", link: "https://example.com/3" },
    { id: 10, image: image10, caption: "Caption 1", link: "https://example.com/1" },
    { id: 11, image: image11, caption: "Caption 2", link: "https://example.com/2" },
    { id: 12, image: image12, caption: "Caption 3", link: "https://example.com/3" },
    { id: 13, image: image13, caption: "Caption 1", link: "https://example.com/1" },
    { id: 14, image: image14, caption: "Caption 2", link: "https://example.com/2" },
    { id: 15, image: image15, caption: "Caption 3", link: "https://example.com/3" },
    { id: 16, image: image16, caption: "Caption 2", link: "https://example.com/2" },
    { id: 17, image: image17, caption: "Caption 3", link: "https://example.com/3" },
    { id: 18, image: image18, caption: "Caption 1", link: "https://example.com/1" },
    { id: 19, image: image19, caption: "Caption 2", link: "https://example.com/2" },
    { id: 20, image: image20, caption: "Caption 3", link: "https://example.com/3" },
    { id: 21, image: image21, caption: "Caption 3", link: "https://example.com/3" },
    { id: 22, image: image22, caption: "Caption 2", link: "https://example.com/2" },
    { id: 23, image: image23, caption: "Caption 3", link: "https://example.com/3" },
    { id: 24, image: image24, caption: "Caption 1", link: "https://example.com/1" },
    { id: 25, image: image25, caption: "Caption 2", link: "https://example.com/2" },
    { id: 26, image: image26, caption: "Caption 3", link: "https://example.com/3" },
    { id: 27, image: image27, caption: "Caption 3", link: "https://example.com/3" },
    { id: 28, image: image28, caption: "Caption 2", link: "https://example.com/2" },
    { id: 29, image: image29, caption: "Caption 3", link: "https://example.com/3" },
    { id: 30, image: image30, caption: "Caption 1", link: "https://example.com/1" },
    { id: 31, image: image31, caption: "Caption 2", link: "https://example.com/2" },
    { id: 32, image: image32, caption: "Caption 3", link: "https://example.com/3" },
    { id: 33, image: image33, caption: "Caption 3", link: "https://example.com/3" },
    { id: 34, image: image34, caption: "Caption 1", link: "https://example.com/1" },
    { id: 35, image: image35, caption: "Caption 2", link: "https://example.com/2" },
    { id: 36, image: image36, caption: "Caption 3", link: "https://example.com/3" },
    { id: 37, image: image37, caption: "Caption 2", link: "https://example.com/2" },
  ];

  // Tooltip position and content
  let tooltipData = writable({ x: 0, y: 0, text: "", visible: false });

  onMount(() => {
    const width = 800;
    const height = 600;

    const simulation = d3
      .forceSimulation(data)
      .force("charge", d3.forceManyBody().strength(5))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(40))
      .on("tick", ticked);

    const svgElement = d3.select(svg).attr("width", width).attr("height", height);

    const nodes = svgElement
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .on("click", (event, d) => window.open(d.link, "_blank"))
      .on("mouseover", (event, d) => {
        tooltipData.set({ x: d.x, y: d.y, text: d.caption, visible: true });
        d3.select(event.currentTarget)
          .select("circle")
          .attr("stroke", "red")
          .attr("stroke-width", 3);
      })
      .on("mousemove", (event, d) => {
        tooltipData.set({
          x: event.pageX + 10,
          y: event.pageY - 20,
          text: d.caption,
          visible: true,
        });
      })
      .on("mouseleave", (event, d) => {
        tooltipData.set({ x: 0, y: 0, text: "", visible: false });

        d3.select(event.currentTarget)
          .select("circle")
          .attr("stroke", "black")
          .attr("stroke-width", 1);
      });

    nodes.append("circle").attr("r", 40).attr("fill", "transparent").attr("stroke", "black");

    nodes
      .append("image")
      .attr("href", (d) => d.image)
      .attr("width", 120) // Set the image width to 120
      .attr("height", 120) // Set the image height to 120
      .attr("x", -60) // Position to center the image (half of the width)
      .attr("y", -60) // Position to center the image (half of the height)
      .attr("clip-path", "circle(40px at center)"); // Clip the image to a circle with radius 40

    function ticked() {
      nodes.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
    }
  });
</script>

<svg bind:this={svg}></svg>

{#if $tooltipData.visible}
  <div class="tooltip visible" style="top: {$tooltipData.y}px; left: {$tooltipData.x}px;">
    {$tooltipData.text}
  </div>
{/if}

<style>
  .tooltip {
    position: absolute;
    padding: 5px;
    font-size: 20px;
    pointer-events: none;
    visibility: hidden;
    font-weight: bold; /* Makes text bold */
    color: rgb(224, 48, 207); /* Make the text color black */
    background-color: rgba(255, 255, 255, 0.7); /* White with 70% transparency */
    border-radius: 5px; /* Optional: adds rounded corners */
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); /* Optional: subtle shadow */
  }
  .tooltip.visible {
    visibility: visible;
  }
</style>
