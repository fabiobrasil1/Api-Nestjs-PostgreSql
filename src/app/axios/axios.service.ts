import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios, { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Axios } from './entities/axios.entity';

@Injectable()
export class AxiosService {
  constructor(
    private readonly httpService: HttpService,
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

  async salvaResposta() {
    let resposta = await this.httpService.get('http://jsonplaceholder.typicode.com/todos').toPromise();

    for (let i in resposta.data) {
      try {
        const axiosExemplo = new Axios()

        axiosExemplo.userId = resposta.data[i].userId;
        axiosExemplo.title = resposta.data[i].title;
        axiosExemplo.completed = resposta.data[i].completed;

        this.axiosRepository.save(axiosExemplo)
      } catch (err) {
        console.log(err)
      }
    }
    return resposta.data
  }

  axiosParams() {
    async function getCodigo() {
      await axios.post('http://jsonplaceholder.typicode.com/posts', { email: "meuemail@email.com", senha: "12345" })
    }

    let dados = getCodigo();

    dados.then(function (resposta: any) {
      console.log(resposta.data)

      return resposta.data

    }).catch(function (error) {
      if (error) {
        console.log(error);
      }
    })
  }
} 
