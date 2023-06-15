/**
 * Trabajar con una base de datos comienza con la creación de tablas.
 * ¿Cómo le dices a TypeORM que cree una tabla de base de datos?
 * La respuesta es - a través de los modelos. Sus modelos en su aplicación son sus tablas de base de datos.
 */

export interface IUsuario {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
