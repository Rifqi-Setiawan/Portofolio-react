import Projects from "../components/Projects";
import Invo from "../assets/Invo.png";
import Suwit from "../assets/suwit.png";
import Ecommerce from "../assets/ecommerce_flutter.png";
import SignUp from "../assets/SignUp_Flutter.png";
import ToDoList from "../assets/to do list_flutter.png";

export const TEXT_ABOUT: string =
  "Halo! Saya Muhammad Rifqi Setiawan, seorang mahasiswa jurusan Informatika di Telkom University. Saya memiliki antusiasme yang besar terhadap teknologi dan saat ini saya sedang mendalami dunia pengembangan front-end developer. Saya menghabiskan waktu saya untuk mempelajari berbagai teknologi dan framework terbaru. saya mempunyai basic HTML, CSS, golang, javascript dan flutter. Saya juga memiliki kemampuan menggunakan salah satu framework CSS yaitu tailwind CSS. Untuk bidang organisasi, saya mengikuti Al-Fath, GDSC Telkom University dan ASE Laboratory.";

export const HERO_CONTENT: string =
  "Halo! Saya Muhammad Rifqi Setiawan, seorang mahasiswa jurusan Informatika di Telkom University. Saya memiliki antusiasme yang besar terhadap teknologi dan saat ini saya sedang mendalami dunia pengembangan front-end developer. Saya menghabiskan waktu saya untuk mempelajari berbagai teknologi dan framework terbaru.";

type EXPERIENCES = {
  year: string;
  role: string;
  company: string;
  description: string;
  teknologi: string[];
};

export const EXPERIENCES: EXPERIENCES[] = [
  {
    year: "Juni 2024 - Juli 2024",
    role: "Internship Front-end developer",
    company: "ASE Laboratory Telkom University",
    description:
      "Membuat UI website inventory menggunakan Javascript, React.js, dan CSS nya menggunakan tailwind.css . Menggunakan salah satu library yang tersedia di javascript yaitu axios untuk mengambil data di railway.",
    teknologi: ["React", "Javascript", "Tailwind CSS"],
  },
];

type Projects = {
  title: string,
  image: string,
  description: string,
  teknologi: string[],
}

export const PROJECTS: Projects[] = [
{
  title: "Inventory Web",
  image: Invo,
  description: "Invo merupakan website Invetory yang saya buat saat internship di ASE laboratory.",
  teknologi: ["React.js", "Javascript", "Tailwind.css"]
},
{
  title: "Suwit Web",
  image: Suwit,
  description: "Project ini merupakan project pertama saya saat belajar html, css dan javascript. Ini merupakan project pertama saya yang memiliki sedikit algoritma di dalamnya",
  teknologi: ["HTML", "CSS", "Javascript"]
},
{
  title: "SignUp & Login page",
  image: SignUp,
  description: "Signup Page ini merupakan project pertama saya saat belajar flutter.",
  teknologi: ["Flutter", "Dart"]
},
{
  title: "To do list",
  image: ToDoList,
  description: "Project ini merupakan project saat saya belajar flutter. Pada project ini, saya belajar OOP untuk membuat algoritma To do list di flutter.",
  teknologi: ["Fluter", "Dart"]
},
{
  title: "Ecommerce",
  image: Ecommerce,
  description: "Project ini merupakan project saat saya belajar flutter. Pada project ini, saya belajar OOP untuk membuat fitur add to cart.",
  teknologi: ["React.js", "Javascript", "Tailwind.css"]
},
]
