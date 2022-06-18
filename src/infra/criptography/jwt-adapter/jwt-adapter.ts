import jwt from 'jsonwebtoken'
import { Encrypter } from '../../../data/protocols/criptography/encrypter'

export class JwtAdapter implements Encrypter {
  constructor (private readonly secret: string) {}

  async encrypt (value: string): Promise<string | null> {
    const accessToken = jwt.sign({ id: value }, this.secret)
    return accessToken
  }
}
