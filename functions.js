function set_radius(){
    var radius = Number(prompt("Nhap ban kinh: "));
    circle = new Circle(radius);
}

function get_circle_info() {
    let radius = circle.getRadius();
    let area = circle.getArea();
    alert("ban kinh la: " + radius + " dien tich la: " + area);
}