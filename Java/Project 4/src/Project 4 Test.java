
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
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

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
	// assertEqual(expected,actual,mark
	
	// Question 4
	@Test
	(timeout = 500)
	public void testGetArrayList() {
		double marks = 0;
		double thisTotal = total;
		
		ArrayList<Integer> ans = Quiz.getArrayList();
		
		if(ans==null) {
			// Please attempt the question
			// Forcing test fail
			assertEqual(1,-1,5);
		}else {
			marks+=assertEqual(6,ans.get(0),1);
			marks+=assertEqual(8,ans.get(1),1);
			marks+=assertEqual(3,ans.get(2),1);
			marks+=assertEqual(1,ans.get(3),1);
			marks+=assertEqual(9,ans.get(4),1);	
		}
		
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> getArrayList() -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	
	// Question 5
	@Test
	(timeout = 500)
	public void testChangeArrayList() {
		double marks = 0;
		double thisTotal = total;
		
		ArrayList<String> ans = new ArrayList<String>();
		
		ans.add("Hello");
		ans.add("This");
		ans.add("is");
		ans.add("a quiz");
		
		int result = Quiz.changeArrayList(ans);
		
		// Check the correct changes were made
		
		marks+=assertEqual("New",ans.get(1),1);
		marks+=assertEqual("Answer",ans.get(3),1);
		// If the above two are correct, make sure the other entries weren't changed
		if(marks>1&&ans.size()==4) {
			marks+=assertEqual("Hello",ans.get(0),1);
			marks+=assertEqual("This",ans.get(2),1);
			marks+=assertEqual(2,result,1);
		}else {
			// Your first two tests failed
			// The above tests will activate once you have correctly updated the array
			// Forcing test fail
			assertEqual(1,-1,3);
		}
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> changeArrayList(ArrayList<String>) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	
	// Question 6
	@Test
	(timeout = 500)
	public void testTotalPrice() {
		double marks = 0;
		double thisTotal = total;
		
		ArrayList<Pizza> list = new ArrayList<Pizza>();
		
		list.add(new Pizza(10.1,"NA","Tonis"));
		
		marks+=assertEqual(10.1, Quiz.totalPrice(list,"Tonis"),1);
		
		list.add(new Pizza(25,"NA","Tonis"));
		marks+=assertEqual(10.1+25, Quiz.totalPrice(list,"Tonis"),1);
		
		list.add(new Pizza(12.5,"NA","Brunos"));
		marks+=assertEqual(10.1+25, Quiz.totalPrice(list,"Tonis"),0.5);
		marks+=assertEqual(12.5, Quiz.totalPrice(list,"Brunos"),1);
		
		list.add(new Pizza(10.5,"NA","Brunos"));
		marks+=assertEqual(10.1+25, Quiz.totalPrice(list,"Tonis"),0.5);
		marks+=assertEqual(12.5+10.5, Quiz.totalPrice(list,"Brunos"),1);
		
		list.add(new Pizza(15.5,"NA","Tonis"));
		marks+=assertEqual(10.1+25+15.5, Quiz.totalPrice(list,"Tonis"),1);
		marks+=assertEqual(12.5+10.5, Quiz.totalPrice(list,"Brunos"),0.5);
		
		list.add(new Pizza(12.7,"NA","Alberts"));
		marks+=assertEqual(10.1+25+15.5, Quiz.totalPrice(list,"Tonis"),0.5);
		marks+=assertEqual(12.5+10.5, Quiz.totalPrice(list,"Brunos"),0.5);
		
		marks+=assertEqual(12.7, Quiz.totalPrice(list,"Alberts"),1);
		marks+=assertEqual(0, Quiz.totalPrice(list,"PizzaParadise"),1);
		marks+=assertEqual(0, Quiz.totalPrice(list,"Toni"),0.5);
		
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> totalPrice(ArrayList<Pizza>) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	
	// Question 7
	@Test
	(timeout = 500)
	public void testAddPrevSquared() {
		double marks = 0;
		double thisTotal = total;
		
		ArrayList<Integer> list = new ArrayList<Integer>();
		ArrayList<Integer> ans = new ArrayList<Integer>();

		list.add(12);
		ans.add(12);
		Quiz.addPrevSquared(list);

		list = new ArrayList<Integer>();
		ans = new ArrayList<Integer>();
		list.add(12);
		list.add(5);
		ans.add(12);
		ans.add(149);
		Quiz.addPrevSquared(list);
		marks+=assertEqual(ans,list,10);
		
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> addPrevSquared(ArrayList<Integer>) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
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
	public double assertEqual(ArrayList<Integer> exp, ArrayList<Integer> act,double w) {
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
	public boolean isDesc(Pizza[] a) {
		if (a == null)
			return false;
		for (int i = 0; i < a.length - 1; i++)
			if (a[i].getPrice() < a[i + 1].getPrice())
				return false;
		return true;
	}
	public boolean isAsc(int[] a) {
		if (a == null)
			return false;
		for (int i = 0; i < a.length - 1; i++)
			if (a[i] > a[i + 1])
				return false;
		return true;
	}
	public static double twoDP(double n) {
		return Math.round(n*10)/10.0;
	}
	
}
