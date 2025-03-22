
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
import java.util.Arrays;

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
	(timeout = 500)
	public void testFirstLarger() {
		double marks = 0;
		double thisTotal = total;
		
		int[] arr = {4,5,8,1};
		marks+=assertEqual(2, Quiz.firstLarger(arr,6), 1);
		marks+=assertEqual(1, Quiz.firstLarger(arr,4), 1);
		marks+=assertEqual(0, Quiz.firstLarger(arr,1), 1);
		int[] brr = {10,50,400,999,50,60};
		marks+=assertEqual(3, Quiz.firstLarger(brr,500), 1);
		marks+=assertEqual(-1, Quiz.firstLarger(brr,2000), 1);
		
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> firstLarger(int[],int) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}

	// Question 2
	@Test
	(timeout = 500)
	public void testFindContaining() {
		double marks = 0;
		double thisTotal = total;
		String[] arr = {"Hello","There","Yellow","mere"}; 
		
		marks+=assertEqual(0, Quiz.findContaining(arr,"ll"), 1);
		marks+=assertEqual(2, Quiz.findContaining(arr,"low"), 1);
		marks+=assertEqual(1, Quiz.findContaining(arr,"ere"), 1);
		marks+=assertEqual(3, Quiz.findContaining(arr,"mere"), 1);
		marks+=assertEqual(-1, Quiz.findContaining(arr,"zer"), 1);

		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> findContaining(String[],String) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	
	// Question 3
	@Test
	(timeout = 500)
	public void testBinarySearch() {
		double marks = 0;
		double thisTotal = total;
		double[] arr = {0.00,0.08,1.23,3.65,4.5,6.9}; 
		
		marks+=assertEqual(2, Quiz.binarySearch(arr,1.23), 1);
		marks+=assertEqual(0, Quiz.binarySearch(arr,0), 1);
		marks+=assertEqual(3, Quiz.binarySearch(arr,3.65), 1);
		marks+=assertEqual(4, Quiz.binarySearch(arr,4.5), 1);
		marks+=assertEqual(-1, Quiz.binarySearch(arr,6.8), 1);
		
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> binarySearch(double[],double) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	
	// Question 4
	@Test
	(timeout = 500)
	public void testCheapestPizza() {
		double marks = 0;
		double thisTotal = total;
		Pizza[] arr = new Pizza[4];
		
		arr[0] = new Pizza(5.5,"Cheese","Tonis");
		arr[1] = new Pizza(20.1,"Nutella","Tonis");
		arr[2] = new Pizza(12.99,"Beef","Tonis");
		arr[3] = new Pizza(10.25,"Tomato","Tonis");
		
		// Get the result from the cheapestPizza method
		Pizza result = Quiz.cheapestPizza(arr);
		// Make sure it is not null
		if(result==null) {
			// Force test fail
			marks+=assertEqual(1, -1, 5);
			// Please attempt the question
		}else {
			
			// Now check that the result is the cheapest pizza
			marks+=assertEqual(5.5, result.getPrice(), 1.5);
			// Check that it is the correct pizza
			marks+=assertEqual("Cheese", result.getType(), 1);
			
			// Check on another array
			Pizza[] brr = new Pizza[3];
			
			brr[0] = new Pizza(50.5,"Cheese","Tonis");
			brr[1] = new Pizza(10.1,"Nutella","Tonis");
			brr[2] = new Pizza(12.99,"Beef","Tonis");
			
			result = Quiz.cheapestPizza(brr);
			marks+=assertEqual(10.1, result.getPrice(), 1.5);
			marks+=assertEqual("Nutella", result.getType(), 1);
				
		}
		thisTotal = total - thisTotal;
		System.out.println("Marked -> cheapestPizza(Pizza[]) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	
	// Question 5
	@Test
	(timeout = 500)
	public void testGetInRange() {
		double marks = 0;
		double thisTotal = total;
		
		double[] arr = {7.8,4.3,9.4,1.2,0.7,5.5};
				
		// Get the result from the cheapestPizza method
		double[] result = Quiz.getInRange(arr,4.4,8.5);
		// Make sure it is not null
		if(result==null) {
			// Force test fail
			marks+=assertEqual(1, -1, 10);
			// Please attempt the question
		}else {
			
			marks+=assertEqual(2, result.length, 2);
			marks+=assertEqual(7.8, result[0], 1);
			marks+=assertEqual(5.5, result[1], 1);
			
			result = Quiz.getInRange(arr,1.1,10.5);
			
			marks+=assertEqual(5, result.length, 2);
			marks+=assertEqual(7.8, result[0], 1);
			marks+=assertEqual(5.5, result[4], 1);
			marks+=assertEqual(1.2, result[3], 1);
			marks+=assertEqual(4.3, result[1], 1);
				
		}
		thisTotal = total - thisTotal;
		System.out.println("Marked -> getInRange(double[],double,double) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	
	// Question 6
	@Test
	(timeout = 500)
	public void testCollisions() {
		double marks = 0;
		double thisTotal = total;
		
		Pizza[] arr = new Pizza[5];
		
		arr[0] = new Pizza(5.5,"Cheese","Tonis");
		arr[1] = new Pizza(20.1,"Nutella","Tonis");
		arr[2] = new Pizza(12.99,"Cheese","Tonis");
		arr[3] = new Pizza(10.25,"Tomato","Tonis");
		arr[4] = new Pizza(11.25,"Cheese","Pedros");
		
		boolean ans = Quiz.collisions(arr);
		marks+=assertIsTrue(ans, 2);
		
		arr[2] = new Pizza(5.5,"Cheese","Tonis");
		
		marks+=assertIsTrue(!Quiz.collisions(arr)&&ans, 2);
		
		arr[2] = new Pizza(50.5,"BBQ","Tonis");
		
		marks+=assertIsTrue(!Quiz.collisions(arr)&&ans, 2);
		
		arr[0] = new Pizza(50.5,"Cheese","Pedros");
		
		ans = Quiz.collisions(arr);
		marks+=assertIsTrue(ans, 2);
		
		arr[4] = new Pizza(12.8,"BBQ","Pedros");
		
		marks+=assertIsTrue(!Quiz.collisions(arr)&&ans, 2);
				
		
		thisTotal = total - thisTotal;
		System.out.println("Marked -> collisions(Pizza[]) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	
	// Question 7
	@Test
	(timeout = 500)
	public void testZeroDuplicates() {
		double marks = 0;
		double thisTotal = total;

		int[] arr = {1,1,2,1,1};
		int[] ans = {0,0,2,0,0};
		
		Quiz.zeroDuplicates(arr);
		marks+=assertEqual(0, arr[0], 0.4);
		marks+=assertEqual(0, arr[1], 0.4);
		marks+=assertEqual(0, arr[3], 0.4);
		marks+=assertEqual(0, arr[4], 0.4);
		
		marks+=assertIsTrue(Arrays.equals(arr, ans), 0.4);
		
		int[] b = {1,2,2,4};
		int[] bans = {1,0,0,4};
		
		Quiz.zeroDuplicates(b);
		marks+=assertEqual(0, b[1], 0.5);
		marks+=assertEqual(0, b[2], 0.5);
		
		marks+=assertIsTrue(Arrays.equals(b, bans), 1);
		
		int[] c = {8,1,3,6,3};
		int[] cans = {8,1,0,6,0};
		
		Quiz.zeroDuplicates(c);
		marks+=assertIsTrue(Arrays.equals(c, cans), 2);
		
		int[] d = {8,1,9,9,9};
		int[] dans = {8,1,0,0,0};
		
		Quiz.zeroDuplicates(d);
		marks+=assertEqual(0, d[2], 0.4);
		marks+=assertEqual(0, d[3], 0.4);
		marks+=assertEqual(0, d[4], 0.4);
		marks+=assertIsTrue(Arrays.equals(d, dans), 0.8);
		
		int[] e = {8,8,9,9,9};
		int[] eans = {8,8,9,9,9};
		
		Quiz.zeroDuplicates(e);
		marks+=assertEqual(0, e[0], 0.4);
		marks+=assertEqual(0, e[1], 0.4);
		marks+=assertEqual(0, e[2], 0.4);
		marks+=assertEqual(0, e[3], 0.4);
		marks+=assertEqual(0, e[4], 0.4);
		
		thisTotal = total - thisTotal;
		System.out.println("Marked -> zeroDuplicates(int[]) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}

	@AfterClass
	public static void wrapUp() throws IOException {
		score = twoDP(score);
		total = twoDP(total);
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
