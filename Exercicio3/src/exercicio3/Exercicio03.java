
 package exercicio3;

import java.util.Scanner;


public class Exercicio03 {
    
  public static void main(String[] args) {
      Scanner leia = new Scanner(System.in);
      System.out.println("digite qtd de anos: ");
     int anos = leia.nextInt();
     
     
      System.out.println("digite qtd de  meses : ");
      int meses = leia.nextInt();
      
      System.out.println("digite qtd de dias: ");
      int dias = leia.nextInt();
      
      int totaldias = (anos *365)+ (meses*30)+ dias;
      System.out.println("voce viver "+ totaldias+" dias.");
      
      
      
      
      
      
      
}
    
    
    
    
    
}
