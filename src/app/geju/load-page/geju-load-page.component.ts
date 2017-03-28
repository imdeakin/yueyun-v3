/**
 * Created by deakin on 17-2-27.
 */
import { Component, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';

// import treeWave from '../../plugins/tree-wave'

declare let THREE: any;

let threeWave = (function () {

  let SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;

  let container;
  let camera, scene, renderer;

  let particles, particle, count = 0;

  let mouseX = -30, mouseY = -340;

  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;

  // init();

  function init(conId) {
    container = document.getElementById(conId);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;

    scene = new THREE.Scene();
    particles = new Array();

    let PI2 = Math.PI * 2;
    let material = new THREE.ParticleCanvasMaterial({

      color: 0xffffff,
      program: function (context) {

        context.beginPath();
        context.arc(0, 0, 1, 0, PI2, true);
        context.fill();

      }

    });

    let i = 0;

    for (let ix = 0; ix < AMOUNTX; ix++) {

      for (let iy = 0; iy < AMOUNTY; iy++) {

        particle = particles[i++] = new THREE.Particle(material);
        particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
        particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
        scene.add(particle);

      }

    }

    renderer = new THREE.CanvasRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);

    animate();
  }

  function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {

    camera.position.x += ( mouseX - camera.position.x ) * .05;
    camera.position.y += ( -mouseY - camera.position.y ) * .05;
    camera.lookAt(scene.position);

    let i = 0;

    for (let ix = 0; ix < AMOUNTX; ix++) {

      for (let iy = 0; iy < AMOUNTY; iy++) {

        particle = particles[i++];
        particle.position.y = ( Math.sin(( ix + count ) * 0.3) * 50 ) + ( Math.sin(( iy + count ) * 0.5) * 50 );
        particle.scale.x = particle.scale.y = ( Math.sin(( ix + count ) * 0.3) + 1 ) * 2 + ( Math.sin(( iy + count ) * 0.5) + 1 ) * 2;

      }

    }

    renderer.render(scene, camera);

    count += 0.1;
  }

  return {
    init: init
  }
})();

@Component({
  templateUrl: './geju-load-page.component.html',
  styleUrls: ['./geju-load-page.component.css']
})
export class GejuLoadPageComponent implements AfterViewInit {
  public id: string = 'load-page';

  constructor(private router: Router) {
  }

  public ngAfterViewInit(): void {
    threeWave.init(this.id);
    let $this = this;
    setTimeout(() => {
      $this.router.navigate(['/geju-home']);
    }, 3000);
  }
}
