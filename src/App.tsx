import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/144913136?v=4",
      name: "Davy Serra",
      role: "Web Developer"
    },
    content: [
      {
        text: "Fala galeraa 👋"
      },
      {
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        text: "👉",
        link: "jane.design/doctorcare"
      },
      {
        link: "#novoprojeto"
      },
      {
        link: " #rocketseat"
      },
      {
        link: " #nlw"
      }
    ],
    publishedAt: new Date("2024-11-13 22:44:10")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/123456789?v=4",
      name: "Jane Doe",
      role: "Software Engineer"
    },
    content: [
      {
        text: "Olá pessoal 👋"
      },
      {
        text: "Acabei de concluir um novo projeto incrível. Foi um desafio, mas valeu a pena. O nome do projeto é HealthCare 🚀"
      },
      {
        text: "👉",
        link: "jane.design/healthcare"
      },
      {
        link: "#newproject "
      },
      {
        link: " #healthcare "
      },
      {
        link: " #tech"
      }
    ],
    publishedAt: new Date("2024-12-01 21:06:00")
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/987654321?v=4",
      name: "John Smith",
      role: "Product Manager"
    },
    content: [
      {
        text: "Olá a todos 👋"
      },
      {
        text: "Estou animado para compartilhar nosso novo produto. Foi um trabalho árduo, mas conseguimos. O nome do produto é SmartHome 🏠"
      },
      {
        text: "👉",
        link: "john.design/smarthome"
      },
      {
        link: "#newproduct "
      },
      {
        link: "#smarthome "
      },
      {
        link: "#innovation"
      }
    ],
    publishedAt: new Date("2024-11-15 18:30:00")
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
