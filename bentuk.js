class Lingkaran {
    constructor(x, y, r) {
        this.x = 160;
        this.y = 570;
        this.r = 60;
        this.nama = "LINGKARAN";
        this.warna = color(255,200,200);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.warna);
        ellipse(this.x, this.y, this.r * 2);
    }
    
    clicked(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {
            noStroke();
            fill(0);
            textSize(50);
            textAlign(CENTER);
            text(this.nama, width / 2, 200);
            console.log("LINGKARAN");
        }         
    }
}

class Persegi {
    constructor(x, y, s){
        this.x = 420;
        this.y = 520;
        this.s = 120;
        this.nama = "PERSEGI";
        this.warna = color(255, 80, 80);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.warna);
        square(this.x, this.y, this.s);

    }
}

class Segitiga {
    constructor(x1, y1, x2, y2, x3, y3) {
        this.x1 = 800;
        this.y1 = 510;
        this.x2 = 720;
        this.y2 = 640;
        this.x3 = 880;
        this.y3 = 640;
        this.nama = "SEGITIGA";
        this.warna = color(255, 255, 102);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.warna);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }
}

class Persegi_panjang{
    constructor(x, y, s){
        this.x = 1040;
        this.y = 530;
        this.width = 200;
        this.height = 100;
        this.nama = "PERSEGI PANJANG";
        this.warna = color(102, 255, 204);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.warna);
        rect(this.x, this.y, this.width, this.height);
    }
}

class Trapesium{
    constructor(){
        this.x1 = 110;
        this.y1 = 330;
        this.x2 = 210;
        this.y2 = 330;
        this.x3 = 280;
        this.y3 = 430;
        this.x4 = 40;
        this.y4 = 430;
        this.nama = "TRAPESIUM";
        this.warna = color(191, 128, 255);
    }

    show(x1, y1, x2, y2, x3, y3, x4, y4) {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.warna);
        quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
    }
}

class Jajar_genjang{
    constructor(){
        this.x1 = 1080;
        this.y1 = 330;
        this.x2 = 1240;
        this.y2 = 330;
        this.x3 = 1200;
        this.y3 = 430;
        this.x4 = 1040;
        this.y4 = 430;
        this.nama = "JAJAR GENJANG";
        this.warna = color(102, 204, 255);
    }

    show(x1, y1, x2, y2, x3, y3, x4, y4) {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.warna);
        quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
    }
}

class KotakID {
    constructor(x, y, s){
        this.x = 420;
        this.y = 520;
        this.s = 120;
        this.nama = "KotakID";
        this.warna = color(255, 255, 26);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.warna);
        square(width / 2 - 200, height / 2 - 50, 80 * 2);
        stroke(0);
        textSize(30);
        text("Indonesia", this.x + 100, this.y)
    }
}

class KotakEN {
    constructor(x, y, s){
        this.x = 420;
        this.y = 520;
        this.s = 120;
        this.nama = "KotakEN";
        this.warna = color(102, 255, 51);
    }

    show() {
        stroke(102, 102, 102);
        strokeWeight(4);
        fill(this.warna);
        square(width / 2 + 100, height / 2 - 50, 80 * 2);
        stroke(0);
        textSize(30);
        text("Comming Soon", width / 2 + 175, this.y)
    }
}