class Server{
    constructor(name, ip){
        this.name = name,
        this.ip = ip
    }
    
    getUrl(){
        return `https://${this.ip}:80`;
    }
}

const google = new Server('Google', '22.22.31.88');
console.log(google.getUrl());