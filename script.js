function redirectToPage0() {
  window.location.href = "./Final4/index.html"; // Replace with your desired URL
}
function redirectToPage() {
  window.location.href = "./Final 2/project/index.html"; // Replace with your desired URL
}
function redirectToPage1() {
  window.location.href = "./Final1/Final/index4.html"; // Replace with your desired URL
 }
function redirectToPage2() {
  window.location.href = "./Final3/Final3/index.html"; // Replace with your desired URL
}

const serviceTiles = document.querySelectorAll('.service-tile');

serviceTiles.forEach(tile => {
  tile.addEventListener('mousemove', (e) => {
    const rect = tile.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    tile.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
      translateY(-5px)
    `;
  });

  tile.addEventListener('mouseleave', () => {
    tile.style.transform = '';
  });
});

// Add dynamic color animation
const colors = ['#00f2ff', '#39ff14', '#ffbf00'];
let colorIndex = 0;

setInterval(() => {
  serviceTiles.forEach(tile => {
    if (tile.matches(':hover')) {
      const nextColor = colors[(colorIndex + 1) % colors.length];
      tile.style.setProperty('--neon-color', nextColor);
    }
  });
  colorIndex = (colorIndex + 1) % colors.length;
}, 2000);




function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
     a00086400.png
a00086401.png
a00086402.png
a00086403.png
a00086404.png
a00086405.png
a00086406.png
a00086407.png
a00086408.png
a00086409.png
a00086410.png
a00086411.png
a00086412.png
a00086413.png
a00086414.png
a00086415.png
a00086416.png
a00086417.png
a00086418.png
a00086419.png
a00086420.png
a00086421.png
a00086422.png
a00086423.png
a00086424.png
a00086425.png
a00086426.png
a00086427.png
a00086428.png
a00086429.png
a00086430.png
a00086431.png
a00086432.png
a00086433.png
a00086434.png
a00086435.png
a00086436.png
a00086437.png
a00086438.png
a00086439.png
a00086440.png
a00086441.png
a00086442.png
a00086443.png
a00086444.png
a00086445.png
a00086446.png
a00086447.png
a00086448.png
a00086449.png
a00086450.png
a00086451.png
a00086452.png
a00086453.png
a00086454.png
a00086455.png
a00086456.png
a00086457.png
a00086458.png
a00086459.png
a00086460.png
a00086461.png
a00086462.png
a00086463.png
a00086464.png
a00086465.png
a00086466.png
a00086467.png
a00086468.png
a00086469.png
a00086470.png
a00086471.png
a00086472.png
a00086473.png
a00086474.png
a00086475.png
a00086476.png
a00086477.png
a00086478.png
a00086479.png
a00086480.png
a00086481.png
a00086482.png
a00086483.png
a00086484.png
a00086485.png
a00086486.png
a00086487.png
a00086488.png
a00086489.png
a00086490.png
a00086491.png
a00086492.png
a00086493.png
a00086494.png
a00086495.png
a00086496.png
a00086497.png
a00086498.png
a00086499.png
a00086500.png
a00086501.png
a00086502.png
a00086503.png
a00086504.png
a00086505.png
a00086506.png
a00086507.png
a00086508.png
a00086509.png
a00086510.png
a00086511.png
a00086512.png
a00086513.png
a00086514.png
a00086515.png
a00086516.png
a00086517.png
a00086518.png
a00086519.png
a00086520.png
a00086521.png
a00086522.png
a00086523.png
a00086524.png
a00086525.png
a00086526.png
a00086527.png
a00086528.png
a00086529.png
a00086530.png
a00086531.png
a00086532.png
a00086533.png
a00086534.png
a00086535.png
a00086536.png
a00086537.png
a00086538.png
a00086539.png
a00086540.png
a00086541.png
a00086542.png
a00086543.png
a00086544.png
a00086545.png
a00086546.png
a00086547.png
a00086548.png
a00086549.png
a00086550.png
a00086551.png
a00086552.png
a00086553.png
a00086554.png
a00086555.png
a00086556.png
a00086557.png
a00086558.png
a00086559.png
a00086560.png
a00086561.png
a00086562.png
a00086563.png
a00086564.png
a00086565.png
a00086566.png
a00086567.png
a00086568.png
a00086569.png
a00086570.png
a00086571.png
a00086572.png
a00086573.png
a00086574.png
a00086575.png
a00086576.png
a00086577.png
a00086578.png
a00086579.png
a00086580.png
a00086581.png
a00086582.png
a00086583.png
a00086584.png
a00086585.png
a00086586.png
a00086587.png
a00086588.png
a00086589.png
a00086590.png
a00086591.png
a00086592.png
a00086593.png
a00086594.png
a00086595.png
a00086596.png
a00086597.png
a00086598.png
a00086599.png
a00086600.png
a00086601.png
a00086602.png
a00086603.png
a00086604.png
a00086605.png
a00086606.png
a00086607.png
a00086608.png
a00086609.png
a00086610.png
a00086611.png
a00086612.png
a00086613.png
a00086614.png
a00086615.png
a00086616.png
a00086617.png
a00086618.png
a00086619.png
a00086620.png
a00086621.png
a00086622.png
a00086623.png
a00086624.png
a00086625.png
a00086626.png
a00086627.png
a00086628.png
a00086629.png
a00086630.png
a00086631.png
a00086632.png
a00086633.png
a00086634.png
a00086635.png
a00086636.png
a00086637.png
a00086638.png
a00086639.png
a00086640.png
a00086641.png
a00086642.png
a00086643.png
a00086644.png
a00086645.png
a00086646.png
a00086647.png
a00086648.png
a00086649.png
a00086650.png
a00086651.png
a00086652.png
a00086653.png
a00086654.png
a00086655.png
a00086656.png
a00086657.png
a00086658.png
a00086659.png
a00086660.png
a00086661.png
a00086662.png
a00086663.png
a00086664.png
a00086665.png
a00086666.png
a00086667.png
a00086668.png
a00086669.png
a00086670.png
a00086671.png
a00086672.png
a00086673.png
a00086674.png
a00086675.png
a00086676.png
a00086677.png
a00086678.png
a00086679.png
a00086680.png
a00086681.png
a00086682.png
a00086683.png
a00086684.png
a00086685.png
a00086686.png
a00086687.png
a00086688.png
a00086689.png
a00086690.png
a00086691.png
a00086692.png
a00086693.png
a00086694.png
a00086695.png
a00086696.png
a00086697.png
a00086698.png
a00086699.png
a00086700.png
a00086701.png
a00086702.png
a00086703.png
a00086704.png
a00086705.png
a00086706.png
a00086707.png
a00086708.png
a00086709.png
a00086710.png
       
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })