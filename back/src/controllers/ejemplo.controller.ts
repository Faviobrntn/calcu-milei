// import Monedas, {Moneda} from '../models/Ejemplo';
import { AppDataSource } from "../data-source";
import { Usuario } from "../database/entity/Usuario";
import { Request, Response, NextFunction } from "express";

const Usuarios = AppDataSource.getRepository(Usuario);

class MonedasController {
  constructor() {}

  getAll(req: Request, res: Response, next: NextFunction) {
    Usuarios.find()
      .then((resp) => {
        if (resp.length <= 0) {
          return res.status(204).json(resp);
        }

        return res.status(200).json(resp);
      })
      .catch((err) => {
        return res.status(401).json(err);
      });
  }

  listado(req: Request, res: Response, next: NextFunction) {
    Usuarios.find({})
      .then((resp) => {
        if (resp.length <= 0) {
          return res.status(204).json(resp);
        }

        return res.status(200).json(resp);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }

  async get(req: Request, res: Response, next: NextFunction) {
    let id: number = parseInt(req.params.id);

    try {
      const user = await Usuarios.findOneBy({ id: id });
      if (!user) {
        return res.status(204).json(user);
      }
      return res.status(200).json(user);
    } catch (err) {
      return res.status(401).json(err);
    }
  }

  nuevo(req: Request, res: Response, next: NextFunction) {
    // const entidad: Usuario = new Usuario(req.body);
    // entidad
    //   .save()
    //   .then((resp) => {
    //     if (!resp) {
    //       return res.status(204).json(resp);
    //     }
    //     return res.status(201).json(resp);
    //   })
    //   .catch((err) => {
    //     return res.status(401).json(err);
    //   });
  }

  async eliminar(req: Request, res: Response, next: NextFunction) {
    try {
      let id = parseInt(req.params.id);
      const usuario = await Usuarios.findOneBy({ id: id });

      await Usuarios.remove(usuario);

      if (!usuario) {
        return res.status(204).json(usuario);
      }
      return res.status(200).json(usuario);
    } catch (err) {
      return res.status(401).json(err);
    }
  }
}

export const ejemplosController = new MonedasController();
