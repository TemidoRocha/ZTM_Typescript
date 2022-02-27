import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { NextFunction, RequestHandler, Request, Response } from 'express';

function bodyValidators(keys: string): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`MIssing property ${key}`);
        return;
      }
    }

    next();
  };
}

//controller factory decorator
//takes in a prefix of the route, can be "auth" "login" etc
export function controller(routePrefix: string) {
  //takes in a target
  return function (target: Function) {
    //makes or get the instance of the router
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      //gets the routeHandler to pass into the router at the bottom
      const routeHandler = target.prototype[key];
      //gets the path from the metadata to pass into the router
      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
      //gets the method from the metadata
      const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
      //makes an array of middlewares to get them all together
      const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
      //gathers the bodyProps that are required for validation
      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || [];

      //runs the bodyValidator with the required props
      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
      }
    }
  };
}
