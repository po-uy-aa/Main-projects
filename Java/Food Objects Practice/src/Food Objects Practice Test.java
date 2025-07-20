
/*****************************
 *                           *
 * DO NOT MODIFY THIS FILE   *
 *						 	 *
 *****************************/

/*********************************
 *                           	 *
 * IF YOU ARE USING THE DEBUGGER *
 *  							 *
 *								 *
 * Comment out all (timeout=500) *
 *								 *
 *						 	     *
 *********************************/

import static org.junit.Assert.*;
import org.junit.*;
import org.junit.rules.ErrorCollector;

import java.io.*;

public class QuizTest {
	private static double score = 0;
	private static double total = 0;
	
	@Rule
	public ErrorCollector collector = new ErrorCollector();
	
	
	/*****************************
	 *                           *
	 *   TEST CASES ARE BELOW    *
	 *						 	 *
	 *****************************/
	// assertEqual(expected,actual,mark)
	
	// Question 1
	@Test
	public void testSetWeight() {
		double marks = 0;
		double thisTotal = total;
		
		Apple b = new Apple();
		b.setWeight(80);
		marks+=assertEqual(80, b.getWeight(), 1);
		b.setWeight(-10.2);
		marks+=assertEqual(10.2, b.getWeight(), 2);
		b.setWeight(2000);
		marks+=assertEqual(200, b.getWeight(),2);
		
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> setWeight(int) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	@Test
	public void testSetType() {
		double marks = 0;
		double thisTotal = total;
		
		Apple b = new Apple();
		b.setType("Green");
		marks+=assertEqual("Green", b.getType(), 1);
		b.setType("red");
		marks+=assertEqual("Red", b.getType(), 2);
		b.setType("");
		marks+=assertEqual("No type", b.getType(),2);
		
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> setWeight(int) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	@Test
	public void testApple() {
		double marks = 0;
		double thisTotal = total;
		
		Apple b = new Apple();
		marks+=assertEqual(80, b.getWeight(), 2.5);
		marks+=assertEqual("Fuji", b.getType(), 2.5);
		
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> Apple() -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	@Test
	public void testApple2() {
		double marks = 0;
		double thisTotal = total;
		
		Apple b = new Apple(80,"Green");
		marks+=assertEqual(80, b.getWeight(), 0.5);
		marks+=assertEqual("Green", b.getType(), 0.5);
		b = new Apple(-60,"red");
		marks+=assertEqual(60, b.getWeight(), 1);
		marks+=assertEqual("Red", b.getType(), 1);
		b = new Apple(2000,"");
		marks+=assertEqual(200, b.getWeight(),1);
		marks+=assertEqual("No type", b.getType(),1);
		
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> Apple(double) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	@Test
	public void testTotalWeight() {
		double marks = 0;
		double thisTotal = total;
		
		Apple b = new Apple();
		b.xyz(60);
		marks+=assertEqual(5*60, b.totalWeight(5), 2);
		b.xyz(50);
		marks+=assertEqual(0, b.totalWeight(-1), 2);
		b.xyz(200);
		marks+=assertEqual(200*500, b.totalWeight(500), 1);
		
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> totalWeight(int) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	@Test
	public void testCompareTo() {
		double marks = 0;
		double thisTotal = total;
		
		Apple a = new Apple();
		Apple b = new Apple();
		a.xyz(90);
		b.xyz(60);
		marks+=assertEqual(1,a.compareTo(b), 2);
		marks+=assertEqual(-1,b.compareTo(a), 2);
		a.xyz(60);
		marks+=assertEqual(0,b.compareTo(a), 1);
		
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> compareTo(Apple) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	@Test
	public void testToString() {
		double marks = 0;
		double thisTotal = total;
		
		Apple a = new Apple();
		a.xyz(90);
		// Make sure the String isn't null
		if(a.toString()!=null) {
			// This first test is to give you partial marks if you are missing spaces and capitals
			marks+=assertEqual("appleweights90.0grams",a.toString().replace(" ", "").toLowerCase(), 2);
			// This second test is if you have the answer correct
			marks+=assertEqual("Apple weights 90.0 grams",a.toString(), 3);
		}else {
			// Forcing a fail -> you have not attempted the question
			// Or your method is returning null
			marks+=assertEqual(-1,1, 5);
		}
		
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> toString() -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	
	// Question 2
	@Test
	public void testMakePizza() {
		double marks = 0;
		double thisTotal = total;
		
		// Make sure the Pizza isnt null
		Pizza p = Quiz.makePizza();
		if(p!=null) {
			marks+=assertEqual(12.5,p.getPrice(), 2);
		}else {
			// Forcing a fail -> you have not attempted the question
			// Or your method is returning null
			marks+=assertEqual(-1,1, 2);
		}

		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> makePizza() -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	
	// Question 3
	@Test
	public void testPizzaArray() {
		double marks = 0;
		double thisTotal = total;
		
		Pizza[] arr = new Pizza[5];
		arr[0] = new Pizza(10.2);
		arr[1] = new Pizza(15.5);
		arr[2] = new Pizza(16.9);
		arr[3] = new Pizza(17.6);
		arr[4] = new Pizza(-20.6);
		marks+=assertEqual(10.2+16.9,Quiz.pizzaArray(arr), 1);
		arr[4] = new Pizza(10.9);
		marks+=assertEqual(10.2+16.9,Quiz.pizzaArray(arr), 1);
		arr[2] = new Pizza(60.12);
		marks+=assertEqual(10.2+60.12,Quiz.pizzaArray(arr), 1);
		
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> pizzaArray(Pizza[]) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	
	// Question 4
	@Test
	(timeout = 500) 
	public void testFixPizzaPrice() {
		double marks = 0;
		double thisTotal = total;
		
		Pizza[] arr = new Pizza[5];
		arr[0] = new Pizza(-10.2);
		arr[1] = new Pizza(15.5);
		arr[2] = new Pizza(-10.2);
		arr[3] = new Pizza(17.6);
		arr[4] = new Pizza(-20.6);
		
		Quiz.fixPizzaPrice(arr);
		marks+=assertEqual(0, arr[0].getPrice(),3);
		marks+=assertEqual(0, arr[2].getPrice(),3);
		marks+=assertEqual(0, arr[4].getPrice(),3);
		
		// Check if non-negative entries remain unchanged, only check if the previous tests pass
		if(marks>=9){
			marks+=assertEqual(15.5, arr[1].getPrice(),1);
		}else {
			// Add the mark to the total
			total++;
		}
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> fixPizzaPrice(Pizza[]) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}

	@AfterClass
	public static void wrapUp() throws IOException {
		System.out.println("Overall you scored: "+score+"/"+total+" marks");
	}
	
	public double assertEqual(int exp, int act,double w) {
		total+=w;
		try {
			assertEquals(exp, act);
			score+=w;
			return w;
		}catch(Throwable t) {
			collector.addError(t);
			return 0;
		}
	}
	public double assertEqual(int[] exp, int[] act,double w) {
		total+=w;
		try {
			assertEquals(exp, act);
			score+=w;
			return w;
		}catch(Throwable t) {
			collector.addError(t);
			return 0;
		}
	}
	public double assertEqual(String exp, String act,double w) {
		total+=w;
		try {
			assertEquals(exp, act);
			score+=w;
			return w;
		}catch(Throwable t) {
			collector.addError(t);
			return 0;
		}
	}
	public double assertEqual(char exp, char act,double w) {
		total+=w;
		try {
			assertEquals(exp, act);
			score+=w;
			return w;
		}catch(Throwable t) {
			collector.addError(t);
			return 0;
		}
	}
	public double assertEqual(double exp, double act,double w) {
		total+=w;
		try {
			assertEquals(exp, act,0.005);
			score+=w;
			return w;
		}catch(Throwable t) {
			collector.addError(t);
			return 0;
		}
	}
	public double assertEqual(double[] exp, double[] act,double w) {
		total+=w;
		try {
			assertEquals(exp, act);
			score+=w;
			return w;
		}catch(Throwable t) {
			collector.addError(t);
			return 0;
		}
	}
	public double assertIsTrue(boolean exp,double w) {
		total+=w;
		try {
			assertTrue(exp);
			score+=w;
			return w;
		}catch(Throwable t) {
			collector.addError(t);
			return 0;
		}
	}
	public double assertIsFalse(boolean exp,double w) {
		total+=w;
		try {
			assertFalse(exp);
			score+=w;
			return w;
		}catch(Throwable t) {
			collector.addError(t);
			return 0;
		}
	}
	public static double twoDP(double n) {
		return Math.round(n*10)/10.0;
	}
	
}
