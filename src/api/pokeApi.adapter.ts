import axios from "axios";



export  interface HttpAdapter {
  get<T>(url:string): Promise<T>;
  post(url:string, data: any): Promise<any>;
  patch(url:string, data: any): Promise<any>;
  delete(url:string): Promise<void>;
}

export class PokeApiFetchAdapter implements HttpAdapter {

  async get<T>( url:string): Promise<T>{
    const resp = await fetch(url)
    const data: T = await resp.json()
    return data; 
  }

   async post<T>(url:string, data: any): Promise<T>  {
    const resp = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await resp.json(); 
  }

   async patch<T>(url:string, data: any): Promise<T>{
     const resp = await fetch(url, {
       method: "PATCH",
       body: JSON.stringify(data),
       headers: {
         "Content-Type": "application/json",
       },
     });
     return await resp.json();
   }

   async delete( url:string): Promise<void>{
    const resp = await fetch(url,{
       method: 'DELETE',
        headers: {
         'Content-Type': 'application/json'
       },
    })
   }

  
}

export class PokeApiAdapter implements HttpAdapter {

  private readonly axios = axios;

  async get<T>( url:string){
    const { data } = await this.axios.get<T>(url);
    return data;
  }



  async post (url:string, data: any){

  }
  async patch (url:string, data: any){
    
  }
  async delete (url:string){
    
  }

}