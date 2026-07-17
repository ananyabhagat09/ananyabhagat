import React from "react";

import "./Info.scss";

const infoMeData = {
  one: {
    content: [
      {
        header: "💭 'Bout this folio",
        paragraphs: [
          "This portfolio is an interactive 3D experience built with React Three Fiber, Three.js, and Blender.",
        ],
      },
      {
        header: "🎉 Special Thanks, Credits, & Inspiration",
        paragraphs: [
          " - A big thanks to *MCprep Blender addon creators*. It saves so much time working with Minecraft-like things in Blender. Would not have been possible otherwise.",
          " - Special thanks to ❤️*Foxel MC*❤️ for the inspiration for the house design and letting me use it!!!",
          " - Thank you *JDGraphics*, the Minecraft font is super awesome.",
          " - Big shoutout to *Bruno Simon's three.js journey* course and all the helpers in the Discord channel. If I didn't start my journey with this course, I don't think I'd be where I am now.",
          " - Shoutout to *Wawa Sensei's R3F course*, learned a lot on the camera controls lesson.",
          " - Audio was sourced from *myinstants.com, voicemod.net, and downloads.khinsider.com*",
          " - All the employees at the *Blender Foundation*, thank you from the bottom of my heart.",
          " - Amazing mob models all credited to *Vincent Yanez* on Sketchfab!! Thank you for them Vincent!",
          " - Of course shoutout to the amazing *three.js community* not only for the tool itself but also for three.js discourse, a lot of my issues were solved on there. Love all of you!!!",
          " - Lastly, to all the people that created amazing free online web tools like image to *pixelated image converters* or *bezier curve CSS visualizers,* thank you!",
        ],
      },
      {
        header: "🤖 Tools, Technologies, & More",
        paragraphs: [
          " - Entire project was spanned over two months, some days I spent 12 hours and some days I spent like 30 minutes, so I don't even remember how long it took me (at least 100 hours), but it was really fun!!!",
          " - *Blender* was used for all 3D stuff (driver animations, baking, modeling, rigging etc.). Notable plugins include MCprep, SimpleBake, and UVPackMaster 3.",
          " - *Audacity* was used to convert mp3 files into ogg files for smaller file sizes and retaining quality.",
          " - *Figma* was used to edit baked textures and create custom SVGs.",
          " - *Poly Haven* was used for the HDRI.",
          " - Global state management stores were handled with *zustand*.",
          " - Vite's default *React template* was used.",
          " - *SCSS* was the choice for the website styles.",
          " - *Vercel* was used for deployment and *SquareSpace* for the domain name. Vercel was free which is amazing. Domain name cost 14 USD for one year.",
          " - React Three Fiber and lots of React Three Drei helpers were used to speed up the 3D web development process.",
          " - Notable command line tools like *gltf-transform* and *gltfjsx* were used to optimize models for the web and code.",
          " - All meshes utilized *KTX textures* and were created using KTX Software on GitHub.",
          " - *Transfonter* was used to convert fonts from otf to woff files.",
          " - *Favicon generator* was used to convert PNG images into properly configured favicons for different devices and browsers.",
          " - Read a lot of documentation. A lot. I really appreciate everyone who spent so much time writing documentation for their tools—it helped a ton. The React Three Drei docs are incredible.",
          " - *Squoosh* by Google was used for quick image compression and conversion to WebP image format.",
          " - *ChatGPT* helped out with some of the redundant code really well.",
          " - Online viewers like *sandbox.babylonjs.com*, *gltf-viewer.donmccurdy.com*, and *gltf-report.com* were incredibly helpful for quickly reviewing model animations and textures, saving a lot of time.",
          " - Inspired by *Andrew Woan's* Minecraft Portfolio tutorial. Built with curiosity, countless iterations, and plenty of coffee.",
        ],
      },
    ],
  },
};

const Info = () => {
  const data = infoMeData["one"];

  if (!data) {
    return <div>Data not found</div>;
  }

  const parseText = (text) => {
    const parts = text.split(/(\*[^*]+\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        const content = part.slice(1, -1);

        return (
          <span key={index} className="yellow-text">
            {content}
          </span>
        );
      }

      return part;
    });
  };

  return (
    <div className="data-container">
      {data.content.map((section, index) => (
        <div key={index} className="data-section">
          <h2 className="info-section-header">{section.header}</h2>

          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={`${index}-${pIndex}`} className="section-paragraph">
              {parseText(paragraph)}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Info;