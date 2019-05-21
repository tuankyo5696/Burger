namespace OCP{
    public class FieldGeneration{
        public string FieldType{get;set;}

        public void  GenerateField (){
            if(FieldType == 'course'){
                console.log('We play golf');
            }
            else (FieldType == 'stadium'){
                console.log('We play soccer');
            }
        }
    }    
}

// fix violation
namespace OCP {
    public class IFieldGeneration{
        public virtual void GenerateField(){

        }
    }
    public class CourseField : IFieldGeneration{
        public override void GenerateField(){
            console.log('Generate Course Field');
        }
    }
    public class StadiumField : IFieldGeneration{
        public override void GenerateField(){
            console.log('Generate Stadium Field');
        }
    }
}