/*****************************
 *                           *
 * DO NOT MODIFY THIS FILE   *
 *						 	 *
 *****************************/
public class Pizza {
	private double price;
	private String type;
	private String storeName;
	public double getPrice() {
		return price;
	}
	public String getType() {
		return type;
	}
	public String getStoreName() {
		return storeName;
	}
	public void setPrice(double p) {
		price=p;
	}
	/***********************************************
	 *                           				   *
	 * DO USE THIS TO ANSWER YOUR QUIZ QUESTIONS   *
	 *						 	 				   *
	 ***********************************************/
	public Pizza(double p, String t, String store) {
		price=p;
		type = t;
		storeName=store;
	}
	public String toString() {
		return price+" "+type+" "+storeName;
	}
}
