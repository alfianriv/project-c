import { generateRandomString } from '@/../apps/dashboard/commons/generate.helper';
import { Injectable } from '@nestjs/common';
import { CreateAccessTokenDto } from './dto/create-access-token.dto';
import { UpdateAccessTokenDto } from './dto/update-access-token.dto';
import { AccessTokenRepository } from './repository/access-token.repository';
import * as moment from 'moment';

@Injectable()
export class AccessTokenService {
  constructor(private readonly repository: AccessTokenRepository) {}

  async create(data: CreateAccessTokenDto) {
    const item: any = { ...data };
    item.access_token = await this.generateToken('access_token');
    item.refresh_token = await this.generateToken('refresh_token');
    item.expired_at = moment().add(
      Number(process.env.EXPIRED_SECOND),
      'seconds',
    );
    const saved = await this.repository.save(item);
    return { data: saved };
  }

  findAll() {
    return `This action returns all accessToken`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accessToken`;
  }

  update(id: number, updateAccessTokenDto: UpdateAccessTokenDto) {
    return `This action updates a #${id} accessToken`;
  }

  remove(id: number) {
    return `This action removes a #${id} accessToken`;
  }

  async generateToken(type: string) {
    const token = await generateRandomString(80);
    const found = this.repository.findOne({ where: { [type]: token } });
    if (found) return this.generateToken(type);
    return token;
  }
}
