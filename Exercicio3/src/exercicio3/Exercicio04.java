
package exercicio3;

import java.util.Scanner;


public class Exercicio04 {
     public static void main(String[] args) {
     Scanner s = new Scanner(System.in);
     
         System.out.println("digite o total de eleitores: ");
          double Eleitores= s.nextDouble();
          
          System.out.println("votos nulos: ");
          double Nulos= s.nextDouble();
          
          System.out.println("votos brancos: ");
          double brancos= s.nextDouble();
          
          System.out.println("vots validos: ");
          double validos = s.nextDouble();
          
          double nulosPercentual = (Nulos/ Eleitores)* 100;
          double brancosPercentual= (brancos/Eleitores)*100;
          double validosPercentual= (validos/Eleitores)* 100;
          
          System.out.println("porcentagem nulos: "+ nulosPercentual+"%");
          System.out.println("porcentagem brancos: "+ brancosPercentual+"%");
          System.out.println("porcentagem validos: "+ validosPercentual+"%");
          
                 
     
     
     
     
     
     
     
     
     
     
     }
    
    
    
    
    
    
    
    
    
}
