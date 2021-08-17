// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  var pAequorFactory = (number, arrayfifteen) => {
  return{
    _specimenNum : number,
    _dna : arrayfifteen,
    mutate(){
      var numberBase = Math.floor(Math.random()*15);
      var base = this._dna[numberBase];
      var otherBase = '';
      do{
        otherBase = returnRandBase();
      } while (base === otherBase){
        if (base !== otherBase){
          this._dna.slice(numberBase, 1, otherBase);
        }
        return this._dna;
      }
    },
   compareDNA(pAequor){
     var match = 0;
     for(let i=0; i<this._dna.length; i++){
       if(this._dna[i] === pAequor[i]){
         match++;
       }
     }
     var percent = match/this._dna.length;
     var percentage = percent*100;
     return `specimen #${this._specimenNum} and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common`
      },
      willLikelySurvive(){
        var totalC = 0;
        var totalG = 0;
        for(let i=0; i<this._dna.length; i++){
          if(this._dna[i] === 'C'){
            totalC++;
          } else if(this._dna[i] === 'G'){
            totalG++;
          }
        }
        var totalGandC = totalC + totalG;
        var percentage = (totalGandC/this._dna.legth)*100;
        if(percentage > 60){
          return true
        } else {
          return false
        }
      },
      complementStrand(){
        let complementar =[];
        for(let i=0; i<this._dna.length; i++){
          if(this._dna[i] === 'A'){
            complementar.push('T')
          } else if(this._dna[i] === 'T'){
            complementar.push('A')
          } else if(this._dna[i] === 'C'){
            complementar.push('G')
          } else if(this._dna[i] == 'G'){
            complementar.push('C')
          }
        }
        return complementar;
      } 
    }
  }
  //30 survive Collection
  let surviveColection = [];
  let match = 0;
  let counter = 1;
  while(match<30){
    const strand = pAequorFactory(counter, mockUpStrand());
    if(strand.willLikelySurvive = true){
      surviveColection.push(strand);
      match++
      counter++
    }
  }
  console.log(surviveColection)
  
  //Complement DNA
  const sample40 = pAequorFactory(40, mockUpStrand())
  console.log(sample40)
  const complement40 = sample40.complementStrand();
  console.log(complement40);
  
  
  