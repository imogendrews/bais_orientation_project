<script>
  import { Select, Label, Heading } from "flowbite-svelte";
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { writable } from "svelte/store";
  import { Button, Modal } from "flowbite-svelte";
  let defaultModal = false;
  let modalImageSrc = "";
  let modalCaption = "";
  import IntroModal from "../Modal.svelte";
  import { Img } from "flowbite-svelte";

  const openModal = (d) => {
    console.log("d", d);
    modalImageSrc = d.Image;
    modalCaption = d.Caption;
    defaultModal = true;
  };
  let width = window.innerWidth;
  let height = window.innerHeight;

  $: width = window.innerWidth;
  $: height = window.innerHeight;
  onMount(() => {
    const resizeHandler = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      d3.select(svg).attr("width", width).attr("height", height);

      if (simulation) {
        simulation
          .force("center", d3.forceCenter(width / 2, height / 2))
          .alpha(1)
          .restart();
      }
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  });

  let promptSelected = "person_walking";
  $: statsSelected = "all";

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
  ];

  let svg;
  let tooltipData = writable({ x: 0, y: 0, text: "", visible: false });
  let imageData = writable([]);

  let captions = [];
  let error = null;

  async function fetchData() {
    try {
      const response = await fetch(`/data/${promptSelected}.json`); // Fetch from the public folder
      if (!response.ok) {
        throw new Error(`Failed to fetch ${promptSelected}.json`);
      }
      const data = await response.json();
      const imageCaptions = data.image_captions || [];
      console.log("image captions", imageCaptions);

      imageData.set(imageCaptions);

      console.log("Fetched data for:", promptSelected, captions);
    } catch (err) {
      error = "Error fetching data: " + err.message;
      console.error(error);
    }
  }

  $: if (promptSelected) {
    fetchData();
  }
  $: if (promptSelected) {
    statsSelected = "all";
  }

  imageData.subscribe((images) => {
    if (!svg || images.length === 0) return;

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
      .on("click", (event, d) => openModal(d))
      .on("mouseover", (event, d) => {
        tooltipData.set({ x: d.x, y: d.y, text: d.Caption, visible: true });
        d3.select(event.currentTarget)
          .select("circle")
          .attr("stroke", "#04768d")
          .attr("stroke-width", 4);
      })
      .on("mousemove", (event, d) => {
        tooltipData.set({
          x: event.pageX + 10,
          y: event.pageY - 20,
          text: d.Caption,
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

    nodes
      .append("circle")
      .attr("r", 40)
      .attr(
        "fill",
        () => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`
      )

      .attr("stroke", "black");
    const imgSize = Math.min(width, height) * 0.1;
    nodes
      .append("image")
      .attr("href", (d) => d.Image)
      .attr("width", imgSize)
      .attr("height", imgSize)
      .attr("x", -imgSize / 2)
      .attr("y", -imgSize / 2)
      .attr("clip-path", "circle(40px at center)")
      .attr("loading", "lazy")
      .on("load", function () {
        d3.select(this.parentNode).select("circle").attr("fill", "transparent");
      });
    function ticked() {
      nodes.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
    }
  });

  $: {
    if (svg && imageData) {
      const svgElement = d3.select(svg);
      const nodes = svgElement.selectAll("g");

      nodes
        .selectAll("circle.overlay")
        .data((d) => [d])
        .join("circle")
        .attr("class", "overlay")
        .attr("r", 50)
        .attr("fill", (d) => {
          if (statsSelected === "gender") {
            return d.GenderIndicator === "Male"
              ? "rgba(0, 0, 255, 0.3)"
              : d.GenderIndicator === "Female"
                ? "rgba(255, 105, 180, 0.3)"
                : d.GenderIndicator === "Neutral"
                  ? "rgba(0, 128, 0, 0.3)"
                  : "transparent";
          } else {
            return "transparent";
          }
        })
        .attr("pointer-events", "none");
    }
  }
</script>

<div class="flex w-50% mt-5" data-theme="light">
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
    color: #085465;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
  .tooltip.visible {
    visibility: visible;
  }
</style>
