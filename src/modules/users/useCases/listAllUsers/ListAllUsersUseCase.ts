import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);
    if (user.admin === false) {
      throw new Error("Your are not a admin!");
    }
    if (!user) {
      throw new Error("user dos not exists");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
