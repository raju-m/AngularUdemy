export class ServerData implements IServerData{
    constructor(public name:string,public content:string,public type:string){}

}
export interface IServerData{
     name:string;
     content:string;
     type:string;
}