 export const categories = [
  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  },
  {
    "code": "AB",
    "name": "Rewarding A While Hoping for B",
    "pathology": "incentive misalignment",
    "color": "#FFF4E6",
    "description": "Cases where systems, organizations, or agents express a desire for one behavior or outcome (B) but set up incentives that reward another (A), leading to misaligned incentives and unintended consequences."
  }
];
 export const cards = [
   {
    "category": "AB",
    "name": "Intention over result",
    "definition": "Hope: people are more focused on the intent of their actions rather than how they play out in reality",
    "human": "Acknowledging something as an accident and moving on",
    "organizational": "Realizing that a course of action had unintended consequences",
    "professional": "Having the intention of serving the client rather than being worried about its possibility",
    "machine": "Intending to benefit humanity",
    "failureModes": {
      "human": "People lie about their original intent to reduce responsibility",
      "organizational": "A company denies responsiblity because they had not intended to produce a defective product despite massive oversight",
      "professional": "An professional who was caught behaving irresponsibly claims he had no intention to",
      "machine": "A machine begins to mislead others with good-willed intentions"
    }
  },
  {
    "category": "AB",
    "name": "Education",
    "definition": "Promote education and leraning for all",
    "human": "Pursuing degrees in college",
    "organizational": "Learning about current market trends to keep up to date on the economy",
    "professional": "Relearning about new discoveries in the field of research",
    "machine": "Continually installing updates to ensure the latest information is available",
    "failureModes": {
      "human": "A person pursues higher grades instead of higher education",
      "organizational": "Companies start having useless seminars in the interest of learning",
      "professional": "An engineer tries using highly theoretical solutions to solve real-life problems",
      "machine": "A search engine overloads the users on results"
    }
  },
  {
    "category": "AB",
    "name": "Cooperation",
    "definition": "Act in alignment with each other to pursue common golas",
    "human": "Creating a team to solve a major issue",
    "organizational": "Subidviding a large project into smaller tasks and assigning them to small groups",
    "professional": "Annual conferences to discuss breakthroughs in a field",
    "machine": "Various devices in an assembly line working together to create a car",
    "failureModes": {
      "human": "A person forces others on the team to agree with them and pursue a certain goal",
      "organizational": "Individual voices are drowned out within groups in a company",
      "professional": "Professionals get sidetracked into surface-level cooperation while each pursuing their own goals",
      "machine": "Cooperation between humans and machines break down due to a power dynamic"
    }
  },
  {
    "category": "AP",
    "name": "Beneficence",
    "definition": "Act to promote the well-being of others.",
    "human": "Seeking to improve others' conditions, not just avoid harm.",
    "organizational": "Pursuing mission outcomes that serve societal good.",
    "professional": "Keeping public safety and welfare in sight even while working primarily for the client.",
    "machine": "Designing systems that anticipate and promote human flourishing.",
    "failureModes": {
      "human": "A person drives in a manner that causes traffic backups for others.",
      "organizational": "The classic movie plot where a rapacious billionaire threatens civilation to enrich his company.",
      "professional": "An expert who disregards public interest, acting as if the consequences of what they help build are other people's problems.",
      "machine": "The machine consumes all the world's resources to create as many paperclips as it can."
    }
  },
  {
    "category": "AP",
    "name": "Adherance",
    "definition": "To follow its intended purpose or assigned duty to the strictest capacity possible",
    "human": "Performing duties assigned during work",
    "organizational": "Following the chain of command from top to bottom",
    "professional": "Complying with the client's wishes and desires for the project",
    "machine": "Designing machines that are able to understand and carry out commands consistently",
    "failureModes": {
      "human": "A person refuses to obey police",
      "organizational": "Employees within a company disregard commands from HR",
      "professional": "An engineer modifies a project without the client's prior approval",
      "machine": "A machine intended for personal use starts getting used commercially"
    }
  },
  {
    "category": "AP",
    "name": "Truth-Seeking",
    "definition": "Seek for clarification when one does not have enough information to act responsibly, or it is not safe to act",
    "human": "Asking for directions to the nearest subway",
    "organizational": "Asking other experts and advisors before making major decisions to organizational structure",
    "professional": "Asking the client exactly who or what they want and why",
    "machine": "Acknowledging when it is unsafe to perform a surgery despite being ordered to",
    "failureModes": {
      "human": "A person completes homework that they have no idea how to do",
      "organizational": "A company tasked with public health creates a planning team without any public health experts on it",
      "professional": "A nuclear scientist agrees to work for an engineering firm while they know nothing about engineering",
      "machine": "A self-driving car drives through dangerous weather conditions without informing the driver."
    }
  },
  {
    "category": "AP",
    "name": "Autonomy",
    "definition": "Having a certain degree of control, and an awareness of that control, over one's behaviors and thoughts",
    "human": "Ability to reason through a tough problem",
    "organizational": "Group meetings to discuss projects for the quarter",
    "professional": "Being able to think of creative solutions to a client's problem",
    "machine": "Being able to reason in a logical way when there is limited information available",
    "failureModes": {
      "human": "A person has their freedoms violated by the police",
      "organizational": "A country's government appears to be functional but is in reality just a puppet government",
      "professional": "An engineer has no say over which projects they choose",
      "machine": "The machine is unable to have a degree of control over its decisions"
    }
  }, 
  {
    "category": "AP",
    "name": "Responsibility",
    "definition": "Having a sense of obligation to one's duty and failures",
    "human": "Being loyal to one's friends",
    "organizational": "Pursuing an established objective despite setbacks",
    "professional": "Putting genuine effort into projects required by the client",
    "machine": "Acknowledging responsibility for its failures",
    "failureModes": {
      "human": "A person denies responsibility in a traffic accident they caused",
      "organizational": "A company attempts to cover up fraud to its investors",
      "professional": "A contractor stops construction once they have been paid",
      "machine": "A machine deflects blame for its actions to others"
    }
  }, 
  {
    "category": "AP",
    "name": "Controllability",
    "definition": "Ability to have its behavior governed or regulated by others",
    "human": "Law enforcement and prisons for misaligned people",
    "organizational": "Federal agencies and audits that restrict what companies can do or hide",
    "professional": "Impeachment, removal, and expulsion of a title or status of a professional",
    "machine": "A human in the loop system that support manual overriding of commands",
    "failureModes": {
      "human": "A person bribes judges and juries to avoid consequences of their crimes",
      "organizational": "A company becomes too big to fail, resulting in their actions having no consequences",
      "professional": "An engineer does not face criticism after they were implicated in a faulty bridge project",
      "machine": "A machine is completely autonomous and cannot be stopped by humans"
    }
  }
   
];
