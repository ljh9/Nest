import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(authCredentialsdto: AuthCredentialsDto): Promise<void> {
        const { username, password } = authCredentialsdto;
        const user = this.create({ username, password });
        await this.save(user);
    }
}