import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProdutoDto } from 'src/app/produto/dto/create-produto.dto';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UsersEntity } from './user.entity';




@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>,
    ) { }

    async findAll() {
        await this.usersRepository.find({
            select: ['id', 'firstName', 'lastName', 'email'],
        })
    }
    async findOneOrFail(
        conditions: FindConditions<UsersEntity>,
        options?: FindOneOptions<UsersEntity>,
    ) {
        try {
            return await this.usersRepository.findOneOrFail(conditions, options)

        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }


    async store(data: CreateUserDto) {
        const user = await this.usersRepository.create(data)
        return await this.usersRepository.save(user);
    }

    async update(id: string, data: UpdateUserDto) {
        const user = await this.findOneOrFail({id});
        this.usersRepository.merge(user, data)
        return await this.usersRepository.save(user);
    }

    async destroy(id: string) { 
        await this.usersRepository.findOneOrFail({ id })
        this.usersRepository.softDelete({ id });

    }
}
