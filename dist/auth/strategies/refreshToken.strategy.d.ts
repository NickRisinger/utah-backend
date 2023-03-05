import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
declare const RefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    readonly configService: ConfigService;
    constructor(configService: ConfigService);
    validate(req: Request, payload: any): any;
}
export {};
