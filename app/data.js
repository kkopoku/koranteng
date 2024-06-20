const data = {
  stuffBuilt: [
    {
      display: "normal",
      type: "Personal Project",
      title: "Enterprise Resource Planning System",
      description:
        "Enterprise Resource Planning System tailored for SMEs with features such as Finance, Inventory, Human Resource Management and Third-Party Integration to consume Inventory.",
      stacks: ["NextJS", "NodeJS", "MongoDB", "Git"],
      image_url: "/images/essentialerp/ss01.jpg",
      git_url: "https://github.com/orgs/Cessation-Code/",
      url: "",
    },
    {
      display: "inverted",
      type: "Personal Project",
      title: "RISC Microprocessor (16 Bit)",
      description:
        "16-bit RISC microprocessor with a Harvard Architecture design. It encompasses six ALU/Immediate instructions (ADD, SUB, AND, OR, ADDi, ANDi), two Memory instructions (LOAD, STORE), and three Branch instructions (Beq, Bne, JUMP).",
      stacks: ["Logism", "Microprocessors", "Havard Architecture", "Git"],
      image_url: "/images/microp/microp.jpeg",
      git_url: "https://github.com/kkopoku/RISC-16bit-MicroP",
      url: "",
    },
    {
      display: "normal",
      type: "Featured Project",
      title: "AutoCedi",
      description:
        "Automatic payment platform to facilitate automatic payments when transacting with the eCedi",
      stacks: ["React", "NodeJS", "MongoDB", "Git"],
      image_url: "/images/autocedi/autocedi.png",
      git_url: "https://github.com/AutoSpikey",
      url: "https://autocedi-web.vercel.app/",
    },
  ],

  jobs: [
    {
      id: 0,
      companyName: "Africa Software Solutions",
      duties: [
        "Developing custom application to meet business needs with Claris FileMaker and Angular",
        "Communicating with clients to gather requirements to provide optimal solutions",
        "Maintain the performance of applications developed using Filemaker and Angular",
        "Refactoring the code of a scalable web application styled with Boostrap to TailwindCSS",
      ],
      url_string: `https://assl.io`,
      abbreviation: "ASSL",
      role: "Software Engineer",
      period: "Sept 2019 - Dec 2022",
    },
    {
      id: 1,
      companyName: "ZEEPAY Ghana",
      duties: [
        "Developing and implementing features on the existing platform upon recieving change requests with Laravel",
        "Communicating with partners to implement seamless integrations like Airtime Topup and Insurance services ",
        "Refactoring code base to be more readable and optimized",
        "Pair programming with colleagues to provide rich output",
      ],
      url_string: `https://myzeepay.com`,
      abbreviation: "ZEEPAY",
      role: "Product Delivery Analyst",
      period: "Sept 2023 - Present",
    },
  ],
};

export default data;
