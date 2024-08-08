function obtenerDatosDeUsuario(callback) {
  setTimeout(() => {
      console.log("Datos de usuario obtenidos");
      callback({ id: 1, nombre: 'Juan' });
  }, 1000);
}

function obtenerPostsDeUsuario(idUsuario, callback) {
  setTimeout(() => {
      console.log(`Posts del usuario ${idUsuario} obtenidos`);
      callback([{ id: 101, titulo: 'Post 1' }, { id: 102, titulo: 'Post 2' }]);
  }, 2000);
}

function obtenerComentariosDelPost(idPost, callback) {
  setTimeout(() => {
      console.log(`Comentarios del post ${idPost} obtenidos`);
      callback([{ id: 201, contenido: 'Comentario 1' }, { id: 202, contenido: 'Comentario 2' }]);
  }, 3000);
}

// Callback hell 😔🔫
obtenerDatosDeUsuario((usuario) => {
  obtenerPostsDeUsuario(usuario.id, (posts) => {
      obtenerComentariosDelPost(posts[0].id, (comentarios) => {
          console.log("Comentarios: ", comentarios);
      });
  });
});
