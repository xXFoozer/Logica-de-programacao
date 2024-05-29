
package pkg01.aula.operadores;


public class AulaOperadores {


    public static void main(String[] args) {
        //aritimeticos
       int a =10+1;
       int b = a - 10;
       int c = b * 3;
       int d = c / 2;
       double e = 4.5 + 1.7;
       
       String mostrarA = "Valor de A: "+ a;
      
               
        System.out.println(mostrarA);
              
               
       a+=10;
       b-= 1;
       c *= 5;
       d /= 1;
       
        System.out.println("valor de A: "+ a);
        System.out.println("valor de b: "+ b);
        System.out.println("valor de c: "+c);
        System.out.println("valor de d: "+d);
        System.out.println(10 + 10);
        //-------------------------------------
        //lógicos
        
        boolean ehMaior = 10>20;
        boolean ehMenor = 10 < 20;
        boolean ehMenorIgual= 10<=20;
        boolean ehMaiorIgual= 10>=20;
        boolean ehIgual= 10 == 10;
        boolean ehDiferente= 10 != 20;
        
        System.out.println("Maior: "+ehMaior);
        System.out.println("Menor: "+ehMenor);
        System.out.println("Menor igual: "+ehMenorIgual);
        System.out.println("Maior igual: "+ehMaiorIgual);
        System.out.println("Igual: "+ehIgual);
        System.out.println("Diferente: "+ehDiferente);
       
        //----------------------------------
        //LÓGICOS
        boolean valor = (10 > 9) && (5>1);
        boolean valor1 = true && true;
        boolean valor2 = true && false;
        boolean valor3 = false || true;
        boolean valor4 = false || false;
        boolean valor5 = ((10 > 9) && (5 > 1)) || ((120 < 1)&& (31 > 3));
         
        boolean negacao = !true;
        boolean negacao2 = !valor5; 
        System.out.println();
        
        
        
        
        
        
    }
    
}
