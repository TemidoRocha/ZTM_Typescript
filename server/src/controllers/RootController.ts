import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not permitted');
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
      <div>You are logged in</div>
      <a href="/logout">Logout</a>
    `);
    } else {
      res.send(`
      <div>You are logged not logged in</div>
      <a href="/auth/login">Login</a>
    `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('welcome to protcted route, logged in user');
  }
}
