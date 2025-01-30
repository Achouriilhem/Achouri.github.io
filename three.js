<!doctype html>
 <html>
 <head>
 <title>Premier pas avec ThreeJs</title>
 </head>
 <body>

 <script src="three.min.js"></script>

 <script>
 //creation de la scene
 var scene = new THREE.Scene();
 //Creation du render
 var renderer = new THREE.WebGLRenderer();
 renderer.setClearColor( 0xffffff, 1);
 renderer.setSize( window.innerWidth, window.innerHeight );
 //On ajoute l'objet à la page html
 document.body.appendChild( renderer.domElement );
 //creation de la camera
 var camera = new THREE.PerspectiveCamera(50, window.innerWidth /
window.innerHeight, 1, 10000);
 //La forme de l'objet
 var geometry = new THREE.BoxGeometry(1, 1, 1 );
 //Creation de l'objet
 var material = new THREE.MeshNormalMaterial();
 var box = new THREE.Mesh(geometry, material);
 box.rotation.x = 0.5;
 box.rotation.y = 1;
 box.rotation.z = 1.5;
 box.position.z = -5;
 scene.add(box);
 animate();
 function animate() {
 requestAnimationFrame(animate);
 box.rotation.x += 0.01;
 box.rotation.y += 0.02;
2 Mme DOUAR.A
 box.rotation.z += 0.03;
 renderer.render(scene, camera);
 }
 </script>
 </body>
 </html>