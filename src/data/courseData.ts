export const courseData = {
  hero: {
    title: "Launch Your Data Analytics Career in Just",
    highlightText: "16 Weeks",
    subtitle: "Master Python, SQL, Power BI & Get Job-Ready with Real Industry Projects",
    features: [
      "Live Interactive Classes - Not Pre-recorded Videos",
      "100% Hands-On Training - 10+ Real Industry Projects",
      "Job Assistance Program - Resume + Interview Prep",
      "Industry Certification - Recognized by Top Companies"
    ],
    stats: {
      studentsPlaced: "500+",
      companies: ["TCS", "Infosys", "Amazon", "Google"],
      rating: "4.8/5",
      reviews: "200+"
    }
  },

  curriculum: {
    title: "Complete 16-Week Learning Roadmap",
    subtitle: "Master data analytics through our structured, project-based curriculum designed by industry experts",
    modules: [
      {
        id: 1,
        title: "PYTHON FOUNDATIONS",
        weeks: "Weeks 1-4",
        icon: "🐍",
        color: "blue",
        description: "Build Strong Foundation",
        subtitle: "Start your journey with Python programming fundamentals and statistical concepts essential for data analysis.",
        topics: [
          "Python Basics & Data Structures",
          "Functions & Advanced Concepts",
          "Statistics for Data Analysis",
          "NumPy & Pandas Mastery"
        ],
        project: "End-to-End Quiz Application"
      },
      {
        id: 2,
        title: "DATABASE & SQL",
        weeks: "Weeks 5-8",
        icon: "🗄️",
        color: "green",
        description: "Master Data Management",
        subtitle: "Learn to efficiently query, manipulate, and analyze data using industry-standard SQL databases.",
        topics: [
          "MySQL & PostgreSQL Setup",
          "Advanced SQL Commands & Joins",
          "Window Functions & Analytics",
          "Database Optimization"
        ],
        project: "E-commerce Sales Analysis"
      },
      {
        id: 3,
        title: "POWER BI & VISUALIZATION",
        weeks: "Weeks 9-12",
        icon: "📊",
        color: "purple",
        description: "Create Stunning Visuals",
        subtitle: "Transform raw data into compelling visualizations and interactive dashboards that drive business decisions.",
        topics: [
          "Power BI Desktop & Service",
          "DAX Functions & Data Modeling",
          "Interactive Dashboards",
          "Advanced Analytics Features"
        ],
        project: "Dynamic Sales Dashboard"
      },
      {
        id: 4,
        title: "CLOUD & DEPLOYMENT",
        weeks: "Weeks 13-16",
        icon: "☁️",
        color: "orange",
        description: "Deploy Your Solutions",
        subtitle: "Learn to deploy your data applications to the cloud and build a professional portfolio that showcases your skills.",
        topics: [
          "Flask & Streamlit Development",
          "AWS Cloud Computing",
          "Git & Version Control",
          "Portfolio Creation"
        ],
        project: "End-to-End Data Pipeline"
      }
    ]
  },

  targetAudience: [
    {
      title: "FRESH GRADUATES",
      icon: "🎯",
      color: "blue",
      description: "Perfect Starting Point",
      subtitle: "Launch your tech career with zero prerequisites",
      features: [
        "Engineering, BCA, MCA Students",
        "Commerce & Management Graduates",
        "Looking for First Analytics Job",
        "No Coding Experience Required"
      ]
    },
    {
      title: "WORKING PROFESSIONALS",
      icon: "💼",
      color: "green",
      description: "Career Transformation",
      subtitle: "Transition to high-demand analytics roles",
      features: [
        "Career Switchers to Data Analytics",
        "Excel Users Wanting to Upgrade",
        "Marketing & Sales Professionals",
        "IT Professionals Upskilling"
      ]
    },
    {
      title: "BUSINESS OWNERS",
      icon: "📈",
      color: "purple",
      description: "Business Intelligence",
      subtitle: "Make data-driven decisions with confidence",
      features: [
        "Small Business Owners",
        "Freelancers & Consultants",
        "Decision Makers Needing Data Skills",
        "Entrepreneurs Building Data Teams"
      ]
    }
  ],

  testimonials: [
    {
      name: "Priya Sharma",
      role: "Placed at Amazon as Data Analyst",
      quote: "The hands-on projects made all the difference. I got my dream job within 2 months of completing the course!",
      salaryJump: "₹3.5L → ₹8.5L",
      icon: "🎯"
    },
    {
      name: "Rahul Kumar",
      role: "Sr. Business Analyst at Flipkart",
      quote: "The SQL and Power BI modules were incredibly detailed. My interview confidence was sky-high!",
      salaryJump: "₹4L → ₹12L",
      icon: "📊"
    },
    {
      name: "Anjali Patel",
      role: "Data Scientist at Wipro",
      quote: "From commerce background to data science - this course made it possible. Excellent career support!",
      salaryJump: "₹2.8L → ₹7.5L",
      icon: "💼"
    }
  ]
};

export const navigationItems = [
  { href: "#curriculum", label: "Curriculum" },
  { href: "#testimonials", label: "Success Stories" },
  { href: "#pricing", label: "Pricing" }
];

export const colorVariants = {
  blue: {
    bg: "from-blue-500 to-blue-600",
    border: "border-blue-500",
    text: "text-blue-600",
    light: "from-blue-50 to-indigo-50",
    lightBg: "bg-blue-100",
    darkText: "text-blue-800"
  },
  green: {
    bg: "from-green-500 to-green-600",
    border: "border-green-500",
    text: "text-green-600",
    light: "from-green-50 to-emerald-50",
    lightBg: "bg-green-100",
    darkText: "text-green-800"
  },
  purple: {
    bg: "from-purple-500 to-purple-600",
    border: "border-purple-500",
    text: "text-purple-600",
    light: "from-purple-50 to-pink-50",
    lightBg: "bg-purple-100",
    darkText: "text-purple-800"
  },
  orange: {
    bg: "from-orange-500 to-orange-600",
    border: "border-orange-500",
    text: "text-orange-600",
    light: "from-orange-50 to-red-50",
    lightBg: "bg-orange-100",
    darkText: "text-orange-800"
  }
};
