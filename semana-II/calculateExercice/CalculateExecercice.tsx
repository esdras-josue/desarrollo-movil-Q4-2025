import { CalculateExercise } from './models/CalculateExercice';

export function calculateExercice(dailyHours:number[], target:number){
      const periodLenght: number = dailyHours.length;
      let trainingDays:number = 0;
      //let average = 0;
      let totalHours: number = 0;
      let success = false;
      let rating = 0;
      let ratingDescription = "";

      for(let i = 0; i< periodLenght; i++){

        if(dailyHours[i] > 0) {
          trainingDays++;
          totalHours += dailyHours[i] / 7; // sacar promedio
        }         
      }


      const average = totalHours / periodLenght;  
        if (average >= 2){
          success = true;
        }
        
        if(average >= 2){
          rating = 3;
          ratingDescription = "Exelente trabajo, objetivo alcanzado";
        } else if(average >= 1 && 2){
          rating =2;
          ratingDescription = "Bien, pero podrias mejorar";
        }
        else{
          rating = 1;
          ratingDescription = "Insuficiente, debes ser mas constante";
        }

        const personWeekRoutine: CalculateExercise ={
          periodLenght: dailyHours,
          trainingDays: trainingDays,
          average: average,
          succes: success,
          rating: rating,
          ratingDescription: ratingDescription
        } 

        return personWeekRoutine;
  }