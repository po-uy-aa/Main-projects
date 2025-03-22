
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
import java.io.*;
import java.util.Arrays;

public class QuizTest {
	private static int score = 0;
	private static String result = "";

	
	@Test
	(timeout = 500) 
	@Graded(description="timesLastN(int[],int n)", marks=10)
	public void testTimesLastN() {
		int[] arr = {1,6,4,3,87,9,43,2};
		assertEquals(774, Quiz.timesLastN(arr,3));
		assertEquals(67338, Quiz.timesLastN(arr,4));
		assertEquals(202014, Quiz.timesLastN(arr,5));
		assertEquals(808056, Quiz.timesLastN(arr,6));
		
		int[] arr2 = {0,8,6,5,34,0,76,4};
		assertEquals(4, Quiz.timesLastN(arr2,1));
		assertEquals(304, Quiz.timesLastN(arr2,2));
		assertEquals(0, Quiz.timesLastN(arr2,3));
		assertEquals(0, Quiz.timesLastN(arr2,8));
		
		score+=10;
		result+="timesLastN(int[],int n) passed (10 marks)\n";
	}


	@Test
	(timeout = 500) 
	@Graded(description="square(int)", marks=10)
	public void testSquare() {
		int[] a = {1};
		assertArrayEquals(a,Quiz.squares(1));

		int[] b = {1,4};
		assertArrayEquals(b,Quiz.squares(2));
		
		int[] c = {1,4,9,16};
		assertArrayEquals(c,Quiz.squares(4));

		int[] d = {1,4,9,16,25,36,49,64,81};
		assertArrayEquals(d,Quiz.squares(9));

		score+=10;
		result+="square(int) passed (10 marks)\n";
	}

	@Test
	(timeout = 500)
	@Graded(description="stringToArray(String)", marks=10)
	public void testStringToArray() {
		
		char[] ans = {'a','B','c','1','2','3'};
		char[] res1 = Quiz.stringToArray("aBc123");
		
		assertEquals(ans.length,res1.length);
		for(int i = 0;i<ans.length;i++) {
			assertEquals(ans[i],res1[i]);
		}
		
		char[] b = {'H','e','l','l','o','!'};
		char[] res2 = Quiz.stringToArray("Hello!");
		
		assertEquals(b.length,res2.length);
		for(int i = 0;i<b.length;i++) {
			assertEquals(b[i],res2[i]);
		}
		
		score+=10;
		result+="stringToArray(String) passed (10 marks)\n";
	}
	
	@Test
	(timeout = 500)
	@Graded(description="isPrime(int)", marks=10)
	public void testIsPrime() {

		assertTrue(Quiz.isPrime(1));
		assertTrue(Quiz.isPrime(2));
		assertTrue(Quiz.isPrime(3));
		assertTrue(Quiz.isPrime(73));
		assertTrue(Quiz.isPrime(41));
		assertFalse(Quiz.isPrime(55));
		assertFalse(Quiz.isPrime(48));
		assertFalse(Quiz.isPrime(6));
		assertFalse(Quiz.isPrime(100));
		assertFalse(Quiz.isPrime(10));
		
		score+=10;
		result+="isPrime(int) passed (10 marks)\n";
	}
	
	@Test
	(timeout = 500)
	@Graded(description="arrayMerge(int[],int[])", marks=10)
	public void testArrayMerge() {

		int[] a = {1,2,3};
		int[] b = {4,5,6};
		int[] c = {1,2,3,4,5,6};
		assertTrue(Arrays.equals(c,Quiz.mergeArrays(a, b)));
		int[] cr = {4,5,6,1,2,3};
		assertTrue(Arrays.equals(cr,Quiz.mergeArrays(b, a)));
		
		int[] d = {1};
		int[] e = {4,5,6};
		int[] f = {1,4,5,6};
		assertTrue(Arrays.equals(f,Quiz.mergeArrays(d, e)));
		int[] fr = {4,5,6,1};
		assertTrue(Arrays.equals(fr,Quiz.mergeArrays(e, d)));
		
		score+=10;
		result+="arrayMerge(int[],int[]) passed (10 marks)\n";
	}
	
	@AfterClass
	public static void wrapUp() throws IOException {
		System.out.println("Score = "+score);
		System.out.println(result);
	}
}
