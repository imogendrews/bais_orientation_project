<script>
  import { Card, P, Button, Modal } from "flowbite-svelte";
  let showModal = false;
</script>

<div class="pt-16 px-8">
  <!-- Added pt-16 for top padding -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <!-- Grid layout -->
    <Card>
      <P class="text-2xl font-bold">Motivation</P>
      <P>
        Artificial Intelligence models have become more accessible in recent years, leading to
        advancements in content generation and automation. However, biases in these models, stemming
        from both their training data and the methods used to train them, have raised ethical and
        societal concerns. This project aims to explore these biases by focusing on Stable
        Diffusion's associations with categories like gender, race, age, and weight, aiming to
        increase awareness for both developers and consumers.
      </P>
    </Card>

    <Card>
      <P class="text-2xl font-bold">Project Details (What & How)</P>
      <P>
        The project will explore Stable Diffusion's latent space, which represents the model's
        complex web of associations. These associations are influenced by the data the model was
        trained on. 20 prompts will be created to gain insights into how Stable Diffusion "thinks"
        and how biases manifest in these models.
      </P>

      <P class="font-semibold mt-4">Gender Bias Prompts</P>
    </Card>

    <Card>
      <P class="text-2xl font-bold">Statistical Methods</P>
      <P>
        The project will follow methods inspired by the study *Smiling Women Pitching Down: Auditing
        Representational and Presentational Gender Biases* (2024). The research will generate images
        based on 20 prompts, each with 100 images. Models such as CLIP or RAM will tag the images,
        and Python frameworks like Pandas will be used to analyze the data.
      </P>
    </Card>

    <Card>
      <P class="text-2xl font-bold">Visualization</P>
      <P>
        The findings will be visualized on a website using D3.js. The website will be built using
        JavaScript, with express.js for the backend and CouchDB for data storage. The Svelte
        framework will be used for the frontend.
      </P>
    </Card>

    <Card>
      <P class="text-2xl font-bold">Categorization</P>
      <P>
        This project covers creative/artistic development, narrative development,
        research/experimentation, and software development. The website will explore some of the
        findings creatively. The research and experimentation will involve learning how to design
        experiments and connect them to existing research.
      </P>
    </Card>

    <Card>
      <P class="text-2xl font-bold">Unique Selling Point</P>
      <P>
        This project aims to raise awareness of AI biases by combining psychology, AI research, and
        visual storytelling. By analyzing biases in gender, race, age, and weight, the project will
        provide an accessible and engaging way for people to understand these critical issues. The
        website will also implement tests to gather more data on human biases.
      </P>
    </Card>

    <Card>
      <P class="text-2xl font-bold">Expected Results</P>
      <P>
        The baseline goal is to gather statistics, create the website, and share observations
        through simple graphs. If possible, advanced visualizations will be created using D3.js, and
        IAT tests will be added for gathering more information on human biases.
      </P>
    </Card>

    <Card>
      <P class="text-2xl font-bold">Vision and Future Work</P>
      <P>
        In the future, the website will be developed further, including more tests to raise
        awareness of AI biases. The website will track the evolution of image generation tools and
        offer insights into how these models change over time.
      </P>
    </Card>

    <Card>
      <P class="text-2xl font-bold">Challenge of Your Comfort Zone</P>
      <P>
        This project will help me expand my skills in machine learning, Python programming, and data
        visualization. I'll learn to analyze data using tools like Pandas and D3.js, and tackle
        challenges such as implementing the backend with express.js and CouchDB.
      </P>
    </Card>
  </div>
</div>
