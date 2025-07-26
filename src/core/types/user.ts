import { Users } from "@prisma/client";

export type TAuthUser = Omit<Users, 'password'>;
