const projects = [
      {
        name: "True Weather - Real-time Weather App",
        technologies: ["Angular", "Tailwind CSS", "TypeScript", "HTML", "CSS", "OpenWeatherMap API"],
        links:"true-weather.vercel.app",
        link:"https://github.com/sanijae/True_weather",
        description: [
          "Developed a dynamic weather application using Angular and Tailwind CSS, providing real-time weather data based on user location or search.",
          "Integrated OpenWeatherMap API to fetch and display accurate weather details such as temperature, humidity, and wind speed.",
          "Implemented a responsive and intuitive user interface, ensuring seamless experience across devices with modern UI elements."
        ]
      }, 
      {
        name: "Swift Blog: A Responsive Blogging Platform",
        technologies: ["Laravel", "Tailwind CSS", "PHP", "HTML", "CSS", "MySQL"],
        link:"https://github.com/sanijae/swift_blog",
        description: [
          "Built a full-featured blogging platform using Laravel, with functionalities for user authentication, post creation, editing, and commenting.",
          "Leveraged MySQL for database management to store user data, blog posts, and comments efficiently.",
          "Designed a clean, responsive UI using HTML and Tailwind CSS, ensuring an optimized experience across different devices and screen sizes.."
        ]
      }, 
      {
        name: "Sans Store: E-Commerce Platform",
        technologies: ["VueJS", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        link:"https://github.com/sanijae/sans-store",
        description: [
          "Developed a scalable e-commerce platform with a modern user interface using Vue.js and Tailwind CSS for smooth navigation and responsiveness.",
          "Implemented a backend system using Node.js and Express, enabling seamless product management, user authentication, and payment processing.",
          "Utilized MongoDB for efficient data storage, handling product listings, user data, and transaction records in a secure and scalable manner."
        ]
      }, 
      {
        name: "Explainable AI Framework for Brain Tumor Detection",
        technologies: ["Python", "TensorFlow", "Keras", "CNN", "Grad-CAM", "XAI"],
        // links:"https://career-connect-8w0x.onrender.com",
        link:"https://www.kaggle.com/code/msanijae/brain-tumor-classifications",
        description: [
          "Designed a deep learning framework for brain tumor detection with a focus on explainability to improve clinical integration and trust in AI predictions.",
          "Utilized Grad-CAM to visualize model decisions, ensuring greater transparency and interpretability in identifying tumor regions.",
          "Enhanced model performance using EfficientNetB0 with frozen layers, balancing accuracy with computational efficiency for real-time clinical applications."
        ]
      },
      {
        name: "Clinical Image Analysis Framework for Real-time Medical Imaging",
        technologies: ["Python", "TensorFlow", "Keras", "CNN"],
        // links:"https://career-connect-8w0x.onrender.com",
        link:"https://www.kaggle.com/code/msanijae/breast-hispathology-vgg16",
        description: [
          "Developed a CNN-based system using depthwise separable convolutions to optimize performance and speed for real-time medical image analysis.",
          "Achieved state-of-the-art accuracy and efficiency in detecting and classifying medical images, enhancing diagnostic capabilities.",
          "Integrated model explainability techniques to ensure transparency in medical image predictions for clinical usage."
        ]
      },
      {
        name: "Job Portal – Career Connect",
        technologies: ["React", "Redux", "Tailwind CSS", "Firebase"],
        links:"https://career-connect-8w0x.onrender.com",
        link:"https://github.com/sanijae/Career-connect",
        description: [
          "Developed a job portal to connect job seekers with employers.",
          "Styled the application using Tailwind CSS for a modern and responsive design.",
          "Implemented real-time data fetching and state management using Firebase."
        ]
      },
      {
        name: "Document Conversion - DocConvertPro",
        technologies: ["React", "Redux", "Styled Components", "Django"],
        links:"https://docconvertpro-frontend.onrender.com",
        link:"https://github.com/sanijae/DocConvertPro_Frontend",
        description: [
          "Created an application to convert various document formats.",
          "Implemented the back end using Django to handle document processing and conversion.",
          "Utilized React for the front end and styled components for modular CSS."
        ]
      },
      {
        name: "Task Manager - React Task Manager",
        technologies: ["React", "Redux", "NodeJS", "ExpressJS", "MongoDB"],
        link:"https://github.com/sanijae/react_task_manager",
        description: [
          "Built a task management tool to help users organize and prioritize their tasks.",
          "Used React and Redux for front-end state management.",
          "Developed a NodeJS server with MongoDB for data storage and retrieval."
        ]
      },
    {
      name: "Weather App",
      technologies: ["React", "OpenWeatherMap API", "Material UI", "TypeScript", "Styled-components"],
      links:"https://react-weather-app-bxx8.onrender.com",
      link:"https://github.com/sanijae/weather_app",
      description: [
        "Developed a weather application that retrieves real-time weather data based on user location.",
        "Implemented a responsive and modern UI using Material UI and Styled-components.",
        "Utilized TypeScript for type-checking and better code structure."
      ]
    },
    {
      name: "React E-commerce",
      technologies: ["React", "Bootstrap", "Redux", "Fake Store API"],
      link:"https://github.com/sanijae/react-ecommerce",
      description: [
        "Created a fully functional e-commerce platform using React and Redux for state management.",
        "Integrated with the Fake Store API to fetch product data dynamically.",
        "Designed a responsive and intuitive user interface with Bootstrap."
      ]
    },
    {
      name: "Breast Cancer Prediction",
      technologies: ["Python", "Scikit-learn", "Matplotlib", "Pandas", "Jupyter Notebook", "Google Colab"],
      link:"https://github.com/sanijae/Breast_cancer_prediction",
      description: [
        "Developed machine learning models to predict breast cancer using data analysis and visualization tools.",
        "Utilized Scikit-learn for building and evaluating machine learning models.",
        "Implemented data preprocessing, feature selection, and model evaluation techniques."
      ]
    },
    {
      name: "Supermarket Customer Segmentation",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      link:"https://github.com/sanijae/Mall_Customer-segmentation",
      description: [
        "Conducted customer segmentation analysis based on purchasing behavior using machine learning algorithms.",
        "Preprocessed data to handle missing values and normalize features.",
        "Visualized customer segments using Matplotlib for insights and business strategy."
      ]
    },
    {
      name: "Housing Price Prediction",
      technologies: ["Python", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
      link:"https://github.com/sanijae/Housing_price_prediction",
      description: [
        "Built a predictive model to estimate housing prices based on historical data.",
        "Employed regression techniques and evaluated model performance metrics.",
        "Visualized trends and relationships in data using Matplotlib for better understanding."
      ]
    },
    {
      name: "Spam Mail Detection",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      link:"https://github.com/sanijae/Spam_mail_prediction",
      description: [
        "Developed a machine learning model to classify emails as spam or non-spam.",
        "Implemented text preprocessing techniques such as tokenization and TF-IDF vectorization.",
        "Evaluated model performance using precision, recall, and F1-score metrics."
      ]
    },
    {
        name: "Call Center Solution",
        technologies: ["PowerBI"],
        links:"https://drive.google.com/file/d/1ZbuoQRrOsX7LR1FzH-ro3dl0fLtsCoGw/view?usp=drive_link",
        description: [
          "Designed and developed a comprehensive dashboard to monitor and optimize call center performance.",
          "Integrated multiple data sources to provide real-time analytics and reporting.",
          "Visualized key metrics such as call volume, response time, and customer satisfaction."
        ]
      },
      {
        name: "Customer Retention",
        technologies: ["PowerBI"],
        links:"https://drive.google.com/file/d/1VwPw_yGVmX0EtgWDbt_AZURpIV6z7Gsc/view?usp=drive_link",
        description: [
          "Built a dashboard to analyze customer retention rates and identify at-risk customers.",
          "Used PowerBI to visualize customer behavior patterns and churn rates.",
          "Provided actionable insights to improve customer retention strategies."
        ]
      },
      {
        name: "Diversity & Inclusion",
        technologies: ["PowerBI"],
        links:"https://drive.google.com/file/d/1uhut9x_irNSh5f1d2W7XvnUuKzkI7YJc/view?usp=drive_link",
        description: [
          "Developed an interactive dashboard to track diversity and inclusion metrics within the organization.",
          "Integrated HR data to visualize demographic information and trends.",
          "Highlighted areas for improvement and provided insights to promote a more inclusive workplace."
        ]
      }
  ];
  
  export default projects;
  