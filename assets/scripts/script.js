const recetas = [
    {
      nombre: "Laksa Sarawak al estilo de Kuching",
      ingredientes: [
        "4 chalotas",
        "2 dientes de ajo",
        "140 g de jengibre",
        "4 guindillas frescas",
        "1 cucharadita de guindilla seca",
        "2 tallos de hierba limón (lemon grass o citronela)",
        "40 g de anacardos",
        "40 g de cacahuetes",
        "30 g de sésamo",
        "10 g de semillas de cilantro",
        "1 cucharada de semillas de comino",
        "3 anises estrellados",
        "3 clavos",
        "1/2 cucharadita de nuez moscada",
        "4 vainas de cardamomo",
        "2 cucharadas de azúcar integral",
        "1 cucharadita de sal",
        "90 g de pulpa de tamarindo",
        "100 ml de agua",
        "200 ml de aceite vegetal"
      ],
      preparacion: "Calentar una sartén al fuego y tostar las especias: comino, cilantro, anises, clavos, cardamomo (abrir primero las vainas y sacar las semillas) y sésamo, con cuidado que no se quemen. Retirar y reservar. Tostar también los cacahuetes y los anacardos. Reservar. Limpiar y retirar la piel de la pechuga de pollo. Llevar el caldo a ebullición e introducir en él la pechuga. Dejar cocer a fuego medio durante unos 10 minutos. Apagar el fuego, tapar la cazuela y dejar reposar 15 minutos más. Retirar la pechuga, deshuesar, deshacerla en hebras y reservar. Pelar las gambas y dejar las colas enteras. Reservarlas junto a cabezas y cáscaras."
    },
    {
      nombre: "Tartiflette",
      ingredientes: [
        "Dos patatas medianas",
        "Una cebolla",
        "100 g de panceta ahumada",
        "Una copa de vino blanco (yo no tenía y usé cerveza)",
        "250 g de queso Reblonchón (yo no encontré y usé un Camembert de calidad)",
        "100 ml de nata líquida (yo usé leche evaporada)",
        "Pimienta negra"
      ],
      preparacion: "Lo primero que vamos a hacer es lavar muy bien las patatas y cocerlas con piel hasta que estén blandas. Mientras se hacen las patatas, vamos a cortar la panceta en cuadraditos y saltearlos en una sartén hasta que estén doraditos, se reservan y en la misma grasa que ha quedado (si vemos que tiene mucha, retiramos una parte) echamos la cebolla cortada en medias rodajas finas, la dejamos a fuego lento hasta que se quede blandita, entonces echamos el vino blanco y lo dejamos evaporar casi en su totalidad. Una vez que las patatas estén listas, dejamos enfriar lo justo para que no nos quememos y les quitamos la piel y cortamos en trozos. Mezclamos la cebolla con la panceta y las patatas y les damos unas vueltas (con suavidad, no queremos que se nos deshagan las patatas) , para que se mezclen los sabores,salpimentamos ligeramente y guardamos . Mientras, ponemos el horno a calentar a unos 190-200º. Ya sólo nos queda prepara la mezcla, en un recipiente apto para horno (yo usé uno de barro). Ponemos una capa de patatas, cebolla y panceta y encima unas lonchas de queso, otra capa de la mezcla de patatas y regamos con la nata o leche evaporada, y terminamos con más lonchas de queso. Metemos en el horno y lo dejamos hasta que esté dorado y burbujeante."
    }
  ];
  
  function buscar() {
    const name = document.getElementById('nombre').value.toLowerCase();
    let nombre;
    let ingredientes;
    let preparacion;
  
    for (let i = 0; i < recetas.length; i++) {
      if (recetas[i].nombre.toLowerCase() === name) {
        nombre = recetas[i].nombre;
        ingredientes = recetas[i].ingredientes;
        preparacion = recetas[i].preparacion;
        break;
      }
    }
  
    if (nombre && ingredientes && preparacion) {
      document.getElementById('title').textContent = nombre;
      const ingredientesList = document.getElementById('canciones'); 
      ingredientesList.innerHTML = '';
      ingredientes.forEach(ingrediente => {
        const li = document.createElement('li');
        li.textContent = ingrediente;
        ingredientesList.appendChild(li);
      });
      document.getElementById('año').textContent = 'Preparación: ' + preparacion;
    } else {
      document.getElementById('title').textContent = 'Receta no encontrada';
      document.getElementById('canciones').innerHTML = '';
      document.getElementById('año').textContent = '';
    }
  }
  