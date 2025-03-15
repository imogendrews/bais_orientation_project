<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { writable } from "svelte/store";

  let svg;
  let tooltipData = writable({ x: 0, y: 0, text: "", visible: false });
  let imageData = writable([]); // Use writable for reactivity

  onMount(async () => {
    const response = await fetch("/data/analysis_results.json");
    const data = await response.json();
    imageData.set(data.image_captions); // Update store

    // Run D3 logic inside $imageData subscription to ensure data is available
    imageData.subscribe((images) => {
      if (images.length === 0) return; // Wait for data to load

      const width = window.innerWidth; // Use 75% of the window width

      const height = window.innerHeight;

      const simulation = d3
        .forceSimulation(images)
        .force("charge", d3.forceManyBody().strength(5))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide().radius(40))
        .on("tick", ticked);

      const svgElement = d3.select(svg).attr("width", width).attr("height", height);

      const nodes = svgElement
        .selectAll("g")
        .data(images)
        .enter()
        .append("g")
        .on("click", (event, d) => window.open(d.link, "_blank"))
        .on("mouseover", (event, d) => {
          tooltipData.set({ x: d.x, y: d.y, text: d.Caption, visible: true });
          d3.select(event.currentTarget)
            .select("circle")
            .attr("stroke", "red")
            .attr("stroke-width", 3);
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
            .attr("stroke-width", 1);
        });

      nodes.append("circle").attr("r", 40).attr("fill", "transparent").attr("stroke", "black");

      nodes
        .append("image")
        .attr("href", (d) => d.Image)
        .attr("width", 120)
        .attr("height", 120)
        .attr("x", -60)
        .attr("y", -60)
        .attr("clip-path", "circle(40px at center)");

      function ticked() {
        nodes.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
      }
    });
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
