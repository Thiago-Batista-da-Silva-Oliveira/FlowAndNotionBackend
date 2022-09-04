import { sign } from 'jsonwebtoken';
import { injectable } from 'tsyringe';

@injectable()
class GenerateTokenProvider {
  async execute(user: { companyId?: string; id?: string }) {
    const token = sign(({}), 'dsa59d9as9d5as5', {
      subject: user.id,
      expiresIn: '1d',
    });

    return token;
  }
}

export { GenerateTokenProvider };
