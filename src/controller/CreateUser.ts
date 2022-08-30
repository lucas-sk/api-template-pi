import { Request, Response } from 'express'

export class CreateUser{
  async handle(request: Request, response: Response) {

    const [
      name,
      email,
      password
    ] = request.body


    return response.json();
  }
}

