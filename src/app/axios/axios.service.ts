
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateAxiosDto } from './dto/create.axios.dto';
import { Axios } from './entities/axios.entity';

@Injectable()
export class AxiosService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(Axios)
    private axiosRepository: Repository<Axios>
  ) { }

  async findAll() {
    let resposta = await this.httpService.get('http://jsonplaceholder.typicode.com/todos').toPromise();
    try {
      return resposta.data
    } catch (err) {
      console.log(err)
    }
  }

  async salvaExemplo() {
    let resposta = await this.httpService.get('http://jsonplaceholder.typicode.com/todos').toPromise();
    try {

      const axiosExemplo = new Axios()

      
      axiosExemplo.userId = resposta[0].userId;
      axiosExemplo.title = resposta[0].title;
      axiosExemplo.completed = resposta[0].completed;

      return this.axiosRepository.save(axiosExemplo)
    } catch (err) {
      console.log(err)
    }
  }

  //   function getCodigo() {
  //     axios.post('http://jsonplaceholder.typicode.com/posts', { email: "meuemail@email.com", senha: "12345" })
  //   }

  //   dados = getCodigo();

  //   dados.then(function (resposta: any) {
  //     console.log(resposta.data)

  //     return resposta.data

  //   }).catch(function (error) {
  //     if (error) {
  //       console.log(error);
  //     }
  //   })
  // }

  // async postApi() {
  //   const axios = require('axios');

  //   axios.post('http://jsonplaceholder.typicode.com/posts').then(function (resposta) {
  //     //console.log(resposta.data);
  //     this.axiosRepository.create(resposta.data)
  //     return this.axiosRepository.save(resposta.data)
  //   })
  // }






} 
