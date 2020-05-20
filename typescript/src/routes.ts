import { Request, Response} from 'express';

import createUser from './services/CreateUser';

export function home(request: Request, response: Response) {
  const user = createUser({
    name: 'José Rogério',
    email: 'email@mail.com',
    password: 'pass',
    techs: ['Node.js', 'ReactJS', 'React Native'],
  });

  return response.json({ message: 'Hello World', user });
}