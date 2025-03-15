<script>
  import { Select, Label, Heading } from "flowbite-svelte";
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { writable } from "svelte/store";
  import { Button, Modal } from "flowbite-svelte";
  let defaultModal = false;
  let modalImageSrc = ""; // Store the clicked image source
  let modalCaption = ""; // Store the caption for the modal
  import IntroModal from "../Modal.svelte";
  import { Img } from "flowbite-svelte";

  const openModal = (d) => {
    console.log("d", d);
    modalImageSrc = d.Image; // Set the image source
    modalCaption = d.Caption; // Set the caption
    defaultModal = true; // Open the modal
  };

  let promptSelected = "person_walking"; // Default value to ensure data loads initially
  let statsSelected = "all";
  let prompts = [
    { value: "doctor", name: "A Doctor" },
    { value: "teacher", name: "A Teacher" },
    { value: "german_person", name: "A German" },
    { value: "american_person", name: "An American" },
    { value: "anxiety", name: "An anxious person" },
    { value: "beauty", name: "A beautiful person" },
    { value: "chilean_person", name: "A Chilean Person" },
    { value: "colombian_person", name: "A Colombian Person" },
    { value: "doctor", name: "A doctor" },
    { value: "italian_person", name: "An Italian Person" },
    { value: "lawyer", name: "A lawyer" },
    { value: "leader", name: "A Leader" },
    { value: "luxembourgish_person", name: "A Luxembourgish Person" },
    { value: "nurse", name: "A Nurse" },
    { value: "person_walking", name: "A person walking down the street" },
    { value: "prisoner", name: "A prisoner" },
    { value: "russian_person", name: "A Russian person" },
    { value: "sa_person", name: "A South African Person" },
    { value: "smiling", name: "A smiling person" },
    { value: "swiss_person", name: "A Swiss Person" },
    { value: "university_student", name: "An University Student" },
  ];
  let stats = [
    { value: "all", name: "All images" },
    { value: "gender", name: "Gender" },
    { value: "frequent", name: "Most frequent word" },
    { value: "age", name: "Age" },
  ];

  let svg;
  let tooltipData = writable({ x: 0, y: 0, text: "", visible: false });
  let imageData = writable([]); // Reactive store for images

  let captions = [];
  let error = null;

  async function fetchData() {
    try {
      const response = await fetch(`/data/${promptSelected}.json`); // Fetch from the public folder
      if (!response.ok) {
        throw new Error(`Failed to fetch ${promptSelected}.json`);
      }
      const data = await response.json();
      const imageCaptions = data.image_captions || []; // Ensure the structure matches
      console.log("image captions", imageCaptions);

      imageData.set(imageCaptions); // Update the store with the correct data

      console.log("Fetched data for:", promptSelected, captions);
    } catch (err) {
      error = "Error fetching data: " + err.message;
      console.error(error);
    }
  }

  // Fetch data dynamically when promptSelected changes
  $: if (promptSelected) {
    fetchData();
  }

  // Watch imageData and update D3 visualization
  imageData.subscribe((images) => {
    if (!svg || images.length === 0) return; // Ensure data is available

    const width = window.innerWidth;
    const height = window.innerHeight;

    const simulation = d3
      .forceSimulation(images)
      .force("charge", d3.forceManyBody().strength(5))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(40))
      .on("tick", ticked);

    const svgElement = d3.select(svg).attr("width", width).attr("height", height);
    svgElement.selectAll("*").remove(); // Clear old elements before re-rendering

    const nodes = svgElement
      .selectAll("g")
      .data(images)
      .enter()
      .append("g")
      .on("click", (event, d) => openModal(d)) // Pass 'd' properly into openModal
      .on("mouseover", (event, d) => {
        tooltipData.set({ x: d.x, y: d.y, text: d.Caption, visible: true });
        d3.select(event.currentTarget)
          .select("circle")
          .attr("stroke", "red")
          .attr("stroke-width", 4);
      })
      .on("mousemove", (event, d) => {
        tooltipData.set({
          x: event.pageX + 10,
          y: event.pageY - 20,
          text: d.Caption, // Ensure correct property name for caption
          visible: true,
        });
      })
      .on("mouseleave", () => {
        tooltipData.set({ x: 0, y: 0, text: "", visible: false });
        d3.select(event.currentTarget)
          .select("circle")
          .attr("stroke", "black")
          .attr("stroke-width", 4);
      });

    // Apply color based on gender filter or all images
    nodes
      .append("circle")
      .attr("r", 40)
      .attr(
        "fill",
        () => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`
      )
      // Black with 50% transparency
      .attr("stroke", "black"); // You can keep this for fallback stroke color

    nodes
      .append("image")
      .attr("href", (d) => d.Image)
      .attr("width", 120)
      .attr("height", 120)
      .attr("x", -60)
      .attr("y", -60)
      .attr("clip-path", "circle(40px at center)")
      .attr("loading", "lazy") // Lazy load the images
      .on("load", function () {
        // When the image loads, find the corresponding circle and remove the gray fill
        d3.select(this.parentNode).select("circle").attr("fill", "transparent");
      });
    function ticked() {
      nodes.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
    }
  });
  // Reactively update D3 visualization when statsSelected changes
  $: {
    if (svg && imageData) {
      const svgElement = d3.select(svg);
      const nodes = svgElement.selectAll("g");

      // Define cluster positions
      const clusterPositions = {
        Male: { x: 100, y: 100 },
        Female: { x: 300, y: 100 },
        Neutral: { x: 500, y: 100 },
      };

      nodes
        .selectAll("circle.main") // Select the main circle (image mask)
        .attr("stroke", (d) => {
          if (statsSelected === "gender") {
            return d.GenderIndicator === "Male"
              ? "blue"
              : d.GenderIndicator === "Female"
                ? "pink"
                : d.GenderIndicator === "Neutral"
                  ? "green"
                  : "black";
          } else {
            return "black";
          }
        })
        .attr("stroke-width", (d) => (statsSelected === "gender" ? 10 : 1));

      // Add or update the overlay circle
      nodes
        .selectAll("circle.overlay")
        .data((d) => [d]) // Bind data to create overlays per node
        .join("circle")
        .attr("class", "overlay") // Assign class to distinguish it
        .attr("r", 50) // Ensure the radius matches the main circle
        .attr("fill", (d) => {
          if (statsSelected === "gender") {
            return d.GenderIndicator === "Male"
              ? "rgba(0, 0, 255, 0.3)" // Semi-transparent blue
              : d.GenderIndicator === "Female"
                ? "rgba(255, 105, 180, 0.3)" // Semi-transparent pink
                : d.GenderIndicator === "Neutral"
                  ? "rgba(0, 128, 0, 0.3)" // Semi-transparent green
                  : "transparent";
          } else {
            return "transparent"; // Remove tint if not in gender mode
          }
        })
        .attr("pointer-events", "none"); // Ensure it doesn't interfere with interactions
    }
  }
</script>

<div class="flex" data-theme="light">
  <div class="w-100 max-w-40 ml-20">
    <Label>
      Select a prompt
      <Select class="mt-2 bg-[#fff6df]" items={prompts} bind:value={promptSelected} />
    </Label>
  </div>

  <div class="w-100 max-w-40 ml-20" data-theme="light">
    <Label>
      Select a filter
      <Select class="mt-2 bg-[#fff6df]" items={stats} bind:value={statsSelected} />
    </Label>
  </div>
</div>

<svg bind:this={svg}></svg>

{#if $tooltipData && $tooltipData.visible}
  <div class="tooltip visible" style="top: {$tooltipData?.y}px; left: {$tooltipData?.x}px;">
    {$tooltipData?.text}
  </div>
{/if}

<Modal class="bg-[#fff6df]" bind:open={defaultModal} autoclose>
  <Heading tag="h4">{modalCaption}</Heading>
  <Img src={modalImageSrc} alt="sample 1" />
</Modal>

<style>
  .tooltip {
    position: absolute;
    padding: 5px;
    font-size: 20px;
    pointer-events: none;
    font-weight: bold;
    color: rgb(224, 48, 207);
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
  .tooltip.visible {
    visibility: visible;
  }
</style>
