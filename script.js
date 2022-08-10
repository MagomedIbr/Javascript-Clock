//1000 für 1000 milisekunden pro Sekunde. Also Etwas passiert nach jeder Sekunde
//https://developer.mozilla.org/de/docs/Web/CSS/transform-origin
//https://www.w3schools.com/jsref/prop_style_transform.asp

setInterval(()=>{
    d= new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30*htime+ 30*(mtime/60)
    mrotation = 6*mtime +6*(stime/60)
    srotation = 6*stime
    //console.log("Hello World");

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000)