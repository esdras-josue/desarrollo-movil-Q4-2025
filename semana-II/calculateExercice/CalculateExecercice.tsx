import { CalculateExercise } from './models/CalculateExercice';

export function calculateExercice(dailyHours:number[], target:number){
      const periodLength: number = dailyHours.length;
      let trainingDays:number = 0;
      let totalHours: number = 0;
      let succes = false;
      let rating = 0;
      let ratingDescription = "";

      for(let i = 0; i< periodLength; i++){

        if(dailyHours[i] > 0) {
          trainingDays++;
          totalHours += dailyHours[i]; // sacar promedio
        }         
      }


      const average = totalHours / periodLength;  
        if (average >= 2){
          succes = true;
        }
        
        if(average >= 2){
          rating = 3;
          ratingDescription = "Exelente trabajo, objetivo alcanzado";
        } else if(average >= 1 && average < 2){
          rating =2;
          ratingDescription = "Bien, pero podrias mejorar";
        }
        else{
          rating = 1;
          ratingDescription = "Insuficiente, debes ser mas constante";
        }

        const personWeekRoutine: CalculateExercise ={
          periodLength: dailyHours.length,
          trainingDays: trainingDays,
          average: average,
          succes: succes,
          rating: rating,
          ratingDescription: ratingDescription
        } 

        return personWeekRoutine;
  }