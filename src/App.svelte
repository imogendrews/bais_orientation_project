<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  import { Router, Route, Link } from "svelte-routing";
  import Prompts from "./pages/Prompts.svelte";
  import About from "./pages/About.svelte";
  import Contribute from "./pages/Contribute.svelte";
  import Research from "./pages/Research.svelte";
  import WorkFlow from "./pages/WorkFlow.svelte";
</script>

<Router>
  <!-- Your Navbar -->
  <Navbar>
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Bias</span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi><Link to="/">Prompts</Link></NavLi>
      <NavLi><Link to="/research">Research</Link></NavLi>
      <NavLi><Link to="/workflow">WorkFlow</Link></NavLi>
      <NavLi><Link to="/contribute">Contribute</Link></NavLi>
      <NavLi><Link to="/about">About</Link></NavLi>
    </NavUl>
  </Navbar>

  <!-- Define routes -->
  <Route path="/" component={Prompts} />
  <Route path="/research" component={Research} />
  <Route path="/workflow" component={WorkFlow} />
  <Route path="/contribute" component={Contribute} />
  <Route path="/about" component={About} />
</Router>
