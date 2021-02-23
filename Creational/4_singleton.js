class ProgrammingLanguage{
    constructor(singletonData){
        if(ProgrammingLanguage.exists){
            return ProgrammingLanguage.instance
        }
        ProgrammingLanguage.instance = this;
        ProgrammingLanguage.exists = true;
        this.singletonData = singletonData;
    }

    getSingletonData(){
        return this.singletonData
    }
}

const javaScript = new ProgrammingLanguage('JavaScript')
console.log(javaScript.getSingletonData());

const python = new ProgrammingLanguage('Python')
console.log(python.getSingletonData());
