const boton = document.getElementById("btnCambiarFondo");

    function colorAleatorio() {
      // Generar un color hexadecimal aleatorio
      const letras = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    boton.addEventListener("click", () => {
      document.body.style.backgroundColor = colorAleatorio();
    });