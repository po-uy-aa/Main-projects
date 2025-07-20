
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
	(timeout = 500)
	public void testSumSecond() {
		double marks = 0;
		double thisTotal = total;

		marks+=assertEqual(0,Quiz.sumSecond(-40),1);
		marks+=assertEqual(0,Quiz.sumSecond(0),1);
		marks+=assertEqual(36,Quiz.sumSecond(13),1);
		marks+=assertEqual(2450,Quiz.sumSecond(100),1);
		marks+=assertEqual(4,Quiz.sumSecond(5),1);

		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> sumSecond(int) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}

	// Question 2
	@Test
	(timeout = 500)
	public void testCountThree() {
		double marks = 0;
		double thisTotal = total;

		marks+=assertEqual(0,Quiz.countThree(0),2);
		marks+=assertEqual(0,Quiz.countThree(12587452),2);
		marks+=assertEqual(3,Quiz.countThree(489361),2);
		marks+=assertEqual(6,Quiz.countThree(336699),2);
		marks+=assertEqual(4,Quiz.countThree(600309006),2);

		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> testCountThree(int) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	
	// Question 3
	@Test
	(timeout = 500)
	public void testSumGreater() {
		double marks = 0;
		double thisTotal = total;
		
		double[] a = {1.2,2.4,6.5,3.6,7.5};
		
		marks+=assertEqual(17.6,Quiz.sumGreater(a,3,0),2);
		marks+=assertEqual(14,Quiz.sumGreater(a,3.61,0),2);
		marks+=assertEqual(0,Quiz.sumGreater(a,10,0),2);
		marks+=assertEqual(21.2,Quiz.sumGreater(a,-1,0),2);
		
		double[] b = {};
		
		marks+=assertEqual(0,Quiz.sumGreater(b,3,0),2);
		
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> sumGreater(double[],double,int) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	
	// Question 4
	@Test
	(timeout = 500)
	public void testSumLessThan() {
		double marks = 0;
		double thisTotal = total;
		
		MyLinkedList list = new MyLinkedList();
		
		// You must return 0 if the list is empty
		marks+=assertEqual(0, list.sumLessThan(200), 1);

		list.addFirst(5.5);
		list.addFirst(1.2);
		list.addFirst(-1.6);
		list.addFirst(-8.6);
		list.addFirst(2.8);
		
		marks+=assertEqual(-9, list.sumLessThan(2), 1);

		list.addFirst(-2.3);
		list.addFirst(-5.6);
		marks+=assertEqual(-14.2, list.sumLessThan(-2.4), 1);
		
		list.addFirst(3.6);

		marks+=assertEqual(-5, list.sumLessThan(20), 1);

		list.removeFirst();
		list.removeFirst();
		marks+=assertEqual(0, list.sumLessThan(-60), 1);

		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> sumLessThan(double) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	
	// Question 5
	@Test
	(timeout = 500)
	public void testAddAt() {
		double marks = 0;
		double thisTotal = total;
		
		MyLinkedList list = new MyLinkedList();
		
		list.addFirst(1.5);// 2
		list.addFirst(2.8);// 1
		list.addFirst(5.6);// 0
		list.addAt(1,8.4);
		
		if(list.get(2).getNext()==null) {
			// It was not added
			// Forcing test fail
			assertEqual(1,-1,10);
		}else {
			marks+=assertEqual(5.6, list.get(0).getData(),1);
			marks+=assertEqual(8.4, list.get(1).getData(),1);
			marks+=assertEqual(2.8, list.get(2).getData(),1);
			marks+=assertEqual(1.5, list.get(3).getData(),0.5);
			
			list.addAt(0,-10);

			marks+=assertEqual(-10, list.get(0).getData(),1);
			marks+=assertEqual(5.6, list.get(1).getData(),1);
			marks+=assertEqual(8.4, list.get(2).getData(),0.5);
			marks+=assertEqual(2.8, list.get(3).getData(),0.5);
			marks+=assertEqual(1.5, list.get(4).getData(),0.5);
			
			list.addAt(4,50.6);
			marks+=assertEqual(-10, list.get(0).getData(),0.25);
			marks+=assertEqual(5.6, list.get(1).getData(),0.25);
			marks+=assertEqual(8.4, list.get(2).getData(),0.25);
			marks+=assertEqual(2.8, list.get(3).getData(),0.25);
			marks+=assertEqual(50.6, list.get(4).getData(),1);
			marks+=assertEqual(1.5, list.get(5).getData(),1);
		}
	
		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> addAt(int, double) -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
	}
	
	// Question 4
	@Test
	(timeout = 500)
	public void testCountUnique() {
		double marks = 0;
		double thisTotal = total;
		
		MyLinkedList list = new MyLinkedList();
		
		// You must return 0 if the list is empty
		marks+=assertEqual(0, list.countUnique(), 1);

		list.addFirst(5.5);
		
		marks+=assertEqual(1, list.countUnique(),1);
		
		list.addFirst(1.2);
		list.addFirst(5.5);
		list.addFirst(-5.5);
		list.addFirst(2.8);
		
		marks+=assertEqual(3, list.countUnique(),2);
		
		
		list.addFirst(2.8);
		list.addFirst(9.5);
		list.addFirst(1.2);
		
		marks+=assertEqual(2, list.countUnique(),2);
		
		list.setHead(null);
		list.addFirst(5.5);
		list.addFirst(1.2);
		list.addFirst(-1.6);
		list.addFirst(-8.6);
		list.addFirst(2.8);
		
		marks+=assertEqual(5, list.countUnique(),2);
		
		list.addFirst(5.5);
		
		marks+=assertEqual(4, list.countUnique(),2);

		

		thisTotal = total - thisTotal;
		
		System.out.println("Marked -> countUnique() -> scored: "+twoDP(marks)+"/"+twoDP(thisTotal)+" marks\n");
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
