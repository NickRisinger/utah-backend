import { User } from '../../users/entities/user.entity';
export declare class Organization {
    id: string;
    name: string;
    owner: User;
    users: User[];
    createdAt: Date;
    updatedAt: Date;
}
