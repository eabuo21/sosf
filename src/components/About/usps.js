/** @format */

import Head from "next/head";
import TAB from "../shared/tabs/tab1";

export default function Usps() {
  const tabs = [
    {
      id: "tab1",
      label: "EFFICIENT USE OF CAPITAL    ",
      content1: (
        <div>
          <ul className="list-decimal  flex flex-col gap-4  text-left text-sm   text-black  md:text-base">
            <li>
              Data serves as the compass for contextualizing interventions,
              ensuring that each solution is tailored to the unique needs and
              nuances of the communities it aims to serve.
            </li>
            <li>
              {" "}
              This data-driven strategy not only allows the foundation to
              deliver solutions that are highly relevant and effective but also
              equips it with the knowledge required for evidence-based advocacy
              efforts.
            </li>
          </ul>
        </div>
      ),
      heading: "Our Work is Data Driven & Contextualized",
      subheading:
        "OSF places data at the heart of its operations. A profound understanding of the power of data is evident in the organization’s approach: ",
      side_image:
        "https://www.lytics.com/wp-content/uploads/2022/07/article-Data-advocacy-panel_-Ive-built-my-team-now-what_.jpg",
      link: "",
      linktext: "  Get Involved ",
    },
    {
      id: "tab2",
      label: " OUR INTERVENTIONS ARE DIRECT & INDIRECT    ",
      content1: (
        <div>
          <ul className="list-decimal  flex flex-col gap-4  text-left text-sm   text-black  md:text-base">
            <li>
              {" "}
              The foundation not only implements interventions directly but also
              empowers individuals and organizations with essential tools,
              resources, and funding to enhance their capabilities.
            </li>
            <li>
              {" "}
              This support enables beneficiaries to deploy impactful
              interventions tailored to their unique contexts, multiplying the
              foundation’s reach and effect.
            </li>
            <li>
              By fostering indirect interventions, the foundation contributes to
              the creation of a network of change-makers, thereby promoting
              sustainability and scalability.
            </li>
          </ul>
        </div>
      ),
      heading: "Our Interventions are Direct & Indirect",
      subheading:
        "SOSF embraces a multifaceted approach that encompasses both direct and indirect interventions:   ",
      side_image:
        "https://worldvisionadvocacy.org/wp-content/uploads/2020/01/3B8A0317-1.jpg",
      link: "",
      linktext: "  Get Involved ",
    },

    {
      id: "tab3",
      label: " ADVOCACY FOR INSTITUTIONALIZATION      ",
      content1: (
        <div>
          <ul className="list-decimal  flex flex-col gap-4  text-left text-sm   text-black  md:text-base">
            <li>
              {" "}
              Advocacy efforts are guided by tangible proofs of concept and
              demonstrated impact, emphasizing the foundation’s commitment to
              evidence-based interventions.
            </li>
            <li>
              {" "}
              Ambassadors play a pivotal role in advocating for
              institutionalization. They serve as champions of change, working
              to ensure that the foundation’s work is embedded in the
              institutions and communities it serves.
            </li>
            <li className="list-none md:pr-5">
              The Foundation’s advocacy efforts extend beyond mere rhetoric,
              aiming to entrench lasting change through institutional adoption.
              This strategic vision underlines your organization’s dedication to
              creating sustainable transformations.
            </li>
          </ul>
        </div>
      ),
      heading: "Advocacy for Institutionalization",
      subheading:
        "Advocacy for SOSF is a purpose-driven endeavor focused on institutionalizing meaningful change.        Key components include:  ",
      side_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-TPw0C9cOHy9NCQ7dFpZcXZYWjGjUWBXzg&usqp=CAU",
      link: "",
      linktext: "  Get Involved ",
    },

    {
      id: "tab4",
      label: " EFFICIENT USE OF CAPITAL ",
      content1: (
        <div>
          <ul className="list-none  flex flex-col gap-4  text-left text-sm   text-black  md:text-base">
            <li>
              {" "}
              SOSF has effectively reached over 100,000 people across a diverse
              range of countries, including Nigeria, Ghana, Kenya, Ethiopia,
              South Africa, Sierra Leone, DRC Congo, Macedonia, India, United
              Kingdom, and Brazil in Latin America.
            </li>
            <li>
              {" "}
              Remarkably, this achievement has been accomplished with a
              judicious investment of approximately 100 million Naira over the
              course of nine years. The foundation takes great care in managing
              its financial resources, with a significant focus on minimizing
              overheads.
            </li>
            <li className="list-none md:pr-5">
              The primary emphasis lies in allocating the majority of funds
              towards delivering highly impactful interventions and nurturing
              sustainability. This approach ensures that every capital
              investment is utilized efficiently, directly benefiting the
              communities you serve.
            </li>
          </ul>
        </div>
      ),
      heading: "Efficient Use of Capital",
      subheading: "",
      side_image:
        "https://techcrunch.com/wp-content/uploads/2022/03/GettyImages-1284113343.jpg",
      link: "",
      linktext: "  Get Involved ",
    },

    {
      id: "tab5",
      label: " Integration of Data, Interventions & Advocacy ",
      content1: (
        <div>
          <ol className="list-alphabet  flex flex-col gap-4  text-left text-sm   text-black  md:text-base">
            <li>
              {" "}
              a. Data is harnessed to inform the design and evaluation of
              interventions, guaranteeing that these initiatives are grounded in
              real-world insights.
            </li>
            <li>
              {" "}
              b. Advocacy efforts are bolstered by compelling data, enabling the
              foundation to make a persuasive case for lasting change and
              sustainable impact.
            </li>
            <li className="list-none md:pr-5">
              c. This holistic approach ensures that every aspect of the
              foundation’s work is aligned and reinforced, enhancing its overall
              effectiveness.
            </li>
          </ol>
        </div>
      ),
      heading: "Integration of Data, Interventions & Advocacy",
      subheading:
        "The foundation’s strategy revolves around the seamless integration of data, interventions, and advocacy",
      side_image:
        "https://www.mdpi.com/sustainability/sustainability-16-01790/article_deploy/html/images/sustainability-16-01790-g001.png",
      link: "",
      linktext: "  Get Involved ",
    },

    {
      id: "tab6",
      label: " UNIQUELY CATALYTIC APPROACH ",
      content1: (
        <div>
          <ul className="list-decimal  flex flex-col gap-4  text-left text-sm   text-black  md:text-base">
            <li>
              {" "}
              Empowering ambassadors who serve as passionate advocates for the
              foundation’s mission and actively support its work.
            </li>
            <li>
              {" "}
              Encouraging beneficiaries to not only benefit from interventions
              themselves but also to propagate these interventions to others,
              effectively multiplying the impact.
            </li>
            <li className="list-none md:pr-5">
              Attracting many ambassadors who transition into donors and
              investors, illustrating their ongoing commitment to the
              foundation’s mission.
            </li>
            <li>
              Leveraging social change projects as platforms for ambassadors to
              advocate for, and ultimately institutionalize, the foundation’s
              work within their communities.
            </li>
            <li className="list-none">
              This unique approach positions your organization as a dynamic
              catalyst for lasting change.
            </li>
          </ul>
        </div>
      ),
      heading: "Uniquely Catalytic Approach",
      subheading:
        "The foundation’s catalytic approach is multifaceted and aimed at fostering sustainable and widespread change. It encompasses several critical elements: ",
      side_image:
        "https://www.mdpi.com/catalysts/catalysts-12-00207/article_deploy/html/images/catalysts-12-00207-g001.png",
      link: "",
      linktext: "  Get Involved ",
    },
  ];

  return (
    <div className="min-h-screen bg-milk  flex items-center justify-center">
      <TAB tabs={tabs} />
    </div>
  );
}
