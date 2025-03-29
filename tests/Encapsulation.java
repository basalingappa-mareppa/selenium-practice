public calss A{
    private int age;
    priavte String name;
    public int getage()
    {
        return age;
    }
    public String getname()
    {
        return name;
    }
    public void setage(int a)
    {
        age=a;
    }
    public void setname(String n)
    {
        name=n;
    }
}
public class Main1
{
    public static void main(String[]arg)
    {
        A obj=new A();
        obj.setage(34);
        obj.setname("basa")
        ag=obj.getage();
        nm=obj.getname();
        System.out.println(ag "and"+nm);
    }
}