package SS8.bai3;

public class Rectangle implements Colorable{
    protected double width;
    protected double height;
    protected String color;
    public Rectangle(String color) {
        this.color = color;
    }


    @Override
    public void setColor() {
        System.out.println("Rectangle color :"+color);
    }


}
