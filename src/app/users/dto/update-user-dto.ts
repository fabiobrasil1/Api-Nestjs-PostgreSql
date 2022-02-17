import { IsEmail, IsNotEmpty, isNotEmpty, Matches } from 'class-validator'


export class UpdateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;
}