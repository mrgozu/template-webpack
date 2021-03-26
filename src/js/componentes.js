import '../css/componentes.css';
import '../styles.css';
export const saludar = (nombre)=>{
    console.log('creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, yo soy ${nombre}`;
    document.body.append(h1);
}