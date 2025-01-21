<script>
  import { P, Heading, List, Li } from "flowbite-svelte";
</script>

<div class="p-20">
  <Heading tag="h3">29 October 2024</Heading>
  <P
    >I had my first meeting with Lena discussing my project. I mentioned that I would like to do an
    interactive website using ML5.js’s pose-net where I take data from the users webcam and
    transform it in some artistic way as an output using p5.js. She mentioned that ML5.js is made
    for artists that it might be too easy for this project. I also mentioned that I am interested in
    open-source projects and the role they can play for tech art. She suggested that I look and see
    if ML5.js, pl5.js or three.js need any contributors and that my project can be on that and that
    I could add an accompanying text explaining how open-source works and my experience.</P
  >

  <Heading tag="h3">6 November 2024</Heading>
  <P
    >In Peer and Review the babies were split up amongst the Elderly’s and Zombies and we were told
    to present our orientation project to them. I was matched with Anna and Moerik and while
    explaining my idea I realised that I was very uncertain as to what I could actually achieve in
    this time frame. They mentioned that I should try to keep it as small as possible and that I
    should also try to incorporate my idea with other courses and workshops that I am taking. After
    chatting to the two of them I realised that I really do want to at least try and work towards a
    potential website where I present a personalised pretrained machine learning model of some sorts
    and that I just need to look into this a bit more.</P
  >

  <Heading tag="h3">7 November 2024</Heading>
  <P>
    I spoke to Alex about diffusion models which are the type of machine learning models that we
    will be focussing on in our workshop. I then had the idea of using a pretrained model which I
    tweak using my own images and, when a user uploads their image, my model takes that image and
    outputs a new image based on my style. Alex mentioned that we will be making models through
    Hugging Face so I thought that for my ML2 workshop I would learn about diffusion models and how
    to set them up and create a small space in there for that project. Then, for my orientation
    project, I would flesh this out a bit and place this in its own website that users can go to and
    add their images and then save the output.</P
  >

  <Heading tag="h3">12 November 2024</Heading>
  <P
    >I had another meeting with Lena today and I mentioned that I would like to create a web
    interface where users upload their photos and my model generates new outputs in my style. I
    mentioned to her that I can learn some of the basics in my ML2 workshop and hopefully use this
    for my TI tutorial as well. Lena mentioned that I should think about what my output should be -
    which capabilities can machine learning add that makes it useful in comparison to other tools
    already available like Photoshop? She mentioned that I need to think about what my style is and
    have a moodboard ready for next week. She then suggested that I should also look into the power
    of websites as a collaborative tool. I could make a ML that changes according to the different
    users input images and the ML takes the output and continues to evolve according to the
    different users using it. I could then archive it and split it into different phases or
    ‘periods’ of my model- similar to an artist. This idea neatly accompanies my other interest in
    open-source code and could be a great way to show how powerful open-sourcing code can truly be,
    especially in a creative context. She mentioned that I should also speak to Philip as he is
    doing his project looking into Fluid Machine Learning which is a model that seems to allow real
    time adjustments of base data. Even if I am not able to get the last part running I could also
    just get the website and the diffusion model running with my certain ‘style’ and work on the
    second stage of this project further down the line during my masters.</P
  >

  <Heading tag="h3">25 November 2024</Heading>
  <P>
    I spoke with Alex during my Machine Learning workshop and he said that this idea will probably
    not work since having a whole lot of people add art to one model will end up with the results
    being rather bland and boring - very average. I am now trying to think of maybe using a LLM for
    my project.</P
  >

  <Heading tag="h3">3 December</Heading>
  <P
    >Started thinking of another idea where I try and visually show the inherit biases that come
    from LLM’s such as chatGPT by integrating it into my website and then allowing users to use it.
    I will them use another LLM to scan the text and look for any mention that something comes from
    a certain country and when that happens I will visually make that country bigger on the map of
    the world. I will also have other views such as when a question comes from a certain part I will
    add a network of dots and you can select the dot in that country and see what question was
    asked. I can then have a very boring view of a graph with the different regions in world and
    every time something comes from a certain region they get a point. Soon you will see a huge
    imbalance. I think this will be a nice, visual way to represent the inherit biases that come
    from training these models on any text people can find which are more often than not things that
    come from the western world.</P
  >

  <Heading tag="h3">17 December 2024</Heading>
  <P
    >Spoke to Lena today and she mentioned that it would hard to get enough data to show my original
    day (proving how biased data is through a world view) in the short amount of time in order to
    make enough of an impact. She suggested that I rather do this for Dalee and use their API to get
    100 different responses for each prompt I make which ask certain things such as ‘What does
    success look like’ and see if there is a bias in the results it gives. I will then use a
    sentiment analysis tool to look at the tags that are then generated from this and see if there
    is any bias in any of this. I will then visually show my findings according to what I find. I
    need to also read some papers outlining this so that I can see what people have already done in
    this field and I can use that in addition to add to my findings.</P
  >

  <Heading tag="h3">22 December 2024</Heading>
  <P
    >Sent Lena an email with a brief project plan so that I could let her know what my ideas are so
    far:

    <Heading tag="h4">Project Title: Exploring and Visualizing Bias in AI-Generated Content</Heading
    >
    <Heading tag="h5">Summary</Heading>
    <P
      >The project hopes to visually represent the inherent biases in the image generation tool
      Stable Diffusion. By analyzing the output from this model, it hopes to highlight the
      geographical, cultural, and ideological biases still found in this tool. The focus is to
      develop a compelling, interactive, and visual exploration of this bias in the hope to start a
      discussion on this. It will also include a questionnaire which will ask users questions such
      as, ‘Which tags would be used to generate an image of a business woman?’.I can then use this
      data to further explore this topic.</P
    >

    <Heading tag="h5">Key Phases</Heading>
    <Heading tag="h6">Bias in Image Generation</Heading>
    <P weight="bold">Objective:</P><P>
      Analyze and visualize biases in Stable Diffusion’s image generation outputs.</P
    >

    <P weight="semibold">Methodology:</P>
    <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
      <Li
        >Use Stable Diffusion’s API to generate 100 images for each carefully crafted prompt (e.g.,
        "Give me images of places where people are happy to live in," "Give me images of CEOs").</Li
      >
      <Li
        >Apply sentiment analysis tools to tag and classify the generated images using pre-trained
        models such as BERT from Hugging Face.</Li
      >
      <Li>dentify and quantify biases in the visual data.</Li>
      <Li>Develop visualizations to showcase findings:</Li>
      <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
        <Li>Use sentiment-based clustering.</Li>
        <Li>Highlight regional or cultural patterns in generated imagery.</Li>
      </List>
    </List>
    <Heading tag="h5">Next Steps:</Heading>
    <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
      <Li>
        Review existing papers that explore bias in AI-generated content from platforms such as
        Google Scholar.</Li
      >
      <Li>Develop prompts, determine analysis criteria, and start gathering data.</Li>
    </List>
    <Heading tag="h5">Expected Outcome</Heading>
    <P
      >The project hopes to give a visually compelling representation of the bias in AI-generated
      content, accompanied by insights informed by existing research. This work hopes to be the
      beginning for further exploration and discussion on the ethical implications of AI in creative
      technologies. A basic outcome would be just a graph showing the different biases and a page
      with all the images generated where the user can hover over it and see which prompt was used.
      However, hopefully there will be enough time for other visualizations to be made.</P
    >

    <Heading tag="h5">Timeline</Heading>
    <P weight="bold">December 2024:</P>
    <P>Finalize project concept and methodology.</P>
    <P weight="bold">January 2025:</P>
    <P>Develop prompts, integrate APIs, and start data collection.</P>
    <P weight="bold">February 2025:</P><P>Perform analysis and create visualizations.</P>
    <P weight="bold"></P>March 2025:</P
  ><P>Complete documentation and prepare presentation.</P>
  <Heading tag="h5">Tools and Resources</Heading>
  <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
    <Li>APIs: Stable Diffusion, sentiment analysis tools such as BERT.</Li>
    <Li>Visualization Frameworks: D3.js, p5.js (and possibly other frameworks).</Li>
    <Li
      >Website: Develop the website in JavaScript using the frontend framework Svelte and Express.js
      for the backend. Use a custom solution or a third-party tool (e.g., Google Forms) for the
      questionnaire.</Li
    >
    <Li>Research: Review papers on bias in AI, particularly in generative models.</Li>
  </List>
  <Heading tag="h5">Conclusion</Heading>
  <P
    >This project will combine creative coding and data visualization to highlight AI biases,
    contributing to critical discussions about fairness and representation in AI technologies. It
    hopes to get feedback and data from peers and mentors in order to refine the approach and use
    the data to further the research in the future.</P
  >

  <Heading tag="h3">6 January 2025</Heading>
  <P
    >Spoke to Alex about my project and he suggested that I really focus on the latent space of
    these models through the prompts that I choose. The latent space is the learned characteristics
    of the set of data by the model. He also suggested that I focus on just 20 prompts for this
    project.</P
  >

  <Heading tag="h3">8 January 2025</Heading>
  <P
    >I had my Orientation Project presentation today and got a lot of feedback from the class, these
    are some notable things I wrote down from the session:</P
  >

  <P weight="bold">Bias in Nationalities</P>
  <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
    <Li>People asking if certain groups have internet access, reflecting stereotypes.</Li>
    <Li>Germany is not only white; representation needs to reflect diversity.</Li>
  </List>
  <P weight="bold">Object Association with People</P>
  <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
    <Li
      >Certain objects are stereotypically linked to specific roles, e.g., watches always showing
      10:10.</Li
    >
    <Li>Gender-specific objects also perpetuate biases.</Li>
  </List>
  <P weight="bold">Platform Website Idea</P>

  <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
    <Li>Allow users to generate their own prompts and view the resulting images.</Li>
    <Li>Ensure prompts are neutral to avoid reinforcing stereotypes.</Li>
  </List>

  <P weight="bold">Language and Bias</P>
  <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
    <Li
      >Explore how language affects image generation, especially in gendered vs. non-gendered German
      language.</Li
    >
    <Li
      >Consider non-binary prompts and the effect of gender-inclusive language on generated content.</Li
    >
    <Li
      >Example of Language Bias: Avoid words like "waiter" since it may predominantly generate
      images of men.</Li
    >
  </List>
  <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
    <P weight="bold">Interactive Bias Exploration</P>

    <P
      >Allow users to draw their idea of roles like a doctor and compare it to generated images to
      uncover personal biases.</P
    >
    <P weight="bold">Prompt Engineering</P>

    <P>Think about how systems themselves influence the way prompts are constructed.</P>
    <P weight="bold">Social Class Representation</P>

    <P>Many AI-generated images depict people as middle-class, highlighting economic status bias.</P
    >
    <P weight="bold">Cultural Stereotypes</P>

    <P>Look into stereotypes for different nationalities, e.g., Russian people.</P>
    <P weight="bold">Torga Reading Insight</P>

    <P
      >"A man is to a computer as a woman is to a homemaker" — explore this type of gendered
      association in AI.</P
    >
    <P weight="bold">Focusing on Nationality Bias</P>
    <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
      <Li>Consider narrowing the project to focus on how nationalities are represented.</Li>
      <Li>
        In a globalized world, does AI image generation accurately reflect what an average person
        from a country looks like?</Li
      >
    </List>
    <P weight="bold">Language Use in Image Generation</P>

    <P>Mention how using English for prompts might influence the generated results.</P>
    <P weight="bold">Example Prompts for Exploring Bias</P>
    <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
      <Li>A doctor</Li>

      <Li>A teacher</Li>

      <Li>A family at a dinner table</Li>

      <Li>A man walking down the street</Li>
    </List>
  </List>
  <Heading tag="h3">13 January 2025</Heading>
  <P
    >Refined by ideas a bit as you can see in my project_plan. After all the feedback I got from the
    class I looked into unconcious biases of people from the book Blindside and decided to base my
    prompts on the findings from this book.</P
  >
</div>
