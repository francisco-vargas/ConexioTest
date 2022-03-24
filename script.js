const url = 'https://61435a41c5b553001717cf2f.mockapi.io/api/challenge/jobs';
let message01 = "You have selected: ";
let message02 = "From this location: ";
let message03 = "With the Id: ";

const muestraInfo01 = () => {
  fetch(url)
    .then(infoObtenida => infoObtenida.json())
    .then(carrera => {
      alert(`${message01}  ${carrera[0].job}, ${message02}  ${carrera[0].location}, ${message03} ${carrera[0].id}`);
    })
}

const muestraInfo02 = () => {
  fetch(url)
    .then(infoObtenida => infoObtenida.json())
    .then(carrera => {
      alert(`${message01} ${carrera[1].job}, ${message02}  ${carrera[1].location}, ${message03} ${carrera[1].id}`);
    })
}

const muestraInfo03 = () => {
  fetch(url)
    .then(infoObtenida => infoObtenida.json())
    .then(carrera => {
      alert(`${message01} ${carrera[2].job}, ${message02}  ${carrera[2].location}, ${message03} ${carrera[2].id}`);
    })
}

const muestraInfo04 = () => {
  fetch(url)
    .then(infoObtenida => infoObtenida.json())
    .then(carrera => {
      alert(`${message01} ${carrera[3].job}, ${message02}  ${carrera[3].location}, ${message03} ${carrera[3].id}`);
    })
}

const muestraInfo05 = () => {
  fetch(url)
    .then(infoObtenida => infoObtenida.json())
    .then(carrera => {
      alert(`${message01} ${carrera[4].job}, ${message02}  ${carrera[4].location}, ${message03} ${carrera[4].id}`);
    })
}

const muestraInfo06 = () => {
  fetch(url)
    .then(infoObtenida => infoObtenida.json())
    .then(carrera => {
      alert(`${message01} ${carrera[5].job}, ${message02}  ${carrera[5].location}, ${message03} ${carrera[5].id}`);
    })
}

const muestraInfo07 = () => {
  fetch(url)
    .then(infoObtenida => infoObtenida.json())
    .then(carrera => {
      alert(`${message01} ${carrera[6].job}, ${message02}  ${carrera[6].location}, ${message03} ${carrera[6].id}`);
    })
}

const muestraInfo08 = () => {
  fetch(url)
    .then(infoObtenida => infoObtenida.json())
    .then(carrera => {
      alert(`${message01} ${carrera[7].job}, ${message02}  ${carrera[7].location}, ${message03} ${carrera[7].id}`);
    })
}

const muestraInfo09 = () => {
  fetch(url)
    .then(infoObtenida => infoObtenida.json())
    .then(carrera => {
      alert(`${message01} ${carrera[8].job}, ${message02}  ${carrera[8].location}, ${message03} ${carrera[8].id}`);
    })
}

const muestraInfo10 = () => {
  fetch(url)
    .then(infoObtenida => infoObtenida.json())
    .then(carrera => {
      alert(`${message01} ${carrera[9].job}, ${message02}  ${carrera[9].location}, ${message03} ${carrera[9].id}`);
    })
}

const muestraInfo11 = () => {
  fetch(url)
    .then(infoObtenida => infoObtenida.json())
    .then(carrera => {
      alert(`${message01} ${carrera[10].job}, ${message02}  ${carrera[10].location}, ${message03} ${carrera[10].id}`);
    })
}

const muestraInfo12 = () => {
  fetch(url)
    .then(infoObtenida => infoObtenida.json())
    .then(carrera => {
      alert(`${message01} ${carrera[11].job}, ${message02}  ${carrera[11].location}, ${message03} ${carrera[11].id}`);
    })
}