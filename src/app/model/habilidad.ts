export class Habilidad {

  id?: number;
  nombre: string;
  porcentaje: number;
  descripcion: string;

  constructor(nombre: string, porcentaje: number, descripcion: string) {
    this.nombre = nombre;
    this.porcentaje = porcentaje;
    this.descripcion = descripcion;
   }
}
