import Model from "@/components/shared/accordions/accordion-piechart";
const coreValuesData = [
  {
    name: "Data",
    value: 400,
    description:
      "We gather & analyze data on beneficiary needs &contexts through baseline evaluation & situational analysis, using this to design, implement, and evaluate interventions. We research insights & trends in industries & communities; share the same, to educate & inform our work & that of beneficiaries, & partners in line with SDG17. We utilize data for advocacy, quality assurance, and impact assessment, sharing insights through channels – newsletters, strategic events, media, & commissioned reports to inform stakeholders & partners. We provide data and research consultancy to other NGOs, private and the public sector.",
  },
  {
    name: "Advocacy",
    value: 300,
    description:
      "We utilize data from research and interventions to raise awareness, mobilize partnerships for scale, and institutionalize outcomes & impact to achieve our vision. SOSF leverages data and interventions outcomes to raise awareness, mobilize partnerships, inform policies & legislation, institutionalize interventions for long term sustainable impact, drive thought leadership & scale its work through its alumni and partners.  We conduct advocacy through (i) our Beneficiaries/Ambassadorsas catalysts of change (ii) Volunteer Mobilization (iii) Stakeholder Engagement & Coalition Formation (iv) Data & Research (v) Mainstreaming / institutionalizing interventions; (vi) Awareness Building (vii) Policy & Regulation Design & Implementation.",
  },
  {
    name: "Intervention",
    value: 300,
    description:
      "We design, deliver, monitor, evaluate, and institutionalize data-driven interventions, working directly & indirectly through partnerships inalignment with SDG17. Our goal is not just to create time-bound programs but ensure their long-term sustainability for lasting impact.  Our interventions are Direct through programs (delivery & institutionalization) and; Indirect through supporting our individual(Lead4Change)& institutional partners, implement & scale their interventions throughfunding, resources, training, data & people.  ",
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function App() {
  return (
    <div>
      <Model
        data={coreValuesData}
        colors={COLORS}
        centerImageSrc="https://www.skillsoutsideschool.com/wp-content/uploads/brizy/34/assets/images/iW=370&iH=370&oX=20&oY=20&cW=330&cH=328/Ydg95W9q_400x400-removebg-preview.png"
      />
    </div>
  );
}
