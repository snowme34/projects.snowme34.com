/*
 * Projects listing
 */

let projects = [
	// template
  // {
	// 	id: '',
	// 	name: '',
	// 	desc: [
	// 		'A thing'
	// 	],
	// 	date: '2018/12-2019/01', // 2345-present
	// 	github: 'https://github.com/snowme34/',
	// 	// githubRepo: '',
	// 	weight: 0,
	// 	websites: [''],
	// 	tags: [
	//    'C++', 'GNU'
	// 	]
	// },
  {
		id: 'docs.snowme34.com',
		name: 'docs.snowme34.com',
		desc: [
			'Non-Subjective technical articles, including references for languages, algorithms, cli, DevOps, DB, networking, etc.',
			'Updates almost daily. Focus on simplified but accurate explanations'
		],
		date: '2019/01-present',
		github: 'https://github.com/snowme34/snowme34.com/tree/master/docs',
		weight: 2,
		websites: ['https://docs.snowme34.com'],
		tags: [
			'Technical Writing', 'DevOps', 'Algorithms', 'Data Structures', 'Langrage', 'SQL', 'Bash', 'unix', 'Scale', 'Networking'
		]
	},
  {
		id: 'snowme34.com',
		name: 'snowme34.com',
		desc: [
			'Code for the snowme34.com',
			'Has multiple independent sites:',
			'snowme34.com, blog.snowme34.com, docs.snowme34.com, projects.snowme34.com, contact.snowme34.com'
		],
		date: '2017/12-present',
		github: 'https://github.com/snowme34/snowme34.com',
		weight: 2,
		websites: ['https://snowme34.com'],
		tags: [
			'DevOps', 'CI/CD', 'SEO', 'Blog', 'JavaScript', 'HTML', 'CSS'
		]
	},
  {
		id: 'ucsdscheduleplanner',
		name: 'UCSD Schedule Planner',
		desc: [
			'A production-level web application helping students to schedule classes',
			'Work in a team and is responsible for back-end, DevOps, SRE, CI/CD, QA'
		],
		date: '2018/11-present',
		github: 'https://github.com/ucsdscheduleplanner/',
		githubRepo: 'https://github.com/ucsdscheduleplanner/UCSD-Schedule-Planner',
		weight: 5,
		websites: ['https://sdschedule.com/'],
		tags: [
		 'Python', 'Flask', 'Golang', 'MongoDB', 'Redis', 'PostgreSQL', 'Caching', 'DevOps',
		 'Bash', 'Nginx', 'JMeter', 'Stress Test', 'SQL', 'JavaScript'
		]
	},
  {
		id: 'personbest',
		name: 'Person Best',
		desc: [
			'A fitness Android app, with Google API',
			'Led 5 agile developers as PM. Ensured git workflow, code quality, and design patterns such as SRP, MVC',
			'Mainly worked on Firebase integration, db design, and quality control'
		],
		date: '2019/01-2019/03',
		github: 'https://github.com/UCSD-CSE-110-Winter-2019/Team-33-PersonBest',
		weight: 1,
		tags: [
	   'Android', 'Java', 'Agile', 'Design Patterns', 'Database Design', 'Firebase', 'QA'
		]
	},
  {
		id: 'microclimate-ioteam',
		name: 'Microclimate IOTeam',
		desc: [
			'An IoT based Microclimate group project',
			'Used embedded C and Arduino for IoT device. Wrote Node.js-based backend with SOAP API to collect 100k+ data and monitor device/data health. Wrote bash script to deploy',
			'Utilized Google charts and map APIs to visualize the data, helping students to decide which route to take to go across campus.',
			'(no public code since school project, link to presentation)'
		],
		date: '2019/04-2019/06',
		github: 'https://github.com/snowme34/',
		weight: 1,
		websites: ['https://docs.google.com/presentation/d/1sgU10KNQS97KWu0Uks9_d9w5As4TkLed6jUJ2t6-CHU/edit?usp=sharing'],
		tags: [
	   'IoT', 'Embedded C', 'Node.js', 'JavaScript', 'Google Charts', 'Google Maps', 'Data Visualization', 'Data Analysis', 'SOAP', 'MySQL'
		]
	},
	{
		id: 'tone-the-ear',
		name: 'Tone the Ear',
		desc: [
			'An interactive progressive web app about ear training',
			'Has 3 individual pages with comprehensive, captivating, and constructive coaching:',
			'Piano, Perfect Pitch, and Tensorflow.js assisted Transcription.',
			'An ungainly and ludicrous front-end attempt'
		],
		date: '2018/12-2019/01',
		github: 'https://github.com/snowme34/tone-the-ear',
		weight: 0,
		websites: ['https://demo-tone-the-ear.snowme34.com'],
		tags: [
			'JavaScript', 'React', 'Tensorflow.js',
			'Firebase', 'Material-UI'
		]
	},
  {
		id: 'undecidable-task-data-mining-assignment-10',
		name: 'Undecidable Task Data Mining Assignment 10',
		desc: [
			'A prediction task as a final project for a data mining class',
			'Good use of Python libraries: Scikit-learn and Keras',
			'10 is in binary',
		],
		date: '2018/12',
		github: 'https://github.com/snowme34/undecidable-task-data-mining-assignment-10',
		weight: 0,
		tags: [
		 'Data Mining', 'Python', 'Jupyter Notebook', 'Numpy', 'Pandas', 'Keras', 'Sklearn', 'SVM',
		 'Logistics Regression', 'PCA'
		]
	},
  {
		id: 'hexo-theme-symphony',
		name: 'Hexo Theme Symphony',
		desc: [
			'A neat Hexo theme symphony without unnecessary animations',
			'The theme used by blog.snowme34.com',
			'(Hexo is a Node.js-powered blog framework)'
		],
		date: '2018/10',
		github: 'https://github.com/snowme34/hexo-theme-symphony',
		weight: -1,
		tags: [
	   'Node.js', 'JavaScript', 'CSS', 'Blog'
		]
	},
  {
		id: 'cuddly-datastructures-and-algorithms',
		name: 'Cuddly Data Structures and Algorithms',
		desc: [
			'Some naive and cuddly data structures and algorithms.',
			'Write for fun only.'
		],
		date: '2018/10-present', // 2345-present
		github: 'https://github.com/snowme34/cuddly-datastructures-and-algorithms',
		weight: -3,
		tags: [
	   'Data Structures', 'Algorithms', 'C++'
		]
	},
  {
		id: 'cuddly-programs',
		name: 'Cuddly Programs',
		desc: [
			'Some one-file program written for either practice or batching or fun',
			'Majority of code written when first studying programming'
		],
		date: '2017/12-present', // 2345-present
		github: 'https://github.com/snowme34/cuddly-programs',
		weight: -3,
		tags: [
	   'C++', 'Python', 'Windows Batch', 'Bash'
		]
	},
  {
		id: 'a-hackathon-2019',
		name: 'A Hackathon 2019',
		desc: [
			'A hackathon project (unfinished), in Python Flask and ReactJS.',
			'A platform for pairing up (recommendation system) users based on skills',
			'Led 4-people team for an "all-inclusive" hackathon, with 3 first-time participants'
		],
		date: '2019/04',
		weight: -2,
		tags: [
	   'CS For All', 'Hackathon', 'Python', 'Flask', 'React', 'All-inclusive CS', 'Database Design'
		]
	},
  {
		id: 'everyday-writing',
		name: 'Everyday Writing',
		desc: [
			'Learning coding'
		],
		date: '2017-present',
		github: 'https://github.com/snowme34/everyday-writing',
		weight: -3,
		tags: [
	   'Beginner', 'C++', 'Learning', 'Java', 'Golang', 'Python', 'Naive', 'Practice'
		]
	},
  {
		id: 'coursera-machine-learning-hw',
		name: 'Coursera Machine Learning HW',
		desc: [
			'The MATLAB code for Coursera ml course hw'
		],
		date: '2016',
		github: 'https://github.com/snowme34/coursera-machine-learning-hw',
		weight: 0,
		tags: [
	   'Machine Learning', 'Coursera', 'MATLAB'
		]
	},
  {
		id: 'cppstd-rbtree-root-header-relationship',
		name: 'Cppstd RBtree Root Header Relationship',
		desc: [
			'A short proof that in the red black tree in gnu g++ std, the header is the parent of root, and the root is the parent of header'
		],
		date: '2019/04',
		github: 'https://github.com/snowme34/cppstd-rbtree-root-header-relationship',
		weight: -1,
		tags: [
	   'C++STD', 'C++', 'Learning', 'Fun', 'GNU', 'Algorithm', 'Data Structure'
		]
	},
  {
		id: 'ultimate-fibonacci-number-calculator',
		name: 'Ultimate Fibonacci Number Calculator',
		desc: [
			'Use polynomial, dynamic programming and big-number-addition strategies to calculate nth Fibonacci number',
			'May be improved using matrix mul'
		],
		date: '2018/10',
		github: 'https://github.com/snowme34/ultimate-fibonacci-number-calculator',
		weight: -1,
		tags: [
	   'C++', 'Algorithm'
		]
	},
  {
		id: 'blackjack-cli',
		name: 'blackjack cli',
		desc: [
			'A single-player simplified Blackjack game running in terminal'
		],
		date: '2018/10',
		github: 'https://github.com/snowme34/blackjack-cli',
		weight: 0,
		tags: [
	   'C++', 'OOP', 'Terminal', 'Game'
		]
	},
  {
		id: 'ownticket',
		name: 'OwnTicket',
		desc: [
			'A ticket system based on face recognition and blockchain technology (White-paper only)',
			'Presented in Beijing'
		],
		date: '2018/04',
		github: 'https://github.com/snowme34/Ownticket',
		weight: -10,
		tags: [
	   'Blockchain', 'OpenCV', 'White Paper', 'Tensorflow', 'Facial Recognition'
		]
	},
  {
		id: 'the-art-of-command-line',
		name: 'The Art of Command Line',
		desc: [
			'Translation for this 60k+ starred repo',
			'First contribution to open source'
		],
		date: '2017/11',
		github: 'https://github.com/jlevy/the-art-of-command-line',
		weight: -2,
		websites: ['https://github.com/jlevy/the-art-of-command-line/commit/29f0cbcb48fed8001d8c928e640d0897766277c7'],
		tags: [
	   'CLI', 'Open Source', 'Community', 'Translation'
		]
	}
];


/*
 * Sort and return
 */
function compareDates(a, b) {
	// current year
	const year = new Date().getFullYear();
	// base year - when I started development
	const baseYear = 2013 - 1;

	// date value generator
	const fd = (date) => {
		if (date.indexOf('present') > -1)
			return year - baseYear + 1; // largest, so +1
		else {
			for (let yr = year; yr > baseYear; yr--) {
				if (date.indexOf(yr.toString().substring(3)) > -1) {
					return yr - baseYear;
				}
			}
		}
	};

	let wta = fd(a.date) + (a.weight || 0);
	let wtb = fd(b.date) + (b.weight || 0);

	if (wta < wtb) {
		return 1;
	} else if (wta > wtb) {
		return -1;
	} else {
		// a comes before b in original array
		// let comp = (a.weight || 5) <= (b.weight || 5);
		return -1; // (comp) ? 1 : -1;
	}
}

projects.sort(compareDates);

export default projects;
