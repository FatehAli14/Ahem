class Security {

    constructor(){

        this.access1 = createInput("");
        this.access1.position(100,120);
        this.access1.style('background', 'white');  

        this.button1 = createButton('All the best cutie;)');
        this.button1.position(100,150);
        this.button1.style('background', 'pink');    

        this.access2 = createInput("");
        this.access2.position(700,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('All the best shawty;)');
        this.button2.position(700,220);
        this.button2.style('background', 'lightblue');
//add code for creating and positioning the third input box and button
        this.access3 = createInput("");
        this.access3.position(100,350);
        this.access3.style('background','white');

        this.button3 = createButton('All the best hottie;)');
        this.button3.position(100,380);
        this.button3.style('background', 'yellow');

        this.access4 = createInput("");
        this.access4.position(725,395);
        this.access4.style('background','white');

        this.button4 = createButton('All the best notty;)');
        this.button4.position(725,425);
        this.button4.style('background', 'red');
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
//add code for what happens when the third button is pressed
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        });
    }
}