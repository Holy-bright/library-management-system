import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import passportJwt from "passport-jwt";

const { ExtractJwt, Strategy } = passportJwt;

export interface JwtPayload {
  sub: number;
  role: string;
}

export interface AuthUser {
  userId: number;
  role: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET as string,
    });
  }

  validate(payload: JwtPayload): AuthUser {
    return { userId: payload.sub, role: payload.role };
  }
}
