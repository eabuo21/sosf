import CoreValues from "@/components/shared/accordions/accordionwith-video";
const coreValuesData = [
  {
    title: "Integrity",
    description:
      "We are responsible and provide the best quality in our work, while ensuring belief in social responsibility, openness, transparency and accountability to one and other, and all stakeholders, beneficiaries and partners. We “walk the talk” and our word is our bond.",
    imageUrl:
    "https://leadx.org/wp-content/uploads/2019/05/shutterstock_506137132-696x464.jpg",
     
  },
  {
    title: "Collaboration",
    description:
      "We value learning and feedback, and believe in the importance of sharing knowledge, skills and experiences to scale impact. We partner with individuals and institutions that share our values, mission and vision.",
    imageUrl: "https://www.betterup.com/hs-fs/hubfs/Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg?width=964&height=643&name=Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg",
      
  },
  {
    title: "Service",
    description:
      "We seek to deliver long-term sustainable, holistic and data-driven interventions. We believe in advocacy based on proofs of concept and impact as the avenue for entrenching lasting change. At the heart of our work is our focus on building human capital to drive socio-economic change in their communities.",
    imageUrl:
      "https://ph.canon/media/image/2019/03/26/e07ca1812a46404aa3b8cea095b77f2f_business-service-landing-page.jpg",
  },
];

export default function CoreValue() {
  return (
    <div>
      <CoreValues values={coreValuesData} />
    </div>
  );
}
