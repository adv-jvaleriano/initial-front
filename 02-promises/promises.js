function obtenerDatosDeUsuario() {
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log("Datos de usuario obtenidos");
          resolve({ id: 1, nombre: 'Juan' });
      }, 1000);
  });
}

function obtenerPostsDeUsuario(idUsuario) {
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log(`Posts del usuario ${idUsuario} obtenidos`);
          resolve([{ id: 101, titulo: 'Post 1' }, { id: 102, titulo: 'Post 2' }]);
      }, 2000);
  });
}

function obtenerComentariosDelPost(idPost) {
  return new Promise((resolve) => {
      setTimeout(() => {
          console.log(`Comentarios del post ${idPost} obtenidos`);
          resolve([{ id: 201, contenido: 'Comentario 1' }, { id: 202, contenido: 'Comentario 2' }]);
      }, 3000);
  });
}

obtenerDatosDeUsuario()
  .then((usuario) => obtenerPostsDeUsuario(usuario.id))
  .then((posts) => obtenerComentariosDelPost(posts[0].id))
  .then((comentarios) => {
      console.log("Comentarios: ", comentarios);
  });
