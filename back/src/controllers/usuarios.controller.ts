import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express";
// import jwt, { Jwt } from "jsonwebtoken";
// import { sign, verify } from "jsonwebtoken";
// import bcrypt from "bcryptjs";
import { Usuario } from "../database/entity/Usuario";
const keys = require("../config/keys");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Usuarios = AppDataSource.getRepository(Usuario);

class UsuariosController {
  constructor() {}

  getAll(_req: Request, res: Response, _next: NextFunction) {
    console.log("getAll");

    Usuarios.find()
      .then((resp) => {
        console.log(resp);
        if (resp.length <= 0) {
          return res.status(204).json(resp);
        }
        return res.status(200).json(resp);
      })
      .catch((err) => {
        return res.status(401).json(err);
      });
  }

  async get(req: Request, res: Response, _next: NextFunction) {
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

  async nuevo(req: Request, res: Response, _next: NextFunction) {
    console.log(req.body);
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password);
    }

    // const usuario: Usuario = new Usuario(req.body);
    const usuario: Usuario = new Usuario();
    // usuario.password = bcrypt.hashSync(usuario.password);
    usuario.firstName = req.body.nombre;
    usuario.lastName = req.body.apellido;
    usuario.email = req.body.email;

    try {
      await Usuarios.save(usuario);

      if (!usuario) {
        return res.status(204).json(usuario);
      }
      return res.status(201).json(usuario);
    } catch (err) {
      if (err === 11000) {
        return res.status(409).json({ mensaje: "El usuario ya existe" });
      }
      return res.status(401).json(err);
    }
  }

  async editar(req: Request, res: Response, _next: NextFunction) {
    try {
      const { id } = req.params;
      // const usuario = {
      //     firstName: req.body.nombre,
      //     lastName: req.body.apellido,
      //     email: req.body.email
      // };

      const usuario = await Usuarios.findOneBy({ id: parseInt(id) });

      if (!usuario) {
        return res.status(204).json(usuario);
      }
      usuario.firstName = req.body.nombre;
      usuario.lastName = req.body.apellido;
      usuario.email = req.body.email;
      await Usuarios.save(usuario);
      return res.status(200).json(usuario);
    } catch (err) {
      return res.status(401).json(err);
    }
  }

  async eliminar(req: Request, res: Response, _next: NextFunction) {
    try {
      let id = parseInt(req.params.id);
      const usuario = await Usuarios.findOneBy({ id: id });

      if (!usuario) {
        return res.status(204).json(usuario);
      }

      await Usuarios.remove(usuario);
      return res.status(200).json(usuario);
    } catch (err) {
      return res.status(401).json(err);
    }
  }

  async login(req: Request, res: Response, _next: NextFunction) {
    try {
      const user = await Usuarios.findOneBy({ email: req.body.email });

      if (!user) {
        return res.status(409).json({ mensaje: "Usuario inexistente" });
      } else {
        const password = bcrypt.compareSync(req.body.email, user.password);
        if (!password) {
          return res.status(409).json({ mensaje: "Contraseña incorrecta" });
        }
        const expire = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id }, keys.JWT_SECRET, {
          expiresIn: expire,
        });

        const dataUsuario = {
          nombre: user.firstName,
          email: user.email,
          accessToken: accessToken,
          expiresIn: expire,
        };
        return res.status(200).json(dataUsuario);
      }
    } catch (err) {
      return res.status(401).json(err);
    }
  }
}

export const usuariosController = new UsuariosController();
