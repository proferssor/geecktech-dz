class transport {
    constructor(color,speed,title){
        this.color = color;
        this.speed = speed;
        this.title = title;
    }

        startEngine(){
            console.log(`${this.titile} ${this.speed}started !`);
        }
    
}

class Car extends transport{
    constructor(
        color,
        speed,
        title
        ){
        super(title,speed,color);
        this.speed = speed;
    }
    startEngine(){
        console.log(`${this.color}  ${this.title} whith speed ${this.speed} started !`);
    }
}

const Honda = new Car (
    'Civic',
    '85 km\h',
    'Black',
)

const waterBikes = new Car(
    'Honda Aqua Bikes',
    '60 km\h',
    'Aqumarine'
)

console.log(Honda);
Honda.startEngine();
waterBikes.startEngine();

