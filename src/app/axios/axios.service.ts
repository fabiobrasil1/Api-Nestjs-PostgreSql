
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateProdutoDto } from '../produto/dto/create-produto.dto';
import { Axios } from './entities/axios.entity';

@Injectable()
export class AxiosService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(Axios)
    private axiosRepository: Repository<Axios>
  ) { }
  findAll(): Observable<AxiosResponse<Axios[]>> {
    return this.httpService.get('http://jsonplaceholder.typicode.com/todos');
  }


  // async findAll() {
  //   return await this.http.get('https://swapi.dev/api/planets')
  // }
  // async postApiParams() {
  //   var axios = require('axios');
  //   var dados;

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

  // async getApi() {
  //   const axios = require('axios')
  //   axios.get('http://jsonplaceholder.typicode.com/todos').then(function (resposta) {
  //     console.log(resposta.data);
  //     return resposta.data;
  //   }).catch(function (error) {
  //     if (error) {
  //       console.log(error);
  //     }
  //   })
  // }

  // getAllAxios(): Observable<AxiosResponse<Axios[]>> {
  //   // let axios = [];
  //   // const url = 'http://jsonplaceholder.typicode.com/todos';
  //   const resposta = this.httpService.get('http://jsonplaceholder.typicode.com/todos');

  //   return resposta;
  // }

  // async findAll(){
  //   return await this.http.get('http://jsonplaceholder.typicode.com/todos');
  // }
} 
