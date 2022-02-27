import { Request, Response, NextFunction } from 'express';

import { get, controller, bodyValidator, post } from './decorators';

@controller('/auth')
class LoginController {
  //
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
  }

  @post('/login')
  @bodyValidator('email', 'passwprd')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email && password && email === 'hi@hi.com' && password === 'pw') {
      // mark this person as logged input
      req.session = { loggedIn: true };
      // redirect tehm to the root
      res.redirect('/');
    } else {
      res.status(422).send('You need to provide an email');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
