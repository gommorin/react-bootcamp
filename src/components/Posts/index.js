import React, { Component } from "react";

// CSS
import "./Posts.css";

const POSTS_JSON = [
    {
      title: 'Ejercicio React',
      subheading: 'Prueba 1',
      author: 'Luis Gomez',
      category: 'ejercicios',
      date: '05/11/2020',
    },
    {
      title: 'Clase React',
      subheading: 'Prueba 2',
      author: 'David Moranchel',
      category: 'clases',
      date: '04/11/2020',
    },
    {
      title: 'Asesoria React',
      subheading: 'Prueba 3',
      author: 'Mauro Ochoa',
      category: 'asesorias',
      date: '01/11/2020',
    },
    {
      title: 'Tutoriales',
      subheading: 'React',
      author: 'Israel Salinas',
      category: 'tutoriales',
      date: '28/08/2020',
    }
]

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [] // ---------> es un array de objetos porque voy a manejar un JSON
    }
  }

  renderPosts() {
    return this.state.posts.map(({ title, subheading, author, category, date }) => {
      return (
        <li>{title},{subheading},{author},{category},{date}</li>
      );
    });
  }

  render() {
    console.log("render", this.state.posts)
    return (
      <div>
        <ul>
          {this.renderPosts}
        </ul>
      </div>
    )
  }
}

export default Posts;

/*
1. ABSTRAER el objeto POST de un blog
2. Crear un JSON con varios objetos POST
3. Crear un componente que renderize esos POST's a modo de Cards (como un blog)
4. Añadir un formulario a ese componente para poder añadir POST
Happy Hacking!
*/