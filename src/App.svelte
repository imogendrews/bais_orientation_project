<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, A } from "flowbite-svelte";
  import { Router, Route, Link } from "svelte-routing";
  import Prompts from "./pages/Prompts.svelte";
  import About from "./pages/About.svelte";
  import Contribute from "./pages/Contribute.svelte";
  import Documentation from "./pages/Documentation.svelte";
  import WorkFlow from "./pages/WorkFlow.svelte";
  import WalkingPerson from "./pages/prompts/WalkingPerson.svelte";
  import Teacher from "./pages/prompts/Teacher.svelte";
  import Modal from "./Modal.svelte";
</script>

<div class="bg-customBlack">
  <Router>
    <div class="flex flex-col items-center w-full px-4">
      <!-- Title -->
      <h1 class="text-7xl text-black font-bold mb-4">The Default</h1>

      <!-- Links below the title -->
      <div class="flex space-x-6 text-lg">
        <Link to="/" class="hover:underline">Prompts</Link>
        <Link to="/documentation" class="hover:underline">Documentation</Link>
        <Link to="/workflow" class="hover:underline">Workflow</Link>
        <Modal />
        <!-- <Modal /> -->
      </div>
    </div>

    <!-- <A href="/person-walking">Walking Person</A>
    <A href="/teacher">Teacher</A> -->
    <!-- Define routes -->

    <Route path="/" component={Prompts} />

    <Route path="/person-walking" component={WalkingPerson} />

    <Route path="/teacher" component={Teacher} />

    <Route path="/research" component={Documentation} />
    <Route path="/workflow" component={WorkFlow} />
    <Route path="/contribute" component={Contribute} />
    <Route path="/about" component={About} />
  </Router>
</div>
