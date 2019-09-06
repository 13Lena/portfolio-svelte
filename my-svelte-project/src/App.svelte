<script>
import About from './About.svelte';
import Skills from './Skills.svelte';
import Projects from './Projects.svelte';
import Contact from './Contact.svelte';
	export let name;
</script>

<style>

.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

img {
  width: 160px;
  padding: 5px;
}

</style>

<div class="sidenav">
  <img alt="fox statue" src="fox-shape.png">
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</div>

<About/>
<Skills/>
<Projects/>
<Contact/>