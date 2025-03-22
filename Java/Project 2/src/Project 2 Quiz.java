// You should edit only the methods body which have "To be completed" commented within them.

// You must NOT 
// 1) change any class name or its visibility.
// 2) change any method signatures (visibility, type, name or its parameters) 

// Good luck!
class Apple {
	private double weight; // The Apple's weight in grams
	private String type; // The type of apple
	
	public double getWeight() {
		return weight;
	}
	public String getType() {
		return type;
	}
	
	/**
	 * Question 1A: Setter (5 marks)
	 * 
	 * @param weight 
	 * 				: double
	 * 
	 * Set the instance variable weight to the parameter variable weight.
	 * 
	 * Validation:
	 * 				If the weight is negative then make it positive.
	 * 				If the weight is greater than 200, set it to 200.
	 *
	 */
	public void setWeight(double weight) {
		
		if(weight<0) {
			this.weight=-weight;
		}
		else if(weight>200) {
			this.weight=200;
		}
		else {
			this.weight=weight;
		}
	}
	
	/**
	 * Question 1B: Setter (5 marks)
	 * 
	 * @param type 
	 * 				: String
	 * 
	 * Set the instance variable type to the parameter variable type.
	 * 
	 * Validation:
	 * 				If the length of the type is 0, set the name to "No type".
	 * 				Make sure the type starts with an upper case letter.
	 * Example:
	 * 
	 * 	if type = "fuji" you should set the Apple's type to "Fuji".
	 *
	 */
	public void setType(String type) {
		if (type.length() == 0) {
			type = "No type";
		} 
		else {
			char c = type.charAt(0);
			if (Character.isLowerCase(c)) {
				type = Character.toUpperCase(c) + type.substring(1);
			}
		}
		this.type = type;
	}
	
	/**
	 * Question 1B: Constructor (5 marks)
	 * 
	 * Set the instance variable weight to 80 and the type to "Fuji"
	 *
	 */
	public Apple() {
		this.weight=80;
		this.type="Fuji";
	}


	/**
	 * Question 1C: Constructor (5 marks)
	 * 
	 * @param weight 
	 * 				: double
	 * 
	 * Set the instance variable weight parameter variable.
	 * 
	 * Note: You must use the above setters within your constructor.
	 * (You're marks will depend on whether your setters are correct)
	 * 
	 */
	public Apple(double weight, String type) {
		setWeight(weight);
		setType(type);
	}
	
	/**
	 * Question 1D: Method (5 marks)
	 * 
	 * @param n
	 * 				: int
	 * @return the total weight of n identical Apples
	 * 		   if n is negative, return 0.
	 * 				
	 * 
	 */
	public double totalWeight(int n) {
		if(n<0) {
		return 0;
		}
		return n*weight;
		
	}
	
	/**
	 * Question 1E: compareTo (5 marks)
	 * 
	 * @param other
	 * 				:Apple
	 * 
	 * @return 1 if the calling object has a larger weight than the parameter object
	 * 
	 *        -1 if the calling object has a lower weight than the parameter object
	 * 
	 *         0 if the calling object has the same weight as the parameter object
	 */
	public int compareTo(Apple other) {
		double rate1= this.weight;
		double rate2=other.weight;
		if(rate1>rate2) {
			return 1;
		}
		if(rate2>rate1) {
			return -1;
		}
		else {
			return 0;
		}
		
	}
	
	/**
	 * Question 1F: toString (5 marks)
	 * 
	 * @return A string of which includes the instance parameter weight in the form:
	 * 		
	 * 		   "Apple weights 70.0 grams"
	 * 
	 * (If the weight is 70.0)
	 * 	
	 */
	public String toString() {
		 return "Apple weights "+this.weight+" grams";
	}

	
	////////////////////////////////////////////////////////////
	///				Do not edit the below methods			 ///
	////////////////////////////////////////////////////////////
	public void xyz(double abc) {weight=abc;}
	public void abc(String abc) {type=abc;}
	////////////////////////////////////////////////////////////
	///				Do not edit the above methods		 	 ///
	////////////////////////////////////////////////////////////
}
public class Quiz {

	/**
	 * Question 2: Instantiating objects (2 marks)
	 * 
	 * @return a Pizza object with price 12.5.
	 * 
	 * This method should create a Pizza object with a price of 12.5 then return it.
	 * 
	 */
	public static Pizza makePizza() {
		Pizza p=new Pizza(12.5);
		return p;
	}

	/**
	 * Question 3: Arrays of objects (3 marks)
	 * 
	 * @param arr : An array of Pizza objects
	 * @return the sum of the Pizza's price in index 2 and 0.
	 * 
	 * This method should add together the price of the Pizza object's in index 2 and 0
	 * then return the result.
	 * 
	 */
	public static double pizzaArray(Pizza[] arr) {
		double p1=arr[0].price;
		double p2=arr[2].price;
		double sum=p1+p2;
		return sum;
		
	}
	
	/**
	 * Question 4: Arrays of objects (10 marks)
	 * 
	 * @param arr : An array of Pizza objects
	 * @return the number of Pizza object overwritten
	 * 
	 * This method should search through arr for Pizza objects
	 * with a negative price.
	 * 
	 * If a Pizza object has a negative price, then it should be overwritten
	 * by a new Pizza object with a price of 0.
	 * 
	 * The method should return the number of Pizza objects which were overwritten.
	 * 
	 * Example: (Note this is only describing the prices)
	 * 
	 * {1.2,-5.4,0.5,-12.4} -> {1.2,0,0.5,0} (in this case the method would return 2)
	 * 
	 */
	public static int fixPizzaPrice(Pizza[] arr) {
		if(arr.length==0) {
			return 0;
		}
		int count=0;
		for(int i=0;i<arr.length;i++) {
			if(arr[i].price<0) {
			arr[i]=new Pizza(0);
			count++;
			}
		}
		return count;
	}
}
