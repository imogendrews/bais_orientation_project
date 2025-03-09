<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, A } from "flowbite-svelte";
  import { Router, Route, Link } from "svelte-routing";
  import Prompts from "./pages/Prompts.svelte";
  import About from "./pages/About.svelte";
  import Contribute from "./pages/Contribute.svelte";
  import Documentation from "./pages/Documentation.svelte";
  import WorkFlow from "./pages/WorkFlow.svelte";
  import WalkingPerson from "./pages/prompts/WalkingPerson.svelte";
</script>

<div class="bg-customBlack">
  <Router>
    <div class="flex flex-col items-center w-full px-4">
      <!-- Title -->
      <h1 class="text-6xl font-bold mb-4">The Default Person</h1>

      <!-- Links below the title -->
      <div class="flex space-x-6 text-lg">
        <Link to="/" class="hover:underline">Prompts</Link>
        <Link to="/documentation" class="hover:underline">Documentation</Link>
        <Link to="/workflow" class="hover:underline">Workflow</Link>
      </div>
    </div>

    <A href="/person-walking">Link</A>
    <!-- Define routes -->
    <div class="flex justify-end">
      <div class="w-3/4">
        <Route path="/" component={Prompts} />
      </div>
    </div>
    <div class="flex justify-end">
      <div class="w-3/4">
        <Route path="/person-walking" component={WalkingPerson} />
      </div>
    </div>
    <Route path="/research" component={Documentation} />
    <Route path="/workflow" component={WorkFlow} />
    <Route path="/contribute" component={Contribute} />
    <Route path="/about" component={About} />
  </Router>
</div>
