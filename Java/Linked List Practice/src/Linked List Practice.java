
//DO NOT MODIFY
public class Node {
	private double data;
	private Node next;
	
	public double getData() {
		return data;
	}
	
	public Node getNext() {
		return next;
	}
	
	public void setData(double data) {
		this.data = data;
	}
	
	public void setNext(Node next) {
		this.next = next;
	}
	
	public Node() {
		setData(0);
		setNext(null);
	}
	
	public Node(double data) {
		setData(data);
		setNext(null);
	}
	
	public Node(double data, Node node) {
		setData(data);
		setNext(node);
	}	
	
	public String toString() {
		return data+"";
	}
}
