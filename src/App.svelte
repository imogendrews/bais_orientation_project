<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, A } from "flowbite-svelte";
  import { Router, Route, Link } from "svelte-routing";
  import ScrollIntro from "./pages/ScrollIntro.svelte";
  import Prompts from "./pages/Prompts.svelte";

  import Documentation from "./pages/Documentation.svelte";
  import WorkFlow from "./pages/WorkFlow.svelte";

  import Modal from "./Modal.svelte";

  let showMain = false;

  function enterSite() {
    showMain = true;
  }
</script>

{#if !showMain}
  <ScrollIntro on:enter={enterSite} />
{:else}
  <div class="bg-customBlack">
    <Router>
      <div class="flex flex-col items-center w-full px-4">
        <h1 class="text-7xl text-black font-bold mb-4">The Default</h1>

        <div class="flex space-x-6 text-lg">
          <Link to="/" class="hover:underline">Prompts</Link>
          <Link to="/documentation" class="hover:underline">Documentation</Link>
          <Link to="/workflow" class="hover:underline">Workflow</Link>
          <Modal />
        </div>
      </div>

      <Route path="/" component={Prompts} />

      <Route path="/documentation" component={Documentation} />
      <Route path="/workflow" component={WorkFlow} />
    </Router>
  </div>
{/if}
